import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPaperPlane, FaTerminal, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa"; 
import ScrollReveal from "./ScrollReveal";
import SlideReveal from "./SlideReveal";

const Contact = () => {
  return (
    <ScrollReveal>
      <section id="contact" className="contact-section py-5">
        <div className="container custom-contact-container position-relative">
          
          {/* GLOBAL CENTRALIZED HEADER BLOCK */}
          <div className="text-center w-100 mb-5 global-contact-header-block">
            <SlideReveal direction="left">
              <span className="section-index-tag">07 // SECURE GATEWAY</span>
              <h2 className="contact-main-title text-white mb-3 mt-1 text-center w-100">Establish Comms Link</h2>
              <div className="heading-violet-underline"></div>
            </SlideReveal>
          </div>

          {/* TWO-COLUMN FLEXGRID SECTION WITH PERFECT STRUCTURAL BALANCE */}
          <div className="contact-content-split-wrapper">
            
            {/* SOLVED EQUAL CARD STRUCTURE (LEFT PANEL ENCLOSED IN SAME ACETERNITY GRID GLASS) */}
            <div className="contact-details-side">
              <SlideReveal direction="left" className="h-100">
                <div className="glass-contact-card matching-height h-100 display-flex-column">
                  
                  {/* HIGH-TECH TRANSMISSION OPERATIONS TERMINAL */}
                  <div className="cyber-terminal-header-pod mb-4">
                    <div className="terminal-badge-icon-wrap">
                      <FaTerminal className="violet-glow-icon-mini" />
                    </div>
                    <div className="terminal-status-details">
                      <span className="terminal-pod-title">COMMS TERMINAL V1.0</span>
                      <span className="terminal-pod-status">UPLINK STATUS: READY</span>
                    </div>
                    <div className="terminal-pulse-ping-holder">
                      <span className="terminal-ping-radar"></span>
                      <span className="terminal-ping-dot"></span>
                    </div>
                  </div>
                  
                  <p className="contact-subtitle-desc mb-4">
                    Initiate a connection or project evaluation request. Secure a latency-free 
                    transmission channel and let's construct something legendary together.
                  </p>

                  {/* UNIFIED VIOLET GLOW METRIC DECK */}
                  <div className="contact-vertical-meta-stack mb-4">
                    <div className="meta-stack-row-item">
                      <div className="stack-icon-shield active-violet-shield-box">
                        <FaEnvelope className="stack-dynamic-vector-icon color-pure-violet" />
                      </div>
                      <div className="stack-item-details-block">
                        <span className="stack-label-caption">EMAIL</span>
                        <span className="stack-value-content">sriramr03.dev@gmail.com</span>
                      </div>
                    </div>

                    <div className="meta-stack-row-item">
                      <div className="stack-icon-shield active-violet-shield-box">
                        <FaPhoneAlt className="stack-dynamic-vector-icon color-pure-violet" />
                      </div>
                      <div className="stack-item-details-block">
                        <span className="stack-label-caption">PHONE</span>
                        <span className="stack-value-content">+91 8778517976</span>
                      </div>
                    </div>

                    <div className="meta-stack-row-item">
                      <div className="stack-icon-shield active-violet-shield-box">
                        <FaMapMarkerAlt className="stack-dynamic-vector-icon color-pure-violet" />
                      </div>
                      <div className="stack-item-details-block">
                        <span className="stack-label-caption">LOCATION</span>
                        <span className="stack-value-content">Salem, Tamil Nadu, India</span>
                      </div>
                    </div>
                  </div>

                  {/* WORLD MAP BASE WITH CONFIGURED REAL-TIME INDIA ACCENT BOUNDS */}
                  <div className="world-map-wrapper grow">
                    <div className="map-base-graphic h-100">
                      <img
                        src="/world-base.jpg"
                        alt="Portfolio Interactive World Map"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          opacity: 0.15,
                          filter:
                            "brightness(0.4) contrast(1.2) sepia(1) hue-rotate(240deg) saturate(240%)",
                        }}
                      />

                      {/* SOLVED INDIA TARGET PIN: Recalibrated coordinates to point exactly over India */}
                      <div className="map-pin-pulse-india">
                        <span className="pulse-ring"></span>
                        <span className="pulse-core-dot"></span>
                        <div className="pin-tooltip-badge">I am here</div>
                      </div>
                    </div>
                  </div>

                </div>
              </SlideReveal>
            </div>

            {/* CENTRAL CORRIDOR DIVIDER TRACK */}
            <div className="contact-central-corridor-divider d-none d-xl-flex">
              <div className="corridor-vertical-laser"></div>
              <motion.div 
                className="corridor-status-node-pod"
                animate={{ 
                  boxShadow: ["0 0 10px rgba(168, 85, 247, 0.4)", "0 0 25px rgba(168, 85, 247, 0.8)", "0 0 10px rgba(168, 85, 247, 0.4)"],
                  borderColor: ["rgba(168, 85, 247, 0.3)", "rgba(192, 132, 252, 0.8)", "rgba(168, 85, 247, 0.3)"]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="cyber-pulse-dot"></span>
                <span className="cyber-terminal-text">SYS_ONLINE</span>
              </motion.div>
              <div className="corridor-vertical-laser"></div>
            </div>

            {/* RIGHT SPLIT PANEL: GLASS CONTACT FORM FORM FACTOR */}
            <div className="contact-form-side">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="glass-contact-card h-100"
              >
                <form className="aceternity-form-engine">
                  <div className="form-group-block">
                    <label>Full name</label>
                    <input type="text" placeholder="Sriram R" required />
                  </div>

                  <div className="form-group-block">
                    <label>Email Address</label>
                    <input
                      type="email"
                      placeholder="yourname@gmail.com"
                      required
                    />
                  </div>

                  <div className="form-group-block">
                    <label>Company</label>
                    <input type="text" placeholder="Optional" />
                  </div>

                  <div className="form-group-block">
                    <label>Message</label>
                    <textarea
                      rows="6" /* Scaled field text blocks height bounds to create perfect bottom line alignments */
                      placeholder="Type your message here..."
                      required
                    ></textarea>
                  </div>

                  <div className="form-submit-wrapper mt-4">
                    <button
                      type="submit"
                      className="btn btn-premium-gradient w-100 py-3"
                    >
                      <span className="d-flex align-items-center justify-content-center gap-2">
                        Transmit Signal
                        <FaPaperPlane style={{ fontSize: "0.85rem", transform: "rotate(15deg)" }} />
                      </span>
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>

          </div> {/* END DUAL SPLIT WRAPPER */}
          
        </div>
      </section>
    </ScrollReveal>
  );
};

export default Contact;