import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import SlideReveal from "./SlideReveal";

const Experience = () => {
  const workData = [
    {
      id: 1,
      title: "CUDA Python Developer — Intern",
      company: "ADVI Group of Companies",
      duration: "25 June 2025 - 29 July 2025",
      status: "Professional Internship",
      description: "Completed an advanced technical internship involving the native deployment of CUDA Python models onto hardware-accelerated Nvidia boards. Focused heavily on discrete GPU parallel computing matrix architectures, shared thread optimizations, and workload execution scaling.",
      skills: ["CUDA", "GPU Acceleration", "Python", "Nvidia Hardware", "Parallel Processing"]
    },
    {
      id: 2,
      title: "Full Stack Developer — Independent Projects",
      company: "Self-Directed / Personal Production",
      duration: "2024 - Present",
      status: "Hands-on Experience",
      description: "Architected, designed, and deployed multiple full-stack production web applications. Engineered secure REST API endpoints, handled schema design patterns with NoSQL databases, and optimized client-side state performance frameworks.",
      skills: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "Cloud Deployment"]
    }
  ];

  return (
    <ScrollReveal>
      <section id="experience" className="experience-rings-section">
        
        {/* BACKGROUND MATRIX STATIC RINGS LAYER */}
        <div className="experience-rings-backdrop">
          <div className="magic-ring-exp exp-ring-1"></div>
          <div className="magic-ring-exp exp-ring-2"></div>
          <div className="magic-ring-exp exp-ring-3"></div>
          <div className="magic-ring-exp exp-ring-4"></div>
        </div>

        <div className="container custom-experience-container">
          
          {/* SECTION HEADER BLOCK */}
          <div className="text-center w-100 mb-5">
            <span className="section-index-tag">03 // PROFESSIONAL TRACK</span>
            <h2 className="experience-section-heading mt-2">Work Experience</h2>
            <div className="heading-violet-underline"></div>
          </div>

          {/* MASTER ALTERNATING ROWS CONTAINER */}
          <div className="experience-wrapper-track">
            {workData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={item.id} 
                  className={`experience-item-row ${isEven ? "row-left-align" : "row-right-align"}`}
                >
                  {/* TEXT PANEL COLUMN WITH RESTORED RADAR HOVER GENERATORS */}
                  <div className="experience-card-column">
                    <SlideReveal direction={isEven ? "left" : "right"}>
                      <div className="experience-space-glass-card">
                        
                        {/* KINETIC WAVE RINGS GENERATOR NODES FOR SCREEN RECORD NO.1 EFFECT */}
                        <div className="card-radar-wave-emitter emitter-left"></div>
                        <div className="card-radar-wave-emitter emitter-right"></div>
                        
                        {/* BADGES METADATA ROW */}
                        <div className="card-badge-header-row mb-3">
                          <span className="work-duration-badge">{item.duration}</span>
                          <span className="status-pill work-glow-badge">
                            {item.status}
                          </span>
                        </div>

                        {/* CORE CONTENT LABELS */}
                        <h4 className="work-position-title mb-2">{item.title}</h4>
                        <h5 className="work-company-name mb-3">{item.company}</h5>
                        <p className="work-technical-bio mb-4">{item.description}</p>
                        
                        {/* SKILLS CHIPS MATRIX CLOUD */}
                        <div className="experience-card-tech-cloud">
                          {item.skills.map((skill, sIdx) => (
                            <span key={sIdx} className="experience-mini-tag">{skill}</span>
                          ))}
                        </div>
                        
                      </div>
                    </SlideReveal>
                  </div>

                  {/* EMPTY BALANCING GRID CELL SPACER */}
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