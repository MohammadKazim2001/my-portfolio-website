import React from "react";

function MyAdSkeleton() {
  return (
    <div className="bg-white border border-gray-300 rounded-lg p-4 md:p-6 animate-pulse">
      <div className="flex justify-between items-center mb-3">
        <div className="h-6 w-32 bg-gray-200 rounded"></div>
        <div className="h-10 w-10 bg-gray-200 rounded-md"></div>
      </div>
      <div className="flex justify-between items-center mb-2">
        <div className="h-6 w-40 bg-gray-200 rounded"></div>
      </div>
      <div className="flex justify-start gap-3 items-center mb-3">
        <div className="h-7 w-20 bg-gray-200 rounded-2xl"></div>
        <div className="h-7 w-20 bg-gray-200 rounded-2xl"></div>
        <div className="h-7 w-20 bg-gray-200 rounded-2xl"></div>
        <div className="h-7 w-20 bg-gray-200 rounded-2xl"></div>
        <div className="h-7 w-20 bg-gray-200 rounded-2xl"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4">
            <div className="h-40 bg-gray-100 rounded mb-4"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              <div className="flex gap-2 mt-4">
                <div className="h-8 bg-gray-200 rounded w-16"></div>
                <div className="h-8 bg-gray-200 rounded w-16"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyAdSkeleton;
