import Timeline from "../../components/Timeline/Timeline";
import { education } from "../../data/experience";
import "./education.css";

function Education() {
  return (
    <section id="section-education">
      <h3>Education</h3>
      <Timeline timelineData={education} />
    </section>
  );
}

export default Education;
