import { createContext, useState } from "react";
import Child from "./child";

export const ThemeContext = createContext(null);

const ThemeProvider = ThemeContext.Provider;

const Parent = () => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };
  return (
    <ThemeProvider
      value={{
        theme: {theme}
      }}
    >
      <Child />
      <button onClick={toggleTheme}>Toggle</button>
    </ThemeProvider>
  );
};

export default Parent;