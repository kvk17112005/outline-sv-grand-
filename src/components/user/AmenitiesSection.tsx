import React from 'react';
import {
  Wifi,
  Coffee,
  Zap,
  ShieldCheck,
  CreditCard,
  Building,
  Tv,
  Car,
  Utensils,
  Sparkles,
  PhoneCall,
  Clock
} from 'lucide-react';

export const AmenitiesSection: React.FC = () => {
  const hotelAmenities = [
    {
      icon: <Wifi className="w-5 h-5 text-[#ee2e24]" />,
      title: 'High-Speed 5G Wi-Fi',
      desc: 'Seamless ultra-fast connectivity suitable for remote work and streaming'
    },
    {
      icon: <Utensils className="w-5 h-5 text-amber-600" />,
      title: 'The Regal Bistro',
      desc: 'In-house multi-cuisine restaurant serving breakfast buffet and all-day dining'
    },
    {
      icon: <Clock className="w-5 h-5 text-blue-600" />,
      title: '24/7 Front Desk & Security',
      desc: 'Round-the-clock reception concierge, CCTV coverage, and night duty staff'
    },
    {
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      title: '100% Power Backup',
      desc: 'Uninterrupted power support across all rooms, elevators, and air conditioning'
    },
    {
      icon: <Building className="w-5 h-5 text-indigo-600" />,
      title: 'Modern Elevator Access',
      desc: 'High-speed passenger elevator servicing all 3 floors smoothly'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
      title: 'Sanitized Clean Stays',
      desc: 'Strict hygiene protocols with fresh sealed toiletries and disinfected linen'
    },
    {
      icon: <CreditCard className="w-5 h-5 text-purple-600" />,
      title: 'All Payment Modes Accepted',
      desc: 'Pay at hotel via cash, cards, UPI QR, or contactless wallet transactions'
    },
    {
      icon: <Car className="w-5 h-5 text-gray-700" />,
      title: 'Valet Parking & Airport Drop',
      desc: 'Secure on-site parking bays and on-demand chauffeur transfers'
    }
  ];

  return (
    <section className="my-10 bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-xs">
      <div className="mb-6">
        <span className="text-xs font-bold text-[#ee2e24] uppercase tracking-wider">
          Hotel Facilities & Comforts
        </span>
        <h3 className="text-xl font-extrabold text-gray-900 tracking-tight mt-0.5">
          Amenities at Townhouse Grand Regal
        </h3>
        <p className="text-xs text-gray-500 mt-1">
          Engineered for business travellers, families, and couples visiting Central Delhi.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {hotelAmenities.map((amenity, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-gray-50/70 border border-gray-100 hover:border-gray-200 transition-colors"
          >
            <div className="p-2.5 rounded-lg bg-white shadow-xs w-fit mb-3">
              {amenity.icon}
            </div>
            <h4 className="text-sm font-bold text-gray-900">{amenity.title}</h4>
            <p className="text-xs text-gray-500 mt-1 leading-relaxed">{amenity.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
