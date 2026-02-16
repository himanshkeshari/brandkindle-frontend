import React from "react";
import "./WhyChooseUs.css";

import whyImage1 from "../../assets/images/why/why-image.png";
import whyImage2 from "../../assets/images/why/why-image1.png";

function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="why-container">

        {/* Left Content */}
        <div className="why-content">
          <h2>Why Choose Us</h2>
          <p>
            We help businesses grow with modern digital solutions,
            performance marketing strategies, and cutting-edge technologies.
          </p>

          <ul>
            <li>✔ Experienced Team</li>
            <li>✔ Data-Driven Strategy</li>
            <li>✔ Scalable Solutions</li>
            <li>✔ 24/7 Client Support</li>
          </ul>
        </div>

        {/* Right Images */}
        <div className="why-images">
          <img src={whyImage1} alt="Why Choose Us 1" className="img-main" />
          <img src={whyImage2} alt="Why Choose Us 2" className="img-secondary" />
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;
