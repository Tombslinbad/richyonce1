import React from 'react';
import { TabType } from '../types';

interface BottomNavProps {
  currentTab: TabType;
  onNavigate: (tab: TabType) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentTab, onNavigate }) => {
  const tabs: { id: TabType; label: string; icon: string }[] = [
    { id: 'home', label: 'Home', icon: 'diamond' },
    { id: 'ascent', label: 'Ascent', icon: 'auto_awesome_mosaic' },
    { id: 'bespoke', label: 'Bespoke', icon: 'straighten' },
    { id: 'track', label: 'Track', icon: 'schedule' },
    { id: 'atelier-admin', label: 'Admin', icon: 'shield_person' },
  ];

  return (
    <nav
      className="fixed bottom-0 inset-x-0 z-50 pb-safe bg-[#0e0e0e]/95 backdrop-blur-2xl shadow-[0_-4px_30px_rgba(0,0,0,0.7)] border-t border-[rgba(229,192,123,0.15)]"
      role="navigation"
      aria-label="Atelier Navigation"
    >
      <div className="max-w-md md:max-w-xl mx-auto flex justify-around items-center h-16 px-1">
        {tabs.map((tab) => {
          const isActive = currentTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                onNavigate(tab.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              aria-current={isActive ? 'page' : undefined}
              className={`flex flex-col items-center justify-center w-full h-full transition-all pt-1 cursor-pointer rounded-none border-t-2 ${
                isActive
                  ? 'text-[#ffdd9f] border-[#e5c07b] bg-[#112520]/40'
                  : 'text-[#d1c5b4] hover:text-[#e5e2e1] border-transparent hover:bg-[#1c1b1b]/30'
              }`}
            >
              <span className={`material-symbols-outlined text-[20px] transition-transform ${isActive ? 'scale-110' : ''}`}>
                {tab.icon}
              </span>
              <span className="text-[10px] tracking-[0.22em] uppercase font-semibold mt-0.5 leading-none">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
