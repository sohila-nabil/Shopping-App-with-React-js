import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";
import Index from "./pages";
import Favourites from "./pages/favourites";
import ShoppingCart from "./components/contextApi/ShoppingCart";
import CartPage from './pages/CartPage';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <ShoppingCart>
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </Router>
        <Footer/>
      </ShoppingCart>
    </div>
  );
}

export default App;
