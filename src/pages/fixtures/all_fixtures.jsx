import React, { useState, useEffect } from "react";
import _ from "lodash";
import moment from "moment";
import Fixtures from "../../components/fixtures";
import SkeletonFixtures from "../../components/common/skeletons/fixtures";
import { getTodaysFixtures } from "../../services/fixturesService";
import NoFixtures from "../../components/fixtures/noFixtures";
import { formatDay } from "../../utils/formatTime";
import AllFixturesHeader from "../../components/fixtures/headers/allFixturesHeader";

const AllFixtures = () => {
  const [fixtures, setFixtures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [competitions, setCompetitions] = useState([]);
  const [day, setDay] = useState(new Date());
  const today = formatDay(new Date());

  const getFixtures = async (date) => {
    try {
      console.log(date);
      const { data: fixtures } = await getTodaysFixtures(date);
      const grouped_fixtures = _.groupBy(fixtures, "league.name");
      const competitions = Object.keys(grouped_fixtures);
      setCompetitions(competitions);
      console.log("fixtures", fixtures);
      setFixtures(fixtures);
      setLoading(false);
    } catch (error) {
      console.log(error.toString());
    }
  };

  useEffect(() => {
    getFixtures(today);
  }, [today]);

  const handleNext = async () => {
    try {
      const nextday = moment.utc(day).add(1, "days").toDate();
      setDay(nextday);
      setLoading(true);
      const tomorrow = formatDay(nextday);
      getFixtures(tomorrow);
    } catch (error) {
      console.log(error.toString());
    }
  };

  const handlePrev = async () => {
    try {
      const prevday = moment.utc(day).add(-1, "days").toDate();
      setDay(prevday);
      setLoading(true);
      const yesterday = formatDay(prevday);
      getFixtures(yesterday);
    } catch (error) {
      console.log(error.toString());
    }
  };

  return (
    <div className="mx-2 lg:mx-6">
      <AllFixturesHeader
        handlePrev={handlePrev}
        handleNext={handleNext}
        day={day}
      />
      {loading ? (
        <SkeletonFixtures />
      ) : (
        <>
          {competitions.map((competition) => {
            const compFixtures = fixtures.filter(
              (fixture) => fixture.league.name === competition
            );
            return <Fixtures key={competition} fixtures={compFixtures} title={competition} />;
          })}
        </>
      )}
      {!loading && fixtures.length === 0 && <NoFixtures />}
    </div>
  );
};
export default AllFixtures;
