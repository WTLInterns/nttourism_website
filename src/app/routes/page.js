'use client';

import { useState } from 'react';
import { FiSearch, FiArrowRight, FiClock, FiMapPin, FiFilter } from 'react-icons/fi';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Sample data for routes
const popularRoutes = [
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

export default function RoutesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'from', direction: 'asc' });
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    from: '',
    to: '',
    time: 'all',
  });

  // Get unique cities for filters
  const allCities = [...new Set([
    ...popularRoutes.map(route => route.from),
    ...popularRoutes.map(route => route.to)
  ])].sort();

  // Handle sorting
  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  // Apply filters and sorting
  const getFilteredAndSortedRoutes = () => {
    let filtered = [...popularRoutes];

    // Apply search term filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(route => 
        route.from.toLowerCase().includes(term) || 
        route.to.toLowerCase().includes(term)
      );
    }

    // Apply from/to filters
    if (filters.from) {
      filtered = filtered.filter(route => 
        route.from.toLowerCase() === filters.from.toLowerCase()
      );
    }
    if (filters.to) {
      filtered = filtered.filter(route => 
        route.to.toLowerCase() === filters.to.toLowerCase()
      );
    }

    // Apply time filter
    if (filters.time === 'morning') {
      filtered = filtered.filter(route => 
        route.departureTimes.some(time => {
          const hour = parseInt(time.split(':')[0]);
          const isPM = time.includes('PM');
          const hour24 = isPM ? (hour % 12) + 12 : hour;
          return hour24 >= 5 && hour24 < 12;
        })
      );
    } else if (filters.time === 'afternoon') {
      filtered = filtered.filter(route => 
        route.departureTimes.some(time => {
          const hour = parseInt(time.split(':')[0]);
          const isPM = time.includes('PM');
          const hour24 = isPM ? (hour % 12) + 12 : hour;
          return hour24 >= 12 && hour24 < 17;
        })
      );
    } else if (filters.time === 'evening') {
      filtered = filtered.filter(route => 
        route.departureTimes.some(time => {
          const hour = parseInt(time.split(':')[0]);
          const isPM = time.includes('PM');
          const hour24 = isPM ? (hour % 12) + 12 : hour;
          return hour24 >= 17 || hour24 < 5;
        })
      );
    }

    // Apply sorting
    if (sortConfig.key) {
      filtered.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }

    return filtered;
  };

  const filteredRoutes = getFilteredAndSortedRoutes();

  // Reset all filters
  const resetFilters = () => {
    setSearchTerm('');
    setFilters({
      from: '',
      to: '',
      time: 'all',
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Premium Tourism Routes */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Glassy Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0"></div>
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-blue-400 font-semibold text-sm tracking-wider uppercase">EXPLORE ROUTES</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6">
              Discover Amazing
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent"> Travel Routes</span>
            </h1>
            <p className="text-xl md:text-2xl text-black/80 max-w-3xl mx-auto leading-relaxed">
              Find and book your perfect journey from our extensive network of premium routes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Routes Table with Search */}
      <section className="pb-16 pt-4 relative">
        <div className="container mx-auto px-4">
          <motion.div 
            className="bg-white/60 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/30 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {/* Search Bar */}
            <div className="p-4 border-b border-white/20 bg-gradient-to-r from-white/50 to-blue-50/50">
              <div className="flex flex-col md:flex-row gap-3">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiSearch className="text-blue-500" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-4 py-2.5 border-2 border-blue-400 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white/80 backdrop-blur-sm text-sm transition-all hover:border-blue-600 hover:bg-white/90"
                    placeholder="Search routes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <motion.button 
                  className="flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg font-medium text-sm"
                  onClick={() => setShowFilters(!showFilters)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FiFilter className="mr-2" />
                  {showFilters ? 'Hide Filters' : 'Show Filters'}
                </motion.button>
              </div>

              {showFilters && (
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-4 gap-3 mt-3 pt-3 border-t border-white/20"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                >
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2 flex items-center">
                      <FiMapPin className="mr-1 text-blue-500" />
                      From
                    </label>
                    <select 
                      className="w-full p-2 border border-white/40 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white/80 backdrop-blur-sm text-sm transition-all hover:border-blue-400 hover:bg-white/90"
                      value={filters.from}
                      onChange={(e) => setFilters({...filters, from: e.target.value})}
                    >
                      <option value="">All Cities</option>
                      {allCities.map(city => (
                        <option key={`from-${city}`} value={city}>{city}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2 flex items-center">
                      <FiMapPin className="mr-1 text-green-500" />
                      To
                    </label>
                    <select 
                      className="w-full p-2 border border-white/40 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white/80 backdrop-blur-sm text-sm transition-all hover:border-blue-400 hover:bg-white/90"
                      value={filters.to}
                      onChange={(e) => setFilters({...filters, to: e.target.value})}
                    >
                      <option value="">All Cities</option>
                      {allCities.map(city => (
                        <option key={`to-${city}`} value={city}>{city}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2 flex items-center">
                      <FiClock className="mr-1 text-blue-500" />
                      Time
                    </label>
                    <select 
                      className="w-full p-2 border border-white/40 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white/80 backdrop-blur-sm text-sm transition-all hover:border-blue-400 hover:bg-white/90"
                      value={filters.time}
                      onChange={(e) => setFilters({...filters, time: e.target.value})}
                    >
                      <option value="all">All Day</option>
                      <option value="morning">Morning</option>
                      <option value="afternoon">Afternoon</option>
                      <option value="evening">Evening</option>
                    </select>
                  </div>
                  <div className="flex items-end">
                    <motion.button 
                      className="w-full bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-bold py-2 px-3 rounded-lg transition-all shadow-md text-sm"
                      onClick={resetFilters}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Reset
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </div>
            
            {/* Table Content */}
            <div className="p-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Available Routes</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">From</th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Route</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">To</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Distance</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Departure Times</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredRoutes.length > 0 ? (
                      filteredRoutes.map((route, index) => (
                        <motion.tr
                          key={route.id}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <td className="px-6 py-5 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-12 w-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center shadow-md">
                                <FiMapPin className="h-6 w-6 text-blue-600" />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-bold text-gray-900">{route.from}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-5 whitespace-nowrap text-center">
                            <FiArrowRight className="text-blue-600 mx-auto h-5 w-5" />
                          </td>
                          <td className="px-6 py-5 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-12 w-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center shadow-md">
                                <FiMapPin className="h-6 w-6 text-green-600" />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-bold text-gray-900">{route.to}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-5 whitespace-nowrap">
                            <div className="text-sm font-bold text-gray-900">{route.distance} km</div>
                          </td>
                          <td className="px-6 py-5 whitespace-nowrap">
                            <div className="flex items-center">
                              <FiClock className="h-4 w-4 text-gray-400 mr-1" />
                              <span className="text-sm font-bold text-gray-900">{route.duration}</span>
                            </div>
                          </td>
                          <td className="px-6 py-5 whitespace-nowrap">
                            <div className="flex flex-wrap gap-2">
                              {route.departureTimes.map((time, idx) => (
                                <span 
                                  key={idx} 
                                  className="px-3 py-1.5 text-xs rounded-full bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 font-bold shadow-sm"
                                >
                                  {time}
                                </span>
                              ))}
                            </div>
                          </td>
                          <td className="px-6 py-5 whitespace-nowrap text-right text-sm font-medium">
                            <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">₹{route.price}</div>
                            <div className="text-xs text-gray-600 font-semibold">per seat</div>
                          </td>
                          <td className="px-6 py-5 whitespace-nowrap text-right text-sm font-medium">
                            <Link 
                              href="/booking"
                              className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all font-bold shadow-lg hover:shadow-xl"
                            >
                              Book Now
                            </Link>
                          </td>
                        </motion.tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="8" className="px-6 py-12 text-center text-gray-600 text-lg font-medium">
                          No routes found matching your criteria. Please try different filters.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}