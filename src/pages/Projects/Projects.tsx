import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import "./project.css";

function Projects() {
  return (
    <section id="section-projects">
      <h2>Projects</h2>
      {projects.length > 0 && (
        <div className="projects-container">
          {projects.map((data, id) => (
            <ProjectCard data={data} key={id} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Projects;
