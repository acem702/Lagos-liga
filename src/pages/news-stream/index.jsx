import React, { useState, useEffect } from "react";
import { useSpring, animated, config } from "react-spring";
import { getTweets } from "../../services/latestServices";
import MiniStandings from "../../components/shared/tables/mini_tables/standings";
import MiniMatch from "../../components/fixtures/mini_fixtures";
import MiniScorers from "../../components/shared/tables/mini_tables/scorers";
import io from "socket.io-client";
import TweetStream from "./tweet-stream";
import TweetStreamSkeleton from "../../components/common/skeletons/tweet-stream";
import "./index.css";
import TweetButtons from "./tweet-buttons";

const NewsStream = () => {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);
  const socket = io("https://kiniscores.herokuapp.com");

  useEffect(() => {
    const getNewsTweets = async () => {
      try {
        const { data } = await getTweets();
        setTweets(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getNewsTweets();
  }, []);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to Server");
    });

    socket.on("tweet", (data) => {
      setTweets(
        [...tweets, data].sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        )
      );
    });
  }, [tweets, socket]);

  const contentProps = useSpring({
    from: { opacity: 0, marginTop: -200 },
    to: { opacity: 1, marginTop: 0 },
    config: config.slow,
  });

  return (
    <div className="lg:mx-auto sm:flex lg:justify-between items-start">
      <div className="stream xl:w-2/3">
        <div className="rounded-sm sm:rounded-lg mx-2 bg-gray-700 p-2 mb-4 xl:mx-4 text-m bg-white xl:p-4 font-bold text-white">
          News & Updates
        </div>
        {loading ? (
          <TweetStreamSkeleton />
        ) : (
          <div className="xl:mx-4 xl:shadow-sm">
            {tweets.map((tweet) => (
              <TweetStream tweet={tweet} key={tweet.id} />
            ))}
          </div>
        )}
      </div>
      <div className="hidden mini px-2 sm:flex sm:flex-col sm:justify-around lg:my-0 lg:rounded-lg xl:w-1/3">
        <animated.div style={contentProps}>
          <MiniMatch />
          <MiniStandings />
          <MiniScorers />
        </animated.div>
      </div>
      <TweetButtons title="Go to Top" />
    </div>
  );
};

export default NewsStream;
