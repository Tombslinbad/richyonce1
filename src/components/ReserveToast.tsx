import React from 'react';

interface ReserveToastProps {
  visible: boolean;
  itemTitle: string;
  itemPrice: string;
  onReview: () => void;
  onClose: () => void;
}

export const ReserveToast: React.FC<ReserveToastProps> = ({
  visible,
  itemTitle,
  itemPrice,
  onReview,
  onClose,
}) => {
  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-20 left-4 right-4 sm:left-auto sm:right-6 sm:w-96 z-50 transform transition-all duration-300 ease-out bg-[#353534]/95 backdrop-blur-xl p-4 shadow-2xl flex items-center justify-between border border-[rgba(229,192,123,0.3)] animate-in fade-in slide-in-from-bottom-6 rounded-none"
    >
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-9 h-9 bg-[#ffdd9f] text-[#412d00] flex items-center justify-center flex-shrink-0 rounded-none shadow-sm">
          <span className="material-symbols-outlined text-[18px] font-bold">done</span>
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-[10px] text-[#ffdd9f] uppercase tracking-[0.22em] font-semibold leading-tight">
            Added to Consultation Bag
          </span>
          <span className="text-[13px] text-[#e5e2e1] font-medium truncate mt-0.5">
            {itemTitle} <span className="text-[#ffdd9f]/90">({itemPrice})</span>
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 flex-shrink-0 ml-3">
        <button
          onClick={onReview}
          className="px-3 py-1.5 bg-[#e5c07b] text-[#412d00] hover:bg-[#f1dfc2] text-[10px] uppercase font-bold tracking-[0.18em] transition-colors cursor-pointer rounded-none shadow-sm active:scale-95"
        >
          Review
        </button>
        <button
          onClick={onClose}
          aria-label="Dismiss toast"
          className="text-[#d1c5b4] hover:text-white p-1 transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[16px]">close</span>
        </button>
      </div>
    </div>
  );
};
