import React, { Fragment } from "react";
import NavItems from "../nav-items";
import { NavLink } from "react-router-dom";
import "./index.css";

const NavBar = () => {
  return (
    <Fragment>
      <nav className="w-full nav-bar bg-blue-600 flex flex-col">
        <div>
          {/* <img className="navbar-logo" src="/goal_logo.png" alt="logo" /> */}
          <h1 className="text-white text-lg mx-4 font-extrabold text-sm py-2 xl:text-2xl xl:py-3 xl:mx-8">
          <NavLink to="/">Futmob.io</NavLink>
          </h1> 
        </div>
        <NavItems />
      </nav>
    </Fragment>
  );
};

export default NavBar;
