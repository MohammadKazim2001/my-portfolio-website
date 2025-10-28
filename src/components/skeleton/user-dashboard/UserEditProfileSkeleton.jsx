const UserEditProfileSkeleton = () => {
  return (
    <div className="bg-gray-50 flex items-center justify-center rounded-lg animate-pulse">
      <div className="w-full bg-gray-200">
        {/* Profile Section Skeleton */}
        <div className="bg-white p-6 mt-1 rounded-lg mb-5">
          <div className="mb-6">
            <div className="flex items-center px-3 py-2 bg-gray-300 rounded-md border duration-200 text-white mb-4 w-24 h-10"></div>

            <div className="text-center mb-4">
              <div className="h-8 bg-gray-300 rounded w-48 mx-auto mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-64 mx-auto"></div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border-t pt-6">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Avatar Section Skeleton */}
                <div className="md:w-1/3 flex flex-col items-center">
                  <div className="h-5 bg-gray-300 rounded w-24 mb-4"></div>
                  <div className="my-3 relative">
                    <div className="w-32 h-32 rounded-full bg-gray-300 border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="flex gap-2">
                    <div className="cursor-pointer bg-gray-300 px-4 py-2 rounded-lg border border-gray-300 flex items-center gap-2 text-sm justify-center w-28 h-9"></div>
                  </div>
                </div>

                {/* Profile Fields Skeleton */}
                <div className="md:w-2/3 space-y-5">
                  <div>
                    <div className="h-5 bg-gray-300 rounded w-24 mb-2"></div>
                    <div className="h-10 bg-gray-200 rounded-md w-full"></div>
                  </div>

                  <div>
                    <div className="h-5 bg-gray-300 rounded w-20 mb-2"></div>
                    <div className="h-10 bg-gray-200 rounded-md w-full"></div>
                  </div>

                  <div>
                    <div className="h-5 bg-gray-300 rounded w-16 mb-2"></div>
                    <div className="h-10 bg-gray-200 rounded-md w-full"></div>
                  </div>

                  <div className="h-10 bg-gray-400 rounded-md w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Password Section Skeleton */}
        <div className="bg-white py-6 px-6 shadow-lg rounded-lg">
          <div className="md:mb-6 md:mr-12">
            <div className="h-6 bg-gray-300 rounded w-40 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-64"></div>
          </div>

          <div className="flex flex-col md:flex-row md:gap-8">
            <div className="md:w-1/3 flex flex-col items-center">
              <div className="w-72 h-72 bg-gray-300 object-contain rounded"></div>
              <div className="h-4 bg-gray-300 rounded w-48 mt-2"></div>
            </div>
            <div className="md:w-2/3 space-y-5">
              <div className="space-y-6">
                <div className="pt-1 space-y-5">
                  <div>
                    <div className="h-5 bg-gray-300 rounded w-32 mb-2"></div>
                    <div className="h-10 bg-gray-200 rounded-md w-full"></div>
                  </div>

                  <div>
                    <div className="h-5 bg-gray-300 rounded w-28 mb-2"></div>
                    <div className="h-10 bg-gray-200 rounded-md w-full"></div>
                  </div>

                  <div>
                    <div className="h-5 bg-gray-300 rounded w-40 mb-2"></div>
                    <div className="h-10 bg-gray-200 rounded-md w-full"></div>
                  </div>

                  <div className="pt-4">
                    <div className="h-10 bg-gray-400 rounded-md w-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserEditProfileSkeleton;
