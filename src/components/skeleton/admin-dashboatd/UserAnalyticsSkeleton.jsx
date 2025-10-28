import { FiUsers } from "react-icons/fi";

export default function UserAnalyticsSkeleton() {
  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-gray-200 via-gray-100 to-gray-300">
      {/* Header Skeleton */}
      <header className="mb-8">
        <div className="flex items-center">
          <div className="h-8 w-8 bg-gray-300 rounded-full animate-pulse"></div>
          <div className="h-8 w-48 bg-gray-300 rounded-md animate-pulse ml-2"></div>
        </div>
        <div className="h-4 w-64 bg-gray-300 rounded-md animate-pulse mt-2"></div>
      </header>

      {/* Stats Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="bg-white p-3 rounded-xl shadow-md animate-pulse hover:shadow-lg transition-all"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="h-4 w-20 bg-gray-300 rounded-md mb-2"></div>
                <div className="h-7 w-12 bg-gray-300 rounded-md"></div>
                {i % 3 === 0 && (
                  <div className="h-3 w-24 bg-gray-200 rounded-md mt-1"></div>
                )}
              </div>
              <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        ))}
      </div>

      {/* User Status Overview Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
        {/* User Status Summary Skeleton */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center mb-4">
            <div className="h-6 w-6 bg-gray-300 rounded-full mr-2"></div>
            <div className="h-6 w-48 bg-gray-300 rounded-md"></div>
          </div>
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={`status-${i}`}>
                <div className="flex justify-between items-center mb-1">
                  <div className="h-4 w-32 bg-gray-300 rounded-md"></div>
                  <div className="h-4 w-16 bg-gray-300 rounded-md"></div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gray-300 h-2 rounded-full"
                    style={{ width: `${30 + i * 20}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Registration Stats Skeleton */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center mb-4">
            <div className="h-6 w-6 bg-gray-300 rounded-full mr-2"></div>
            <div className="h-6 w-48 bg-gray-300 rounded-md"></div>
          </div>
          <div className="space-y-4">
            {[...Array(4)].map((_, i) => (
              <div
                key={`reg-${i}`}
                className="flex justify-between items-center"
              >
                <div className="h-4 w-24 bg-gray-300 rounded-md"></div>
                <div className="h-4 w-8 bg-gray-300 rounded-md"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Users Section Skeleton */}
      <div className="bg-white p-3 rounded-xl shadow-lg border border-gray-100">
        <div className="flex items-center mb-6">
          <div className="h-6 w-6 bg-gray-300 rounded-full mr-2"></div>
          <div className="h-6 w-48 bg-gray-300 rounded-md"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[...Array(5)].map((_, i) => (
            <div
              key={`user-${i}`}
              className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors border border-gray-100 animate-pulse"
            >
              <div className="w-16 h-16 rounded-full bg-gray-300 border-2 border-amber-100 mb-3"></div>
              <div className="text-center w-full">
                <div className="h-5 w-24 bg-gray-300 rounded-md mx-auto"></div>
                <div className="h-4 w-20 bg-gray-200 rounded-md mt-1 mx-auto"></div>
                <div className="h-5 w-16 bg-gray-200 rounded-full mt-2 mx-auto"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
