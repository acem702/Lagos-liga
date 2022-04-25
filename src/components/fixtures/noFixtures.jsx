import React from "react";
import { Link } from "react-router-dom";
const NoFixtures = ({ league, league_slug, league_id }) => {
  return (
    <div>
      <div className="text-sm font-bold sm:text-xl sm:font-semibold text-blue-800 p-8 bg-gray-200 shadow-lg text-center xl:mx-auto">
        {league
          ? `No ${league} Fixtures Today`
          : "There are no fixtures in Europes top five leagues today"}
        {league && (
          <Link to={`/fixtures/next/${league_slug}/${league_id}`}>
            <div className="flex shadow-sm p-2 sm:w-1/2 mx-auto justify-center items-center text-xs sm:text-sm my-6 font-bold">
              <p>See next {league} fixtures</p>
              <img
                className="hidden sm:block h-4 w-4 ml-1"
                src="/assets/icons8-right.png"
                alt=""
              />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NoFixtures;
