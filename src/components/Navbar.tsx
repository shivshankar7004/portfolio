import React from "react";
import { useState, useEffect } from "react";
import Sun from "./themeBtn/Sun.svg";
import Moon from "./themeBtn/Moon.svg";

const Navbar: React.FC = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme:dark").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <nav
      id="Navbar"
      className="flex justify-between items-center p-4 dark:bg-blue-500 bg-gray-800 text-white ">
      <div className="text-lg font-bold ml-8">SHIVSHANKAR KUMAR</div>
      <ul className="flex space-x-4 mr-8">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#Education">Education</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <button
            id="themeSwitch"
            onClick={handleThemeSwitch}
            className=" rounded-full focus:outline-none"
          >
            <img
              src={theme === "dark" ? Sun : Moon}
              alt={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
