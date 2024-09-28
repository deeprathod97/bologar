// src/components/AboutDeveloper.js
import React from 'react';
import './About.css';  // Create this CSS file for styling

const AboutDeveloper = () => {
  return (
    <div className="about-developer-container">
      <div className="about-developer-content">
        <h1>About Developer - Deep Rathod</h1>
        <img
          src="https://media-pnq1-2.cdn.whatsapp.net/v/t61.24694-24/459067139_1692347884947539_3793527228285943165_n.jpg?ccb=11-4&oh=01_Q5AaIFmR8E4epTDlrHz7Yqj_f5gnUaSLtJkbiN1DlVLFm7z1&oe=67027A62&_nc_sid=5e03e0&_nc_cat=102"  // Replace with your image URL
          alt="Deep Rathod"
          className="developer-photo"
        />
        <p>
          Hello! I'm <strong>Deep Rathod</strong>, a passionate developer with experience in
          JavaScript, React, and web development. I enjoy creating intuitive and efficient
          web applications that solve real-world problems. My focus is on building
          clean, responsive, and user-friendly interfaces.
        </p>
        <p>
          My expertise spans across various technologies including HTML, CSS, JavaScript,
          React.js, and backend development with Node.js. I'm always excited to learn
          new tools and frameworks, keeping up with the fast-evolving tech industry.
        </p>
        <p>
          If you'd like to know more about my work or want to collaborate, feel free to
          reach out through the contact page or connect with me on social media!
        </p>
      </div>
    </div>
  );
};

export default AboutDeveloper;
