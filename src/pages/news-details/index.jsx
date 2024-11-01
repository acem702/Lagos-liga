  import React, { useState, useEffect } from "react";
  import { useParams } from "react-router-dom";
  import { getLatestNewsBody } from "../../services/latestServices"; // Ensure this path is correct
  import { formatFixturesDate } from "../../utils/formatTime"; // Ensure this utility is correct
  import { kiniscoresApi } from "../../config"; // Ensure kiniscoresApi is correctly set
  import SkeletonNewsBody from "../../components/common/skeletons/news/SkeletonNewsbody"; // Ensure this path is correct

  const NewsBody = () => {
    const [news, setNews] = useState(null); // Set initial state to null
    const [loading, setLoading] = useState(true);
    const { id } = useParams(); // Get ID from the URL parameters

    useEffect(() => {
      const fetchNewsBody = async () => {
        try {
          const newsData = await getLatestNewsBody(id); // Fetch news data using ID
          setNews(newsData); // Update state with fetched news data
        } catch (error) {
          console.error("Failed to fetch news body:", error);
        } finally {
          setLoading(false); // Set loading to false regardless of success or failure
        }
      };

      fetchNewsBody(); // Call the async function to fetch data
    }, [id]); // Run effect when ID changes

    if (loading) {
      return <SkeletonNewsBody />; // Show skeleton while loading
    }

    if (!news) {
      return <div>Error: News not found.</div>; // Handle case where news is not found
    }

    const imageUrl = `${kiniscoresApi}/news/newsImage/${news.$id}`; // Use the correct ID for image URL

    return (
      <div className="px-4 mx-2 sm:mx-4 bg-gray-100 text-center">
        <div className="bg-gray-100 py-6 xl:my-0 my-4">
          <div className="mx-2 sm:w-3/4 mx-auto">
            <h1 className="text-xl sm:text-2xl text-left text-blue-900 font-bold">
              {news.subTitle} {/* Display news subtitle */}
            </h1>
            <div className="text-gray-600 py-4 text-xs font-bold sm:text-sm sm:font-semibold flex items-center xl:w-2/3">
              <svg
                className="h-5 w-5 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="border-r border-gray-500 px-1 font-bold sm:font-semibold">
                {formatFixturesDate(news.createdAt)} {/* Format and display date */}
              </p>
              <p className="px-1">{news.source}</p> {/* Display news source */}
            </div>
          </div>
          <div className="flex flex-col sm:w-3/4 mx-auto">
            <img src={imageUrl} alt={news.subTitle} /> {/* Display news image */}
            <p className="py-6 text-gray-800 text-left leading-9">
              {news.body} {/* Display news body content */}
            </p>
          </div>
        </div>
      </div>
    );
  };

  export default NewsBody;