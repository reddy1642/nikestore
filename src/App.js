import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Home"; 
import LoginPage from "./login";
import SignUpForm from "./signup";
import Products from "./product";
import AddressPage from "./adresspage";
import OrdersPage from "./orders";
import AboutPage from "./about";
import ContactPage from "./contact";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import StripeCheckoutForm from './StripeCheckoutForm';

const stripePromise = loadStripe('pk_test_51QPSYoFSkIgZioxSuwQgxQzI2IgEhndKETMGQwth38GlsHcbGSMgreOmmMycBs0F2Rp4fcd2D5qwBphJiGBci6Ra00np7Zmfca');

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/product" element={<Products />} />
        <Route path="/adresspage" element={<AddressPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route 
          path="/stripecheckoutform" 
          element={
            <Elements stripe={stripePromise}>
              <StripeCheckoutForm />
            </Elements>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
