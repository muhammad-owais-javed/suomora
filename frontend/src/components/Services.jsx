// Services.jsx
import React, { useState, useEffect, useRef } from 'react';
import { 
  Palette, 
  Code2, 
  RefreshCw, 
  Cloud, 
  Shield, 
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import './Services.css';

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const services = [
    {
      id: 1,
      name: 'UI/UX Design',
      desc: 'Modern User Interfaces',
      icon: Palette,
      color: '#3b82f6',
      gradient: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
      details: 'Create stunning, intuitive designs that captivate users and drive engagement.',
      features: [
        'User Research & Testing',
        'Wireframing & Prototyping',
        'Responsive Design Systems',
        'Brand Identity Design'
      ]
    },
    {
      id: 2,
      name: 'Application Development',
      desc: 'Custom Web Solutions',
      icon: Code2,
      color: '#8b5cf6',
      gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
      details: 'Build powerful, scalable applications tailored to your business needs.',
      features: [
        'Full-Stack Development',
        'API Integration',
        'Progressive Web Apps',
        'E-commerce Solutions'
      ]
    },
    {
      id: 3,
      name: 'Migration Services',
      desc: 'Web Hosting Migration',
      icon: RefreshCw,
      color: '#ec4899',
      gradient: 'linear-gradient(135deg, #ec4899, #f43f5e)',
      details: 'Seamlessly migrate your applications with zero downtime and data integrity.',
      features: [
        'Zero-Downtime Migration',
        'Data Backup & Recovery',
        'Platform Migration',
        'Post-Migration Support'
      ]
    },
    {
      id: 4,
      name: 'Cloud Consultancy',
      desc: 'Scalable Cloud Infrastructure',
      icon: Cloud,
      color: '#06b6d4',
      gradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
      details: 'Optimize your infrastructure with expert cloud architecture and strategy.',
      features: [
        'Cloud Strategy Planning',
        'AWS/Azure/GCP Solutions',
        'Cost Optimization',
        'DevOps Implementation'
      ]
    },
    {
      id: 5,
      name: 'Cybersecurity',
      desc: 'Data Protection & Compliance',
      icon: Shield,
      color: '#f59e0b',
      gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
      details: 'Protect your digital assets with enterprise-grade security solutions.',
      features: [
        'Security Audits',
        'Vulnerability Assessments',
        'Compliance Management',
        '24/7 Threat Monitoring'
      ]
    },
    {
      id: 6,
      name: 'IT Consulting',
      desc: 'Strategic Technology Advisory',
      icon: Sparkles,
      color: '#10b981',
      gradient: 'linear-gradient(135deg, #10b981, #06b6d4)',
      details: 'Transform your business with expert IT strategy and digital transformation consulting.',
      features: [
        'Digital Transformation',
        'Technology Roadmapping',
        'System Architecture Design',
        'IT Cost Optimization'
      ]
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  return (
    <section 
      id="services" 
      className="services-section"
      ref={sectionRef}
    >
      {/* Decorative Background Elements */}
      <div className="services-bg-pattern"></div>
      <div className="services-gradient-orb orb-left"></div>
      <div className="services-gradient-orb orb-right"></div>

      <div className="services-container">
        {/* Section Header */}
        <div className={`services-header ${isVisible ? 'visible' : ''}`}>
          <div className="section-badge">
            <Sparkles size={16} />
            <span>What We Offer</span>
          </div>
          <h2 className="section-title">
            <span className="title-highlight">IT Services, Solutions & Consultancy</span>
          </h2>
          <p className="section-description">
            From concept to deployment, we deliver end-to-end IT services, solutions & consultancy to
            transform your digital vision into reality.
          </p>
        </div>

        {/* Services Grid */}
        <div className={`services-grid ${isVisible ? 'visible' : ''}`}>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`service-card ${activeService === index ? 'active' : ''}`}
                onMouseEnter={() => setActiveService(index)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-background">
                  <div 
                    className="card-gradient" 
                    style={{ background: service.gradient }}
                  ></div>
                </div>

                <div className="card-content">
                  {/* Icon */}
                  <div 
                    className="service-icon"
                    style={{ background: service.gradient }}
                  >
                    <Icon size={28} />
                  </div>

                  {/* Service Info */}
                  <div className="service-info">
                    <h3 className="service-name">{service.name}</h3>
                    <p className="service-desc">{service.desc}</p>
                  </div>

                  {/* Service Details */}
                  <p className="service-details">{service.details}</p>

                  {/* Features List */}
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="feature-item">
                        <CheckCircle2 size={16} className="feature-check" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className="service-btn">
                    <span>Learn More</span>
                    <ArrowRight size={18} className="btn-arrow" />
                  </button>
                </div>

                {/* Hover Effect Overlay */}
                <div className="card-shine"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`services-cta ${isVisible ? 'visible' : ''}`}>
          <div className="cta-content">
            <h3 className="cta-title">Ready to Transform Your Business?</h3>
            <p className="cta-description">
              Let's discuss how our services can help you achieve your digital goals.
            </p>
          </div>
          <button className="cta-button">
            <span>Schedule a Consultation</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;