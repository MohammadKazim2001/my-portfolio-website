import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { toast } from "sonner"; // Import Sonner toast
import api from "../../services/api";

export default function ReportAdModal({ adId, onClose }) {
  const [reason, setReason] = React.useState("");
  const [otherReason, setOtherReason] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);
  const modalRef = useRef(null);

  // Trigger the animation when component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate if "other" reason is selected but no description provided
    if (reason === "سایر" && !otherReason.trim()) {
      toast.error("لطفاً دلیل خود را توضیح دهید");
      setLoading(false);
      return;
    }

    try {
      const response = await api.post(`/ads/${adId}/report`, {
        reason,
        description: reason === "سایر" ? otherReason : null,
      });

      // Show success toast
      toast.success("اعلان با موفقیت گزارش شد.");

      // Auto-close after a short delay
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => onClose(), 300);
      }, 1000);
    } catch (err) {
      // Check if it's the "already reported" error
      if (
        err.response?.status === 422 &&
        err.response?.data?.message === "شما قبلاً این اعلان را گزارش کرده‌اید"
      ) {
        // Show toast for already reported error
        toast.error("شما قبلاً این اعلان را گزارش کرده‌اید");

        // Auto-close the modal after showing the toast
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(() => onClose(), 300);
        }, 500);
      } else {
        // Show generic error toast
        const errorMessage =
          err.response?.data?.message ||
          "خطا در ارسال گزارش. لطفاً دوباره تلاش کنید.";
        toast.error(errorMessage);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsVisible(false);
      setTimeout(() => onClose(), 300);
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4 rtl transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className={`bg-white rounded-xl shadow-2xl w-full max-w-[95vw] sm:max-w-md mx-2 sm:mx-0 p-4 sm:p-6 relative border border-gray-100 transition-all duration-300 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 sm:top-4 left-3 sm:left-4 text-gray-500 hover:text-gray-700 transition-colors"
          onClick={() => {
            setIsVisible(false);
            setTimeout(() => onClose(), 300);
          }}
        >
          <X size={20} className="w-5 h-5" />
        </button>

        <div className="text-center mb-4 sm:mb-6">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800">
            گزارش اعلان
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            در صورت مشاهده مشکل در اعلان، آن را گزارش دهید
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4 sm:mb-5">
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2 text-right">
              دلیل گزارش را انتخاب کنید
            </label>
            <select
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm focus:ring-2 focus:ring-red-100 focus:border-red-300 outline-none transition-all appearance-none"
              required
            >
              <option value="">لطفاً یک دلیل انتخاب کنید</option>
              <option value="کلاهبرداری">کلاهبرداری</option>
              <option value="تصاویر نامناسب">تصاویر نامناسب</option>
              <option value="اطلاعات نادرست">اطلاعات نادرست</option>
              <option value="دسته بندی اشتباه">دسته بندی اشتباه</option>
              <option value="سایر">سایر</option>
            </select>
          </div>

          {reason === "سایر" && (
            <div className="mb-4 sm:mb-5">
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2 text-right">
                توضیح دلیل:
              </label>
              <textarea
                value={otherReason}
                onChange={(e) => setOtherReason(e.target.value)}
                rows={3}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm focus:ring-2 focus:ring-red-100 focus:border-red-400 outline-none transition-all"
                placeholder="دلیل خود را به صورت دقیق بنویسید..."
                required
              />
            </div>
          )}

          <div className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-3 mt-4 sm:mt-6">
            <button
              type="button"
              className="px-4 py-2 sm:px-5 sm:py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-700 text-xs sm:text-sm font-medium transition-colors"
              onClick={() => {
                setIsVisible(false);
                setTimeout(() => onClose(), 300);
              }}
            >
              انصراف
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 sm:px-5 sm:py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:bg-red-300 text-xs sm:text-sm font-medium transition-colors flex items-center justify-center gap-1 sm:gap-2"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-3 w-3 sm:h-4 sm:w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  در حال ارسال...
                </>
              ) : (
                "ارسال گزارش"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
