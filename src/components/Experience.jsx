import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import SlideReveal from "./SlideReveal";

const Experience = () => {
  const containerRef = useRef(null);

  // Scroll tracking for the timeline beam
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const workData = [
    {
      id: 1,
      title: "CUDA Python Developer — Intern",
      company: "ADVI Group of Companies",
      duration: "25 June 2025 - 29 July 2025",
      status: "Professional Internship",
      description: "Completed an advanced technical internship involving the native deployment of CUDA Python models onto hardware-accelerated Nvidia boards. Focused heavily on discrete GPU parallel computing matrix architectures, shared thread optimizations, and workload execution scaling.",
      skills: ["CUDA", "GPU Acceleration", "Python", "Nvidia Hardware", "Parallel Processing"],
      progressThreshold: 0.2
    },
    {
      id: 2,
      title: "Full Stack Developer — Independent Projects",
      company: "Self-Directed / Personal Production",
      duration: "2024 - Present",
      status: "Hands-on Experience",
      description: "Architected, designed, and deployed multiple full-stack production web applications. Engineered secure REST API endpoints, handled schema design patterns with NoSQL databases, and optimized client-side state performance frameworks.",
      skills: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "Cloud Deployment"],
      progressThreshold: 0.8
    }
  ];

  const [activeNodes, setActiveNodes] = useState({});

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const updatedStates = {};
    workData.forEach((item) => {
      updatedStates[item.id] = latest >= item.progressThreshold;
    });
    // Performance tweak: Only update state if values actually changed
    if (JSON.stringify(updatedStates) !== JSON.stringify(activeNodes)) {
      setActiveNodes(updatedStates);
    }
  });

  const cardVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === "left" ? -50 : 50,
      y: 20
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { type: "spring", stiffness: 90, damping: 14, duration: 0.6 }
    }
  };

  return (
    <ScrollReveal>
      <section id="experience" className="experience-rings-section" ref={containerRef}>
        
        {/* Background Rings - Optimized */}
        <div className="experience-rings-backdrop">
          <div className="magic-ring-exp exp-ring-1 hardware-accelerated-ring"></div>
          <div className="magic-ring-exp exp-ring-2 hardware-accelerated-ring"></div>
          <div className="magic-ring-exp exp-ring-3 hardware-accelerated-ring"></div>
          <div className="magic-ring-exp exp-ring-4 hardware-accelerated-ring"></div>
        </div>

        <div className="container custom-experience-container">
          <div className="text-center w-100 mb-5">
            <SlideReveal direction="left">
              <span className="section-index-tag">04 // INDUSTRY EXPERIENCE</span>
              <h2 className="experience-section-heading mt-2">Completed Quests & Raids</h2>
              <div className="heading-violet-underline mx-auto"></div>
            </SlideReveal>
          </div>

          <div className="experience-wrapper-track">
            {/* Background Line */}
            <div className="experience-base-track-line"></div>
            
            {/* Scroll Beam - Hardware Accelerated */}
            <motion.div 
              className="experience-active-scroll-beam hardware-accelerated-beam" 
              style={{ height: lineHeight }} 
            />

            {workData.map((item, index) => {
              const isEven = index % 2 === 0;
              const entryDirection = isEven ? "left" : "right";
              const isIgnited = activeNodes[item.id] || false;

              return (
                <div key={item.id} className={`experience-item-row ${isEven ? "row-left-align" : "row-right-align"}`}>
                  
                  {/* Node Beacon */}
                  <div className={`experience-track-node-beacon ${isIgnited ? "ignite-neon-glow" : ""}`}>
                    <div className="experience-node-core-glow"></div>
                  </div>

                  {/* Card Column */}
                  <motion.div 
                    className="experience-card-column"
                    custom={entryDirection}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <div className="experience-space-glass-card hardware-accelerated-card">
                      {/* Emitters kept, but CSS will disable them on mobile */}
                      <div className="card-radar-wave-emitter emitter-left"></div>
                      <div className="card-radar-wave-emitter emitter-right"></div>
                      
                      <div className="card-badge-header-row mb-3">
                        <span className="work-duration-badge">{item.duration}</span>
                        <span className="status-pill work-glow-badge">{item.status}</span>
                      </div>

                      <h4 className="work-position-title mb-2">{item.title}</h4>
                      <h5 className="work-company-name mb-3">{item.company}</h5>
                      <p className="work-technical-bio mb-4">{item.description}</p>
                      
                      <div className="experience-card-tech-cloud">
                        {item.skills.map((skill, sIdx) => (
                          <span key={sIdx} className="experience-mini-tag">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Spacer Column */}
                  <div className="experience-empty-spacer-column"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default Experience;