import React from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonMiniTable = () => {
  return (
    <div className="">
      <tbody className="text-sm text-center text-blue-900">
        {Array(5)
          .fill()
          .map((item, index) => (
            <tr key={index}>
              <td className="py-2 font-bold text-xs">
                <Skeleton height={20} width={20} />
              </td>
              <td className=" flex items-center text-left text-sm py-2">
                <Skeleton circle={true} height={20} width={20} />
                <span className="px-2 text-xs font-bold">
                  <Skeleton height={20} width={50} />
                </span>
              </td>
              <td className="px-2 font-bold text-xs py-2">
                <Skeleton height={20} width={20} />
              </td>
              <td className="px-2 font-bold text-xs py-2">
                {" "}
                <Skeleton height={20} width={20} />
              </td>
              <td className="px-2 font-bold text-xs py-2">
                {" "}
                <Skeleton height={20} width={20} />
              </td>
            </tr>
          ))}
      </tbody>
    </div>
  );
};

export default SkeletonMiniTable;
