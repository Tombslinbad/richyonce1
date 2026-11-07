import React, { useState } from 'react';
import { Garment } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  garments: Garment[];
  onSelectGarment: (garment: Garment) => void;
  onReserve: (garment: Garment) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  garments,
  onSelectGarment,
  onReserve,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const quickKeywords = [
    'Emerald',
    'Velvet',
    'Agbada',
    'Lion',
    'Nuptials',
    'Capelet',
    'Scepter',
    'Coral',
    'Isiagu',
  ];

  const results = query.trim()
    ? garments.filter((g) => {
        const q = query.toLowerCase();
        return (
          g.title.toLowerCase().includes(q) ||
          g.subtitle.toLowerCase().includes(q) ||
          g.description.toLowerCase().includes(q) ||
          g.materials.some((m) => m.toLowerCase().includes(q)) ||
          g.silhouettes.some((s) => s.toLowerCase().includes(q))
        );
      })
    : garments.slice(0, 4);

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md p-4 sm:p-6 md:p-10 flex items-start justify-center animate-in fade-in"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-2xl bg-[#131313] border border-[rgba(229,192,123,0.3)] shadow-2xl p-5 sm:p-7 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#d1c5b4] hover:text-white p-1"
          aria-label="Close search"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        <span className="text-[10px] text-[#ffdd9f] tracking-[0.25em] uppercase font-semibold block mb-1">
          Archive Search &amp; Textile Finder
        </span>
        <h2 className="font-serif text-[22px] uppercase text-[#e5e2e1] mb-4">
          Discover Regalia &amp; Accents
        </h2>

        {/* Input */}
        <div className="relative mb-4">
          <span className="material-symbols-outlined text-[20px] text-[#ffdd9f] absolute left-3 top-1/2 -translate-y-1/2">
            search
          </span>
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by silk, velvet, agbada, lion, scepter, coral..."
            className="w-full h-12 pl-10 pr-4 bg-[#1c1b1b] text-[#e5e2e1] text-[14px] border border-[rgba(229,192,123,0.3)] focus:border-[#e5c07b] focus:outline-none rounded-none placeholder:text-[#9a8f80]"
          />
        </div>

        {/* Quick Keyword Pills */}
        <div className="flex flex-wrap items-center gap-1.5 mb-6">
          <span className="text-[10px] text-[#9a8f80] uppercase tracking-wider font-semibold mr-1">
            Trending:
          </span>
          {quickKeywords.map((kw) => (
            <button
              key={kw}
              onClick={() => setQuery(kw)}
              className="px-2.5 py-1 bg-[#201f1f] hover:bg-[#ffdd9f] hover:text-[#412d00] text-[10px] uppercase font-medium tracking-wider text-[#d1c5b4] border border-[rgba(255,255,255,0.06)] transition-colors cursor-pointer"
            >
              {kw}
            </button>
          ))}
        </div>

        {/* Results */}
        <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
          <div className="text-[10px] text-[#9a8f80] uppercase tracking-wider font-semibold mb-1">
            {query.trim() ? `Search Results (${results.length})` : 'Curated Masterpieces'}
          </div>

          {results.length === 0 ? (
            <div className="py-8 text-center text-[#9a8f80] text-[13px]">
              No creations found matching "{query}". Try searching for "Emerald", "Agbada", or "Coral".
            </div>
          ) : (
            results.map((garment) => (
              <div
                key={garment.id}
                className="p-3 bg-[#1c1b1b] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(229,192,123,0.3)] flex items-center justify-between gap-3 group transition-all"
              >
                <div
                  onClick={() => {
                    onSelectGarment(garment);
                    onClose();
                  }}
                  className="flex items-center gap-3 flex-1 min-w-0 cursor-pointer"
                >
                  <img
                    src={garment.image}
                    alt={garment.title}
                    className="w-12 h-14 object-cover object-top flex-shrink-0 bg-[#0e0e0e]"
                  />
                  <div className="min-w-0">
                    <span className="text-[10px] text-[#ffdd9f] uppercase tracking-wider font-mono">
                      {garment.lookCode}
                    </span>
                    <h4 className="font-serif text-[14px] text-[#e5e2e1] group-hover:text-[#ffdd9f] transition-colors truncate uppercase font-semibold">
                      {garment.title}
                    </h4>
                    <span className="text-[11px] text-[#d1c5b4] truncate block font-light">
                      {garment.subtitle}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="font-mono text-[13px] text-[#ffdd9f] font-semibold">
                    {garment.price}
                  </span>
                  <button
                    onClick={() => {
                      onReserve(garment);
                      onClose();
                    }}
                    className="px-3 py-1.5 bg-[#e5c07b] text-[#412d00] hover:bg-[#f1dfc2] text-[10px] uppercase font-bold tracking-wider cursor-pointer"
                  >
                    Reserve
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
