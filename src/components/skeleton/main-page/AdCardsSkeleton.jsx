// AdCardsSkeleton.jsx
export function AdCardsSkeleton({ count = 20 }) {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-3 p-3"
      dir="rtl"
    >
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="w-full bg-white rounded-lg border p-2 border-gray-200 shadow-sm overflow-hidden"
        >
          {/* Mobile Skeleton */}
          <div className="flex sm:hidden">
            <div className="flex-1 flex flex-col pr-2 space-y-2">
              <div className="flex items-center space-x-1 space-x-reverse">
                <div className="h-4 w-4 rounded animate-shimmer ml-1"></div>
                <div className="h-3 rounded w-16 animate-shimmer"></div>
              </div>
              <div className="h-4 rounded w-full mt-2 animate-shimmer"></div>
              <div className="h-4 rounded w-3/4 mt-2 animate-shimmer"></div>
              <div className="h-4 rounded w-1/2 mt-3 animate-shimmer"></div>
              <div className="flex items-center mt-2 space-x-1 space-x-reverse">
                <div className="h-3 w-3 rounded animate-shimmer ml-1"></div>
                <div className="h-3 rounded w-12 animate-shimmer ml-1"></div>
              </div>
            </div>
            <div className="w-24 h-24 rounded-lg mr-3 flex-shrink-0 mx-2 animate-shimmer"></div>
          </div>

          {/* Desktop Skeleton */}
          <div className="hidden sm:flex">
            <div className="flex-1 flex flex-col space-y-2">
              <div className="h-3 rounded w-16 animate-shimmer"></div>
              <div className="h-4 rounded w-full mt-4 animate-shimmer"></div>
              <div className="h-4 rounded w-3/4 mt-2 animate-shimmer"></div>
              <div className="h-4 rounded w-1/2 mt-3 animate-shimmer"></div>
              <div className="flex items-center mt-2 space-x-1 space-x-reverse">
                <div className="h-3 w-3 rounded animate-shimmer ml-1"></div>
                <div className="h-3 rounded w-12 animate-shimmer ml-1"></div>
              </div>
            </div>
            <div className="w-28 h-28 flex-shrink-0 mx-2 animate-shimmer rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
