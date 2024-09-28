// src/components/Contact.js
import React from 'react';
import './Contact.css';  // Import the CSS file for Contact page styling

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>If you have any questions or want to reach out, feel free to contact us!</p>
      <div className="contact-info">
        <p><strong>Phone:</strong> <a href="tel:9737468847">9737468847</a></p>
        <p><strong>Email:</strong> <a href="mailto:deeprathod788@gmail.com">deeprathod788@gmail.com</a></p>
      </div>
    </div>
  );
};

export default Contact;
