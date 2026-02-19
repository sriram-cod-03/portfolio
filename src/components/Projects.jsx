import { FaGithub } from "react-icons/fa";
import gameStoreImg from "../assets/projects/gamestore.jpg";
import fitnessImg from "../assets/projects/fitness.jpg";
import weatherImg from "../assets/projects/weather.jpg";

const projects = [
  {
    title: "GameStore",
    desc: "A full-stack MERN based online game store with authentication and protected routes.",
    image: gameStoreImg,
    live: "https://nextgengamehub.netlify.app/",
    github: "https://github.com/sriram-cod-03/Gamestore",
  },
  {
    title: "Fitness Tracker",
    desc: "Track calories, workouts, and nutrition with clean dashboard and secure backend.",
    image: fitnessImg,
    live: "https://fitnesstracker-ram.netlify.app/login",
    github: "https://github.com/sriram-cod-03/FitnessTracker",
  },
  {
    title: "Weather App",
    desc: "Real-time weather application using public APIs with location-based search.",
    image: weatherImg,
    live: "https://ramweather.netlify.app/",
    github: "https://github.com/sriram-cod-03/weather-app",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Some of the real-world applications I've built
          </p>
        </div>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="modern-project-card">

                {/* IMAGE */}
                <div className="project-image">

                  <img src={project.image} alt={project.title} />

                  {/* 🔥 GitHub Icon Top Corner */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="github-corner"
                  >
                    <FaGithub />
                  </a>

                </div>

                {/* CONTENT */}
                <div className="project-body">
                  <h5>{project.title}</h5>
                  <p>{project.desc}</p>

                  <div className="project-buttons">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-live"
                    >
                      🚀 Live
                    </a>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
