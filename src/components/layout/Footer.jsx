import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

       
        <div className="footer-about">
          <h2>Brand Kindle</h2>
          <p>
            We build modern digital solutions to help your business grow online.
          </p>

         
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

      
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/portfolio">Portfolio</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>

        
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: brandkindle111@gmail.com</p>
          <p>Phone: +91 6205082571</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} DigitalAgency. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
