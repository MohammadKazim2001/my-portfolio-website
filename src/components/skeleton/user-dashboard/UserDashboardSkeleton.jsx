import {
  UserIcon,
  BellAlertIcon,
  ChatBubbleLeftIcon,
  CreditCardIcon,
} from "@heroicons/react/24/solid";

export function UserDashboardSkeleton() {
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col" dir="rtl">
      {/* Header Skeleton */}
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-6 py-4 animate-pulse">
          <div className="flex items-center">
            <div className="h-4 w-4 bg-gray-300 rounded mr-2"></div>
            <div className="h-4 bg-gray-300 rounded w-48"></div>
          </div>
          <div className="h-10 bg-gray-300 rounded w-24"></div>
        </div>
      </header>

      {/* Main Content Skeleton */}
      <main className="flex-1 flex flex-col md:flex-row container mx-auto px-0 md:px-6 mt-3">
        <aside className="md:w-64 flex-shrink-0 px-4 md:px-0 mb-5">
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm sticky top-20 overflow-hidden">
            <ul>
              {[1, 2, 3, 4].map((item) => (
                <li
                  key={item}
                  className="border-b border-gray-100 last:border-b-0"
                >
                  <div className="group relative flex items-center justify-between p-3">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                      <div className="h-4 bg-gray-300 rounded w-24"></div>
                    </div>
                    <div className="w-4 h-4 bg-gray-300 rounded"></div>
                    <div className="absolute inset-0 bg-gradient-to-l from-gray-100 to-gray-100 scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-300 -z-10"></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Content Area Skeleton */}
      </main>
    </div>
  );
}
