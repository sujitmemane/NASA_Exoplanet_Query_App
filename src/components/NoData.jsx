import React from "react";

const NoData = () => {
  return (
    <div className="text-black p-44">
      <h1>Exoplanets are planets outside the Solar System</h1>
      <h3 className="text-2xl">
        Here you can query
        <span className="text-blue-500 mx-2 ">
          NASA's Exoplanet Archive
        </span>{" "}
        and find the one you love the most.
      </h3>
    </div>
  );
};

export default NoData;
