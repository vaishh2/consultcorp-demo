import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // State for hamburger menu toggle

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);  // Close menu after clicking on mobile
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <span className="navbar-title">ConsultCorp Solutions</span>
      </div>

      {/* Hamburger Menu Button (visible on mobile) */}
      <button className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Nav Links */}
      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
        </li>
        <li>
          <Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
        </li>
        <li>
          <button onClick={() => handleScroll("clients")}>Clients</button>
        </li>
        <li>
          <button onClick={() => handleScroll("contact")}>Contact</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;