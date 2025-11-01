// src/components/Footer.jsx
import React from 'react';
import { Code } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Code size={28} color="#6366f1" />
            <span className="footer-brand-text">Soumora</span>
          </div>
          <p className="footer-text">
            © {currentYear} Soumora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
