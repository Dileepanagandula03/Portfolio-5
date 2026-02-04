import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Dileep Anagandula</h3>
            <p>Senior Data Engineer</p>
            <p>Building scalable data pipelines and architectures</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Connect</h3>
            <ul>
              <li><a href="https://www.linkedin.com/in/anagandula-dileep/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://github.com/Dileepanagandula03" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="mailto:dileepanagandula3@gmail.com">Email</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Dileep Anagandula. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;