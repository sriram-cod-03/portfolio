import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const Education = () => {
  const containerRef = useRef(null);

  // Hook into the page scroll tracking targeted specifically to this section's container boundaries
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Dynamically map scroll progress (0 to 1) directly to CSS height percentage strings (0% to 100%)
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const timelineData = [
    {
      id: 1,
      title: "Bachelor of Engineering — Computer Science & Engineering",
      subtitle: "AVS Engineering College, Salem - 636003",
      duration: "2023 - 2027",
      status: "Currently Pursuing",
      description: "Developing robust technical proficiency across full-stack software systems, architectural security models, and high-performance engineering implementations with a current CGPA tracking of 7.8.",
      skills: ["Data Structures", "MERN Stack", "Network Security", "Cryptography"],
      progressThreshold: 0.2 // Node triggers glow when scroll progress crosses 20%
    },
    {
      id: 2,
      title: "Higher Secondary Certificate (HSC)",
      subtitle: "Sri Rama Krishna Sarada Higher Secondary School, Salem - 636005",
      duration: "2021 - 2023",
      status: "Completed",
      description: "Built foundational core competencies in advanced Mathematics, Physics, and Computer Science architectures, paving a focused pathway toward engineering software disciplines.",
      skills: ["Advanced Mathematics", "Physics", "Computer Science Foundations"],
      progressThreshold: 0.8 // Node triggers glow when scroll progress crosses 80%
    }
  ];

  // State management arrays to independently track the ignition glow of each node safely
  const [activeNodes, setActiveNodes] = useState({});

  // 🚀 SOLVED: Modern Framer Motion event listener optimized to prevent unnecessary re-renders
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const updatedStates = {};
    timelineData.forEach((item) => {
      updatedStates[item.id] = latest >= item.progressThreshold;
    });
    
    // Performance tweak: Only update state if values actually changed to stop lag
    if (JSON.stringify(updatedStates) !== JSON.stringify(activeNodes)) {
      setActiveNodes(updatedStates);
    }
  });

  // Framer Motion card sliding entry variants
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
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 14,
        duration: 0.6
      }
    }
  };

  return (
    <section id="education" className="timeline-space-section" ref={containerRef}>
      <div className="container custom-timeline-container">
        
        {/* SECTION HEADER BLOCK */}
        <div className="text-center w-100 mb-5">
          <span className="section-index-tag">05 // ACADEMIC FOUNDATIONS</span>
          <h2 className="timeline-section-heading mt-2">Lore & Level Progress</h2>
          <div className="heading-violet-underline"></div>
        </div>

        {/* MAIN ALTERNATING TIMELINE TRACK */}
        <div className="timeline-wrapper-track">
          
          {/* STATIC BACKGROUND TRACK GUIDE LINE */}
          <div className="timeline-base-track-line"></div>

          {/* ACTIVE REAL-TIME SCROLL LINKED TIMELINE PROGRESS BEAM */}
          <motion.div 
            className="timeline-active-scroll-beam hardware-accelerated-beam"
            style={{ height: lineHeight }}
          />

          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;
            const entryDirection = isEven ? "left" : "right";
            const isIgnited = activeNodes[item.id] || false;

            return (
              <div 
                key={item.id} 
                className={`timeline-item-row ${isEven ? "row-left-align" : "row-right-align"}`}
              >
                
                {/* POINTER GLOW EFFECT NODES LINKED TO SOLVED EVENT PROGRESS */}
                <div className={`timeline-track-node-beacon ${isIgnited ? "ignite-neon-glow" : ""}`}>
                  <div className="node-core-glow"></div>
                </div>

                {/* SLIDING ENTRANCE CARDS */}
                <motion.div 
                  className="timeline-card-column"
                  custom={entryDirection}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {/* 🚀 ADDED HARDWARE ACCELERATION CLASS */}
                  <div className="timeline-space-glass-card hardware-accelerated-card">
                    
                    {/* BADGES HEADER ROW */}
                    <div className="card-badge-header-row mb-3">
                      <span className="batch-duration-badge">{item.duration}</span>
                      <span className="status-pill education-glow">
                        {item.status}
                      </span>
                    </div>

                    {/* CONTENT DETAILS METRIC LAYOUT */}
                    <h4 className="education-degree-title mb-2">{item.title}</h4>
                    <h5 className="education-college-location mb-3">{item.subtitle}</h5>
                    <p className="education-academic-bio mb-4">{item.description}</p>
                    
                    {/* TECH MINI TAG CHIPS */}
                    <div className="timeline-card-tech-cloud">
                      {item.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="timeline-mini-tag">{skill}</span>
                      ))}
                    </div>
                    
                  </div>
                </motion.div>

                {/* EMPTY BALANCING GRID CELL */}
                <div className="timeline-empty-spacer-column"></div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Education;