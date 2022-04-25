import React from "react";
import moment from "moment";
import "./index.css";

const TweetStream = ({ tweet }) => {
  return (
    <a
      href={`https://twitter.com/${tweet.user.username}/status/${tweet.id}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="tweet bg-white mx-2 px-4 rounded-sm lg:rounded-lg lg:mx-auto flex flex-col mb-4 justify-center xl:px-8 pt-4">
        <p className={`${tweet.media ? "pb-4 text-gray-900 font-normal text-lg lg:text-xl" : "pb-4 text-gray-900 text-xl lg:text-2xl font-semibold"}`}>{tweet.text}</p>
        {tweet.media?.type && (
          <img
            className="tweet-image object-cover block w-full"
            src={
              tweet.media.type === "photo"
                ? tweet.media.url
                : tweet.media.preview_image_url
            }
            alt=""
          />
        )}
        <div className="my-6 flex justify-between text-xs font-bold text-gray-800">
          <div>
            <span className="bg-gray-300  py-1 px-2">
              {tweet.user.username}
            </span>
            {tweet.user.location && (
              <span className="hidden  bg-gray-300 mx-4 px-2 py-1">
                {tweet.user.location}
              </span>
            )}
          </div>
          <div>
            <span className="bg-gray-300 mx-1 px-2 py-1">
              {moment(tweet.created_at).fromNow(true)}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default TweetStream;
