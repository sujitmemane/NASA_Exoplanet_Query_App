import React, { useState } from "react";

import SearchBox from "./SearchBox";
import NoData from "./NoData";
import { DataGrid } from "@mui/x-data-grid";
import NoResult from "../assets/noresult.gif";

const columns = [
  {
    field: "pl_name",
    headerName: "Planet Name",
    flex: 1,
  },
  { field: "hostname", headerName: "Host Name", flex: 1 },
  { field: "discoverymethod", headerName: "Discovery Method", flex: 1 },
  { field: "disc_year", headerName: "Discovery Year", flex: 1 },
  { field: "disc_facility", headerName: "Discovery Facility", flex: 1 },
];

const MainBox = ({ data }) => {
  console.log("main-data", data);
  const [tableData, setTableData] = useState([]);
  const [noSearchResult, setNoSearchResult] = useState(false);

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
    if (filteredData.length === 0) {
      setNoSearchResult(true);
    }
    if (
      queries.hostname === null &&
      queries.discoveryfacility === null &&
      queries.discoverymethod === null &&
      queries.discoveryyear === null
    ) {
      setTableData([]);
    }
  };

  const onClearHandler = () => {
    setTableData([]);
    setNoSearchResult(false);
  };

  console.log("table array", tableData);
  console.log(noSearchResult);

  return (
    <div className="w-full bg-white p-4 mt-12 min-h-[700px] h-auto rounded-2xl ">
      <SearchBox
        data={data}
        onSearch={searchHandler}
        onClear={onClearHandler}
      />
      {noSearchResult && (
        <div className="p-8 flex flex-col items-center">
          <img src={NoResult} alt="No Search Result Found" />
        </div>
      )}
      {tableData.length === 0 ? (
        <>
          <NoData />
        </>
      ) : (
        <div className="mt-16 max-h-[550px] overflow-y-auto">
          <DataGrid
            rows={tableData}
            columns={columns}
            pageSize={12}
            pageSizeOptions={[10]}
            checkboxSelection={false}
            autoHeight
            hideFooterPagination
          />
        </div>
      )}
    </div>
  );
};

export default MainBox;
