import React, { useState } from 'react';
import { CartItem } from '../types';

interface ConsultationBagDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onBookAtelier: () => void;
}

export const ConsultationBagDrawer: React.FC<ConsultationBagDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onBookAtelier,
}) => {
  const [salonCity, setSalonCity] = useState('Victoria Island, Lagos');
  const [appointmentNote, setAppointmentNote] = useState('');
  const [confirmedReservation, setConfirmedReservation] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce(
    (sum, item) => sum + item.garment.numericPrice * item.quantity,
    0
  );
  const deposit = Math.round(subtotal * 0.5);

  const handleConfirm = () => {
    setConfirmedReservation(true);
    setTimeout(() => {
      setConfirmedReservation(false);
      onClose();
      onBookAtelier();
    }, 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden bg-black/75 backdrop-blur-md animate-in fade-in"
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-md bg-[#131313] border-l border-[rgba(229,192,123,0.3)] shadow-2xl flex flex-col justify-between">
          {/* Drawer Header */}
          <div className="p-5 sm:p-6 border-b border-[rgba(229,192,123,0.2)] bg-[#112520] flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[10px] text-[#ffdd9f] uppercase tracking-[0.25em] font-semibold">
                Haute Atelier Consultation
              </span>
              <h2 className="font-serif text-[20px] uppercase text-[#e5e2e1] mt-0.5">
                Bespoke Bag ({items.reduce((acc, it) => acc + it.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={onClose}
              aria-label="Close bag drawer"
              className="text-[#d1c5b4] hover:text-white p-1 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>

          {/* Drawer Body Items */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
            {confirmedReservation ? (
              <div className="py-16 text-center flex flex-col items-center justify-center animate-in fade-in">
                <div className="w-14 h-14 bg-[#e5c07b] text-[#412d00] flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-[32px]">done_all</span>
                </div>
                <h3 className="font-serif text-[22px] uppercase text-[#ffdd9f]">
                  Consultation Reserved
                </h3>
                <p className="text-[13px] text-[#d1c5b4] max-w-xs mt-1">
                  Your pieces have been flagged for private salon presentation in {salonCity}. Opening your bespoke profile...
                </p>
              </div>
            ) : items.length === 0 ? (
              <div className="py-20 text-center flex flex-col items-center justify-center">
                <span className="material-symbols-outlined text-[44px] text-[#9a8f80] mb-2">
                  shopping_bag
                </span>
                <p className="font-serif text-[18px] text-[#e5e2e1] uppercase">
                  Your Consultation Bag is Empty
                </p>
                <p className="text-[13px] text-[#d1c5b4] max-w-xs mt-1 font-light">
                  Explore our Ascent Lookbook or Reserve master creations from the gallery.
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 px-4 py-2 bg-[#e5c07b] text-[#412d00] text-[10px] uppercase tracking-[0.2em] font-semibold cursor-pointer"
                >
                  Return to Lookbook
                </button>
              </div>
            ) : (
              <>
                <div className="space-y-3">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="p-3.5 bg-[#1c1b1b] border border-[rgba(229,192,123,0.18)] flex gap-3 items-center justify-between"
                    >
                      <img
                        src={item.garment.image}
                        alt={item.garment.title}
                        className="w-16 h-20 object-cover object-top flex-shrink-0 bg-[#0e0e0e]"
                      />
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] text-[#ffdd9f] uppercase tracking-wider font-semibold font-mono">
                          {item.garment.lookCode}
                        </span>
                        <h4 className="font-serif text-[14px] text-[#e5e2e1] uppercase font-semibold truncate mt-0.5">
                          {item.garment.title}
                        </h4>
                        <span className="text-[12px] text-[#ffdd9f] font-mono font-semibold block mt-0.5">
                          {item.garment.price}
                        </span>

                        {/* Quantity Stepper */}
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="w-6 h-6 flex items-center justify-center bg-[#2a2a2a] text-[#e5e2e1] hover:bg-[#3a3939] text-[12px]"
                          >
                            -
                          </button>
                          <span className="text-[12px] font-mono text-white px-1">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="w-6 h-6 flex items-center justify-center bg-[#2a2a2a] text-[#e5e2e1] hover:bg-[#3a3939] text-[12px]"
                          >
                            +
                          </button>
                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className="text-[10px] text-[#9a8f80] hover:text-red-400 uppercase tracking-wider ml-auto cursor-pointer"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Salon Fitting Reservation Preference */}
                <div className="pt-4 border-t border-[rgba(255,255,255,0.08)] space-y-3">
                  <div>
                    <label className="text-[10px] text-[#ffdd9f] uppercase tracking-wider font-semibold block mb-1">
                      Salon Fitting Preference
                    </label>
                    <select
                      value={salonCity}
                      onChange={(e) => setSalonCity(e.target.value)}
                      className="w-full h-10 px-3 bg-[#1c1b1b] text-[#e5e2e1] text-[12px] border border-[rgba(229,192,123,0.2)] focus:outline-none focus:border-[#e5c07b] uppercase cursor-pointer"
                    >
                      <option value="Victoria Island, Lagos">Victoria Island, Lagos (Main Atelier)</option>
                      <option value="Mayfair, London">Mayfair, London (UK Flagship Suite)</option>
                      <option value="Manhattan, New York">Upper East Side, Manhattan, NY</option>
                      <option value="DIFC, Dubai">DIFC, Dubai (Middle East Flagship)</option>
                      <option value="Virtual Video Fitting">Virtual 3D Video Fitting (Worldwide)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] text-[#d1c5b4] uppercase tracking-wider font-semibold block mb-1">
                      Fitting Notes for Master Tailor
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Wedding coronation date in November; need expedited fitting..."
                      value={appointmentNote}
                      onChange={(e) => setAppointmentNote(e.target.value)}
                      className="w-full h-10 px-3 bg-[#1c1b1b] text-[#e5e2e1] text-[12px] border border-[rgba(229,192,123,0.2)] focus:outline-none focus:border-[#e5c07b]"
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Drawer Footer Subtotal & Action */}
          {items.length > 0 && !confirmedReservation && (
            <div className="p-5 sm:p-6 bg-[#0e0e0e] border-t border-[rgba(229,192,123,0.25)] space-y-3">
              <div className="flex justify-between items-center text-[12px] text-[#d1c5b4]">
                <span>Full Commission Investment:</span>
                <span className="font-mono text-white font-semibold">₦{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-[12px] text-[#ffdd9f] font-semibold">
                <span>Initial Atelier Deposit (50%):</span>
                <span className="font-mono text-[16px]">₦{deposit.toLocaleString()}</span>
              </div>
              <p className="text-[10px] text-[#9a8f80] leading-tight">
                Deposit activates hand-loom weaving and reserves your private salon fitting suite.
              </p>

              <button
                onClick={handleConfirm}
                className="w-full h-12 bg-[#e5c07b] text-[#412d00] hover:bg-[#f1dfc2] text-[11px] uppercase font-bold tracking-[0.2em] transition-all cursor-pointer shadow-lg active:scale-98 flex items-center justify-center gap-2"
              >
                <span>Confirm Atelier Reservation</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
