import React from "react";
import { shortTeamName, truncateString } from "../../../utils/truncate";
import ScorersDropdown from "../dropdowns/scorers";
const ScorersTable = ({ scorers, league}) => {
  return (
    <div className="mx-2 sm:mx-4 xl:mx-4">
      <ScorersDropdown league={league} />
      <table className="hidden sm:block table-auto contain bg-gray-300">
        <thead className="bg-blue-500 text-center text-gray-200 text-base">
          <tr>
            <th className="px-4 py-2">Position</th>
            <th className="px-2 w-1/2 text-left py-2">Player Name</th>
            <th className="py-2 px-2 w-1/2 text-left">Team</th>
            <th className="px-4 py-2">Goals</th>
            <th className="px-4 py-1">Played</th>
            <th className="px-4 py-1">Shots</th>
            <th className="px-4 py-2">Assists</th>
          </tr>
        </thead>

        <tbody className="text-base font-bold text-blue-900">
          {scorers.map((scorer, index) => (
            <tr key={index} className="border-b-4">
              <td className="px-4 text-center py-2">{index + 1}</td>
              <td className="py-2">
                <div className="flex items-center">
                  <img
                    src={scorer.player.photo}
                    className="w-8 h-8 mx-2 rounded-full"
                    alt=""
                  />
                  <span>{truncateString(scorer.player.name, 25)}</span>
                </div>
              </td>
              <td className="text-center py-2">
                <div className="flex items-center">
                  <img
                    src={scorer.statistics[0].team.logo}
                    className="w-6 h-6 mx-2"
                    alt=""
                  />
                  <span>{scorer.statistics[0].team.name}</span>
                </div>
              </td>
              <td className="px-4 text-center py-2">
                {scorer.statistics[0].goals.total}
              </td>
              <td className="px-4 text-center py-2">
                {scorer.statistics[0].games.appearences}
              </td>
              <td className="px-4 text-center py-2">
                {scorer.statistics[0].shots.total}
              </td>
              <td className="px-4 text-center py-2">
                {scorer.statistics[0].goals.assists
                  ? scorer.statistics[0].goals.assists
                  : 0}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Mobile screens */}
      <table className="sm:hidden table-auto container bg-gray-200">
        <thead className="bg-yellow-500 text-gray-200 text-sm">
          <tr className="">
            <th className="px-1 py-1">Pos</th>
            <th className="px-1 text-left py-2">Player</th>
            <th className="px-1 py-1">Team</th>
            <th className="px-1 py-1">Goals</th>
            <th className="px-1 py-1">Played</th>
          </tr>
        </thead>
        <tbody className="text-sm text-center text-blue-900">
          {scorers.map((scorer, index) => (
            <tr className="border-b-4" key={index}>
              <td className="py-2 font-bold">{index + 1}</td>
              <td className="text-left font-bold py-2">
                {truncateString(scorer.player.name, 16)}
              </td>
              <td className="flex justify-center font-bold py-2">
                {shortTeamName(scorer.statistics[0].team.name, 3)}
              </td>
              <td className="px-1 text-center font-bold py-2">
                {scorer.statistics[0].goals.total}
              </td>
              <td className="px-1 text-center font-bold py-2">
                {scorer.statistics[0].games.appearences}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScorersTable;
