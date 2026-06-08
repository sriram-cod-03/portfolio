import React, { useEffect, Suspense, lazy } from "react";
import "./index.css";
import "./App.css";

/* Critical Initial Load Components (Loads Immediately) */
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { SpaceBackground } from "./components/SpaceBackground"; 
import ScrollToTop from "./components/ScrollToTop";

/* 🚀 Lazy Loaded Components (Optimizes Initial Load Time) */
const About = lazy(() => import("./components/About"));
const Education = lazy(() => import("./components/Education"));
const Experience = lazy(() => import("./components/Experience"));
const Certificates = lazy(() => import("./components/Certificates"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));

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
          
          {/* 1. HOME SECTION (Critical Path - Loads Immediately) */}
          <section id="home" className="reveal">
            <Hero />
          </section>

          {/* 🚀 SUSPENSE WRAPPER FOR LAZY COMPONENTS */}
          <Suspense fallback={
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "30vh", width: "100%" }}>
               {/* Uses your existing custom cyber spinner while loading */}
               <div className="cyber-spinner-loader">
                 <svg viewBox="0 0 24 24" width="30" height="30">
                   <circle className="path" cx="12" cy="12" r="10" fill="none" strokeWidth="3"></circle>
                 </svg>
               </div>
            </div>
          }>
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
          </Suspense>
        </main>
        <ScrollToTop/>
        <Footer />
      </div>
    </>
  );
}

export default App;