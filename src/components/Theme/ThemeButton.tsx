import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";

import { useEffect, useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

import "./themebutton.css";

type Theme = "light" | "dark";

function ThemeButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    const saved = (localStorage.getItem("theme") || "dark") as Theme;
    document.documentElement.classList.toggle("dark-theme", saved === "dark");
    setTheme(saved);
  }, []);

  function handleThemeChange() {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("dark-theme", next === "dark");
      localStorage.setItem("theme", next);
      return next;
    });
  }

  return (
    <button
      className="theme-button"
      onClick={() => {
        handleThemeChange();
      }}
    >
      <FontAwesomeIcon icon={theme === "dark" ? faMoon : faSun} />
    </button>
  );
}

export default ThemeButton;
