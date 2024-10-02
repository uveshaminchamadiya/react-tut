import { createContext, useContext, useLayoutEffect, useState } from "react";

const getStoredTheme = () => localStorage.getItem("theme") || "dark";
const setStoredTheme = (theme) => localStorage.setItem("theme", theme);

const themeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getStoredTheme());

  useLayoutEffect(() => {
    document.body.style.backgroundColor = theme === "dark" ? "#000" : "#fff";
    document.body.style.color = theme === "dark" ? "#fff" : "#000";
    setStoredTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(themeContext);
};

export default ThemeProvider;
