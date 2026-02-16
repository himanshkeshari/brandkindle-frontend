import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";

import heroMain from "../../assets/images/hero/hero-main.png";
// import shape1 from "../../assets/images/hero/shape1.png";
// import shape2 from "../../assets/images/hero/shape2.png";
// import shape3 from "../../assets/images/hero/shape3.png";

import "./Hero.css";

function Hero() {
  const navigate = useNavigate();

  useEffect(() => {
    const hero = document.querySelector(".hero-content");
    hero.classList.add("show");
  }, []);

  return (
    <section className="hero">

      <div className="blur blob1"></div>
      <div className="blur blob2"></div>

      <div className="hero-container">

        <div className="hero-left hero-content">
          <h1>
            Build Digital <span>Experiences</span> That Convert
          </h1>

          <p>
            We design and develop high-performance websites and 
            marketing systems that grow your business online.
          </p>

          <div className="hero-buttons">
            <Button 
              text="Get Started" 
              onClick={() => navigate("/contact")} 
            />
            
            <Button 
              text="Learn More" 
              type="secondary"
              onClick={() => navigate("/about")} 
            />
          </div>
        </div>

        <div className="hero-right">
          <img src={heroMain} alt="Main" className="hero-main" />
          {/* <img src={shape1} alt="" className="shape shape1" />
          <img src={shape2} alt="" className="shape shape2" />
          <img src={shape3} alt="" className="shape shape3" /> */}
        </div>

      </div>
    </section>
  );
}

export default Hero;
