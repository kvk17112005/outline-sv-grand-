import React, { useState } from 'react';
import { useHotel } from '../../context/HotelContext';
import { RoomType, calculateStayPricing, getRoom24HourPrice } from '../../types/hotel';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Users,
  BedDouble,
  ShieldCheck,
  Check,
  Sparkles,
  Info,
  ArrowRight,
  Flame,
  Wind,
  Fan,
  Zap,
  Clock
} from 'lucide-react';

interface RoomCardProps {
  room: RoomType;
}

export const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  const {
    formatCurrency,
    nightsCount,
    searchState,
    stayDuration,
    setStayDuration,
    setSelectedRoomForDetails,
    setSelectedRoomForBooking,
    currentUser,
    physicalRooms
  } = useHotel();

  const [activeImageIdx, setActiveImageIdx] = useState(0);

  // Calculate live available count for this room category
  const availableCount = physicalRooms.filter(
    (r) => r.roomTypeId === room.id && r.status === 'available'
  ).length;

  // Exact stay pricing calculation with 12h (30% off) vs 24h
  const pricing24h = calculateStayPricing(room, '24h', nightsCount, searchState.roomsCount);
  const pricing12h = calculateStayPricing(room, '12h', 1, searchState.roomsCount);

  const activePricing = stayDuration === '12h' ? pricing12h : pricing24h;
  const rateToDisplay = activePricing.effectiveStayRate;
  const totalStayCost = activePricing.totalBaseRoomCost;

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIdx((prev) => (prev === 0 ? room.images.length - 1 : prev - 1));
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIdx((prev) => (prev + 1) % room.images.length);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col md:flex-row">
      {/* Left / Top: Photo Carousel Stage */}
      <div className="md:w-5/12 lg:w-4/12 relative h-64 md:h-auto min-h-[260px] bg-gray-900 shrink-0 group">
        <img
          src={room.images[activeImageIdx]}
          alt={room.name}
          className="w-full h-full object-cover transition-opacity duration-300"
        />

        {/* Category & AC/Non-AC Badges Overlay */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="bg-[#1c1c1c]/90 backdrop-blur-xs text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-md uppercase tracking-wider">
              {room.bedroomType === 'double' ? 'Double Bedroom' : 'Single Bedroom'}
            </span>
            {activePricing.isAC ? (
              <span className="bg-cyan-700 text-white text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1 shadow-xs">
                <Wind className="w-3 h-3" />
                <span>AC Room</span>
              </span>
            ) : (
              <span className="bg-amber-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1 shadow-xs">
                <Fan className="w-3 h-3" />
                <span>Non-AC</span>
              </span>
            )}
          </div>

          {room.featured && (
            <span className="bg-amber-500 text-black text-[10px] font-black px-2 py-0.5 rounded-md flex items-center gap-1 shadow-md w-fit">
              <Flame className="w-3 h-3 fill-black" />
              <span>Popular Choice</span>
            </span>
          )}
        </div>

        {/* Carousel arrows */}
        <button
          onClick={handlePrevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white hover:bg-black/75 transition-opacity opacity-0 group-hover:opacity-100 cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={handleNextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white hover:bg-black/75 transition-opacity opacity-0 group-hover:opacity-100 cursor-pointer"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Carousel Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
          {room.images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setActiveImageIdx(i);
              }}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                i === activeImageIdx ? 'w-4 bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Right: Room Content & Specs */}
      <div className="p-5 md:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Room Name & Specs Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-3 border-b border-gray-100">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug">
                  {room.name}
                </h3>
              </div>
              <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{room.tagline}</p>
            </div>

            {/* Availability Pill */}
            <div className="shrink-0">
              {availableCount > 0 ? (
                <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{availableCount} Available Now</span>
                </span>
              ) : (
                <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-200 px-2.5 py-1 rounded-full">
                  Sold Out for Selected Date
                </span>
              )}
            </div>
          </div>

          {/* Key Specs Pills: Size, Bed, Max Guests */}
          <div className="flex flex-wrap items-center gap-4 py-3 text-xs text-gray-700 font-medium">
            <div className="flex items-center gap-1.5">
              <Maximize2 className="w-3.5 h-3.5 text-gray-400" />
              <span>{room.sizeSqFt} sq ft</span>
            </div>
            <div className="h-3 w-px bg-gray-200" />
            <div className="flex items-center gap-1.5">
              <BedDouble className="w-3.5 h-3.5 text-gray-400" />
              <span>{room.bedType}</span>
            </div>
            <div className="h-3 w-px bg-gray-200" />
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-gray-400" />
              <span>Fits up to {room.maxGuests} Guests</span>
            </div>
          </div>

          {/* 12-Hour vs 24-Hour Stay Duration Pricing Banner */}
          <div className="mb-3 p-3 rounded-xl bg-gray-50 border border-gray-200 text-xs flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="font-bold text-gray-900">Choose Stay:</span>
              <div className="inline-flex rounded-lg bg-gray-200 p-0.5">
                <button
                  type="button"
                  onClick={() => setStayDuration('12h')}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all cursor-pointer flex items-center gap-1 ${
                    stayDuration === '12h'
                      ? 'bg-[#ee2e24] text-white shadow-xs'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  <Zap className="w-3 h-3 fill-current" />
                  <span>12 Hours (₹{pricing12h.effectiveStayRate})</span>
                  <span className="text-[9px] bg-white/20 px-1 rounded">30% OFF</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStayDuration('24h')}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all cursor-pointer flex items-center gap-1 ${
                    stayDuration === '24h'
                      ? 'bg-gray-900 text-white shadow-xs'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  <Clock className="w-3 h-3" />
                  <span>24 Hours (₹{pricing24h.twentyFourHourBase})</span>
                </button>
              </div>
            </div>

            <div className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              {stayDuration === '12h' ? '⚡ 30% Express Discount Applied' : '🕒 24-Hour Full Day Stay'}
            </div>
          </div>

          {/* Key Amenities Badges */}
          <div className="flex flex-wrap gap-1.5 pb-3">
            {room.amenities.slice(0, 5).map((amenity, idx) => (
              <span
                key={idx}
                className="text-[11px] bg-gray-50 text-gray-700 border border-gray-200 px-2 py-0.5 rounded-md flex items-center gap-1"
              >
                <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                <span>{amenity}</span>
              </span>
            ))}
            {room.amenities.length > 5 && (
              <button
                onClick={() => setSelectedRoomForDetails(room)}
                className="text-[11px] text-[#ee2e24] font-bold hover:underline px-1 py-0.5"
              >
                +{room.amenities.length - 5} More
              </button>
            )}
          </div>

          {/* Cancellation Assurance */}
          <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-semibold mb-3">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>FREE Cancellation up to 24 hours prior to check-in in Tadipatri</span>
          </div>
        </div>

        {/* Bottom Section: Price & Action */}
        <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          {/* Price breakdown */}
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-black text-gray-900">
                {formatCurrency(rateToDisplay)}
              </span>
              <span className="text-xs text-gray-500 font-medium">
                / {stayDuration === '12h' ? '12-hour stay' : '24-hour stay'}
              </span>
              {stayDuration === '12h' && (
                <span className="text-xs text-gray-400 line-through">
                  ₹{pricing12h.twentyFourHourBase}
                </span>
              )}
            </div>

            {/* Breakdown */}
            <div className="text-[11px] text-gray-600 mt-1">
              {stayDuration === '12h' ? (
                <span className="text-emerald-700 font-bold">
                  ₹{pricing12h.twentyFourHourBase} regular 24h price minus 30% discount = ₹{pricing12h.effectiveStayRate}
                </span>
              ) : (
                <span>Official 24-hour fixed tariff: ₹{pricing24h.twentyFourHourBase}</span>
              )}
            </div>

            <div className="text-[11px] text-gray-500 mt-0.5">
              Total base cost:{' '}
              <span className="font-bold text-gray-900">{formatCurrency(totalStayCost)}</span>
              {searchState.roomsCount > 1 && ` (${searchState.roomsCount} rooms)`}
            </div>

            {/* Direct Booking Benefit */}
            <div className="mt-1.5 flex items-center gap-1 text-[11px] text-amber-900 bg-amber-50 border border-amber-200/70 px-2 py-0.5 rounded-md w-fit font-medium">
              <Sparkles className="w-3 h-3 text-amber-600 shrink-0" />
              <span>Direct Booking: Free High-Speed 5G Wi-Fi & Instant Keys</span>
            </div>
          </div>

          {/* Buttons: View Details & Book Now */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSelectedRoomForDetails(room)}
              className="px-3.5 py-2.5 border border-gray-300 hover:border-gray-400 text-gray-700 text-xs font-bold rounded-xl transition-colors cursor-pointer"
            >
              View Details
            </button>

            <button
              onClick={() => setSelectedRoomForBooking(room)}
              disabled={availableCount === 0}
              className="px-5 py-2.5 bg-[#ee2e24] hover:bg-[#d11218] disabled:bg-gray-300 disabled:cursor-not-allowed text-white text-xs font-bold rounded-xl transition-all shadow-md hover:shadow-lg flex items-center gap-1.5 cursor-pointer"
            >
              <span>Book Room</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
