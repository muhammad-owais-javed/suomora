// Header.jsx
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Search, Mail } from 'lucide-react';
import logoIcon from '../assets/logo-icon-transparent.png';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const menuItems = [
    { name: 'Home', path: 'home' },
    { 
      name: 'Services', 
      path: 'services',
      dropdown: [
        { name: 'UI/UX Design', desc: 'Modern User Interfaces' },
        { name: 'Application Development', desc: 'Custom Web Solutions' },
        { name: 'Migration Services', desc: 'Web Hosting Migration' },
        { name: 'Cloud Consultancy', desc: 'Scalable Cloud Infrastructure' },
        { name: 'Cybersecurity', desc: 'Data Protection & Compliance' }
      ]
    },
    { 
      name: 'Products', 
      path: 'products',
      dropdown: [
        { name: '', desc: 'Coming Soon!' }
      /*  { name: 'Developer Tools', desc: 'API & Resources' },  */
      ]
    },
    { 
      name: 'Solutions', 
      path: 'solutions',
      dropdown: [
        { name: '', desc: 'In Progress!' }
      /*  { name: 'For Startups', desc: 'Scale your business' },
        { name: 'For Enterprise', desc: 'Enterprise-grade solutions' },
        { name: 'For Agencies', desc: 'White-label services' },
        { name: 'For E-commerce', desc: 'Online store solutions' }  */
      ] 
    },
    { 
      name: 'About', 
      path: 'about',
      dropdown: [
        { name: 'Our Story', desc: 'Learn about us' },
        { name: 'Careers', desc: 'Join our team' },
      ]
    },
    { 
      name: 'Resources', 
      path: 'resources',
    },
  ];

  return (
    <>
      <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="header-container">
          <div className="header-content">
            {/* Logo */}
            <div className="logo" onClick={() => scrollToSection('home')}>
              <div className="logo-image">
                <img 
                  src={logoIcon}  
                  alt="Suomora Logo" 
                  className="logo-img"
                />
              </div>
              <span className="logo-text">SUOMORΛ</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="nav-desktop">
              {menuItems.map((item) => (
                <div 
                  key={item.name}
                  className="nav-item"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => !item.dropdown && scrollToSection(item.path)}
                    className="nav-link"
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown size={16} className="nav-chevron" />}
                  </button>

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="dropdown-menu">
                      <div className="dropdown-content">
                        {item.dropdown.map((subItem, idx) => (
                          <button
                            key={idx}
                            onClick={() => scrollToSection(item.path)}
                            className="dropdown-item"
                          >
                            <div className="dropdown-item-title">
                              {subItem.name}
                            </div>
                            <div className="dropdown-item-desc">
                              {subItem.desc}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="header-actions">
              {/* Search */}
              <button 
                onClick={() => setSearchOpen(!searchOpen)}
                className="action-btn search-btn"
              >
                <Search size={20} />
              </button>

              {/* Contact Button */}
              <button 
                onClick={() => scrollToSection('contact')}
                className="contact-btn"
              >
                <Mail size={18} />
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="search-bar">
            <div className="header-container">
              <input
                type="text"
                placeholder="Search..."
                autoFocus
                className="search-input"
              />
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-overlay" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="mobile-menu-content">
            <nav className="mobile-nav">
              {menuItems.map((item) => (
                <div key={item.name} className="mobile-nav-item">
                  <button
                    onClick={() => {
                      if (!item.dropdown) {
                        scrollToSection(item.path);
                      } else {
                        setActiveDropdown(activeDropdown === item.name ? null : item.name);
                      }
                    }}
                    className="mobile-nav-link"
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown 
                        size={20} 
                        className={`mobile-chevron ${activeDropdown === item.name ? 'mobile-chevron-active' : ''}`}
                      />
                    )}
                  </button>
                  
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="mobile-dropdown">
                      {item.dropdown.map((subItem, idx) => (
                        <button
                          key={idx}
                          onClick={() => scrollToSection(item.path)}
                          className="mobile-dropdown-item"
                        >
                          <div className="mobile-dropdown-title">{subItem.name}</div>
                          <div className="mobile-dropdown-desc">{subItem.desc}</div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="mobile-actions">
              <button 
                onClick={() => {
                  setSearchOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="mobile-search-btn"
              >
                <Search size={20} />
                Search
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="mobile-contact-btn"
              >
                <Mail size={20} />
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;