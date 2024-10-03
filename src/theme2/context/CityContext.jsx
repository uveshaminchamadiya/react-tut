import { createContext, useContext, useLayoutEffect, useState } from "react";
import Cookies from 'js-cookie';


const cities = ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar"];

const CityContext = createContext();


export const CityProvider = ({ children }) => {
    const defaultCity = Cookies.get('city') || cities[0];
    const [city, setCity] = useState(defaultCity); 

  useLayoutEffect(() => {
    Cookies.set('city', city);
  }, [city]);

  return (
    <CityContext.Provider value={{ city, setCity, cities }}>
      {children}
    </CityContext.Provider>
  );
};

export const useCity = () => {
  return useContext(CityContext);
};

export default CityProvider;
