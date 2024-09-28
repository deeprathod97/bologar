// src/components/Card.js
import React from 'react';
import './Card.css'; // Optional, for styling

const Card = ({ title, image, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-img" />
      <div className="card-body">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
