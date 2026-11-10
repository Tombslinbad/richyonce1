import React, { useState } from 'react';
import { CommissionOrder } from '../types';
import { ArtisanStageTimelineD3 } from './ArtisanStageTimelineD3';

interface TrackOrderProps {
  orders: CommissionOrder[];
}

export const TrackOrder: React.FC<TrackOrderProps> = ({ orders }) => {
  const [selectedOrderId, setSelectedOrderId] = useState<string>(
    orders.length > 0 ? orders[0].orderId : 'RY-LAGOS-8821'
  );
  const [searchCode, setSearchCode] = useState('');
  const [showCertificate, setShowCertificate] = useState(false);
  const [showArtisanPhotos, setShowArtisanPhotos] = useState(false);
  const [conciergeMsgSent, setConciergeMsgSent] = useState(false);
  const [conciergeText, setConciergeText] = useState('');
  const [spotlightStageIdx, setSpotlightStageIdx] = useState<number | null>(null);

  const currentOrder =
    orders.find((o) => o.orderId.toLowerCase() === selectedOrderId.toLowerCase()) || orders[0];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchCode.trim()) return;
    const found = orders.find((o) =>
      o.orderId.toLowerCase().includes(searchCode.trim().toLowerCase())
    );
    if (found) {
      setSelectedOrderId(found.orderId);
      setSearchCode('');
    } else {
      alert(`No active commission found with reference code "${searchCode}". Check your confirmation receipt.`);
    }
  };

  return (
    <div className="flex flex-col w-full text-[#e5e2e1] max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-6">
      {/* Header */}
      <div className="border-b border-[rgba(229,192,123,0.2)] pb-6 mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-[#ffdd9f]">schedule</span>
            <span className="text-[10px] tracking-[0.25em] text-[#ffdd9f] uppercase font-semibold">
              Sovereign Commission Concierge
            </span>
          </div>
          <h1 className="font-serif text-[28px] sm:text-[36px] uppercase text-[#e5e2e1] tracking-tight mt-1">
            Artisan Craftsmanship Tracker
          </h1>
          <p className="text-[13px] text-[#d1c5b4] max-w-lg font-light mt-1">
            Follow the passage of your royal regalia from initial posture drafting through hand-loom weaving and gold threadwork.
          </p>
        </div>

        {/* Quick Order Lookup Form */}
        <form onSubmit={handleSearch} className="flex items-center w-full sm:w-auto">
          <input
            type="text"
            value={searchCode}
            onChange={(e) => setSearchCode(e.target.value)}
            placeholder="Search code e.g. RY-LAGOS-8821"
            className="h-10 px-3 bg-[#1c1b1b] text-[#e5e2e1] text-[12px] font-mono border border-[rgba(229,192,123,0.2)] focus:border-[#e5c07b] focus:outline-none rounded-none w-full sm:w-60"
          />
          <button
            type="submit"
            className="h-10 px-3.5 bg-[#e5c07b] text-[#412d00] hover:bg-[#f1dfc2] text-[11px] uppercase font-bold tracking-wider transition-colors cursor-pointer rounded-none flex-shrink-0"
          >
            Track
          </button>
        </form>
      </div>

      {/* Commission Selector Ribbon */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar mb-6 pb-1">
        {orders.map((ord) => {
          const isSelected = ord.orderId === currentOrder?.orderId;
          return (
            <button
              key={ord.orderId}
              onClick={() => setSelectedOrderId(ord.orderId)}
              className={`flex-shrink-0 px-3.5 py-2 text-left cursor-pointer border rounded-none transition-all ${
                isSelected
                  ? 'bg-[#112520] border-[#e5c07b] text-white shadow-md'
                  : 'bg-[#1c1b1b] border-[rgba(255,255,255,0.06)] text-[#d1c5b4] hover:text-white hover:border-[rgba(229,192,123,0.3)]'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-[12px] font-bold text-[#ffdd9f]">{ord.orderId}</span>
                <span className="text-[10px] uppercase tracking-wider text-[#d1c5b4]">
                  {ord.status.toUpperCase()}
                </span>
              </div>
              <div className="text-[12px] font-medium truncate max-w-[200px] mt-0.5">
                {ord.garmentTitle}
              </div>
            </button>
          );
        })}
      </div>

      {currentOrder && (
        <div className="flex flex-col gap-6">
          {/* Main Status Hero Card */}
          <div className="bg-[#1c1b1b] border border-[rgba(229,192,123,0.25)] p-5 sm:p-7 shadow-2xl relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-[rgba(255,255,255,0.08)]">
              <div>
                <span className="text-[10px] text-[#ffdd9f] tracking-[0.25em] uppercase font-semibold">
                  Commission Specification
                </span>
                <h2 className="font-serif text-[22px] sm:text-[28px] uppercase text-[#e5e2e1] mt-0.5">
                  {currentOrder.garmentTitle}
                </h2>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] text-[#d1c5b4] mt-1 font-light">
                  <span>Client: <strong className="text-white font-medium">{currentOrder.clientName}</strong></span>
                  <span>·</span>
                  <span>Destination: <strong className="text-white font-medium">{currentOrder.destinationCity}</strong></span>
                  <span>·</span>
                  <span>Est. Delivery: <strong className="text-[#ffdd9f] font-mono font-medium">{currentOrder.estimatedDelivery}</strong></span>
                </div>
              </div>

              <div className="flex flex-col sm:items-end">
                <span className="text-[10px] text-[#9a8f80] uppercase tracking-wider">Atelier Progress</span>
                <span className="font-mono text-[28px] text-[#ffdd9f] font-bold">
                  {currentOrder.progressPercent}%
                </span>
                <span className="text-[11px] text-[#d1c5b4] font-mono">
                  {currentOrder.currentStageHours} / {currentOrder.totalHours} hrs logged
                </span>
              </div>
            </div>

            {/* Interactive D3 Visual Progress Timeline (Replacing static progress bar) */}
            <div className="mt-6">
              <ArtisanStageTimelineD3
                stages={currentOrder.stages}
                progressPercent={currentOrder.progressPercent}
                totalHours={currentOrder.totalHours}
                currentStageHours={currentOrder.currentStageHours}
                selectedStageIndex={spotlightStageIdx ?? undefined}
                onSelectStage={(idx) => {
                  setSpotlightStageIdx(idx);
                  const el = document.getElementById(`order-stage-card-${idx}`);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                  }
                }}
              />
            </div>

            {/* Stage Timeline */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center justify-between pb-1 border-b border-[rgba(255,255,255,0.06)]">
                <span className="text-[10px] uppercase font-semibold text-[#ffdd9f] tracking-[0.2em]">
                  Artisan Guild Sequence Stages ({currentOrder.stages.length} Milestones)
                </span>
                {spotlightStageIdx !== null && (
                  <button
                    onClick={() => setSpotlightStageIdx(null)}
                    className="text-[10px] text-[#ffdd9f] hover:underline uppercase tracking-wider font-mono flex items-center gap-1 cursor-pointer"
                  >
                    <span>Clear Stage Filter</span>
                    <span className="material-symbols-outlined text-[13px]">close</span>
                  </button>
                )}
              </div>
              {currentOrder.stages.map((stg, i) => {
                const isSpotlighted = spotlightStageIdx === i;
                return (
                  <div
                    key={i}
                    id={`order-stage-card-${i}`}
                    onClick={() => setSpotlightStageIdx(spotlightStageIdx === i ? null : i)}
                    className={`p-4 border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer ${
                      isSpotlighted
                        ? 'border-[#ffdd9f] bg-[#112520] ring-2 ring-[#ffdd9f] shadow-2xl scale-[1.01]'
                        : stg.completed
                        ? 'bg-[#112520]/40 border-[rgba(229,192,123,0.3)] hover:border-[rgba(229,192,123,0.6)]'
                        : stg.current
                        ? 'bg-[#201f1f] border-[#e5c07b] shadow-lg ring-1 ring-[#e5c07b]'
                        : 'bg-[#131313]/50 border-[rgba(255,255,255,0.04)] opacity-60 hover:opacity-90'
                    }`}
                  >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        stg.completed
                          ? 'bg-[#ffdd9f] text-[#412d00]'
                          : stg.current
                          ? 'bg-[#e5c07b] text-[#412d00] animate-pulse'
                          : 'bg-[#2a2a2a] text-[#9a8f80]'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        {stg.completed ? 'check' : stg.current ? 'engineering' : 'lock'}
                      </span>
                    </div>

                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="font-serif text-[15px] sm:text-[16px] text-[#e5e2e1] uppercase font-semibold">
                          {stg.title}
                        </span>
                        {stg.current && (
                          <span className="px-2 py-0.5 bg-[#e5c07b] text-[#412d00] text-[9px] uppercase font-bold tracking-wider">
                            Active Handcraft
                          </span>
                        )}
                      </div>
                      <p className="text-[12px] text-[#d1c5b4] font-light mt-0.5 leading-relaxed">
                        {stg.desc}
                      </p>
                    </div>
                  </div>

                  <div className="sm:text-right flex-shrink-0">
                    <span className="text-[11px] font-mono text-[#ffdd9f]">
                      {stg.hoursLogged ? `${stg.hoursLogged} hrs logged` : 'Pending'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

            {/* Quick Actions Bar */}
            <div className="mt-8 pt-5 border-t border-[rgba(255,255,255,0.08)] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowArtisanPhotos(!showArtisanPhotos)}
                  className="px-4 py-2 bg-[#2a2a2a] hover:bg-[#3a3939] text-[#e5e2e1] text-[10px] uppercase font-semibold tracking-wider transition-colors cursor-pointer border border-[rgba(255,255,255,0.08)] flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[16px]">photo_camera</span>
                  Artisan Studio Photos
                </button>
                <button
                  onClick={() => setShowCertificate(!showCertificate)}
                  className="px-4 py-2 bg-[#2a2a2a] hover:bg-[#3a3939] text-[#e5e2e1] text-[10px] uppercase font-semibold tracking-wider transition-colors cursor-pointer border border-[rgba(255,255,255,0.08)] flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[16px]">verified</span>
                  Royal Seal Certificate
                </button>
              </div>

              <span className="text-[11px] text-[#9a8f80] font-mono">
                Courier ID: {currentOrder.trackingCode}
              </span>
            </div>
          </div>

          {/* Artisan Studio Work-in-Progress Photos Drawer */}
          {showArtisanPhotos && (
            <div className="p-5 sm:p-6 bg-[#112520] border border-[rgba(229,192,123,0.3)] animate-in fade-in">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-[10px] text-[#ffdd9f] uppercase tracking-wider font-semibold">
                    Studio Halogen Inspection Log
                  </span>
                  <h3 className="font-serif text-[18px] uppercase text-[#e5e2e1]">
                    Craftsmanship in Progress • Lagos Victoria Island
                  </h3>
                </div>
                <button
                  onClick={() => setShowArtisanPhotos(false)}
                  className="text-[#d1c5b4] hover:text-white"
                >
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="relative aspect-[4/3] bg-[#0e0e0e] overflow-hidden border border-[rgba(255,255,255,0.06)]">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUEUSiTY50VstAVvbIFEE_8kHJH-tk5kXrJGpBvY3ee8LWtMblMpXh71ZlIYUCo_f07Cxn_Do44RN61vzFp_nPOfcHc1TiG47-4g3l3_RGMslHCkJ96JVTIANRKGi4CKsZI3h5IfrGguBIteo3eKKw0USVR22vlsuo5sJ_PL7RsN5TeHXvd4VW66MvGdq52ufFA3MiTwy7Ws9bJtnKQ0jZmmhJhVchGPOIV0DknXpJURfdx-2E9bWfJNK10wbMdMAUBFc"
                    alt="Detail chevron couched bullion"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute bottom-2 left-2 bg-[#0e0e0e]/80 px-2 py-0.5 text-[9px] uppercase tracking-wider font-mono text-[#ffdd9f]">
                    Collar Chevron Couching
                  </div>
                </div>

                <div className="relative aspect-[4/3] bg-[#0e0e0e] overflow-hidden border border-[rgba(255,255,255,0.06)]">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDifet588Jdq_HkzZyQim_EV1uSzWGjM5flRi3upu72iIV8p7K9Rc_AmW1Amt5kKFHrQGYe0DX5JkmXUv-tYyJ-zutuHhzTirNeUjXAz5Jwpq5kFFKDDhwoKn2XMYhbuumUHWKOGX4496xSSLLeDaZMYVvtzZrFTHItsQn9rnOXcI_gUgmyRMuiK8OoeK7QiiqWdO2CV6_SEX7vR6kVhQ1bCjYlvtm5mQEzmAfH-EY4Z8sDP6v--eeMBI0BoV_QZduvHdI"
                    alt="Loom verification"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute bottom-2 left-2 bg-[#0e0e0e]/80 px-2 py-0.5 text-[9px] uppercase tracking-wider font-mono text-[#ffdd9f]">
                    Loom Density Verification
                  </div>
                </div>

                <div className="relative aspect-[4/3] bg-[#0e0e0e] overflow-hidden border border-[rgba(255,255,255,0.06)]">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAuI5cJvTI3uA5uT2zAy06nXhDX9wZtbntf8fPv3zmDvUvy3djan0rZOTYIcOlIdg8BkJMjtV1ye8v4Wap2EkvSKkMBMUMMuNCqFRdifFVmpdXrZXjERs5QVHjSXCmuLpGUbMfYykxO5Cmqx9FqutxLHxAu6iqBJ9IrOnKogGlTo-grFuJMxZpfA_yR1qsjZUBaFq-40qTVhkuSfIh6IMVCqUgChq1vgRQ-zp49yKlWqjhBUEq6hu6XMTv-LlG6f9M79c"
                    alt="Basting shoulder shape"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute bottom-2 left-2 bg-[#0e0e0e]/80 px-2 py-0.5 text-[9px] uppercase tracking-wider font-mono text-[#ffdd9f]">
                    Shoulder Pad Basting
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Certificate of Authenticity */}
          {showCertificate && (
            <div className="p-6 bg-[#0e0e0e] border-2 border-[rgba(229,192,123,0.4)] shadow-2xl relative animate-in fade-in">
              <button
                onClick={() => setShowCertificate(false)}
                className="absolute top-4 right-4 text-[#d1c5b4] hover:text-white"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>

              <div className="text-center max-w-lg mx-auto py-4">
                <span className="text-[10px] text-[#ffdd9f] tracking-[0.3em] uppercase font-semibold">
                  Richyonce Haute Atelier • Victoria Island
                </span>
                <h3 className="font-serif text-[24px] uppercase text-[#e5e2e1] mt-1">
                  Certificate of Sovereign Authenticity
                </h3>
                <div className="w-16 h-0.5 bg-[#e5c07b] mx-auto my-3"></div>

                <p className="text-[13px] text-[#d1c5b4] leading-relaxed font-light">
                  This document certifies that commission <strong className="text-white font-mono">{currentOrder.orderId}</strong> is an original creation hand-loomed and embroidered under the direction of the Richyonce Master Guild.
                </p>

                <div className="my-5 grid grid-cols-2 gap-2 text-left bg-[#1c1b1b] p-3 text-[11px] font-mono">
                  <div>CLIENT: <span className="text-white">{currentOrder.clientName}</span></div>
                  <div>COMMISSION: <span className="text-[#ffdd9f]">{currentOrder.garmentTitle}</span></div>
                  <div>DATE: <span className="text-white">{currentOrder.date}</span></div>
                  <div>SECURITY SEAL: <span className="text-[#ffdd9f]">RY-LAGOS-GOLD-2026</span></div>
                </div>

                <div className="flex justify-center items-center gap-8 pt-2">
                  <div className="text-center">
                    <span className="block font-serif text-[14px] italic text-[#ffdd9f]">Chukwudi N.</span>
                    <span className="text-[9px] text-[#9a8f80] uppercase tracking-wider">Master Tailor</span>
                  </div>
                  <div className="text-center">
                    <span className="block font-serif text-[14px] italic text-[#ffdd9f]">Amina B.</span>
                    <span className="text-[9px] text-[#9a8f80] uppercase tracking-wider">Head Embroiderer</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Direct Concierge Tailor Messaging Box */}
          <div className="p-5 sm:p-6 bg-[#201f1f] border border-[rgba(255,255,255,0.08)]">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-[18px] text-[#ffdd9f]">forum</span>
              <h3 className="text-[12px] uppercase tracking-[0.2em] font-semibold text-[#e5e2e1]">
                Direct Atelier Master Concierge
              </h3>
            </div>
            <p className="text-[12px] text-[#d1c5b4] font-light mb-3">
              Have adjustments for your upcoming salon fitting or need to modify your diplomatic delivery address? Send a priority message directly to your designated Lead Master Tailor.
            </p>

            {conciergeMsgSent ? (
              <div className="p-3 bg-[#112520] border border-[rgba(229,192,123,0.3)] text-[12px] text-[#ffdd9f] flex items-center justify-between">
                <span>Message dispatched to Master Tailor. You will receive an encrypted reply within 2 hours.</span>
                <button
                  onClick={() => setConciergeMsgSent(false)}
                  className="text-[11px] underline uppercase tracking-wider ml-2"
                >
                  Send another
                </button>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  value={conciergeText}
                  onChange={(e) => setConciergeText(e.target.value)}
                  placeholder="e.g. Please note I will be staying at The Dorchester during London fitting week..."
                  className="flex-1 h-11 px-3 bg-[#0e0e0e] text-[#e5e2e1] text-[13px] border border-[rgba(229,192,123,0.2)] focus:border-[#e5c07b] focus:outline-none rounded-none"
                />
                <button
                  onClick={() => {
                    if (conciergeText.trim()) {
                      setConciergeMsgSent(true);
                      setConciergeText('');
                    }
                  }}
                  className="h-11 px-6 bg-[#e5c07b] text-[#412d00] hover:bg-[#f1dfc2] text-[11px] uppercase font-bold tracking-[0.18em] transition-colors cursor-pointer rounded-none flex-shrink-0"
                >
                  Dispatch Direct
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
