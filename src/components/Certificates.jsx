import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const certificates = [
  {
    title: "CUDA Python Internship",
    pdf: "/certificates/Sriram_ADVIINTERN_Certificate.pdf",
  },
  {
    title: "Oracle Certification",
    pdf: "/certificates/Sriram_oracle_Certificate.pdf",
  },
  {
    title: "Unity Workshop",
    pdf: "/certificates/Sriram_workshop_Certificate.pdf",
  },
];

const Certificates = () => {
  return (
    <ScrollReveal>
    <section>
      <h2 className="section-title service-card">Certificates</h2>

      <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className="glass-card text-white"
            style={{ flex: "1 1 300px", textAlign: "center" }}
            whileHover={{ scale: 1.05 }}
          >
            <h3>{cert.title}</h3>

            <a
              href={cert.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-galaxy"
              style={{ marginTop: "20px", display: "inline-block" }}
            >
              View Certificate
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  </ScrollReveal>
  );
};

export default Certificates;
