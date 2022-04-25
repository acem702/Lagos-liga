import React from "react";
import { Link } from "react-router-dom";
import { formatMatchTime } from "../../utils/formatTime";
import { truncateString } from "../../utils/truncate";

const FixturesList = ({ fixtures }) => {
  return (
    <div>
      {fixtures.map(({ fixture, teams, goals }) => (
        <Link key={fixture.id} to={`/fixture/${fixture.id}/head-to-head`}>
          <div className="flex-col flex items-center my-4 sm:flex-row">
            <div className="w-full text-base font-bold sm:hidden">
              <p className="text-xs">Venue: </p>
              {fixture.venue.name} {fixture.venue.city}
            </div>
            <div className="w-full xl:w-3/4 bg-gray-400 py-4 px-2 sm:p-4">
              <div className="flex items-center text-sm font-bold lg:text-base">
                <div className="flex items-center justfy-between text-center w-1/3">
                  <div className="sm:ml-2">
                    <p className="hidden lg:block">{teams.home.name}</p>
                    <p className="lg:hidden">
                      {truncateString(teams.home.name, 11)}
                    </p>
                  </div>
                </div>
                <div className="w-1/3 flex items-center justify-center  sm:mx-2">
                  <img
                    className="h-4 w-4 sm:h-8 sm:w-8"
                    src={teams.home.logo}
                    alt=""
                  />
                  {fixture.status.short === "NS" ||
                  fixture.status.short === "PST" ||
                  fixture.status.short === "TBD" ||
                  fixture.status.short === "CANC" ? (
                    <p className="bg-blue-900 text-sm text-white mx-1 px-1 sm:mx-4 sm:px-2 py-1">
                      {formatMatchTime(fixture.date)}
                    </p>
                  ) : fixture.status.short === "FT" ||
                    fixture.status.short === "AET" ? (
                    <div className=" flex text-sm lg:text-base text-white mx-2 py-1">
                      <p className="px-2 sm:px-3 py-1 bg-blue-800 border-r border-r-white">
                        {goals.home}
                      </p>
                      <p className="px-2 sm:px-3 py-1 bg-blue-800">
                        {goals.away}
                      </p>
                    </div>
                  ) : (
                    <div className="flex text-sm lg:text-base text-white mx-2 py-1">
                      <p className="px-2 sm:px-3 py-1 bg-pink-500 border-r border-r-white">
                        {goals.home}
                      </p>
                      <p className="px-2 sm:px-3 py-1 bg-pink-500">{goals.away}</p>
                    </div>
                  )}
                  <img
                    className="h-4 w-4 sm:h-8 sm:w-8"
                    src={teams.away.logo}
                    alt=""
                  />
                </div>
                <div className="w-1/3 text-center">
                  <p className="hidden lg:block">{teams.away.name}</p>
                  <p className="lg:hidden">
                    {truncateString(teams.away.name, 11)}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full text-sm font-bold sm:hidden">
              {fixture.status.long !== "Not Started" && fixture.status.short}
            </div>
            <div className="hidden sm:block w-1/5 bg-gray-400 text-sm text-center p-4 font-bold">
              <p className="text-m">Venue: </p>
              <p>{fixture.venue.name}</p>
            </div>
            <div className="hidden sm:block w-1/5 bg-gray-400 p-2 text-xs font-bold">
              <h1 className="font-bold text-sm">Referee: </h1>
              <p>{fixture.referee}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FixturesList;
