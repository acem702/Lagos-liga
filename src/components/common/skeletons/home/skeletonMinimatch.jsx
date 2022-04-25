import React from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonMiniMatch = () => {
  return (
    <div className="">
      <div className="py-8 border-b">
        {Array(3)
          .fill()
          .map((item, index) => (
            <div
              key={index}
              className="w-full bg-white flex items-center text-xs text-blue-800 font-bold p-1 mt-4"
            >
              <div>
                <p className="text-sm">
                  <Skeleton height={30} />
                </p>
              </div>
              <div className="text-center w-1/2">
                <Skeleton height={20} width={70} />
              </div>

              <div className="w-1/8 flex items-center justify-center mx-1">
                <Skeleton circle={true} height={20} width={20} />
                <p className="text-xs text-white mx-1 px-1 py-1">
                  <Skeleton width={40} height={20} />
                </p>
                <Skeleton circle={true} height={20} width={20} />
              </div>
              <div className="w-1/2 text-center">
                <Skeleton height={20} width={70} />
              </div>
            </div>
          ))}
      </div>
      <div className="text-right text-xs px-2 py-1 font-bold mb-8 text-blue-900">
        <Skeleton height={20} width={50} />
      </div>
    </div>
  );
};

export default SkeletonMiniMatch;
