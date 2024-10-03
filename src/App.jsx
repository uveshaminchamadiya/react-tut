import ComposeProvider from "./theme2/context/ComposeProvider";
import Home from "./theme2/pages/Home";

function App() {
  return (
    <>
      <ComposeProvider>
        <Home />
      </ComposeProvider>
    </>
  );
}

export default App;
