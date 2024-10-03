import { AuthProvider } from "./AuthContext";
import CityProvider from "./CityContext";
import ThemeProvider from "./ThemeContext";

const ComposeProvider = ({ children }) => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <CityProvider>{children}</CityProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default ComposeProvider;
