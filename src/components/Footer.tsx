import PersonalLinks from "./PersonalLinks";
import "./footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-info">
        Copyright &#169; Suvam Barui <FontAwesomeIcon icon={faHeart} />
      </div>
      <PersonalLinks />
    </footer>
  );
}

export default Footer;
