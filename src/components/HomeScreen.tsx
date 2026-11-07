import React from 'react';
import { Garment, TabType } from '../types';

interface HomeScreenProps {
  onNavigate: (tab: TabType) => void;
  onReserve: (garment: Garment) => void;
  onInspect: (garment: Garment) => void;
  onSelectCategoryFilter?: (cat: string) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigate,
  onReserve,
  onInspect,
  onSelectCategoryFilter,
}) => {
  return (
    <div className="flex flex-col w-full text-[#e5e2e1]">
      {/* 1. Architectural Background Ambience */}
      <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#0A231C] via-[#0D0D0D] to-[#131313] px-4 sm:px-6 md:px-8 pb-8 pt-4">
        {/* Stylized Watermark Monogram (YR) */}
        <div className="absolute -top-10 -right-12 pointer-events-none select-none opacity-[0.06] flex items-center justify-center">
          <span className="font-serif text-[220px] font-bold text-[#ffdd9f] leading-none tracking-tighter">
            YR
          </span>
        </div>

        {/* Atelier Heritage Badges Grid */}
        <div className="pt-2 pb-3 flex items-center justify-between sm:justify-start gap-2 overflow-x-auto no-scrollbar">
          <span className="flex-shrink-0 px-2.5 py-1 bg-[#112520] text-[#ffdd9f] text-[10px] tracking-[0.22em] uppercase font-semibold border border-[rgba(229,192,123,0.25)] shadow-sm">
            LAGOS ATELIER
          </span>
          <span className="flex-shrink-0 px-2.5 py-1 bg-[#2a2a2a] text-[#d1c5b4] text-[10px] tracking-[0.22em] uppercase font-semibold border border-[rgba(255,255,255,0.06)]">
            SAVILE ROW PRECISION
          </span>
          <span className="flex-shrink-0 px-2.5 py-1 bg-[#112520] text-[#ffdd9f] text-[10px] tracking-[0.22em] uppercase font-semibold border border-[rgba(229,192,123,0.25)] shadow-sm">
            GLOBAL CONCIERGE
          </span>
        </div>

        {/* Editorial Hero Title Lockup */}
        <div className="mt-4 flex flex-col gap-1.5 relative z-10 max-w-2xl mx-auto">
          <p className="text-[11px] font-semibold text-[#ffdd9f] tracking-[0.25em] uppercase font-sans">
            RICHYONCE — EXCELLENCE IN EVERY STITCH
          </p>
          <h1 className="font-serif text-[32px] sm:text-[44px] md:text-[52px] text-[#e5e2e1] tracking-tight leading-[1.1] uppercase font-normal">
            Contemporary African Luxury,<br />
            <span className="italic font-normal text-[#ffdd9f]">Tailored With Intention.</span>
          </h1>
          <p className="text-[14px] sm:text-[15px] text-[#d1c5b4] mt-2 leading-relaxed max-w-lg font-light">
            MAIN CHARACTER ENERGY ONLY—bold, audacious, limitless. Hand-embroidered regalia for sovereigns of modern style.
          </p>
        </div>

        {/* Regal Visual Showcase (Agbada Masterpiece with Authentic Client Image) */}
        <div className="relative mt-6 w-full max-w-2xl mx-auto bg-[#112520] shadow-2xl overflow-hidden group border border-[rgba(229,192,123,0.22)]">
          <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#0A231C]">
            <img
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 cursor-pointer"
              alt="Client authentic portrait: Majestic lime and emerald Agbada ensemble with intricate golden chevron embroidery, matching fila cap, beaded royal neckwear, holding ceremonial scepter"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUEUSiTY50VstAVvbIFEE_8kHJH-tk5kXrJGpBvY3ee8LWtMblMpXh71ZlIYUCo_f07Cxn_Do44RN61vzFp_nPOfcHc1TiG47-4g3l3_RGMslHCkJ96JVTIANRKGi4CKsZI3h5IfrGguBIteo3eKKw0USVR22vlsuo5sJ_PL7RsN5TeHXvd4VW66MvGdq52ufFA3MiTwy7Ws9bJtnKQ0jZmmhJhVchGPOIV0DknXpJURfdx-2E9bWfJNK10wbMdMAUBFc"
              onClick={() => onInspect({
                id: 'emerald-monarch-agbada',
                title: 'The Emerald Monarch Agbada',
                subtitle: 'Hand-loomed silk, chevron gold embroidery & scepter',
                price: '₦5,200,000',
                numericPrice: 5200000,
                category: 'agbada',
                lookCode: 'Look 01 • Masterpiece',
                badge: 'Masterpiece Nº 01 • Emerald Scepter',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUEUSiTY50VstAVvbIFEE_8kHJH-tk5kXrJGpBvY3ee8LWtMblMpXh71ZlIYUCo_f07Cxn_Do44RN61vzFp_nPOfcHc1TiG47-4g3l3_RGMslHCkJ96JVTIANRKGi4CKsZI3h5IfrGguBIteo3eKKw0USVR22vlsuo5sJ_PL7RsN5TeHXvd4VW66MvGdq52ufFA3MiTwy7Ws9bJtnKQ0jZmmhJhVchGPOIV0DknXpJURfdx-2E9bWfJNK10wbMdMAUBFc',
                alt: 'Majestic lime and emerald Agbada ensemble with intricate golden chevron embroidery, matching fila cap, beaded royal neckwear, holding ceremonial scepter',
                description: 'MAIN CHARACTER ENERGY ONLY—bold, audacious, limitless. Hand-embroidered regalia for sovereigns of modern style.',
                details: [
                  'Hand-woven Emerald Silk Faille (420 GSM)',
                  'High-density 24k metallic gold chevron threadwork along collar and chest',
                  'Accompanied by hand-carved ceremonial ebony and gold-foil scepter',
                  'Matching sculpted three-tier Fila cap with subtle beadwork'
                ],
                provenance: 'Lagos Victoria Island Atelier',
                artisanHours: 120,
                materials: ['Hand-loomed Emerald Silk', 'Metallic Gold Thread', 'Beaded Obsidian', 'Carved Ebony'],
                silhouettes: ['Grand Agbada', 'Architectural Fila', 'Ceremonial Scepter'],
                inStock: true,
                limitedEdition: true,
                featured: true
              })}
            />

            {/* Atmospheric Vignette scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A231C]/90 via-[#0A231C]/25 to-transparent pointer-events-none"></div>

            {/* Curated Badge Pin */}
            <div className="absolute top-3 left-3 bg-[#0e0e0e]/85 backdrop-blur-md px-3 py-1 flex items-center gap-1.5 shadow-lg border border-[rgba(229,192,123,0.3)]">
              <span className="w-1.5 h-1.5 rounded-none bg-[#ffdd9f]"></span>
              <span className="text-[10px] uppercase text-[#ffdd9f] tracking-[0.22em] font-semibold">
                Masterpiece Nº 01 • Emerald Scepter
              </span>
            </div>

            {/* Floating Garment Identity Bar */}
            <div className="absolute bottom-3 inset-x-3 sm:bottom-4 sm:inset-x-4 bg-[#0e0e0e]/90 backdrop-blur-xl p-3 sm:p-4 flex items-center justify-between shadow-xl border-t border-[rgba(229,192,123,0.2)]">
              <div className="flex flex-col min-w-0 pr-3">
                <span className="text-[11px] sm:text-[12px] text-[#ffdd9f] tracking-[0.2em] uppercase font-semibold truncate">
                  The Emerald Monarch Agbada
                </span>
                <span className="text-[12px] sm:text-[13px] text-[#d1c5b4] truncate mt-0.5 font-light">
                  Hand-loomed silk, chevron gold embroidery &amp; scepter
                </span>
              </div>
              <div className="flex flex-col items-end flex-shrink-0">
                <span className="text-[13px] sm:text-[15px] text-[#e5e2e1] font-semibold tracking-wider font-mono">
                  ₦5,200,000
                </span>
                <button
                  onClick={() => onReserve({
                    id: 'emerald-monarch-agbada',
                    title: 'The Emerald Monarch Agbada',
                    subtitle: 'Hand-loomed silk, chevron gold embroidery & scepter',
                    price: '₦5,200,000',
                    numericPrice: 5200000,
                    category: 'agbada',
                    lookCode: 'Look 01 • Masterpiece',
                    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUEUSiTY50VstAVvbIFEE_8kHJH-tk5kXrJGpBvY3ee8LWtMblMpXh71ZlIYUCo_f07Cxn_Do44RN61vzFp_nPOfcHc1TiG47-4g3l3_RGMslHCkJ96JVTIANRKGi4CKsZI3h5IfrGguBIteo3eKKw0USVR22vlsuo5sJ_PL7RsN5TeHXvd4VW66MvGdq52ufFA3MiTwy7Ws9bJtnKQ0jZmmhJhVchGPOIV0DknXpJURfdx-2E9bWfJNK10wbMdMAUBFc',
                    alt: 'Emerald Monarch Agbada',
                    description: 'Hand-embroidered regalia for sovereigns of modern style.',
                    details: ['Hand-loomed silk faille', '24k gold chevron embroidery', 'Ceremonial ebony scepter'],
                    provenance: 'Lagos Victoria Island Atelier',
                    artisanHours: 120,
                    materials: ['Silk Faille', 'Metallic Thread', 'Ebony Scepter'],
                    silhouettes: ['Grand Agbada'],
                    inStock: true,
                    limitedEdition: true
                  })}
                  className="mt-1 text-[10px] text-[#ffdd9f] uppercase underline underline-offset-4 tracking-wider flex items-center gap-0.5 hover:text-white transition-colors cursor-pointer font-bold"
                >
                  Reserve <span className="material-symbols-outlined text-[13px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Call to Action Buttons */}
        <div className="mt-5 flex flex-col gap-2.5 max-w-4xl">
          <button
            onClick={() => onNavigate('ascent')}
            className="w-full h-12 bg-[#e5c07b] text-[#412d00] font-semibold text-[11px] sm:text-[12px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-[#f1dfc2] transition-all shadow-lg active:scale-[0.99] cursor-pointer rounded-none"
          >
            <span>Explore Ascent Lookbook</span>
            <span className="material-symbols-outlined text-[18px]">north_east</span>
          </button>
          <div className="grid grid-cols-2 gap-2.5">
            <button
              onClick={() => onNavigate('bespoke')}
              className="h-11 bg-[#2a2a2a] text-[#e5e2e1] text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] flex items-center justify-center hover:bg-[#3a3939] transition-all cursor-pointer rounded-none border border-[rgba(255,255,255,0.08)]"
            >
              Create Look
            </button>
            <button
              onClick={() => onNavigate('bespoke')}
              className="h-11 bg-[#112520] text-[#ffdd9f] text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] flex items-center justify-center hover:bg-[#334c43] transition-all cursor-pointer rounded-none border border-[rgba(229,192,123,0.3)]"
            >
              VIP Atelier
            </button>
          </div>
        </div>
      </div>

      {/* 2. Experience B — Cinematic Editorial Gallery (Sovereign Chronicles) */}
      <div className="w-full px-4 sm:px-6 md:px-8 py-10 bg-[#0e0e0e] border-y border-[rgba(229,192,123,0.18)]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-end justify-between mb-6">
            <div className="flex flex-col">
              <span className="text-[10px] tracking-[0.25em] text-[#ffdd9f] uppercase font-semibold">
                Experience B • Gallery
              </span>
              <h2 className="font-serif text-[24px] sm:text-[28px] uppercase text-[#e5e2e1] tracking-wide mt-1">
                Sovereign Chronicles
              </h2>
            </div>
            <span className="text-[10px] text-[#ffdd9f] tracking-[0.22em] uppercase font-semibold">
              Editorial Nº 02
            </span>
          </div>

          {/* Asymmetrical Editorial Showcase */}
          <div className="space-y-6 sm:space-y-8">
            {/* Storytelling Card 1: Imperial Red Velvet Royal Couple */}
            <div className="bg-[#1c1b1b] overflow-hidden shadow-2xl border border-[rgba(229,192,123,0.22)] group">
              <div className="relative w-full aspect-[4/5] sm:aspect-[16/10] overflow-hidden bg-[#0A231C]">
                <img
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 cursor-pointer"
                  alt="Imperial Red Velvet & Gold Royal Couple in bespoke ceremonial gown with tiered coral beads, carved staff, and structured capelet"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4ZJKqhJCJab2Ceo5SncRkYQaOc3cSacxjq4t4zUXP_g31ztXMjXiz17Ff1USkupexUb0bbgrKHmlXEu-Fq526c-3xolrxL3pv4_Szso5ep_FFk17SyhVZIVy9O8yfRhTca_kt8wAsqS13cJtfcOAehIfHXaXbbVvZ4No6oYCAgjtQ3zF97d3tEYp9IgYeG7eAjGKR9QVEf2xyxUeiQBgx3niywk20m7Cl3OB3jSxdnXDlCRcrl17PFIj6TjO6mAOmVok"
                  onClick={() => onInspect({
                    id: 'crimson-dynasty',
                    title: 'The Crimson Dynasty',
                    subtitle: 'Dual-regalia statement nuptial court ensemble',
                    price: '₦6,300,000',
                    numericPrice: 6300000,
                    category: 'nuptials',
                    lookCode: 'Look 08 • Limited Commission',
                    badge: 'Imperial Nuptials',
                    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4ZJKqhJCJab2Ceo5SncRkYQaOc3cSacxjq4t4zUXP_g31ztXMjXiz17Ff1USkupexUb0bbgrKHmlXEu-Fq526c-3xolrxL3pv4_Szso5ep_FFk17SyhVZIVy9O8yfRhTca_kt8wAsqS13cJtfcOAehIfHXaXbbVvZ4No6oYCAgjtQ3zF97d3tEYp9IgYeG7eAjGKR9QVEf2xyxUeiQBgx3niywk20m7Cl3OB3jSxdnXDlCRcrl17PFIj6TjO6mAOmVok',
                    alt: 'Imperial Red Velvet & Gold Royal Couple',
                    description: 'A dual-regalia statement. Hand-carved okpu agbidi cap with cowrie shell bands, accompanied by architectural floor-sweeping red silk cape and handcrafted coral regalia.',
                    details: [
                      'Heavyweight crimson silk faille draped capelet with geometric square shoulder cut',
                      'Bespoke bridal structured mermaid gown with tiered Edo coral neckwear',
                      'Hand-carved authentic Okpu Agbidi cap with polished cowrie bands'
                    ],
                    provenance: 'Lagos Atelier & Benin Coral Guild',
                    artisanHours: 160,
                    materials: ['Crimson Silk Faille', 'Edo Coral', 'Cowrie Shells', 'Carved Mahogany'],
                    silhouettes: ['Floor Capelet', 'Bridal Regalia', 'Chieftain Cap'],
                    inStock: true,
                    limitedEdition: true,
                    featured: true
                  })}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute top-3 left-3 bg-[#0e0e0e]/85 backdrop-blur-md px-2.5 py-1 text-[#ffdd9f] text-[10px] tracking-[0.22em] uppercase font-semibold border border-[rgba(229,192,123,0.2)]">
                  Imperial Nuptials
                </div>
                <div className="absolute bottom-3 right-3 bg-[#0e0e0e]/90 px-3 py-1 text-[#e5e2e1] text-[10px] tracking-wider uppercase font-semibold border border-[rgba(255,255,255,0.08)]">
                  Look 08 • Limited Commission
                </div>
              </div>
              <div className="p-4 sm:p-5 flex flex-col gap-2">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-serif text-[20px] sm:text-[22px] text-[#ffdd9f] uppercase tracking-wide">
                    The Crimson Dynasty
                  </h3>
                  <span className="text-[14px] text-[#e5e2e1] tracking-wider font-mono font-semibold">
                    ₦6,300,000
                  </span>
                </div>
                <p className="text-[13px] text-[#d1c5b4] leading-relaxed font-light">
                  A dual-regalia statement. Hand-carved okpu agbidi cap with cowrie shell bands, accompanied by architectural floor-sweeping red silk cape and handcrafted coral regalia.
                </p>
                <div className="pt-2 flex items-center justify-between border-t border-[rgba(255,255,255,0.06)]">
                  <span className="text-[10px] text-[#f1dfc2] uppercase tracking-[0.2em] font-semibold">
                    Ceremonial Couture
                  </span>
                  <button
                    onClick={() => onReserve({
                      id: 'crimson-dynasty',
                      title: 'The Crimson Dynasty',
                      subtitle: 'Dual-regalia statement nuptial court ensemble',
                      price: '₦6,300,000',
                      numericPrice: 6300000,
                      category: 'nuptials',
                      lookCode: 'Look 08 • Limited Commission',
                      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4ZJKqhJCJab2Ceo5SncRkYQaOc3cSacxjq4t4zUXP_g31ztXMjXiz17Ff1USkupexUb0bbgrKHmlXEu-Fq526c-3xolrxL3pv4_Szso5ep_FFk17SyhVZIVy9O8yfRhTca_kt8wAsqS13cJtfcOAehIfHXaXbbVvZ4No6oYCAgjtQ3zF97d3tEYp9IgYeG7eAjGKR9QVEf2xyxUeiQBgx3niywk20m7Cl3OB3jSxdnXDlCRcrl17PFIj6TjO6mAOmVok',
                      alt: 'Imperial Red Velvet & Gold Royal Couple',
                      description: 'Dual-regalia nuptial commission with coral regalia.',
                      details: ['Crimson Silk Faille', 'Edo Coral Beads', 'Mahogany Cane'],
                      provenance: 'Lagos Atelier',
                      artisanHours: 160,
                      materials: ['Silk Faille', 'Coral'],
                      silhouettes: ['Capelet & Gown'],
                      inStock: true,
                      limitedEdition: true
                    })}
                    className="text-[10px] text-[#ffdd9f] uppercase tracking-widest hover:underline flex items-center gap-1 cursor-pointer font-bold"
                  >
                    Inquire <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Storytelling Card 2: Forest Green Velvet Agbada with Raven Staff */}
            <div className="bg-[#1c1b1b] overflow-hidden shadow-2xl border border-[rgba(229,192,123,0.22)] group">
              <div className="relative w-full aspect-[4/5] sm:aspect-[16/10] overflow-hidden bg-[#0A231C]">
                <img
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 cursor-pointer"
                  alt="Forest Green Velvet Agbada with silver filigree neckline, layered obsidian beads, ceremonial raven staff, and royal sculpted fila cap"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAuI5cJvTI3uA5uT2zAy06nXhDX9wZtbntf8fPv3zmDvUvy3djan0rZOTYIcOlIdg8BkJMjtV1ye8v4Wap2EkvSKkMBMUMMuNCqFRdifFVmpdXrZXjERs5QVHjSXCmuLpGUbMfYykxO5Cmqx9FqutxLHxAu6iqBJ9IrOnKogGlTo-grFuJMxZpfA_yR1qsjZUBaFq-40qTVhkuSfIh6IMVCqUgChq1vgRQ-zp49yKlWqjhBUEq6hu6XMTv-LlG6f9M79c"
                  onClick={() => onInspect({
                    id: 'forest-velvet-agbada',
                    title: 'Forest Velvet Agbada',
                    subtitle: 'Crushed forest velvet with ceremonial raven staff',
                    price: '₦4,750,000',
                    numericPrice: 4750000,
                    category: 'agbada',
                    lookCode: 'Look 14 • Haute Regalia',
                    badge: 'Couture Statement',
                    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAuI5cJvTI3uA5uT2zAy06nXhDX9wZtbntf8fPv3zmDvUvy3djan0rZOTYIcOlIdg8BkJMjtV1ye8v4Wap2EkvSKkMBMUMMuNCqFRdifFVmpdXrZXjERs5QVHjSXCmuLpGUbMfYykxO5Cmqx9FqutxLHxAu6iqBJ9IrOnKogGlTo-grFuJMxZpfA_yR1qsjZUBaFq-40qTVhkuSfIh6IMVCqUgChq1vgRQ-zp49yKlWqjhBUEq6hu6XMTv-LlG6f9M79c',
                    alt: 'Forest Green Velvet Agbada with raven staff',
                    description: 'Heavyweight crushed forest velvet hand-stitched with silver crystal beads, paired with the sculpted ceremonial raven crest staff. Tailored for state gala appearances.',
                    details: [
                      'Lustrous crushed deep emerald forest velvet with liquid drape',
                      'Silver filigree threadwork around high standing neckline',
                      'Cast-bronze and obsidian ceremonial raven scepter'
                    ],
                    provenance: 'Victoria Island Master Workshop',
                    artisanHours: 110,
                    materials: ['Crushed Velvet', 'Silver Thread', 'Raven Staff'],
                    silhouettes: ['Grand Agbada'],
                    inStock: true,
                    limitedEdition: true
                  })}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute top-3 right-3 bg-[#112520] px-2.5 py-1 text-[#ffdd9f] text-[10px] tracking-[0.22em] uppercase font-semibold border border-[rgba(229,192,123,0.3)]">
                  Couture Statement
                </div>
              </div>
              <div className="p-4 sm:p-5 flex flex-col gap-2">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-serif text-[20px] sm:text-[22px] text-[#e5e2e1] uppercase tracking-wide">
                    Forest Velvet Agbada
                  </h3>
                  <span className="text-[14px] text-[#ffdd9f] tracking-wider font-mono font-semibold">
                    ₦4,750,000
                  </span>
                </div>
                <p className="text-[13px] text-[#d1c5b4] leading-relaxed font-light">
                  Heavyweight crushed forest velvet hand-stitched with silver crystal beads, paired with the sculpted ceremonial raven crest staff. Tailored for state gala appearances.
                </p>
                <div className="pt-2 flex items-center justify-between border-t border-[rgba(255,255,255,0.06)]">
                  <span className="text-[10px] text-[#d1c5b4] uppercase tracking-[0.2em] font-semibold">
                    Handcrafted in Lagos
                  </span>
                  <button
                    onClick={() => onReserve({
                      id: 'forest-velvet-agbada',
                      title: 'Forest Velvet Agbada',
                      subtitle: 'Crushed forest velvet with ceremonial raven staff',
                      price: '₦4,750,000',
                      numericPrice: 4750000,
                      category: 'agbada',
                      lookCode: 'Look 14 • Haute Regalia',
                      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAuI5cJvTI3uA5uT2zAy06nXhDX9wZtbntf8fPv3zmDvUvy3djan0rZOTYIcOlIdg8BkJMjtV1ye8v4Wap2EkvSKkMBMUMMuNCqFRdifFVmpdXrZXjERs5QVHjSXCmuLpGUbMfYykxO5Cmqx9FqutxLHxAu6iqBJ9IrOnKogGlTo-grFuJMxZpfA_yR1qsjZUBaFq-40qTVhkuSfIh6IMVCqUgChq1vgRQ-zp49yKlWqjhBUEq6hu6XMTv-LlG6f9M79c',
                      alt: 'Forest Green Velvet Agbada',
                      description: 'Crushed forest velvet tailored for state appearances.',
                      details: ['Crushed Forest Velvet', 'Raven Staff', 'Silver Filigree'],
                      provenance: 'Victoria Island Atelier',
                      artisanHours: 110,
                      materials: ['Forest Velvet'],
                      silhouettes: ['Grand Agbada'],
                      inStock: true,
                      limitedEdition: true
                    })}
                    className="h-9 px-4 bg-[#ffdd9f] text-[#412d00] text-[10px] uppercase tracking-[0.2em] font-semibold hover:bg-[#f1dfc2] transition-colors cursor-pointer rounded-none shadow-sm active:scale-95"
                  >
                    Commission Look
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Experience D & E — Tradition Reimagined & Craftsmanship Details */}
      <div className="w-full px-4 sm:px-6 md:px-8 py-10 bg-[#131313]">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col mb-6">
            <span className="text-[10px] tracking-[0.25em] text-[#ffdd9f] uppercase font-semibold">
              Tradition Reimagined
            </span>
            <h2 className="font-serif text-[24px] sm:text-[28px] uppercase text-[#e5e2e1] tracking-wide mt-1">
              Sculpted Regalia &amp; Details
            </h2>
            <p className="text-[13px] text-[#d1c5b4] mt-1 font-light">
              High-density metallic embroidery, coral bead geometry, and hand-carved insignia.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* Sub-feature 1: Lion Head Embellished Obsidian Regalia */}
            <div className="bg-[#201f1f] flex flex-col sm:flex-row overflow-hidden border border-[rgba(229,192,123,0.2)]">
              <div className="relative w-full aspect-[4/5] sm:w-1/2 overflow-hidden group bg-[#0A231C]">
                <img
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 cursor-pointer"
                  alt="Lion Head Embellished Obsidian Regalia worn with royal Igbo okpu cap and embroidered ostrich feather fan"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDifet588Jdq_HkzZyQim_EV1uSzWGjM5flRi3upu72iIV8p7K9Rc_AmW1Amt5kKFHrQGYe0DX5JkmXUv-tYyJ-zutuHhzTirNeUjXAz5Jwpq5kFFKDDhwoKn2XMYhbuumUHWKOGX4496xSSLLeDaZMYVvtzZrFTHItsQn9rnOXcI_gUgmyRMuiK8OoeK7QiiqWdO2CV6_SEX7vR6kVhQ1bCjYlvtm5mQEzmAfH-EY4Z8sDP6v--eeMBI0BoV_QZduvHdI"
                  onClick={() => onInspect({
                    id: 'lion-crest-obsidian-tunic',
                    title: 'Lion Crest Obsidian Tunic',
                    subtitle: 'Gold thread lion head embroidered raw silk',
                    price: '₦3,950,000',
                    numericPrice: 3950000,
                    category: 'isiagu',
                    lookCode: 'Look 05 • Bespoke Motif',
                    badge: 'Bespoke Motif',
                    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDifet588Jdq_HkzZyQim_EV1uSzWGjM5flRi3upu72iIV8p7K9Rc_AmW1Amt5kKFHrQGYe0DX5JkmXUv-tYyJ-zutuHhzTirNeUjXAz5Jwpq5kFFKDDhwoKn2XMYhbuumUHWKOGX4496xSSLLeDaZMYVvtzZrFTHItsQn9rnOXcI_gUgmyRMuiK8OoeK7QiiqWdO2CV6_SEX7vR6kVhQ1bCjYlvtm5mQEzmAfH-EY4Z8sDP6v--eeMBI0BoV_QZduvHdI',
                    alt: 'Lion Head Embellished Obsidian Regalia',
                    description: 'Featuring an intricate gold thread lion head centerpiece embroidered over obsidian raw silk. Complete with hand-beaded ebony beads and personalized ceremonial fan.',
                    details: ['Obsidian raw silk sloper', '3D gold wire lion emblem', 'Hand-beaded ebony beads'],
                    provenance: 'Enugu & Lagos Atelier',
                    artisanHours: 95,
                    materials: ['Raw Silk', 'Gold Wire', 'Ebony Beads'],
                    silhouettes: ['Isiagu Tunic'],
                    inStock: true,
                    limitedEdition: false
                  })}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#201f1f] via-transparent to-transparent pointer-events-none"></div>
              </div>
              <div className="p-4 sm:p-6 flex flex-col justify-between flex-1">
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] text-[#ffdd9f] tracking-[0.22em] uppercase font-semibold">
                    Bespoke Motif
                  </span>
                  <h3 className="font-serif text-[20px] sm:text-[22px] uppercase text-[#e5e2e1]">
                    Lion Crest Obsidian Tunic
                  </h3>
                  <p className="text-[13px] text-[#d1c5b4] leading-relaxed font-light mt-1">
                    Featuring an intricate gold thread lion head centerpiece embroidered over obsidian raw silk. Complete with hand-beaded ebony beads and personalized ceremonial fan.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[rgba(255,255,255,0.08)] flex items-center justify-between">
                  <span className="font-serif text-[20px] sm:text-[22px] text-[#ffdd9f] font-mono">
                    ₦3,950,000
                  </span>
                  <button
                    onClick={() => onReserve({
                      id: 'lion-crest-obsidian-tunic',
                      title: 'Lion Crest Obsidian Tunic',
                      subtitle: 'Gold thread lion head embroidered raw silk',
                      price: '₦3,950,000',
                      numericPrice: 3950000,
                      category: 'isiagu',
                      lookCode: 'Look 05 • Bespoke Motif',
                      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDifet588Jdq_HkzZyQim_EV1uSzWGjM5flRi3upu72iIV8p7K9Rc_AmW1Amt5kKFHrQGYe0DX5JkmXUv-tYyJ-zutuHhzTirNeUjXAz5Jwpq5kFFKDDhwoKn2XMYhbuumUHWKOGX4496xSSLLeDaZMYVvtzZrFTHItsQn9rnOXcI_gUgmyRMuiK8OoeK7QiiqWdO2CV6_SEX7vR6kVhQ1bCjYlvtm5mQEzmAfH-EY4Z8sDP6v--eeMBI0BoV_QZduvHdI',
                      alt: 'Lion Crest Obsidian Tunic',
                      description: 'Lion motif embroidered raw silk with ebony beads.',
                      details: ['Raw Obsidian Silk', '24k Gold Wire', 'Ebony Beads'],
                      provenance: 'Lagos Atelier',
                      artisanHours: 95,
                      materials: ['Raw Silk', 'Gold Wire'],
                      silhouettes: ['Isiagu Tunic'],
                      inStock: true,
                      limitedEdition: false
                    })}
                    className="text-[10px] uppercase tracking-[0.2em] px-3.5 py-1.5 bg-[#2a2a2a] hover:bg-[#ffdd9f] hover:text-[#412d00] transition-all text-[#e5e2e1] font-semibold cursor-pointer rounded-none border border-[rgba(255,255,255,0.06)]"
                  >
                    Book Fitting
                  </button>
                </div>
              </div>
            </div>

            {/* Sub-feature 2: Gold Brocade Royal Couple */}
            <div className="bg-[#201f1f] flex flex-col sm:flex-row overflow-hidden border border-[rgba(229,192,123,0.2)]">
              <div className="relative w-full aspect-[4/5] sm:w-1/2 overflow-hidden group bg-[#0A231C]">
                <img
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 cursor-pointer"
                  alt="Gold Brocade Royal Couple in glistening golden structured capelet gown and regal chocolate damask tunic"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFOBy-0iyK1s7eiCyILN765QEwjK0tZP77cLC9yl_ripCQFkE80qCtDbgN0ZfGzMdmnEpW9MyzYJ_--pM2SAG9Bf-1wOhq8rXzfG5BqQLLPqHpv4IJeGxrBbCJdxx2bXzlWGJVwcObGkGcjb4_nfT4FfS-AjnoDliSQXmbR2cSvfTa9Ib2RyvN3ZYX9Rrc9BBYqSEqVMQgN8BhhnKdE9YokUR8innE7Rzsa0gNxCF6AbK3qXjoqkiXqDNd3uXfAuXv64E"
                  onClick={() => onInspect({
                    id: 'gilded-brocade-court',
                    title: 'Gilded Brocade Court',
                    subtitle: 'Metallic floral lace and chocolate satin tunic',
                    price: '₦7,200,000 Pair',
                    numericPrice: 7200000,
                    category: 'nuptials',
                    lookCode: 'Look 19 • Haute Couple Edit',
                    badge: 'Haute Couple Edit',
                    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFOBy-0iyK1s7eiCyILN765QEwjK0tZP77cLC9yl_ripCQFkE80qCtDbgN0ZfGzMdmnEpW9MyzYJ_--pM2SAG9Bf-1wOhq8rXzfG5BqQLLPqHpv4IJeGxrBbCJdxx2bXzlWGJVwcObGkGcjb4_nfT4FfS-AjnoDliSQXmbR2cSvfTa9Ib2RyvN3ZYX9Rrc9BBYqSEqVMQgN8BhhnKdE9YokUR8innE7Rzsa0gNxCF6AbK3qXjoqkiXqDNd3uXfAuXv64E',
                    alt: 'Gilded Brocade Court Couple',
                    description: 'Glistening metallic floral lace and structural shoulder architectural folds paired with chocolate satin tunic adorned with gilded feline crest.',
                    details: ['French gilded floral brocade', 'Chocolate satin tunic', 'Layered gold tassel sash'],
                    provenance: 'Victoria Island & London Mayfair Salon',
                    artisanHours: 180,
                    materials: ['Floral Brocade', 'Chocolate Satin'],
                    silhouettes: ['Couple Ensemble'],
                    inStock: true,
                    limitedEdition: true
                  })}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#201f1f] via-transparent to-transparent pointer-events-none"></div>
              </div>
              <div className="p-4 sm:p-6 flex flex-col justify-between flex-1">
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] text-[#ffdd9f] tracking-[0.22em] uppercase font-semibold">
                    Haute Couple Edit
                  </span>
                  <h3 className="font-serif text-[20px] sm:text-[22px] uppercase text-[#e5e2e1]">
                    Gilded Brocade Court
                  </h3>
                  <p className="text-[13px] text-[#d1c5b4] leading-relaxed font-light mt-1">
                    Glistening metallic floral lace and structural shoulder architectural folds paired with chocolate satin tunic adorned with gilded feline crest.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[rgba(255,255,255,0.08)] flex items-center justify-between">
                  <span className="font-serif text-[20px] sm:text-[22px] text-[#ffdd9f] font-mono">
                    ₦7,200,000 Pair
                  </span>
                  <button
                    onClick={() => onReserve({
                      id: 'gilded-brocade-court',
                      title: 'Gilded Brocade Court Ensemble',
                      subtitle: 'Metallic floral lace and chocolate satin tunic',
                      price: '₦7,200,000 Pair',
                      numericPrice: 7200000,
                      category: 'nuptials',
                      lookCode: 'Look 19 • Haute Couple Edit',
                      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFOBy-0iyK1s7eiCyILN765QEwjK0tZP77cLC9yl_ripCQFkE80qCtDbgN0ZfGzMdmnEpW9MyzYJ_--pM2SAG9Bf-1wOhq8rXzfG5BqQLLPqHpv4IJeGxrBbCJdxx2bXzlWGJVwcObGkGcjb4_nfT4FfS-AjnoDliSQXmbR2cSvfTa9Ib2RyvN3ZYX9Rrc9BBYqSEqVMQgN8BhhnKdE9YokUR8innE7Rzsa0gNxCF6AbK3qXjoqkiXqDNd3uXfAuXv64E',
                      alt: 'Gilded Brocade Court Couple',
                      description: 'Dual coronation commission with floral brocade.',
                      details: ['Gilded Brocade', 'Chocolate Satin'],
                      provenance: 'Mayfair & Lagos Atelier',
                      artisanHours: 180,
                      materials: ['Floral Brocade', 'Silk Satin'],
                      silhouettes: ['Couple Ensemble'],
                      inStock: true,
                      limitedEdition: true
                    })}
                    className="text-[10px] uppercase tracking-[0.2em] px-3.5 py-1.5 bg-[#2a2a2a] hover:bg-[#ffdd9f] hover:text-[#412d00] transition-all text-[#e5e2e1] font-semibold cursor-pointer rounded-none border border-[rgba(255,255,255,0.06)]"
                  >
                    Request Pair
                  </button>
                </div>
              </div>
            </div>

            {/* Sub-feature 3: Architectural Crimson Capelet Back Profile */}
            <div className="bg-[#201f1f] flex flex-col sm:flex-row overflow-hidden border border-[rgba(229,192,123,0.2)]">
              <div className="relative w-full aspect-[4/5] sm:w-1/2 overflow-hidden group bg-[#0A231C]">
                <img
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 cursor-pointer"
                  alt="Rear architectural profile of sculpted red capelet regalia with cowrie cap and sovereign cane"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3fFtruxL6saMNSJlDgqD5m5EjvsUeYRpyR2TutumycwmkwEmnJQvlKDTW8ax-B-ZaqaalYmXX03szFfTikKOSlP6s7klR5jvuHaMJaSzykBc6ZciSU2V5BrOOlJIY-ofSekZVxWu4_b9AV9vcN2Hc_j06nMlMXAulZNSXTMqcVHBuHM_GYuWEfIzXY6YFkE0qIvUe4-5djp1muFvC6JbdRoLY1dRJs35WSXDl9G9SBL-bibyh3H9viLj21W7I1cHGDWo"
                  onClick={() => onInspect({
                    id: 'crimson-capelet-regalia',
                    title: 'Crimson Capelet Regalia',
                    subtitle: 'Geometric square shoulder profile in structural silk',
                    price: '₦4,400,000',
                    numericPrice: 4400000,
                    category: 'capes',
                    lookCode: 'Look 11 • Drape Study',
                    badge: 'Architectural Drape',
                    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3fFtruxL6saMNSJlDgqD5m5EjvsUeYRpyR2TutumycwmkwEmnJQvlKDTW8ax-B-ZaqaalYmXX03szFfTikKOSlP6s7klR5jvuHaMJaSzykBc6ZciSU2V5BrOOlJIY-ofSekZVxWu4_b9AV9vcN2Hc_j06nMlMXAulZNSXTMqcVHBuHM_GYuWEfIzXY6YFkE0qIvUe4-5djp1muFvC6JbdRoLY1dRJs35WSXDl9G9SBL-bibyh3H9viLj21W7I1cHGDWo',
                    alt: 'Crimson Capelet Regalia',
                    description: 'Geometric square shoulder profile tailored in structural silk faille, draped to perfection to create dramatic presence upon entering any ceremonial hall.',
                    details: ['Square cantilever shoulder line', 'Floor-skimming back drape', 'Fluid gold Habotai silk lining'],
                    provenance: 'Savile Row & Lagos Atelier Team',
                    artisanHours: 85,
                    materials: ['Silk Faille', 'Habotai Silk', 'Savile Row Canvas'],
                    silhouettes: ['Square-Shoulder Capelet'],
                    inStock: true,
                    limitedEdition: false
                  })}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#201f1f] via-transparent to-transparent pointer-events-none"></div>
              </div>
              <div className="p-4 sm:p-6 flex flex-col justify-between flex-1">
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] text-[#ffdd9f] tracking-[0.22em] uppercase font-semibold">
                    Architectural Drape
                  </span>
                  <h3 className="font-serif text-[20px] sm:text-[22px] uppercase text-[#e5e2e1]">
                    Crimson Capelet Regalia
                  </h3>
                  <p className="text-[13px] text-[#d1c5b4] leading-relaxed font-light mt-1">
                    Geometric square shoulder profile tailored in structural silk faille, draped to perfection to create dramatic presence upon entering any ceremonial hall.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[rgba(255,255,255,0.08)] flex items-center justify-between">
                  <span className="font-serif text-[20px] sm:text-[22px] text-[#ffdd9f] font-mono">
                    ₦4,400,000
                  </span>
                  <button
                    onClick={() => onReserve({
                      id: 'crimson-capelet-regalia',
                      title: 'Crimson Capelet Regalia',
                      subtitle: 'Geometric square shoulder profile in structural silk',
                      price: '₦4,400,000',
                      numericPrice: 4400000,
                      category: 'capes',
                      lookCode: 'Look 11 • Drape Study',
                      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3fFtruxL6saMNSJlDgqD5m5EjvsUeYRpyR2TutumycwmkwEmnJQvlKDTW8ax-B-ZaqaalYmXX03szFfTikKOSlP6s7klR5jvuHaMJaSzykBc6ZciSU2V5BrOOlJIY-ofSekZVxWu4_b9AV9vcN2Hc_j06nMlMXAulZNSXTMqcVHBuHM_GYuWEfIzXY6YFkE0qIvUe4-5djp1muFvC6JbdRoLY1dRJs35WSXDl9G9SBL-bibyh3H9viLj21W7I1cHGDWo',
                      alt: 'Crimson Capelet Regalia',
                      description: 'Square shoulder drape tailored in structural silk faille.',
                      details: ['Silk Faille', 'Habotai Silk Lining'],
                      provenance: 'Lagos Atelier',
                      artisanHours: 85,
                      materials: ['Silk Faille'],
                      silhouettes: ['Capelet'],
                      inStock: true,
                      limitedEdition: false
                    })}
                    className="text-[10px] uppercase tracking-[0.2em] px-3.5 py-1.5 bg-[#2a2a2a] hover:bg-[#ffdd9f] hover:text-[#412d00] transition-all text-[#e5e2e1] font-semibold cursor-pointer rounded-none border border-[rgba(255,255,255,0.06)]"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Interactive Category Matrix with Authentic Client Work */}
      <div className="w-full px-4 sm:px-6 md:px-8 py-10 bg-[#0e0e0e]">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col mb-6">
            <span className="text-[10px] tracking-[0.25em] text-[#ffdd9f] uppercase font-semibold">
              Bespoke Divisions
            </span>
            <h2 className="font-serif text-[24px] sm:text-[28px] uppercase text-[#e5e2e1] tracking-wide mt-1">
              Couture Categories
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {/* Panel 1: Ready-To-Wear (Modern Red Blazer) */}
            <div
              onClick={() => {
                onSelectCategoryFilter?.('ready-to-wear');
                onNavigate('ascent');
              }}
              className="group flex flex-col bg-[#112520] shadow-md overflow-hidden relative aspect-[3/4] border border-[rgba(229,192,123,0.2)] cursor-pointer"
            >
              <img
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 opacity-90"
                alt="Modern tailored double-breasted red blazer with gold button accents on luxury architectural colonnade"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuATSBRqEQkJ6gj45vsgaltkmjW6u6I6jyosf42uLRnloRxfakBary0D4aP8Q0xFZYsU2IkKzaZ8SITdATc29gAOw6wB4TK7f21VvV7jInsSSQn5By5pO1uFtyuJ9khdhWLc_IBTErWLWfVb3QKBriDevTmJ-rI1mNtab4NI5ZBOZSR_S2LC-U7xow_JIlKtuBPGzLBcI4yzFKMzk4tCKoDSgyildzWRJiulAtcOsOHFcxRzlIeKSL3ojxPUkVr2GE6kkWg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-[#0E0E0E]/40 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 flex flex-col justify-end">
                <span className="text-[10px] text-[#ffdd9f] tracking-[0.22em] uppercase font-semibold">
                  Collection 01
                </span>
                <span className="font-serif text-[15px] sm:text-[18px] text-[#e5e2e1] uppercase leading-snug mt-0.5">
                  Ready-To-Wear
                </span>
                <span className="text-[10px] text-[#d1c5b4] uppercase tracking-wider mt-1 flex items-center gap-1 group-hover:text-[#ffdd9f] transition-colors">
                  Blazers &amp; Suits • From ₦1,750,000 <span className="material-symbols-outlined text-[12px]">chevron_right</span>
                </span>
              </div>
            </div>

            {/* Panel 2: Traditional Couture (Imperial Lion Tunics) */}
            <div
              onClick={() => {
                onSelectCategoryFilter?.('isiagu');
                onNavigate('ascent');
              }}
              className="group flex flex-col bg-[#112520] shadow-md overflow-hidden relative aspect-[3/4] border border-[rgba(229,192,123,0.2)] cursor-pointer"
            >
              <img
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 opacity-90"
                alt="Traditional Couture: Red Lion pattern Isiagu tunic with beaded necklaces and ceremonial feather cap"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCF0_wXtw_t7sjVs_v435AeOhj0voQCezAYMPZ70DzqMN9l1UvEHIapMYFBrkQwAcKaxjupB7ivaf_hQLXqZn4-sFaKpegq7ywTLHTyHgkbfTN3F3LHiPkEK_2oQv9LA1qA19QOYnuXdaYWn82mt2OuGnzcppQxyYWQhoJmO20nw2nAnnJn15eupnxBzk7GYcPqwPhRKsGF09qb7grUDjC3epTfuj01AU6_WJ4BWKl3Z2Br2hrcC9ffq52cFTrfKLJB0ws"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-[#0E0E0E]/40 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 flex flex-col justify-end">
                <span className="text-[10px] text-[#ffdd9f] tracking-[0.22em] uppercase font-semibold">
                  Collection 02
                </span>
                <span className="font-serif text-[15px] sm:text-[18px] text-[#e5e2e1] uppercase leading-snug mt-0.5">
                  Traditional Couture
                </span>
                <span className="text-[10px] text-[#d1c5b4] uppercase tracking-wider mt-1 flex items-center gap-1 group-hover:text-[#ffdd9f] transition-colors">
                  Isiagu &amp; Regalia • From ₦2,800,000 <span className="material-symbols-outlined text-[12px]">chevron_right</span>
                </span>
              </div>
            </div>

            {/* Panel 3: Bespoke Tailoring (Wine Velvet Ensemble) */}
            <div
              onClick={() => onNavigate('bespoke')}
              className="group flex flex-col bg-[#112520] shadow-md overflow-hidden relative aspect-[3/4] border border-[rgba(229,192,123,0.2)] cursor-pointer"
            >
              <img
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 opacity-90"
                alt="Bespoke service: Seated sovereign in deep wine velvet embroidered ceremonial robe and matching cap with staff"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXHesWDf5PhdQ2b-B-V2i2tziyWBuiZtLMaQqenwNePQbH8_RjTdN7T8SVQCW9hFQ42vbMT3GmXStnB-BZMMMOZLaqu1-r5RX09f1B_KQbRRk0uzOkv1R80HeKF70F2ggSCTFFpkMBAZLS96ch1e4aNAFXA2qkkdcQ3nwad7N5kHgG_g1G2CAx6Lqev7icZmoUVPjrPRD380NyQN90gANIEUchMdUdzYLS9B5cr8GsesNe1SuSe7TmeGJn6FS7tpPgp5I"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-[#0E0E0E]/40 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 flex flex-col justify-end">
                <span className="text-[10px] text-[#ffdd9f] tracking-[0.22em] uppercase font-semibold">
                  Private Service
                </span>
                <span className="font-serif text-[15px] sm:text-[18px] text-[#e5e2e1] uppercase leading-snug mt-0.5">
                  Custom / Bespoke
                </span>
                <span className="text-[10px] text-[#d1c5b4] uppercase tracking-wider mt-1 flex items-center gap-1 group-hover:text-[#ffdd9f] transition-colors">
                  Fittings • Direct Master <span className="material-symbols-outlined text-[12px]">chevron_right</span>
                </span>
              </div>
            </div>

            {/* Panel 4: Artisanal Accessories & Accents */}
            <div
              onClick={() => {
                onSelectCategoryFilter?.('artifacts');
                onNavigate('ascent');
              }}
              className="group flex flex-col bg-[#112520] shadow-md overflow-hidden relative aspect-[3/4] border border-[rgba(229,192,123,0.2)] cursor-pointer"
            >
              <img
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 opacity-90"
                alt="Traditional accents: Hand-carved ceremonial ebony staff, cowrie-lined red cap and coral beaded jewelry"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVaZTO8dVSLXZhiTdpsxXyorkSq2TUwyzmbYqgmhx7WR2b2RX-pk8w9TZh2J9iu4dHRxmuxSqqC6qx1as7hkGUOltmeqYYrCTiVQZ7FJU_xZ4i9O6Qzp0kHNA4qcjMkIeiOVpJUlA-Gh0xiB5eCNJw6RMUGLMpJyZ95iVtpt1J5nErbx_ELCMZi_cd_1gEW_cWh16mGumsQQO8S-aJ58jN5hFoU4hpLd1RNqxhDs40iWWBehps3x_Vvk1_UmpCQpLvBZE"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-[#0E0E0E]/40 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 flex flex-col justify-end">
                <span className="text-[10px] text-[#ffdd9f] tracking-[0.22em] uppercase font-semibold">
                  Artifacts
                </span>
                <span className="font-serif text-[15px] sm:text-[18px] text-[#e5e2e1] uppercase leading-snug mt-0.5">
                  Regalia &amp; Accents
                </span>
                <span className="text-[10px] text-[#d1c5b4] uppercase tracking-wider mt-1 flex items-center gap-1 group-hover:text-[#ffdd9f] transition-colors">
                  Staffs &amp; Coral • From ₦650,000 <span className="material-symbols-outlined text-[12px]">chevron_right</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. The Richyonce Atelier Pillars (The Sovereign Code) */}
      <div className="w-full px-4 sm:px-6 md:px-8 py-10 bg-[#1c1b1b] flex flex-col gap-4 border-b border-[rgba(229,192,123,0.15)]">
        <div className="max-w-4xl mx-auto w-full">
          <div className="flex items-center gap-2 text-[#ffdd9f] mb-4">
            <span className="material-symbols-outlined text-[20px]">diamond</span>
            <span className="text-[10px] tracking-[0.25em] uppercase font-semibold">
              The Sovereign Code
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-4 bg-[#201f1f] flex gap-3 items-start border border-[rgba(255,255,255,0.06)]">
              <div className="w-9 h-9 bg-[#2a2a2a] flex items-center justify-center text-[#ffdd9f] flex-shrink-0">
                <span className="material-symbols-outlined text-[20px]">straighten</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] text-[#e5e2e1] uppercase font-bold tracking-wider">
                  Anatomical Drape Profile
                </span>
                <span className="text-[12px] text-[#d1c5b4] mt-1 font-light leading-relaxed">
                  Every garment is drafted specifically to your anatomical posture metrics for effortless majesty.
                </span>
              </div>
            </div>

            <div className="p-4 bg-[#201f1f] flex gap-3 items-start border border-[rgba(255,255,255,0.06)]">
              <div className="w-9 h-9 bg-[#2a2a2a] flex items-center justify-center text-[#ffdd9f] flex-shrink-0">
                <span className="material-symbols-outlined text-[20px]">brush</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] text-[#e5e2e1] uppercase font-bold tracking-wider">
                  Authentic Artisanal Embroidery
                </span>
                <span className="text-[12px] text-[#d1c5b4] mt-1 font-light leading-relaxed">
                  Intricate metallic threadwork and bead embroidery requiring up to 140 artisan hours per ceremonial piece.
                </span>
              </div>
            </div>

            <div className="p-4 bg-[#201f1f] flex gap-3 items-start border border-[rgba(255,255,255,0.06)]">
              <div className="w-9 h-9 bg-[#2a2a2a] flex items-center justify-center text-[#ffdd9f] flex-shrink-0">
                <span className="material-symbols-outlined text-[20px]">flight_takeoff</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] text-[#e5e2e1] uppercase font-bold tracking-wider">
                  White-Glove Courier Doorstep
                </span>
                <span className="text-[12px] text-[#d1c5b4] mt-1 font-light leading-relaxed">
                  Dispatched directly from Victoria Island to London, New York, Dubai, or Johannesburg in hand-crafted cases.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5B. NEW: Atelier Studio Gallery — Inside the Sanctuary of Sovereign Craft */}
      <div className="w-full px-4 sm:px-6 md:px-8 py-12 bg-[#0e0e0e] border-b border-[rgba(229,192,123,0.2)]">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-none bg-[#ffdd9f]"></span>
                <span className="text-[10px] tracking-[0.25em] text-[#ffdd9f] uppercase font-semibold">
                  Behind the Velvet Curtain • Atelier Studio
                </span>
              </div>
              <h2 className="font-serif text-[26px] sm:text-[34px] uppercase text-[#e5e2e1] tracking-wide mt-1.5 leading-tight">
                The Sanctuary of Sovereign Craft
              </h2>
              <p className="text-[13px] sm:text-[14px] text-[#d1c5b4] mt-2 font-light leading-relaxed max-w-xl">
                A documentary lens into our Victoria Island master workshop and heritage weaving rooms. Where ancestral Nigerian metallurgical needlecraft meets bespoke Savile Row architectural tailoring.
              </p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={() => onNavigate('track')}
                className="px-3.5 py-2 bg-[#1c1b1b] hover:bg-[#2a2a2a] text-[#ffdd9f] text-[10px] uppercase font-semibold tracking-wider transition-all border border-[rgba(229,192,123,0.25)] flex items-center gap-1.5 cursor-pointer"
              >
                <span>Live Artisan Tracker</span>
                <span className="material-symbols-outlined text-[14px]">schedule</span>
              </button>
            </div>
          </div>

          {/* Asymmetric Editorial Studio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Primary Feature 1: Master Tailor Chalking Velvet (7 Cols) */}
            <div className="md:col-span-7 bg-[#1c1b1b] border border-[rgba(229,192,123,0.25)] overflow-hidden group shadow-2xl flex flex-col justify-between">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0A231C]">
                <img
                  src="/src/assets/images/atelier_master_tailor_chalking_1794040408497.jpg"
                  alt="Master African tailor in a dark moody Lagos atelier hand-chalking architectural drape lines onto emerald velvet with brass shears and coral beads"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1b1b] via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute top-3 left-3 bg-[#0e0e0e]/90 backdrop-blur-md px-2.5 py-1 text-[#ffdd9f] text-[10px] uppercase tracking-[0.2em] font-semibold border border-[rgba(229,192,123,0.3)]">
                  Phase 01 • Drape Drafting
                </div>
                <div className="absolute bottom-3 right-3 bg-[#0e0e0e]/90 px-3 py-1 text-[#e5e2e1] text-[10px] tracking-wider uppercase font-mono font-medium">
                  Victoria Island • Studio A
                </div>
              </div>
              <div className="p-5 flex flex-col gap-2">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-serif text-[18px] sm:text-[20px] uppercase text-[#ffdd9f] tracking-wide">
                    The Master Sloper &amp; Chalking
                  </h3>
                  <span className="text-[11px] font-mono text-[#d1c5b4]">Hour 01 – 16</span>
                </div>
                <p className="text-[13px] text-[#d1c5b4] leading-relaxed font-light">
                  Translating individualized anatomical posture metrics into bespoke paper slopers. Master tailor Chukwudi hand-chalks dynamic posture lines directly onto 420 GSM crushed velvet before scissors ever touch the grain.
                </p>
                <div className="pt-2 flex items-center justify-between border-t border-[rgba(255,255,255,0.06)] text-[10px] text-[#9a8f80] uppercase tracking-wider">
                  <span>Tools: White Talc Chalk · German Brass Shears</span>
                  <span className="text-[#ffdd9f] font-mono">Zero Waste Patterning</span>
                </div>
              </div>
            </div>

            {/* Feature 2: Exclusive Salon Mannequin (5 Cols) */}
            <div className="md:col-span-5 bg-[#1c1b1b] border border-[rgba(229,192,123,0.25)] overflow-hidden group shadow-2xl flex flex-col justify-between">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#0A231C]">
                <img
                  src="/src/assets/images/atelier_bespoke_salon_mannequin_1794040409563.jpg"
                  alt="Exclusive private haute couture atelier salon in Victoria Island Lagos with tailored regal Agbada on mannequin, dark obsidian walls and warm champagne lighting"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1b1b] via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute top-3 left-3 bg-[#0e0e0e]/90 backdrop-blur-md px-2.5 py-1 text-[#ffdd9f] text-[10px] uppercase tracking-[0.2em] font-semibold border border-[rgba(229,192,123,0.3)]">
                  Phase 04 • Salon Fitting
                </div>
              </div>
              <div className="p-5 flex flex-col gap-2">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-serif text-[18px] uppercase text-[#e5e2e1] tracking-wide">
                    Private Salon Sanctuary
                  </h3>
                  <span className="text-[10px] px-2 py-0.5 bg-[#112520] text-[#ffdd9f] uppercase font-mono">
                    VIP Suite
                  </span>
                </div>
                <p className="text-[13px] text-[#d1c5b4] leading-relaxed font-light">
                  A tranquil private salon overlooking Lagos skyline where sovereigns undergo three milestone fittings: canvas basting, shoulder pitch verification, and coronation final drape.
                </p>
                <div className="pt-2 border-t border-[rgba(255,255,255,0.06)] flex items-center justify-between">
                  <span className="text-[10px] text-[#d1c5b4] uppercase tracking-wider">Victoria Island Flagship</span>
                  <button
                    onClick={() => onNavigate('bespoke')}
                    className="text-[10px] text-[#ffdd9f] uppercase tracking-wider font-semibold underline underline-offset-4 hover:text-white"
                  >
                    Reserve Salon
                  </button>
                </div>
              </div>
            </div>

            {/* Feature 3: Macro Gold Bullion Wire Couching (6 Cols) */}
            <div className="md:col-span-6 bg-[#1c1b1b] border border-[rgba(229,192,123,0.25)] overflow-hidden group shadow-2xl flex flex-col justify-between">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0A231C]">
                <img
                  src="/src/assets/images/atelier_gold_bullion_embroidery_1794040409338.jpg"
                  alt="Macro photograph of artisan hands intricately couching 24k metallic gold bullion wire thread onto crimson silk faille with coral bead geometry"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1b1b] via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute top-3 left-3 bg-[#0e0e0e]/90 backdrop-blur-md px-2.5 py-1 text-[#ffdd9f] text-[10px] uppercase tracking-[0.2em] font-semibold border border-[rgba(229,192,123,0.3)]">
                  Phase 02 • Gold Couching
                </div>
                <div className="absolute bottom-3 right-3 bg-[#0e0e0e]/90 px-3 py-1 text-[#ffdd9f] text-[10px] tracking-wider uppercase font-mono">
                  140 Hand-Stitched Hours
                </div>
              </div>
              <div className="p-5 flex flex-col gap-2">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-serif text-[18px] uppercase text-[#ffdd9f] tracking-wide">
                    24K Gold Wire &amp; Edo Coral
                  </h3>
                  <span className="text-[11px] font-mono text-[#d1c5b4]">Hour 32 – 140</span>
                </div>
                <p className="text-[13px] text-[#d1c5b4] leading-relaxed font-light">
                  Micro-precision hand-needlework anchoring flexible 24k gold bullion coil over heavy silk faille. Every geometric apex is punctuated with authentic cylindrical Edo coral beads and cowrie shell accents.
                </p>
                <div className="pt-2 flex items-center justify-between border-t border-[rgba(255,255,255,0.06)] text-[10px] text-[#9a8f80] uppercase tracking-wider">
                  <span>Guild: Benin Coral &amp; Gold Needleworkers</span>
                  <span className="text-[#ffdd9f]">Certified Heirlooms</span>
                </div>
              </div>
            </div>

            {/* Feature 4: Traditional Wooden Loom Silk Weaving (6 Cols) */}
            <div className="md:col-span-6 bg-[#1c1b1b] border border-[rgba(229,192,123,0.25)] overflow-hidden group shadow-2xl flex flex-col justify-between">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0A231C]">
                <img
                  src="/src/assets/images/atelier_loom_weaving_silk_1794040409663.jpg"
                  alt="Master artisan operating traditional African hand loom weaving vibrant emerald and gold Aso-Oke silk threads under cinematic sunlight rays"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1b1b] via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute top-3 left-3 bg-[#0e0e0e]/90 backdrop-blur-md px-2.5 py-1 text-[#ffdd9f] text-[10px] uppercase tracking-[0.2em] font-semibold border border-[rgba(229,192,123,0.3)]">
                  Phase 03 • Heritage Looms
                </div>
                <div className="absolute bottom-3 right-3 bg-[#0e0e0e]/90 px-3 py-1 text-[#e5e2e1] text-[10px] tracking-wider uppercase font-mono font-medium">
                  Aso-Oke Master Guild
                </div>
              </div>
              <div className="p-5 flex flex-col gap-2">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-serif text-[18px] uppercase text-[#e5e2e1] tracking-wide">
                    Hand-Loomed Silk &amp; Weft
                  </h3>
                  <span className="text-[11px] font-mono text-[#d1c5b4]">Hour 16 – 48</span>
                </div>
                <p className="text-[13px] text-[#d1c5b4] leading-relaxed font-light">
                  Raw mulberry silk and metallic gold yarns woven on heritage wooden horizontal treadle looms in custom 420 GSM weights, creating an architectural stiffness that drapes effortlessly across broad shoulders.
                </p>
                <div className="pt-2 flex items-center justify-between border-t border-[rgba(255,255,255,0.06)] text-[10px] text-[#9a8f80] uppercase tracking-wider">
                  <span>Material: 100% Raw Mulberry Silk &amp; Lurex</span>
                  <span className="text-[#ffdd9f]">Oyo State Heritage</span>
                </div>
              </div>
            </div>
          </div>

          {/* Atelier Workshop Footnote & CTA */}
          <div className="mt-8 p-5 bg-[#112520] border border-[rgba(229,192,123,0.3)] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#e5c07b] text-[#412d00] flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-[20px]">construction</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] text-[#e5e2e1] uppercase font-bold tracking-wider">
                  Commission an Atelier Piece
                </span>
                <span className="text-[12px] text-[#d1c5b4] font-light">
                  Select your silhouette, textile, and embroidery motif for an individualized master fitting.
                </span>
              </div>
            </div>

            <button
              onClick={() => onNavigate('bespoke')}
              className="px-6 py-2.5 bg-[#e5c07b] text-[#412d00] hover:bg-[#f1dfc2] text-[10px] uppercase font-bold tracking-[0.2em] transition-all cursor-pointer shadow-md active:scale-95 flex-shrink-0"
            >
              Start Custom Drape
            </button>
          </div>
        </div>
      </div>

      {/* 6. Experience G — Final Brand Statement */}
      <div className="w-full px-4 sm:px-6 md:px-8 py-12 bg-[#0A231C] relative overflow-hidden flex flex-col items-center text-center">
        <div className="relative w-full max-w-sm aspect-[4/5] overflow-hidden shadow-2xl mb-4 border border-[rgba(229,192,123,0.3)] group bg-[#0e0e0e]">
          <img
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            alt="Seated Nigerian patron in opulent velvet regalia holding black carved scepter against ambient studio backdrop"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXHesWDf5PhdQ2b-B-V2i2tziyWBuiZtLMaQqenwNePQbH8_RjTdN7T8SVQCW9hFQ42vbMT3GmXStnB-BZMMMOZLaqu1-r5RX09f1B_KQbRRk0uzOkv1R80HeKF70F2ggSCTFFpkMBAZLS96ch1e4aNAFXA2qkkdcQ3nwad7N5kHgG_g1G2CAx6Lqev7icZmoUVPjrPRD380NyQN90gANIEUchMdUdzYLS9B5cr8GsesNe1SuSe7TmeGJn6FS7tpPgp5I"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A231C] via-transparent to-transparent pointer-events-none"></div>
        </div>

        <span className="text-[10px] text-[#ffdd9f] tracking-[0.3em] uppercase font-semibold">
          Manifest Your Crown
        </span>
        <h2 className="font-serif text-[28px] sm:text-[36px] text-[#e5e2e1] uppercase tracking-tight mt-1 font-normal">
          WEAR YOUR PRESENCE.
        </h2>
        <p className="font-serif text-[18px] text-[#ffdd9f] italic mt-1">
          Richyonce — Excellence in Every Stitch.
        </p>
        <p className="text-[13px] text-[#d1c5b4] max-w-sm mt-2 leading-relaxed font-light">
          Crafting heirlooms of African royalty for dignitaries, innovators, and cultural pioneers worldwide.
        </p>

        <button
          onClick={() => onNavigate('bespoke')}
          className="mt-6 px-8 h-12 bg-[#e5c07b] text-[#412d00] font-semibold text-[11px] sm:text-[12px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-[#f1dfc2] transition-all shadow-xl cursor-pointer rounded-none active:scale-95"
        >
          <span>Book Private Atelier</span>
          <span className="material-symbols-outlined text-[18px]">straighten</span>
        </button>
      </div>
    </div>
  );
};
