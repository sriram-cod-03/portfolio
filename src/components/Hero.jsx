import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaArrowDown, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiLightningBolt } from "react-icons/hi";
import { IoRocketSharp } from "react-icons/io5";
import ScrollReveal from "./ScrollReveal";

const Hero = () => {
  return (
    <ScrollReveal>
      <section id="home" className="hero-section">
        <div className="container custom-hero-container text-center d-flex flex-column align-items-center">
          {/* TOP STATUS BADGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="status-badge mb-4"
            style={{ willChange: "transform, opacity" }}
          >
            <span className="badge-text">Code it. Automate it.</span>
          </motion.div>

          {/* CEMENT COLOR SUBTITLE */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="hero-subtitle-wrapper"
            style={{ willChange: "transform, opacity" }}
          >
            <p className="hero-subtitle">Hello, I’m</p>
          </motion.div>

          {/* MAIN TITLE */}
          <h1 className="hero-centered-title">
            <span className="name-word-block-wrap">
              {"Sriram".split("").map((letter, index) => (
                <span key={`first-${index}`} className="interactive-letter">
                  {letter}
                </span>
              ))}
            </span>
            <span className="space-char-separator">&nbsp;</span>
            <span className="name-word-block-wrap">
              {"R".split("").map((letter, index) => (
                <span key={`last-${index}`} className="interactive-letter">
                  {letter}
                </span>
              ))}
            </span>
          </h1>

          {/* DYNAMIC TYPING */}
          <motion.h4 className="hero-typing my-3 text-grey">
            I'm a{" "}
            <span className="violet-glow">
              <Typewriter
                words={["MERN Stack Developer", "Web Designer"]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
              />
            </span>
          </motion.h4>

          {/* DESCRIPTION */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            className="hero-description-text"
            style={{ willChange: "transform, opacity" }}
          >
            Passionate about transforming data into intelligent solutions.
            Building AI-powered applications and crafting secure digital
            experiences that make a difference.
          </motion.p>

          {/* ACTION BUTTONS */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
            className="hero-buttons-group"
            style={{ willChange: "transform, opacity" }}
          >
            <a href="#contact" className="btn btn-premium-gradient">
              <HiLightningBolt className="btn-vector-icon lightning-orange" />
              <span className="btn-custom-text">Hire Me</span>
            </a>
            <a href="#projects" className="btn btn-outline-premium">
              <IoRocketSharp className="btn-vector-icon rocket-pink" />
              <span className="btn-custom-text">View Projects</span>
            </a>
          </motion.div>

          {/* SOCIAL LINKS */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
            className="hero-socials"
            style={{ willChange: "transform, opacity" }}
          >
            <span className="connect-text text-white">Collab with me</span>
            <div className="social-divider-horizontal-line"></div>
            <a href="https://github.com/sriram-cod-03" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/sriram-r-6383ba2a9" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </motion.div>

          {/* MINI SERVICES */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.7 }}
            className="hero-mini-services-section mt-5"
            style={{ willChange: "transform, opacity" }}
          >
            <span className="mini-section-tag">What I Do</span>
            <p className="mini-section-subtext">
              Frontend • Backend • Full Stack
            </p>

            <div className="mini-services-grid">
              <div className="mini-service-card">
                <span>Frontend Development</span>
              </div>
              <div className="mini-service-card">
                <span>Backend APIs</span>
              </div>
              <div className="mini-service-card">
                <span>Full Stack Apps</span>
              </div>
            </div>
          </motion.div>

          {/* SCROLL INDICATOR */}
          <motion.div className="scroll-indicator-centered mt-5">
            <FaArrowDown />
          </motion.div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default Hero;