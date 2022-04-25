import React from "react";
import Skeleton from "react-loading-skeleton";

const TweetSkeleton = () => {
  return (
    <div className="tweet bg-white rounded-lg mx-auto  flex flex-col mb-4 justify-center px-8 pt-4">
      <p className="pb-4 text-gray-800 font-semibold text-sm">
        <Skeleton width={`100%`} height={15} />
      </p>
      <p className="pb-4 text-gray-800 font-semibold text-sm">
        <Skeleton width={`80%`} height={15} />
      </p>
      <p className="pb-4 text-gray-800 font-semibold text-sm">
        <Skeleton width={`70%`} height={15} />
      </p>

      <div className="my-6 flex justify-between text-xs font-bold text-gray-800">
        <div>
          <span className="py-1 px-2">
            <Skeleton width={50} height={25} />
          </span>
        </div>
        <div>
          <span className="mx-1 px-2 py-1">
            <Skeleton width={50} height={25} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default TweetSkeleton;
