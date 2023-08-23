import "./App.css";
import { MainBox } from "./components/index";
import { useEffect, useState } from "react";
import * as csvtojson from "csvtojson";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("src/data/data.csv");
        const csvData = await response.text();
        const jsonData = await csvtojson().fromString(csvData);
        console.log(jsonData);
        setData(jsonData);
      } catch (error) {
        console.log("Their is Error in Fetching" + error);
      }
    };
    fetchData();
  }, []);

  const requiredData = data.map((element) => {
    return {
      pl_name: element.pl_name,
      hostname: element.hostname,
      discoverymethod: element.discoverymethod,
      disc_year: element.disc_year,
      disc_facility: element.disc_facility,
    };
  });

  return (
    <>
      <div className="app">
        <h1 className="text-4xl text-white text-center font-bold ">
          NASA Exoplanet Query
          <MainBox data={requiredData} />
        </h1>
      </div>
    </>
  );
}

export default App;
