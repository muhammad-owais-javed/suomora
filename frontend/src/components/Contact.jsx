// Contact.jsx
import React, { useState, useEffect, useRef } from 'react';
import { 
  Mail,
  Send,
  CheckCircle2,
  Sparkles,
  MessageSquare,
  Clock,
  Globe,
  Twitter,
  Github,
  Copy,
  Check
} from 'lucide-react';

//import { Linkedin, Facebook, Github, Twitter, Instagram } from 'react-simple-icons';

const LinkedinIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
 );

import './Contact.css';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contact@suomora.fi');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactReasons = [
    {
      icon: MessageSquare,
      title: 'Project Inquiry',
      description: 'Have a project in mind? Let\'s discuss how we can bring your vision to life.',
      color: '#3b82f6'
    },
    {
      icon: Globe,
      title: 'Partnership',
      description: 'Interested in collaboration? We\'re always open to exploring new opportunities.',
      color: '#8b5cf6'
    },
    {
      icon: Send,
      title: 'General Questions',
      description: 'Need information about our services? We\'re here to help answer your questions.',
      color: '#06b6d4'
    }
  ];

  const quickInfo = [
    {
      icon: Clock,
      title: 'Response Time',
      value: 'Within 24 hours',
      desc: 'We typically respond to all inquiries within one business day'
    },
    {
      icon: Globe,
      title: 'Global Presence',
      value: '2 Countries',
      desc: 'Serving clients worldwide with remote-first approach'
    },
    {
      icon: CheckCircle2,
      title: 'Success Rate',
      value: '98% Satisfaction',
      desc: 'Client satisfaction is our top priority'
    }
  ];

  return (
    <section 
      id="contact" 
      className="contact-section"
      ref={sectionRef}
    >
      {/* Background Elements */}
      <div className="contact-bg-gradient"></div>
      <div className="contact-grid-pattern"></div>
      <div className="floating-orb orb-1"></div>
      <div className="floating-orb orb-2"></div>

      <div className="contact-container">
        {/* Section Header */}
        <div className={`contact-header ${isVisible ? 'visible' : ''}`}>
          <div className="section-badge">
            <Sparkles size={16} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            <span className="title-highlight">Let's Start a Conversation</span>
          </h2>
          <p className="section-description">
            Ready to create or transform your digital presence? Drop us an email and let's discuss 
            how we can help you achieve your goals. We're excited to hear from you!
          </p>
        </div>

        {/* Main Contact Card */}
        <div className={`main-contact-card ${isVisible ? 'visible' : ''}`}>
          <div className="contact-card-decoration">
            <div className="decoration-circle circle-1"></div>
            <div className="decoration-circle circle-2"></div>
            <div className="decoration-circle circle-3"></div>
          </div>

          <div className="contact-card-content">
            {/* Email Display */}
            <div className="email-display-section">
              <div className="email-icon-wrapper">
                <div className="email-icon-bg">
                  <Mail size={40} />
                </div>
                <div className="icon-pulse"></div>
              </div>

              <div className="email-content">
                <p className="email-label">Send us an email at</p>
                <a 
                  href="mailto:contact@suomora.fi" 
                  className="email-address"
                >
                  contact@suomora.fi
                </a>
                <p className="email-subtitle">
                  We'd love to hear about your project
                </p>
              </div>

              <button 
                className={`copy-button ${copied ? 'copied' : ''}`}
                onClick={handleCopyEmail}
              >
                {copied ? (
                  <>
                    <Check size={20} />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={20} />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Action Buttons */}
            <div className="quick-actions">
              <a 
                href="mailto:contact@suomora.fi?subject=Project Inquiry" 
                className="action-button primary"
              >
                <Send size={20} />
                <span>Send Email Now</span>
              </a>
              <a 
                href="mailto:contact@suomora.fi?subject=Schedule Meeting" 
                className="action-button secondary"
              >
                <MessageSquare size={20} />
                <span>Schedule a Call</span>
              </a>
            </div>

            {/* Divider */}
            <div className="content-divider">
              <span>or reach out for</span>
            </div>

            {/* Contact Reasons */}
            <div className="contact-reasons">
              {contactReasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <div 
                    key={index}
                    className={`reason-card ${hoveredCard === index ? 'hovered' : ''}`}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div 
                      className="reason-icon"
                      style={{ background: `linear-gradient(135deg, ${reason.color}, ${reason.color}dd)` }}
                    >
                      <Icon size={24} />
                    </div>
                    <div className="reason-content">
                      <h4 className="reason-title">{reason.title}</h4>
                      <p className="reason-description">{reason.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Quick Info Cards */}
      {/*  <div className={`quick-info-section ${isVisible ? 'visible' : ''}`}>
          {quickInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div key={index} className="info-card">
                <div className="info-icon">
                  <Icon size={24} />
                </div>
                <div className="info-content">
                  <h4 className="info-title">{info.title}</h4>
                  <p className="info-value">{info.value}</p>
                  <p className="info-desc">{info.desc}</p>
                </div>
              </div>
            );
          })}
        </div> */}

        {/* Social Links */}
        <div className={`social-section ${isVisible ? 'visible' : ''}`}>
          <h3 className="social-title">Connect With Us</h3>
          <p className="social-description">
            Follow us on social media for the latest updates and insights
          </p>
          <div className="social-links">
            <a 
              href="https://www.linkedin.com/company/suomora/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link linkedin"
            >
              <LinkedinIcon size={24} /> 

            </a>
          {/*  <a 
              href="https://twitter.fi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link twitter"
            >
              <Twitter size={24} />
              <span>Twitter</span>
            </a>
            <a 
              href="https://github.fi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link github"
            >
              <Github size={24} />
              <span>GitHub</span>
            </a> */}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`bottom-cta ${isVisible ? 'visible' : ''}`}>
          <div className="cta-content">
            <h3 className="cta-title">Ready to Get Started?</h3>
            <p className="cta-description">
              Your next great project is just one email away. Let's make it happen together.
            </p>
          </div>
          <a 
            href="mailto:contact@suomora.fi" 
            className="cta-button"
          >
            <Mail size={20} />
            <span>Email Us Now</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;