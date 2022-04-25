import React from "react";
import { Link } from "react-router-dom";
import { formatCurrentDate, formatDate } from "../../../utils/formatTime";
import LeaguesDropdown from "../../shared/dropdowns/leagues";

const LeagueFixturesHeader = ({ league_slug, league_id, league }) => {
  return (
    <div>
      <div className="text-blue-900 border shadow-sm rounded-lg xl:my-0 xl:mb-4 my-4 text-center text-xl p-2 font-bold">
        <p className="hidden sm:block">{formatCurrentDate(new Date())}</p>
        <p className="sm:hidden text-sm">{formatDate(new Date())}</p>
      </div>
      <div className="sm:w-3/4 mx-auto flex justify-between items-center text-blue-900 text-sm font-bold px-4">
        <Link to={`/fixtures/last/${league_slug}/${league_id}`}>last</Link>
        <Link to={`/fixtures/next/${league_slug}/${league_id}`}>next</Link>
      </div>
      <div className="text-left">
        <LeaguesDropdown
          title={`${league}'s Fixtures`}
          page="/fixtures"
        />
      </div>
    </div>
  );
};

export default LeagueFixturesHeader;
