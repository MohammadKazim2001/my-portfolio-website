import {
  BsBookmark,
  BsChatDots,
  BsShare,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";

export default function AdDetailsSkeleton() {
  return (
    <div className="w-full mx-auto mt-4 px-4 md:px-32 lg:px-40 bg-white animate-pulse">
      {/* Breadcrumb Skeleton */}
      <div className="sticky top-0 z-10 bg-white py-2">
        <div className="h-4 bg-gray-200 rounded w-64 mr-5"></div>
      </div>

      {/* Main Content Skeleton */}
      <div className="flex flex-col lg:flex-row gap-1">
        {/* Mobile Image Gallery Skeleton */}
        <div className="lg:hidden w-full space-y-6 mt-4">
          <div className="relative">
            <div className="relative bg-gray-200 overflow-hidden flex items-center justify-center h-64 md:h-96">
              <div className="w-full h-full bg-gray-300"></div>
            </div>

            {/* Thumbnail Strip Skeleton */}
            <div className="h-5 bg-gray-200 rounded w-32 my-2"></div>
            <div className="flex gap-2 mt-1 overflow-x-auto pb-2">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="w-16 h-16 bg-gray-300 rounded-md flex-shrink-0"
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section - Details Skeleton */}
        <div className="lg:w-5/12 h-fit lg:sticky lg:top-10 p-4 order-2 lg:order-1">
          <div className="h-8 bg-gray-300 rounded w-3/4 mb-6"></div>

          <div className="flex justify-between">
            <div className="h-4 bg-gray-200 rounded w-32"></div>
            <div className="h-4 bg-gray-200 rounded w-24"></div>
          </div>

          <div className="h-10 bg-gray-300 rounded w-1/2 my-7"></div>

          {/* Action Buttons Skeleton */}
          <div className="mt-1 flex gap-2 h-10">
            <div className="flex-1 h-full bg-gray-300 rounded-sm"></div>
            <div className="flex-1 h-full bg-gray-300 rounded-sm"></div>
            <div className="flex items-center gap-2 mr-10">
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            </div>
          </div>

          <hr className="mt-5 shadow-lg" />

          {/* Ad Icons Section Skeleton */}
          <div className="w-full mx-auto mt-8 bg-gray-100 shadow-md px-2 py-3 flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-12">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 rounded-full"></div>
                <div className="h-3 bg-gray-300 rounded w-16"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Image Gallery Skeleton */}
        <div className="hidden lg:block lg:w-7/12 space-y-6 md:space-y-8 mt-4 px-5 md:mt-8 lg:mt-0 order-1 lg:order-2">
          {/* Main Image Skeleton */}
          <div className="relative">
            <div className="relative rounded-lg bg-gray-200 overflow-hidden flex items-center justify-center h-96">
              <div className="w-full h-full bg-gray-300"></div>
            </div>

            {/* Thumbnail Strip Skeleton */}
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="w-20 h-20 bg-gray-300 rounded-md flex-shrink-0"
                ></div>
              ))}
            </div>
          </div>

          {/* Tab Navigation Skeleton */}
          <div className="flex border-b">
            <div className="px-3 py-2 w-20 bg-gray-300 mr-2"></div>
            <div className="px-3 py-2 w-20 bg-gray-300"></div>
          </div>

          {/* Tab Content Skeleton */}
          <div className="py-4">
            <div className="h-6 bg-gray-300 rounded w-40 mb-4"></div>

            <div className="grid grid-cols-[auto_1px_auto] gap-4">
              {/* Left Column */}
              <div className="space-y-3 pr-3">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
              </div>

              {/* Vertical Divider */}
              <div className="h-full w-px bg-gray-200"></div>

              {/* Right Column */}
              <div className="space-y-3 pl-3">
                {[...Array(5)].map((_, index) => (
                  <div
                    key={index}
                    className="h-4 bg-gray-200 rounded w-full"
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Safety Tips Section Skeleton */}
          <div className="mt-6 p-3 bg-gray-100 shadow-md border border-gray-100">
            <div className="h-6 bg-gray-300 rounded w-48 mb-4"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 bg-white rounded-lg"
                >
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-200 rounded w-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Report Section Skeleton */}
          <div className="mt-6 p-2 bg-white rounded-md shadow-xs border border-gray-200 flex justify-between">
            <div className="h-4 bg-gray-200 rounded w-32"></div>
            <div className="h-8 bg-gray-200 rounded-md w-20"></div>
          </div>
        </div>
      </div>

      {/* Mobile Tab Navigation and Content Skeleton */}
      <div className="lg:hidden mt-6 px-2">
        {/* Tab Navigation Skeleton */}
        <div className="flex border-b">
          <div className="px-3 py-2 w-20 bg-gray-300 mr-2"></div>
          <div className="px-3 py-2 w-20 bg-gray-300"></div>
        </div>

        {/* Tab Content Skeleton */}
        <div className="py-4">
          <div className="space-y-4">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="flex justify-between">
                <div className="h-4 bg-gray-200 rounded w-24"></div>
                <div className="h-4 bg-gray-200 rounded w-20"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Safety Tips Section Skeleton */}
        <div className="mt-4 p-1 bg-gray-100 rounded-md border border-gray-200">
          <div className="h-6 bg-gray-300 rounded w-48 mb-4"></div>

          <div className="space-y-3">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="h-12 bg-white rounded-lg shadow-xs"
              ></div>
            ))}
          </div>
        </div>

        {/* Report Section Skeleton */}
        <div className="mt-6 p-2 bg-gray-100 shadow-md flex justify-between">
          <div className="h-4 bg-gray-200 rounded w-32"></div>
          <div className="h-8 bg-gray-200 rounded-md w-20"></div>
        </div>
      </div>
    </div>
  );
}
