import React from "react";
import { Link } from "react-router-dom";
import firebase from './firebase';
import './login.css';

function LoginPage() {
  const handleSubmit = (event) => {
    event.preventDefault(); 
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  };

  return (
    <div>
      <header>
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/support" className="nav-link">Support</Link>
            </li>
          </ul>
        </nav>
      </header>

      
      <div className="login-container">
        <div className="login-box">
          <h2 className="login-title">Login to NikeStore</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" placeholder="Enter your username" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter your password" />
            </div>
            <button type="submit" className="login-button">Login</button>
          </form>
          <div className="signup-link">
            <p>Not a member?</p>
            <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
