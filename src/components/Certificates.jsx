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
      <section id="certificate" className="certificate-modular-section d-flex align-items-center justify-content-center">
        <div className="container custom-certificate-container d-flex flex-column align-items-center justify-content-center text-center">
          
          {/* SECTION TITLE ROW */}
          <div className="text-center w-100 mb-5 d-flex flex-column align-items-center justify-content-center">
            <SlideReveal direction="left">
              <span className="section-index-tag">06 // TECHNICAL VERIFICATIONS</span>
              <h2 className="certificate-main-heading text-white mt-2">Legendary Unlocks & Perks</h2>
              <div className="heading-violet-underline mx-auto"></div>
            </SlideReveal>
          </div>

          {/* CREDENTIALS MAPPING LAYER GRIDS */}
          <div className="certificate-responsive-row w-100 d-flex justify-content-center align-items-center flex-wrap">
            {certificateData.map((cert) => (
              <div key={cert.id} className="certificate-card-wrapper d-flex justify-content-center">
                {/* 🚀 ADDED HARDWARE ACCELERATION CLASS */}
                <div className="glass-card certificate-premium-card hardware-accelerated-card d-flex flex-column align-items-center justify-content-center text-center">
                  
                  {/* METADATA ACCENTS */}
                  <div className="cert-header-meta mb-3 d-flex justify-content-center align-items-center flex-wrap gap-2">
                    <span className="cert-date-badge">{cert.date}</span>
                    <span className={`cert-issuer-tag ${getIssuerClass(cert.issuer)}`}>
                      {cert.issuer}
                    </span>
                  </div>
                  
                  {/* DETAILS TEXT LAYOUTS */}
                  <h4 className="cert-title-label mb-2 text-center w-100">{cert.title}</h4>
                  <p className="cert-description-para text-center mx-auto">{cert.description}</p>
                  
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