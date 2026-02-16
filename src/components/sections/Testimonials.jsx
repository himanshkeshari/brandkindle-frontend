import React from "react";
import "./Testimonials.css";

import testImg1 from "../../assets/images/testimonials/test1.jpg";
import testImg2 from "../../assets/images/testimonials/test2.jpg";

function Testimonials() {
  return (
    <section className="testimonial-section">
      <div className="testimonial-container">

        {/* Left Images */}
        <div className="testimonial-images">
          <img src={testImg1} alt="Client 1" className="img-main" />
          <img src={testImg2} alt="Client 2" className="img-secondary" />
        </div>

        {/* Right Content */}
        <div className="testimonial-content">
          <h2>What Our Clients Say</h2>
          <p className="testimonial-text">
            “Working with this team completely transformed our online presence.
            Our traffic increased by 200% and sales doubled within months.”
          </p>

          <div className="client-info">
            <h4>John Anderson</h4>
            <span>CEO, GrowthTech</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
