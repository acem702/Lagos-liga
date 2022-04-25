import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SkeletonFixtures from "../../components/common/skeletons/fixtures";
import { getLeagueFixtures } from "../../services/fixturesService";
import NoFixtures from "../../components/fixtures/noFixtures";
import { competitions } from "../../utils/competitions";
import { formatDay } from "../../utils/formatTime";
import LeagueFixturesHeader from "../../components/fixtures/headers/leagueFixturesHeader";
import Fixtures from "../../components/fixtures";

const LeagueFixtures = () => {
  const [fixtures, setFixtures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [league, setLeague] = useState("Premier League");
  const today = new Date();
  const day = formatDay(today);
  const { league_id, league: league_slug } = useParams();

  useEffect(() => {
    const getFixtures = async () => {
      try {
        const { data: fixtures } = await getLeagueFixtures(day, league_id);
        console.log(fixtures);
        setFixtures(fixtures);
        const league = competitions.filter(
          (competition) => competition.id.toString() === league_id
        );
        setLeague(league[0].name);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getFixtures();
  }, [day, league_id]);

  return (
    <div className="mx-2 lg:mx-4">
      {loading ? (
        <SkeletonFixtures />
      ) : (
        <>
          <LeagueFixturesHeader
            league={league}
            league_slug={league_slug}
            league_id={league_id}
          />
          <Fixtures fixtures={fixtures} title={""} />
        </>
      )}
      {!loading && fixtures.length === 0 && (
        <NoFixtures
          league={league}
          league_slug={league_slug}
          league_id={league_id}
        />
      )}
    </div>
  );
};
export default LeagueFixtures;
