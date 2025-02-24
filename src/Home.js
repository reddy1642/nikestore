import React from "react"; 
import { Link, useNavigate } from "react-router-dom"; 
import "./Home.css";

const HomePage = () => {
  const navigate = useNavigate(); 

  const handleSubmit = () => {
    navigate("/login"); 
  };

  return (
    <div className="home-page">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Support</Link>
          </li>
        </ul>
      </nav>

      <h2 className="login-title">Welcome to Amazon!</h2>
      <p>Explore the latest styles and trends</p>

      <button 
        type="submit" 
        className="explore-button" 
        onClick={handleSubmit} 
      >
        Explore
      </button>
    </div>
  );
};

export default HomePage;
