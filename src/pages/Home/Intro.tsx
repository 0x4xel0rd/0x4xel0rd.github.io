import SmokeBackground from "../../components/Cursor/SmokeBackground";
import PersonalLinks from "../../components/PersonalLinks";

import "./intro.css";

function Intro() {
  return (
    <section id="section-intro" style={{ position: "relative" }}>
      <SmokeBackground />
      <div id="intro-info" style={{ zIndex: 1, position: "relative" }}>
        <h1>Suvam Barui</h1>
        <span id="intro-subtitle">Security Engineer</span>
        <PersonalLinks />
      </div>
    </section>
  );
}

export default Intro;
