import React from "react";
import "./CTASection.css";
import ctaImage from "../../assets/images/cta/cta-image.jpg";

function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-container">

        {/* Left Content */}
        <div className="cta-content">
          <h2>Ready to Grow Your Business?</h2>
          <p>
            Let’s build powerful digital solutions that drive real results.
            Start your journey with us today.
          </p>

          <div className="cta-buttons">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">Contact Us</button>
          </div>
        </div>

        {/* Right Image */}
        <div className="cta-image">
          <img src={ctaImage} alt="Call To Action" />
        </div>

      </div>
    </section>
  );
}

export default CTASection;
