import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { competitions } from "../../utils/competitions";
import SkeletonFixtures from "../../components/common/skeletons/fixtures";
import { getLastLeagueFixtures } from "../../services/fixturesService";
import { formatFixturesDate } from "../../utils/formatTime";
import Fixtures from "../../components/fixtures";
import LastFixturesHeader from "../../components/fixtures/headers/lastFixturesHeader"


const NextFixtures = () => {
  const [fixtures, setFixtures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fixtures_dates, setFixturesDates] = useState([]);
  const [league, setLeague] = useState("");
  const { league_id } = useParams();

  useEffect(() => {
    const getNextFixtures = async () => {
      try {
        const { data } = await getLastLeagueFixtures(league_id);
        let fixtures = data.reduce((r, a) => {
          r[formatFixturesDate(a.fixture.date)] = [
            ...(r[formatFixturesDate(a.fixture.date)] || []),
            a,
          ];
          return r;
        }, {});
        let fixtures_dates = Object.keys(fixtures);
        const league = competitions.filter(
          (competition) => competition.id.toString() === league_id
        );
        setLeague(league[0].name);
        setFixturesDates(fixtures_dates);
        setFixtures(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getNextFixtures();
  }, [league_id]);

  return (
    <div className="mx-2 lg:mx-4">
      {loading ? (
        <SkeletonFixtures />
      ) : (
        <div>
          <LastFixturesHeader league={league}/>
        {fixtures_dates.map(fixture_date => {
          const lastFixtures = fixtures.filter(fixture => formatFixturesDate(fixture.fixture.date) === fixture_date);
          return <Fixtures key={fixture_date} fixtures={lastFixtures} title={fixture_date}/>
        })
        }
        </div>
      )}
    </div>
  );
};

export default NextFixtures;
