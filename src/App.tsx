import React from 'react';
import { HotelProvider, useHotel } from './context/HotelContext';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { Toast } from './components/common/Toast';
import { NotificationDrawer } from './components/common/NotificationDrawer';
import { AuthModal } from './components/common/AuthModal';
import { ImageLightbox } from './components/common/ImageLightbox';

import { UserPortal } from './components/user/UserPortal';
import { RoomDetailsModal } from './components/user/RoomDetailsModal';
import { BookingCheckoutModal } from './components/user/BookingCheckoutModal';
import { BookingSuccessModal } from './components/user/BookingSuccessModal';
import { MyBookingsModal } from './components/user/MyBookingsModal';

import { HotelAdminDashboard } from './components/hotelAdmin/HotelAdminDashboard';
import { SuperAdminDashboard } from './components/superAdmin/SuperAdminDashboard';

const MainContent: React.FC = () => {
  const { currentView } = useHotel();

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f7f8] text-gray-900 font-sans selection:bg-[#ee2e24] selection:text-white">
      {/* Top Header */}
      <Header />

      {/* Main Viewport */}
      <main className="flex-1 pb-12">
        {currentView === 'user' && <UserPortal />}
        {currentView === 'hotel_admin' && <HotelAdminDashboard />}
        {currentView === 'super_admin' && <SuperAdminDashboard />}
      </main>

      {/* Global Modals & Overlays */}
      <RoomDetailsModal />
      <BookingCheckoutModal />
      <BookingSuccessModal />
      <MyBookingsModal />
      <AuthModal />
      <NotificationDrawer />
      <ImageLightbox />
      <Toast />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <HotelProvider>
      <MainContent />
    </HotelProvider>
  );
}
