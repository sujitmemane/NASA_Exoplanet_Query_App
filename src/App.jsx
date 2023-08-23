import "./App.css";
import { MainBox } from "./components/index";

function App() {
  return (
    <>
      <div className="app">
        <h1 className="text-4xl text-white text-center font-bold ">
          NASA Exoplanet Query
          <MainBox />
        </h1>
      </div>
    </>
  );
}

export default App;
