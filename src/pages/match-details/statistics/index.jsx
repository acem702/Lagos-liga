import React, { useState, useEffect } from "react";
import { truncateTeamName } from "../../../utils/truncate"


const Stats = ({ fixture }) => {
  const [stats, setStats] = useState([]);
  const [statsName, setStatsName] = useState([]);

  useEffect(() => {
    if (fixture.status === "Not Started") {
      setStats([]);
      setStatsName([]);
    } else {
      let matchStats = fixture.statistics;
  
      const statsName = fixture.statistics[0]?.statistics.map(stat => stat.type);
      
      setStats(matchStats);
      setStatsName(statsName);
    }
  }, [fixture]);

  return (
    <div>
      {stats.length === 0 ? (
        <div className="mx-2 sm:w-2/3 sm:mx-auto bg-gray-300 text-xl text-center shadow-lg my-6">
          <h1 className="text-blue-900 p-4">
            There are no match statistics available for this fixture yet
          </h1>
        </div>
      ) : (
        <div className="py-4 bg-gray-300">
          <div className="flex justify-around items-center border-gray-400 border-t-2 border-b-2 text-blue-900 text-sm font-bold py-2">
            <div className="w-2/5 flex justify-center items-center">
              <p className="mr-3 hidden sm:block">{fixture.teams.home.name}</p>
              <p className="mx-1 sm:hidden">{truncateTeamName(fixture.teams.home.name)}</p>
              <img src={fixture.teams.home.logo} className="w-6 h-6 sm:w-8 sm:h-8" alt="" />
            </div>
            <div className="w-1/4 text-center">
              <p>Match Stats</p>
            </div>
            <div className=" w-2/5 flex justify-center items-center">
              <img src={fixture.teams.away.logo} className="w-6 h-6 sm:w-8 sm:h-8" alt="" />
              <p className="ml-3 hidden sm:block">{fixture.teams.away.name}</p>
              <p className="mx-1 sm:hidden">{truncateTeamName(fixture.teams.away.name)}</p>
            </div>
          </div>
          <div className="flex justify-around font-semibold text-sm lg:text-base text-blue-900 py-2">
            <div className="w-1/5 sm:w-1/3 text-right sm:text-center">
              {stats[0].statistics.map((stat, index) => (
                <p key={index} className="py-2">
                  {stat.value ? stat.value : 0}
                </p>
              ))}
            </div>
            <div className="w-3/5 sm:w-1/3 text-center ml-2">
              {statsName.map((stat, index) => (
                <p className="py-2" key={index}>
                  {stat}
                </p>
              ))}
            </div>
            <div className="w-1/5 sm:w-1/3 text-left sm:text-center">
              {stats[1].statistics.map((stat, index) => (
                <p key={index} className="py-2">
                 {stat.value ? stat.value : 0}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Stats;
