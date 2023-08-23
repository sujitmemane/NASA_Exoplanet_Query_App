import { useEffect, useState } from "react";
import * as csvtojson from "csvtojson";

const MainBox = () => {
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
  console.log(data);

  return (
    <div className="w-full bg-white p-4 mt-12 min-h-[700px] rounded-2xl ">
      <div></div>
    </div>
  );
};

export default MainBox;
