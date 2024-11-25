import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./login"; 
import SignUpForm from "./signup";
import Product from "./product";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/product" element={<Product />} />

      </Routes>
    </Router>
   

  );
}

export default App;
