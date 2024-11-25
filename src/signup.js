import React from "react";
import { auth, database } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { useNavigate } from "react-router-dom";
import "./signup.css";

function SignUpForm() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const fullname = document.getElementById("fullname").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const repassword = document.getElementById("repassword").value;

    if (password !== repassword) {
      alert("Passwords do not match");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;


        set(ref(database, "users/" + user.uid), {
          fullname: fullname,
          username: username,
          email: email,
        });
        navigate("/");
      })
      .catch((error) => {
        console.error("Error registering user:", error.message);
        alert("Error: " + error.message);
      });
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name:</label>
          <input type="text" id="fullname" placeholder="Enter your full name" />
        </div>
        <div className="form-group">
          <label>Username:</label>
          <input type="text" id="username" placeholder="Enter your username" />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="form-group">
          <label>Re-enter Password:</label>
          <input
            type="password"
            id="repassword"
            placeholder="Re-enter your password"
          />
        </div>
        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>
      <div className="top-buttons">
        <button className="top-button">Home</button>
        <button className="top-button">Support</button>
      </div>
    </div>
  );
}

export default SignUpForm;
