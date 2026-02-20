import { useEffect, useState } from "react";
const Navbar = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = ["home", "skills", "projects", "contact"];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        if (
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar">
      <div className="container">

        {/* Brand */}
        <a className="navbar-brand" href="#home">
          Sriram<span className="brand-dot">.dev</span>
        </a>

        {/* Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">

            {["skills", "projects", "contact"].map((item) => (
              <li className="nav-item" key={item}>
                <a
                  href={`#${item}`}
                  className={`nav-link ${active === item ? "active" : ""}`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
