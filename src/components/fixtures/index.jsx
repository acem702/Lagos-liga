import React from "react";
import FixturesList from "./fixturesList";

const Fixture = ({ fixtures, title }) => {
  return (
    <div>
      {title && (
        <h1 className="bg-yellow-500 text-white text-center text-lg py-2 font-bold">
          {title}
        </h1>
      )}

      <div className="text-blue-800 shadow-lg bg-gray-300 text-center mt-4 p-2 sm:p-6">
        <FixturesList fixtures={fixtures} />
      </div>
    </div>
  );
};

export default Fixture;
