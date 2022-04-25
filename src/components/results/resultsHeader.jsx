import React from "react";

const ResultsHeader = ({ matchday, nextMatch, prevMatch }) => {
  return (
    <div className="inline-flex">
      <button
        onClick={prevMatch}
        className="bg-gray-300 hover:bg-gray-400 text-sm text-gray-700 font-bold px-2 rounded-l focus:outline-none"
      >
        Prev
      </button>
      <h1 className="mx-6">Match day {matchday}</h1>
      <button
        onClick={nextMatch}
        className="bg-gray-300 hover:bg-gray-400 text-gray-700 text-sm font-bold px-2 rounded-r focus:outline-none"
      >
        Next
      </button>
    </div>
  );
};

export default ResultsHeader;
