import React from "react";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth"; 
import { Link, useNavigate } from "react-router-dom"; 
import "./login.css";

function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = document.getElementById("username").value; 
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/product");
      })
      .catch((error) => {
        console.error("Login error:", error.message);
        alert("Error: " + error.message);
      });
  };

  return (
    <div className="login-page">
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

      <div className="login-box">
        <h2 className="login-title">Login to NikeStore</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Email</label>
            <input
              type="email"
              id="username"
              placeholder="Enter your email"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="signup-link">
          <p>Not a member?</p>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
