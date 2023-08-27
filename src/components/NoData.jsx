import React from "react";

const NoData = () => {
  return (
    <div className="text-black mt-12 md:p-44">
      <h1 className="text-md md:text-2xl">
        Exoplanets are planets outside the Solar System
      </h1>
      <h3 className=" text-sm md:text-2xl">
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
