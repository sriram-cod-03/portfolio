import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaArrowDown, FaGithub, FaLinkedin } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";

const Hero = () => {
  return (
    <ScrollReveal>
      <section
        id="home"
        className="hero-section d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh", background: "transparent" }}
      >
        <div className="container text-center d-flex flex-column align-items-center">
          
          {/* TOP STATUS BADGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="status-badge mb-4"
          >
            <span className="badge-text">Code it. Automate it.</span>
          </motion.div>

          {/* GREETING */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-subtitle text-uppercase tracking-widest"
            style={{
              fontSize: "1.1rem",
              letterSpacing: "4px",
              color: "#94a3b8",
            }}
          >
            Hello, I’m
          </motion.p>

          {/* SOLVED: MAIN NAME WITH INTEGRATED INTERACTIVE HOVER TRACKING */}
          <h1 className="hero-centered-title">
            {"Sriram R".split("").map((letter, index) => (
              <span 
                key={index} 
                className={letter === " " ? "space-char" : "interactive-letter"}
              >
                {letter}
              </span>
            ))}
          </h1>

          {/* DYNAMIC TYPING SECTION */}
          <motion.h4
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="hero-typing my-3 text-grey"
            style={{ fontSize: "1.8rem", fontWeight: "500" }}
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

          {/* CENTERED DESCRIPTION (UPGRADED SIZE & ALIGNMENT) */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="hero-desc-centered mx-auto mt-2 mb-4 hero-description-text"
          >
            Passionate about transforming data into intelligent solutions.
            Building AI-powered applications and crafting secure digital
            experiences that make a difference.
          </motion.p>

          {/* BUTTONS WITH GRADIENT & GLOW */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="hero-buttons-group d-flex justify-content-center align-items-center gap-3 flex-wrap"
          >
            <a
              href="/Sriram_R_Resume.pdf"
              className="btn btn-premium-gradient d-flex align-items-center gap-2"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"></path>
              </svg>
              Download Resume
            </a>
            <a href="#projects" className="btn btn-outline-premium">
              View Projects &rarr;
            </a>
          </motion.div>

          {/* SOCIAL LINKS ROW */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hero-socials d-flex align-items-center gap-3 mt-3"
          >
            <span
              className="connect-text"
              style={{ color: "#64748b", fontWeight: "500" }}
            >
              Collab with me
            </span>
            <div
              style={{
                width: "40px",
                height: "1px",
                backgroundColor: "rgba(255, 255, 255, 0.15)",
              }}
            ></div>
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

          {/* BOUNCING DOWN ARROW */}
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