import "./navbar.css";
import { projects } from "../data/projects";

import { useState } from "react";
import { Link } from "react-router-dom";

import resume from "../assets/documents/resume.pdf";
import ThemeButton from "./Theme/ThemeButton";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Suvam Barui</div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <Link to="/projects">Projects</Link>
          {showDropdown && projects && (
            <ul className="dropdown">
              {projects.map((project, i) => (
                <li key={i}>
                  <Link to={`/projects/${project.id}`}>{project.title}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li>
          <Link to="/hobbies">Hobbies</Link>
        </li>
        <li>
          <button
            onClick={() => {
              window.open(resume, "_blank");
            }}
          >
            Resume
          </button>
        </li>
      </ul>
      <div className="desktopOthers">
        <ThemeButton />
        <button>Terminal</button>
      </div>
    </nav>
  );
}

export default Navbar;
