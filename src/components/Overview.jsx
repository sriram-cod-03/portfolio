import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import SlideReveal from "./SlideReveal";

const Overview = () => {
  return (
    <ScrollReveal>
    <section>
      <SlideReveal direction="left">
      <h2 className="section-title">What I Do</h2>
      </SlideReveal>
      <SlideReveal direction="right">
      <p className="section-subtitle">Frontend • Backend • Full Stack</p>
      </SlideReveal>
      <div className="text-white" style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
        {["Frontend Development", "Backend APIs", "Full Stack Apps"].map((item, index) => (
          <motion.div
            key={index}
            className="glass-card service-card"
            style={{ flex: "1 1 300px", textAlign: "center" }}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3>{item}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  </ScrollReveal>  
  );
};

export default Overview;
