import React from "react";
import { Link } from "react-router-dom";
import firebase from './firebase';
import "./SignUpForm.css"; 

function SignUpForm() {
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
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then((userCredential) => {
            
            const user = userCredential.user;
        
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          
          });
      };
  return (
    <div className="signup-container">
      <h1>Sign Up ...</h1>
      <form className="signup-form">
        <div className="form-group">
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label>Full Name:</label>
          <input type="text" placeholder="Enter your full name" />
        </div>
        <div className="form-group">
          <label>Username:</label>
          <input type="text" placeholder="Enter your username" />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <div className="form-group">
          <label>Re-enter Password:</label>
          <input type="password" placeholder="Re-enter your password" />
        </div>
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
      <div className="top-buttons">
        <button className="top-button">Home</button>
        <button className="top-button">Support</button>
      </div>
    </div>
  );
}

export default SignUpForm;
