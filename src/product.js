import React from "react";
import "./Product.css"; 

function Products() {
  const products = [
    {
      name: "Nike Air Jordan",
      image: "scr = nikeairjordan.jpg", 
    },
    {
      name: "Nike Air Force",
      image: "src = nikeair1.jpg", 
    },
    {
      name: "Nike Air Force1",
      image: "src = nikeair2.jpg", 
    },
  ];

  return (
    <div className="products-container">
      <header className="products-header">
        <h1>Welcome to Store....</h1>
        <input
          type="text"
          className="explore-input"
          placeholder="Shop to Explore...."
        />
      </header>
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
        />
      </div>
      <div className="products-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <h3 className="product-name">{product.name}</h3>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <button className="order-button">Order Now</button>
          </div>
        ))}
      </div>
      <div className="top-buttons">
        <button className="nav-button">Home</button>
        <button className="nav-button">Support</button>
        <button className="nav-button">Profile</button>
      </div>
    </div>
  );
}

export default Products;
