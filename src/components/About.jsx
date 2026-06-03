import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";
import SlideReveal from "./SlideReveal";

const About = () => {
  return (
    <ScrollReveal>
      <section id="about" className="about-space-section">
        <div className="container custom-about-container">
          
          {/* TOP SECTION BLOCK INDEX IDENTIFIER */}
          <div className="text-center w-100 mb-4">
            <span className="section-index-tag">01 // EXECUTIVE SUMMARY</span>
            <h2 className="about-section-heading mt-2">Character Profile</h2>
            <div className="heading-violet-underline"></div>
          </div>

          <div className="about-layout-grid-row w-100 mt-4">
            
            {/* LEFT COLUMN: IDENTITY IDENTITY PANEL & META STATUS GRID */}
            <div className="about-profile-panel-side">
              <SlideReveal direction="left">
                {/* Dynamic Rotating/Hovering Logo Container */}
                <div className="profile-identity-box mb-4">
                  <div className="kinetic-border-shape"></div>
                  <h1 className="display-initials-text">SR</h1>
                  <div className="nebula-reflection-pool"></div>
                </div>

                {/* META STATUS LISTING GRID */}
                <div className="meta-status-table">
                  <div className="meta-table-row">
                    <span className="meta-label">STATUS</span>
                    <span className="meta-value status-glow-dot">OPEN TO WORK</span>
                  </div>
                  <div className="meta-table-row">
                    <span className="meta-label">LOCATION</span>
                    <span className="meta-value">Salem, TN</span>
                  </div>
                  <div className="meta-table-row">
                    <span className="meta-label">YEAR</span>
                    <span className="meta-value">3rd Year CSE</span>
                  </div>
                </div>
              </SlideReveal>
            </div>

            {/* RIGHT COLUMN: PROFESSIONAL STATEMENT & ATTRIBUTE TAGS */}
            <div className="about-profile-content-side">
              <SlideReveal direction="right">
                <h3 className="about-profile-sub-intent mb-3">
                  Building the Future, <br />
                  <span className="violet-glow-intent">One Line at a Time</span>
                </h3>

                <p className="about-profile-bio">
                  I'm Sriram — a third-year Computer Science Engineering student focused heavily on full-stack excellence. 
                  My passion lies at the intersection of building highly performant backends and crafting clean, secure digital spaces.
                </p>

                <p className="about-profile-bio mb-4">
                  I specialize in turning complex problems into scalable web applications. From designing responsive, 
                  fluid frontends with React to managing multi-tier backend architectures with Node.js and MongoDB, 
                  I am driven by clean logic and modern system performance.
                </p>

                {/* ATTRIBUTE TAG CLOUD */}
                <div className="attribute-badge-cloud mb-5">
                  <span className="attr-tag">Problem Solver</span>
                  <span className="attr-tag">Quick Learner</span>
                  <span className="attr-tag">MERN Developer</span>
                  <span className="attr-tag">Analytical Thinker</span>
                  <span className="attr-tag">Adaptable</span>
                </div>

                {/* THE RESUME DOWNLOAD ACTION LINK */}
                <div className="action-button-alignment">
                  <a
                    href="/Sriram_R_Resume.pdf"
                    className="btn btn-space-primary d-inline-flex align-items-center gap-2"
                  >
                    <FaDownload className="download-icon-bounce" />
                    Download Resume
                  </a>
                </div>
              </SlideReveal>
            </div>

          </div>

        </div>
      </section>
    </ScrollReveal>
  );
};

export default About;