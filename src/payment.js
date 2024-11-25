import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./payment.css";

function PaymentPage() {
  const location = useLocation();
  const { product, address } = location.state; 

  const handlePayment = (event) => {
    event.preventDefault();
    alert("Payment processed successfully!");
  };

  return (
    <div className="payment-page">
      <header className="payment-header">
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

      <div className="payment-container">
        <h1>Payment Details</h1>
        <div className="order-summary">
          <p><strong>Product:</strong> {product.name}</p>
          <p><strong>Price:</strong> {product.price}</p>
          <p><strong>Delivery Address:</strong> {address}</p>
        </div>

        <form className="payment-form" onSubmit={handlePayment}>
          <label htmlFor="cardholder">Cardholder Name:</label>
          <input
            type="text"
            id="cardholder"
            placeholder="Enter cardholder's name"
            required
          />

          <label htmlFor="cardnumber">Card Number:</label>
          <input
            type="text"
            id="cardnumber"
            placeholder="Enter your card number"
            maxLength="16"
            required
          />

          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            placeholder="Enter CVV"
            maxLength="3"
            required
          />

          <div className="expiry-fields">
            <div>
              <label htmlFor="month">Month:</label>
              <input
                type="number"
                id="month"
                placeholder="MM"
                min="1"
                max="12"
                required
              />
            </div>
            <div>
              <label htmlFor="year">Year:</label>
              <input
                type="number"
                id="year"
                placeholder="YYYY"
                min={new Date().getFullYear()}
                required
              />
            </div>
          </div>

          <button type="submit" className="pay-button">Pay Now</button>
        </form>
      </div>
    </div>
  );
}

export default PaymentPage;
