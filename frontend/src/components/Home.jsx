// Home.jsx
import React, { useEffect, useRef } from 'react';
import { ChevronRight, Sparkles, Zap, Globe, ArrowRight } from 'lucide-react';
import './Home.css';

const Home = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 50;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = `rgba(96, 165, 250, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.strokeStyle = `rgba(96, 165, 250, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      <canvas ref={canvasRef} className="hero-canvas"></canvas>
      
      {/* Gradient Orbs */}
      <div className="gradient-orb orb-1"></div>
      <div className="gradient-orb orb-2"></div>
      <div className="gradient-orb orb-3"></div>

      <div className="hero-container">
        <div className="hero-content">
          {/* Badge */}
          <div className="hero-badge">
            <Sparkles className="badge-icon" size={16} />
            <span>Welcome to the Future of Digital Innovation</span>
          </div>

          {/* Main Title with Logo Integration */}
          <h1 className="hero-title">
            <span className="title-line">
              <span className="title-text">Transform Your</span>
            </span>
            <span className="title-line">
              <span className="title-text">Digital Presence</span>
              <div className="inline-logo">
                <img 
                  src="/api/placeholder/64/64" 
                  alt="Soumora Logo" 
                  className="inline-logo-img"
                />
              </div>
            </span>
            <span className="title-line">
              <span className="title-text gradient-text">With Soumora</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle">
            Elevate your business with cutting-edge web solutions, innovative design, 
            and powerful technology that drives real results. We don't just build websites—we 
            craft digital experiences that captivate and convert.
          </p>

          {/* Stats */}
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Team Experts</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hero-buttons">
            <button className="hero-btn-primary" onClick={() => scrollToSection('contact')}>
              <span>Start Your Project</span>
              <ArrowRight className="btn-icon" size={20} />
            </button>
            <button className="hero-btn-secondary" onClick={() => scrollToSection('services')}>
              <span>Explore Services</span>
              <ChevronRight className="btn-icon" size={20} />
            </button>
          </div>

          {/* Trust Badges */}
          <div className="trust-badges">
            <span className="trust-text">Trusted by industry leaders</span>
            <div className="trust-icons">
              <div className="trust-icon">
                <Zap size={20} />
              </div>
              <div className="trust-icon">
                <Globe size={20} />
              </div>
              <div className="trust-icon">
                <Sparkles size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - 3D Visual Elements */}
        <div className="hero-visual">
          <div className="visual-container">
            {/* Main Logo Card */}
            <div className="logo-card main-card">
              <div className="card-glow"></div>
              <img 
                src="/api/placeholder/200/200" 
                alt="Soumora" 
                className="logo-card-img"
              />
            </div>

            {/* Floating Elements */}
            <div className="floating-element element-1">
              <div className="element-icon">
                <Zap size={24} />
              </div>
              <div className="element-text">
                <div className="element-title">Lightning Fast</div>
                <div className="element-desc">Optimized Performance</div>
              </div>
            </div>

            <div className="floating-element element-2">
              <div className="element-icon">
                <Globe size={24} />
              </div>
              <div className="element-text">
                <div className="element-title">Global Reach</div>
                <div className="element-desc">Worldwide Solutions</div>
              </div>
            </div>

            <div className="floating-element element-3">
              <div className="element-icon">
                <Sparkles size={24} />
              </div>
              <div className="element-text">
                <div className="element-title">Innovation</div>
                <div className="element-desc">Cutting-Edge Tech</div>
              </div>
            </div>

            {/* Decorative Shapes */}
            <div className="deco-shape shape-1"></div>
            <div className="deco-shape shape-2"></div>
            <div className="deco-shape shape-3"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span className="scroll-text">Scroll to explore</span>
      </div>
    </section>
  );
};

export default Home;