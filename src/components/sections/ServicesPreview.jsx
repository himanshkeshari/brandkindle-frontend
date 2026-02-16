import React from 'react'
import SectionTitle from "../common/SectionTitle";
import ServiceCard from "../common/ServiceCard";

import "./ServicesPreview.css";

// Import 8 images
import service1 from "../../assets/images/services/service1.png";
import service2 from "../../assets/images/services/service2.png";
import service3 from "../../assets/images/services/service3.png";
import service4 from "../../assets/images/services/service4.png";
import service5 from "../../assets/images/services/service5.png";
import service6 from "../../assets/images/services/service6.png";
import service7 from "../../assets/images/services/service7.png";
import service8 from "../../assets/images/services/service8.png";

function ServicesPreview() {

  const services = [
    {
      image: service1,
      title: "Web Development",
      description: "Modern responsive websites."
    },
    {
      image: service2,
      title: "SEO Optimization",
      description: "Rank higher on Google."
    },
    {
      image: service3,
      title: "Meta Ads",
      description: "High converting paid campaigns."
    },
    {
      image: service4,
      title: "Social Media",
      description: "Build strong brand presence."
    },
    {
      image: service5,
      title: "UI/UX Design",
      description: "Beautiful user experiences."
    },
    {
      image: service6,
      title: "E-commerce",
      description: "Sell products online easily."
    },
    {
      image: service7,
      title: "Brand Strategy",
      description: "Position your business smartly."
    },
    {
      image: service8,
      title: "Analytics",
      description: "Track and optimize performance."
    }
  ];

  return (
    <section className="services-preview">

      <SectionTitle
        title="Our Services"
        subtitle="We provide complete digital solutions"
      />

      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>

    </section>
  );
}

export default ServicesPreview;



