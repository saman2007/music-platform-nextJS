import { createContext, useEffect, useState } from "react";

const context = createContext({
  theme: null,
  themeChangeHandler: () => {},
});

const ContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const defaultTheme = localStorage.getItem("theme");

    setIsDarkMode(defaultTheme ? defaultTheme === "dark" : true);

    if (!defaultTheme) localStorage.setItem("theme", "dark");

    (defaultTheme === "dark" || !defaultTheme) &&
      document.querySelector("html").classList.add("dark");
  });

  //a function to change the theme of website
  const changeTheme = () => {
    if (isDarkMode) {
      document.querySelector("html").classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.querySelector("html").classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <context.Provider
      value={{ theme: isDarkMode, themeChangeHandler: changeTheme }}
    >
      {children}
    </context.Provider>
  );
};

export default ContextProvider;
export { context };
