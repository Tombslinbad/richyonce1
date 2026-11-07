import React, { useState } from 'react';

export interface TextileOption {
  id: string;
  name: string;
  category: 'all' | 'silks' | 'velvets' | 'damasks' | 'brocades';
  gsm: number;
  weightLabel: string;
  provenance: string;
  image: string;
  weaveDesc: string;
  tactileFeel: string;
  drapeRating: number;
  sheenRating: number;
  breathability: string;
  recommendedSilhouettes: string[];
  loomTime: string;
  accentPairing: string;
}

export const TEXTILE_CATALOG: TextileOption[] = [
  {
    id: 'emerald-silk-faille',
    name: 'Hand-Loomed Emerald Silk Faille (420 GSM)',
    category: 'silks',
    gsm: 420,
    weightLabel: 'Heavyweight Structural Faille',
    provenance: 'Oyo State & Lagos Master Handlooms',
    image: '/src/assets/images/fabric_emerald_silk_faille_1794040756824.jpg',
    weaveDesc: 'Dense horizontal ribbed faille with organic raw silk slubs. Crafted on traditional Nigerian wooden floor looms with exceptional structural body.',
    tactileFeel: 'Crisp, firm, sculpts architectural folds that hold dramatic regal volume.',
    drapeRating: 5.0,
    sheenRating: 4.5,
    breathability: 'High natural temperature regulation',
    recommendedSilhouettes: ['The Emerald Monarch Agbada', 'Architectural Capelet Regalia'],
    loomTime: '48 loom hours per bolt',
    accentPairing: '24k Gold Chevron Threadwork & Ebony Scepters'
  },
  {
    id: 'crushed-forest-velvet',
    name: 'Heavyweight Crushed Italian Forest Velvet',
    category: 'velvets',
    gsm: 460,
    weightLabel: 'Plush Liquid Velvet',
    provenance: 'Northern Italian Mills · Hand-finished in Victoria Island',
    image: '/src/assets/images/fabric_crushed_forest_velvet_1794040757754.jpg',
    weaveDesc: 'Crushed micro-dense pile with multifaceted multidirectional light bounce and rich deep emerald-black undertones.',
    tactileFeel: 'Sumptuous, ultra-soft, cascades in liquid heavyweight drapery.',
    drapeRating: 4.8,
    sheenRating: 4.9,
    breathability: 'Medium-heavy evening weight',
    recommendedSilhouettes: ['Forest Velvet Agbada', 'Seated Sovereign Robe'],
    loomTime: 'Specialized steam-crush finishing',
    accentPairing: 'Silver Filigree Necklines & Cast Bronze Raven Staff'
  },
  {
    id: 'obsidian-raw-silk',
    name: 'Obsidian Raw Silk Damask',
    category: 'damasks',
    gsm: 380,
    weightLabel: 'Medium-Heavy Structural Silk',
    provenance: 'Eastern Nigeria Wild Silk Guild · Enugu Atelier',
    image: '/src/assets/images/fabric_obsidian_raw_silk_1794040758227.jpg',
    weaveDesc: 'Matte black structural silk with raised diamond jacquard weave and textured raw silk slubs.',
    tactileFeel: 'Dry, textured, razor-sharp tailoring crease memory.',
    drapeRating: 4.6,
    sheenRating: 2.8,
    breathability: 'High breathability for tropical ceremonial galas',
    recommendedSilhouettes: ['Lion Crest Obsidian Tunic', 'Modern Double-Breasted Blazer'],
    loomTime: '36 artisan hours per 5-meter cut',
    accentPairing: '3D Gold Wire Lion Crests & Polished Ebony Beads'
  },
  {
    id: 'crimson-gold-brocade',
    name: 'Imperial Red Silk Faille (Vegetable Rubia-Dyed)',
    category: 'brocades',
    gsm: 430,
    weightLabel: 'Gilded Brocade Faille',
    provenance: 'Benin Guild Botanical Vats & Lyon Metallic Weavers',
    image: '/src/assets/images/fabric_crimson_gold_brocade_1794040759412.jpg',
    weaveDesc: 'Vibrant scarlet botanical dye interwoven with flexible 24k metallic gold bullion floral vines and micro-fine couching grounds.',
    tactileFeel: 'Imperial weight, metallic raised motifs, smooth silk reverse.',
    drapeRating: 4.9,
    sheenRating: 5.0,
    breathability: 'Comfortable structural weight for air-conditioned ceremonial halls',
    recommendedSilhouettes: ['The Crimson Dynasty Nuptials', 'Gilded Brocade Court'],
    loomTime: '72 loom hours with metallic shuttle feeds',
    accentPairing: 'Certified Edo Coral Beads & Hand-Carved Okpu Agbidi Cap'
  },
  {
    id: 'chocolate-satin-brocade',
    name: 'Chocolate Satin & French Gilded Lace Brocade',
    category: 'brocades',
    gsm: 440,
    weightLabel: 'Dual-Layered Metallic Court Silk',
    provenance: 'Victoria Island Flagship & European Guilds',
    image: '/src/assets/images/fabric_crimson_gold_brocade_1794040759412.jpg',
    weaveDesc: 'Deep dark chocolate silk satin backed by a structural metallic gold floral guipure lace overlay.',
    tactileFeel: 'Rich, smooth inner satin facing with dimensional exterior gilded relief.',
    drapeRating: 4.7,
    sheenRating: 4.6,
    breathability: 'Medium ceremonial weight',
    recommendedSilhouettes: ['Gilded Brocade Court (Couple)', 'Grand Agbada'],
    loomTime: '60 loom hours',
    accentPairing: 'Gold Tassel Sashes & Hand-turned Scepters'
  }
];

interface FabricLibraryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTextileName: string;
  onSelectTextile: (textileName: string) => void;
}

export const FabricLibraryModal: React.FC<FabricLibraryModalProps> = ({
  isOpen,
  onClose,
  selectedTextileName,
  onSelectTextile,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'silks' | 'velvets' | 'damasks' | 'brocades'>('all');
  const [inspectedTextile, setInspectedTextile] = useState<TextileOption>(
    TEXTILE_CATALOG.find((t) => t.name === selectedTextileName) || TEXTILE_CATALOG[0]
  );
  const [justSelected, setJustSelected] = useState(false);

  if (!isOpen) return null;

  const filtered = TEXTILE_CATALOG.filter((t) => {
    if (activeCategory === 'all') return true;
    return t.category === activeCategory;
  });

  const handleSelect = (textile: TextileOption) => {
    onSelectTextile(textile.name);
    setJustSelected(true);
    setTimeout(() => {
      setJustSelected(false);
      onClose();
    }, 1200);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md p-3 sm:p-6 md:p-10 flex items-center justify-center animate-in fade-in"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-5xl bg-[#131313] border border-[rgba(229,192,123,0.35)] shadow-2xl overflow-hidden relative flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="p-4 sm:p-6 bg-[#112520] border-b border-[rgba(229,192,123,0.25)] flex items-center justify-between">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-none bg-[#ffdd9f]"></span>
              <span className="text-[10px] tracking-[0.25em] text-[#ffdd9f] uppercase font-semibold">
                Haute Atelier Material Archive
              </span>
            </div>
            <h2 className="font-serif text-[22px] sm:text-[28px] uppercase text-[#e5e2e1] mt-0.5 leading-tight">
              Sacred Fabric &amp; Textile Library
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 bg-[#1c1b1b] border border-[rgba(255,255,255,0.1)] text-[#d1c5b4] hover:text-white flex items-center justify-center cursor-pointer"
            aria-label="Close fabric library"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Filter Categories Bar */}
        <div className="px-4 sm:px-6 py-2.5 bg-[#0e0e0e] border-b border-[rgba(255,255,255,0.06)] flex items-center gap-2 overflow-x-auto no-scrollbar">
          {[
            { id: 'all', label: 'All Textiles (5)' },
            { id: 'silks', label: 'Aso-Oke & Faille' },
            { id: 'velvets', label: 'Crushed Velvets' },
            { id: 'damasks', label: 'Raw Silks & Damask' },
            { id: 'brocades', label: 'Metallic Brocades' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as any)}
              className={`flex-shrink-0 px-3 py-1.5 text-[10px] uppercase tracking-wider font-semibold border transition-all cursor-pointer ${
                activeCategory === tab.id
                  ? 'bg-[#e5c07b] text-[#412d00] border-[#e5c07b]'
                  : 'bg-[#1c1b1b] text-[#d1c5b4] border-[rgba(255,255,255,0.06)] hover:text-white hover:border-[rgba(229,192,123,0.3)]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modal Main Body: 2-Column Desktop View */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Textile Swatch Gallery (5 Cols) */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-[10px] text-[#9a8f80] uppercase tracking-wider font-semibold block">
              Curated Master Swatches
            </span>

            <div className="space-y-3">
              {filtered.map((textile) => {
                const isSelected = selectedTextileName === textile.name;
                const isInspected = inspectedTextile.id === textile.id;
                return (
                  <div
                    key={textile.id}
                    onClick={() => setInspectedTextile(textile)}
                    className={`p-3 bg-[#1c1b1b] border transition-all cursor-pointer flex gap-3 items-center ${
                      isInspected
                        ? 'border-[#e5c07b] bg-[#112520]/60 ring-1 ring-[#e5c07b]'
                        : 'border-[rgba(255,255,255,0.06)] hover:border-[rgba(229,192,123,0.3)]'
                    }`}
                  >
                    <div className="relative w-16 h-16 rounded-none overflow-hidden bg-[#0e0e0e] flex-shrink-0 border border-[rgba(255,255,255,0.08)]">
                      <img
                        src={textile.image}
                        alt={textile.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-[#ffdd9f] font-mono uppercase">
                          {textile.gsm} GSM
                        </span>
                        {isSelected && (
                          <span className="px-1.5 py-0.2 text-[8px] bg-[#e5c07b] text-[#412d00] uppercase font-bold tracking-wider">
                            Active
                          </span>
                        )}
                      </div>
                      <h4 className="font-serif text-[14px] text-[#e5e2e1] uppercase font-semibold truncate mt-0.5">
                        {textile.name}
                      </h4>
                      <p className="text-[11px] text-[#d1c5b4] truncate font-light">
                        {textile.provenance}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: High-Res Macro Swatch & Tactile Metrics (7 Cols) */}
          <div className="lg:col-span-7 bg-[#1c1b1b] border border-[rgba(229,192,123,0.25)] p-5 sm:p-6 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              {/* Macro Swatch Visual */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0A231C] border border-[rgba(229,192,123,0.2)]">
                <img
                  src={inspectedTextile.image}
                  alt={inspectedTextile.name}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute top-3 left-3 bg-[#0e0e0e]/85 backdrop-blur-md px-2.5 py-1 text-[#ffdd9f] text-[10px] uppercase tracking-wider font-mono border border-[rgba(229,192,123,0.3)]">
                  Macro Weave Inspection • {inspectedTextile.gsm} GSM
                </div>
                <div className="absolute bottom-3 right-3 bg-[#0e0e0e]/90 px-2.5 py-1 text-[#e5e2e1] text-[10px] tracking-wider uppercase font-semibold">
                  {inspectedTextile.weightLabel}
                </div>
              </div>

              {/* Title & Provenance */}
              <div>
                <span className="text-[10px] text-[#ffdd9f] tracking-[0.2em] uppercase font-semibold block">
                  {inspectedTextile.provenance}
                </span>
                <h3 className="font-serif text-[20px] sm:text-[24px] uppercase text-[#e5e2e1] mt-0.5 leading-snug">
                  {inspectedTextile.name}
                </h3>
                <p className="text-[13px] text-[#d1c5b4] font-light leading-relaxed mt-2">
                  {inspectedTextile.weaveDesc}
                </p>
              </div>

              {/* Tactile Specifications Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-3 border-t border-[rgba(255,255,255,0.06)] text-[11px]">
                <div className="p-2.5 bg-[#201f1f] border border-[rgba(255,255,255,0.05)]">
                  <span className="text-[9px] text-[#9a8f80] uppercase tracking-wider block">Drape Stance</span>
                  <span className="font-mono text-[#ffdd9f] font-bold text-[12px] mt-0.5 block">
                    {inspectedTextile.drapeRating} / 5.0
                  </span>
                  <span className="text-[10px] text-[#d1c5b4] leading-tight block">Architectural Volume</span>
                </div>

                <div className="p-2.5 bg-[#201f1f] border border-[rgba(255,255,255,0.05)]">
                  <span className="text-[9px] text-[#9a8f80] uppercase tracking-wider block">Loom Preparation</span>
                  <span className="font-mono text-white font-bold text-[12px] mt-0.5 block truncate">
                    {inspectedTextile.loomTime.split(' ')[0]} {inspectedTextile.loomTime.split(' ')[1]}
                  </span>
                  <span className="text-[10px] text-[#d1c5b4] leading-tight block">Hand-tensioned</span>
                </div>

                <div className="p-2.5 bg-[#201f1f] border border-[rgba(255,255,255,0.05)] col-span-2 sm:col-span-1">
                  <span className="text-[9px] text-[#9a8f80] uppercase tracking-wider block">Climate Breathability</span>
                  <span className="text-[#ffdd9f] font-semibold text-[11px] mt-0.5 block">
                    High Regulating
                  </span>
                  <span className="text-[10px] text-[#d1c5b4] leading-tight block">Natural Silk Fiber</span>
                </div>
              </div>

              {/* Recommended Silhouette Pairing */}
              <div className="p-3 bg-[#112520] border border-[rgba(229,192,123,0.2)]">
                <span className="text-[9px] text-[#ffdd9f] uppercase tracking-wider font-semibold block mb-1">
                  Optimal Silhouette Alignment:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {inspectedTextile.recommendedSilhouettes.map((sil, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-[#1c1b1b] text-[10px] text-[#e5e2e1] uppercase font-medium border border-[rgba(255,255,255,0.08)]"
                    >
                      {sil}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Selection Action Bar */}
            <div className="mt-5 pt-4 border-t border-[rgba(229,192,123,0.2)] flex items-center justify-between gap-3">
              <div className="text-[11px] text-[#d1c5b4]">
                {selectedTextileName === inspectedTextile.name ? (
                  <span className="text-[#ffdd9f] flex items-center gap-1 font-semibold">
                    <span className="material-symbols-outlined text-[16px]">check_circle</span>
                    Currently Selected for Commission
                  </span>
                ) : (
                  <span>Ready to assign to your custom order</span>
                )}
              </div>

              <button
                onClick={() => handleSelect(inspectedTextile)}
                className={`h-11 px-6 text-[11px] uppercase font-bold tracking-[0.2em] transition-all cursor-pointer shadow-lg active:scale-95 flex items-center gap-2 ${
                  justSelected
                    ? 'bg-[#112520] text-[#ffdd9f] border border-[#ffdd9f]'
                    : selectedTextileName === inspectedTextile.name
                    ? 'bg-[#2a2a2a] text-white hover:bg-[#3a3939]'
                    : 'bg-[#e5c07b] text-[#412d00] hover:bg-[#f1dfc2]'
                }`}
              >
                <span>
                  {justSelected
                    ? 'Assigned to Commission!'
                    : selectedTextileName === inspectedTextile.name
                    ? 'Re-Confirm Textile'
                    : 'Select for My Commission'}
                </span>
                <span className="material-symbols-outlined text-[16px]">done</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
