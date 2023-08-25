import React, { useState } from "react";
import { toast } from "react-toastify";
const SearchBox = ({ data, onSearch, onClear }) => {
  const [hostName, setHostName] = useState("Host Name");
  const [discoveryMethod, setDiscoveryMethod] = useState("Discovery Method");
  const [discoveryYear, setDiscoveryYear] = useState("Discovery Year");
  const [discoveryFacility, setDiscoveryFacility] =
    useState("Discovery Facility");

  const col2 = [
    "Host Name",
    ,
    ...new Set(data?.map((element) => element.hostname)),
  ];
  const col3 = [
    "Discovery Method",
    ...new Set(data?.map((element) => element.discoverymethod)),
  ];
  const col4 = [
    "Discovery Year",
    ...new Set(data?.map((element) => element.disc_year)),
  ];
  const col5 = [
    "Discovery Facility",
    ...new Set(data?.map((element) => element.disc_facility)),
  ];
  const clearSearchHandler = () => {
    setHostName("Host Name");
    setDiscoveryYear("Discovery Year");
    setDiscoveryMethod("Discovery Method");
    setDiscoveryFacility("Discovery Facility");
    onClear();
  };

  const searchQueryHandler = () => {
    const queries = {
      hostname: hostName === "Host Name" ? null : hostName,
      discoverymethod:
        discoveryMethod === "Discovery Method" ? null : discoveryMethod,
      discoveryyear: discoveryYear === "Discovery Year" ? null : discoveryYear,
      discoveryfacility:
        discoveryFacility === "Discovery Facility" ? null : discoveryFacility,
    };
    onSearch(queries);

    if (
      queries.hostname === null &&
      queries.discoveryfacility === null &&
      queries.discoverymethod === null &&
      queries.discoveryyear === null
    ) {
      toast("You Must Select Something!", {
        position: "bottom-center",
        autoClose: 500,
        hideProgressBar: true,
      });
    }
  };

  return (
    <div>
      <div className="flex text-black justify-between">
        <select
          name="Host Name"
          value={hostName}
          className="w-64 text-sm flex border rounded px-2"
          onChange={(e) => setHostName(e.target.value)}
        >
          {col2.map((element, index) => {
            return (
              <option key={index} value={element} className="w-48">
                {element}
              </option>
            );
          })}
        </select>
        <select
          name="PlanetName"
          value={discoveryMethod}
          className="w-64 text-sm flex border rounded px-2"
          onChange={(e) => setDiscoveryMethod(e.target.value)}
        >
          {col3.map((element, index) => {
            return (
              <option key={index} value={element} className="w-48">
                {element}
              </option>
            );
          })}
        </select>
        <select
          name="PlanetName"
          value={discoveryYear}
          className="w-64 text-sm flex border rounded px-2"
          onChange={(e) => setDiscoveryYear(e.target.value)}
        >
          {col4.map((element, index) => {
            return (
              <option key={index} value={element} className="w-48">
                {element}
              </option>
            );
          })}
        </select>
        <select
          name="PlanetName"
          value={discoveryFacility}
          className="w-76 text-sm flex border rounded px-2"
          onChange={(e) => setDiscoveryFacility(e.target.value)}
        >
          {col5.map((element, index) => {
            return (
              <option key={index} value={element} className="w-48">
                {element}
              </option>
            );
          })}
        </select>
        <button
          className="px-8 py-1 bg-black text-white text-sm"
          onClick={searchQueryHandler}
        >
          Search
        </button>
        <button
          className="px-8 py-1 bg-black text-white text-sm"
          onClick={clearSearchHandler}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
