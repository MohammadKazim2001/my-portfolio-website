import { useState, useEffect } from "react";

const CityManagementTableSkeleton = () => {
  // Number of skeleton rows to show
  const skeletonRows = 5;

  return (
    <div className="p-6 max-w-4xl mx-auto" dir="rtl">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">مدیریت شهرها</h1>

      {/* Add city input skeleton */}
      <div className="mb-4 flex">
        <div className="flex-1 px-4 py-2 border rounded-r bg-gray-200 h-10 animate-pulse"></div>
        <div className="bg-gray-300 text-white px-4 py-2 rounded-l h-10 w-24 animate-pulse"></div>
      </div>

      {/* Table skeleton */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                آی دی
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                نام شهر
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                عملیات
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {[...Array(skeletonRows)].map((_, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                </td>
                <td className="px-6 py-4 text-center whitespace-nowrap">
                  <div className="flex justify-center space-x-4">
                    <div className="h-6 bg-gray-200 rounded w-12 animate-pulse"></div>
                    <div className="h-6 bg-gray-200 rounded w-12 animate-pulse"></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CityManagementTableSkeleton;
