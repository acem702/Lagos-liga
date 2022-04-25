import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  formatCurrentDate,
  formatMatchTime,
  formatDay,
} from "../../../utils/formatTime";
import { truncateTeamName, truncateString } from "../../../utils/truncate";
import { fixturesToDisplay } from "../../../utils/fixturesToDisplay";
import { competitions } from "../../../utils/competitions";
import {
  getLeagueFixtures,
  getTodaysFixtures,
} from "../../../services/fixturesService";
import SkeletonMiniMatch from "../../common/skeletons/home/skeletonMinimatch";
import MiniDropdown from "../../shared/dropdowns/mini_dropdown";

const today = new Date();
const MiniMatch = () => {
  const [fixtures, setFixtures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [league, setLeague] = useState("");
  const [leagueSlug, setLeagueSlug] = useState("");
  const [leagueId, setLeagueId] = useState(null);

  useEffect(() => {
    const getFixtures = async () => {
      try {
        const day = formatDay(today);
        const { data } = await getTodaysFixtures(day);
        if (data.length !== 0) {
          let fixtures = fixturesToDisplay(data);
          fixtures = fixtures.length > 10 ? fixtures.splice(0, 10) : fixtures;
          setFixtures(fixtures);
          setLeagueId(fixtures[0].league.id);
          const league = competitions.filter(
            (competition) => competition.id === fixtures[0].league.id
          );
          setLeagueSlug(league[0].slug);
          setLeague(league[0].name);
          setLoading(false);
        } else {
          setFixtures([]);
          setLoading(false);
        }
      } catch (error) {
        console.log(error.toString());
      }
    };

    getFixtures();
  }, []);

  const handleCompetition = async (id, league, slug) => {
    try {
      setLoading(true);
      setLeagueId(id);
      setLeagueSlug(slug);
      setLeague(league);
      const day = formatDay(today);
      const { data } = await getLeagueFixtures(day, id);
      const fixtures = data.length > 5 ? data.splice(0, 5) : data;
      setFixtures(fixtures);
      setLoading(false);
    } catch (error) {
      console.log(error.toString());
    }
  };

  return (
    <div className="">
      <div className="bg-white mb-2 rounded-lg py-1 text-base text-center font-bold m-auto">
        <h1 className="text-blue-800">Today's Fixtures</h1>
      </div>
      <p className="text-base text-center py-1 font-bold bg-green-500 text-white">
        {formatCurrentDate(today)}
      </p>
      {loading && fixtures.length === 0 ? (
        <SkeletonMiniMatch />
      ) : (
        <div className="px-4 bg-gray-300 py-4 border-b">
          <div>
           <MiniDropdown league={league} handleCompetition={handleCompetition}/>
          </div>
          {!loading && fixtures.length === 0 && (
            <div>
              <h1 className="text-base font-extrabold text-blue-900 py-6 text-center mx-auto">
                No {league ? league : "Premier League"} fixtures today
              </h1>
            </div>
          )}
          {fixtures.map(({ fixture, teams, goals }) => (
            <Link
              key={fixture.id}
              to={`/fixture/${fixture.id}/${
                fixture.status.short === "NS" ||
                fixture.status.short === "PST" ||
                fixture.status.short === "TBD" ||
                fixture.status.short === "CANC"
                  ? `head-to-head`
                  : `events`
              }`}
            >
              <div className="bg-gray-400 flex items-center text-xs lg:text-sm 2xl:text-base text-blue-800 font-bold p-1 mt-4">
                <div className="text-center w-1/3">
                  <p className="">
                    {truncateString(
                      truncateTeamName(teams.home.name),
                      11
                    )}
                  </p>
                </div>

                <div className="w-1/3 flex items-center justify-center mx-1">
                  <img className="h-6 w-6" src={teams.home.logo} alt="" />
                  {fixture.status.short === "NS" ||
                  fixture.status.short === "PST" ||
                  fixture.status.short === "TBD" ||
                  fixture.status.short === "CANC" ? (
                    <p className="bg-blue-800 text-sm lg:text-base text-white mx-1 px-1 py-1">
                      {formatMatchTime(fixture.date)}
                    </p>
                  ) : fixture.status.short === "FT" ||
                  fixture.status.short === "AET" ||
                  fixture.status.short === "PEN" ? (
                    <div className="text-sm 2xl:text-base text-white mx-1 px-1 py-1">
                      <span className="px-2 py-1 bg-blue-800 border-r border-r-white">
                        {goals.home}
                      </span>
                      <span className="px-2 py-1 bg-blue-800">
                        {goals.away}
                      </span>
                    </div>
                  ) : (
                    <div className="text-sm lg:text-base text-white mx-1 py-1">
                      <span className="px-2 py-1 bg-pink-500 border-r border-r-white">
                        {goals.home}
                      </span>
                      <span className="px-2 py-1 bg-pink-500">
                        {goals.away}
                      </span>
                    </div>
                  )}

                  <img className="h-6 w-6" src={teams.away.logo} alt="" />
                </div>

                <div className="w-1/3 text-center text-xs lg:text-sm 2xl:text-base">
                  <p>
                    {truncateString(
                      truncateTeamName(teams.away.name),
                      11
                    )}
                  </p>
                </div>
              </div>
              <div className="mx-1 px-1 text-center">
                <p className="text-center text-xs lg:text-sm font-bold text-blue-800">
                  {fixture.status !== "Not Started" && fixture.status.short}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
      {!loading &&
        <div className="text-right text-xs lg:text-sm px-2 py-2 font-bold mb-8 text-blue-900">
          {fixtures.length === 0 ? (
            <Link to={`/fixtures/next/${leagueSlug}/${leagueId}`}>
              See Next {league ? league : "Premier League"} Fixtures
            </Link>
          ) : (
            <Link to={`/fixtures/${leagueSlug}/${leagueId}`}>
              View All {league ? league : "Premier League"} Fixtures Today
            </Link>
          )}
        </div>
      }
    </div>
  );
};

export default MiniMatch;
