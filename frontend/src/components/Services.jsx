// src/components/Services.jsx
import React from 'react';
import { Code, Smartphone, Globe, Zap } from 'lucide-react';
import './Services.css'; // Import the CSS for this component

const Services = () => {
  const servicesList = [
    {
      icon: <Code size={40} />,
      title: 'Web Development',
      description: 'Custom websites and full stack web applications development.'
    },
    {
      icon: <Smartphone size={40} />,
      title: 'Hosing and Web Migration',
      description: 'Providing full scale hosting and migration services for your web application.'
    },
    {
      icon: <Globe size={40} />,
      title: 'Cloud Consulting',
      description: 'Comprehensive digital solutions to elevate your online presence.'
    },
    {
      icon: <Zap size={40} />,
      title: 'Performance Optimization',
      description: 'Lightning-fast websites optimized for speed and user experience.'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">Comprehensive solutions tailored to your needs.</p>
        
        <div className="services-grid">
          {servicesList.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
