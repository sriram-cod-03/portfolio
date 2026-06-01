import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import SlideReveal from "./SlideReveal";

const About = () => {
  return (
    <ScrollReveal>
      <section id="about" className="about-aurora-section">
        
        {/* THE MOVING SPACE-VIOLET AURORA RAY BEAM */}
        <div className="aurora-ray-beam"></div>

        <div className="container custom-about-container">
          
          {/* LEFT SIDE: TEXT CONTENT */}
          <div className="about-text-side">
            <SlideReveal direction="left">
              <h2 className="about-section-title text-white mb-4">About Me</h2>
              <p className="about-main-para">
                I am a passionate Full Stack Developer specializing in the 
                <span className="violet-text-highlight"> MERN Stack</span>. I love taking complex backend problems, 
                optimizing query structures, and transforming them into beautiful, 
                seamless, and high-performance user interfaces.
              </p>
              <p className="about-sub-para mb-5">
                Currently pursuing my Engineering degree, I focus heavily on writing clean, 
                maintainable code, building secure API networks, and automating workflows. 
                When I'm not coding architectures, you'll find me exploring technical 
                advancements in security, deployment vectors, or gaming.
              </p>

              {/* STATS MATRIX */}
              <div className="about-stats-row">
                <div className="stat-box">
                  <h3>7.8</h3>
                  <p>Engineering CGPA</p>
                </div>
                <div className="stat-box">
                  <h3>10+</h3>
                  <p>Projects Crafted</p>
                </div>
                <div className="stat-box">
                  <h3>3+</h3>
                  <p>Certifications</p>
                </div>
              </div>
            </SlideReveal>
          </div>

          {/* RIGHT SIDE: PREMIUM TECHNICAL GLASS GRAPHIC */}
          <div className="about-graphic-side">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="premium-aurora-card"
            >
              {/* Corner Grid Accent Decoration */}
              <div className="card-grid-accent"></div>
              
              <div className="tech-stack-display">
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">Express.js</span>
                <span className="tech-tag">React.js</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">REST APIs</span>
                <span className="tech-tag">CUDA Python</span>
              </div>
              <div className="card-glow-reflection"></div>
            </motion.div>
          </div>

        </div>
      </section>
    </ScrollReveal>
  );
};

export default About;