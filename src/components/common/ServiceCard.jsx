import React from 'react'
import './ServiceCard.css'

function ServiceCard({ title, description, image }) {
  return (
    <div className="service-card">
      {image && <img src={image} alt={title} className="service-image" />}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;
