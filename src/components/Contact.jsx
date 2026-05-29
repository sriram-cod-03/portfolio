import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";
import SlideReveal from "./SlideReveal";

const Contact = () => {
  return (
    <ScrollReveal>
      <section id="contact" className="contact-section py-5">
        <div className="container custom-contact-container">
          {/* LEFT SIDE: DETAILS & GLOBAL MAP LAYER */}
          <div className="contact-details-side">
            <SlideReveal direction="left">
              {/* Floating Glowing Envelope Icon */}
              <div className="contact-icon-wrapper mb-4">
                <FaEnvelope className="violet-glow-icon" />
              </div>

              <h2 className="contact-main-title text-white mb-3">Contact us</h2>
              <p className="contact-subtitle-desc mb-5">
                We are always looking for ways to improve our products and
                services. Contact us and let us know how we can help you.
              </p>

              {/* Contact Information Row */}
              <div className="contact-meta-row mb-5">
                <span className="meta-item">sriramr03.dev@gmail.com</span>
                <span className="meta-divider">•</span>
                <span className="meta-item">+91 8778517976</span>
                <span className="meta-divider">•</span>
                <span className="meta-item">Salem, Tamilnadu</span>
              </div>

              {/* Map Asset Area with Interactive Pulsing Target Pin */}
              <div className="world-map-wrapper">
                {/* Map Asset Area with High-Visibility Inline Map Layer */}
                {/* Map Area with Integrated Theme Calibration Filter */}
                {/* Map Area Component Container */}
                <div className="map-base-graphic">
                  {/* The green map image you downloaded, filtered to match your theme */}
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

                  {/* Glowing Radar Beacon Signal Tracker Pin */}
                  <div className="map-pin-pulse">
                    <span className="pulse-ring"></span>
                    <span className="pulse-core-dot"></span>
                    <div className="pin-tooltip-badge">We are here</div>
                  </div>
                </div>
              </div>
            </SlideReveal>
          </div>

          {/* RIGHT SIDE: PREMIUM GLASS FORM COMPONENT */}
          <div className="contact-form-side">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-contact-card"
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
                    rows="4"
                    placeholder="Type your message here..."
                    required
                  ></textarea>
                </div>

                {/* INTEGRATED: ACETERNITY UI BORDER MAGIC LASER SUBMIT BUTTON */}
                <div className="form-submit-wrapper mt-4">
                  <button
                    type="submit"
                    className="btn btn-premium-gradient w-100 py-3"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default Contact;
