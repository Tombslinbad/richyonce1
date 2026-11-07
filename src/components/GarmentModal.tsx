import React from 'react';
import { Garment } from '../types';

interface GarmentModalProps {
  garment: Garment | null;
  onClose: () => void;
  onReserve: (garment: Garment) => void;
  onConfigureBespoke: (garment: Garment) => void;
}

export const GarmentModal: React.FC<GarmentModalProps> = ({
  garment,
  onClose,
  onReserve,
  onConfigureBespoke,
}) => {
  if (!garment) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md p-4 sm:p-6 md:p-10 flex items-center justify-center animate-in fade-in"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-4xl bg-[#131313] border border-[rgba(229,192,123,0.3)] shadow-2xl overflow-hidden relative flex flex-col md:flex-row max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 bg-[#0e0e0e]/80 text-[#d1c5b4] hover:text-white flex items-center justify-center cursor-pointer border border-[rgba(255,255,255,0.1)]"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {/* Visual Column */}
        <div className="w-full md:w-1/2 relative bg-[#0A231C] aspect-[4/5] md:aspect-auto overflow-hidden">
          <img
            src={garment.image}
            alt={garment.alt}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent md:hidden"></div>

          {garment.badge && (
            <div className="absolute top-4 left-4 bg-[#0e0e0e]/85 backdrop-blur-md px-3 py-1 text-[#ffdd9f] text-[10px] uppercase tracking-[0.2em] font-semibold border border-[rgba(229,192,123,0.3)]">
              {garment.badge}
            </div>
          )}

          <div className="absolute bottom-4 left-4 bg-[#0e0e0e]/90 px-3 py-1 text-[#e5e2e1] text-[10px] tracking-wider uppercase font-semibold">
            {garment.lookCode}
          </div>
        </div>

        {/* Information Column */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-4">
            <div>
              <span className="text-[10px] text-[#ffdd9f] tracking-[0.25em] uppercase font-semibold block">
                {garment.provenance}
              </span>
              <h2 className="font-serif text-[24px] sm:text-[28px] uppercase text-[#e5e2e1] mt-1 leading-tight">
                {garment.title}
              </h2>
              <div className="flex items-baseline justify-between mt-2 pt-2 border-t border-[rgba(255,255,255,0.06)]">
                <span className="font-serif text-[22px] text-[#ffdd9f] font-mono font-bold">
                  {garment.price}
                </span>
                <span className="text-[11px] text-[#d1c5b4] font-mono">
                  {garment.artisanHours} Artisan Hours
                </span>
              </div>
            </div>

            <p className="text-[13px] text-[#d1c5b4] font-light leading-relaxed">
              {garment.description}
            </p>

            {/* Atelier Craftsmanship Details */}
            <div className="space-y-2 pt-2 border-t border-[rgba(255,255,255,0.06)]">
              <span className="text-[10px] text-[#ffdd9f] uppercase tracking-wider font-semibold block">
                Garment Specifications &amp; Craftsmanship:
              </span>
              <ul className="space-y-1.5 text-[12px] text-[#d1c5b4] font-light">
                {garment.details.map((dt, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#ffdd9f] text-[10px] mt-0.5">◆</span>
                    <span>{dt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sacred Textiles */}
            <div className="pt-2 border-t border-[rgba(255,255,255,0.06)]">
              <span className="text-[10px] text-[#ffdd9f] uppercase tracking-wider font-semibold block mb-1.5">
                Sacred Materials:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {garment.materials.map((mat, i) => (
                  <span
                    key={i}
                    className="text-[10px] text-[#e5e2e1] tracking-wider uppercase px-2.5 py-1 bg-[#201f1f] border border-[rgba(255,255,255,0.08)]"
                  >
                    {mat}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-6 mt-6 border-t border-[rgba(229,192,123,0.2)] flex flex-col sm:flex-row gap-2.5">
            <button
              onClick={() => {
                onReserve(garment);
                onClose();
              }}
              className="flex-1 h-12 bg-[#e5c07b] text-[#412d00] hover:bg-[#f1dfc2] text-[11px] uppercase font-bold tracking-[0.2em] transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-lg active:scale-98"
            >
              <span>Reserve in Bag</span>
              <span className="material-symbols-outlined text-[16px]">shopping_bag</span>
            </button>
            <button
              onClick={() => {
                onConfigureBespoke(garment);
                onClose();
              }}
              className="h-12 px-5 bg-[#201f1f] hover:bg-[#334c43] text-[#ffdd9f] text-[11px] uppercase font-semibold tracking-[0.18em] transition-all cursor-pointer border border-[rgba(229,192,123,0.3)] flex items-center justify-center gap-1.5"
            >
              <span>Custom Drape</span>
              <span className="material-symbols-outlined text-[16px]">straighten</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
