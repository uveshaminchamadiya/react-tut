import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "./parent";

const GrandChild = () => {
  const [color, setColor] = useState("black");
  const [bg, setBg] = useState("white");
  const data = useContext(ThemeContext);
  const theme = data.theme.theme;

  useEffect(() => {
    if (theme === "dark") {
      setColor("white");
      setBg("black");
    } else {
      setColor("black");
      setBg("white");
    }
  }, [theme]); 

  return (
    <div style={{ backgroundColor: bg, color: color }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quas commodi, similique doloremque minima officia cum nostrum, provident veritatis repudiandae, blanditiis consequatur iure? Sapiente molestias ipsam fugit, eveniet officia nisi itaque. Nam, praesentium deleniti?
    </div>
  );
};

export default GrandChild;
