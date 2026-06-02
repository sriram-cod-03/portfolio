import React from "react";
import ScrollReveal from "./ScrollReveal";
import SlideReveal from "./SlideReveal";

const Certificate = () => {
  const certificateData = [
    {
      id: 1,
      title: "Oracle Certified Foundations Associate",
      issuer: "Oracle",
      date: "April - May 2025",
      description: "Validated fundamental proficiency in core database concepts, SQL structures, schema design models, and secure data access procedures."
    },
    {
      id: 2,
      title: "CUDA Python Deployment Certification",
      issuer: "ADVI Group",
      date: "July 2025",
      description: "Demonstrated advanced skills in setting up execution pipelines, utilizing shared thread models, and optimizing runtime execution on hardware boards."
    },
    {
      id: 3,
      title: "Full Stack Development Certification",
      issuer: "GUVI",
      date: "May 2025",
      description: "Mastered end-to-end web engineering architectures utilizing the MERN stack (MongoDB, Express, React, Node.js). Engineered scalable REST APIs, state-management workflows, and structural database query models for production-ready applications."
    },
    {
      id: 4,
      title: "Blockchain Technology Certification",
      issuer: "GUVI",
      date: "February 2026",
      description: "Gained comprehensive insight into decentralized ledger systems, cryptographic hashing structures, smart contract execution models, and distributed consensus mechanisms targeting highly secure web platforms."
    }
  ];

  // Helper function to dynamically map branding colors based on the issuer name
  const getIssuerClass = (issuer) => {
    switch (issuer.toUpperCase()) {
      case "GUVI":
        return "guvi-green";
      case "ORACLE":
        return "oracle-red";
      case "ADVI GROUP":
        return "advi-blue";
      default:
        return "";
    }
  };

  return (
    <ScrollReveal>
      {/* Target anchor linked perfectly to your centralized scrolling navbar logic */}
      <section id="certificate" className="certificate-modular-section">
        <div className="container custom-certificate-container">
          
          {/* SECTION TITLE ROW */}
          <div className="text-center w-100 mb-5">
            <SlideReveal direction="left">
              <span className="section-index-tag">04 // CREDENTIALS CHECK</span>
              <h2 className="certificate-main-heading text-white mt-2">Certifications</h2>
              <div className="heading-violet-underline"></div>
            </SlideReveal>
          </div>

          {/* CREDENTIALS MAPPING LAYER GRIDS */}
          <div className="certificate-responsive-row">
            {certificateData.map((cert) => (
              <div key={cert.id} className="certificate-card-wrapper">
                <div className="glass-card certificate-premium-card">
                  
                  {/* METADATA ACCENTS */}
                  <div className="cert-header-meta mb-3">
                    <span className="cert-date-badge">{cert.date}</span>
                    <span className={`cert-issuer-tag ${getIssuerClass(cert.issuer)}`}>
                      {cert.issuer}
                    </span>
                  </div>
                  
                  {/* DETAILS TEXT LAYOUTS */}
                  <h4 className="cert-title-label mb-2">{cert.title}</h4>
                  <p className="cert-description-para">{cert.description}</p>
                  
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </ScrollReveal>
  );
};

export default Certificate;