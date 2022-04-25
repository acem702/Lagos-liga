import React from "react";
import Skeleton from "react-loading-skeleton";

const SKeletonHero = () => {
  return (
    <div className="sm:flex sm:justify-around">
      <div className="sm:w-1/2 sm:rounded">
        <Skeleton height={314} width={`100%`} />
      </div>
      <div className="px-3 py-2 flex flex-col text-left sm:w-1/2 sm:relative sm:justify-center sm:items-start sm:px-6 sm:rounded-r-lg">
        <div className="mb-3 text-gray-900 font-bold text-sm sm:text-xl sm:mb-2">
          <h1 className="hidden sm:block">
            <Skeleton height={25} width={310} />
          </h1>
          <h1 className="block sm:hidden">
            <Skeleton height={25} width={`90%`} />
          </h1>
        </div>

        <div className="pb-3 text-gray-900 sm:mb-2">
          <p className="hidden sm:block">
            <Skeleton height={20} width={280} />
          </p>
          <p className="hidden sm:block">
            <Skeleton height={20} width={280} />
          </p>
          <p className="block sm:hidden">
            <Skeleton height={20} width={`80%`} />
          </p>
          <p className="block sm:hidden">
            <Skeleton height={20} width={`80%`} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default SKeletonHero;
