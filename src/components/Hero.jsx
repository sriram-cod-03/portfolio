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
      {/* SOLVED BLINKING BEAM: Enforced hard inline layout constraints permanently blocking external tracking line rendering loops */}
      <section
        id="home"
        className="hero-section d-flex align-items-center justify-content-center"
        style={{ 
          minHeight: "100vh", 
          background: "transparent",
          position: "relative",
          overflow: "hidden", // FORCE-KILLS VERTICAL BLINKING PROGRESS FLICKERS PERMANENTLY
          clipPath: "inset(0 0 0 0)" // Airtight vector containment masking box system
        }}
      >
        <div 
          className="container custom-hero-container text-center d-flex flex-column align-items-center"
          style={{ overflow: "hidden" }} // Secondary backup structural data shield layout 
        >
          
          {/* TOP STATUS BADGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="status-badge mb-4"
          >
            <span className="badge-text">Code it. Automate it.</span>
          </motion.div>

          {/* GREETING DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-subtitle text-uppercase tracking-widest"
          >
            Hello, I’m
          </motion.p>

          {/* SOLVED LETTER OVERFLOW WRAPPING OVER SMALL RES PLATES */}
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

          {/* DYNAMIC TYPING INTERACTIVE CORE SLOTS */}
          <motion.h4
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="hero-typing my-3 text-grey"
          >
            I'm a{" "}
            <span className="violet-glow">
              <Typewriter
                words={[
                  "MERN Stack Developer",
                  "Frontend Developer",
                  "Backend Developer",
                  "Web Designer",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </motion.h4>

          {/* CENTERED PORTFOLIO INTENT OBJECT DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="hero-description-text mx-auto mt-2 mb-4"
          >
            Passionate about transforming data into intelligent solutions.
            Building AI-powered applications and crafting secure digital
            experiences that make a difference.
          </motion.p>

          {/* ACTION EMITTER PREMIUM UTILITY LINK STRIPS */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="hero-buttons-group d-flex justify-content-center align-items-center gap-3 flex-wrap"
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

          {/* SOCIAL PLATFORMS METRICS DECK CORES CONNECTOR LINK TIERS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hero-socials d-flex align-items-center gap-3 mt-4"
          >
            <span className="connect-text">Collab with me</span>
            <div className="social-divider-horizontal-line"></div>
            <a
              href="https://github.com/sriram-cod-03"
              target="_blank"
              rel="noreferrer"
              className="social-icon-link"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/sriram-r-6383ba2a9"
              target="_blank"
              rel="noreferrer"
              className="social-icon-link"
            >
              <FaLinkedin />
            </a>
          </motion.div>

          {/* WORK SCOPE MINI-GRID SYSTEMS ARMATURE ACCENTS BLOCKS */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="hero-mini-services-section mt-5"
          >
            <span className="mini-section-tag">What I Do</span>
            <p className="mini-section-subtext">Frontend • Backend • Full Stack</p>

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

          {/* BOUNCING INDICATOR CORE VECTOR POINTERS CHANNEL */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="scroll-indicator-centered mt-5"
          >
            <FaArrowDown />
          </motion.div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default Hero;