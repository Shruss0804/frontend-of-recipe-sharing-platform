import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css';  // If it's inside a styles folder


const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isScrollingUp , setIsScrollingUp] = useState(true);
  let lastScrollY = window.scrollY;

  // Navbar hide/show logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setIsScrollingUp(true); // Show navbar when scrolling up
      } else {
        setIsScrollingUp(false); // Hide navbar when scrolling down
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Navbar */}
      <nav className={`Navbar $ {isScrollingUp ? "show" : "hide"}`}>
        <div className="nav-left">
          <h2>TasteBud Gourmet</h2>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/recipes">Recipes</Link>
          </div>
        </div>

        {/* Right Side - Login, Register */}
        <div className="nav-right">
          <Link to="/login" className="login-btn">Login</Link>
          <Link to="/register" className="register-btn">Register</Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="menu-icon" onClick={() => setSidebarOpen(true)}>
          ☰
        </div>
      </nav>

      {/* Sidebar for Small Screens */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setSidebarOpen(false)}>✖</button>
        <Link to="/" onClick={() => setSidebarOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setSidebarOpen(false)}>About</Link>
        <Link to="/recipes" onClick={() => setSidebarOpen(false)}>Recipes</Link>
        <Link to="/login" className="login-btn" onClick={() => setSidebarOpen(false)}>Login</Link>
        <Link to="/register" className="register-btn" onClick={() => setSidebarOpen(false)}>Register</Link>
      </div>
    </>
  );
};

export default Navbar;
