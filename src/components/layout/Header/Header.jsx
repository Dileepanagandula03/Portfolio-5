import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header-pipeline ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Left: Logo/Name with Glitch Effect */}
        <div className="header-logo">
          <div className="logo-icon">💾</div>
          <div className="logo-text">
            <span className="logo-name" data-text="Dileep Anagandula">Dileep Anagandula</span>
            <span className="logo-subtitle">{'// Data Engineer'}</span>
          </div>
        </div>

        {/* Center: Navigation with Terminal Style */}
        <nav className="header-nav">
          <a href="#about" className="nav-link">
            <span className="nav-bracket">[</span>
            <span className="nav-text">About</span>
            <span className="nav-bracket">]</span>
          </a>
          <a href="#skills" className="nav-link">
            <span className="nav-bracket">[</span>
            <span className="nav-text">Skills</span>
            <span className="nav-bracket">]</span>
          </a>
          <a href="#experience" className="nav-link">
            <span className="nav-bracket">[</span>
            <span className="nav-text">Experience</span>
            <span className="nav-bracket">]</span>
          </a>
          <a href="#projects" className="nav-link">
            <span className="nav-bracket">[</span>
            <span className="nav-text">Projects</span>
            <span className="nav-bracket">]</span>
          </a>
          <a href="#contact" className="nav-link">
            <span className="nav-bracket">[</span>
            <span className="nav-text">Contact</span>
            <span className="nav-bracket">]</span>
          </a>
        </nav>

        {/* Right: Social Icons with Glow */}
        <div className="header-social">
          <a href="https://www.linkedin.com/in/anagandula-dileep/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Dileepanagandula03" target="_blank" rel="noopener noreferrer" className="social-icon github">
            <FaGithub />
          </a>
          <a href="mailto:dileepanagandula3@gmail.com" className="social-icon email">
            <FaEnvelope />
          </a>
        </div>

        {/* Status Indicator */}
        <div className="header-status">
          <span className="status-dot-header"></span>
          <span className="status-text-header">ONLINE</span>
        </div>
      </div>
    </header>
  );
};

export default Header;