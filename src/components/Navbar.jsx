import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa"; // SOLVED: Imported the Telegram style paper airplane icon

const Navbar = () => {
  const [active, setActive] = useState("home");

  const navigationItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "certificate", label: "Certificate" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const sections = navigationItems.map(item => item.id);

    const handleScroll = () => {
      const scrollPos = window.scrollY + 160;

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        if (
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar">
      <div className="container-fluid custom-nav-container">

        {/* Left Side: Brand Link */}
        <a className="navbar-brand" href="#home">
          Sriram<span className="brand-dot">.dev</span>
        </a>

        {/* Mobile Hamburger Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Center Links & Right Action Button Wrapper */}
        <div className="collapse navbar-collapse" id="navbarNav">
          
          {/* CENTER NAVIGATION POD */}
          <ul className="navbar-nav mx-auto align-items-lg-center gap-lg-1 nav-links-center-group">
            {navigationItems.map((item) => (
              <li className="nav-item position-relative" key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-link dynamic-nav-link ${active === item.id ? "active-text" : ""}`}
                >
                  {item.label}
                </a>

                {/* ANIMATED SPACE STAR BORDER PILL TELEPORTATION */}
                {active === item.id && (
                  <motion.div
                    layoutId="navbar-active-teleport-pill"
                    className="navbar-active-bg-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  >
                    <div className="star-border-glow-track"></div>
                    <div className="star-border-card-content"></div>
                  </motion.div>
                )}
              </li>
            ))}
          </ul>

          {/* SOLVED RIGHT CORNER: Re-engineered "Hire Me" button with interactive Telegram icon */}
          <div className="navbar-right-action-wrapper">
            <a href="#contact" className="btn-navbar-hire-me">
              <span className="hire-me-content-wrap">
                Hire Me 
                <FaPaperPlane className="telegram-action-icon" />
              </span>
              <div className="button-glow-radial"></div>
            </a>
          </div>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;