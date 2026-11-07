import React, { useState } from 'react';
import { BespokeConfig, CommissionOrder } from '../types';
import { FabricLibraryModal, TEXTILE_CATALOG } from './FabricLibraryModal';

interface BespokeAtelierProps {
  onCommissionCreated: (order: CommissionOrder) => void;
  onNavigateToTrack: () => void;
}

export const BespokeAtelier: React.FC<BespokeAtelierProps> = ({
  onCommissionCreated,
  onNavigateToTrack,
}) => {
  const [step, setStep] = useState<number>(1);
  const [unit, setUnit] = useState<'inches' | 'cm'>('inches');
  const [commissionSuccess, setCommissionSuccess] = useState<CommissionOrder | null>(null);
  const [isFabricLibraryOpen, setIsFabricLibraryOpen] = useState<boolean>(false);

  const [config, setConfig] = useState<BespokeConfig>({
    silhouette: 'The Emerald Monarch Agbada Silhouette',
    textile: 'Hand-Loomed Emerald Silk Faille (420 GSM)',
    embroideryMotif: 'Imperial 24k Gold Chevron Threadwork',
    chestBreadth: 42,
    shoulderSpan: 19,
    napeToFloorDrop: 60,
    agbadaWingspan: 72,
    postureType: 'Formal Sovereign',
    unit: 'inches',
    artifacts: ['Ceremonial Raven Crest Staff', 'Handcrafted Edo Coral Beads'],
    appointmentType: 'Private Salon — Victoria Island, Lagos',
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    preferredDate: '',
    specialRequests: '',
  });

  const silhouettes = [
    {
      id: 'The Emerald Monarch Agbada Silhouette',
      title: 'Grand Monarch Agbada',
      desc: 'Architectural shoulder draping with cascading regal wings and matching sculpted Fila cap.',
      basePrice: 5200000,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUEUSiTY50VstAVvbIFEE_8kHJH-tk5kXrJGpBvY3ee8LWtMblMpXh71ZlIYUCo_f07Cxn_Do44RN61vzFp_nPOfcHc1TiG47-4g3l3_RGMslHCkJ96JVTIANRKGi4CKsZI3h5IfrGguBIteo3eKKw0USVR22vlsuo5sJ_PL7RsN5TeHXvd4VW66MvGdq52ufFA3MiTwy7Ws9bJtnKQ0jZmmhJhVchGPOIV0DknXpJURfdx-2E9bWfJNK10wbMdMAUBFc'
    },
    {
      id: 'Architectural Crimson Capelet Regalia',
      title: 'Square-Shoulder Capelet',
      desc: 'Geometric cantilevered shoulders in structural silk faille with floor-sweeping ceremonial presence.',
      basePrice: 4400000,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3fFtruxL6saMNSJlDgqD5m5EjvsUeYRpyR2TutumycwmkwEmnJQvlKDTW8ax-B-ZaqaalYmXX03szFfTikKOSlP6s7klR5jvuHaMJaSzykBc6ZciSU2V5BrOOlJIY-ofSekZVxWu4_b9AV9vcN2Hc_j06nMlMXAulZNSXTMqcVHBuHM_GYuWEfIzXY6YFkE0qIvUe4-5djp1muFvC6JbdRoLY1dRJs35WSXDl9G9SBL-bibyh3H9viLj21W7I1cHGDWo'
    },
    {
      id: 'Lion Crest Obsidian Isiagu Tunic',
      title: 'Obsidian Isiagu Chieftain',
      desc: 'Relaxed sovereign cut with side vent slits and 3D lion head wire embroidery centerpiece.',
      basePrice: 3950000,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDifet588Jdq_HkzZyQim_EV1uSzWGjM5flRi3upu72iIV8p7K9Rc_AmW1Amt5kKFHrQGYe0DX5JkmXUv-tYyJ-zutuHhzTirNeUjXAz5Jwpq5kFFKDDhwoKn2XMYhbuumUHWKOGX4496xSSLLeDaZMYVvtzZrFTHItsQn9rnOXcI_gUgmyRMuiK8OoeK7QiiqWdO2CV6_SEX7vR6kVhQ1bCjYlvtm5mQEzmAfH-EY4Z8sDP6v--eeMBI0BoV_QZduvHdI'
    },
    {
      id: 'The Crimson Dynasty Nuptial Court',
      title: 'Nuptial Court Ensemble (Pair)',
      desc: 'Dual-regalia statement combining bride’s architectural mermaid gown and groom’s sovereign capelet.',
      basePrice: 6300000,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4ZJKqhJCJab2Ceo5SncRkYQaOc3cSacxjq4t4zUXP_g31ztXMjXiz17Ff1USkupexUb0bbgrKHmlXEu-Fq526c-3xolrxL3pv4_Szso5ep_FFk17SyhVZIVy9O8yfRhTca_kt8wAsqS13cJtfcOAehIfHXaXbbVvZ4No6oYCAgjtQ3zF97d3tEYp9IgYeG7eAjGKR9QVEf2xyxUeiQBgx3niywk20m7Cl3OB3jSxdnXDlCRcrl17PFIj6TjO6mAOmVok'
    },
    {
      id: 'Modern Double-Breasted Wool-Silk Blazer',
      title: 'Sovereign Double-Breasted Blazer',
      desc: 'Super 150s wool-silk blend tailored with full horsehair canvas and cast gold crest coin buttons.',
      basePrice: 1750000,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATSBRqEQkJ6gj45vsgaltkmjW6u6I6jyosf42uLRnloRxfakBary0D4aP8Q0xFZYsU2IkKzaZ8SITdATc29gAOw6wB4TK7f21VvV7jInsSSQn5By5pO1uFtyuJ9khdhWLc_IBTErWLWfVb3QKBriDevTmJ-rI1mNtab4NI5ZBOZSR_S2LC-U7xow_JIlKtuBPGzLBcI4yzFKMzk4tCKoDSgyildzWRJiulAtcOsOHFcxRzlIeKSL3ojxPUkVr2GE6kkWg'
    }
  ];

  const textiles = [
    { name: 'Hand-Loomed Emerald Silk Faille (420 GSM)', note: 'Woven on heritage Lagos wooden looms with subtle natural slubs' },
    { name: 'Heavyweight Crushed Italian Forest Velvet', note: 'Deep crushed emerald velvet with liquid drape and high light bounce' },
    { name: 'Obsidian Raw Silk Damask', note: 'Matte black structural silk with subtle jacquard weave' },
    { name: 'Imperial Red Silk Faille (Vegetable Rubia-Dyed)', note: 'Vibrant scarlet tone created with traditional botanical dyes' },
    { name: 'Chocolate Satin & French Gilded Lace Brocade', note: 'Opulent dual-layer metallic floral lace backed in rich chocolate satin' },
  ];

  const motifs = [
    { name: 'Imperial 24k Gold Chevron Threadwork', note: 'Clean geometric lines symbolizing ascending rank and sovereign command' },
    { name: '3D High-Density Lion Head Centerpiece', note: '48,000 stitches of raised metallic wire embodying power and ancestry' },
    { name: 'Silver Crystal Filigree & High Collar Stitch', note: 'Delicate starry metallic motifs with hand-sewn Austrian crystal beads' },
    { name: 'Edo Cowrie Shell & Linear Coral Matrix', note: 'Traditional geometric beadwork signifying divine favor and abundance' },
  ];

  const availableArtifacts = [
    { name: 'Ceremonial Raven Crest Staff', price: '₦1,250,000', note: 'Cast bronze scepter with ebony staff' },
    { name: 'Handcrafted Edo Coral Beads', price: '₦950,000', note: 'Certified authentic cylindrical raw coral beads' },
    { name: 'Hand-Carved Okpu Agbidi Cap', price: '₦620,000', note: 'Cowrie-lined royal chieftain cap' },
    { name: 'Customized Ostrich Feather Ceremonial Fan', price: '₦780,000', note: 'Gold-embroidered leather handle fan' },
  ];

  const toggleArtifact = (artifactName: string) => {
    setConfig((prev) => {
      const exists = prev.artifacts.includes(artifactName);
      if (exists) {
        return { ...prev, artifacts: prev.artifacts.filter((a) => a !== artifactName) };
      } else {
        return { ...prev, artifacts: [...prev.artifacts, artifactName] };
      }
    });
  };

  const calculateTotal = () => {
    const selectedSil = silhouettes.find((s) => s.id === config.silhouette);
    let base = selectedSil ? selectedSil.basePrice : 5200000;
    config.artifacts.forEach((artName) => {
      const art = availableArtifacts.find((a) => a.name === artName);
      if (art) {
        base += parseInt(art.price.replace(/[^0-9]/g, ''));
      }
    });
    return base;
  };

  const handleSubmitCommission = (e: React.FormEvent) => {
    e.preventDefault();
    if (!config.clientName || !config.clientEmail) {
      alert('Please provide your name and email to submit your bespoke commission inquiry.');
      return;
    }

    const cityAbbr = config.appointmentType.includes('Lagos')
      ? 'LAGOS'
      : config.appointmentType.includes('London')
      ? 'MAYFAIR'
      : config.appointmentType.includes('Manhattan')
      ? 'MANHATTAN'
      : config.appointmentType.includes('Dubai')
      ? 'DIFC'
      : 'GLOBAL';

    const orderNum = Math.floor(1000 + Math.random() * 9000);
    const orderId = `RY-${cityAbbr}-${orderNum}`;

    const newOrder: CommissionOrder = {
      orderId,
      clientName: config.clientName,
      clientEmail: config.clientEmail,
      garmentTitle: config.silhouette,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      status: 'drafting',
      progressPercent: 15,
      currentStageHours: 6,
      totalHours: 120,
      estimatedDelivery: '8-10 Weeks from Fitting',
      trackingCode: `DIPLOMATIC-CARGO-${orderNum}`,
      destinationCity: config.appointmentType,
      totalAmount: `₦${calculateTotal().toLocaleString()}`,
      stages: [
        {
          title: 'Phase 1: Anatomical Drape & Posture Drafting',
          desc: `Metrics captured (${config.chestBreadth}" Chest, ${config.shoulderSpan}" Shoulder, ${config.postureType}). Translating into bespoke master paper sloper.`,
          completed: false,
          current: true,
          hoursLogged: 6
        },
        {
          title: 'Phase 2: Hand-Loom Silk Weaving & Velvet Sourcing',
          desc: `Textile: ${config.textile}. Sourcing and loom preparation underway.`,
          completed: false,
          hoursLogged: 0
        },
        {
          title: 'Phase 3: High-Density Metallic Threadwork',
          desc: `Embroidery motif: ${config.embroideryMotif}. Couched wire and beadwork.`,
          completed: false,
          hoursLogged: 0
        },
        {
          title: 'Phase 4: Basting Assembly & Salon Fitting',
          desc: `Appointment scheduled at ${config.appointmentType}.`,
          completed: false,
          hoursLogged: 0
        },
        {
          title: 'Phase 5: White-Glove Handcrafted Cedar Box Courier',
          desc: 'Sealed with Richyonce monogram wax seal and dispatched directly.',
          completed: false,
          hoursLogged: 0
        }
      ]
    };

    onCommissionCreated(newOrder);
    setCommissionSuccess(newOrder);
  };

  return (
    <div className="flex flex-col w-full text-[#e5e2e1] max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-6">
      {/* Editorial Title */}
      <div className="border-b border-[rgba(229,192,123,0.2)] pb-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-[#ffdd9f]">straighten</span>
            <span className="text-[10px] tracking-[0.25em] text-[#ffdd9f] uppercase font-semibold">
              VIP Atelier Service
            </span>
          </div>
          <h1 className="font-serif text-[28px] sm:text-[38px] uppercase text-[#e5e2e1] tracking-tight mt-1">
            Bespoke Commission &amp; Drape Profile
          </h1>
          <p className="text-[13px] text-[#d1c5b4] max-w-xl font-light mt-1">
            Every sovereign piece is individually drafted, hand-loomed, and embroidered to your posture metrics. Experience classical African luxury crafted without compromise.
          </p>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center gap-1.5 self-start md:self-auto">
          {[1, 2, 3, 4, 5].map((s) => (
            <div
              key={s}
              onClick={() => setStep(s)}
              className={`w-8 h-8 flex items-center justify-center text-[12px] font-mono font-bold cursor-pointer transition-all border ${
                step === s
                  ? 'bg-[#e5c07b] text-[#412d00] border-[#e5c07b]'
                  : step > s
                  ? 'bg-[#112520] text-[#ffdd9f] border-[rgba(229,192,123,0.3)]'
                  : 'bg-[#1c1b1b] text-[#9a8f80] border-[rgba(255,255,255,0.06)]'
              }`}
            >
              0{s}
            </div>
          ))}
        </div>
      </div>

      {/* Fabric Library Interactive Feature Banner */}
      <div className="mb-8 p-5 bg-gradient-to-r from-[#112520] via-[#1c1b1b] to-[#131313] border border-[rgba(229,192,123,0.3)] shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          {/* 4-Swatch Micro-Strip */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {TEXTILE_CATALOG.slice(0, 4).map((tex) => (
              <div
                key={tex.id}
                onClick={() => setIsFabricLibraryOpen(true)}
                className="w-12 h-12 rounded-none overflow-hidden border border-[rgba(229,192,123,0.3)] hover:scale-110 transition-transform cursor-pointer relative group"
                title={tex.name}
              >
                <img src={tex.image} alt={tex.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              </div>
            ))}
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-[#ffdd9f] uppercase tracking-[0.22em] font-semibold">
                Haute Archive • Fabric Library
              </span>
              <span className="px-1.5 py-0.2 bg-[#e5c07b] text-[#412d00] text-[8px] uppercase font-bold tracking-wider">
                Macro Swatches
              </span>
            </div>
            <h3 className="font-serif text-[17px] text-[#e5e2e1] uppercase mt-0.5">
              Explore Sacred African Looms &amp; Gilded Brocades
            </h3>
            <p className="text-[12px] text-[#d1c5b4] font-light mt-0.5">
              Currently Selected: <strong className="text-[#ffdd9f] font-medium">{config.textile}</strong>
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsFabricLibraryOpen(true)}
          className="h-11 px-5 bg-[#e5c07b] text-[#412d00] hover:bg-[#f1dfc2] text-[10px] uppercase font-bold tracking-[0.2em] transition-all cursor-pointer shadow-md flex items-center justify-center gap-2 flex-shrink-0 active:scale-95"
        >
          <span>Open Fabric Library</span>
          <span className="material-symbols-outlined text-[16px]">auto_awesome</span>
        </button>
      </div>

      {commissionSuccess ? (
        /* Commission Success Screen */
        <div className="bg-[#112520] border border-[rgba(229,192,123,0.3)] p-6 sm:p-10 shadow-2xl flex flex-col items-center text-center animate-in fade-in">
          <div className="w-16 h-16 bg-[#e5c07b] text-[#412d00] flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-[36px] font-bold">verified</span>
          </div>

          <span className="text-[10px] text-[#ffdd9f] tracking-[0.3em] uppercase font-semibold">
            Bespoke Commission Registered
          </span>
          <h2 className="font-serif text-[26px] sm:text-[34px] text-[#e5e2e1] uppercase tracking-wide mt-1">
            Welcome to the Sovereign Registry
          </h2>
          <p className="text-[14px] text-[#d1c5b4] max-w-lg mt-2 leading-relaxed font-light">
            Thank you, <strong className="text-white font-medium">{commissionSuccess.clientName}</strong>. Your bespoke commission has been assigned to our Victoria Island Master Tailor team.
          </p>

          <div className="my-6 p-4 bg-[#0e0e0e] border border-[rgba(229,192,123,0.2)] max-w-md w-full text-left">
            <div className="flex justify-between items-center pb-2 border-b border-[rgba(255,255,255,0.08)]">
              <span className="text-[11px] text-[#9a8f80] uppercase tracking-wider">Commission Code:</span>
              <span className="font-mono text-[14px] text-[#ffdd9f] font-bold">{commissionSuccess.orderId}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-[rgba(255,255,255,0.08)]">
              <span className="text-[11px] text-[#9a8f80] uppercase tracking-wider">Garment Silhouette:</span>
              <span className="text-[12px] text-[#e5e2e1] font-medium">{commissionSuccess.garmentTitle}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-[rgba(255,255,255,0.08)]">
              <span className="text-[11px] text-[#9a8f80] uppercase tracking-wider">Consultation Venue:</span>
              <span className="text-[12px] text-[#e5e2e1] font-medium">{commissionSuccess.destinationCity}</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-[11px] text-[#9a8f80] uppercase tracking-wider">Estimated Investment:</span>
              <span className="font-mono text-[14px] text-[#ffdd9f] font-bold">{commissionSuccess.totalAmount}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={onNavigateToTrack}
              className="px-6 py-3 bg-[#e5c07b] text-[#412d00] text-[11px] uppercase font-bold tracking-[0.2em] hover:bg-[#f1dfc2] transition-colors cursor-pointer shadow-lg"
            >
              Track Atelier Craftsmanship
            </button>
            <button
              onClick={() => {
                setCommissionSuccess(null);
                setStep(1);
              }}
              className="px-6 py-3 bg-[#2a2a2a] text-[#e5e2e1] text-[11px] uppercase font-semibold tracking-[0.2em] hover:bg-[#3a3939] transition-colors cursor-pointer border border-[rgba(255,255,255,0.08)]"
            >
              Configure Another Silhouette
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmitCommission} className="flex flex-col gap-8">
          {/* STEP 1: Silhouette Architecture */}
          {step === 1 && (
            <div className="flex flex-col gap-6 animate-in fade-in">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#ffdd9f] uppercase tracking-[0.2em] font-semibold">Step 01 of 05</span>
                  <h2 className="font-serif text-[22px] sm:text-[26px] uppercase text-[#e5e2e1] mt-0.5">
                    Select Silhouette Architecture
                  </h2>
                </div>
                <span className="text-[12px] text-[#d1c5b4] font-mono">Foundational Cut</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {silhouettes.map((sil) => {
                  const isSelected = config.silhouette === sil.id;
                  return (
                    <div
                      key={sil.id}
                      onClick={() => setConfig({ ...config, silhouette: sil.id })}
                      className={`p-4 bg-[#1c1b1b] border transition-all cursor-pointer flex gap-4 ${
                        isSelected
                          ? 'border-[#e5c07b] bg-[#112520]/60 ring-1 ring-[#e5c07b]'
                          : 'border-[rgba(255,255,255,0.08)] hover:border-[rgba(229,192,123,0.3)]'
                      }`}
                    >
                      <img
                        src={sil.image}
                        alt={sil.title}
                        className="w-24 h-28 object-cover object-top flex-shrink-0 bg-[#0e0e0e]"
                      />
                      <div className="flex flex-col justify-between flex-1">
                        <div>
                          <div className="flex items-start justify-between gap-1">
                            <h3 className="font-serif text-[16px] text-[#e5e2e1] uppercase font-semibold leading-snug">
                              {sil.title}
                            </h3>
                            <span className="text-[12px] text-[#ffdd9f] font-mono font-bold whitespace-nowrap">
                              From ₦{sil.basePrice.toLocaleString()}
                            </span>
                          </div>
                          <p className="text-[12px] text-[#d1c5b4] font-light mt-1.5 leading-relaxed">
                            {sil.desc}
                          </p>
                        </div>
                        <div className="pt-2 flex items-center gap-1.5 text-[10px] text-[#ffdd9f] uppercase font-semibold tracking-wider">
                          <span className="material-symbols-outlined text-[14px]">
                            {isSelected ? 'check_box' : 'check_box_outline_blank'}
                          </span>
                          <span>{isSelected ? 'Selected Silhouette' : 'Select Silhouette'}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-end pt-4 border-t border-[rgba(255,255,255,0.06)]">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-3 bg-[#e5c07b] text-[#412d00] text-[11px] uppercase font-bold tracking-[0.2em] hover:bg-[#f1dfc2] transition-colors cursor-pointer"
                >
                  Proceed to Sacred Textiles →
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Sacred Textiles & Materials */}
          {step === 2 && (
            <div className="flex flex-col gap-6 animate-in fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-[rgba(255,255,255,0.06)]">
                <div>
                  <span className="text-[10px] text-[#ffdd9f] uppercase tracking-[0.2em] font-semibold">Step 02 of 05</span>
                  <h2 className="font-serif text-[22px] sm:text-[26px] uppercase text-[#e5e2e1] mt-0.5">
                    Master Textiles &amp; Dye Foundations
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setIsFabricLibraryOpen(true)}
                  className="px-3.5 py-1.5 bg-[#112520] hover:bg-[#201f1f] text-[#ffdd9f] text-[10px] uppercase font-bold tracking-wider border border-[rgba(229,192,123,0.3)] transition-all cursor-pointer flex items-center gap-1.5 self-start sm:self-auto"
                >
                  <span className="material-symbols-outlined text-[16px]">visibility</span>
                  <span>Browse Full Fabric Library (Modal)</span>
                </button>
              </div>

              <div className="space-y-3">
                {TEXTILE_CATALOG.map((tex) => {
                  const isSelected = config.textile === tex.name;
                  return (
                    <div
                      key={tex.id}
                      onClick={() => setConfig({ ...config, textile: tex.name })}
                      className={`p-3.5 sm:p-4 bg-[#1c1b1b] border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                        isSelected
                          ? 'border-[#e5c07b] bg-[#112520]/70 ring-1 ring-[#e5c07b]'
                          : 'border-[rgba(255,255,255,0.08)] hover:border-[rgba(229,192,123,0.3)]'
                      }`}
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className="relative w-14 h-14 rounded-none overflow-hidden bg-[#0e0e0e] flex-shrink-0 border border-[rgba(229,192,123,0.25)]">
                          <img
                            src={tex.image}
                            alt={tex.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-serif text-[15px] sm:text-[16px] text-[#e5e2e1] uppercase font-semibold truncate">
                              {tex.name}
                            </span>
                            <span className="px-1.5 py-0.2 bg-[#2a2a2a] text-[#ffdd9f] font-mono text-[9px] uppercase">
                              {tex.gsm} GSM
                            </span>
                          </div>
                          <span className="text-[12px] text-[#d1c5b4] font-light mt-0.5 truncate">
                            {tex.weaveDesc}
                          </span>
                          <span className="text-[10px] text-[#9a8f80] uppercase tracking-wider mt-0.5 font-mono">
                            {tex.provenance}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 flex-shrink-0">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setConfig({ ...config, textile: tex.name });
                            setIsFabricLibraryOpen(true);
                          }}
                          className="hidden sm:flex text-[10px] text-[#9a8f80] hover:text-[#ffdd9f] uppercase tracking-wider underline underline-offset-2 p-1"
                        >
                          Macro Spec
                        </button>
                        <span className="material-symbols-outlined text-[20px] text-[#ffdd9f] ml-1 flex-shrink-0">
                          {isSelected ? 'radio_button_checked' : 'radio_button_unchecked'}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-between pt-4 border-t border-[rgba(255,255,255,0.06)]">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-5 py-2.5 bg-[#2a2a2a] text-[#e5e2e1] text-[11px] uppercase tracking-wider font-semibold cursor-pointer"
                >
                  ← Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-6 py-3 bg-[#e5c07b] text-[#412d00] text-[11px] uppercase font-bold tracking-[0.2em] hover:bg-[#f1dfc2] transition-colors cursor-pointer"
                >
                  Proceed to Embroidery Motif →
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Embroidery & Artisanal Motifs */}
          {step === 3 && (
            <div className="flex flex-col gap-6 animate-in fade-in">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#ffdd9f] uppercase tracking-[0.2em] font-semibold">Step 03 of 05</span>
                  <h2 className="font-serif text-[22px] sm:text-[26px] uppercase text-[#e5e2e1] mt-0.5">
                    Artisanal Motifs &amp; Metallic Threadwork
                  </h2>
                </div>
                <span className="text-[12px] text-[#d1c5b4] font-mono">Heraldic Symbolism</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {motifs.map((mot, idx) => {
                  const isSelected = config.embroideryMotif === mot.name;
                  return (
                    <div
                      key={idx}
                      onClick={() => setConfig({ ...config, embroideryMotif: mot.name })}
                      className={`p-4 bg-[#1c1b1b] border transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'border-[#e5c07b] bg-[#112520]/60 ring-1 ring-[#e5c07b]'
                          : 'border-[rgba(255,255,255,0.08)] hover:border-[rgba(229,192,123,0.3)]'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="font-serif text-[15px] text-[#e5e2e1] uppercase font-semibold">
                            {mot.name}
                          </span>
                          <span className="material-symbols-outlined text-[18px] text-[#ffdd9f]">
                            {isSelected ? 'radio_button_checked' : 'radio_button_unchecked'}
                          </span>
                        </div>
                        <p className="text-[12px] text-[#d1c5b4] font-light mt-1.5 leading-relaxed">
                          {mot.note}
                        </p>
                      </div>
                      <span className="text-[10px] text-[#ffdd9f] uppercase tracking-wider font-semibold mt-3 pt-2 border-t border-[rgba(255,255,255,0.06)]">
                        Up to 140 Hand-Stitched Artisan Hours
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-between pt-4 border-t border-[rgba(255,255,255,0.06)]">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-5 py-2.5 bg-[#2a2a2a] text-[#e5e2e1] text-[11px] uppercase tracking-wider font-semibold cursor-pointer"
                >
                  ← Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="px-6 py-3 bg-[#e5c07b] text-[#412d00] text-[11px] uppercase font-bold tracking-[0.2em] hover:bg-[#f1dfc2] transition-colors cursor-pointer"
                >
                  Proceed to Anatomical Metrics →
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Anatomical Metrics & Drape Profile */}
          {step === 4 && (
            <div className="flex flex-col gap-6 animate-in fade-in">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#ffdd9f] uppercase tracking-[0.2em] font-semibold">Step 04 of 05</span>
                  <h2 className="font-serif text-[22px] sm:text-[26px] uppercase text-[#e5e2e1] mt-0.5">
                    Anatomical Drape Profile
                  </h2>
                </div>
                <div className="flex items-center bg-[#201f1f] p-1 border border-[rgba(255,255,255,0.08)]">
                  <button
                    type="button"
                    onClick={() => {
                      setUnit('inches');
                      setConfig({ ...config, unit: 'inches' });
                    }}
                    className={`px-3 py-1 text-[10px] uppercase font-bold tracking-wider cursor-pointer ${
                      unit === 'inches' ? 'bg-[#e5c07b] text-[#412d00]' : 'text-[#d1c5b4]'
                    }`}
                  >
                    Inches
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setUnit('cm');
                      setConfig({ ...config, unit: 'cm' });
                    }}
                    className={`px-3 py-1 text-[10px] uppercase font-bold tracking-wider cursor-pointer ${
                      unit === 'cm' ? 'bg-[#e5c07b] text-[#412d00]' : 'text-[#d1c5b4]'
                    }`}
                  >
                    Centimeters
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#1c1b1b] border border-[rgba(229,192,123,0.2)]">
                  <label className="text-[11px] text-[#ffdd9f] uppercase tracking-wider font-semibold block mb-1">
                    Chest / Bust Breadth ({unit})
                  </label>
                  <input
                    type="number"
                    value={config.chestBreadth}
                    onChange={(e) => setConfig({ ...config, chestBreadth: Number(e.target.value) })}
                    className="w-full h-11 px-3 bg-[#0e0e0e] text-[#e5e2e1] text-[14px] border border-[rgba(255,255,255,0.1)] focus:border-[#e5c07b] focus:outline-none rounded-none font-mono"
                  />
                  <span className="text-[11px] text-[#9a8f80] mt-1 block">
                    Measured around the fullest point of chest under arms.
                  </span>
                </div>

                <div className="p-4 bg-[#1c1b1b] border border-[rgba(229,192,123,0.2)]">
                  <label className="text-[11px] text-[#ffdd9f] uppercase tracking-wider font-semibold block mb-1">
                    Shoulder Span ({unit})
                  </label>
                  <input
                    type="number"
                    value={config.shoulderSpan}
                    onChange={(e) => setConfig({ ...config, shoulderSpan: Number(e.target.value) })}
                    className="w-full h-11 px-3 bg-[#0e0e0e] text-[#e5e2e1] text-[14px] border border-[rgba(255,255,255,0.1)] focus:border-[#e5c07b] focus:outline-none rounded-none font-mono"
                  />
                  <span className="text-[11px] text-[#9a8f80] mt-1 block">
                    Tip of acromion bone to opposite shoulder tip.
                  </span>
                </div>

                <div className="p-4 bg-[#1c1b1b] border border-[rgba(229,192,123,0.2)]">
                  <label className="text-[11px] text-[#ffdd9f] uppercase tracking-wider font-semibold block mb-1">
                    Nape-to-Floor Drop ({unit})
                  </label>
                  <input
                    type="number"
                    value={config.napeToFloorDrop}
                    onChange={(e) => setConfig({ ...config, napeToFloorDrop: Number(e.target.value) })}
                    className="w-full h-11 px-3 bg-[#0e0e0e] text-[#e5e2e1] text-[14px] border border-[rgba(255,255,255,0.1)] focus:border-[#e5c07b] focus:outline-none rounded-none font-mono"
                  />
                  <span className="text-[11px] text-[#9a8f80] mt-1 block">
                    From base of neck down spinal column to footwear floor line.
                  </span>
                </div>

                <div className="p-4 bg-[#1c1b1b] border border-[rgba(229,192,123,0.2)]">
                  <label className="text-[11px] text-[#ffdd9f] uppercase tracking-wider font-semibold block mb-1">
                    Agbada Wingspan Drape ({unit})
                  </label>
                  <input
                    type="number"
                    value={config.agbadaWingspan}
                    onChange={(e) => setConfig({ ...config, agbadaWingspan: Number(e.target.value) })}
                    className="w-full h-11 px-3 bg-[#0e0e0e] text-[#e5e2e1] text-[14px] border border-[rgba(255,255,255,0.1)] focus:border-[#e5c07b] focus:outline-none rounded-none font-mono"
                  />
                  <span className="text-[11px] text-[#9a8f80] mt-1 block">
                    Full fingertip-to-fingertip outstretched horizontal armspan.
                  </span>
                </div>
              </div>

              {/* Posture Type Selection */}
              <div className="p-4 bg-[#201f1f] border border-[rgba(229,192,123,0.2)]">
                <label className="text-[11px] text-[#ffdd9f] uppercase tracking-wider font-semibold block mb-2">
                  Posture Profile (For Shoulder Canvas Architecture)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(['Formal Sovereign', 'Athletic Upright', 'Commanding Stance', 'Relaxed Aristocrat'] as const).map((posture) => (
                    <button
                      key={posture}
                      type="button"
                      onClick={() => setConfig({ ...config, postureType: posture })}
                      className={`p-2.5 text-[11px] uppercase font-semibold tracking-wider text-center cursor-pointer transition-all border ${
                        config.postureType === posture
                          ? 'bg-[#e5c07b] text-[#412d00] border-[#e5c07b]'
                          : 'bg-[#1c1b1b] text-[#d1c5b4] border-[rgba(255,255,255,0.08)]'
                      }`}
                    >
                      {posture}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-between pt-4 border-t border-[rgba(255,255,255,0.06)]">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-5 py-2.5 bg-[#2a2a2a] text-[#e5e2e1] text-[11px] uppercase tracking-wider font-semibold cursor-pointer"
                >
                  ← Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(5)}
                  className="px-6 py-3 bg-[#e5c07b] text-[#412d00] text-[11px] uppercase font-bold tracking-[0.2em] hover:bg-[#f1dfc2] transition-colors cursor-pointer"
                >
                  Proceed to Regalia &amp; Booking →
                </button>
              </div>
            </div>
          )}

          {/* STEP 5: Sovereign Artifacts & Consultation Booking */}
          {step === 5 && (
            <div className="flex flex-col gap-6 animate-in fade-in">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#ffdd9f] uppercase tracking-[0.2em] font-semibold">Step 05 of 05</span>
                  <h2 className="font-serif text-[22px] sm:text-[26px] uppercase text-[#e5e2e1] mt-0.5">
                    Sovereign Artifacts &amp; Salon Fitting
                  </h2>
                </div>
                <span className="text-[12px] text-[#d1c5b4] font-mono">Commission Finalization</span>
              </div>

              {/* Artifacts Selection */}
              <div>
                <label className="text-[11px] text-[#ffdd9f] uppercase tracking-wider font-semibold block mb-2">
                  Pair Sovereign Accoutrements (Optional Additions)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {availableArtifacts.map((art) => {
                    const isSelected = config.artifacts.includes(art.name);
                    return (
                      <div
                        key={art.name}
                        onClick={() => toggleArtifact(art.name)}
                        className={`p-3 bg-[#1c1b1b] border transition-all cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? 'border-[#e5c07b] bg-[#112520]/60 ring-1 ring-[#e5c07b]'
                            : 'border-[rgba(255,255,255,0.08)] hover:border-[rgba(229,192,123,0.3)]'
                        }`}
                      >
                        <div>
                          <span className="text-[13px] text-[#e5e2e1] font-medium block">{art.name}</span>
                          <span className="text-[11px] text-[#d1c5b4] font-light">{art.note}</span>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                          <span className="text-[12px] text-[#ffdd9f] font-mono font-bold">{art.price}</span>
                          <span className="material-symbols-outlined text-[18px] text-[#ffdd9f]">
                            {isSelected ? 'check_box' : 'check_box_outline_blank'}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Appointment Venue */}
              <div>
                <label className="text-[11px] text-[#ffdd9f] uppercase tracking-wider font-semibold block mb-2">
                  Select Fitting Salon or Virtual Master Session
                </label>
                <select
                  value={config.appointmentType}
                  onChange={(e) => setConfig({ ...config, appointmentType: e.target.value as any })}
                  className="w-full h-12 px-3 bg-[#1c1b1b] text-[#e5e2e1] text-[13px] border border-[rgba(229,192,123,0.2)] focus:border-[#e5c07b] focus:outline-none rounded-none cursor-pointer uppercase tracking-wider"
                >
                  <option value="Private Salon — Victoria Island, Lagos">Private Salon — Victoria Island, Lagos (Lead Atelier)</option>
                  <option value="Private Salon — Mayfair, London">Private Salon — Mayfair, London (UK Diplomatic Hub)</option>
                  <option value="Private Salon — Manhattan, NY">Private Salon — Upper East Side, Manhattan, NY</option>
                  <option value="Private Salon — DIFC, Dubai">Private Salon — DIFC, Dubai (Middle East Flagship)</option>
                  <option value="Virtual Master Fitting">Virtual Master 3D Fitting (Global Video Concierge)</option>
                </select>
              </div>

              {/* Client Contact Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="text-[11px] text-[#d1c5b4] uppercase tracking-wider font-semibold block mb-1">
                    Your Full Name / Dignitary Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Chief Adebayo Ogundipe"
                    value={config.clientName}
                    onChange={(e) => setConfig({ ...config, clientName: e.target.value })}
                    className="w-full h-11 px-3 bg-[#1c1b1b] text-[#e5e2e1] text-[13px] border border-[rgba(229,192,123,0.2)] focus:border-[#e5c07b] focus:outline-none rounded-none"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-[#d1c5b4] uppercase tracking-wider font-semibold block mb-1">
                    Private Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. adebayo@sovereign.ng"
                    value={config.clientEmail}
                    onChange={(e) => setConfig({ ...config, clientEmail: e.target.value })}
                    className="w-full h-11 px-3 bg-[#1c1b1b] text-[#e5e2e1] text-[13px] border border-[rgba(229,192,123,0.2)] focus:border-[#e5c07b] focus:outline-none rounded-none"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-[#d1c5b4] uppercase tracking-wider font-semibold block mb-1">
                    Concierge WhatsApp / Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="+234 803 000 0000"
                    value={config.clientPhone}
                    onChange={(e) => setConfig({ ...config, clientPhone: e.target.value })}
                    className="w-full h-11 px-3 bg-[#1c1b1b] text-[#e5e2e1] text-[13px] border border-[rgba(229,192,123,0.2)] focus:border-[#e5c07b] focus:outline-none rounded-none"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-[#d1c5b4] uppercase tracking-wider font-semibold block mb-1">
                    Target Event / Coronation Date
                  </label>
                  <input
                    type="date"
                    value={config.preferredDate}
                    onChange={(e) => setConfig({ ...config, preferredDate: e.target.value })}
                    className="w-full h-11 px-3 bg-[#1c1b1b] text-[#e5e2e1] text-[13px] border border-[rgba(229,192,123,0.2)] focus:border-[#e5c07b] focus:outline-none rounded-none cursor-pointer"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] text-[#d1c5b4] uppercase tracking-wider font-semibold block mb-1">
                  Specific Heraldic Crest or Special Tailoring Directives
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Include our family crest embroidery on back nape in 24k gold bullion; expedited delivery for coronation ceremony in Abuja."
                  value={config.specialRequests}
                  onChange={(e) => setConfig({ ...config, specialRequests: e.target.value })}
                  className="w-full p-3 bg-[#1c1b1b] text-[#e5e2e1] text-[13px] border border-[rgba(229,192,123,0.2)] focus:border-[#e5c07b] focus:outline-none rounded-none resize-none"
                />
              </div>

              {/* Commission Estimate Summary Card */}
              <div className="p-4 bg-[#112520] border border-[rgba(229,192,123,0.3)] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex flex-col text-center sm:text-left">
                  <span className="text-[10px] text-[#ffdd9f] uppercase tracking-[0.2em] font-semibold">
                    Estimated Commission Total
                  </span>
                  <span className="font-serif text-[28px] text-[#e5e2e1] font-mono font-bold">
                    ₦{calculateTotal().toLocaleString()}
                  </span>
                  <span className="text-[11px] text-[#d1c5b4] font-light">
                    Includes anatomical sloper drafting, loom preparation, and white-glove cedar delivery.
                  </span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => setStep(4)}
                    className="h-12 px-5 bg-[#2a2a2a] text-[#e5e2e1] text-[11px] uppercase tracking-wider font-semibold cursor-pointer"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 sm:flex-initial h-12 px-8 bg-[#e5c07b] text-[#412d00] text-[11px] uppercase font-bold tracking-[0.2em] hover:bg-[#f1dfc2] transition-colors cursor-pointer shadow-xl active:scale-95"
                  >
                    Request Commission
                  </button>
                </div>
              </div>
            </div>
          )}
        </form>
      )}

      {/* Fabric Library Modal */}
      <FabricLibraryModal
        isOpen={isFabricLibraryOpen}
        onClose={() => setIsFabricLibraryOpen(false)}
        selectedTextileName={config.textile}
        onSelectTextile={(textileName) => setConfig({ ...config, textile: textileName })}
      />
    </div>
  );
};
