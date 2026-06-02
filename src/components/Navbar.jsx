import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");

  // SOLVED: Strict chronological order matching the layout sequence of your page view
  const navigationItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "certificate", label: "Certificate" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ];

  useEffect(() => {
    // Array derived directly from navigation schema items
    const sections = navigationItems.map(item => item.id);

    const handleScroll = () => {
      // Slightly decreased offset bounds for more responsive active lighting toggles
      const scrollPos = window.scrollY + 160;

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

        {/* Brand Link */}
        <a className="navbar-brand" href="#home">
          Sriram<span className="brand-dot">.dev</span>
        </a>

        {/* Mobile Hamburger Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Items Container */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">

            {/* Dynamic rendering pipeline mapping active colors */}
            {navigationItems.map((item) => (
              <li className="nav-item" key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-link ${active === item.id ? "active" : ""}`}
                >
                  {item.label}
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