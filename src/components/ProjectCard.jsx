const ProjectCard = ({ project }) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div
        className={`card project-card h-100 ${
          project.featured ? "project-featured" : ""
        }`}
      >
        <div className="card-body d-flex flex-column glass-card">

          {/* Title */}
          <h5 className="project-title">
            {project.title}
          </h5>

          {/* Description */}
          <p className="project-desc">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="project-tech-wrapper">
            {project.tech.map((tech, index) => (
              <span key={index} className="project-tech">
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="mt-auto d-flex gap-2">
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-primary btn-sm"
            >
              Live Demo
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-sm"
            >
              GitHub
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
