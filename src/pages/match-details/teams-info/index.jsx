import React, { useState, useEffect } from "react";
import { formatFixturesDate, formatMatchTime } from "../../../utils/formatTime";
import { truncateString } from "../../../utils/truncate";
import moment from "moment";

const TeamsInfo = ({ fixture }) => {
  const [homeScorers, setHomeScorers] = useState([]);
  const [awayScorers, setAwayScorers] = useState([]);

  useEffect(() => {
    console.log("fixture", fixture);
    if (fixture.status === "Not Started") {
      setHomeScorers([]);
      setAwayScorers([]);
    } else if (fixture.events === null) {
      setHomeScorers([]);
      setAwayScorers([]);
    } else {
      let events = fixture.events;
      let homeScorers = events.filter(
        (event) =>
          event.type === "Goal" &&
          event.detail !== "Missed Penalty" &&
          event.team.name === fixture.teams.home.name
      );
      let awayScorers = events.filter(
        (event) =>
          event.type === "Goal" &&
          event.detail !== "Missed Penalty" &&
          event.team.name === fixture.teams.away.name
      );
      setHomeScorers(homeScorers);
      setAwayScorers(awayScorers);
    }
  }, [fixture]);

  let today = new Date();
  return (
    <div
      className="flex flex-col justify-between"
      style={{
        backgroundImage: "url('/assets/pitch.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        objectFit: "center",
      }}
    >
      {/* upper */}
      <div className="flex bg-blue-900 bg-opacity-75 px-2 sm:px-4 py-2 my-3 justify-between text-gray-100 text-xs lg:text-sm font-bold">
        <div className="flex justify-between">
          {fixture.fixture.status.short === "1H" ||
          fixture.fixture.status.short === "2H" ||
          fixture.fixture.status.short === "HT" ? (
            <div className="flex items-center sm:mr-4">
              <img className="w-4 h-4" src="/assets/red-circle-48.png" alt="" />
              <p className="mx-1 text-xs sm:text-md">LIVE</p>
            </div>
          ) : formatFixturesDate(fixture.fixture.date) ===
            formatFixturesDate(today) ? (
            <div className="flex items-center mr-4">
              <img className="w-4 h-4" src="/assets/calendar.png" alt="" />
              <p className="text-xs sm:text-md mx-2">TODAY</p>
            </div>
          ) : formatFixturesDate(moment(today).add(-1, "days").format()) ===
            formatFixturesDate(fixture.fixture.date) ? (
            <div className="flex items-center sm:mr-4">
              <img
                className="w-2 h-2 sm:w-4 sm:h-4"
                src="/assets/calendar.png"
                alt=""
              />
              <p className="text-xs sm:text-md mx-2">YESTERDAY</p>
            </div>
          ) : formatFixturesDate(moment(today).add(1, "days").format()) ===
            formatFixturesDate(fixture.fixture.date) ? (
            <div className="flex items-center sm:mr-4">
              <img
                className="w-2 h-2 sm:w-4 sm:h-4"
                src="/assets/calendar.png"
                alt=""
              />
              <p className="mx-2">TOMORROW</p>
            </div>
          ) : (
            <div className="flex items-center sm:mr-4">
              <img
                className="w-4 h-4 sm:w-4 sm:h-4"
                src="/assets/calendar.png"
                alt=""
              />
              <p className="mx-2">{formatFixturesDate(fixture.fixture.date)}</p>
            </div>
          )}
          <div className="flex mx-2 items-center">
            <img
              className="w-4 h-4 sm:w-6 sm:h-6"
              src="/assets/stadium-48.png"
              alt=""
            />
            <p className="ml-1">{fixture.fixture.venue.name}</p>
          </div>
        </div>
        <div className="flex items-center">
          <img
            className="w-4 h-4 sm:w-6 sm:h-6"
            src="/assets/referee-48.png"
            alt=""
          />
          <p className="ml-1">{fixture.fixture.referee}</p>
        </div>
      </div>
      <div className="flex justify-around items-center bg-blue-900 mt-16">
        {/* TeamA */}
        <div className="w-3/5 sm:w-2/5 flex items-center justify-start font-bold text-sm sm:text-xl lg:text-2xl text-white sm:px-4">
          <img
            className="w-8 h-8 sm:w-16 sm:h-16 my-1"
            src={fixture.teams.home.logo}
            alt=""
          />
          <p className="px-2 hidden sm:block">
            {truncateString(fixture.teams.home.name, 20)}
          </p>
          <p className="mx-1 sm:hidden">
            {truncateString(fixture.teams.home.name, 12)}
          </p>
        </div>

        {/* ScoreBoard */}
        {fixture.fixture.status.short === "NS" ||
        fixture.fixture.status.short === "TBD" ||
        fixture.fixture.status.short === "PST" ||
        fixture.fixture.status.short === "CANC" ? (
          <div className="sm:w-1/5 text-white text-lg sm:text-3xl text-center font-bold py-6">
            vs
          </div>
        ) : (
          <div
            className={
              fixture.fixture.status.short === "FT" ||
              fixture.fixture.status.short === "AET" ||
              fixture.fixture.status.short === "PEN"
                ? `sm:w-1/7 flex text-xl sm:text-4xl justify-center py-3 px-2 font-bold text-white bg-red-500`
                : `sm:w-1/7 text-xl flex sm:text-4xl justify-center py-3 px-2 font-bold text-white bg-green-500`
            }
          >
            <p className="sm:px-1">{fixture.goals.home}</p>
            <p className="px-1">-</p>
            <p className="sm:px-1">{fixture.goals.away}</p>
          </div>
        )}

        {/* TeamB */}
        <div className="w-3/5 sm:w-2/5 flex items-center justify-end font-bold text-sm sm:text-xl lg:text-2xl text-white sm:px-4">
          <p className="px-2 hidden sm:block">
            {truncateString(fixture.teams.away.name, 20)}
          </p>
          <p className="mx-1 sm:hidden">
            {truncateString(fixture.teams.away.name, 11)}
          </p>
          <img
            className="w-8 h-8 sm:w-16 sm:h-16 my-1"
            src={fixture.teams.away.logo}
            alt=""
          />
        </div>
      </div>
      <div className="bg-blue-800 bg-opacity-75 text-white p-2 sm:p-4">
        <div className="flex sm:justify-around text-sm font-semibold mx-auto py-2 sm:p-4 sm:mx-4 border-b">
          <div className="w-3/5 sm:w-1/3">
            {homeScorers.length !== 0 &&
              homeScorers.map((scorer, index) => (
                <div
                  key={index}
                  className="flex text-right mx-1 items-center justify-start"
                >
                  <p className="mr-2 sm:w-1/2">
                    {`${scorer.time.extra}` === "null"
                      ? `${scorer.player.name} ${scorer.time.elapsed}'`
                      : `${scorer.player.name} ${scorer.time.elapsed}+${scorer.time.extra}'`}
                    {scorer.detail === "Penalty"
                      ? " (pen)"
                      : scorer.detail === "Own Goal"
                      ? " (og)"
                      : ""}
                  </p>

                  <div className="text-left">
                    {scorer.detail === "Own Goal" ? (
                      <img
                        className="w-3 h-3"
                        src="/assets/soccer-ball-red.png"
                        alt=""
                      />
                    ) : (
                      <img
                        className="w-3 h-3"
                        src="/assets/soccer-ball-2.png"
                        alt=""
                      />
                    )}
                  </div>
                </div>
              ))}
          </div>
          <div className="sm:w-1/3 text-center sm:pl-2">
            <p>{fixture.statusShort}</p>
            <p className="font-semibold">
              Kick-Off:{" "}
              <span className="font-bold">
                {formatMatchTime(fixture.fixture.date)}
              </span>
            </p>
          </div>
          <div className="w-3/5 sm:w-1/3">
            {awayScorers.length !== 0 &&
              awayScorers.map((scorer, index) => (
                <div key={index} className="flex items-center justify-end">
                  <p className="mr-2">
                    {`${scorer.time.extra}` === "null"
                      ? `${scorer.player.name} ${scorer.time.elapsed}'`
                      : `${scorer.player.name} ${scorer.time.elapsed}+${scorer.time.extra}'`}
                    {scorer.detail === "Penalty"
                      ? " (pen)"
                      : scorer.detail === "Own Goal"
                      ? " (og)"
                      : ""}
                  </p>
                  {scorer.detail === "Own Goal" ? (
                    <img
                      className="w-3 h-3"
                      src="/assets/soccer-ball-red.png"
                      alt=""
                    />
                  ) : (
                    <img
                      className="w-3 h-3"
                      src="/assets/soccer-ball-2.png"
                      alt=""
                    />
                  )}
                </div>
              ))}
          </div>
        </div>
        <div className="flex sm:justify-around text-sm font-semibold mx-auto py-2 sm:p-4 sm:mx-4">
          <div className="w-3/5 sm:w-1/3 text-left">
            {homeScorers.length !== 0 &&
              homeScorers.map((scorer, index) => (
                <div
                  key={index}
                  className="flex text-right mx-1 items-center justify-start"
                >
                  {scorer.assist.name !== null && (
                    <p className="mr-2 sm:w-1/2">
                      {`${scorer.time.extra}` === "null"
                        ? `${scorer.assist.name} ${scorer.time.elapsed}'`
                        : `${scorer.assist.name} ${scorer.time.elapsed}+${scorer.time.extra}'`}
                    </p>
                  )}
                </div>
              ))}
          </div>
          <div className="sm:w-1/3 text-center sm:pl-4">
            {fixture.fixture.status.long !== "Not Started" && <p>Assists</p>}
          </div>
          <div className="w-3/5 sm:w-1/3 text-right">
            {awayScorers.length !== 0 &&
              awayScorers.map((scorer, index) => (
                <div
                  key={index}
                  className="flex text-right items-center justify-end"
                >
                  {scorer.assist.name !== null && (
                    <p className="mr-2 sm:w-1/2">
                      {scorer.time.extra === null
                        ? `${scorer.assist.name} ${scorer.time.elapsed}'`
                        : `${scorer.assist.name} ${scorer.time.elapsed}+${scorer.time.extra}'`}
                    </p>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamsInfo;
