import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { getLeagueResults, getMatchday } from "../../services/matchesService";
import { formatDate, formatMatchTime } from "../../utils/formatTime";
import { competitions } from "../../utils/competitions";
import SkeletonMatches from "../../components/common/skeletons/match";
import SkeletonMatchDay from "../../components/common/skeletons/match/skeletonMatchDay";
import ResultDropdown from "../../components/shared/dropdowns/results";
import MatchResult from "../../components/results/matchResult";
import ResultsHeader from "../../components/results/resultsHeader";
import "./index.css";

const Results = () => {
  const [matches, setMatches] = useState([]);
  const [currentMatchDay, setCurrentMatchDay] = useState("");
  const [league, setLeague] = useState();
  const [loading, setLoading] = useState(true);
  const { league_id } = useParams();

  useEffect(() => {
    const getMatches = async () => {
      const { data } = await getMatchday(league_id);
      const league = competitions.filter(
        (competition) => competition.id.toString() === league_id
      );
      setLeague(league[0].name);
      setCurrentMatchDay(data.matchday);
    };
    getMatches();
  }, [league_id]);

  useEffect(() => {
    const getResults = async () => {
      if (currentMatchDay) {
        const { data: latestmatches } = await getLeagueResults(
          currentMatchDay,
          league_id
        );
        setMatches(latestmatches);
        setLoading(false);
      }
    };

    getResults();
  }, [currentMatchDay, league_id]);

  const getPrevMatchDay = async () => {
    const matchday =
      currentMatchDay === 1 ? currentMatchDay : Number(currentMatchDay) - 1;
    setLoading(true);
    setCurrentMatchDay(matchday);
    const { data: latestmatches } = await getLeagueResults(matchday, league_id);
    setMatches(latestmatches);
    setLoading(false);
  };

  const getNextMatchDay = async () => {
    const matchday =
      currentMatchDay === 38 ? currentMatchDay : Number(currentMatchDay) + 1;
    setCurrentMatchDay(matchday);
    setLoading(true);
    const { data: latestmatches } = await getLeagueResults(matchday, league_id);

    setMatches(latestmatches);
    setLoading(false);
  };

  return (
    <div className="mx-2 pb-2 sm:mx-4 bg-white shadow-lg">
      {!loading && currentMatchDay === "" && (
        <h1 className="text-3xl font-semibold text-blue-800  text-center mx-auto mt-8">
          No matches for the current season
        </h1>
      )}

      <div className="bg-white text-gray-800 text-center font-bold">
        {loading && matches.length === 0 ? (
          <SkeletonMatchDay />
        ) : (
          <Fragment>
            <div className="text-left sm:w-3/4 mx-auto">
              <ResultDropdown league={league} />
            </div>
            <div className="py-2 my-2">
              <ResultsHeader
                matchday={currentMatchDay}
                nextMatch={getNextMatchDay}
                prevMatch={getPrevMatchDay}
                league={league}
              />
            </div>
          </Fragment>
        )}
      </div>

      {loading ? (
        <SkeletonMatches />
      ) : (
        <div className="mx-2 sm:px-0 sm:grid sm:grid-cols-2 sm:gap-2">
          {matches.map((match) => (
            <MatchResult
              key={match.fixture.id}
              match={match}
              matchDate={formatDate}
              matchTime={formatMatchTime}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Results;
