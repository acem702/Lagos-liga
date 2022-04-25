import React, { Fragment, useEffect, useState } from "react";
import { getLeagueScorers } from "../../../../services/scorerService";
import { shortTeamName, truncateString } from "../../../../utils/truncate";
import { Link } from "react-router-dom";
import MiniDropdown from "../../dropdowns/mini_dropdown";

const MiniScorers = () => {
  const [scorers, setScorers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [league, setLeague] = useState("Premier League");
  const [leagueSlug, setLeagueSlug] = useState("premier_league");
  const [leagueId, setLeagueId] = useState(39);

  useEffect(() => {
    const getScorers = async () => {
      try {
        const { data: scorers } = await getLeagueScorers(leagueId);
        const miniScorers = scorers.slice(0, 6);
        setLoading(false);
        setScorers(miniScorers);
      } catch (error) {
        console.log(error);
      }
    };
    getScorers();
  }, [leagueId]);

  const handleCompetition = async (id, league, slug) => {
    try {
      setLoading(true);
      setLeague(league);
      setLeagueId(id);
      setLeagueSlug(slug);
      const { data: scorers } = await getLeagueScorers(id);
      const miniScorers = scorers.slice(0, 6);
      setLoading(false);
      setScorers(miniScorers);
    } catch (error) {
      console.log(error.toString());
    }
  };
  return (
    <div>
      <div className="py-1 text-sm lg:text-base text-center font-bold mx-auto">
        <h1 className="text-blue-800">Top Scorers</h1>
      </div>
      <Fragment>
        <div className="my-2">
          <MiniDropdown title={league} handleCompetition={handleCompetition} />
        </div>

        {!loading && scorers.length === 0 && (
          <h1 className="text-sm font-semibold text-blue-900 text-center mx-auto my-4">
            No scorers for the current season
          </h1>
        )}

        <table className="table-auto shadow-xs border-b py-2 container mx-auto bg-gray-300">
          <thead className="bg-red-600 text-gray-200 text-sm lg:text-base">
            <tr className="">
              <th className="px-2 py-1">Pos</th>
              <th className="px-2 w-full text-left py-2">Player</th>
              <th className="px-2 py-1">Team</th>
              <th className="px-2 py-1">Goals</th>
            </tr>
          </thead>
          {loading ? (
            <tbody className="text-base text-center text-blue-900">
              <tr className="w-1/2 mx-auto px-4 text-center">
                <td>Loading...</td>
              </tr>
            </tbody>
          ) : (
            <tbody className="text-sm lg:text-base text-center text-blue-900">
              {scorers.map((scorer, index) => (
                <tr key={index}>
                  <td className="py-2 font-bold">{index + 1}</td>
                  <td className=" flex text-left font-bold py-2">
                    <div className="flex items-center">
                  <img
                    src={scorer.player.photo}
                    className="w-8 h-8 mx-2 rounded-full"
                    alt=""
                  />
                  <span>{truncateString(scorer.player.name, 25)}</span>
                </div>
                  </td>
                  <td className="px-2 font-bold py-2">
                    {shortTeamName(scorer.statistics[0].team.name, 3)}
                  </td>
                  <td className="px-2 font-bold text-sm lg:text-base py-2">
                    {scorer.statistics[0].goals.total}
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </Fragment>

      <div className="text-right text-xs lg:text-sm p-2 font-bold text-blue-900">
        <Link to={`/scorers/${leagueSlug}/${leagueId}`}>View full list</Link>
      </div>
    </div>
  );
};
export default MiniScorers;
