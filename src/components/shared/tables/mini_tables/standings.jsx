import React from "react";
import { useEffect, useState } from "react";
import { getLeagueStandings } from "../../../../services/standingsService";
import { Link } from "react-router-dom";
import MiniDropdown from "../../dropdowns/mini_dropdown";

const MiniStandings = () => {
  const [standings, setStandings] = useState([]);
  const [league, setLeague] = useState("Premier League");
  const [loading, setLoading] = useState(true);
  const [leagueSlug, setLeagueSlug] = useState("premier_league");
  const [leagueId, setLeagueId] = useState(39);

  useEffect(() => {
    const getTable = async () => {
      try {
        const { data } = await getLeagueStandings(leagueId);
        const MiniStandings = data.standings[0].slice(0, 6);
        setStandings(MiniStandings);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error.toString());
      }
    };
    getTable();
  }, [leagueId]);

  const handleCompetition = async (id, league, slug) => {
    try {
      setLoading(true);
      setLeagueId(id);
      setLeagueSlug(slug);
      setLeague(league);
      const { data: standings } = await getLeagueStandings(id);
      const MiniStandings = standings[0].slice(0, 6);
      setStandings(MiniStandings);
      setLoading(false);
    } catch (error) {
      console.log(error.toString());
    }
  };

  return (
    <div className="my-16">
      <div>
        <div className="py-1 text-sm lg:text-base text-center font-bold mx-auto">
          <h1 className="text-blue-800">Standings</h1>
        </div>
        <MiniDropdown league={league} handleCompetition={handleCompetition} />
        <table className="table-auto my-2 border shadow-xs container mx-auto bg-gray-300">
          <thead className="bg-blue-900 text-gray-200 text-xs">
            <tr className="">
              <th className="px-2 py-1">Pos</th>
              <th className="px-2 w-full text-left py-2">Club</th>
              <th className="px-2 py-1">Pl</th>
              <th className="px-2 py-1">GD</th>
              <th className="px-2 py-1">Pts</th>
            </tr>
          </thead>
          {loading ? (
            <tbody className="text-sm text-center text-blue-900">
              <tr className="w-1/2 mx-auto px-4 text-center">
                <td>Loading...</td>
              </tr>
            </tbody>
          ) : (
            <tbody className="text-sm text-center text-blue-900">
              {standings.map((standing) => (
                <tr key={standing.team.id}>
                  <td className="py-2 font-bold text-sm lg:text-base">{standing.rank}</td>
                  <td className=" flex items-center text-left text-sm lg:text-base py-2">
                    <img className="w-6 h-6" src={standing.team.logo} alt="" />
                    <span className="px-2 text-sm lg:text-base font-bold">
                      {standing.team.name}
                    </span>
                  </td>
                  <td className="px-2 font-bold text-sm lg:text-base py-2">
                    {standing.all.played}
                  </td>
                  <td className="px-2 font-bold text-sm lg:text-base py-2">
                    {standing.goalsDiff}
                  </td>
                  <td className="px-2 font-bold text-sm lg:text-base py-2">
                    {standing.points}
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>

      {!loading && (
        <div className="text-right text-sm p-2 font-bold  mb-8 text-blue-900">
          {leagueSlug === "champions_league" ||
          leagueSlug === "europa_league" ? (
            <Link to={`/tables/${leagueSlug}/${leagueId}`}>
              View full {league} table
            </Link>
          ) : (
            <Link to={`/standings/${leagueSlug}/${leagueId}`}>
              View full {league} table
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default MiniStandings;
