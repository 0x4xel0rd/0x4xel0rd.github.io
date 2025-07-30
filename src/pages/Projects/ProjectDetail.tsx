import { useParams } from "react-router-dom";
import { projects } from "../../data/projects";

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <p>Project not found.</p>;

  return (
    <section id="section-project-detail">
      <h1>{project.title}</h1>
      <img src="" alt={project.imgdesc} />
      <p>{project.desc}</p>
    </section>
  );
}

export default ProjectDetail;
