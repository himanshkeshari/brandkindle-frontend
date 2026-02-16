import React from "react";
import "./About.css";

import about1 from "../assets/images/about/about-1.jpg";
import about2 from "../assets/images/about/about-2.jpg";
import about3 from "../assets/images/about/about-3.jpg";

function About() {
  return (
    <section className="about">
      <div className="about-container">

        {/* Left Content */}
        <div className="about-content">
          <h2>About Our Agency</h2>
          <p>
            We are a creative digital agency focused on building powerful
            digital experiences. Our team combines innovation and strategy
            to help businesses grow online.
          </p>

          <p>
            From web development to branding and marketing, we deliver
            complete digital solutions tailored to your goals.
          </p>

          <button className="about-btn">Learn More</button>
        </div>

        {/* Right Images Grid */}
        <div className="about-images">
          <img src={about1} alt="Team Work" className="img1" />
          <img src={about2} alt="Office" className="img2" />
          <img src={about3} alt="Meeting" className="img3" />
        </div>

      </div>
    </section>
  );
}

export default About;
