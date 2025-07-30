import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";

import "./floatlinks.css";

function FloatLinks() {
  return (
    <div id="float-links">
      <a href="mailto:sb9895@rit.edu" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a
        href="https://www.linkedin.com/in/suvam-barui/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="tel:+15852868666" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faPhone} />
      </a>
      <a href="https://github.com/0x4xel0rd" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://medium.com/@0xAxel0rd" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faMedium} />
      </a>
      <div id="decorate-line"></div>
    </div>
  );
}

export default FloatLinks;
