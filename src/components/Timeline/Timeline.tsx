import "./timeline.css";
import type { Data } from "../../data/experience";
import { motion } from "framer-motion";

interface TimelineProps {
  timelineData: Data[];
}

function Timeline({ timelineData }: TimelineProps) {
  return (
    <div className="timeline">
      {timelineData.map((data, i) => (
        <motion.div
          className="timeline-item"
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="timeline-dot" />
          <div className="timeline-content">
            <span className="timeline-year">{data.year}</span>
            <h4>{data.title}</h4>
            <p className="timeline-company">{data.company}</p>
            {data.description && <p>{data.description}</p>}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Timeline;
