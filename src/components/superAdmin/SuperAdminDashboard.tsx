import React, { useState } from 'react';
import { useHotel } from '../../context/HotelContext';
import { AnalyticsDashboard } from './AnalyticsDashboard';
import { PricingManager } from './PricingManager';
import { OffersCouponsManager } from './OffersCouponsManager';
import { StaffManager } from './StaffManager';
import { ReviewsModeration } from './ReviewsModeration';
import { HotelSettings } from './HotelSettings';
import {
  BarChart3,
  Tag,
  Gift,
  Users,
  MessageSquare,
  Settings,
  ShieldCheck,
  Building
} from 'lucide-react';

export const SuperAdminDashboard: React.FC = () => {
  const { hotel, offers, reviews, staff } = useHotel();
  const [activeTab, setActiveTab] = useState<'analytics' | 'pricing' | 'offers' | 'staff' | 'reviews' | 'settings'>('analytics');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in duration-150">
      {/* Top Banner */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-wider mb-1">
            <ShieldCheck className="w-4 h-4" />
            <span>Super Administrator & Executive Console</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
            Hotel Governance & Financial Control
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Comprehensive oversight across pricing strategies, marketing promotions, team roles, and revenue intelligence.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-xl border border-gray-200 self-start md:self-auto">
          <Building className="w-4 h-4 text-[#ee2e24]" />
          <span className="text-xs font-bold text-gray-800">{hotel.name}</span>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-gray-200 bg-white rounded-t-2xl px-4 pt-2 shadow-xs overflow-x-auto no-scrollbar">
        {[
          { id: 'analytics', label: 'Financial Analytics & Reports', icon: <BarChart3 className="w-4 h-4" /> },
          { id: 'pricing', label: 'Room Tariffs & Surge', icon: <Tag className="w-4 h-4" /> },
          { id: 'offers', label: `Coupons & Offers (${offers.length})`, icon: <Gift className="w-4 h-4" /> },
          { id: 'staff', label: `Staff & RBAC (${staff.length})`, icon: <Users className="w-4 h-4" /> },
          { id: 'reviews', label: `Reviews Moderation (${reviews.length})`, icon: <MessageSquare className="w-4 h-4" /> },
          { id: 'settings', label: 'Hotel & Database Settings', icon: <Settings className="w-4 h-4" /> }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`py-3.5 px-4 font-bold text-xs flex items-center gap-2 border-b-2 whitespace-nowrap transition-all cursor-pointer ${
              activeTab === tab.id
                ? 'border-[#ee2e24] text-[#ee2e24]'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Panels */}
      <div>
        {activeTab === 'analytics' && <AnalyticsDashboard />}
        {activeTab === 'pricing' && <PricingManager />}
        {activeTab === 'offers' && <OffersCouponsManager />}
        {activeTab === 'staff' && <StaffManager />}
        {activeTab === 'reviews' && <ReviewsModeration />}
        {activeTab === 'settings' && <HotelSettings />}
      </div>
    </div>
  );
};
