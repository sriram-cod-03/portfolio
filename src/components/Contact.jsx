import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPaperPlane, FaTerminal, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa"; 
import toast, { Toaster } from "react-hot-toast"; 
import emailjs from "@emailjs/browser"; 
import ScrollReveal from "./ScrollReveal";
import SlideReveal from "./SlideReveal";

const Contact = () => {
  // FORM FIELD ARRAYS BINDERS
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  
  const [isTransmitting, setIsTransmitting] = useState(false);

  const handleInputChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSignalTransmission = (e) => {
    if (e) {
      e.preventDefault(); 
      e.stopPropagation();
    }
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Initialization failed: Required data metrics missing.");
      return;
    }

    setIsTransmitting(true);

    const transmissionToast = toast.loading("Encrypting data packets & routing signal...", {
      style: {
        background: "#0f061a",
        color: "#ffffff",
        border: "1px solid rgba(168, 85, 247, 0.4)",
        fontFamily: "monospace",
        fontSize: "0.85rem",
        boxShadow: "0 0 15px rgba(168, 85, 247, 0.25)"
      }
    });

    const templateParams = {
      name: formData.name, 
      email: formData.email,
      company: formData.company || "Not Provided",
      message: formData.message,
      from_name: formData.name, 
      from_email: formData.email,
      company_name: formData.company || "Not Provided",
      message_content: formData.message
    };

    const SERVICE_ID = "service_sk1n2ja"; 
    const TEMPLATE_ID = "template_yd4mie7";
    const PUBLIC_KEY = "qS_4h2Ew5-EOY3kr4";

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        toast.success("Signal transmitted successfully! Channel secured.", {
          id: transmissionToast,
          icon: "🚀",
          style: {
            background: "#0a0f14",
            color: "#10b981", 
            border: "1px solid rgba(16, 185, 129, 0.4)",
            fontFamily: "monospace",
            fontSize: "0.85rem",
            boxShadow: "0 0 15px rgba(16, 185, 129, 0.25)"
          }
        });

        setFormData({ name: "", email: "", company: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Stream Delivery Exception Track:", error);
        toast.error("Transmission failed. Gateway packet overflow.", {
          id: transmissionToast,
          icon: "⚠️",
          style: {
            background: "#140a0a",
            color: "#ef4444",
            border: "1px solid rgba(239, 68, 68, 0.4)",
            fontFamily: "monospace",
            fontSize: "0.85rem"
          }
        });
      })
      .finally(() => {
        setIsTransmitting(false);
      });
  };

  return (
    <ScrollReveal>
      <section id="contact" className="contact-section py-5 d-flex align-items-center justify-content-center">
        
        <Toaster position="bottom-right" reverseOrder={false} />

        <div className="container custom-contact-container position-relative d-flex flex-column align-items-center justify-content-center text-center">
          
          {/* HEADER SECTIONS MARKERS */}
          <div className="text-center w-100 mb-5 global-contact-header-block d-flex flex-column align-items-center justify-content-center">
            <SlideReveal direction="left">
              <span className="section-index-tag">07 // SECURE GATEWAY</span>
              <h2 className="contact-main-title text-white mb-3 mt-1 text-center w-100">Establish Comms Link</h2>
              <div className="heading-violet-underline mx-auto"></div>
            </SlideReveal>
          </div>

          <div className="contact-content-split-wrapper w-100 d-flex justify-content-center align-items-stretch flex-wrap">
            
            {/* LEFT SIDE DETAILS */}
            <div className="contact-details-side d-flex flex-column align-items-center">
              <SlideReveal direction="left" className="h-100 w-100 d-flex flex-column align-items-center">
                {/* 🚀 ADDED HARDWARE ACCELERATION CLASS */}
                <div className="glass-contact-card hardware-accelerated-card matching-height h-100 d-flex flex-column align-items-center w-100">
                  
                  <div className="cyber-terminal-header-pod mb-4 mx-auto">
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
                  
                  <p className="contact-subtitle-desc mb-4 text-center mx-auto">
                    Initiate a connection or project evaluation request. Secure a latency-free 
                    transmission channel and let's construct something legendary together.
                  </p>

                  <div className="contact-vertical-meta-stack mb-4 mx-auto d-flex flex-column align-items-center">
                    <div className="meta-stack-row-item d-flex justify-content-center">
                      <div className="stack-icon-shield active-violet-shield-box">
                        <FaEnvelope className="stack-dynamic-vector-icon color-pure-violet" />
                      </div>
                      <div className="stack-item-details-block text-center">
                        <span className="stack-label-caption">EMAIL</span>
                        <span className="stack-value-content">sriramr.webdev@gmail.com</span>
                      </div>
                    </div>

                    <div className="meta-stack-row-item d-flex justify-content-center">
                      <div className="stack-icon-shield active-violet-shield-box">
                        <FaPhoneAlt className="stack-dynamic-vector-icon color-pure-violet" />
                      </div>
                      <div className="stack-item-details-block text-center">
                        <span className="stack-label-caption">PHONE</span>
                        <span className="stack-value-content">+91 8778517976</span>
                      </div>
                    </div>

                    <div className="meta-stack-row-item d-flex justify-content-center">
                      <div className="stack-icon-shield active-violet-shield-box">
                        <FaMapMarkerAlt className="stack-dynamic-vector-icon color-pure-violet" />
                      </div>
                      <div className="stack-item-details-block text-center">
                        <span className="stack-label-caption">LOCATION</span>
                        <span className="stack-value-content">Salem, Tamil Nadu, India</span>
                      </div>
                    </div>
                  </div>

                  <div className="world-map-wrapper grow mx-auto w-100">
                    <div className="map-base-graphic hardware-accelerated-card h-100 w-100">
                      <img
                        src="/world-base.webp"
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

            {/* CENTRAL CORRIDOR STATUS DIVIDER TRACK */}
            <div className="contact-central-corridor-divider d-none d-xl-flex">
              <div className="corridor-vertical-laser"></div>
              <div className="corridor-status-node-pod">
                <span className="cyber-pulse-dot"></span>
                <span className="cyber-terminal-text">SYS_ONLINE</span>
              </div>
              <div className="corridor-vertical-laser"></div>
            </div>

            {/* RIGHT SIDE DATA FIELDS */}
            <div className="contact-form-side d-flex flex-column align-items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                /* 🚀 ADDED HARDWARE ACCELERATION CLASS */
                className="glass-contact-card hardware-accelerated-card h-100 w-100"
              >
                <form className="aceternity-form-engine w-100" onSubmit={handleSignalTransmission}>
                  <div className="form-group-block text-center">
                    <label className="w-100 text-center">Full name</label>
                    <input 
                      type="text" 
                      placeholder="Sriram R" 
                      value={formData.name}
                      onChange={(e) => handleInputChange(e, "name")}
                      disabled={isTransmitting}
                      className="text-center"
                      required 
                    />
                  </div>

                  <div className="form-group-block text-center">
                    <label className="w-100 text-center">Email Address</label>
                    <input
                      type="email"
                      placeholder="yourname@gmail.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange(e, "email")}
                      disabled={isTransmitting}
                      className="text-center"
                      required
                    />
                  </div>

                  <div className="form-group-block text-center">
                    <label className="w-100 text-center">Company</label>
                    <input 
                      type="text" 
                      placeholder="Optional" 
                      value={formData.company}
                      onChange={(e) => handleInputChange(e, "company")}
                      disabled={isTransmitting}
                      className="text-center"
                    />
                  </div>

                  <div className="form-group-block text-center">
                    <label className="w-100 text-center">Message</label>
                    <textarea
                      rows="5"
                      placeholder="Type your message here..."
                      value={formData.message}
                      onChange={(e) => handleInputChange(e, "message")}
                      disabled={isTransmitting}
                      className="text-center"
                      required
                    ></textarea>
                  </div>

                  <div className="form-submit-wrapper mt-4 w-100">
                    <button
                      type="submit"
                      className="btn btn-premium-gradient w-100 py-3 position-relative overflow-hidden d-flex align-items-center justify-content-center"
                      disabled={isTransmitting} 
                      style={{ 
                        opacity: isTransmitting ? 0.75 : 1,
                        cursor: isTransmitting ? "not-allowed" : "pointer" 
                      }}
                    >
                      {isTransmitting ? (
                        <span className="d-flex align-items-center justify-content-center gap-2">
                          <svg className="cyber-spinner-loader" viewBox="0 0 24 24">
                            <circle className="path" cx="12" cy="12" r="10" fill="none" strokeWidth="3"></circle>
                          </svg>
                          Routing Signal...
                        </span>
                      ) : (
                        <span className="d-flex align-items-center justify-content-center gap-2">
                          Transmit Signal
                          <FaPaperPlane style={{ fontSize: "0.85rem", transform: "rotate(15deg)" }} />
                        </span>
                      )}
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>

          </div> 
          
        </div>
      </section>
    </ScrollReveal>
  );
};

export default Contact;