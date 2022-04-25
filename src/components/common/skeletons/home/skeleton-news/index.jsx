import React from "react";
import SkeletonHero from "./SkeletonHero";
import SkeletonNews from "./SkeletonNews";

const SkeletonLatestNews = () => {
  return (
      <div className="bg-white sm:rounded-lg p-4 sm:mx-4">
        <div className="mb-4">
          <SkeletonHero />
        </div>
        <div className="px-2 sm:mx-2 sm:px-0 sm:grid sm:grid-cols-4 sm:gap-2 lg:grid-cols-3 lg:gap-4 xl:grid-cols-4  xl:mx-0">
          {Array(11)
            .fill()
            .map((item, index) => (
              <SkeletonNews key={index} />
            ))}
        </div>
      </div>
  );
};

export default SkeletonLatestNews;
