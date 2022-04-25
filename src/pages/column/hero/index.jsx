import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { kiniscoresApi } from "../../../config.json";

const Hero = ({ featuredNews }) => {
  const imageUrl = `${kiniscoresApi}/news/newsImage/${featuredNews._id}`;
  return (
    <div className="mx-2 sm:flex sm:justify-around xl:mx-0">
      <div className="sm:w-1/2 sm:rounded">
        <Link to={`/news/${featuredNews._id}`}>
          <img className="sm:rounded-l-lg" src={imageUrl} alt="" />
        </Link>
      </div>
      <div className="px-3 py-2 bg-yellow-500 flex flex-col text-left sm:w-1/2 sm:relative sm:justify-center sm:items-start sm:px-6 sm:rounded-r-lg">
        <div className="mb-3 text-gray-900 font-bold text-sm sm:text-xl sm:mb-2">
          <Link to={`/news/${featuredNews._id}`}>{featuredNews.headline}</Link>
        </div>

        <div className="pb-3 text-gray-900 text-sm sm:mb-2">
          <Link to={`/news/${featuredNews._id}`}>{featuredNews.subTitle}</Link>
        </div>

        <div className="flex items-center sm:absolute sm:bottom-0 sm:py-2">
          <svg
            className="h-4 w-4 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="border-r-2 border-yellow-400 text-gray-700 px-2 text-xs xl:font-bold">
            {moment(featuredNews.createdAt).fromNow(true)}
          </p>
          <p className="px-2 text-gray-700 text-xs sm:font-semibold">
            {featuredNews.source}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
