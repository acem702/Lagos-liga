import React from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonStandingTable = () => {
  return (
    <div className="mx-4">
      <div className="bg-white xl:my-0 xl:mb-2 my-2 py-2 text-center font-bold sm:shadow-sm sm:mx-4">
        <h1 className="text-blue-800">
          <Skeleton height={30} width={`60%`} />
        </h1>
      </div>
      <table className="hidden bg-white sm:block table-auto sm:mx-4">
        <thead className="bg-gray-400 text-gray-200 text-sm">
          <tr className="">
            <th className="px-2 py-2">
              <Skeleton height={20} width={40} />
            </th>
            <th className="px-2 w-1/2 text-left py-2">
              <Skeleton height={20} width={70} />
            </th>
            <th className="sm:px-2 lg:px-4 py-2">
              <Skeleton height={20} width={40} />
            </th>
            <th className="sm:px-2 lg:px-4 py-2">
              <Skeleton height={20} width={30} />
            </th>
            <th className="sm:px-2 lg:px-4 py-2">
              <Skeleton height={20} width={30} />
            </th>
            <th className="sm:px-2 lg:px-4 py-2">
              <Skeleton height={20} width={30} />
            </th>
            <th className="sm:px-2 lg:px-4 py-2">
              <Skeleton height={20} width={30} />
            </th>
            <th className="sm:px-2 lg:px-4 py-2">
              <Skeleton height={20} width={30} />
            </th>
            <th className="sm:px-2 lg:px-4 py-2">
              <Skeleton height={20} width={30} />
            </th>
            <th className="sm:px-2 lg:px-4 py-2">
              <Skeleton height={20} width={30} />
            </th>
            <th className="sm:px-2 lg:hidden xl:px-4 py-2">
              <Skeleton height={20} width={30} />
            </th>
          </tr>
        </thead>
        <tbody className="text-sm font-bold text-center text-blue-900">
          {Array(20)
            .fill()
            .map((item, index) => (
              <tr key={index}>
                <td className="py-2">
                  <Skeleton height={20} width={20} />
                </td>
                <td className=" flex text-left py-2">
                  <Skeleton circle={true} height={20} width={20} />
                  <Skeleton height={20} width={100} />
                </td>
                <td className="sm:px-2 lg:px-4 py-2">
                  <Skeleton height={20} width={20} />
                </td>
                <td className="sm:px-2 lg:px-4 py-2">
                  <Skeleton height={20} width={20} />
                </td>
                <td className="sm:px-2 lg:px-4 py-2">
                  <Skeleton height={20} width={20} />
                </td>
                <td className="sm:px-2 lg:px-4 py-2">
                  <Skeleton height={20} width={20} />
                </td>
                <td className="sm:px-2 lg:px-4 py-2">
                  <Skeleton height={20} width={20} />
                </td>
                <td className="sm:px-2 lg:px-4 py-2">
                  <Skeleton height={20} width={20} />
                </td>
                <td className="sm:px-2 lg:px-4 py-2">
                  <Skeleton height={20} width={20} />
                </td>
                <td className="sm:px-2 lg:px-4 py-2">
                  <Skeleton height={20} width={20} />
                </td>
                <td className="sm:px-2 lg:hidden xl:px-4 py-2">
                  <Skeleton height={20} width={20} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {/* Mobile Table */}
      <table className="sm:hidden bg-white table-auto mx-2">
        <thead className="bg-gray-400 text-gray-200 text-xs">
          <tr className="">
            <th className="px-1 py-1">
              {" "}
              <Skeleton height={20} width={20} />
            </th>
            <th className="px-1 w-full text-left py-2">
              <Skeleton height={20} width={40} />
            </th>
            <th className="px-1 py-1">
              <Skeleton height={20} width={20} />
            </th>
            <th className="px-1 py-1">
              <Skeleton height={20} width={20} />
            </th>
            <th className="px-1 py-1">
              <Skeleton height={20} width={20} />
            </th>
            <th className="px-1 py-1">
              <Skeleton height={20} width={20} />
            </th>
            <th className="px-1 py-1">
              <Skeleton height={20} width={20} />
            </th>
            <th className="px-1 py-1">
              <Skeleton height={20} width={20} />
            </th>
          </tr>
        </thead>
        <tbody className="text-sm text-center text-blue-900">
          {Array(20)
            .fill()
            .map((item, index) => (
              <tr key={index}>
                <td className="py-2 font-bold text-xs">
                  <Skeleton height={20} width={20} />
                </td>
                <td className=" flex items-center text-left text-sm py-2">
                  <Skeleton circle={true} height={20} width={20} />
                  <span className="mx-2 text-xs font-bold">
                    <Skeleton height={20} width={50} />
                  </span>
                </td>
                <td className="px-1 font-bold text-xs py-2">
                  <Skeleton height={20} width={20} />
                </td>
                <td className="px-1 font-bold text-xs py-2">
                  <Skeleton height={20} width={20} />
                </td>
                <td className="px-1 font-bold text-xs py-2">
                  <Skeleton height={20} width={20} />
                </td>
                <td className="px-1 font-bold text-xs py-2">
                  <Skeleton height={20} width={20} />
                </td>
                <td className="px-1 font-bold text-xs py-2">
                  <Skeleton height={20} width={20} />
                </td>
                <td className="px-1 font-bold text-xs py-2">
                  <Skeleton height={20} width={20} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default SkeletonStandingTable;
