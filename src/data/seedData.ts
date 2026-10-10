import {
  HotelInfo,
  RoomType,
  PhysicalRoom,
  Booking,
  OfferCoupon,
  Review,
  StaffMember,
  GuestRequest,
  NotificationItem,
  AddOnService,
  UserProfile
} from '../types/hotel';

export const INITIAL_HOTEL: HotelInfo = {
  id: 'hotel-001',
  name: 'SV Grand Luxury Rooms',
  oyoCode: 'TPT001',
  tagline: 'Premium Comfort & Luxury Stays in Tadipatri',
  type: 'SV Grand Luxury Stays',
  address: 'Railway Station Road, Near APSRTC Bus Stand',
  city: 'Tadipatri',
  state: 'Andhra Pradesh',
  pincode: '515411',
  country: 'India',
  coordinates: {
    lat: 14.9124,
    lng: 78.0128,
  },
  phone: '+91 85582 22555',
  email: 'stay@svgrandluxuryrooms.com',
  checkInTime: '12:00 PM',
  checkOutTime: '11:00 AM',
  rating: 4.8,
  totalReviewsCount: 894,
  taxPercentage: 12, // 12% GST
  cancellationPolicy: '100% Full Refund if cancelled up to 24 hours prior to check-in (12:00 PM on arrival date). Free cancellation guarantee on all flexible rates.',
  houseRules: [
    'Valid Government Photo ID (Aadhaar, Passport, Driving License, Voter ID) is required for all adult guests.',
    'Couple friendly: Local IDs & guests above 18 years welcome with valid IDs.',
    'Early check-in from 08:00 AM & late check-out till 02:00 PM subject to availability.',
    'Transparent pricing: AC room ₹1500 (1 guest) + ₹500/extra guest. Non-AC room ₹1000 (1 guest) + ₹500/extra guest.',
    '100% Power backup, sanitization, and 24x7 hot water geyser available.'
  ],
  images: {
    exterior: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80'
    ],
    lobby: [
      'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80'
    ],
    dining: [
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  surroundingPlaces: [
    { name: 'Tadipatri Railway Station (Main Line)', distance: '400 m (5 mins walk)', type: 'railway' },
    { name: 'Tadipatri APSRTC Bus Complex', distance: '350 m (4 mins walk)', type: 'metro' },
    { name: 'Bugga Ramalingeswara Swamy Temple (Historic)', distance: '1.8 km (5 mins drive)', type: 'attraction' },
    { name: 'Chintala Venkataramana Swamy Temple', distance: '1.2 km (4 mins drive)', type: 'attraction' },
    { name: 'Penna River Promenade & Scenic Ghats', distance: '1.5 km (5 mins drive)', type: 'attraction' },
    { name: 'Tadipatri Commercial Bazaar & Silk Center', distance: '500 m (6 mins walk)', type: 'shopping' },
    { name: 'Government Area Hospital Tadipatri', distance: '1.1 km (3 mins drive)', type: 'hospital' }
  ]
};

export const INITIAL_ROOM_TYPES: RoomType[] = [
  {
    id: 'rt-single-ac',
    category: 'single_ac',
    bedroomType: 'single',
    isAC: true,
    name: 'AC Single Room',
    tagline: 'Chilled split AC single bedroom for 1-2 guests with premium comfort',
    description: 'Bespoke single bedroom featuring energy-efficient split air-conditioning, high-density comfort mattress, high-speed Wi-Fi, 40" Smart LED TV with OTT apps, 24/7 hot water geyser, and daily housekeeping. Pricing: 24 Hours: ₹1,500 | 12 Hours: ₹1,050 (30% Discount).',
    sizeSqFt: 210,
    bedType: '1 Queen Bed',
    maxGuests: 2,
    basePrice: 1500,
    extraPersonPrice: 0,
    discountPercentage: 0,
    images: [
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1000&q=80'
    ],
    amenities: [
      'Split Air Conditioning',
      'High-Speed Wi-Fi',
      '40" Smart LED TV',
      '24/7 Power Backup',
      'Geyser Hot Water',
      'Daily Housekeeping',
      'Sanitized Toiletries',
      'Bottled Mineral Water'
    ],
    totalRooms: 7,
    featured: false
  },
  {
    id: 'rt-single-non-ac',
    category: 'single_non_ac',
    bedroomType: 'single',
    isAC: false,
    name: 'Non-AC Single Room',
    tagline: 'Well-ventilated economy single bedroom for 1-2 guests with ceiling fan',
    description: 'Clean, airy, budget-friendly single bedroom with high-speed ceiling fan, large window ventilation, comfortable queen mattress, LED TV, 24/7 hot water, and continuous power backup. Pricing: 24 Hours: ₹1,000 | 12 Hours: ₹700 (30% Discount).',
    sizeSqFt: 200,
    bedType: '1 Queen Bed',
    maxGuests: 2,
    basePrice: 1000,
    extraPersonPrice: 0,
    discountPercentage: 0,
    images: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1000&q=80'
    ],
    amenities: [
      'High-Speed Ceiling Fan',
      'Well Ventilated Windows',
      'High-Speed Wi-Fi',
      '32" LED TV',
      '24/7 Power Backup',
      'Geyser Hot Water',
      'Daily Housekeeping',
      'Sanitized Toiletries'
    ],
    totalRooms: 7,
    featured: false
  },
  {
    id: 'rt-double-ac',
    category: 'double_ac',
    bedroomType: 'double',
    isAC: true,
    name: 'AC Double Room',
    tagline: 'Spacious luxury double bedroom with split AC for families & couples (up to 4 guests)',
    description: 'Large luxury double bedroom featuring chilled split air-conditioning, King-size bed (or twin double beds), seating nook, 43" 4K Smart TV, dedicated workstation, wardrobe, and attached bathroom with 24/7 geyser hot water. Pricing: 24 Hours: ₹1,500 | 12 Hours: ₹1,050 (30% Discount).',
    sizeSqFt: 340,
    bedType: '1 King Bed (or 2 Double Beds)',
    maxGuests: 4,
    basePrice: 1500,
    extraPersonPrice: 0,
    discountPercentage: 0,
    images: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1000&q=80'
    ],
    amenities: [
      'Split Air Conditioning',
      'King Bed / Twin Doubles',
      'High-Speed Wi-Fi',
      '43" 4K Smart TV',
      'Mini Refrigerator',
      '24/7 Power Backup',
      'Geyser Hot Water',
      'Workstation & Wardrobe',
      'Room Service Access'
    ],
    totalRooms: 6,
    featured: true
  },
  {
    id: 'rt-double-non-ac',
    category: 'double_non_ac',
    bedroomType: 'double',
    isAC: false,
    name: 'Non-AC Double Room',
    tagline: 'Expansive economy double bedroom for families & groups (up to 4 guests)',
    description: 'Spacious well-ventilated double bedroom with multiple windows, high-speed ceiling fans, comfortable double beds, 40" LED TV, attached sanitized bathroom with geyser, and 24/7 power backup. Pricing: 24 Hours: ₹1,500 | 12 Hours: ₹1,050 (30% Discount).',
    sizeSqFt: 320,
    bedType: '1 King Bed (or 2 Double Beds)',
    maxGuests: 4,
    basePrice: 1500,
    extraPersonPrice: 0,
    discountPercentage: 0,
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=80'
    ],
    amenities: [
      'Dual High-Speed Fans',
      'King Bed / Twin Doubles',
      'High-Speed Wi-Fi',
      '40" LED TV',
      '24/7 Power Backup',
      'Geyser Hot Water',
      'Wardrobe Storage',
      'Daily Housekeeping'
    ],
    totalRooms: 6,
    featured: false
  }
];

export const INITIAL_PHYSICAL_ROOMS: PhysicalRoom[] = [
  // 1st Floor - Single Bedroom AC & Non-AC Rooms
  { roomNumber: '101', floor: 1, roomTypeId: 'rt-single-ac', status: 'available', lastCleaned: '10 mins ago' },
  { roomNumber: '102', floor: 1, roomTypeId: 'rt-single-ac', status: 'occupied', currentGuestName: 'Vikram Mehta', currentBookingId: 'SV-TPT-91024', lastCleaned: 'Today 09:00 AM' },
  { roomNumber: '103', floor: 1, roomTypeId: 'rt-single-ac', status: 'available', lastCleaned: '30 mins ago' },
  { roomNumber: '104', floor: 1, roomTypeId: 'rt-single-ac', status: 'cleaning', assignedHousekeeper: 'Ramesh Kumar', lastCleaned: 'In progress' },
  { roomNumber: '105', floor: 1, roomTypeId: 'rt-single-ac', status: 'available', lastCleaned: '1 hour ago' },
  { roomNumber: '106', floor: 1, roomTypeId: 'rt-single-ac', status: 'maintenance', notes: 'AC sensor check', lastCleaned: 'Yesterday' },
  { roomNumber: '107', floor: 1, roomTypeId: 'rt-single-ac', status: 'available', lastCleaned: '45 mins ago' },

  { roomNumber: '108', floor: 1, roomTypeId: 'rt-single-non-ac', status: 'available', lastCleaned: '15 mins ago' },
  { roomNumber: '109', floor: 1, roomTypeId: 'rt-single-non-ac', status: 'occupied', currentGuestName: 'Ananya Sharma', currentBookingId: 'SV-TPT-88219', lastCleaned: 'Today 08:30 AM' },
  { roomNumber: '110', floor: 1, roomTypeId: 'rt-single-non-ac', status: 'available', lastCleaned: '25 mins ago' },
  { roomNumber: '111', floor: 1, roomTypeId: 'rt-single-non-ac', status: 'available', lastCleaned: '50 mins ago' },
  { roomNumber: '112', floor: 1, roomTypeId: 'rt-single-non-ac', status: 'cleaning', assignedHousekeeper: 'Sunita Devi', lastCleaned: 'In progress' },
  { roomNumber: '113', floor: 1, roomTypeId: 'rt-single-non-ac', status: 'available', lastCleaned: '1 hour ago' },
  { roomNumber: '114', floor: 1, roomTypeId: 'rt-single-non-ac', status: 'available', lastCleaned: '35 mins ago' },

  // 2nd Floor - Double Bedroom AC & Non-AC Rooms
  { roomNumber: '201', floor: 2, roomTypeId: 'rt-double-ac', status: 'available', lastCleaned: '20 mins ago' },
  { roomNumber: '202', floor: 2, roomTypeId: 'rt-double-ac', status: 'occupied', currentGuestName: 'Rahul Verma', currentBookingId: 'SV-TPT-74192', lastCleaned: 'Today 09:15 AM' },
  { roomNumber: '203', floor: 2, roomTypeId: 'rt-double-ac', status: 'available', lastCleaned: '15 mins ago' },
  { roomNumber: '204', floor: 2, roomTypeId: 'rt-double-ac', status: 'available', lastCleaned: '1 hour ago' },
  { roomNumber: '205', floor: 2, roomTypeId: 'rt-double-ac', status: 'occupied', currentGuestName: 'Pooja Iyer', currentBookingId: 'SV-TPT-63011', lastCleaned: 'Today 10:00 AM' },
  { roomNumber: '206', floor: 2, roomTypeId: 'rt-double-ac', status: 'available', lastCleaned: '40 mins ago' },

  { roomNumber: '207', floor: 2, roomTypeId: 'rt-double-non-ac', status: 'available', lastCleaned: '15 mins ago' },
  { roomNumber: '208', floor: 2, roomTypeId: 'rt-double-non-ac', status: 'occupied', currentGuestName: 'Arjun Singhal', currentBookingId: 'SV-TPT-55902', lastCleaned: 'Today 08:45 AM' },
  { roomNumber: '209', floor: 2, roomTypeId: 'rt-double-non-ac', status: 'available', lastCleaned: '30 mins ago' },
  { roomNumber: '210', floor: 2, roomTypeId: 'rt-double-non-ac', status: 'available', lastCleaned: '1 hour ago' },
  { roomNumber: '211', floor: 2, roomTypeId: 'rt-double-non-ac', status: 'cleaning', assignedHousekeeper: 'Ramesh Kumar', lastCleaned: 'In progress' },
  { roomNumber: '212', floor: 2, roomTypeId: 'rt-double-non-ac', status: 'available', lastCleaned: '25 mins ago' }
];

export const INITIAL_OFFERS: OfferCoupon[] = [
  {
    id: 'c-welcome50',
    code: 'WELCOME50',
    title: 'Welcome 50% Flat Discount',
    description: 'Get flat 50% discount on your initial booking at Grand Regal Townhouse.',
    discountType: 'percentage',
    discountValue: 50,
    maxDiscount: 1500,
    minBookingAmount: 1499,
    validUntil: '2026-12-31',
    terms: 'Valid on first stay across all room categories. Max discount ₹1,500.',
    usageCount: 412,
    active: true,
    badge: 'Trending'
  },
  {
    id: 'c-wizardplus',
    code: 'WIZARDPLUS',
    title: 'Wizard Member Super Saver',
    description: 'Additional 10% instant off plus complimentary hot breakfast for Wizard members.',
    discountType: 'percentage',
    discountValue: 10,
    maxDiscount: 800,
    minBookingAmount: 1200,
    validUntil: '2026-11-30',
    terms: 'Applicable for registered OYO Wizard members on bookings above ₹1,200.',
    usageCount: 789,
    active: true,
    badge: 'Wizard Club'
  },
  {
    id: 'c-staycation',
    code: 'STAYLONG',
    title: 'Long Stay Special: ₹800 Off',
    description: 'Flat ₹800 off when staying 2 nights or more at our boutique property.',
    discountType: 'flat',
    discountValue: 800,
    minBookingAmount: 3200,
    validUntil: '2026-10-31',
    terms: 'Minimum 2 consecutive nights stay required.',
    usageCount: 235,
    active: true,
    badge: 'Weekend Saver'
  },
  {
    id: 'c-regalvip',
    code: 'REGALVIP',
    title: 'Executive & Suite Exclusive ₹1,200 Off',
    description: 'Instant ₹1,200 discount on Luxury Suite and Executive Studio categories.',
    discountType: 'flat',
    discountValue: 1200,
    minBookingAmount: 4000,
    validUntil: '2026-12-31',
    terms: 'Valid only on Regal Suite and Executive Studio room categories.',
    usageCount: 164,
    active: true,
    badge: 'Luxury Deal'
  }
];

export const INITIAL_ADD_ONS: AddOnService[] = [
  {
    id: 'addon-breakfast',
    name: 'Buffet Breakfast at The Regal Bistro',
    description: 'Unlimited hot continental & Indian breakfast spread with freshly brewed barista coffee',
    price: 299,
    perNight: true,
    icon: 'Coffee'
  },
  {
    id: 'addon-airport',
    name: 'Airport Transfer (Pick up or Drop)',
    description: 'Private air-conditioned sedan transfer from/to IGI Airport (T1/T2/T3)',
    price: 899,
    perNight: false,
    icon: 'Car'
  },
  {
    id: 'addon-latecheckout',
    name: 'Guaranteed Late Check-out (till 3:00 PM)',
    description: 'Extend your relaxation without rush. Subject to hotel notification.',
    price: 499,
    perNight: false,
    icon: 'Clock'
  },
  {
    id: 'addon-extrabed',
    name: 'Extra Rollaway Bed with Linen',
    description: 'Plush rollaway mattress setup with premium duvet and double pillows',
    price: 600,
    perNight: true,
    icon: 'Bed'
  }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-01',
    guestName: 'Kunal Singhania',
    rating: 5,
    date: '2 days ago',
    roomType: 'Double Bedroom AC Room',
    title: 'Top luxury stay in Tadipatri, super clean AC room!',
    comment: 'Best hotel in Tadipatri by a mile! Walking distance from Tadipatri Railway Station. The AC room was chilled, spotless clean, and transparent pricing without hidden charges. Check-in took 1 minute.',
    stayType: 'Business',
    verified: true,
    ratingsBreakdown: { cleanliness: 5, staff: 5, location: 5, amenities: 5, value: 5 },
    managerResponse: {
      text: 'Thank you Mr. Kunal! We are delighted to host you at SV Grand Luxury Rooms Tadipatri and look forward to your next visit.',
      date: '1 day ago',
      responderName: 'General Manager, SV Grand'
    },
    approved: true,
    helpfulVotes: 28
  },
  {
    id: 'rev-02',
    guestName: 'Priyanka & Rohan Das',
    rating: 5,
    date: '1 week ago',
    roomType: 'Double Bedroom AC Room',
    title: 'Spacious room, great staff & peaceful stay in Tadipatri',
    comment: 'Visited Bugga Ramalingeswara Swamy Temple and stayed here with family. The double AC room accommodated us comfortably. Extra person charges (₹500) were very fair and clearly explained upfront.',
    stayType: 'Couples',
    verified: true,
    ratingsBreakdown: { cleanliness: 5, staff: 5, location: 5, amenities: 4.8, value: 5 },
    approved: true,
    helpfulVotes: 21
  },
  {
    id: 'rev-03',
    guestName: 'Ravi Teja',
    rating: 4.8,
    date: '2 weeks ago',
    roomType: 'Single Bedroom AC Room',
    title: 'High-speed Wi-Fi, powerful AC & 24/7 hot water',
    comment: 'Stayed for 2 nights for work in Tadipatri industrial zone. Quick room service, prompt housekeeping, and reliable power backup. Very safe and well maintained.',
    stayType: 'Solo',
    verified: true,
    ratingsBreakdown: { cleanliness: 4.8, staff: 4.8, location: 5, amenities: 4.6, value: 4.7 },
    approved: true,
    helpfulVotes: 16
  },
  {
    id: 'rev-04',
    guestName: 'Sneha Kulkarni',
    rating: 4.6,
    date: '3 weeks ago',
    roomType: 'Single Bedroom Non-AC Room',
    title: 'Clean, airy non-AC room at just ₹1000 - unbeatable value',
    comment: 'Traveled solo by train. Hotel is right next to station road. The non-AC room has high-speed fans, pristine white bed linen, sanitized bathroom with hot water, and helpful front desk.',
    stayType: 'Solo',
    verified: true,
    ratingsBreakdown: { cleanliness: 4.9, staff: 4.8, location: 4.9, amenities: 4.5, value: 4.8 },
    approved: true,
    helpfulVotes: 12
  }
];

export const INITIAL_STAFF: StaffMember[] = [
  {
    id: 'staff-1',
    name: 'M. Venkat Reddy',
    role: 'General Manager',
    phone: '+91 85582 22555',
    email: 'manager@svgrandluxuryrooms.com',
    shift: 'Morning',
    status: 'active',
    joinedDate: '2023-04-10'
  },
  {
    id: 'staff-2',
    name: 'S. Naresh Kumar',
    role: 'Front Desk Supervisor',
    phone: '+91 98712 33490',
    email: 'naresh@svgrandluxuryrooms.com',
    shift: 'Morning',
    status: 'active',
    joinedDate: '2023-08-15'
  },
  {
    id: 'staff-3',
    name: 'K. Shiva Prasad',
    role: 'Front Desk Supervisor',
    phone: '+91 97180 88210',
    email: 'shiva@svgrandluxuryrooms.com',
    shift: 'Evening',
    status: 'active',
    joinedDate: '2024-01-20'
  },
  {
    id: 'staff-4',
    name: 'Ramesh Kumar',
    role: 'Housekeeping Lead',
    phone: '+91 99530 11904',
    email: 'ramesh.hk@svgrandluxuryrooms.com',
    shift: 'Morning',
    status: 'active',
    joinedDate: '2023-05-12'
  },
  {
    id: 'staff-5',
    name: 'Deepak Sharma',
    role: 'Accountant',
    phone: '+91 98102 77312',
    email: 'accounts@svgrandluxuryrooms.com',
    shift: 'Morning',
    status: 'active',
    joinedDate: '2023-06-01'
  }
];

export const INITIAL_BOOKINGS: Booking[] = [
  {
    id: 'SVG-91024',
    bookingCode: 'SVG-91024',
    guestId: 'g-001',
    guestName: 'Vikram Mehta',
    guestEmail: 'vikram.mehta@gmail.com',
    guestPhone: '+91 98110 22345',
    roomTypeId: 'rt-single-ac',
    roomTypeName: 'AC Single Room',
    assignedRoomNumber: '102',
    stayDuration: '24h',
    startTime: new Date(Date.now() - 4 * 3600 * 1000).toISOString(),
    expiresAt: new Date(Date.now() + 20 * 3600 * 1000).toISOString(),
    checkInDate: '2026-10-10',
    checkOutDate: '2026-10-11',
    nights: 1,
    roomsCount: 1,
    guestsCount: { adults: 1, children: 0 },
    twentyFourHourRate: 1500,
    durationDiscountAmount: 0,
    baseAmount: 1500,
    discountAmount: 0,
    couponCode: 'WELCOME50',
    addOns: [{ id: 'addon-breakfast', name: 'Breakfast Spread', price: 299 }],
    taxAmount: 215,
    totalAmount: 2014,
    paymentMethod: 'upi',
    paymentStatus: 'paid',
    approvalStatus: 'approved',
    bookingStatus: 'checked_in',
    transactionId: 'TXN-91024-UPI',
    specialRequests: 'Quiet room please',
    createdAt: new Date(Date.now() - 4 * 3600 * 1000).toISOString()
  },
  {
    id: 'SVG-74192',
    bookingCode: 'SVG-74192',
    guestId: 'g-002',
    guestName: 'Rahul Verma',
    guestEmail: 'rahul.verma@techcorp.in',
    guestPhone: '+91 98765 43210',
    roomTypeId: 'rt-double-ac',
    roomTypeName: 'AC Double Room',
    assignedRoomNumber: '202',
    stayDuration: '12h',
    startTime: new Date(Date.now() - 2 * 3600 * 1000).toISOString(),
    expiresAt: new Date(Date.now() + 10 * 3600 * 1000).toISOString(),
    checkInDate: '2026-10-10',
    checkOutDate: '2026-10-10',
    nights: 1,
    roomsCount: 1,
    guestsCount: { adults: 2, children: 0 },
    twentyFourHourRate: 1500,
    durationDiscountAmount: 450, // 30% discount on 1500
    baseAmount: 1050,
    discountAmount: 0,
    couponCode: '',
    addOns: [],
    taxAmount: 126,
    totalAmount: 1176,
    paymentMethod: 'upi',
    paymentStatus: 'paid',
    approvalStatus: 'approved',
    bookingStatus: 'checked_in',
    transactionId: 'TXN-74192-GPAY',
    specialRequests: '2nd floor room requested',
    createdAt: new Date(Date.now() - 2 * 3600 * 1000).toISOString()
  },
  {
    id: 'SVG-88219',
    bookingCode: 'SVG-88219',
    guestId: 'g-004',
    guestName: 'Ananya Sharma',
    guestEmail: 'ananya.s@outlook.com',
    guestPhone: '+91 97119 55432',
    roomTypeId: 'rt-single-non-ac',
    roomTypeName: 'Non-AC Single Room',
    assignedRoomNumber: '109',
    stayDuration: '12h',
    startTime: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
    expiresAt: new Date(Date.now() + 11.5 * 3600 * 1000).toISOString(),
    checkInDate: '2026-10-10',
    checkOutDate: '2026-10-10',
    nights: 1,
    roomsCount: 1,
    guestsCount: { adults: 1, children: 0 },
    twentyFourHourRate: 1000,
    durationDiscountAmount: 300, // 30% discount on 1000
    baseAmount: 700,
    discountAmount: 0,
    couponCode: '',
    addOns: [],
    taxAmount: 84,
    totalAmount: 784,
    paymentMethod: 'upi',
    paymentStatus: 'paid',
    approvalStatus: 'pending', // PENDING ADMIN VERIFICATION
    bookingStatus: 'confirmed',
    transactionId: 'TXN-88219-PHNP',
    specialRequests: 'Arriving in 30 mins from Tadipatri station',
    createdAt: new Date(Date.now() - 30 * 60 * 1000).toISOString()
  },
  {
    id: 'SVG-44129',
    bookingCode: 'SVG-44129',
    guestId: 'g-003',
    guestName: 'Dr. Sameer Kapoor',
    guestEmail: 'sameer.kapoor@medix.org',
    guestPhone: '+91 99100 88231',
    roomTypeId: 'rt-double-ac',
    roomTypeName: 'AC Double Room',
    assignedRoomNumber: '205',
    stayDuration: '24h',
    startTime: new Date(Date.now() - 8 * 3600 * 1000).toISOString(),
    expiresAt: new Date(Date.now() + 16 * 3600 * 1000).toISOString(),
    checkInDate: '2026-10-10',
    checkOutDate: '2026-10-11',
    nights: 1,
    roomsCount: 1,
    guestsCount: { adults: 2, children: 0 },
    twentyFourHourRate: 1500,
    durationDiscountAmount: 0,
    baseAmount: 1500,
    discountAmount: 0,
    couponCode: '',
    addOns: [],
    taxAmount: 180,
    totalAmount: 1680,
    paymentMethod: 'credit_card',
    paymentStatus: 'paid',
    approvalStatus: 'approved',
    bookingStatus: 'checked_in',
    transactionId: 'TXN-44129-CARD',
    specialRequests: 'Extra pillows',
    createdAt: new Date(Date.now() - 8 * 3600 * 1000).toISOString()
  },
  {
    id: 'SVG-55902',
    bookingCode: 'SVG-55902',
    guestId: 'g-005',
    guestName: 'Arjun Singhal',
    guestEmail: 'arjun.singhal@rediffmail.com',
    guestPhone: '+91 98101 23456',
    roomTypeId: 'rt-double-non-ac',
    roomTypeName: 'Non-AC Double Room',
    assignedRoomNumber: '208',
    stayDuration: '24h',
    startTime: new Date(Date.now() - 6 * 3600 * 1000).toISOString(),
    expiresAt: new Date(Date.now() + 18 * 3600 * 1000).toISOString(),
    checkInDate: '2026-10-10',
    checkOutDate: '2026-10-11',
    nights: 1,
    roomsCount: 1,
    guestsCount: { adults: 2, children: 0 },
    twentyFourHourRate: 1500,
    durationDiscountAmount: 0,
    baseAmount: 1500,
    discountAmount: 0,
    couponCode: '',
    addOns: [],
    taxAmount: 180,
    totalAmount: 1680,
    paymentMethod: 'debit_card',
    paymentStatus: 'paid',
    approvalStatus: 'approved',
    bookingStatus: 'checked_in',
    transactionId: 'TXN-55902-DEBIT',
    specialRequests: '',
    createdAt: new Date(Date.now() - 6 * 3600 * 1000).toISOString()
  }
];

export const INITIAL_GUEST_REQUESTS: GuestRequest[] = [
  {
    id: 'req-01',
    bookingId: 'SV-TPT-91024',
    roomNumber: '102',
    guestName: 'Vikram Mehta',
    type: 'room_cleaning',
    title: 'Afternoon room touch-up and fresh towels',
    notes: 'Please refresh water bottles and clean bathroom floor',
    status: 'pending',
    createdAt: '1 hour ago'
  },
  {
    id: 'req-02',
    bookingId: 'SV-TPT-74192',
    roomNumber: '202',
    guestName: 'Rahul Verma',
    type: 'late_checkout',
    title: 'Request late check-out till 1:30 PM tomorrow',
    status: 'completed',
    createdAt: '3 hours ago'
  }
];

export const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'notif-01',
    title: 'Welcome to SV Grand Luxury Rooms, Tadipatri',
    message: 'Book your stay in Tadipatri. AC Room @ ₹1500 + ₹500/extra person; Non-AC Room @ ₹1000 + ₹500/extra person.',
    type: 'offer',
    timestamp: 'Just now',
    read: false
  },
  {
    id: 'notif-02',
    title: 'Direct Station & Bus Stand Proximity',
    message: 'We are situated on Railway Station Road, just 400m from Tadipatri Junction and 350m from APSRTC Bus Stand.',
    type: 'system',
    timestamp: '2 hours ago',
    read: false
  }
];

export const CURRENT_DEMO_USER: UserProfile = {
  id: 'usr-demo-01',
  name: 'Krishna Varun',
  email: 'krishnakvarun8@gmail.com',
  phone: '+91 98765 01234',
  isWizardMember: true,
  wizardTier: 'Gold',
  walletBalance: 750,
  role: 'guest'
};
