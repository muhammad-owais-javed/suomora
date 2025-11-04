// Footer.jsx
import React, { useState } from 'react';
import { 
  Mail,
  MapPin,
  FileText,
  Heart,
  ArrowUp,
  Linkedin,
  Twitter,
  Github,
  Instagram,
  Facebook,
  Youtube,
  Code,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import './Footer.css';
import logoIcon from '../assets/logo-icon-transparent.png';
 
const Footer = () => {
  const [email, setEmail] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Since no SMTP, we'll just open email client
    window.location.href = `mailto:contact@suomora.fi?subject=Newsletter Subscription&body=Please subscribe me to your newsletter. Email: ${email}`;
  };

  const quickLinks = [
    { name: 'Home', path: 'home' },
    { name: 'Services', path: 'services' },
  /*  { name: 'Products', path: 'products' },
    { name: 'Solutions', path: 'solutions' }, */
    { name: 'About', path: 'about' },
    { name: 'Contact', path: 'contact' }
  ];

  const services = [
    'UI/UX Design',
    'Application Development',
    'Migration Services',
    'Cloud Consultancy',
    'Cybersecurity'
  ];

  const socialLinks = [
  /*  { icon: Linkedin, url: 'https://linkedin.com', label: 'LinkedIn', color: '#0077b5' },
    { icon: Twitter, url: 'https://twitter.com', label: 'Twitter', color: '#1da1f2' },
    { icon: Github, url: 'https://github.com', label: 'GitHub', color: '#333333' },
    { icon: Instagram, url: 'https://instagram.com', label: 'Instagram', color: '#e4405f' },
    { icon: Facebook, url: 'https://facebook.com', label: 'Facebook', color: '#1877f2' },
    { icon: Youtube, url: 'https://youtube.com', label: 'YouTube', color: '#ff0000' } */
  ];

  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-container">
          {/* Company Info Section */}
          <div className="footer-section company-section">
            <div className="footer-logo">
              <div className="logo-icon">
                <img 
                  src={logoIcon} 
                  alt="SUOMORΛ Logo" 
                  className="logo-img"
                />
              </div>
              <span className="logo-text">SUOMORΛ</span>
            </div>
            <p className="company-description">
              Transform your digital visions into reality with our IT services & solutions. 
              Your trusted partner in digital excellence.
            </p>
            
            {/* Contact Info */}
            <div className="contact-info">
              <a href="mailto:contact@suomora.fi" className="contact-item">
                <div className="contact-icon">
                  <Mail size={18} />
                </div>
                <span>contact@suomora.fi</span>
              </a>
              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={18} />
                </div>
                <span>c/o Think Company Kumpula<br />Helsinki, Finland</span>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <FileText size={18} />
                </div>
                <span>Business ID: 3553515-2</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="social-links">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={social.label}
                    style={{ '--hover-color': social.color }}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="section-title">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.path)}
                    className="footer-link"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h3 className="section-title">Our Services</h3>
            <ul className="footer-links">
              {services.map((service, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="footer-link"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-section newsletter-section">
            <h3 className="section-title">Stay Updated</h3>
            <p className="newsletter-description">
              Subscribe to our newsletter for the latest insights, updates, and exclusive offers.
            </p>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <div className="input-wrapper">
                <Mail size={18} className="input-icon" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="newsletter-input"
                />
              </div>
              <button type="submit" className="subscribe-btn">
                <Sparkles size={18} />
                <span>Subscribe</span>
              </button>
            </form>
            <p className="newsletter-note">
              By subscribing, you agree to receive marketing emails from SUOMORΛ.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-content">
            <div className="copyright">
              <span>© {new Date().getFullYear()} SUOMORΛ. All rights reserved.</span>
              <span className="divider">•</span>
              <span className="made-with">
                Made with <Heart size={20} className="heart-icon" /> in Finland
              </span>
            </div>

            {/* Future Links - Ready for when you have them */}
            <div className="legal-links">
              {/* Uncomment when you have these pages ready
              <a href="/privacy" className="legal-link">
                Privacy Policy
              </a>
              <span className="divider">•</span>
              <a href="/terms" className="legal-link">
                Terms of Service
              </a>
              <span className="divider">•</span>
              */}
              <button onClick={() => scrollToSection('contact')} className="legal-link">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button 
        className="scroll-top-btn"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>

      {/* Decorative Elements */}
      <div className="footer-decoration">
        <div className="decoration-line line-1"></div>
        <div className="decoration-line line-2"></div>
        <div className="decoration-line line-3"></div>
      </div>
    </footer>
  );
};

export default Footer;