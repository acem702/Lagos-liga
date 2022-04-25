import React from "react";
import SkeletonMatch from "./skeletonMatch";


const SkeletonMatches = () => {
  return (
      <div className="mx-2 sm:px-0 sm:grid sm:grid-cols-2 sm:gap-2">
        {Array(10)
          .fill()
          .map((item, index) => (
            <SkeletonMatch key={index} />
          ))}
      </div>
  );
};

export default SkeletonMatches;
