import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getLatestNewsBody } from "../../../services/latestServices";
import { formatFixturesDate } from "../../../utils/formatTime";
import { kiniscoresApi } from "../../../config.json";
import SkeletonNewsBody from "../../../components/common/skeletons/news/SkeletonNewsbody";

const NewsBody = () => {
  const [news, setNews] = useState("");
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getNewsBody = async () => {
      const { data: news } = await getLatestNewsBody(id);
      setNews(news);
      setLoading(false);
    };
    getNewsBody();
  }, [id]);

  const imageUrl = `${kiniscoresApi}/news/newsImage/${news._id}`;
  return (
    <div className="px-4 mx-2 sm:mx-4 xl:w-2/3 bg-gray-100 text-center xl:mx-auto">
      {loading ? (
        <SkeletonNewsBody />
      ) : (
        <div className="bg-gray-100 py-6 my-4">
          <div className="mx-2 sm:w-3/4 mx-auto">
            <h1 className="text-xl sm:text-2xl text-left text-blue-900 font-bold">
              {news.subTitle}
            </h1>
            <div className=" text-gray-600 py-4 text-xs font-bold sm:text-sm sm:font-semibold flex items-center xl:w-2/3">
              <svg
                className="h-5 w-5 text-gray-600"
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
              <p className="border-r border-gray-500 px-1 font-bold sm:font-semibold">
                {formatFixturesDate(news.createdAt)}
              </p>
              <p className="px-1">{news.source}</p>
            </div>
          </div>
          <div className="flex flex-col sm:w-3/4 mx-auto">
            <img src={imageUrl} alt="" />
            <p className="py-6 text-gray-800 text-left leading-9">
              {news.body}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsBody;
