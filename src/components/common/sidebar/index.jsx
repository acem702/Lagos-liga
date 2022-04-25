import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

const Sidebar = () => {
  return (
    <div className="hidden sidebar mx-2 xl:w-1/5 rounded-lg p-4 shadow-sm bg-opacity-25 xl:flex flex-col">
      <ul className="px-6 rounded-lg font-black text-blue-900 text-base flex flex-col">
        <NavLink exact to="/">
          <li className="py-4 cursor-pointer hover:text-white-500">News</li>
        </NavLink>
        <NavLink to="/fixtures">
          <li className="py-4 cursor-pointer hover:text-white-500">Fixtures</li>
        </NavLink>
        <NavLink to="/results/premier_league/39">
          <li className="py-4 cursor-pointer hover:text-white-500">Results</li>
        </NavLink>
        <NavLink to="/standings/premier_league/39">
          <li className="py-4 cursor-pointer hover:text-white-500">Standings</li>
        </NavLink>
        <NavLink to="/scorers/premier_league/39">
          <li className="py-4 cursor-pointe hover:text-white-500">Top Scorers</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
