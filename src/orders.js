import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ref, get } from "firebase/database";
import { database } from "./firebase";
import "./orders.css";

function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const ordersRef = ref(database, "orders");
    
    get(ordersRef).then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const ordersList = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setOrders(ordersList);
      } else {
        console.log("No orders found");
      }
    }).catch((error) => {
      console.error("Error fetching orders:", error);
    });
  }, []);

  return (

    <div className="orders-page">
        <header className="orders-header">
        <nav>
          <ul>
            <li>
              <Link to="/product">Home</Link>
              <Link to="/orders">Orders</Link>
              <Link to="/about">About</Link>
              <Link to="/support">Support</Link>
            </li>
          </ul>
        </nav>
      </header>
      <h1>Your Orders</h1>
      {orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              <h3>{order.product.name}</h3>
              <p><strong>Price:</strong> {order.product.price}</p>
              <p><strong>Address:</strong> {order.address}</p>
              <p><strong>Date:</strong> {order.date}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default OrdersPage;
