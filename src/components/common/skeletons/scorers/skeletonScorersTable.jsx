import React from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonScoreresTable = () => {
  return (
    <div className="mx-2 sm:mx-4">
      <div className="bg-white shadow-sm text-center xl:my-0 xl:mb-2 my-2 py-2 lg:py-4 font-bold">
        <h1 className="text-blue-900">
          <Skeleton height={30} width={`60%`} />
        </h1>
      </div>
      <table className="hidden xl:bg-white sm:block table-auto container">
        <thead className="bg-gray-400 text-gray-200 text-sm">
          <tr>
            <th className="px-2 text-left py-2">
              <Skeleton height={20} width={40} />
            </th>
            <th className="px-4 w-1/2 text-left py-2">
              <Skeleton height={20} width={70} />
            </th>
            <th className="py-2 px-2 w-1/2 text-center">
              <Skeleton height={20} width={40} />
            </th>
            <th className="px-4 text-center py-2">
              <Skeleton height={20} width={40} />
            </th>
            <td className="px-4 text-center py-2">
              <Skeleton height={20} width={40} />
            </td>
            <td className="px-4 text-center py-2">
              <Skeleton height={20} width={40} />
            </td>
            <td className="px-4 text-center py-2">
              <Skeleton height={20} width={40} />
            </td>
          </tr>
        </thead>
        <tbody className="text-sm font-bold text-blue-900">
          {Array(10)
            .fill()
            .map((items, index) => (
              <tr key={index} className="border-b-4">
                <td className="px-4 py-2">
                  <Skeleton height={20} width={20} />
                </td>
                <td className="px-4 py-2">
                  <Skeleton height={20} width={100} />
                </td>
                <td className="px-4 text-center py-2">
                  <Skeleton height={20} width={100} />
                </td>
                <td className="px-4 text-center py-2">
                  <Skeleton height={20} width={20} />
                </td>
                <td className="px-4 text-center py-2">
                  <Skeleton height={20} width={20} />
                </td>
                <td className="px-4 text-center py-2">
                  <Skeleton height={20} width={20} />
                </td>
                <td className="px-4 text-center py-2">
                  <Skeleton height={20} width={20} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {/* Mobile screens */}
      <table className="sm:hidden bg-white table-auto container">
        <thead className="bg-gray-500 text-gray-200 text-xs">
          <tr className="">
            <th className="px-2 py-1">
              {" "}
              <Skeleton height={20} width={30} />
            </th>
            <th className="px-1 w-full text-left py-2">
              <Skeleton height={20} width={100} />
            </th>
            <th className="px-1 py-1">
              <Skeleton height={20} width={30} />
            </th>
            <th className="px-1 py-1">
              <Skeleton height={20} width={30} />
            </th>
          </tr>
        </thead>
        <tbody className="text-xs text-center text-blue-900">
          {Array(20)
            .fill()
            .map((item, index) => (
              <tr key={index}>
                <td className="py-2 font-bold">
                  <Skeleton height={20} width={20} />
                </td>
                <td className=" flex text-left font-bold py-2">
                  <Skeleton height={20} width={100} />
                </td>
                <td className="px-2 font-bold py-2">
                  <Skeleton circle={true} height={20} width={20} />
                </td>
                <td className="px-2 font-bold text-xs py-2">
                  <Skeleton height={20} width={20} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default SkeletonScoreresTable;
