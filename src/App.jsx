import { useEffect } from "react";
import "./index.css";
import "./App.css";

/* Components */
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education"      /* 01. Education Section */
import Experience from "./components/Experience";   /* 02. Work Experience */
import Certificates from "./components/Certificates"; /* 03. Certifications Section */
import Skills from "./components/Skills";           /* 04. Tech Stack Sets */
import Projects from "./components/Projects";       /* 05. Projects Showcase */
import Contact from "./components/Contact";         /* 06. Form & Map Gateway */
import Footer from "./components/Footer";
import { SpaceBackground } from "./components/SpaceBackground"; // Space Background Import

/* Scroll Reveal Hook System Engine */
function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* MAIN APP WINDOW CONTAINER */
function App() {
  useScrollReveal();
  
  return (
    <>
      {/* Fixed Dynamic Canvas Particle Starfield Layer */}
      <SpaceBackground /> 

      {/* Main Container Wrappers */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        
        <main>
          {/* SOLVED: Order arranged exactly to match your Navbar map index configurations safely */}
          
          {/* 1. HOME SECTION */}
          <section id="home" className="reveal">
            <Hero />
          </section>

          {/* 2. ABOUT SECTION */}
          <section id="about" className="reveal">
            <About />
          </section>

          {/* 3. SKILLS STACK SECTION */}
          <section id="skills" className="reveal">
            <Skills />
          </section>

          {/* 4. WORK EXPERIENCE SECTION */}
          <section id="experience" className="reveal">
            <Experience />
          </section>

          {/* 5. PROJECTS SECTION */}
          <section id="projects" className="reveal">
            <Projects />
          </section>
          
          {/* 6. EDUCATION TIMELINE SECTION */}
          <section id="education" className="reveal">
            <Education/>
          </section>

          {/* 7. CERTIFICATE SECTION */}
          <section id="certificate" className="reveal">
            <Certificates />
          </section>

          {/* 8. CONTACT SECTION */}
          <section id="contact" className="reveal">
            <Contact />
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;