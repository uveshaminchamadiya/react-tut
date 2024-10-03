import { useAuth } from "../context/AuthContext";
import Header from "../components/Header/Header";
import { useCity } from "../context/CityContext";

const Home = () => {
  const { user, login, logout } = useAuth();
  const { city } = useCity(); 

  return (
    <div>
      <Header />
      <section>
        {user ? (
          <div>
            <h2>Hello, {user.name}</h2>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <div>
            <h2>Please log in</h2>
            <button onClick={() => login("JohnDoe")}>Login</button>
          </div>
        )}
        <p>Selected City: {city}</p>
      </section>
    </div>
  );
};

export default Home;
