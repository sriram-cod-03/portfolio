import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaArrowDown, FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../assets/profile.jpg";
import ScrollReveal from "./ScrollReveal";

const Hero = () => {
  return (
    <ScrollReveal>
    <section id="home" className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-6">

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="hero-subtitle"
            >
              Hello, I’m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              Sriram R
            </motion.h1>

            <motion.h4
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="hero-typing violet-glow"
            >
              <Typewriter
                words={[
                  "Frontend Developer",
                  "Backend Developer",
                  "MERN Stack Developer",
                  "Web Designer",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </motion.h4>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="hero-desc"
            >
              I craft scalable full-stack web applications with clean UI,
              secure backend logic, and real-world functionality.
            </motion.p>

            {/* BUTTON */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="hero-buttons"
            >
              <a
                href="/Sriram_R_Resume.pdf"
                className="btn btn-outline-light hero-btn"
              >
                Download CV
              </a>
            </motion.div>

            {/* SOCIAL ICONS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              className="hero-socials"
            >
              <a
                href="https://github.com/sriram-cod-03"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/sriram-r-6383ba2a9"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </motion.div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 d-flex justify-content-center mt-5 mt-lg-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="hero-image-wrapper"
            >
              <img src={profile} alt="Sriram R" />
            </motion.div>
          </div>

        </div>

        {/* SCROLL INDICATOR */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="scroll-indicator text-center mt-4"
        >
          <FaArrowDown />
        </motion.div>
      </div>
    </section>
  </ScrollReveal>
  );
};

export default Hero;
