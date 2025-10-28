import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";

const UserInfoModal = ({ onClose, ad }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsVisible(false);
      setTimeout(() => onClose(), 300);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onClose(), 300);
  };

  return (
    <div
      className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex justify-center items-center p-2 sm:p-4 rtl transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleBackdropClick}
    >
      <div
        className={`bg-white rounded-xl w-full max-w-[95vw] sm:max-w-md max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100 transition-all duration-300 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-200 p-4 sm:p-5 sticky top-0 bg-white z-10">
          <div>
            <h3 className="text-gray-800 text-lg sm:text-xl font-bold">
              جزئیات فروشنده
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              اطلاعات تماس و مشخصات فروشنده
            </p>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-red-500 transition-colors duration-200 p-1 rounded-full hover:bg-gray-100"
          >
            <FiX size={20} className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-3 sm:p-5">
          <div className="space-y-3 sm:space-y-5">
            {/* User Info Card */}
            <div className="bg-gray-50 rounded-xl p-3 sm:p-5 border border-gray-200">
              <div className="space-y-3 sm:space-y-4">
                {/* Name Field */}
                {/* <div className="flex flex-row justify-between sm:flex-row sm:justify-between sm:items-center gap-1 py-1 sm:py-2 border-b border-gray-100 pb-2 sm:pb-3">
                  <span className="text-gray-600 text-xs sm:text-sm font-medium flex items-center gap-1">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    نام فروشنده:
                  </span>
                  <span className="font-medium text-gray-800 text-sm sm:text-base">
                    {ad?.user.name || "نا مشخص"}
                  </span>
                </div> */}

                {/* Email Field */}
                <div className="flex flex-row justify-between sm:flex-row sm:justify-between sm:items-center gap-1 py-1 sm:py-2 border-b border-gray-100 pb-2 sm:pb-3">
                  <span className="text-gray-600 text-xs sm:text-sm font-medium flex items-center gap-1">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    ایمیل:
                  </span>
                  {ad?.user.email ? (
                    <a
                      href={`mailto:${ad.user.email}`}
                      className="text-blue-600 hover:text-blue-800 text-xs sm:text-sm dir-ltr text-left break-all underline"
                    >
                      {ad.user.email}
                    </a>
                  ) : (
                    <span className="text-gray-800 text-xs sm:text-sm dir-ltr text-left break-all">
                      ثبت نشده
                    </span>
                  )}
                </div>

                {/* Phone Field */}
                <div className="flex flex-row justify-between sm:flex-row sm:justify-between sm:items-center gap-1 py-1 sm:py-2 border-b border-gray-100 pb-2 sm:pb-3">
                  <span className="text-gray-600 text-xs sm:text-sm font-medium flex items-center gap-1">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    شماره تماس:
                  </span>
                  {ad?.user.phone ? (
                    <a
                      href={`tel:${ad.user.phone}`}
                      dir="ltr"
                      className="font-medium text-blue-600 hover:text-blue-800 text-sm sm:text-base underline"
                    >
                      {ad.user.phone}
                    </a>
                  ) : (
                    <span
                      dir="ltr"
                      className="font-medium text-gray-800 text-sm sm:text-base"
                    >
                      ثبت نشده
                    </span>
                  )}
                </div>

                {/* Registration Date */}
                {/* <div className="flex flex-row justify-between sm:flex-row sm:justify-between sm:items-center gap-1 py-1 sm:py-2">
                  <span className="text-gray-600 text-xs sm:text-sm font-medium flex items-center gap-1">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    تاریخ ثبت:
                  </span>
                  <span className="font-medium text-gray-800 text-sm sm:text-base">
                    {ad?.created_at
                      ? new Date(ad.created_at).toLocaleDateString("fa-IR")
                      : "نا مشخص"}
                  </span>
                </div> */}
              </div>
            </div>

            {/* Action Buttons - Stack on mobile, side by side on larger screens */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-1 sm:pt-2">
              <button
                onClick={handleClose}
                className="w-full sm:flex-1 px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-700 text-xs sm:text-sm font-medium transition-colors"
              >
                بستن
              </button>
              {ad?.user.phone && (
                <a
                  href={`tel:${ad.user.phone}`}
                  className="w-full sm:flex-1 px-3 py-2 sm:px-4 sm:py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-xs sm:text-sm font-medium transition-colors text-center flex items-center justify-center gap-1 sm:gap-2"
                >
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  تماس
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoModal;
