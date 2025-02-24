import React from 'react';
import { Link } from 'react-router-dom';
import './about.css';

function AboutPage() {
  return (
    <div className="about-page">
      <header className="about-header">
        <nav>
          <ul>
            <li>
              <Link to="/product">Home</Link>
              <Link to="/orders">Orders</Link>
              <Link to="/about" className="active">About</Link>
              <Link to="/contact">Support</Link>
              <Link to="/login">Signout</Link>
            </li>
          </ul>
        </nav>
      </header>

      <section className="about-content">
        <h1>About Us</h1>
        <p>Welcome to our platform! We are dedicated to providing top-quality products and excellent customer service.</p>
        <p>Our mission is to deliver a seamless shopping experience while keeping you informed every step of the way.</p>
        
        <h2>Our Story</h2>
        <p>We started as a small online store and have grown over the years, thanks to the support of our loyal customers. Our team is constantly working to improve our offerings and provide the best possible service.</p>

        <h2>Contact Us</h2>
        <p>If you have any questions, feel free to reach out through our <Link to="/contact">Support</Link> page.</p>
      </section>
    </div>
  );
}

export default AboutPage;
