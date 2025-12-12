// Bus fleet data
export const buses = [
  {
    id: 1,
    name: 'Luxury Coach',
    type: 'AC Seater',
    seats: 45,
    amenities: ['WiFi', 'Charging Ports', 'Water Bottles', 'Entertainment'],
    rating: 4.7,
    pricePerKm: 28,
    image: '/images/Bus2.jpeg',
    description: 'Premium AC seater coach with comfortable seating and modern amenities for a pleasant journey.'
  },
  {
    id: 2,
    name: 'Executive Van',
    type: 'AC Van',
    seats: 12,
    amenities: ['WiFi', 'Charging Ports', 'Water Bottles', 'Luxury Seats'],
    rating: 4.8,
    pricePerKm: 35,
    image: '/images/van1.png',
    description: 'Luxury van with premium comfort and amenities for small group travel.'
  },
  {
    id: 3,
    name: 'Premium Van',
    type: 'AC Van',
    seats: 14,
    amenities: ['WiFi', 'Charging Ports', 'Water Bottles', 'Extra Legroom'],
    rating: 4.9,
    pricePerKm: 32,
    image: '/images/Van2.png',
    description: 'Spacious van with premium features for comfortable group travel.'
  },
  {
    id: 4,
    name: 'BharatBenz 917',
    type: 'Non-AC Seater',
    seats: 52,
    amenities: ['Charging Ports', 'Water Bottles'],
    rating: 4.2,
    pricePerKm: 15,
    image: '/images/Bus1.png',
    description: 'Economical non-AC seater for budget-conscious travelers.'
  },
  {
    id: 5,
    name: 'Volvo 9600',
    type: 'AC Sleeper',
    seats: 34,
    amenities: ['WiFi', 'Charging Ports', 'Blankets', 'Pillows', 'Water Bottles', 'Entertainment'],
    rating: 4.9,
    pricePerKm: 40,
    image: '/images/Bus2.jpg',
    description: 'Ultra-luxury sleeper coach with premium bedding and entertainment options.'
  },
  {
    id: 6,
    name: 'Tata Marcopolo',
    type: 'AC Seater',
    seats: 48,
    amenities: ['Charging Ports', 'Water Bottles', 'Magazines'],
    rating: 4.3,
    pricePerKm: 22,
    image: '/images/Bus3.jpg',
    description: 'Comfortable AC seater with essential amenities for medium-distance travel.'
  }
];

// Popular routes data
export const popularRoutes = [
  {
    id: 1,
    from: 'Mumbai',
    to: 'Goa',
    distance: 600,
    duration: '12h',
    price: 2100,
    departureTimes: ['06:00 AM', '08:00 PM', '10:00 PM']
  },
  {
    id: 2,
    from: 'Delhi',
    to: 'Jaipur',
    distance: 280,
    duration: '6h',
    price: 780,
    departureTimes: ['07:00 AM', '02:00 PM', '11:00 PM']
  },
  {
    id: 3,
    from: 'Bangalore',
    to: 'Chennai',
    distance: 350,
    duration: '6h 30m',
    price: 770,
    departureTimes: ['06:00 AM', '01:00 PM', '09:00 PM']
  },
  {
    id: 4,
    from: 'Hyderabad',
    to: 'Vijayawada',
    distance: 275,
    duration: '5h 45m',
    price: 605,
    departureTimes: ['07:30 AM', '03:00 PM', '10:30 PM']
  },
  {
    id: 5,
    from: 'Pune',
    to: 'Mumbai',
    distance: 150,
    duration: '3h 30m',
    price: 525,
    departureTimes: ['05:00 AM', '12:00 PM', '04:00 PM', '08:00 PM']
  }
];

// Bus types for filtering
export const busTypes = [
  { id: 'all', name: 'All Buses' },
  { id: 'ac', name: 'AC Buses' },
  { id: 'sleeper', name: 'Sleeper' },
  { id: 'seater', name: 'Seater' },
  { id: 'non-ac', name: 'Non-AC' }
];

// Amenities for filtering
export const amenities = [
  { id: 'wifi', name: 'WiFi' },
  { id: 'charging', name: 'Charging Ports' },
  { id: 'blanket', name: 'Blankets' },
  { id: 'water', name: 'Water Bottles' },
  { id: 'snacks', name: 'Snacks' },
  { id: 'entertainment', name: 'Entertainment' }
];