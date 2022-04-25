import React from "react";
import TweetSkeleton from "./tweetSkeleton";

const TweetStreamSkeleton = () => {
  return (
    <div className="mx-4">
      {Array(5)
        .fill()
        .map((item, index) => (
          <TweetSkeleton key={index} />
        ))}
    </div>
  );
};

export default TweetStreamSkeleton;
