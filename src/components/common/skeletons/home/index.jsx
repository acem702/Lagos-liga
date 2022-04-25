import React from "react";
import SkeletonMiniMatch from "./skeletonMinimatch";
import SkeletonMiniTable from "./skeletonMinitable";
import SkeletonMiniscorers from "./skeletonMiniscorers";

const SkeletonHome = () => {
  return (
    <div className="m-2 sm:px-4 py-4 sm:flex sm:flex-col sm:justify-around sm:my-4 lg:my-0 lg:w-1/3 lg:rounded-lg xl:w-1/4 xl:ml-5">
      <SkeletonMiniMatch />
      <SkeletonMiniTable />
      <SkeletonMiniscorers />
    </div>
  );
};

export default SkeletonHome;
