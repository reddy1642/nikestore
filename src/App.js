import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./login";
import SignUpForm from "./signup";
import Products from "./product";
import AddressPage from "./adresspage";
import PaymentPage from "./payment";

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
      </Routes>
    </Router>
  );
}

export default App;
