import React, { useState, useEffect } from "react";
import { truncateTeamName } from "../../../utils/truncate";
import _ from "lodash";

const Lineups = ({ fixture }) => {
  const [lineups, setLineups] = useState([]);
  const [homestartXI, setHomeStartXI] = useState([]);
  const [awaystartXI, setAwayStartXI] = useState([]);
  const [showHomeTeam, setShowHomeTeam] = useState(true);
  const [showAwayTeam, setShowAwayTeam] = useState(false);

  useEffect(() => {
    if (fixture.status === "Not Started") {
      setHomeStartXI([]);
      setAwayStartXI([]);
      setLineups([]);
    } else {
      let lineup = fixture.lineups;
      // lineup = Object.values(lineup);

      let homeStartXI = lineup[0]?.startXI;
      homeStartXI = _.groupBy(homeStartXI, "player.pos");

      let awayStartXI = lineup[1]?.startXI;
      awayStartXI = _.groupBy(awayStartXI, "player.pos");

      homeStartXI = _.toArray(homeStartXI);
      awayStartXI = _.toArray(awayStartXI);

      setHomeStartXI(homeStartXI);
      setAwayStartXI(awayStartXI);
      setLineups(lineup);
    }
  }, [fixture]);

  const handleShowTeam = (team) => {
    if (team === "homeTeam" && !showHomeTeam) {
      setShowHomeTeam(!showHomeTeam);
      setShowAwayTeam(!showAwayTeam);
    }
    if (team === "awayTeam" && !showAwayTeam) {
      setShowAwayTeam(!showAwayTeam);
      setShowHomeTeam(!showHomeTeam);
    }
  };

  return (
    <div>
      {lineups.length === 0 ? (
        <div className="mx-2 sm:w-2/3 sm:mx-auto bg-gray-200 text-xl text-center shadow-lg my-6">
          <h1 className="text-blue-900 p-4">
            Lineups are not available until an hour before the match
          </h1>
        </div>
      ) : (
        <div className="bg-white xl:p-4 sm:flex sm:justify-around mx-6 sm:mx-8 my-6">
          <div className="flex justify-center border-2 border-blue-900 bg-blue-900 rounded-md font-bold sm:hidden my-4">
            <div
              onClick={() => handleShowTeam("homeTeam")}
              className={`${
                showHomeTeam
                  ? "w-1/2 bg-white py-2 text-center"
                  : "w-1/2 text-white rounded-md text-center py-2"
              }`}
            >
              {truncateTeamName(fixture.teams.home.name)}
            </div>
            <div
              onClick={() => handleShowTeam("awayTeam")}
              className={`${
                showAwayTeam
                  ? "w-1/2 py-2 bg-white text-center"
                  : "w-1/2 text-white rounded-l-md text-center py-2"
              }`}
            >
              {truncateTeamName(fixture.teams.away.name)}
            </div>
          </div>
          {lineups[0] !== undefined && (
            <div
              className={`${
                showHomeTeam
                  ? " my-6 sm:my-0 sm:w-1/2 sm:mr-6 border-r border-l"
                  : " my-6 hidden sm:block sm:my-0 sm:w-1/2 sm:mr-6 border-r border-l"
              }`}
            >
              <div className="flex font-bold bg-blue-900 text-white p-2">
                <img src={fixture.teams.home.logo} className="w-6 h-6" alt="" />
                <p className="mx-2">{fixture.teams.home.name}</p>
                <p>{lineups[0].formation}</p>
              </div>

              <div className="">
                <h1 className="font-bold text-center border-b py-2">
                  Goalkeeper
                </h1>
                <div className="flex border-b font-semibold text-sm py-2">
                  <div className="w-1/6 text-center">
                    {homestartXI[0][0].player.number}
                  </div>
                  <div className="w-1/2">{homestartXI[0][0].player.name}</div>
                </div>
              </div>
              <div className="">
                <h1 className="font-bold text-center border-b py-2">
                  Defenders
                </h1>
                {homestartXI[1].map((player) => (
                  <div
                    key={player.player.id}
                    className="flex border-b font-semibold text-sm py-2"
                  >
                    <div className="w-1/6 text-center">{player.player.number}</div>
                    <div className="sm:w-1/2">{player.player.name}</div>
                  </div>
                ))}
              </div>
              <div className="">
                <h1 className="font-bold text-center border-b py-2">
                  Midfielders
                </h1>
                {homestartXI[2].map((player) => (
                  <div
                    key={player.player.id}
                    className="flex border-b font-semibold text-sm py-2"
                  >
                    <div className="w-1/6 text-center">{player.player.number}</div>
                    <div className="w-1/2">{player.player.name}</div>
                  </div>
                ))}
              </div>
              <div className="">
                <h1 className="font-bold text-center border-b py-2">
                  Forwards
                </h1>
                {homestartXI[3].map((player) => (
                  <div
                    key={player.player.id}
                    className="flex border-b font-semibold text-sm py-2"
                  >
                    <div className="w-1/6 text-center">{player.player.number}</div>
                    <div className="sm:w-1/2">{player.player.name}</div>
                  </div>
                ))}
              </div>
              <div className="">
                <h1 className="font-bold text-center border-b py-2">
                  Substitutes
                </h1>
                {lineups[0].substitutes.map((player) => (
                  <div
                    key={player.player.id}
                    className="flex border-b font-semibold text-sm py-2"
                  >
                    <div className="w-1/6 text-center">{player.player.number}</div>
                    <div className="sm:w-1/2">{player.player.name}</div>
                  </div>
                ))}
              </div>
              <div className="border-b">
                <h1 className="font-bold py-1 px-4 bg-blue-900 text-white">
                  Manager
                </h1>
                <div className="font-semibold text-sm py-2">
                  <div className="mx-4">{lineups[0].coach.name}</div>
                </div>
              </div>
            </div>
          )}

          {lineups[1] !== undefined && (
            <div
              className={`${
                showAwayTeam
                  ? "my-6 sm:my-0 sm:w-1/2 border-r border-l"
                  : "hidden sm:block my-6 sm:my-0 sm:w-1/2 border-r border-l"
              }`}
            >
              <div className="flex font-bold bg-blue-900 text-white p-2">
                <img src={fixture.teams.away.logo} className="w-6 h-6" alt="" />
                <p className="mx-2">{fixture.teams.away.name}</p>
                <p>{lineups[1].formation}</p>
              </div>
              <div className="">
                {/* Lineups */}
                <h1 className="font-bold text-center border-b py-2">
                  Goalkeeper
                </h1>
                <div className="flex border-b font-semibold text-sm py-2">
                  <div className="w-1/6 text-center">
                    {awaystartXI[0][0].player.number}
                  </div>
                  <div className="w-1/2">{awaystartXI[0][0].player.name}</div>
                </div>
              </div>
              <div className="">
                <h1 className="font-bold text-center border-b py-2">
                  Defenders
                </h1>
                {awaystartXI[1].map((player) => (
                  <div
                    key={player.player.id}
                    className="flex border-b font-semibold text-sm py-2"
                  >
                    <div className="w-1/6 text-center">{player.player.number}</div>
                    <div className="w-1/2">{player.player.name}</div>
                  </div>
                ))}
              </div>
              <div className="">
                <h1 className="font-bold text-center border-b py-2">
                  Midfielders
                </h1>
                {awaystartXI[2].map((player) => (
                  <div
                    key={player.player.id}
                    className="flex border-b font-semibold text-sm py-2"
                  >
                    <div className="w-1/6 text-center">{player.player.number}</div>
                    <div className="w-1/2">{player.player.name}</div>
                  </div>
                ))}
              </div>
              <div className="">
                <h1 className="font-bold text-center border-b py-2">
                  Forwards
                </h1>
                {awaystartXI[3].map((player) => (
                  <div
                    key={player.player.id}
                    className="flex border-b font-semibold text-sm py-2"
                  >
                    <div className="w-1/6 text-center">{player.player.number}</div>
                    <div className="w-1/2">{player.player.name}</div>
                  </div>
                ))}
              </div>
              <div className="">
                <h1 className="font-bold text-center border-b py-2">
                  Substitutes
                </h1>
                {lineups[1].substitutes.map((player) => (
                  <div
                    key={player.player.id}
                    className="flex border-b font-semibold text-sm py-2"
                  >
                    <div className="w-1/6 text-center">{player.player.number}</div>
                    <div className="w-1/2">{player.player.name}</div>
                  </div>
                ))}
              </div>
              <div className="border-b">
                <h1 className="font-bold py-1 px-4 bg-blue-900 text-white">
                  Manager
                </h1>
                <div className="font-semibold text-sm py-2">
                  <div className="mx-4">{lineups[1].coach.name}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Lineups;
