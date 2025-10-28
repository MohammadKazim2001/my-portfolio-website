import { ArrowRight } from "lucide-react";

const SubcategoryAttributesSkeleton = () => {
  const skeletonAttributes = 5; // Number of skeleton rows to display

  return (
    <div className="px-6 py-2 bg-gray-200 min-h-screen" dir="rtl">
      {/* Header Section Skeleton */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="space-y-3 w-full">
          <div className="flex items-center">
            <ArrowRight width={20} className="ml-2 text-gray-300" />
            <div className="h-4 w-32 bg-gray-300 rounded animate-pulse"></div>
          </div>
          <div className="h-6 w-3/4 bg-gray-300 rounded animate-pulse"></div>
          <div className="h-4 w-1/2 bg-gray-300 rounded animate-pulse"></div>
        </div>
      </div>

      {/* Add Attribute Form Skeleton */}
      <div className="mb-8 p-6 bg-white rounded-lg shadow">
        <div className="h-6 w-1/4 bg-gray-300 rounded mb-4 animate-pulse"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* Attribute Name */}
          <div className="space-y-2">
            <div className="h-4 w-1/3 bg-gray-300 rounded animate-pulse"></div>
            <div className="h-10 w-full bg-gray-300 rounded animate-pulse"></div>
          </div>

          {/* Attribute Type */}
          <div className="space-y-2">
            <div className="h-4 w-1/3 bg-gray-300 rounded animate-pulse"></div>
            <div className="h-10 w-full bg-gray-300 rounded animate-pulse"></div>
          </div>

          {/* Values (simulating select type) */}
          <div className="md:col-span-3 space-y-2">
            <div className="h-4 w-1/3 bg-gray-300 rounded animate-pulse"></div>
            <div className="h-10 w-full bg-gray-300 rounded animate-pulse"></div>
          </div>
        </div>

        <div className="h-10 w-32 bg-blue-300 rounded animate-pulse"></div>
      </div>

      {/* Attributes Table Skeleton */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            {/* Table Header Skeleton */}
            <thead className="bg-gray-300">
              <tr>
                {[...Array(4)].map((_, i) => (
                  <th key={i} className="px-6 py-3">
                    <div className="h-4 w-3/4 bg-gray-400 rounded animate-pulse mx-auto"></div>
                  </th>
                ))}
              </tr>
            </thead>

            {/* Table Body Skeleton */}
            <tbody className="bg-white divide-y divide-gray-200">
              {[...Array(skeletonAttributes)].map((_, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  {/* Attribute Name */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
                  </td>

                  {/* Attribute Type */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse"></div>
                  </td>

                  {/* Values */}
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="h-6 w-16 bg-gray-200 rounded-full animate-pulse"
                        ></div>
                      ))}
                    </div>
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="h-4 w-8 bg-gray-200 rounded animate-pulse"></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SubcategoryAttributesSkeleton;
