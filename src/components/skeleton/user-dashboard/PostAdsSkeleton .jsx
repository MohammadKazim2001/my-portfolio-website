const PostAdsSkeleton = () => {
  return (
    <div className="bg-gray-200 py-8 px-4 sm:px-6 animate-pulse">
      {/* Header Section Skeleton */}
      <div className="max-w-6xl mx-auto mb-3 md:mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-4 md:mb-0 w-full md:w-auto">
            <div className="h-8 bg-gray-300 rounded w-1/2 md:w-48 mx-auto md:mx-0"></div>
            <div className="h-5 bg-gray-300 rounded w-3/4 mt-2 mx-auto md:mx-0"></div>
          </div>
          <div className="h-10 bg-gray-300 rounded-lg w-full md:w-40"></div>
        </div>
      </div>

      {/* Main Content Skeleton */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
          {/* Categories Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-4">
            {/* Categories List - Left Side Skeleton */}
            <div className="md:col-span-1 border-l border-gray-200">
              <div className="p-4 bg-gray-50 border-b border-gray-200">
                <div className="h-5 bg-gray-300 rounded w-1/3"></div>
              </div>
              <div className="overflow-y-auto" style={{ maxHeight: "500px" }}>
                <ul>
                  {[...Array(6)].map((_, i) => (
                    <li key={i} className="border-b border-gray-100">
                      <div className="w-full flex items-center justify-between px-4 py-3">
                        <div className="flex items-center">
                          <div className="w-5 h-5 bg-gray-300 rounded ml-2"></div>
                          <div className="h-4 bg-gray-300 rounded w-24"></div>
                        </div>
                        <div className="w-4 h-4 bg-gray-300 rounded"></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Subcategories Panel - Right Side Skeleton */}
            <div className="md:col-span-3 hidden md:block">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="h-7 bg-gray-300 rounded w-1/4"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="p-4 border border-gray-200 rounded-lg"
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="h-5 bg-gray-300 rounded w-3/4"></div>
                          <div className="h-3 bg-gray-300 rounded w-1/2 mt-2"></div>
                        </div>
                        <div className="w-10 h-10 bg-gray-300 rounded-lg mr-3"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostAdsSkeleton;
