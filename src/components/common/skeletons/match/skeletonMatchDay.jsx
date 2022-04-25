import React from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonMatchDay = () => {
  return (
    <div className="inline-flex p-4 my-4">
      <button className="text-sm text-gray-700 font-bold px-2 rounded-l focus:outline-none">
        <Skeleton height={20} width={40} />
      </button>
      <h1 className="mx-6">
        <Skeleton height={30} width={100} />
      </h1>
      <button className="text-gray-700 text-sm font-bold px-2 rounded-r focus:outline-none">
        <Skeleton height={20} width={40} />
      </button>
    </div>
  );
};

export default SkeletonMatchDay;
