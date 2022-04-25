import React from "react";
import {Link} from "react-router-dom"
const MatchNavs = ({id}) => {
  return (
    <div>
      <div className="bg-blue-900 text-xs font-bold text-gray-100 sm:text-lg sm:font-semibold p-2">
        <ul className="flex justify-around">
          <li className="cursor-pointer"><Link to={`/fixture/${id}/lineups`} >Lineups</Link></li>
          <li className="cursor-pointer"><Link to={`/fixture/${id}/stats`}>Statistics</Link></li>
          <li className="cursor-pointer"><Link to={`/fixture/${id}/head-to-head`}>Head-to-Head</Link></li>
          <li className="cursor-pointer"><Link to={`/fixture/${id}/events`}>Events</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default MatchNavs;
