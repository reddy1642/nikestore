import React from "react";
import { Link,useNavigate } from "react-router-dom";
import "./product.css";

function Products() {
  const navigate = useNavigate();

  const products = [
    { id: 1, name: "Nike Air Jordan", price: "$150", image: "/nikeairjordan.jpeg" },
    { id: 2, name: "Nike Air Force", price: "$130", image: "/nikeair1.jpg" },
    { id: 3, name: "Nike Air Force1", price: "$120", image: "/nikeair2.jpg" },
    { id: 4, name: "Nike Uptempo 1", price: "$140", image: "/nikeuptempo.jpeg" },
    { id: 5, name: "Nike Uptempo 2", price: "$145", image: "/nikeuptempo3.jpeg" },
    { id: 6, name: "Nike Uptempo 3", price: "$155", image: "/nikeuptempo2.jpeg" },
    { id: 7, name: "Nike Pegasus", price: "$125", image: "/nikepeagasus.jpeg" },
    { id: 8, name: "Nike Zoom Fly", price: "$135", image: "/nike zoomfly.jpeg" },
    { id: 9, name: "Nike React Infinity", price: "$160", image: "/nikereact.jpeg" },
    { id: 10, name: "Nike Free Run", price: "$110", image: "/nikefree.jpeg" },
    { id: 11, name: "Nike VaporMax", price: "$180", image: "/nikevapour.jpeg" },
    { id: 12, name: "Nike Metcon", price: "$100", image: "/nikemetcon.jpeg" },
    { id: 13, name: "Nike ZoomX", price: "$200", image: "/zoomx.jpeg" },
    { id: 14, name: "Nike Wildhorse", price: "$95", image: "/wildhorse.jpeg" },
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
            <Link to="/orderss">Orders</Link>
            <Link to="/about">About</Link>
            <Link to="/support">Support</Link>
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
