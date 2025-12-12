'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiClock, FiUsers, FiWifi, FiMapPin, FiStar, FiChevronLeft, FiChevronRight, FiFilter, FiX, FiNavigation, FiCompass, FiSun } from 'react-icons/fi';
import { buses, busTypes, amenities as allAmenities } from '@/data/fleet';
import { motion } from 'framer-motion';

const FleetPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 40]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [filteredBuses, setFilteredBuses] = useState([]);
  const [isHydrated, setIsHydrated] = useState(false);

  const busImages = [
    '/images/Bus1.png',
    '/images/Bus2.jpeg', 
    '/images/Bus3.jpg'
  ];

  // Handle hydration
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Filter buses based on active tab, search term, amenities, and price range
  useEffect(() => {
    if (!isHydrated) return;
    
    const filtered = buses.filter(bus => {
      // Filter by tab (bus type)
      const matchesTab = activeTab === 'all' || 
                        (activeTab === 'ac' && bus.type.includes('AC')) ||
                        (activeTab === 'sleeper' && bus.type.includes('Sleeper')) ||
                        (activeTab === 'seater' && bus.type.includes('Seater')) ||
                        (activeTab === 'non-ac' && bus.type === 'Non-AC Seater');
      
      // Filter by search term
      const matchesSearch = searchTerm === '' || 
                           bus.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           bus.type.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Filter by amenities
      const matchesAmenities = selectedAmenities.length === 0 || 
                             selectedAmenities.every(amenity => 
                               bus.amenities.some(busAmenity => 
                                 busAmenity.toLowerCase().includes(amenity.toLowerCase())
                               )
                             );
      
      // Filter by price range
      const matchesPrice = bus.pricePerKm >= priceRange[0] && bus.pricePerKm <= priceRange[1];
      
      return matchesTab && matchesSearch && matchesAmenities && matchesPrice;
    });
    
    setFilteredBuses(filtered);
  }, [activeTab, searchTerm, selectedAmenities, priceRange, isHydrated]);

  // Toggle amenity selection
  const toggleAmenity = (amenity) => {
    setSelectedAmenities(prev => 
      prev.includes(amenity) 
        ? prev.filter(a => a !== amenity)
        : [...prev, amenity]
    );
  };

  // Reset all filters
  const resetFilters = () => {
    setActiveTab('all');
    setSelectedAmenities([]);
    setPriceRange([0, 40]);
    setSearchTerm('');
  };

  // Render star ratings
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <FiStar 
        key={i} 
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#fef7f1] to-[#f7fbfe] pt-24">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600/70 via-cyan-600/70 to-teal-600/70 backdrop-blur-lg border-b border-white/20 py-20 md:py-24">
        <div className="container mx-auto px-4 pt-8">
          <div className="flex items-center mb-4">
            <FiCompass className="text-white text-2xl mr-3" />
            <FiNavigation className="text-white text-2xl mr-3" />
            <FiSun className="text-white text-2xl" />
          </div>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Fleet
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Experience comfort and luxury with our modern fleet of buses
          </motion.p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Mobile Filter Button */}
          <motion.button 
            className="md:hidden flex items-center justify-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm border-2 border-gray-300 rounded-xl shadow-lg mb-4 hover:border-blue-500 transition-all"
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FiFilter className="text-blue-600 w-5 h-5" />
            <span className="font-semibold text-gray-900">{showMobileFilters ? 'Hide Filters' : 'Show Filters'}</span>
          </motion.button>

          {/* Sidebar Filters - Desktop */}
          <div className={`${showMobileFilters ? 'block' : 'hidden'} md:block w-full md:w-80 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-200 h-fit`}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Filters</h3>
              <button 
                className="text-sm text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                onClick={resetFilters}
              >
                Reset All
              </button>
            </div>

            {/* Search */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Search</label>
              <input
                type="text"
                placeholder="Search buses..."
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Price Range: <span className="text-blue-600 font-bold">₹{priceRange[0]} - ₹{priceRange[1]}</span> /km
              </label>
              <input
                type="range"
                min="0"
                max="50"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full h-2 bg-gradient-to-r from-blue-200 to-blue-500 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-600 mt-2 font-medium">
                <span>₹0/km</span>
                <span>₹50/km</span>
              </div>
            </div>

            {/* Bus Types */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-700 mb-3">Bus Type</h4>
              <div className="space-y-2">
                {busTypes.map((type) => (
                  <div key={type.id} className="flex items-center">
                    <input
                      id={`type-${type.id}`}
                      type="radio"
                      name="bus-type"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 cursor-pointer"
                      checked={activeTab === type.id}
                      onChange={() => setActiveTab(type.id)}
                    />
                    <label htmlFor={`type-${type.id}`} className="ml-2 text-sm text-gray-700 font-medium cursor-pointer">
                      {type.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-3">Amenities</h4>
              <div className="space-y-2">
                {allAmenities.map((amenity) => (
                  <div key={amenity.id} className="flex items-center">
                    <input
                      id={`amenity-${amenity.id}`}
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"
                      checked={selectedAmenities.includes(amenity.name)}
                      onChange={() => toggleAmenity(amenity.name)}
                    />
                    <label htmlFor={`amenity-${amenity.id}`} className="ml-2 text-sm text-gray-700 font-medium cursor-pointer">
                      {amenity.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Active Filters */}
            {(activeTab !== 'all' || selectedAmenities.length > 0 || searchTerm) && (
              <div className="flex flex-wrap gap-2 mb-6">
                {activeTab !== 'all' && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {busTypes.find(t => t.id === activeTab)?.name}
                    <button 
                      onClick={() => setActiveTab('all')}
                      className="ml-1.5 inline-flex items-center justify-center h-4 w-4 rounded-full bg-blue-200 hover:bg-blue-300"
                    >
                      <FiX className="h-2.5 w-2.5" />
                    </button>
                  </span>
                )}
                
                {selectedAmenities.map(amenity => (
                  <span key={amenity} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    {amenity}
                    <button 
                      onClick={() => toggleAmenity(amenity)}
                      className="ml-1.5 inline-flex items-center justify-center h-4 w-4 rounded-full bg-green-200 hover:bg-green-300"
                    >
                      <FiX className="h-2.5 w-2.5" />
                    </button>
                  </span>
                ))}

                {searchTerm && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                    Search: {searchTerm}
                    <button 
                      onClick={() => setSearchTerm('')}
                      className="ml-1.5 inline-flex items-center justify-center h-4 w-4 rounded-full bg-purple-200 hover:bg-purple-300"
                    >
                      <FiX className="h-2.5 w-2.5" />
                    </button>
                  </span>
                )}
              </div>
            )}

            {/* Results Count */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {isHydrated ? '3 Cabs Available' : 'Loading...'}
              </h2>
              <div className="flex items-center">
                <span className="text-sm text-gray-600 mr-2 font-medium">Sort by:</span>
                <select className="border-2 border-gray-300 rounded-xl px-4 py-2 text-sm font-medium focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white">
                  <option>Price (Low to High)</option>
                  <option>Price (High to Low)</option>
                  <option>Rating (High to Low)</option>
                  <option>Seats (Low to High)</option>
                </select>
              </div>
            </div>

            {/* Bus List */}
            <div className="grid grid-cols-1 gap-8">
              {isHydrated && filteredBuses.length > 0 ? (
                filteredBuses.slice(0, 3).map((bus, index) => (
                  <motion.div 
                    key={bus.id} 
                    className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-blue-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="md:flex">
                      {/* Bus Image */}
                      <div className="md:flex-shrink-0 md:w-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-6">
                        <div className="relative w-full h-48 md:h-full">
                          <Image
                            src={bus.image || busImages[bus.id % 3]}
                            alt={bus.name}
                            fill
                            className="object-cover"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = '/images/Bus1.png';
                            }}
                          />
                        </div>
                      </div>
                      
                      {/* Bus Details */}
                      <div className="p-8 flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">{bus.name}</h3>
                            <span className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 text-sm px-3 py-1 rounded-full font-semibold">{bus.type}</span>
                            <div className="flex items-center mt-1">
                              <div className="flex">
                                {renderStars(bus.rating)}
                              </div>
                              <span className="ml-2 text-sm text-gray-500">
                                {bus.rating} ({Math.floor(Math.random() * 100) + 20} reviews)
                              </span>
                            </div>
                          </div>
                            <div className="text-right">
                            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">₹{bus.pricePerKm}<span className="text-sm font-normal text-gray-500">/km</span></div>
                            <div className="text-sm text-gray-600 font-medium">Seats: {bus.seats}</div>
                          </div>
                        </div>
                        
                        <p className="mt-4 text-gray-700 leading-relaxed">{bus.description}</p>
                        
                        {/* Amenities */}
                        <div className="mt-6">
                          <h5 className="text-sm font-bold text-gray-700 mb-3">Amenities:</h5>
                          <div className="flex flex-wrap gap-2">
                            {bus.amenities.map((amenity, idx) => (
                              <span key={idx} className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-800 text-sm rounded-full border border-gray-200 font-medium">
                                {amenity === 'WiFi' && <FiWifi className="mr-1.5 h-4 w-4 text-blue-500" />}
                                {amenity === 'Charging Ports' && <FiMapPin className="mr-1.5 h-4 w-4 text-green-500" />}
                                {amenity === 'Blankets' && <span className="mr-1.5">🛏️</span>}
                                {amenity === 'Water Bottles' && <span className="mr-1.5">💧</span>}
                                {amenity === 'Reading Light' && <span className="mr-1.5">💡</span>}
                                {amenity === 'Snacks' && <span className="mr-1.5">🍪</span>}
                                {amenity === 'Entertainment' && <span className="mr-1.5">🎬</span>}
                                {amenity === 'Pillows' && <span className="mr-1.5">🛌</span>}
                                {amenity === 'Magazines' && <span className="mr-1.5">📚</span>}
                                {amenity}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="mt-6 flex justify-between items-center pt-6 border-t-2 border-gray-100">
                          <div className="flex items-center text-sm text-gray-600 font-medium">
                            <FiClock className="mr-1.5 h-4 w-4" />
                            <span>Free cancellation up to 24 hours before departure</span>
                          </div>
                          <Link 
                            href={`/booking?busId=${bus.id}`}
                            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 flex items-center shadow-lg hover:shadow-xl transform hover:scale-105"
                          >
                            Book Now <FiArrowRight className="ml-2" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : isHydrated ? (
                <motion.div 
                  className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-12 text-center border-2 border-gray-200"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">No buses found</h3>
                  <p className="text-gray-600 mb-8 text-lg">We couldn't find any buses matching your criteria. Try adjusting your filters.</p>
                  <motion.button 
                    onClick={resetFilters}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Reset Filters
                  </motion.button>
                </motion.div>
              ) : (
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-12 text-center border-2 border-gray-200">
                  <div className="animate-pulse">
                    <div className="h-8 bg-gray-200 rounded mb-4 w-48 mx-auto"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2 w-64 mx-auto"></div>
                    <div className="h-4 bg-gray-200 rounded w-56 mx-auto"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FleetPage;

