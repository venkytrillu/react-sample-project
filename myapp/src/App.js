import React from "react";
import Contact from "./Components/Contact.jsx";
import Home from "./Components/Home.jsx";
import Loginform from "./Components/Loginform.jsx";
import Privacy from "./Components/Privacy.jsx";
import Signup from "./Components/Signup.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar 2.jsx";
import "./App.css";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/loginform" element={<Loginform />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
