import React from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonMatch = () => {
  return (
    <div className="mb-2 grid grid-cols-3 sm:mb-0">
      <div className="flex items-center col-span-2 justify-between mx-2 sm:mx-4">
        <div className="flex flex-col justify-start text-xs items-start font-bold text-blue-900 left">
          <div className="flex justify-between items-center py-2 sm:p-2 team-name">
            <Skeleton circle={true} height={20} width={20} />
            <p className="px-2">
              <Skeleton height={20} width={100}/>
            </p>
          </div>
          <div className="flex justify-between items-center py-2 sm:p-2 team-name">
            <Skeleton circle={true} height={20} width={20} />
            <p className="px-2">
              <Skeleton height={20} width={100}/>
            </p>
          </div>
        </div>

        <div className="text-xs font-bold text-white middle sm:text-sm">
          <p className="px-2 py-1 my-2 rounded-lg sm:my-1 sm:py-2 sm:px-3">
            {" "}
            <Skeleton height={25} width={25} />
          </p>
          <p className="px-2 py-1 my-2 rounded-lg sm:my-1 sm:py-2 sm:px-3">
            {" "}
            <Skeleton height={25} width={25} />
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center text-xs text-center font-semibold text-blue-800 right border-l-2">
        <p className="py-2 px-3">
          {" "}
          <Skeleton height={20} width={20} />
        </p>
        <div className="p-3 flex-col justify-center items-center sm:justify-around flex lg:flex-row">
          <Skeleton circle={true} height={20} width={20} />
          <p className="px-2">
            {" "}
            <Skeleton height={20} width={80} />
          </p>
        </div>

        <div className="font-bold mx-4 flex items-center justify-center">
        <Skeleton circle={true} height={20} width={20} />
          <p className="p-1 rounded-lg"><Skeleton height={25} width={40} /></p>
        </div>
      </div>
    </div>
  );
};

export default SkeletonMatch;
