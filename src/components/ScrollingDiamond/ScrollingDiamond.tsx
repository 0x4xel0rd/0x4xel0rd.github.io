import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFull } from "@fortawesome/free-regular-svg-icons";
import { faSquareFull as faSquareChecked } from "@fortawesome/free-solid-svg-icons";

import "./scrollingdiamond.css";
const sectionIds: string[] = [
  "section-intro",
  "section-about",
  "section-work",
  "section-education",
];

function ScrollingDiamond() {
  const NAV_HEIGHT = 50;

  const [activeSection, setActiveSection] = useState<string>(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + NAV_HEIGHT + 1;
      let current = sectionIds[0];

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);

        if (el && el.offsetTop <= scrollPos) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();

    const el = document.getElementById(sectionId);

    if (el) {
      window.scrollTo({
        top: el.offsetTop - NAV_HEIGHT,
      });
    }
  };

  return (
    <div id="scrolling-diamonds">
      {sectionIds.map((sectionId, i) => (
        <div
          key={i}
          data-target={sectionId}
          className={`diamond ${activeSection === sectionId ? `active` : ``}`}
        >
          <a href={`#${sectionId}`} onClick={(e) => handleClick(e, sectionId)}>
            <FontAwesomeIcon
              icon={
                activeSection === sectionId ? faSquareChecked : faSquareFull
              }
            />
          </a>
        </div>
      ))}
    </div>
  );
}

export default ScrollingDiamond;
