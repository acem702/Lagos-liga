import React from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonNews = () => {
  return (
    <div className="mx-2 py-2 flex flex-col sm:mx-0 sm:py-0 sm:max-w-xs sm:overflow-hidden sm:justify-between">
      <div className="flex sm:px-0 sm:flex-col">
        <div className="w-1/2 sm:w-full">
          <Skeleton height={120} width={`100%`} />
        </div>
        <div className="w-1/2 flex items-center px-2 sm:px-0 xl:my-1 py-1 sm:w-full">
          <div className="py-2 font-bold text-xs sm:px-2 sm:text-sm">
            <p className="hidden sm:block">
              <Skeleton height={20} width={150} />
            </p>
            <p className="block sm:hidden">
              <Skeleton height={20} width={110} />
            </p>

            <Skeleton height={20} width={100} />
          </div>
        </div>
      </div>
      <div className="flex px-1 items-center justify-start sm:pl-2 xl:px-2">
        <Skeleton circle={true} height={20} width={20} />

        <p className="inline-block border-r-2 px-1 text-gray-600 text-xs sm:px-2  sm:font-bold sm:text-gray-700 ">
          <Skeleton height={20} width={20} />
        </p>
        <p className="inline-block px-1 text-gray-600 text-xs sm:px-2 sm:font-semibold sm:text-gray-700">
          <Skeleton height={20} width={50} />
        </p>
      </div>
    </div>
  );
};

export default SkeletonNews;
