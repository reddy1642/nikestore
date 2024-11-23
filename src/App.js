import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./login"; 
import SignUpForm from "./signup";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpForm />} />

      </Routes>
    </Router>
   

  );
}

export default App;
