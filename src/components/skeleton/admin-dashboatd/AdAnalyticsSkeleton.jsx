import { FiLayers } from "react-icons/fi";

export default function AdAnalyticsSkeleton() {
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-xl shadow-md animate-pulse"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="h-4 w-24 bg-gray-300 rounded-md mb-3"></div>
                <div className="h-8 w-16 bg-gray-300 rounded-md"></div>
              </div>
              <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Tables Section Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-3">
        {/* City Distribution Table Skeleton */}
        <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center mb-4">
            <div className="h-6 w-6 bg-gray-300 rounded-full mr-2"></div>
            <div className="h-6 w-48 bg-gray-300 rounded-md"></div>
          </div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-4 bg-gray-300 rounded-md"></div>
              <div className="h-4 bg-gray-300 rounded-md"></div>
              <div className="h-4 bg-gray-300 rounded-md"></div>
            </div>
            {[...Array(5)].map((_, i) => (
              <div key={`city-${i}`} className="grid grid-cols-3 gap-4">
                <div className="h-4 bg-gray-200 rounded-md"></div>
                <div className="h-4 bg-gray-200 rounded-md"></div>
                <div className="h-4 bg-gray-200 rounded-md"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Table Skeleton */}
        <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center mb-4">
            <div className="h-6 w-6 bg-gray-300 rounded-full mr-2"></div>
            <div className="h-6 w-48 bg-gray-300 rounded-md"></div>
          </div>
          <div className="space-y-3">
            <div className="grid grid-cols-4 gap-4">
              <div className="h-4 bg-gray-300 rounded-md"></div>
              <div className="h-4 bg-gray-300 rounded-md"></div>
              <div className="h-4 bg-gray-300 rounded-md"></div>
              <div className="h-4 bg-gray-300 rounded-md"></div>
            </div>
            {[...Array(5)].map((_, i) => (
              <div key={`category-${i}`} className="grid grid-cols-4 gap-4">
                <div className="h-4 bg-gray-200 rounded-md"></div>
                <div className="h-4 bg-gray-200 rounded-md"></div>
                <div className="h-4 bg-gray-200 rounded-md"></div>
                <div className="h-4 bg-gray-200 rounded-md"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
