import React from "react";
import { FaGithub } from "react-icons/fa"; 
import ScrollReveal from "./ScrollReveal";
import SlideReveal from "./SlideReveal";

/* SOLVED: Standardized local asset module definitions compiled explicitly */
import gameStoreImg from "../assets/projects/gamestore.jpg";
import fitnessImg from "../assets/projects/fitness.jpg";
import weatherImg from "../assets/projects/weather.jpg";

const Projects = () => {
  const dynamicProjects = [
    {
      id: 1,
      title: "GameStore",
      image: gameStoreImg, /* SOLVED: Bind the imported reference hook variable */
      description: "A premium full-stack MERN-based online gaming storefront featuring robust authentication architectures, secure protected routes, and interactive product catalogs.",
      demoLink: "https://nextgengamehub.netlify.app", 
      githubLink: "https://github.com/sriram-cod-03/GameStore" 
    },
    {
      id: 2,
      title: "Fitness Tracker",
      image: fitnessImg, /* SOLVED: Bind the imported reference hook variable */
      description: "Track calories, daily target workouts, and nutrition profiles powered by a clean performance dashboard and a secure MongoDB backend system layout.",
      demoLink: "https://fitnesstracker-ram.netlify.app",
      githubLink: "https://github.com/sriram-cod-03/FitnessTracker"
    },
    {
      id: 3,
      title: "Weather App",
      image: weatherImg, /* SOLVED: Bind the imported reference hook variable */
      description: "Real-time global weather monitoring engine implementing public asynchronous APIs with location-based geolocation radar tracking fields.",
      demoLink: "https://ramweather.netlify.app",
      githubLink: "https://github.com/sriram-cod-03/WeatherApp"
    }
  ];

  return (
    <ScrollReveal>
      <section id="projects" className="projects-section">
        <div className="container custom-projects-container">
          
          {/* SECTION TITLE ROW */}
          <div className="text-center w-100 mb-4">
            <SlideReveal direction="left">
              <span className="section-index-tag">04 // ENGINEERING SOLUTIONS</span>
              <h2 className="projects-main-heading text-white">Custom Builds & Deployments</h2>
              <p style={{ color: "#94a3b8", fontSize: "1.05rem" }}>
                Production-ready deployments & architectural case studies
              </p>
              <div className="heading-violet-underline"></div>
            </SlideReveal>
          </div>

          {/* MASTER RESPONSIVE FLEX ROW */}
          <div className="projects-responsive-flex-row">
            {dynamicProjects.map((project) => (
              <div key={project.id} className="project-card-column">
                <div className="modern-project-card">
                  
                  {/* PROJECT BOUND IMAGE CONTAINER */}
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    
                    {/* FLOATING PREMIUM GITHUB LINK OVERLAY */}
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="project-github-link"
                      title="View Source Code"
                    >
                      <FaGithub />
                    </a>
                  </div>

                  {/* DETAILS MATRIX PANEL */}
                  <div className="project-body">
                    <h5>{project.title}</h5>
                    <p>{project.description}</p>
                    
                    <a href={project.demoLink} target="_blank" rel="noreferrer" className="btn-visit">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: "6px" }}><path d="M432,320H400a16,16,0,0,0-16,16V448H48V112H160a16,16,0,0,0,16-16V64a16,16,0,0,0-16-16H32A32,32,0,0,0,0,80V480a32,32,0,0,0,32,32H400a32,32,0,0,0,32-32V336A16,16,0,0,0,432,320ZM438.39,7.61a16,16,0,0,0-22.62,0L301,122.39,289.4,110.8a16,16,0,0,0-27.31,11.31V200a16,16,0,0,0,16,16H361.9a16,16,0,0,0,11.31-27.31L361.6,177.1,438.39,30.23A16,16,0,0,0,438.39,7.61Z"></path></svg>
                      Visit Project
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </ScrollReveal>
  );
};

export default Projects;