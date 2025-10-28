import React from "react";

const ReportedSkeleton = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-bold mb-4">گزارش‌های کاربران</h2>

      {/* Filter Skeleton */}
      <div className="flex gap-2 mb-4">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="h-8 w-20 bg-gray-200 rounded-lg animate-pulse"
          ></div>
        ))}
      </div>

      {/* Table Skeleton */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-right border">
          <thead className="bg-gray-100">
            <tr>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                <th key={item} className="px-3 py-2">
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((row) => (
              <tr key={row} className="border-b">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((cell) => (
                  <td key={cell} className="px-2 py-3">
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportedSkeleton;
