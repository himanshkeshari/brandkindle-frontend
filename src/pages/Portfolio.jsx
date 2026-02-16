import React from "react";
import "./Portfolio.css";

import project1 from "../assets/images/portfolio/project-1.jpg";
import project2 from "../assets/images/portfolio/project-2.jpg";
import project3 from "../assets/images/portfolio/project-3.jpg";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2>Our Work</h2>

      <div className="portfolio-grid">

        <div className="portfolio-item">
          <img src={project1} alt="Project 1" />
          <div className="overlay">
            <h3>E-Commerce Website</h3>
          </div>
        </div>

        <div className="portfolio-item">
          <img src={project2} alt="Project 2" />
          <div className="overlay">
            <h3>Marketing Campaign</h3>
          </div>
        </div>

        <div className="portfolio-item">
          <img src={project3} alt="Project 3" />
          <div className="overlay">
            <h3>Business Branding</h3>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Portfolio;
