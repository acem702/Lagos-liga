import React from "react";
import { truncateString } from "../../../utils/truncate";
import StandingDropdown from "../dropdowns/standings";

const StandingTable = ({ standings, league }) => {
  return (
    <div className="mx-2 sm:mx-2 lg:mx-4 xl:mx-4">
      <StandingDropdown league={league} />
      <table className="hidden sm:block table-auto bg-gray-300">
        <thead className="bg-blue-500 text-gray-200 text-sm lg:text-base">
          <tr className="">
            <th className="px-2 py-2">Position</th>
            <th className="px-2 w-1/2 text-left py-2">Club</th>
            <th className="sm:px-2 lg:px-4 py-2">Played</th>
            <th className="sm:px-2 lg:px-4 py-2">Won</th>
            <th className="sm:px-2 lg:px-4 py-2">Drew</th>
            <th className="sm:px-2 lg:px-4 py-2">Lost</th>
            <th className="sm:px-2 lg:px-4 py-2">GF</th>
            <th className="sm:px-2 lg:px-4 py-2">GA</th>
            <th className="sm:px-2 lg:px-4 py-2">GD</th>
            <th className="sm:px-2 lg:px-4 py-2">Points</th>
            <th className="sm:px-2 lg:px-4 py-2">Form</th>
          </tr>
        </thead>
        <tbody className="text-sm lg:text-base font-bold text-center text-blue-900">
          {standings.map((standing) => (
            <tr key={standing.team.id}>
              <td className="py-2">{standing.rank}</td>
              <td className="">
                <div className="flex text-left py-2 items-center">
                <img
                  className="w-6 h-6 sm:mr-2 lg:mr-4"
                  src={standing.team.logo}
                  alt=""
                />
                {truncateString(standing.team.name, 18)}
                </div>
               
              </td>
              <td className="sm:px-2 lg:px-4 py-2">{standing.all.played}</td>
              <td className="sm:px-2 lg:px-4 py-2">{standing.all.win}</td>
              <td className="sm:px-2 lg:px-4 py-2">{standing.all.draw}</td>
              <td className="sm:px-2 lg:px-4 py-2">{standing.all.lose}</td>
              <td className="sm:px-2 lg:px-4 py-2">{standing.all.goals.for}</td>
              <td className="sm:px-2 lg:px-4 py-2">
                {standing.all.goals.against}
              </td>
              <td className="sm:px-2 lg:px-4 py-2">{standing.goalsDiff}</td>
              <td className="sm:px-2 lg:px-4 py-2">{standing.points}</td>
              <td className={`lg:px-2 py-2`}>
                {standing.form.split("").map((char, index) => (
                  <span
                    key={index}
                    className={`px-1 border-r-4 border-gray-200 text-white text-sm font-bold ${
                      char === "W"
                        ? "bg-green-500"
                        : char === "L"
                        ? "bg-red-500"
                        : "bg-gray-600"
                    }`}
                  >
                    {char}
                  </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile screen */}
      <table className="sm:hidden table-auto bg-gray-200">
        <thead className="bg-green-600 text-gray-200 text-xs">
          <tr className="">
            <th className="px-1 py-1">Pos</th>
            <th className="px-1 w-full text-left py-2">Club</th>
            <th className="px-1 py-1">Pl</th>
            <th className="px-1 py-1">W</th>
            <th className="px-1 py-1">D</th>
            <th className="px-1 py-1">L</th>
            <th className="px-1 py-1">GF</th>
            <th className="px-1 py-1">GA</th>
            <th className="px-1 py-1">GD</th>
            <th className="px-1 py-1">Pts</th>
          </tr>
        </thead>
        <tbody className="text-sm text-center text-blue-900">
          {standings.map((standing, index) => (
            <tr key={index}>
              <td className="py-2 font-bold text-xs">{standing.rank}</td>
              <td className=" flex items-center text-left text-sm py-2">
                <img className="w-4 h-4" src={standing.team.logo} alt="" />
                <span className="mx-2 text-xs font-bold">
                  {truncateString(standing.team.name, 15)}
                </span>
              </td>
              <td className="mx-1 text-sm py-2">{standing.all.played}</td>
              <td className="mx-1 text-sm py-2">{standing.all.win}</td>
              <td className="mx-1 text-sm py-2">{standing.all.draw}</td>
              <td className="mx-1 text-sm py-2">{standing.all.lose}</td>
              <td className="mx-1 text-sm py-2">{standing.all.goals.for}</td>
              <td className="mx-1 text-sm py-2">
                {standing.all.goals.against}
              </td>
              <td className="mx-1 text-sm py-2">{standing.goalsDiff}</td>
              <td className="mx-1 font-bold text-sm py-2">{standing.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StandingTable;
