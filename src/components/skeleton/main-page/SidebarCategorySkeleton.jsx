import { Bars3Icon } from "@heroicons/react/24/outline";

export function SidebarCategorySkeleton() {
  return (
    <>
      {/* Mobile Skeleton */}
      <MobileSidebarSkeleton />

      {/* Desktop Skeleton */}
      <DesktopSidebarSkeleton />
    </>
  );
}

// Mobile-specific skeleton
function MobileSidebarSkeleton() {
  return (
    <div className="md:hidden bg-gray-100 p-4 animate-pulse">
      <div className="grid grid-cols-4 gap-y-6 gap-x-4">
        {/* All Categories Skeleton */}
        <CategoryItemSkeleton isAllCategories />

        {/* Category Skeletons */}
        {[...Array(7)].map((_, i) => (
          <CategoryItemSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}

// Desktop-specific skeleton
function DesktopSidebarSkeleton() {
  return (
    <div className="hidden md:block w-full h-full animate-pulse">
      <div className="flex px-2 my-5">
        <div className="h-4 bg-gray-200 rounded w-32"></div>
        <div className="h-5 w-5 bg-gray-200 rounded mr-2"></div>
      </div>

      <ul className="space-y-0 text-right">
        {/* All Categories Skeleton */}
        <li>
          <div className="flex justify-between items-center p-3">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-20"></div>
            </div>
          </div>
        </li>

        {/* Category Skeletons */}
        {[...Array(5)].map((_, i) => (
          <li key={i}>
            <div className="flex justify-between items-center p-3">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-24"></div>
              </div>
              <div className="w-4 h-4 bg-gray-200 rounded"></div>
            </div>

            {/* Subcategory Skeletons - only show for first 2 items */}
            {i < 2 && (
              <ul className="mt-2 mr-12 pr-6">
                {[...Array(4)].map((_, j) => (
                  <li key={j} className="flex items-center gap-2 mb-1 py-1">
                    <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                    <div className="h-3 bg-gray-200 rounded w-16"></div>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Reusable category item skeleton for mobile
function CategoryItemSkeleton({ isAllCategories = false }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative mb-2">
        <span className="absolute rounded-md w-10 h-10 bg-gray-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
        <div className="relative h-8 w-8 bg-gray-300 rounded"></div>
      </div>
      <div
        className={`h-4 bg-gray-200 rounded ${
          isAllCategories ? "w-12" : "w-16"
        } mt-1`}
      ></div>
    </div>
  );
}
