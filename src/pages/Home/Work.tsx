import Timeline from "../../components/Timeline/Timeline";
import { works } from "../../data/experience";
import "./work.css";

function Work() {
  return (
    <section id="section-work">
      <h3>Work Experience</h3>
      <Timeline timelineData={works} />
    </section>
  );
}

export default Work;
