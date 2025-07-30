import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import type { ProjectData } from "../../data/projects";

interface ProjectCardProps {
  data: ProjectData;
}

function ProjectCard({ data }: ProjectCardProps) {
  return (
    <div className="project-card">
      <div className="project-img project-details">
        <img src="" alt={data.imgdesc} />
      </div>
      <div className="project-title project-details">
        <h4>{data.title}</h4>
        <div className="project-links project-details">
          {data.github && (
            <a href="" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          )}
          {data.live && <a href="">Live</a>}
          <a href={`/projects/${data.id}`}>
            <FontAwesomeIcon icon={faArrowCircleRight} />
          </a>
        </div>
      </div>
      {data.shortDesc && (
        <div className="project-short-desc project-details">
          <p>{data.shortDesc}</p>
        </div>
      )}
      {data.skills && (
        <div className="project-skills project-details">
          {data.skills.map((skill, i) => (
            <span key={i}>{skill}</span>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
