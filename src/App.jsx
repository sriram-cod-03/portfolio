import { useEffect } from "react";
import "./index.css";
import "./App.css";

/* Components */
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { SpaceBackground } from "./components/SpaceBackground"; // Space Background Import
import About from "./components/About";

/* Scroll Reveal */
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

/* MAIN APP */
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
          <section className="reveal"><Hero /></section>
          <section className="reveal"><About/></section>
          <section className="reveal"><Overview /></section>
          <section className="reveal"><Skills /></section>
          <section className="reveal"><Projects /></section>
          <section className="reveal"><Certificates /></section>
          <section className="reveal"><Contact /></section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;