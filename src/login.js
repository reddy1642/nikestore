import React from "react";
import "./LoginPage.css";

function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login to NikeStore</h2>
        <form>
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
          <a href="/signup">Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;