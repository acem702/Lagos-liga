import React from "react";
import Skeleton from "react-loading-skeleton";

const TeamsInfo = () => {
  return (
    <div className="flex bg-gray-100 flex-col justify-between">
      <div className="flex bg-gray-400 bg-opacity-75 px-2 sm:px-4 py-2 my-3 justify-between text-gray-100 text-xs font-bold">
        <div className="flex justify-between">
          <div className="flex items-center sm:mr-4">
            <Skeleton circle={true} height={20} width={20} />
            <p className="ml-2">
              <Skeleton height={20} width={`50%`} />
            </p>
          </div>
          <div className="flex items-center">
            <Skeleton circle={true} height={20} width={20} />
            <p className="mx-1 text-xs sm:text-md">
              <Skeleton height={20} width={100} />
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <Skeleton circle={true} height={20} width={20} />
          <p className="ml-1">
            <Skeleton height={20} width={100} />
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center bg-gray-400 mt-16">
        {/* TeamA */}
        <div className="hidden sm:flex w-3/5 sm:w-2/5 items-center justify-start font-bold text-sm sm:text-xl lg:text-2xl text-white sm:px-4">
          <Skeleton circle={true} height={50} width={50} />
          <p className="px-2">
            <Skeleton height={30} width={150} />
          </p>
        </div>
        <div className="sm:hidden w-3/5 sm:w-2/5 flex items-center justify-start font-bold text-sm sm:text-xl lg:text-2xl text-white sm:px-4">
          <Skeleton circle={true} height={40} width={40} />
          <p className="px-2">
            <Skeleton height={25} width={80} />
          </p>
        </div>

        {/* ScoreBoard */}

        <div className="hidden sm:block w-1/5 text-center py-6">
          <Skeleton height={30} width={60} />
        </div>
        <div className="sm:hidden w-1/5 text-center py-6">
          <Skeleton height={30} width={30} />
        </div>

        {/* TeamB */}
        <div className="hidden sm:flex sm:w-2/5 items-center justify-end sm:px-4">
          <p className="px-2">
            <Skeleton height={30} width={150} />
          </p>
          <Skeleton circle={true} height={50} width={50} />
        </div>
        <div className="sm:hidden sm:w-2/5 flex items-center justify-end sm:px-4">
          <p className="px-2">
            <Skeleton height={25} width={80} />
          </p>
          <Skeleton circle={true} height={40} width={40} />
        </div>
      </div>
      <div className="bg-gray-500 opacity-75 p-4">
        <div className="flex justify-around text-xs font-semibold mx-auto p-4 mx-4 border-b">
          <div className="w-1/3">
            {Array(2)
              .fill()
              .map((item, index) => (
                <div
                  key={index}
                  className="flex text-right items-center justify-start"
                >
                  <p className="mr-2 w-1/2">
                    <Skeleton height={15} width={80} />
                  </p>
                </div>
              ))}
          </div>
          <div className="w-1/3 text-center pl-4">
            <p>
              {" "}
              <Skeleton height={15} width={20} />
            </p>
            <p className="font-semibold">
              <Skeleton height={15} width={60} />
            </p>
          </div>
          <div className="w-1/3">
            {Array(2)
              .fill()
              .map((scorer, index) => (
                <div
                  key={index}
                  className="flex text-right items-center justify-end"
                >
                  <p className="mr-2 w-1/2">
                    <Skeleton height={15} width={80} />
                  </p>
                </div>
              ))}
          </div>
        </div>
        <div className="flex justify-around text-xs font-semibold mx-auto p-4 mx-4">
          <div className="w-1/3 text-left">
            {Array(2)
              .fill()
              .map((scorer, index) => (
                <div
                  key={index}
                  className="flex text-right items-center justify-start"
                >
                  <p className="mr-2 w-1/2">
                    <Skeleton height={15} width={80} />
                  </p>
                </div>
              ))}
          </div>
          <div className="w-1/3 text-center pl-4">
            <p>
              {" "}
              <Skeleton height={15} width={50} />
            </p>
          </div>
          <div className="w-1/3 text-right">
            {Array(2)
              .fill()
              .map((scorer, index) => (
                <div
                  key={index}
                  className="flex text-right items-center justify-end"
                >
                  <p className="mr-2 w-1/2">
                    <Skeleton height={15} width={80} />
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamsInfo;
