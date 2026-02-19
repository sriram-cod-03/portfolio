import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiNetlify,
  SiPostman,
  SiRailway
} from "react-icons/si";

const skills = [
  { icon: <FaReact color="#61DBFB" />, name: "React" },
  { icon: <FaNodeJs color="#68A063" />, name: "Node.js" },
  { icon: <SiExpress color="#ffffff" />, name: "Express" },
  { icon: <SiMongodb color="#4DB33D" />, name: "MongoDB" },
  { icon: <FaGitAlt color="#F1502F" />, name: "Git" },
  { icon: <FaGithub color="#ffffff" />, name: "GitHub" },
  { icon: <SiNetlify color="#00C7B7" />, name: "Netlify" },
  { icon: <SiPostman color="#FF6C37" />, name: "Postman" },
  { icon: <SiRailway color="#8A2BE2" />, name: "Railway" },
];

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle">Technologies I Work With</p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="glass-card skill-card"
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="skill-icon">
              {skill.icon}
            </div>
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
