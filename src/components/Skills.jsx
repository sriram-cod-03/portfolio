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
      <section id="skills" className="skills-modular-section d-flex align-items-center justify-content-center">
        <div className="container custom-skills-container d-flex flex-column align-items-center justify-content-center text-center">
          
          {/* CORE SECTION HEADER */}
          <div className="text-center w-100 mb-5 d-flex flex-column align-items-center justify-content-center">
            <SlideReveal direction="left">
              <span className="section-index-tag">02 // CORE COMPETENCIES</span>
              <h2 className="skills-main-heading text-white mt-2">Skill Tree & Ability Matrix</h2>
              <p className="section-subtitle mx-auto text-center" style={{ color: "#94a3b8" }}>
                Advanced tech stack & engineering architecture toolsets
              </p>
              <div className="heading-violet-underline mx-auto"></div>
            </SlideReveal>
          </div>

          {/* SOLVED INDIVIDUAL HORIZONTAL SPLIT CARDS BINDING TRACK */}
          <div className="skills-categories-wrapper w-100">
            {skillCategories.map((category, catIndex) => (
              <div key={catIndex} className="skill-category-block mb-4">
                
                <SlideReveal direction="left" className="w-100 skill-title-reveal-wrapper">
                  <h3 className="category-row-title mb-3">
                    {category.title}
                  </h3>
                </SlideReveal>

                {/* HORIZONTAL SWIPE CONSTRAINTS MATRIX GRID SETUP - GPU ACCELERATED */}
                <div className="skills-horizontal-scroll-row hardware-accelerated-scroll">
                  {category.items.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="glass-card medium-skill-card hardware-accelerated-card"
                      whileHover={{ scale: 1.04, translateY: -4 }}
                      transition={{ type: "spring", stiffness: 250, damping: 15 }}
                    >
                      <div className="compact-skill-icon-wrap">
                        {skill.icon}
                      </div>
                      <span className="compact-skill-name">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </ScrollReveal>
  );
};

export default Skills;