import { FaGithub } from "react-icons/fa";
import SlideReveal from "./SlideReveal";

const ProjectCard = ({ project }) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="modern-project-card h-100">
        {/* IMAGE */}
        <div className="project-image">
          <img src={project.image} alt={project.title} />

          {/* GITHUB CORNER ICON */}
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
        <div className="project-body d-flex flex-column">
          <h5 className="project-title">
            <SlideReveal direction="left">
            {project.title}
            </SlideReveal>
          </h5>
          <p className="project-desc">{project.description}</p>
          <div className="mt-auto d-flex gap-2">
            <SlideReveal direction="right">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="btn-visit"
              >
                <span className="link-icon">🔗</span>
                Visit Project
              </a>
            </SlideReveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
