import React from "react";
import Skeleton from "react-loading-skeleton";
const SkeletonMatchNavs = () => {
  return (
    <div>
      <div className="bg-gray-500 text-gray-100 font-semibold p-2">
        <ul className="flex justify-around">
          <li><Skeleton height={20} width={50}/></li>
          <li><Skeleton height={20} width={50}/></li>
          <li><Skeleton height={20} width={50}/></li>
          <li><Skeleton height={20} width={50}/></li>
        </ul>
      </div>
    </div>
  );
};

export default SkeletonMatchNavs;