import React, { useState } from "react"; // Import React and useState

import SearchBox from "./SearchBox";
import NoData from "./NoData";

const MainBox = ({ data }) => {
  console.log(data);
  const [tableData, setTableData] = useState(data);

  const searchHandler = (queries) => {
    let filteredData = [...data];

    if (queries.hostname) {
      filteredData = filteredData.filter(
        (element) => element.hostname === queries.hostname
      );
    }
    if (queries.discoverymethod) {
      filteredData = filteredData.filter(
        (element) => element.discoverymethod === queries.discoverymethod
      );
    }
    if (queries.discoveryyear) {
      filteredData = filteredData.filter(
        (element) => element.disc_year === queries.discoveryyear
      );
    }
    if (queries.discoveryfacility) {
      filteredData = filteredData.filter(
        (element) => element.disc_facility === queries.discoveryfacility
      );
    }

    setTableData(filteredData);

    console.log(filteredData);
  };

  console.log(tableData);

  return (
    <div className="w-full bg-white p-4 mt-12 min-h-[700px] rounded-2xl ">
      <SearchBox data={data} onSearch={searchHandler} />

      <NoData />
    </div>
  );
};

export default MainBox;
