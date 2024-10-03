import { useTheme } from "../../context/ThemeContext";
import { useCity } from "../../context/CityContext"; 
import './Header.css';

const Header = () => {
  const { toggleTheme, theme } = useTheme();
  const { city, setCity, cities } = useCity(); 

  return (
    <header className="header">
      <span style={{ color: "black" }}>VSS Labs</span>
      <button onClick={toggleTheme}>
        {theme === "dark" ? "Light" : "Dark"}
      </button>

      <select
        value={city}
        onChange={(e) => setCity(e.target.value)} 
      >
        {cities.map((cityName) => (
          <option key={cityName} value={cityName}>
            {cityName}
          </option>
        ))}
      </select>
      <span>Selected City: {city}</span>
    </header>
  );
};

export default Header;
