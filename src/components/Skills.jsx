import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaJava,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiNetlify,
  SiPostman,
  SiTailwindcss,
  SiFirebase,
  SiRender
} from "react-icons/si";
import ScrollReveal from "./ScrollReveal";
import SlideReveal from "./SlideReveal";

// Categorized Skills Array Schema
const skillCategories = [
  {
    title: "Languages",
    items: [
      { icon: <FaJsSquare color="#F7DF1E" />, name: "JavaScript" },
      { icon: <FaJava color="#007396" />, name: "Java" },
    ],
  },
  {
    title: "Frontend Development",
    items: [
      { icon: <FaHtml5 color="#E34F26" />, name: "HTML" },
      { icon: <FaCss3Alt color="#1572B6" />, name: "CSS" },
      { icon: <FaBootstrap color="#7952B3" />, name: "Bootstrap" },
      { icon: <SiTailwindcss color="#06B6D4" />, name: "Tailwind CSS" },
      { icon: <FaReact color="#61DBFB" />, name: "React" },
    ],
  },
  {
    title: "Backend Development",
    items: [
      { icon: <FaNodeJs color="#68A063" />, name: "Node.js" },
      { icon: <SiExpress color="#ffffff" />, name: "Express.js" },
    ],
  },
  {
    title: "Database Management",
    items: [
      { icon: <SiMongodb color="#4DB33D" />, name: "MongoDB" },
      { icon: <SiFirebase color="#FFCA28" />, name: "Firebase" },
    ],
  },
  {
    title: "Tools & Deployment",
    items: [
      { icon: <FaGitAlt color="#F1502F" />, name: "Git" },
      { icon: <FaGithub color="#ffffff" />, name: "GitHub" },
      { icon: <SiNetlify color="#00C7B7" />, name: "Netlify" },
      { icon: <SiRender color="#d1d5db" />, name: "Render" },
      { icon: <SiPostman color="#FF6C37" />, name: "Postman" },
    ],
  },
];

const Skills = () => {
  return (
    <ScrollReveal>
      <section id="skills" className="py-5" style={{ background: "transparent" }}>
        <div className="container">
          
          {/* CORE SECTION HEADER SECTION */}
          <div className="text-center mb-5">
            <SlideReveal direction="left">
              <h2 className="section-title text-white">Skills</h2>
              <p className="section-subtitle" style={{ color: "#94a3b8" }}>
                Technologies I Work With
              </p>
            </SlideReveal>
          </div>

          {/* DYNAMIC CATEGORY ITERATOR LAYER */}
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="mb-5">
              <SlideReveal direction="left">
                <h3 className="category-title mb-4 text-start ms-2">
                  <span className="violet-glow" style={{ fontSize: "1.4rem", fontWeight: "600", letterSpacing: "1px" }}>
                    {category.title}
                  </span>
                </h3>
              </SlideReveal>

              <div className="skills-grid">
                {category.items.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="glass-card skill-card"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <ScrollReveal>
                      <div className="skill-icon">
                        {skill.icon}
                      </div>
                    </ScrollReveal>
                    
                    <SlideReveal direction="right">
                      <p className="skill-name m-0 mt-2">
                        {skill.name}
                      </p>
                    </SlideReveal>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}

        </div>
      </section>
    </ScrollReveal>
  );
};

export default Skills;