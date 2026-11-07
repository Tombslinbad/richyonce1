import React, { useState } from 'react';
import { CommissionOrder, Garment } from '../types';

interface AdminConsoleProps {
  orders: CommissionOrder[];
  garments: Garment[];
  onUpdateOrderStatus: (orderId: string, newStatus: CommissionOrder['status']) => void;
  onAddArtisanHours: (orderId: string, hours: number) => void;
  onToggleGarmentStock: (garmentId: string) => void;
}

export const AdminConsole: React.FC<AdminConsoleProps> = ({
  orders,
  garments,
  onUpdateOrderStatus,
  onAddArtisanHours,
  onToggleGarmentStock,
}) => {
  const [activeTab, setActiveTab] = useState<'commissions' | 'catalog' | 'appointments'>('commissions');
  const [selectedOrder, setSelectedOrder] = useState<CommissionOrder>(orders[0] || null);
  const [additionalHours, setAdditionalHours] = useState<number>(8);

  const [appointments, setAppointments] = useState([
    {
      id: 'apt-01',
      client: 'Prince Adebayo Ogundipe',
      salon: 'Victoria Island, Lagos (Main Atelier)',
      date: 'Nov 12, 2026',
      time: '14:00 West Africa Time',
      consultant: 'Master Chukwudi',
      type: 'First Basting & Agbada Wingspan Drape'
    },
    {
      id: 'apt-02',
      client: 'Lord & Lady Sterling-Cole',
      salon: 'Mayfair, London (Private Suite)',
      date: 'Nov 15, 2026',
      time: '11:30 GMT',
      consultant: 'Director Alistair & Amina B.',
      type: 'Nuptial Gown Corsetry & Cape Alignment'
    },
    {
      id: 'apt-03',
      client: 'Kofi Mensah',
      salon: 'Upper East Side, New York',
      date: 'Nov 22, 2026',
      time: '16:00 EST',
      consultant: 'Lead Fitter Tunde',
      type: 'Red Carpet Stance & Fan Verification'
    }
  ]);

  const [newClientName, setNewClientName] = useState('');
  const [newSalDate, setNewSalDate] = useState('');
  const [newSalonCity, setNewSalonCity] = useState('Victoria Island, Lagos');

  const handleCreateAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClientName || !newSalDate) return;
    setAppointments([
      ...appointments,
      {
        id: `apt-${Date.now()}`,
        client: newClientName,
        salon: newSalonCity,
        date: newSalDate,
        time: '14:00 Local Time',
        consultant: 'Master Chukwudi',
        type: 'Initial Anatomical Drape Fitting'
      }
    ]);
    setNewClientName('');
    setNewSalDate('');
  };

  const totalArtisanHours = orders.reduce((sum, o) => sum + o.currentStageHours, 0);

  return (
    <div className="flex flex-col w-full text-[#e5e2e1] max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-6">
      {/* Header */}
      <div className="border-b border-[rgba(229,192,123,0.2)] pb-6 mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-[#ffdd9f]">shield_person</span>
            <span className="text-[10px] tracking-[0.25em] text-[#ffdd9f] uppercase font-semibold">
              Haute Atelier Master Console
            </span>
          </div>
          <h1 className="font-serif text-[28px] sm:text-[36px] uppercase text-[#e5e2e1] tracking-tight mt-1">
            Guild Workstation &amp; Operations
          </h1>
          <p className="text-[13px] text-[#d1c5b4] max-w-lg font-light mt-1">
            Oversee active sovereign commissions, track artisan loom hours, coordinate worldwide salon fittings, and manage the coronation lookbook archive.
          </p>
        </div>

        {/* Console Mode Selector */}
        <div className="flex items-center gap-1 bg-[#1c1b1b] p-1 border border-[rgba(255,255,255,0.08)]">
          <button
            onClick={() => setActiveTab('commissions')}
            className={`px-3 py-1.5 text-[11px] uppercase font-semibold tracking-wider transition-all cursor-pointer ${
              activeTab === 'commissions'
                ? 'bg-[#e5c07b] text-[#412d00]'
                : 'text-[#d1c5b4] hover:text-white'
            }`}
          >
            Commissions ({orders.length})
          </button>
          <button
            onClick={() => setActiveTab('catalog')}
            className={`px-3 py-1.5 text-[11px] uppercase font-semibold tracking-wider transition-all cursor-pointer ${
              activeTab === 'catalog'
                ? 'bg-[#e5c07b] text-[#412d00]'
                : 'text-[#d1c5b4] hover:text-white'
            }`}
          >
            Archive ({garments.length})
          </button>
          <button
            onClick={() => setActiveTab('appointments')}
            className={`px-3 py-1.5 text-[11px] uppercase font-semibold tracking-wider transition-all cursor-pointer ${
              activeTab === 'appointments'
                ? 'bg-[#e5c07b] text-[#412d00]'
                : 'text-[#d1c5b4] hover:text-white'
            }`}
          >
            Salons ({appointments.length})
          </button>
        </div>
      </div>

      {/* KPI Metric Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <div className="p-4 bg-[#1c1b1b] border border-[rgba(229,192,123,0.2)] flex flex-col">
          <span className="text-[10px] text-[#9a8f80] uppercase tracking-wider font-semibold">
            Active Commissions
          </span>
          <span className="font-serif text-[28px] text-[#ffdd9f] font-mono font-bold mt-1">
            {orders.length}
          </span>
          <span className="text-[11px] text-[#d1c5b4] font-light mt-0.5">
            Lagos, London, NYC &amp; Dubai
          </span>
        </div>

        <div className="p-4 bg-[#1c1b1b] border border-[rgba(229,192,123,0.2)] flex flex-col">
          <span className="text-[10px] text-[#9a8f80] uppercase tracking-wider font-semibold">
            Artisan Handcraft Log
          </span>
          <span className="font-serif text-[28px] text-[#e5e2e1] font-mono font-bold mt-1">
            {totalArtisanHours} hrs
          </span>
          <span className="text-[11px] text-[#d1c5b4] font-light mt-0.5">
            Gold threadwork &amp; loom weaving
          </span>
        </div>

        <div className="p-4 bg-[#1c1b1b] border border-[rgba(229,192,123,0.2)] flex flex-col">
          <span className="text-[10px] text-[#9a8f80] uppercase tracking-wider font-semibold">
            Scheduled Salon Fittings
          </span>
          <span className="font-serif text-[28px] text-[#ffdd9f] font-mono font-bold mt-1">
            {appointments.length}
          </span>
          <span className="text-[11px] text-[#d1c5b4] font-light mt-0.5">
            Private VIP fitting appointments
          </span>
        </div>

        <div className="p-4 bg-[#1c1b1b] border border-[rgba(229,192,123,0.2)] flex flex-col">
          <span className="text-[10px] text-[#9a8f80] uppercase tracking-wider font-semibold">
            Guild Quality Rating
          </span>
          <span className="font-serif text-[28px] text-[#e5e2e1] font-mono font-bold mt-1">
            100%
          </span>
          <span className="text-[11px] text-[#d1c5b4] font-light mt-0.5">
            Double-checked under studio halogen
          </span>
        </div>
      </div>

      {/* TAB 1: COMMISSIONS WORKFLOW */}
      {activeTab === 'commissions' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Order List */}
          <div className="lg:col-span-1 space-y-3">
            <h2 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#ffdd9f] mb-2">
              Sovereign Commission Queue
            </h2>
            {orders.map((ord) => {
              const isSelected = selectedOrder?.orderId === ord.orderId;
              return (
                <div
                  key={ord.orderId}
                  onClick={() => setSelectedOrder(ord)}
                  className={`p-4 bg-[#1c1b1b] border cursor-pointer transition-all ${
                    isSelected
                      ? 'border-[#e5c07b] bg-[#112520] ring-1 ring-[#e5c07b]'
                      : 'border-[rgba(255,255,255,0.06)] hover:border-[rgba(229,192,123,0.3)]'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[12px] font-bold text-[#ffdd9f]">{ord.orderId}</span>
                    <span className="text-[9px] uppercase px-2 py-0.5 bg-[#2a2a2a] text-white font-semibold">
                      {ord.status}
                    </span>
                  </div>
                  <h3 className="font-serif text-[15px] uppercase text-[#e5e2e1] mt-1 truncate">
                    {ord.garmentTitle}
                  </h3>
                  <div className="text-[11px] text-[#d1c5b4] font-light mt-0.5 flex justify-between">
                    <span>{ord.clientName}</span>
                    <span className="font-mono text-[#ffdd9f]">{ord.totalAmount}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Order Detail & Artisan Control */}
          <div className="lg:col-span-2 bg-[#1c1b1b] border border-[rgba(229,192,123,0.25)] p-5 sm:p-6 shadow-xl">
            {selectedOrder ? (
              <div className="flex flex-col gap-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[rgba(255,255,255,0.08)] gap-2">
                  <div>
                    <span className="text-[10px] text-[#ffdd9f] uppercase tracking-wider font-semibold font-mono">
                      {selectedOrder.orderId}
                    </span>
                    <h3 className="font-serif text-[22px] uppercase text-[#e5e2e1]">
                      {selectedOrder.garmentTitle}
                    </h3>
                    <p className="text-[12px] text-[#d1c5b4]">
                      Client: <strong className="text-white">{selectedOrder.clientName}</strong> ({selectedOrder.clientEmail})
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] text-[#9a8f80] uppercase tracking-wider block">Commission Value</span>
                    <span className="font-mono text-[20px] font-bold text-[#ffdd9f]">{selectedOrder.totalAmount}</span>
                  </div>
                </div>

                {/* Status Advancement Selector */}
                <div>
                  <label className="text-[11px] text-[#ffdd9f] uppercase tracking-wider font-semibold block mb-1.5">
                    Update Production Stage
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5">
                    {(['drafting', 'weaving', 'embroidery', 'assembly', 'dispatched'] as const).map((st) => (
                      <button
                        key={st}
                        onClick={() => {
                          onUpdateOrderStatus(selectedOrder.orderId, st);
                          setSelectedOrder({ ...selectedOrder, status: st });
                        }}
                        className={`p-2 text-[10px] uppercase font-bold tracking-wider cursor-pointer border transition-all text-center ${
                          selectedOrder.status === st
                            ? 'bg-[#e5c07b] text-[#412d00] border-[#e5c07b]'
                            : 'bg-[#2a2a2a] text-[#d1c5b4] border-[rgba(255,255,255,0.06)] hover:border-[rgba(229,192,123,0.3)]'
                        }`}
                      >
                        {st}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Artisan Hours Logger */}
                <div className="p-4 bg-[#201f1f] border border-[rgba(229,192,123,0.2)] flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] uppercase font-semibold text-[#e5e2e1] block">
                      Log Artisan Handcraft Shift
                    </span>
                    <span className="text-[12px] text-[#d1c5b4] font-light">
                      Currently logged: <strong className="text-[#ffdd9f] font-mono">{selectedOrder.currentStageHours} / {selectedOrder.totalHours} hrs</strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={additionalHours}
                      onChange={(e) => setAdditionalHours(Number(e.target.value))}
                      className="w-16 h-9 px-2 bg-[#0e0e0e] text-[#e5e2e1] text-center font-mono border border-[rgba(255,255,255,0.1)] rounded-none"
                    />
                    <button
                      onClick={() => {
                        onAddArtisanHours(selectedOrder.orderId, additionalHours);
                        setSelectedOrder({
                          ...selectedOrder,
                          currentStageHours: selectedOrder.currentStageHours + additionalHours,
                          progressPercent: Math.min(
                            100,
                            Math.round(((selectedOrder.currentStageHours + additionalHours) / selectedOrder.totalHours) * 100)
                          )
                        });
                      }}
                      className="h-9 px-3.5 bg-[#e5c07b] text-[#412d00] hover:bg-[#f1dfc2] text-[10px] uppercase font-bold tracking-wider cursor-pointer transition-colors"
                    >
                      + Add Hours
                    </button>
                  </div>
                </div>

                {/* Courier & Delivery Details */}
                <div className="p-4 bg-[#0e0e0e] border border-[rgba(255,255,255,0.06)] text-[12px] font-mono space-y-1">
                  <div>COURIER TAG: <span className="text-[#ffdd9f]">{selectedOrder.trackingCode}</span></div>
                  <div>SALON DESTINATION: <span className="text-white">{selectedOrder.destinationCity}</span></div>
                  <div>TARGET DELIVERY: <span className="text-[#ffdd9f]">{selectedOrder.estimatedDelivery}</span></div>
                </div>
              </div>
            ) : (
              <div className="py-20 text-center text-[#9a8f80]">Select a commission to manage.</div>
            )}
          </div>
        </div>
      )}

      {/* TAB 2: CATALOG ARCHIVE MANAGER */}
      {activeTab === 'catalog' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#ffdd9f]">
              Couture Archive &amp; Lookbook Inventory
            </h2>
            <span className="text-[11px] text-[#d1c5b4]">
              {garments.length} Masterpiece Silhouettes Registered
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {garments.map((g) => (
              <div
                key={g.id}
                className="p-4 bg-[#1c1b1b] border border-[rgba(229,192,123,0.18)] flex gap-4 items-center justify-between"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={g.image}
                    alt={g.title}
                    className="w-16 h-20 object-cover object-top flex-shrink-0 bg-[#0e0e0e]"
                  />
                  <div className="min-w-0">
                    <h3 className="font-serif text-[15px] uppercase text-[#e5e2e1] truncate font-semibold">
                      {g.title}
                    </h3>
                    <span className="text-[12px] text-[#ffdd9f] font-mono font-bold block">
                      {g.price}
                    </span>
                    <span className="text-[10px] text-[#9a8f80] uppercase tracking-wider block mt-0.5 truncate">
                      {g.provenance} · {g.artisanHours} hrs
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2 flex-shrink-0">
                  <span
                    className={`px-2 py-0.5 text-[9px] uppercase tracking-wider font-bold ${
                      g.inStock ? 'bg-[#112520] text-[#ffdd9f]' : 'bg-[#353534] text-[#9a8f80]'
                    }`}
                  >
                    {g.inStock ? 'Available' : 'Archived'}
                  </span>
                  <button
                    onClick={() => onToggleGarmentStock(g.id)}
                    className="px-2.5 py-1 text-[10px] uppercase tracking-wider bg-[#2a2a2a] text-[#e5e2e1] hover:bg-[#3a3939] border border-[rgba(255,255,255,0.08)] cursor-pointer"
                  >
                    Toggle Status
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: SALON APPOINTMENTS */}
      {activeTab === 'appointments' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-3">
            <h2 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#ffdd9f] mb-2">
              Scheduled VIP Atelier Fittings
            </h2>
            {appointments.map((apt) => (
              <div
                key={apt.id}
                className="p-4 bg-[#1c1b1b] border border-[rgba(229,192,123,0.2)] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-[16px] text-white uppercase font-semibold">
                      {apt.client}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 bg-[#112520] text-[#ffdd9f] uppercase tracking-wider font-mono">
                      Confirmed
                    </span>
                  </div>
                  <div className="text-[12px] text-[#ffdd9f] mt-0.5 font-medium">
                    {apt.salon}
                  </div>
                  <div className="text-[11px] text-[#d1c5b4] mt-1 font-light">
                    {apt.type} · Master: {apt.consultant}
                  </div>
                </div>

                <div className="text-right sm:flex-shrink-0">
                  <div className="font-mono text-[13px] text-white font-bold">{apt.date}</div>
                  <div className="text-[11px] text-[#9a8f80]">{apt.time}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Add VIP Appointment Form */}
          <div className="bg-[#1c1b1b] border border-[rgba(229,192,123,0.25)] p-5">
            <h3 className="font-serif text-[18px] uppercase text-[#e5e2e1] mb-1">
              Book Fitting Appointment
            </h3>
            <p className="text-[12px] text-[#d1c5b4] font-light mb-4">
              Reserve an exclusive salon suite in Lagos, Mayfair, Manhattan, or DIFC.
            </p>

            <form onSubmit={handleCreateAppointment} className="space-y-3">
              <div>
                <label className="text-[10px] text-[#ffdd9f] uppercase tracking-wider font-semibold block mb-1">
                  Patron Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Senator Chuka Obi"
                  value={newClientName}
                  onChange={(e) => setNewClientName(e.target.value)}
                  className="w-full h-10 px-3 bg-[#0e0e0e] text-[#e5e2e1] text-[13px] border border-[rgba(229,192,123,0.2)] focus:outline-none focus:border-[#e5c07b]"
                />
              </div>

              <div>
                <label className="text-[10px] text-[#ffdd9f] uppercase tracking-wider font-semibold block mb-1">
                  Salon City
                </label>
                <select
                  value={newSalonCity}
                  onChange={(e) => setNewSalonCity(e.target.value)}
                  className="w-full h-10 px-3 bg-[#0e0e0e] text-[#e5e2e1] text-[12px] border border-[rgba(229,192,123,0.2)] focus:outline-none focus:border-[#e5c07b] uppercase"
                >
                  <option value="Victoria Island, Lagos">Victoria Island, Lagos</option>
                  <option value="Mayfair, London">Mayfair, London</option>
                  <option value="Upper East Side, Manhattan">Upper East Side, Manhattan</option>
                  <option value="DIFC, Dubai">DIFC, Dubai</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] text-[#ffdd9f] uppercase tracking-wider font-semibold block mb-1">
                  Fitting Date
                </label>
                <input
                  type="date"
                  required
                  value={newSalDate}
                  onChange={(e) => setNewSalDate(e.target.value)}
                  className="w-full h-10 px-3 bg-[#0e0e0e] text-[#e5e2e1] text-[12px] border border-[rgba(229,192,123,0.2)] focus:outline-none focus:border-[#e5c07b]"
                />
              </div>

              <button
                type="submit"
                className="w-full h-11 bg-[#e5c07b] text-[#412d00] hover:bg-[#f1dfc2] text-[10px] uppercase font-bold tracking-[0.2em] transition-colors cursor-pointer mt-2"
              >
                Schedule VIP Salon
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
