import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { truncateString } from "../../utils/truncate";

const MatchResult = ({ match, matchDate, matchTime }) => {
  const today = new Date();
  return (
    <Link
      to={`/fixture/${match.fixture.id}/${
        match.status === "Not Started" ? `head-to-head` : `events`
      }`}
    >
      <div className="result mb-2 grid grid-cols-3 py-6 bg-gray-300 sm:mb-0">
        <div className="flex items-center col-span-2 justify-between mx-2 sm:mx-4">
          <div className="flex flex-col justify-start text-base items-start font-bold text-blue-800 left">
            <div className="flex justify-between items-center py-2 sm:p-2 team-name">
              <img
                className="w-6 h-6 mr-2 sm:mr-4"
                src={match.teams.home.logo}
                alt=""
              />
              <p className="">{truncateString(match.teams.home.name, 20)}</p>
              
            </div>
            <div className="flex justify-between items-center py-2 sm:p-2 team-name">
              <img
                className="w-6 h-6 mr-2 sm:mr-4"
                src={match.teams.away.logo}
                alt=""
              />
              <p className="">{truncateString(match.teams.away.name, 20)}</p>
            </div>
          </div>
          {match.fixture.status.short === "NS" ||
          match.fixture.status.short === "PST" ||
          match.fixture.status.short === "TBD" ||
          match.fixture.status.short === "CANC" ? (
            <div className="text-sm font-bold text-white middle sm:text-base"></div>
          ) : match.fixture.status.short === "FT" ? (
            <div className="text-sm font-bold text-white middle sm:text-base ">
              <p className="bg-blue-900 px-2 py-1 my-2 rounded-lg sm:my-1  sm:py-2 sm:px-3">
                {match.goals.home}
              </p>
              <p className="bg-blue-900 px-2 py-1 my-2 rounded-lg sm:my-1 sm:py-2 sm:px-3">
                {match.goals.away}
              </p>
            </div>
          ) : (
            <div className="text-xs font-bold text-white middle sm:text-xs">
              <p className="bg-pink-500 px-2 py-1 my-1 rounded-lg sm:py-2 sm:px-3 ">
                {match.goals.home}
              </p>
              <p className="bg-pink-500 px-2 py-1 my-1 rounded-lg sm:py-2 sm:px-3 ">
                {match.goals.away}
              </p>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center text-sm text-center font-semibold text-blue-800 right border-l-2">
          {match.fixture.status.short === "NS" ? (
            <p className="py-1 px-3"></p>
          ) : (
            <p className="py-1 px-3">{match.fixture.status.short}</p>
          )}
          {match.fixture.status.short === "1H" ||
          match.fixture.status.short === "2H" ||
          match.fixture.status.short === "HT" ? (
            <div className="my-3 text-sm font-bold flex justify-center items-center">
              <img className="w-4 h-4" src="/assets/red-circle-48.png" alt="" />
              <p className="mx-1 bg-yellow-500 text-gray-800 px-2">Live</p>
            </div>
          ) : matchDate(match.fixture.date) === matchDate(today) ? (
            <div className="p-3 flex flex-col font-bold text-sm justify-center items-center lg:flex-row">
              <img className="w-4 h-4" src="/assets/calendar.png" alt="" />
              <p className=" px-1 sm:mx-1 sm:px-2">TODAY</p>
            </div>
          ) : matchDate(moment(today).add(-1, "days").format()) ===
            matchDate(match.fixture.date) ? (
            <div className="p-3 flex flex-col justify-center items-center lg:flex-row">
              <img className="w-4 h-4" src="/assets/calendar.png" alt="" />
              <p className="px-1 sm:mx-1 sm:px-2">YESTERDAY</p>
            </div>
          ) : matchDate(moment(today).add(1, "days").format()) ===
            matchDate(match.fixture.date) ? (
            <div className="p-3 flex flex-col justify-center items-center lg:flex-row">
              <img className="w-4 h-4" src="/assets/calendar.png" alt="" />
              <p className="px-1 sm:mx-1 sm:px-2">TOMORROW</p>
            </div>
          ) : (
            <div className="p-3 flex flex-col justify-center items-center flex lg:flex-row">
              <img className="w-4 h-4" src="/assets/calendar.png" alt="" />
              <p className="px-1">{matchDate(match.fixture.date)}</p>
            </div>
          )}

          {match.fixture.status.short === "NS" && (
            <div className="text-white mx-4 font-bold flex items-center justify-center">
              <img className="w-4 h-4 mr-1" src="/assets/clock-24.png" alt="" />
              <p className="p-1 bg-blue-900 rounded-lg">
                {matchTime(match.fixture.date)}
              </p>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default MatchResult;
