import { PlusIcon } from "@heroicons/react/24/outline";

const ManageSubcategoriesSkeleton = () => {
  const skeletonRows = 5; // Number of skeleton rows to display

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8" dir="rtl">
      <div className="max-w-7xl mx-auto">
        {/* Header Section Skeleton */}
        <div className="flex justify-between mb-8">
          <div className="space-y-3">
            <div className="h-7 w-48 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-64 bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div className="h-10 w-40 bg-cyan-600 rounded-md animate-pulse flex items-center justify-center">
            <PlusIcon className="h-5 w-5 mr-2 text-gray-300" />
            <div className="h-4 w-16 bg-gray-300 rounded animate-pulse"></div>
          </div>
        </div>

        {/* Table Skeleton */}
        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
          {/* Table Header Skeleton */}
          <div className="bg-gray-300 h-12 grid grid-cols-7">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="border-l border-gray-400 last:border-0 flex items-center justify-center"
              >
                <div className="h-4 w-3/4 bg-gray-400 rounded animate-pulse"></div>
              </div>
            ))}
          </div>

          {/* Table Body Skeleton */}
          <div className="divide-y divide-gray-200 bg-white">
            {[...Array(skeletonRows)].map((_, rowIndex) => (
              <div
                key={rowIndex}
                className="grid grid-cols-7 py-4 hover:bg-gray-50"
              >
                {/* Row Number */}
                <div className="flex items-center justify-center">
                  <div className="h-4 w-6 bg-gray-200 rounded animate-pulse"></div>
                </div>

                {/* Icon */}
                <div className="flex items-center justify-center">
                  <div className="h-8 w-8 rounded-full bg-gray-200 animate-pulse"></div>
                </div>

                {/* Subcategory Name */}
                <div className="flex items-center px-3">
                  <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
                </div>

                {/* Parent Category */}
                <div className="flex items-center px-3">
                  <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                </div>

                {/* Color */}
                <div className="flex items-center justify-center">
                  <div className="h-6 w-6 rounded-full bg-gray-200 animate-pulse"></div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-center space-x-4 space-x-reverse">
                  <div className="h-6 w-6 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-6 w-6 bg-gray-200 rounded animate-pulse"></div>
                </div>

                {/* Attributes Link */}
                <div className="flex items-center justify-center">
                  <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Skeleton (hidden by default) */}
        <div className="hidden fixed inset-0 z-[100] items-center justify-center p-4">
          <div className="bg-white shadow-lg max-w-md w-full relative rounded-lg animate-pulse h-96">
            {/* Close Button */}
            <div className="absolute top-4 left-4 h-6 w-6 bg-gray-200 rounded-full"></div>

            {/* Modal Content */}
            <div className="p-8 space-y-6">
              {/* Title */}
              <div className="h-6 w-1/3 bg-gray-200 rounded"></div>

              {/* Error Placeholder */}
              <div className="h-16 bg-red-50 rounded-lg"></div>

              {/* Form Fields */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="h-4 w-1/4 bg-gray-200 rounded"></div>
                  <div className="h-10 w-full bg-gray-200 rounded"></div>
                </div>

                <div className="space-y-2">
                  <div className="h-4 w-1/4 bg-gray-200 rounded"></div>
                  <div className="h-10 w-full bg-gray-200 rounded"></div>
                </div>

                <div className="space-y-2">
                  <div className="h-4 w-1/4 bg-gray-200 rounded"></div>
                  <div className="flex items-center">
                    <div className="h-10 w-full bg-gray-200 rounded"></div>
                    <div className="ml-2 h-8 w-8 rounded-full bg-gray-200"></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="h-4 w-1/4 bg-gray-200 rounded"></div>
                  <div className="h-10 w-full bg-gray-200 rounded"></div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 justify-end">
                <div className="h-10 w-24 bg-gray-200 rounded"></div>
                <div className="h-10 w-32 bg-cyan-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Delete Modal Skeleton (hidden by default) */}
        <div className="hidden fixed inset-0 z-[100] items-center justify-center p-4">
          <div className="bg-white shadow-lg max-w-md w-full relative rounded-lg animate-pulse h-64">
            {/* Close Button */}
            <div className="absolute top-4 left-4 h-6 w-6 bg-gray-200 rounded-full"></div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-full bg-red-100"></div>
                <div className="h-6 w-32 bg-gray-200 rounded"></div>
              </div>

              <div className="h-16 bg-gray-100 rounded mb-6"></div>

              <div className="flex gap-3 justify-end">
                <div className="h-10 w-24 bg-gray-200 rounded"></div>
                <div className="h-10 w-24 bg-red-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageSubcategoriesSkeleton;
