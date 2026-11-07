import React, { useState } from 'react';
import { Garment, CategoryType } from '../types';

interface AscentLookbookProps {
  garments: Garment[];
  onReserve: (garment: Garment) => void;
  onInspect: (garment: Garment) => void;
  initialCategory?: CategoryType;
}

export const AscentLookbook: React.FC<AscentLookbookProps> = ({
  garments,
  onReserve,
  onInspect,
  initialCategory = 'all',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-desc' | 'price-asc' | 'hours'>('featured');

  const categories: { id: CategoryType; label: string }[] = [
    { id: 'all', label: 'All Masterpieces' },
    { id: 'agbada', label: 'Sovereign Agbada' },
    { id: 'nuptials', label: 'Imperial Nuptials' },
    { id: 'isiagu', label: 'Isiagu Tunics' },
    { id: 'capes', label: 'Architectural Capes' },
    { id: 'ready-to-wear', label: 'Ready-To-Wear' },
    { id: 'artifacts', label: 'Regalia & Accents' },
  ];

  const filtered = garments
    .filter((g) => {
      if (selectedCategory !== 'all' && g.category !== selectedCategory) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          g.title.toLowerCase().includes(q) ||
          g.subtitle.toLowerCase().includes(q) ||
          g.description.toLowerCase().includes(q) ||
          g.materials.some((m) => m.toLowerCase().includes(q))
        );
      }
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'price-desc') return b.numericPrice - a.numericPrice;
      if (sortBy === 'price-asc') return a.numericPrice - b.numericPrice;
      if (sortBy === 'hours') return b.artisanHours - a.artisanHours;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });

  return (
    <div className="flex flex-col w-full text-[#e5e2e1] max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6">
      {/* Editorial Header Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#0A231C] via-[#112520] to-[#131313] p-6 sm:p-10 border border-[rgba(229,192,123,0.22)] shadow-2xl mb-8">
        <div className="flex flex-col gap-2 relative z-10 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-none bg-[#ffdd9f]"></span>
            <span className="text-[10px] tracking-[0.25em] text-[#ffdd9f] uppercase font-semibold">
              Ascent Lookbook • Volume IV
            </span>
          </div>
          <h1 className="font-serif text-[30px] sm:text-[42px] uppercase text-[#e5e2e1] tracking-tight leading-tight">
            The Coronation Collection
          </h1>
          <p className="text-[14px] text-[#d1c5b4] leading-relaxed font-light">
            Heirloom regalia, structured silk faille, and royal embroidery commissioned for sovereigns, cultural icons, and milestone nuptials across the globe.
          </p>
        </div>

        {/* Subtle Watermark */}
        <div className="absolute right-0 bottom-0 pointer-events-none opacity-[0.05] select-none">
          <span className="font-serif text-[180px] font-bold text-[#ffdd9f] leading-none">
            ASCENT
          </span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col gap-4 mb-8">
        {/* Category Filter Pills (unboxed sharp segmented buttons) */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex-shrink-0 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] font-semibold transition-all cursor-pointer rounded-none border ${
                selectedCategory === cat.id
                  ? 'bg-[#e5c07b] text-[#412d00] border-[#e5c07b] shadow-md'
                  : 'bg-[#1c1b1b] text-[#d1c5b4] hover:text-[#e5e2e1] border-[rgba(255,255,255,0.08)] hover:border-[rgba(229,192,123,0.3)]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search & Sort Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2 border-t border-[rgba(255,255,255,0.06)]">
          <div className="relative flex-1 max-w-md">
            <span className="material-symbols-outlined text-[18px] text-[#9a8f80] absolute left-3 top-1/2 -translate-y-1/2">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by silk, velvet, coral, agbada, staff..."
              className="w-full h-10 pl-9 pr-4 bg-[#1c1b1b] text-[#e5e2e1] text-[13px] border border-[rgba(229,192,123,0.2)] focus:border-[#e5c07b] focus:outline-none placeholder:text-[#9a8f80] rounded-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9a8f80] hover:text-white"
              >
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] text-[#9a8f80] uppercase tracking-wider font-semibold whitespace-nowrap">
              Sort by:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="h-10 px-3 bg-[#1c1b1b] text-[#e5e2e1] text-[12px] border border-[rgba(229,192,123,0.2)] focus:border-[#e5c07b] focus:outline-none rounded-none cursor-pointer uppercase tracking-wider"
            >
              <option value="featured">Curated Runway</option>
              <option value="hours">Artisan Hours (High to Low)</option>
              <option value="price-desc">Investment (High to Low)</option>
              <option value="price-asc">Investment (Low to High)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Garments Grid */}
      {filtered.length === 0 ? (
        <div className="py-20 text-center flex flex-col items-center justify-center border border-[rgba(255,255,255,0.06)] bg-[#1c1b1b]">
          <span className="material-symbols-outlined text-[48px] text-[#ffdd9f] mb-3">
            auto_awesome_mosaic
          </span>
          <h3 className="font-serif text-[20px] text-[#e5e2e1] uppercase">No Creations Found</h3>
          <p className="text-[13px] text-[#d1c5b4] mt-1 max-w-sm">
            We couldn't find any creations matching your search. Clear your filters or explore our full couture archive.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="mt-4 px-4 py-2 bg-[#e5c07b] text-[#412d00] text-[11px] uppercase tracking-[0.2em] font-semibold"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((garment) => (
            <div
              key={garment.id}
              className="bg-[#1c1b1b] flex flex-col overflow-hidden border border-[rgba(229,192,123,0.18)] hover:border-[rgba(229,192,123,0.5)] transition-all group shadow-xl"
            >
              {/* Product Visual Container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#0A231C]">
                <img
                  src={garment.image}
                  alt={garment.alt}
                  onClick={() => onInspect(garment)}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 cursor-pointer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-transparent to-transparent pointer-events-none"></div>

                {/* Badge */}
                {garment.badge && (
                  <div className="absolute top-3 left-3 bg-[#0e0e0e]/85 backdrop-blur-md px-2.5 py-1 text-[#ffdd9f] text-[10px] uppercase tracking-[0.2em] font-semibold border border-[rgba(229,192,123,0.25)]">
                    {garment.badge}
                  </div>
                )}

                {/* Artisan Hours Tag */}
                <div className="absolute top-3 right-3 bg-[#112520]/90 backdrop-blur-md px-2.5 py-1 text-[#d1c5b4] text-[10px] uppercase tracking-wider font-mono border border-[rgba(255,255,255,0.06)]">
                  {garment.artisanHours} hrs handcraft
                </div>

                {/* Look Code */}
                <div className="absolute bottom-3 right-3 bg-[#0e0e0e]/90 px-2.5 py-1 text-[#e5e2e1] text-[10px] tracking-wider uppercase font-semibold">
                  {garment.lookCode}
                </div>
              </div>

              {/* Garment Details & Actions */}
              <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 gap-3">
                <div className="flex flex-col gap-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3
                      onClick={() => onInspect(garment)}
                      className="font-serif text-[18px] sm:text-[20px] text-[#e5e2e1] group-hover:text-[#ffdd9f] transition-colors uppercase leading-snug cursor-pointer"
                    >
                      {garment.title}
                    </h3>
                    <span className="text-[14px] text-[#ffdd9f] font-mono font-semibold tracking-wider flex-shrink-0">
                      {garment.price}
                    </span>
                  </div>
                  <p className="text-[12px] text-[#d1c5b4] line-clamp-2 font-light leading-relaxed">
                    {garment.subtitle}
                  </p>
                </div>

                {/* Materials Tags */}
                <div className="flex flex-wrap gap-1.5 py-1">
                  {garment.materials.slice(0, 3).map((mat, i) => (
                    <span
                      key={i}
                      className="text-[10px] text-[#d1c5b4] tracking-wider uppercase px-2 py-0.5 bg-[#2a2a2a] border border-[rgba(255,255,255,0.05)]"
                    >
                      {mat}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-2 border-t border-[rgba(255,255,255,0.08)] flex items-center justify-between gap-2">
                  <button
                    onClick={() => onInspect(garment)}
                    className="text-[10px] text-[#d1c5b4] hover:text-white uppercase tracking-[0.2em] font-semibold py-2 px-1 flex items-center gap-1 cursor-pointer"
                  >
                    Inspect Piece <span className="material-symbols-outlined text-[14px]">visibility</span>
                  </button>
                  <button
                    onClick={() => onReserve(garment)}
                    className="px-3.5 py-2 bg-[#e5c07b] text-[#412d00] hover:bg-[#f1dfc2] text-[10px] uppercase font-bold tracking-[0.18em] transition-all cursor-pointer rounded-none active:scale-95 shadow-sm"
                  >
                    Reserve In Bag
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
