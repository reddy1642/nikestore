import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from "firebase/database";
import { auth } from './firebase'; 
import { Link } from 'react-router-dom';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    const db = getDatabase();
    const ordersRef = ref(db, 'orders');
    

    onValue(ordersRef, (snapshot) => {
      const data = snapshot.val();
      const userOrders = [];
      
      
      for (let id in data) {
        if (data[id].userId === auth.currentUser?.uid) {
          userOrders.push(data[id]);
        }
      }

      setOrders(userOrders);
    });
  }, []);

  return (
    <div>
      <header className="products-header">
        <nav>
          <ul>
            <li>
              <Link to="/product">Home</Link>
              <Link to="/orders">Orders</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Support</Link>
              <Link to="/login">Signout</Link>
            </li>
          </ul>
        </nav>
      </header>
      <h1>Your Orders</h1>
      <div>
        {orders.length === 0 ? (
          <p>No orders found</p>
        ) : (
          orders.map((order, index) => (
            <div key={index} className="order">
              <h2>{order.productName}</h2>
              <img src={order.productImage} alt={order.productName} />
              <p>Price: {order.productPrice}</p>
              <p>Shipping Address: {order.shippingAddress}</p>
              <p>Date: {new Date(order.date).toLocaleString()}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default OrdersPage;
