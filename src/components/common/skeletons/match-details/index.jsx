import React from 'react';
import SkeletonTeamInfo from "./skeletonTeamInfo"
import SkeletonMatchNavs from './skeletonMatchNavs';
const SkeletonMatchDetails = () => {
    return (
      <div>
        <div className="mx-auto">
              <SkeletonTeamInfo/>
              <SkeletonMatchNavs/>
        </div>
      </div>
    );
  };
  
  export default SkeletonMatchDetails;