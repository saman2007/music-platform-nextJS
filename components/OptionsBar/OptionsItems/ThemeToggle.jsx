import { useState } from "react";
import MoonIcon from "@heroicons/react/solid/MoonIcon";
import SunIcon from "@heroicons/react/solid/SunIcon";
import { useEffect } from "react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    //if html contains dark, it means website is in dark mode, else it means website is in light mode
    setIsDarkMode(document.querySelector("html").classList.contains("dark"));
  }, []);

  //a function to change the theme of website
  const changeTheme = () => {
    if (isDarkMode) {
      document.querySelector("html").classList.remove("dark");
      setIsDarkMode(false);
    } else {
      document.querySelector("html").classList.add("dark");
      setIsDarkMode(true);
    }
  };
  return (
    <li
      onClick={changeTheme}
      className="min-h-[35px] gap-x-[5px] cursor-pointer transition-all duration-300 dark:bg-black bg-white dark:text-white text-black flex justify-center items-center"
    >
      {isDarkMode ? (
        <SunIcon className="w-[25px] h-[25px] text-white" />
      ) : (
        <MoonIcon className="w-[25px] h-[25px] text-black" />
      )}
      {isDarkMode ? "light mode" : "dark mode"}
    </li>
  );
};

export default ThemeToggle;
