import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./login";
import SignUpForm from "./signup";
import Products from "./product";
import AddressPage from "./adresspage";
import PaymentPage from "./payment";
import OrdersPage from "./orders";
import AboutPage from "./about";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/product" element={<Products />} />
        <Route path="/adresspage" element={<AddressPage />} /> 
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/about" element={<aboutPage/>} /> 
      </Routes>
    </Router>
  );
}

export default App;
