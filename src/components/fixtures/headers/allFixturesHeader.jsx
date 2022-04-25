import React from "react";
import { formatCurrentDate, formatDate } from "../../../utils/formatTime";

const AllFixturesHeader = ({ handlePrev, handleNext, day }) => {
  return (
    <div>
      <div className="flex justify-between items-center text-blue-900 border shadow-sm rounded-lg mb-4 text-center text-xl p-2 font-bold">
        <button
          onClick={handlePrev}
          className="bg-blue-900 hover:bg-blue-700 text-white py-1 px-2 text-xs font-bold shadow-md rounded-l"
        >
          Prev
        </button>
        <p className="hidden sm:block">{formatCurrentDate(day)}</p>
        <p className="sm:hidden text-sm">{formatDate(day)}</p>
        <button
          onClick={handleNext}
          className="bg-blue-900 hover:bg-blue-700 text-white py-1 px-2 text-xs shadow-md font-bold rounded-r"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllFixturesHeader;
