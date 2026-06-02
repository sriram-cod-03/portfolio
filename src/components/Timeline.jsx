import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import SlideReveal from "./SlideReveal";

const Timeline = () => {
  const educationData = [
    {
      id: 1,
      title: "Bachelor of Engineering — Computer Science & Engineering",
      institution: "AVS Engineering College, Salem - 636003",
      batch: "2023 - 2027",
      status: "Currently Pursuing",
      description: "Developing robust technical proficiency across full-stack systems, architectural security models, and high-performance engineering implementations with a current CGPA tracking of 7.8."
    },
    {
      id: 2,
      title: "Higher Secondary Certificate (HSC)",
      institution: "Sri Rama Krishna Sarada Higher Secondary School, Salem - 636005",
      batch: "2021 - 2023",
      status: "Completed",
      description: "Built foundational core competencies in advanced Mathematics, Physics, and Computer Science architectures, paving a focused pathway toward engineering software disciplines."
    }
  ];

  return (
    <ScrollReveal>
      <section id="education" className="timeline-space-section">
        <div className="container custom-timeline-container">
          
          {/* SECTION HEADER BLOCK */}
          <div className="text-center w-100 mb-5">
            <span className="section-index-tag">02 // KNOWLEDGE BASE</span>
            <h2 className="timeline-section-heading mt-2">Education</h2>
            <div className="heading-violet-underline"></div>
          </div>

          {/* THE MAIN ALTERNATING VERTICAL TIMELINE GRID MATRIX */}
          <div className="timeline-wrapper-track">
            
            {/* CENTRAL VIOLET AXIS BEAM LINE */}
            <div className="timeline-central-axis-line"></div>

            {educationData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={item.id} 
                  className={`timeline-item-row ${isEven ? "row-left-align" : "row-right-align"}`}
                >
                  
                  {/* GLOWING TRACK NODE BEACON */}
                  <div className="timeline-track-node-beacon">
                    <div className="node-core-glow"></div>
                  </div>

                  {/* FROSTED GLASS SPACE THEME CARD MODULE */}
                  <div className="timeline-card-column">
                    <SlideReveal direction={isEven ? "left" : "right"}>
                      <div className="timeline-space-glass-card">
                        
                        {/* CARD META OVERLAY BADGES */}
                        <div className="card-badge-header-row mb-3">
                          <span className="batch-duration-badge">{item.batch}</span>
                          {item.status && (
                            <span className={`status-pill ${item.id === 1 ? "pursuing-glow" : "completed-glow"}`}>
                              {item.status}
                            </span>
                          )}
                        </div>

                        {/* CORE INSTITUTION DETAILS */}
                        <h4 className="education-degree-title mb-2">{item.title}</h4>
                        <h5 className="education-college-location mb-3">{item.institution}</h5>
                        
                        {/* STRUCTURED SENTENCE TEXT DESCRIPTIONS */}
                        <p className="education-academic-bio">{item.description}</p>
                        
                      </div>
                    </SlideReveal>
                  </div>

                  {/* EMPTY CANVAS BLOCK FOR SYMMETRICAL REVERSAL GRID ALIGNMENT */}
                  <div className="timeline-empty-spacer-column"></div>

                </div>
              );
            })}

          </div>

        </div>
      </section>
    </ScrollReveal>
  );
};

export default Timeline;