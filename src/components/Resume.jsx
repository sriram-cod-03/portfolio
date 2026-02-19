const Resume = () => {
  return (
    <section id="resume" className="resume-section py-5">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="resume-title">Resume</h2>
          <p className="resume-subtitle">
            A quick overview of my profile
          </p>
        </div>

        {/* Card */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card resume-card text-center">
              <div className="card-body">

                <h3 className="resume-name">Sriram R</h3>
                <p className="resume-role">
                  Software Developer | MERN Stack
                </p>

                <p className="resume-text">
                  Motivated Computer Science Engineering student with a strong
                  interest in Full Stack Development and Software Engineering.
                  Experienced in building real-world applications using the
                  MERN stack, REST APIs, and modern frontend practices.
                </p>

                <div className="resume-actions">
                  <a
                    href="/resume.pdf"
                    download
                    className="btn btn-primary"
                  >
                    📄 Download Resume
                  </a>

                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-primary"
                  >
                    👀 View Resume
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
