import { FiUsers, FiLayers } from "react-icons/fi";

export default function SystemAnalyticsSkeleton() {
  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-gray-200 via-gray-100 to-gray-300">
      {/* Header Skeleton */}
      <div className="mb-6 animate-pulse">
        <div className="h-8 w-64 bg-gray-300 rounded mb-2"></div>
        <div className="h-4 w-80 bg-gray-200 rounded"></div>
      </div>

      {/* User Analytics Section */}
      <div className="mb-8">
        <div className="flex items-center mb-4 animate-pulse">
          <FiUsers className="ml-2 text-gray-400" />
          <div className="h-6 w-32 bg-gray-300 rounded"></div>
        </div>

        {/* Stat Cards Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-lg shadow border border-gray-100 animate-pulse"
            >
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-gray-200"></div>
                <div className="mr-3">
                  <div className="h-4 w-24 bg-gray-200 rounded mb-2"></div>
                  <div className="h-6 w-16 bg-gray-300 rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* User Status and Top Users Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
          <div className="bg-white p-4 rounded-lg shadow border border-gray-100 animate-pulse">
            <div className="h-6 w-32 bg-gray-300 rounded mb-4"></div>
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <div className="h-4 w-40 bg-gray-200 rounded"></div>
                  <div className="h-4 w-16 bg-gray-200 rounded"></div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-gray-300 h-2.5 rounded-full"
                    style={{ width: `${Math.random() * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-4 rounded-lg shadow border border-gray-100 animate-pulse">
            <div className="h-6 w-32 bg-gray-300 rounded mb-4"></div>
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-center gap-3 py-1">
                  <div className="bg-gray-200 rounded-full w-6 h-6"></div>
                  <div className="rounded-full w-10 h-10 bg-gray-200"></div>
                  <div className="flex-1">
                    <div className="h-4 w-24 bg-gray-200 rounded mb-1"></div>
                    <div className="h-3 w-16 bg-gray-200 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Ad Analytics Section */}
      <div className="mb-8">
        <div className="flex items-center mb-4 animate-pulse">
          <FiLayers className="ml-2 text-gray-400" />
          <div className="h-6 w-32 bg-gray-300 rounded"></div>
        </div>

        {/* Ad Stat Cards Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-lg shadow border border-gray-100 animate-pulse"
            >
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-gray-200"></div>
                <div className="mr-3">
                  <div className="h-4 w-24 bg-gray-200 rounded mb-2"></div>
                  <div className="h-6 w-16 bg-gray-300 rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-6">
          <div className="bg-white p-4 rounded-lg shadow border border-gray-100 animate-pulse">
            <div className="h-6 w-48 bg-gray-300 rounded mb-4"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border border-gray-100 animate-pulse">
            <div className="h-6 w-48 bg-gray-300 rounded mb-4"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* Ad Status and Cities Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
          <div className="bg-white p-4 rounded-lg shadow border border-gray-100 animate-pulse">
            <div className="h-6 w-32 bg-gray-300 rounded mb-4"></div>
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <div className="h-4 w-40 bg-gray-200 rounded"></div>
                  <div className="h-4 w-16 bg-gray-200 rounded"></div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-gray-300 h-2.5 rounded-full"
                    style={{ width: `${Math.random() * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-4 rounded-lg shadow border border-gray-100 animate-pulse">
            <div className="h-6 w-48 bg-gray-300 rounded mb-4"></div>
            <div className="space-y-4 mt-6">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex justify-between">
                  <div className="h-4 w-32 bg-gray-200 rounded"></div>
                  <div className="h-4 w-8 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
