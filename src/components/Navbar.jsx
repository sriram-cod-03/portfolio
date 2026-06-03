import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaTimes } from "react-icons/fa"; // Imported FaTimes for smooth closing action

// Importing your exact local asset directly from your assets folder structure
import profileAvatar from "../assets/profile.jpeg"; 

const Navbar = () => {
  const [active, setActive] = useState("home");
  
  // SOLVED STATE: Boolean tracking flag to toggle the Full-Screen Profile view overlay safely
  const [isAvatarExpanded, setIsAvatarExpanded] = useState(false);

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
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar">
        <div className="container-fluid custom-nav-container">

          {/* Left Side: Brand Link Wrapper incorporating Profile Avatar */}
          {/* SOLVED CLICK ACTION: added explicit inline click handlers avoiding synthetic native bubble drops */}
          <div 
            className="custom-navbar-brand-group" 
            onClick={() => setIsAvatarExpanded(true)}
            style={{ cursor: "pointer" }}
          >
            <div className="navbar-profile-avatar-shield">
              <img 
                src={profileAvatar} 
                alt="Sriram R Profile Avatar" 
                className="navbar-avatar-img"
                onError={(e) => {
                  e.target.src = "https://api.dicebear.com/7.x/bottts/svg?seed=Sriram";
                }}
              />
              <div className="avatar-ambient-glow-ring"></div>
            </div>
            <span className="brand-name-text">Sriram R</span>
          </div>

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

            {/* RIGHT CORNER: Re-engineered "Hire Me" button with interactive Telegram icon */}
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

      {/* SOLVED FULL-SCREEN MODAL PORTAL PORT OVERLAYS */}
      {/* AnimatePresence handles mounting and unmounting fade animations cleanly without layout snapping */}
      <AnimatePresence>
        {isAvatarExpanded && (
          <motion.div 
            className="fullscreen-avatar-overlay-portal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsAvatarExpanded(false)} // Closes instantly when backdrop void space is clicked
          >
            
            {/* CLOSE RADAR EMITTER ACTION */}
            <button 
              className="avatar-portal-close-btn"
              onClick={(e) => {
                e.stopPropagation(); // Blocks link trigger bubble inheritance chains
                setIsAvatarExpanded(false);
              }}
            >
              <FaTimes />
            </button>

            {/* IMAGE WRAP CONTAINER SHIELD DESIGN MATRIX */}
            <motion.div 
              className="fullscreen-avatar-card-pod"
              initial={{ scale: 0.8, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 40, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()} // Prevents closing modal when clicking the card content itself
            >
              <div className="avatar-portal-inner-glow-housing">
                <img 
                  src={profileAvatar} 
                  alt="Sriram R Expanded View" 
                  className="avatar-portal-highres-img" 
                />
              </div>
              
              {/* SUBTITLE PROFILE BANNER */}
              <div className="avatar-portal-meta-footer-strip">
                <h3 className="portal-profile-name">Sriram R</h3>
                <span className="portal-profile-rank">Full Stack / MERN Engineering Core</span>
              </div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;