import React from 'react';
import { TabType } from '../types';

interface HeaderProps {
  currentTab: TabType;
  onNavigate: (tab: TabType) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onNavigate,
  cartCount,
  onOpenCart,
  onOpenSearch,
  onOpenBooking,
}) => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#131313]/90 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.6)] pt-safe border-b border-[rgba(229,192,123,0.15)]">
      <div className="h-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Brand Lockup */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 min-w-0 text-left focus:outline-none group cursor-pointer"
          aria-label="Richyonce Haute Atelier Home"
        >
          <img
            alt="Richyonce Luxury Wordmark Logo"
            className="h-8 w-auto object-contain flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida/AEtjO1Wm0C5Sk9Y8YcqHeKdBs1oMvRwb9HO6OETTPwfWYfJKpkwLxaYJ24xOEq-_sXRC2w_KSJ5QrqiQq_g7cAhdTTMG-4XSByWVj8N5OsXmo8hwUOtA6szND-DAd306JvlUoeHz9lD7AgayJhjaj7QUYRvSNpx4lBBtI2KHmSAKT2kN--63mMNsap_vqP9FPTIEUAm-J5zBCNR-l4KiGgOyhIpg2jzgYL_IIo_mIMZGBR6JEC0Z_BwBY6KT6xh_"
            onError={(e) => {
              // Graceful SVG badge fallback if external CDN blips
              (e.currentTarget as HTMLElement).style.display = 'none';
            }}
          />
          <div className="flex flex-col min-w-0">
            <span className="font-serif text-[18px] sm:text-[20px] font-semibold tracking-wide text-[#ffdd9f] truncate leading-tight uppercase group-hover:text-white transition-colors">
              RICHYONCE
            </span>
            <span className="text-[10px] tracking-[0.22em] text-[#d1c5b4] uppercase truncate font-medium">
              Haute Atelier
            </span>
          </div>
        </button>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          {/* Quick Search */}
          <button
            onClick={onOpenSearch}
            aria-label="Search Collection"
            className="w-10 h-10 flex items-center justify-center text-[#e5e2e1] hover:text-[#ffdd9f] hover:bg-[#201f1f] transition-all cursor-pointer rounded-none border border-transparent hover:border-[rgba(229,192,123,0.2)]"
          >
            <span className="material-symbols-outlined text-[20px]">search</span>
          </button>

          {/* Bespoke Consultation Bag / Cart */}
          <button
            onClick={onOpenCart}
            aria-label="Bespoke Consultation Bag"
            className="relative w-10 h-10 flex items-center justify-center text-[#e5e2e1] hover:text-[#ffdd9f] hover:bg-[#201f1f] transition-all cursor-pointer rounded-none border border-transparent hover:border-[rgba(229,192,123,0.2)]"
          >
            <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
            {cartCount > 0 && (
              <span className="absolute top-1.5 right-1.5 flex items-center justify-center min-w-[16px] h-4 px-1 rounded-none bg-[#e5c07b] text-[#412d00] text-[9px] leading-none font-bold shadow-sm">
                {cartCount}
              </span>
            )}
          </button>

          {/* Book Atelier Button (visible on tablet+) */}
          <button
            onClick={onOpenBooking}
            className="hidden sm:flex items-center justify-center h-9 px-4 bg-[#e5c07b] text-[#412d00] hover:bg-[#f1dfc2] text-[11px] font-semibold uppercase tracking-[0.18em] transition-all cursor-pointer rounded-none shadow-md active:scale-95"
          >
            Book Atelier
          </button>

          {/* Profile / Atelier Admin Shortcut */}
          <button
            onClick={() => onNavigate('atelier-admin')}
            aria-label="Atelier Master Console"
            className="w-8 h-8 rounded-none bg-[#ffdd9f] text-[#412d00] flex items-center justify-center flex-shrink-0 hover:bg-[#f1dfc2] transition-colors cursor-pointer shadow-sm ml-1"
            title="VIP Atelier Console"
          >
            <span className="material-symbols-outlined text-[18px]">person</span>
          </button>
        </div>
      </div>
    </header>
  );
};
