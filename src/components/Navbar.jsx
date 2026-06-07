import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion"; // 🚀 Added Scroll hooks
import { FaPaperPlane, FaTimes, FaBars } from "react-icons/fa"; 

// Importing local asset cleanly
import profileAvatar from "../assets/profile/profile.webp"; 

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [isAvatarExpanded, setIsAvatarExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 🚀 SOLVED: Shooting Star Scroll Progress Engine
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

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
      {/* 🚀 ADDED: SHOOTING STAR SCROLL PROGRESS BAR */}
      <div className="scroll-progress-container">
        <motion.div className="scroll-progress-bar" style={{ scaleX }}>
          <div className="shooting-star-head"></div>
        </motion.div>
      </div>

      {/* SOLVED FIXED WRAPPER MATRIX STRUCTURE */}
      <nav className="custom-navbar fixed-top">
        <div className="custom-nav-container">

          {/* LEFT SIDE: Brand Avatar Link Wrapper */}
          <div 
            className="custom-navbar-brand-group" 
            onClick={() => setIsAvatarExpanded(true)}
          >
            <div className="navbar-profile-avatar-shield">
              <img 
                src={profileAvatar} 
                alt="Sriram R Profile Avatar" 
                className="navbar-avatar-img"
                loading="lazy"
                onError={(e) => {
                  e.target.src = "https://api.dicebear.com/7.x/bottts/svg?seed=Sriram";
                }}
              />
              <div className="avatar-ambient-glow-ring"></div>
            </div>
            <span className="brand-name-text">Sriram R</span>
          </div>

          {/* CENTER LINKS GRID - FOR LARGE DESKTOP SYSTEMS ONLY */}
          <ul className="nav-links-center-group d-none d-lg-flex">
            {navigationItems.map((item) => (
              <li className="nav-item position-relative" key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-link dynamic-nav-link ${active === item.id ? "active-text" : ""}`}
                >
                  {item.label}
                </a>

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

          {/* RIGHT SIDE ACTION BUTTON - FOR LARGE DESKTOP SYSTEMS */}
          <div className="navbar-right-action-wrapper d-none d-lg-block">
            <a href="#contact" className="btn-navbar-hire-me">
              <span className="hire-me-content-wrap">
                Hire Me 
                <FaPaperPlane className="telegram-action-icon" />
              </span>
              <div className="button-glow-radial"></div>
            </a>
          </div>

          {/* SOLVED HAMBURGER: Responsive manual structural button hook */}
          <button 
            className="mobile-hamburger-toggle-btn d-lg-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

        {/* SOLVED MOBILE OVERLAY MODAL SHEET ENGINE */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="mobile-navigation-drawer-panel d-lg-none"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="mobile-drawer-links-stack">
                {navigationItems.map((item) => (
                  <li key={item.id} onClick={() => setIsMobileMenuOpen(false)}>
                    <a 
                      href={`#${item.id}`} 
                      className={`mobile-drawer-link ${active === item.id ? "drawer-active-tint" : ""}`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              
              <div className="mobile-drawer-action-block" onClick={() => setIsMobileMenuOpen(false)}>
                <a href="#contact" className="btn-navbar-hire-me w-100">
                  <span className="hire-me-content-wrap">
                    Hire Me 
                    <FaPaperPlane className="telegram-action-icon" />
                  </span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* FULL-SCREEN PORTRAIT MODAL OVERLAYS */}
      <AnimatePresence>
        {isAvatarExpanded && (
          <motion.div 
            className="fullscreen-avatar-overlay-portal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsAvatarExpanded(false)} 
          >
            <button 
              className="avatar-portal-close-btn"
              onClick={(e) => {
                e.stopPropagation(); 
                setIsAvatarExpanded(false);
              }}
            >
              <FaTimes />
            </button>

            <motion.div 
              className="fullscreen-avatar-card-pod"
              initial={{ scale: 0.8, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 40, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()} 
            >
              <div className="avatar-portal-inner-glow-housing">
                <img 
                  src={profileAvatar} 
                  alt="Sriram R Expanded View" 
                  className="avatar-portal-highres-img" 
                />
              </div>
              
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