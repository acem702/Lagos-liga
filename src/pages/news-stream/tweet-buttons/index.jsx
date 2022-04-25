import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

const TweetButtons = ({ title }) => {
  const [show, setShow] = useState(false);

  const handleShowButton = () => {
    if (window.scrollY >= window.innerHeight * 5) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  window.addEventListener("scroll", handleShowButton);

  const handleGoToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="text-center">
      {show && (
        <button
          onClick={handleGoToTop}
          className="hidden xl:flex tweet-button items-center rounded-lg text-sm font-bold px-2 py-1 bg-blue-900 text-white focus:outline-none"
        >
          {title}
          <FontAwesomeIcon icon={faArrowCircleUp} className="mx-2" />
        </button>
      )}

      {show && (
        <button
          onClick={handleGoToTop}
          className="xl:hidden tweet-button-mobile items-center rounded-lg text-lg font-bold p-1 bg-blue-900 text-white focus:outline-none"
        >
          <FontAwesomeIcon icon={faArrowCircleUp} className="mx-2" />
        </button>
      )}
    </div>
  );
};

export default TweetButtons;
