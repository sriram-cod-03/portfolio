import ProjectCard from "./ProjectCard";
import gameStoreImg from "../assets/projects/gamestore.jpg";
import fitnessImg from "../assets/projects/fitness.jpg";
import weatherImg from "../assets/projects/weather.jpg";
import ScrollReveal from "./ScrollReveal";
import SlideReveal from "./SlideReveal";

const projects = [
  {
    title: "GameStore",
    description:
      "A full-stack MERN based online game store with authentication and protected routes.",
    image: gameStoreImg,
    live: "https://nextgengamehub.netlify.app/",
    github: "https://github.com/sriram-cod-03/Gamestore",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Fitness Tracker",
    description:
      "Track calories, workouts, and nutrition with clean dashboard and secure backend.",
    image: fitnessImg,
    live: "https://fitnesstracker-ram.netlify.app/login",
    github: "https://github.com/sriram-cod-03/FitnessTracker",
    tech: ["React", "Express", "MongoDB"],
  },
  {
    title: "Weather App",
    description:
      "Real-time weather application using public APIs with location-based search.",
    image: weatherImg,
    live: "https://ramweather.netlify.app/",
    github: "https://github.com/sriram-cod-03/weather-app",
    tech: ["React", "API"],
  },
];

const Projects = () => {
  return (
  <ScrollReveal>
    <section id="projects">
      <div className="container">
        <div className="text-center mb-5">
          <SlideReveal direction="left">
          <h2 className="section-title">Projects</h2>
          </SlideReveal>
          <p className="section-subtitle">
            Some of the real-world applications I've built
          </p>
        </div>

        <div className="row g-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  </ScrollReveal>
  );
};

export default Projects;