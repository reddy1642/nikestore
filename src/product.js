import React from "react";
import { Link,useNavigate } from "react-router-dom";
import "./product.css";

function Products() {
  const navigate = useNavigate();

  const products = [
    { id: 1, name: "Flip flops", price: "$60", image: "/flipflop.jpg" },
    { id: 2, name: "Hoodie", price: "$100", image: "/hoodie.jpg" },
    { id: 3, name: "Jacket", price: "$120", image: "/jacket.jpg" },
    { id: 4, name: "Jeans", price: "$140", image: "/jeans.jpg" },
    { id: 5, name: "Nike Uptempo 2", price: "$145", image: "/nikeuptempo3.jpeg" },
    { id: 6, name: "Kids Wear", price: "$155", image: "/kidsdresswomen.jpg" },
    { id: 7, name: "Kids Tshirt", price: "$125", image: "/kidstshirt.jpg" },
    { id: 8, name: "Men Shirt", price: "$135", image: "/menshirt.jpg" },
    { id: 9, name: "Shoes", price: "$160", image: "/shoes.jpg" },
    { id: 10, name: "Travel bag", price: "$110", image: "/travelbag.jpg" },
    { id: 11, name: "Trouser", price: "$180", image: "/troser.jpg" },
    { id: 12, name: "Tshirt", price: "$100", image: "/tshirt.jpg" },
    { id: 13, name: "Watch", price: "$200", image: "/watch.jpg" },
    { id: 14, name: "Winter Jacket", price: "$95", image: "/winterjacket.jpg" },
  ];

  const handleOrderNow = (product) => {
    navigate("/adresspage", { state: { product } }); 
  };

  return (
    <div className="products-container">
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
      <h1>Welcome to the Store</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h3 className="product-name">{product.name}</h3>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <p className="product-price">{product.price}</p>
            <button
              className="order-button"
              onClick={() => handleOrderNow(product)}
            >
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
