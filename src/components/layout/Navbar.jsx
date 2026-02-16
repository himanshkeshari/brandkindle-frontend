import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      
      <div className="navbar-logo">
        <NavLink to="/">
          <img src={logo} alt="Company Logo" />
        </NavLink>
      </div>

      
      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li>
          <NavLink to="/" end>Home</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio">Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>

      
      <div className="navbar-cta">
        <NavLink to="/contact">
          <button>Get Quote</button>
        </NavLink>
      </div>

      
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

    </nav>
  );
}

export default Navbar;
