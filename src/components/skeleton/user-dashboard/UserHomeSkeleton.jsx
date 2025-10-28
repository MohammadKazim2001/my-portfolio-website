import { Pencil } from "lucide-react";

export function UserHomeSkeleton() {
  return (
    <div className="space-y-6 mr-0 p-0 animate-pulse">
      {/* User info card skeleton */}
      <div className="bg-white border border-gray-200 p-4 rounded-lg">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4 space-x-reverse">
            <div className="w-16 h-16 rounded-full bg-gray-300"></div>
            <div className="min-w-0 space-y-2">
              <div className="h-5 bg-gray-300 rounded w-32"></div>
              <div className="h-4 bg-gray-300 rounded w-40"></div>
              <div className="h-3 bg-gray-300 rounded w-16"></div>
            </div>
          </div>
          <div className="border border-gray-300 text-xs rounded px-3 py-2 bg-gray-300 text-transparent flex items-center gap-1 w-24 h-9">
            <Pencil className="w-4 h-4" />
          </div>
        </div>

        <hr className="my-5 border-gray-200" />
      </div>

      {/* Ads summary cards skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* My Free Ads skeleton */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-100 text-center py-4 border-b border-gray-200">
            <div className="h-4 bg-gray-300 rounded w-24 mx-auto"></div>
          </div>
          <div className="bg-white flex flex-col items-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full border border-gray-300 bg-gray-200"></div>
            <div className="w-full px-6 space-y-3">
              <div className="flex justify-between">
                <div className="h-3 bg-gray-300 rounded w-20"></div>
                <div className="h-3 bg-gray-300 rounded w-6"></div>
              </div>
              <div className="flex justify-between">
                <div className="h-3 bg-gray-300 rounded w-20"></div>
                <div className="h-3 bg-gray-300 rounded w-6"></div>
              </div>
            </div>
          </div>
          <div className="w-full bg-gray-300 text-transparent text-xs py-3 text-center">
            Loading...
          </div>
        </div>

        {/* My Premium Ads skeleton */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-100 text-center py-4 border-b border-gray-200">
            <div className="h-4 bg-gray-300 rounded w-32 mx-auto"></div>
          </div>
          <div className="bg-white flex flex-col items-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full border border-gray-300 bg-gray-200"></div>
            <div className="w-full px-6 space-y-2">
              <div className="h-3 bg-gray-300 rounded w-full"></div>
              <div className="h-3 bg-gray-300 rounded w-full"></div>
            </div>
          </div>
          <div className="w-full bg-gray-300 text-transparent text-xs py-3 text-center">
            Loading...
          </div>
        </div>

        {/* Total Active Ad Packs skeleton */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-100 text-center py-4 border-b border-gray-200">
            <div className="h-4 bg-gray-300 rounded w-24 mx-auto"></div>
          </div>
          <div className="bg-white flex flex-col items-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full border border-gray-300 bg-gray-200"></div>
            <div className="w-full px-6 space-y-3">
              <div className="flex justify-between">
                <div className="h-3 bg-gray-300 rounded w-16"></div>
                <div className="h-3 bg-gray-300 rounded w-6"></div>
              </div>
              <div className="flex justify-between">
                <div className="h-3 bg-gray-300 rounded w-20"></div>
                <div className="h-3 bg-gray-300 rounded w-6"></div>
              </div>
            </div>
          </div>
          <div className="w-full bg-gray-300 text-transparent text-xs py-3 text-center">
            Loading...
          </div>
        </div>
      </div>
    </div>
  );
}
