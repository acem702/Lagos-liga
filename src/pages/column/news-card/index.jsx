import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { kiniscoresApi } from "../../../config.json";

const NewsCard = ({ news, getNewsBody }) => {
  const imageUrl = `${kiniscoresApi}/news/newsImage/${news._id}`;
  return (
    <div className="mx-2 py-2 flex flex-col sm:mx-0 sm:py-0 sm:max-w-xs sm:overflow-hidden sm:justify-between">
      <div className="flex sm:px-0 sm:flex-col">
        <div className="w-1/2 sm:w-full">
          <img
            className="object-cover h-full w-full sm:object-fit"
            src={imageUrl}
            alt="news"
          />
        </div>
        <div className="w-1/2 flex items-center px-2 bg-gray-300 text-gray-900 sm:px-0 xl:my-1 py-1 sm:w-full sm:bg-gray-100">
          <div className="py-2 font-bold text-xs sm:px-2 sm:text-sm">
            <Link to={`/news/${news._id}`}>
              <p className="leading-snug" onClick={() => getNewsBody(news._id)}>
                {news.headline}
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex px-1 items-center justify-start sm:pl-2 xl:px-2">
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
        <p className="inline-block border-r-2 px-1 text-gray-600 text-xs sm:px-2  sm:font-bold sm:text-gray-700">
          {moment(news.createdAt).fromNow(true)}
        </p>
        <p className="inline-block px-1 text-gray-600 text-xs s sm:font-semibold sm:text-gray-700">
          {news.source}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
