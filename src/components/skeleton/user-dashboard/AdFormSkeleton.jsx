import {
  FiUpload,
  FiDollarSign,
  FiMapPin,
  FiList,
  FiAlignLeft,
} from "react-icons/fi";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

export default function AdFormSkeleton() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 animate-pulse">
      <div className="w-full max-w-3xl">
        <div className="bg-white py-6 px-6 shadow-lg rounded-lg">
          {/* Header Section */}
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <div className="w-5 h-5 bg-gray-300 rounded-full ml-1"></div>
              <div className="h-4 bg-gray-300 rounded w-32"></div>
            </div>

            <div className="text-center mb-4">
              <div className="h-8 bg-gray-300 rounded w-3/4 mx-auto"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto mt-2"></div>
            </div>
          </div>

          {/* Form Skeleton */}
          <div className="space-y-6">
            {/* Main Info Section */}
            <div className="border-t pt-6">
              <div className="flex items-center mb-4">
                <div className="w-5 h-5 bg-gray-300 rounded-full ml-2"></div>
                <div className="h-5 bg-gray-300 rounded w-40"></div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Title */}
                <div className="col-span-2 space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-24"></div>
                  <div className="h-10 bg-gray-200 rounded-md"></div>
                </div>

                {/* Price */}
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-20"></div>
                  <div className="h-10 bg-gray-200 rounded-md"></div>
                </div>

                {/* City */}
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-16"></div>
                  <div className="h-10 bg-gray-200 rounded-md"></div>
                </div>

                {/* Address */}
                <div className="col-span-2 space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-24"></div>
                  <div className="h-10 bg-gray-200 rounded-md"></div>
                </div>

                {/* Description */}
                <div className="col-span-2 space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-24"></div>
                  <div className="h-24 bg-gray-200 rounded-md"></div>
                </div>
              </div>
            </div>

            {/* Image Upload Section */}
            <div className="border-t pt-6">
              <div className="flex items-center mb-4">
                <div className="w-5 h-5 bg-gray-300 rounded-full ml-2"></div>
                <div className="h-5 bg-gray-300 rounded w-32"></div>
              </div>

              <div className="flex gap-4 mb-4">
                <div className="h-10 bg-gray-200 rounded-lg w-40"></div>
                <div className="h-4 bg-gray-200 rounded w-32 mt-3"></div>
              </div>

              {/* Image Previews Placeholder */}
              <div className="flex gap-3 flex-wrap">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="relative">
                    <div className="w-20 h-20 bg-gray-200 rounded-md"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Attributes Section */}
            <div className="border-t pt-6">
              <div className="flex items-center mb-4">
                <div className="w-5 h-5 bg-gray-300 rounded-full ml-2"></div>
                <div className="h-5 bg-gray-300 rounded w-48"></div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {[...Array(6)].map((_, index) => (
                  <div key={index} className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-10 bg-gray-200 rounded-md"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <div className="h-10 bg-gray-400 rounded-md w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
