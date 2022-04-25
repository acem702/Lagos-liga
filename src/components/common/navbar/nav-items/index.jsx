import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

const NavItems = () => {
  return (
    <div className="xl:hidden bg-white border-b-8 border-blue-900 py-2 xl:p-4 flex-row items-center">
      <ul className="nav flex disable-scrollbars overflow-x-auto justify-between xl:justify-center align-center">
        <li className="px-6 flex flex-none xl:px-8 text-blue-800 font-bold cursor-pointer hover:text-green-500">
          <NavLink exact to="/">News</NavLink>
        </li>
        <li className="px-6 flex flex-none xl:px-8 text-blue-800 font-bold cursor-pointer hover:text-green-500">
          <NavLink to="/fixtures">Fixtures</NavLink>
        </li>
        <li className="px-6 flex flex-none xl:px-8 text-blue-800 font-bold cursor-pointer hover:text-green-500">
          <NavLink to="/results/premier_league/39">Results</NavLink>
        </li>
        <li className="px-6 flex flex-none xl:px-8 text-blue-800 font-bold cursor-pointer hover:text-green-500">
          <NavLink to="/standings/premier_league/39">Standings</NavLink>
        </li>
        <li className="px-6 flex flex-none xl:px-8 text-blue-800 font-bold cursor-pointer hover:text-green-500">
          <NavLink to="/scorers/premier_league/39">Top Scorers</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavItems;
