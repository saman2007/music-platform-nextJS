import { useContext } from "react";
import MoonIcon from "@heroicons/react/solid/MoonIcon";
import SunIcon from "@heroicons/react/solid/SunIcon";
import { context } from "../../../store/context";

const ThemeToggle = () => {
  const ctx = useContext(context);

  return (
    <li
      onClick={ctx.themeChangeHandler}
      className="min-h-[35px] gap-x-[5px] cursor-pointer transition-all duration-300 dark:bg-black bg-white dark:text-white text-black flex justify-center items-center"
    >
      {ctx.theme ? (
        <SunIcon className="w-[25px] h-[25px] text-white" />
      ) : (
        <MoonIcon className="w-[25px] h-[25px] text-black" />
      )}
      {ctx.theme ? "light mode" : "dark mode"}
    </li>
  );
};

export default ThemeToggle;
