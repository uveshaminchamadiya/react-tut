import { useTheme } from "../../context/ThemeContext";
import './Header.css';

const Header = () => {
  const { toggleTheme, theme } = useTheme();
  return (
    <header className="header">
      <span style={{color: "black"}}>VSS Labs</span>
      <button onClick={toggleTheme}>
        {theme === "dark" ? "Light" : "Dark"}
      </button>
    </header>
  );
};

export default Header;
