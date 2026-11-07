import React, { useState } from 'react';
import { TabType, Garment, CartItem, CommissionOrder, CategoryType } from './types';
import { INITIAL_GARMENTS, SAMPLE_ORDERS } from './data/garments';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { HomeScreen } from './components/HomeScreen';
import { AscentLookbook } from './components/AscentLookbook';
import { BespokeAtelier } from './components/BespokeAtelier';
import { TrackOrder } from './components/TrackOrder';
import { AdminConsole } from './components/AdminConsole';
import { ReserveToast } from './components/ReserveToast';
import { ConsultationBagDrawer } from './components/ConsultationBagDrawer';
import { SearchModal } from './components/SearchModal';
import { GarmentModal } from './components/GarmentModal';

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabType>('home');
  const [garments, setGarments] = useState<Garment[]>(INITIAL_GARMENTS);
  const [orders, setOrders] = useState<CommissionOrder[]>(SAMPLE_ORDERS);

  // Pre-load with 2 items matching the screenshot's cart badge '2'
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'cart-1',
      garment: INITIAL_GARMENTS[0], // The Emerald Monarch Agbada
      quantity: 1,
    },
    {
      id: 'cart-2',
      garment: INITIAL_GARMENTS[3], // Lion Crest Obsidian Tunic
      quantity: 1,
    },
  ]);

  // Toast state
  const [toast, setToast] = useState<{
    visible: boolean;
    title: string;
    price: string;
  }>({
    visible: false,
    title: '',
    price: '',
  });

  // Modal / Drawer states
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [inspectedGarment, setInspectedGarment] = useState<Garment | null>(null);
  const [ascentCategoryFilter, setAscentCategoryFilter] = useState<CategoryType>('all');

  // Trigger reservation toast & add to cart
  const handleReserve = (garment: Garment) => {
    setCartItems((prev) => {
      const existing = prev.find((it) => it.garment.id === garment.id);
      if (existing) {
        return prev.map((it) =>
          it.garment.id === garment.id ? { ...it, quantity: it.quantity + 1 } : it
        );
      }
      return [
        ...prev,
        {
          id: `cart-${Date.now()}`,
          garment,
          quantity: 1,
        },
      ];
    });

    setToast({
      visible: true,
      title: garment.title,
      price: garment.price,
    });

    setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 3800);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((it) => {
          if (it.id === id) {
            const newQty = it.quantity + delta;
            return newQty > 0 ? { ...it, quantity: newQty } : null;
          }
          return it;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((it) => it.id !== id));
  };

  const handleCommissionCreated = (newOrder: CommissionOrder) => {
    setOrders((prev) => [newOrder, ...prev]);
  };

  const handleUpdateOrderStatus = (
    orderId: string,
    newStatus: CommissionOrder['status']
  ) => {
    setOrders((prev) =>
      prev.map((ord) => (ord.orderId === orderId ? { ...ord, status: newStatus } : ord))
    );
  };

  const handleAddArtisanHours = (orderId: string, hours: number) => {
    setOrders((prev) =>
      prev.map((ord) => {
        if (ord.orderId === orderId) {
          const updatedHours = ord.currentStageHours + hours;
          const updatedPercent = Math.min(100, Math.round((updatedHours / ord.totalHours) * 100));
          return {
            ...ord,
            currentStageHours: updatedHours,
            progressPercent: updatedPercent,
          };
        }
        return ord;
      })
    );
  };

  const handleToggleGarmentStock = (garmentId: string) => {
    setGarments((prev) =>
      prev.map((g) => (g.id === garmentId ? { ...g, inStock: !g.inStock } : g))
    );
  };

  const totalCartCount = cartItems.reduce((acc, it) => acc + it.quantity, 0);

  return (
    <div className="bg-[#131313] text-[#e5e2e1] min-h-screen flex flex-col selection:bg-[#e5c07b] selection:text-[#412d00] font-sans">
      {/* Top Fixed Header */}
      <Header
        currentTab={currentTab}
        onNavigate={(tab) => setCurrentTab(tab)}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenBooking={() => setCurrentTab('bespoke')}
      />

      {/* Main Content Area */}
      <main className="flex flex-col relative w-full pt-20 pb-24 bg-[#131313] min-h-screen">
        {currentTab === 'home' && (
          <HomeScreen
            onNavigate={(tab) => setCurrentTab(tab)}
            onReserve={handleReserve}
            onInspect={(garment) => setInspectedGarment(garment)}
            onSelectCategoryFilter={(cat) => {
              setAscentCategoryFilter(cat as CategoryType);
              setCurrentTab('ascent');
            }}
          />
        )}

        {currentTab === 'ascent' && (
          <AscentLookbook
            garments={garments}
            onReserve={handleReserve}
            onInspect={(garment) => setInspectedGarment(garment)}
            initialCategory={ascentCategoryFilter}
          />
        )}

        {currentTab === 'bespoke' && (
          <BespokeAtelier
            onCommissionCreated={handleCommissionCreated}
            onNavigateToTrack={() => setCurrentTab('track')}
          />
        )}

        {currentTab === 'track' && <TrackOrder orders={orders} />}

        {currentTab === 'atelier-admin' && (
          <AdminConsole
            orders={orders}
            garments={garments}
            onUpdateOrderStatus={handleUpdateOrderStatus}
            onAddArtisanHours={handleAddArtisanHours}
            onToggleGarmentStock={handleToggleGarmentStock}
          />
        )}
      </main>

      {/* Bottom Sticky Luxury Navigation */}
      <BottomNav currentTab={currentTab} onNavigate={(tab) => setCurrentTab(tab)} />

      {/* Quick Reserve Toast Notification */}
      <ReserveToast
        visible={toast.visible}
        itemTitle={toast.title}
        itemPrice={toast.price}
        onReview={() => {
          setToast((prev) => ({ ...prev, visible: false }));
          setIsCartOpen(true);
        }}
        onClose={() => setToast((prev) => ({ ...prev, visible: false }))}
      />

      {/* Consultation Bag Slide-Over Drawer */}
      <ConsultationBagDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onBookAtelier={() => {
          setIsCartOpen(false);
          setCurrentTab('bespoke');
        }}
      />

      {/* Quick Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        garments={garments}
        onSelectGarment={(garment) => {
          setInspectedGarment(garment);
        }}
        onReserve={handleReserve}
      />

      {/* Garment Detail Inspection Modal */}
      <GarmentModal
        garment={inspectedGarment}
        onClose={() => setInspectedGarment(null)}
        onReserve={handleReserve}
        onConfigureBespoke={() => {
          setInspectedGarment(null);
          setCurrentTab('bespoke');
        }}
      />
    </div>
  );
}
