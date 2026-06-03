import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="custom-premium-footer">
      <div className="container footer-content-wrapper">
        
        {/* COLUMN 1: BRAND LOGO, BIO MINI DESCRIPTION, SOCIAL SHIELDS */}
        <div className="footer-column brand-summary-column">
          <h4 className="footer-brand-title">
            Sriram R
          </h4>
          <p className="footer-bio-para">
            Full Stack Developer passionate about engineering high-performance software, 
            secure deployment tracks, and interactive user experiences. Let's build something legendary together.
          </p>
          <div className="footer-social-deck">
            <a href="https://github.com/sriram-cod-03" target="_blank" rel="noreferrer" className="footer-social-icon-btn">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/sriram-r-6383ba2a9" target="_blank" rel="noreferrer" className="footer-social-icon-btn">
              <FaLinkedin />
            </a>
            <a href="mailto:sriramr.webdev@gmail.com" className="footer-social-icon-btn">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* COLUMN 2: QUICK LINK ROUTING NODES */}
        <div className="footer-column navigation-links-column">
          <h5 className="footer-column-heading">Quick Links</h5>
          <ul className="footer-links-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* COLUMN 3: CONTACT INFRASTRUCTURE GEOMETRY */}
        <div className="footer-column contact-info-column">
          <h5 className="footer-column-heading">Contact</h5>
          <div className="footer-contact-details">
            <div className="contact-detail-line">
              <FaEnvelope className="footer-mini-violet-icon" />
              <span>sriramr.webdev@gmail.com</span>
            </div>
            <p className="footer-location-text">Salem, Tamil Nadu, India</p>
          </div>
        </div>

      </div>

      {/* BOTTOM RUNTIME COPYRIGHT BAR STRIP */}
      <div className="footer-copyright-bottom-strip">
        <p>© {currentYear} Sriram R. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;