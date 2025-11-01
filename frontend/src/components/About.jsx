// src/components/About.jsx
import React from 'react';
import './About.css'; 

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="section-title" style={{textAlign: 'left'}}>About Us</h2>
            <p className="about-text">
              Our Mission: To make establishing a professional and secure online presence straightforward and affordable for every small business and entrepreneur, ensuring you can compete effectively in the digital world.
            </p>
            <p className="about-text">
              Our Vision: To be the trusted web service provider across Finland and international markets, recognized for delivering immense security, reliable support, and a genuinely customer first approach in every project.
            </p>
          </div>
          <div className="about-image-container">
            <div className="about-image-placeholder"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
