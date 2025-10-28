import { PlusIcon } from "@heroicons/react/24/outline";

const CategoriesManagementSkeleton = () => {
  const skeletonRows = 6; // Number of skeleton rows to display

  return (
    <div className="px-2 sm:px-3 lg:px-3 py-2" dir="rtl">
      <div className="max-w-7xl mx-auto">
        {/* Header Section Skeleton */}
        {/* <div className="flex justify-between mb-8">
          <div className="space-y-3">
            <div className="h-7 w-48 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-64 bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div className="h-10 w-40 bg-gray-300 rounded-md animate-pulse"></div>
        </div> */}

        {/* Table Skeleton */}
        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
          <div className="min-w-full divide-y divide-gray-300">
            {/* Table Header Skeleton */}
            <div className="bg-gray-200 h-12 rounded-t-lg animate-pulse">
              <div className="grid grid-cols-5 h-full">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="border-l border-gray-300 last:border-0"
                  ></div>
                ))}
              </div>
            </div>

            {/* Table Body Skeleton */}
            <div className="divide-y divide-gray-200 bg-white">
              {[...Array(skeletonRows)].map((_, rowIndex) => (
                <div
                  key={rowIndex}
                  className="grid grid-cols-5 py-4 px-3 hover:bg-gray-50"
                >
                  {/* Row Number */}
                  <div className="flex items-center">
                    <div className="h-4 w-6 bg-gray-200 rounded animate-pulse"></div>
                  </div>

                  {/* ID */}
                  <div className="flex items-center">
                    <div className="h-4 w-10 bg-gray-200 rounded animate-pulse"></div>
                  </div>

                  {/* Icon */}
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-gray-200 animate-pulse"></div>
                  </div>

                  {/* Category Name */}
                  <div className="flex items-center">
                    <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-end space-x-4 space-x-reverse">
                    <div className="h-8 w-8 rounded bg-gray-200 animate-pulse"></div>
                    <div className="h-8 w-8 rounded bg-gray-200 animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Skeleton (hidden by default) */}
        <div className="hidden fixed inset-0 z-[100] items-center justify-center p-4">
          <div className="bg-white shadow-lg max-w-md w-full relative rounded-lg animate-pulse h-96">
            <div className="absolute top-4 left-4 h-6 w-6 bg-gray-200 rounded-full"></div>
            <div className="p-8 space-y-6">
              <div className="h-6 w-40 bg-gray-200 rounded"></div>
              <div className="space-y-4">
                <div className="h-10 w-full bg-gray-200 rounded"></div>
                <div className="h-10 w-full bg-gray-200 rounded"></div>
                <div className="h-24 w-full bg-gray-200 rounded"></div>
              </div>
              <div className="flex gap-3 justify-end">
                <div className="h-10 w-24 bg-gray-200 rounded"></div>
                <div className="h-10 w-32 bg-cyan-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesManagementSkeleton;
