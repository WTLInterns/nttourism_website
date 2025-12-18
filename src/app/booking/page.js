'use client';

import { useState } from 'react';
import { FiCalendar, FiMapPin, FiUsers, FiClock, FiWifi, FiShield, FiCoffee, FiSearch, FiChevronDown, FiCheck, FiStar } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BookingPage() {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    passengers: '1',
    busType: 'all',
    travelClass: 'economy',
    name: '',
    email: '',
    phone: ''
  });

  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedBus, setSelectedBus] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const popularRoutes = [
    { from: 'Mumbai', to: 'Goa', price: '₹1,299' },
    { from: 'Delhi', to: 'Jaipur', price: '₹899' },
    { from: 'Bangalore', to: 'Chennai', price: '₹799' },
    { from: 'Hyderabad', to: 'Vijayawada', price: '₹699' }
  ];

  const busTypes = [
    { id: 'all', name: 'All Types' },
    { id: 'ac-sleeper', name: 'AC Sleeper' },
    { id: 'ac-seater', name: 'AC Seater' },
    { id: 'non-ac', name: 'Non-AC' }
  ];

  const travelClasses = [
    { id: 'economy', name: 'Economy', price: 'Base Price' },
    { id: 'premium', name: 'Premium', price: '+25%' },
    { id: 'luxury', name: 'Luxury', price: '+50%' }
  ];

  const mockBuses = [
    {
      id: 1,
      name: 'Volvo 9400',
      type: 'AC Sleeper',
      from: 'Mumbai',
      to: 'Goa',
      departureTime: '08:00 PM',
      arrivalTime: '08:00 AM',
      duration: '12h',
      price: 1299,
      rating: 4.8,
      seatsAvailable: 24,
      amenities: ['WiFi', 'Charging Ports', 'Blankets', 'Water Bottles']
    },
    {
      id: 2,
      name: 'Mercedes-Benz 1222',
      type: 'AC Seater',
      from: 'Mumbai',
      to: 'Goa',
      departureTime: '09:00 PM',
      arrivalTime: '09:00 AM',
      duration: '12h',
      price: 1199,
      rating: 4.6,
      seatsAvailable: 36,
      amenities: ['WiFi', 'Charging Ports', 'Water Bottles']
    }
  ];

  const handleSearch = async (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.phone || !formData.from || !formData.to || !formData.date) {
      setSubmitMessage({ type: 'error', text: 'Please fill in all required fields' });
      return;
    }
    
    setIsSubmitting(true);
    
    // Format the WhatsApp message
    const message = `*New Bus Booking Enquiry*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Email:* ${formData.email || 'Not provided'}%0A` +
      `*Journey:* ${formData.from} to ${formData.to}%0A` +
      `*Travel Date:* ${formData.date}%0A` +
      `*Passengers:* ${formData.passengers}%0A` +
      `*Bus Type:* ${formData.busType}%0A` +
      `*Travel Class:* ${formData.travelClass}%0A%0A` +
      `_This enquiry was sent from NT Tourism Website_`;
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/917972858515?text=${message}`, '_blank');
    
    // Also send to the original API endpoint if needed
    try {
      const response = await fetch('/api/booking-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          from: formData.from,
          to: formData.to,
          travelDate: formData.date,
          passengers: formData.passengers,
          busType: formData.busType,
          travelClass: formData.travelClass,
          message: `New booking enquiry received. Please check WhatsApp for details.`
        }),
      });

      const result = await response.json();
      
      if (response.ok) {
        setSubmitMessage('Your enquiry has been sent successfully! We will contact you soon.');
        // Reset form
        setFormData({
          from: '',
          to: '',
          date: '',
          passengers: '1',
          busType: 'all',
          travelClass: 'economy',
          name: '',
          email: '',
          phone: ''
        });
      } else {
        setSubmitMessage(result.error || 'Failed to send enquiry. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Failed to send enquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBusSelect = (bus) => {
    setSelectedBus(bus);
    setShowBookingForm(true);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    alert('Booking confirmed! Your booking details have been submitted.');
    // Reset form
    setShowBookingForm(false);
    setSelectedBus(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Premium Tourism Booking */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-cyan-50">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488646953014-85cb44e25828b?q=80&w=2070')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-blue-50/40 to-cyan-50/60"></div>
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center max-w-6xl mx-auto"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 bg-white/60 backdrop-blur-lg rounded-full border border-white/30 mb-8"
            >
              <FiShield className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-gray-700 text-sm font-medium">Premium Tourism Booking • Instant Confirmation</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-medium mb-6 leading-tight"
            >
              <span className="text-gray-900">
                Book Your Dream
              </span>
              <br />
              <span className="text-blue-600">
                Journey Today
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12"
            >
              Reserve your seat on India's most comfortable luxury buses and explore incredible destinations 
              with premium tourism experiences tailored just for you.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-col sm:flex-row justify-center gap-6"
            >
              <Link 
                href="#booking-form"
                className="group relative px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/25 hover:scale-105"
              >
                <span className="relative z-10 flex items-center">
                  <FiSearch className="mr-3 w-5 h-5" />
                  Book Your Trip
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <Link 
                href="/"
                className="group px-10 py-4 bg-white/60 backdrop-blur-lg border-2 border-white/30 text-gray-700 font-medium rounded-full transition-all duration-300 hover:bg-white/80 hover:scale-105"
              >
                <span className="flex items-center">
                  <FiMapPin className="mr-3 w-5 h-5" />
                  View Routes
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center text-gray-500">
            <span className="text-sm mb-2">Book Your Journey</span>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center"
            >
              <motion.div 
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-gray-400 rounded-full mt-2"
              ></motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Search Form */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/50 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-medium text-gray-900 mb-3">Travel Enquiry Form</h3>
                  <p className="text-gray-600">Fill in your details and we'll contact you with the best travel options</p>
                </div>
              <form onSubmit={handleSearch} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                      <FiUsers className="mr-2 text-blue-600" />
                      Full Name *
                    </label>
                    <div className="relative group">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white transition-all duration-300 hover:border-blue-400"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                      <FiSearch className="mr-2 text-blue-600" />
                      Email Address *
                    </label>
                    <div className="relative group">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white transition-all duration-300 hover:border-blue-400"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                      <FiUsers className="mr-2 text-blue-600" />
                      Phone Number *
                    </label>
                    <div className="relative group">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white transition-all duration-300 hover:border-blue-400"
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                      <FiMapPin className="mr-2 text-blue-600" />
                      From *
                    </label>
                    <div className="relative group">
                      <input
                        type="text"
                        name="from"
                        value={formData.from}
                        onChange={(e) => setFormData({...formData, from: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white transition-all duration-300 hover:border-blue-400"
                        placeholder="Departure City"
                        required
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                      <FiMapPin className="mr-2 text-green-600" />
                      To *
                    </label>
                    <div className="relative group">
                      <input
                        type="text"
                        name="to"
                        value={formData.to}
                        onChange={(e) => setFormData({...formData, to: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white transition-all duration-300 hover:border-blue-400"
                        placeholder="Destination City"
                        required
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                      <FiCalendar className="mr-2 text-blue-600" />
                      Travel Date *
                    </label>
                    <div className="relative group">
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white transition-all duration-300 hover:border-blue-400"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                      <FiSearch className="mr-2 text-blue-600" />
                      Bus Type
                    </label>
                    <div className="relative group">
                      <select
                        name="busType"
                        value={formData.busType}
                        onChange={(e) => setFormData({...formData, busType: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white transition-all duration-300 hover:border-blue-400 appearance-none"
                      >
                        {busTypes.map(type => (
                          <option key={type.id} value={type.id}>{type.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                      <FiShield className="mr-2 text-blue-600" />
                      Travel Class
                    </label>
                    <div className="relative group">
                      <select
                        name="travelClass"
                        value={formData.travelClass}
                        onChange={(e) => setFormData({...formData, travelClass: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white transition-all duration-300 hover:border-blue-400 appearance-none"
                      >
                        {travelClasses.map(travelClass => (
                          <option key={travelClass.id} value={travelClass.id}>
                            {travelClass.name} ({travelClass.price})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Success/Error Message */}
                {submitMessage && (
                  <div className={`p-6 rounded-2xl mb-8 ${
                    submitMessage.includes('success') 
                      ? 'bg-green-50 text-green-800 border-2 border-green-200' 
                      : 'bg-red-50 text-red-800 border-2 border-red-200'
                  }`}>
                    <div className="flex items-center">
                      <FiCheck className={`w-6 h-6 mr-3 ${
                        submitMessage.includes('success') ? 'text-green-600' : 'text-red-600'
                      }`} />
                      <span className="font-medium">{submitMessage}</span>
                    </div>
                  </div>
                )}

                <div className="flex justify-center mt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-medium py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg disabled:scale-100"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Enquiry...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <FiSearch className="mr-2" />
                        Send Enquiry
                      </span>
                    )}
                  </button>
                </div>
              </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Facilities Section - Step/Ladder Type */}
      <section className="py-10 bg-gradient-to-br from-white via-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-blue-600 font-medium text-xs">PREMIUM FACILITIES</span>
            <h3 className="text-xl md:text-2xl font-medium text-gray-900 mt-1 mb-2">Travel with Comfort & Style</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Experience luxury travel with our world-class amenities and services</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {/* Step/Ladder Layout */}
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-300 to-cyan-200"></div>
              
              {/* Steps */}
              {[
                {
                  step: 1,
                  icon: <FiWifi className="w-4 h-4 text-blue-600" />,
                  title: 'Free High-Speed WiFi',
                  description: 'Stay connected throughout your journey with complimentary high-speed WiFi.'
                },
                {
                  step: 2,
                  icon: <FiCoffee className="w-4 h-4 text-blue-600" />,
                  title: 'Refreshments & Snacks',
                  description: 'Enjoy complimentary refreshments and beverages during your journey.'
                },
                {
                  step: 3,
                  icon: <FiShield className="w-4 h-4 text-blue-600" />,
                  title: 'Safety First',
                  description: 'Your safety is our priority with GPS tracking and experienced drivers.'
                },
                {
                  step: 4,
                  icon: <FiUsers className="w-4 h-4 text-blue-600" />,
                  title: '24/7 Customer Support',
                  description: 'Round-the-clock customer assistance for any queries during travel.'
                },
                {
                  step: 5,
                  icon: <FiClock className="w-4 h-4 text-blue-600" />,
                  title: 'On-Time Guarantee',
                  description: 'We pride ourselves on 95% on-time performance with real-time tracking.'
                },
                {
                  step: 6,
                  icon: <FiMapPin className="w-4 h-4 text-blue-600" />,
                  title: '100+ Destinations',
                  description: 'Extensive network covering major cities and tourist destinations.'
                }
              ].map((facility, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`relative flex items-start mb-4 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Step Number Circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 bg-white border-3 border-blue-200 rounded-full flex items-center justify-center shadow-md">
                      <span className="text-blue-600 font-bold text-sm">{facility.step}</span>
                    </div>
                    {/* Icon Circle */}
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-sm">
                      {facility.icon}
                    </div>
                  </div>
                  
                  {/* Content Card */}
                  <div className={`ml-4 md:ml-6 ${index % 2 === 0 ? 'md:ml-6' : 'md:mr-6'}`}>
                    <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-0.5 max-w-xs">
                      <h4 className="text-sm font-medium mb-2 text-gray-900">{facility.title}</h4>
                      <p className="text-gray-600 text-xs leading-relaxed">{facility.description}</p>
                    </div>
                  </div>
                  
                  {/* Alternating Design Elements */}
                  {index % 2 === 1 && (
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-200 rounded-full"></div>
                  )}
                </motion.div>
              ))}
            </div>
            
            {/* Bottom Completion Indicator */}
            <div className="text-center mt-8">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full shadow-md">
                <FiCheck className="w-4 h-4 mr-1" />
                <span className="font-medium text-sm">Complete Premium Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-16 bg-gradient-to-br from-white via-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-4">Popular Routes</h3>
            <p className="text-gray-600 leading-relaxed">Book our most popular routes with best prices and premium comfort</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularRoutes.map((route, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-base font-medium text-gray-900">{route.from}</h4>
                    <div className="flex items-center my-1">
                      <span className="text-blue-600 text-xl">→</span>
                    </div>
                    <h4 className="text-base font-medium text-gray-900">{route.to}</h4>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-medium text-blue-600">{route.price}</span>
                    <p className="text-xs text-gray-500">per seat</p>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <FiClock className="mr-2 text-blue-600" />
                  <span>Daily Service Available</span>
                </div>
                <Link 
                  href="/fleet"
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex justify-center items-center"
                >
                  View Buses
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search Results */}
      {showResults && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Available Buses</h2>
              
              <div className="grid grid-cols-1 gap-6">
                {searchResults.map((bus) => (
                  <div key={bus.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
                    <div className="md:flex">
                      {/* Bus Image */}
                      <div className="md:w-1/3 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-6">
                        <div className="text-center">
                          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                            <FiSearch className="w-8 h-8 text-blue-600" />
                          </div>
                          <p className="text-gray-700 font-semibold">{bus.name}</p>
                        </div>
                      </div>
                      
                      {/* Bus Details */}
                      <div className="md:w-2/3 p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{bus.name}</h3>
                            <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full">{bus.type}</span>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-blue-600">₹{bus.price}</div>
                            <div className="text-sm text-gray-500">per seat</div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="flex items-center text-sm text-gray-600">
                            <FiClock className="mr-2 text-blue-600" />
                            <span>{bus.departureTime} - {bus.arrivalTime}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <FiUsers className="mr-2 text-blue-600" />
                            <span>{bus.seatsAvailable} seats left</span>
                          </div>
                        </div>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <FiStar key={i} className={`w-4 h-4 ${i < Math.floor(bus.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-700 font-semibold">{bus.rating}</span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {bus.amenities.map((amenity, index) => (
                            <span key={index} className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                              {amenity === 'WiFi' && <FiWifi className="mr-1 w-3 h-3" />}
                              {amenity === 'Charging Ports' && <FiCoffee className="mr-1 w-3 h-3" />}
                              {amenity === 'Blankets' && <span className="mr-1">🛏️</span>}
                              {amenity === 'Water Bottles' && <span className="mr-1">💧</span>}
                              {amenity}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <button
                          onClick={() => handleBusSelect(bus)}
                          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                        >
                          Select Bus
                        </button>
                        <Link
                          href="/fleet"
                          className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                        >
                          View More Buses →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Booking Form Modal */}
      {showBookingForm && selectedBus && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Complete Your Booking</h2>
                <button
                  onClick={() => setShowBookingForm(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Selected Bus Summary */}
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Selected Bus Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Bus Name:</span>
                    <span className="font-semibold">{selectedBus.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Type:</span>
                    <span className="font-semibold">{selectedBus.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Route:</span>
                    <span className="font-semibold">{selectedBus.from} → {selectedBus.to}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Time:</span>
                    <span className="font-semibold">{selectedBus.departureTime} - {selectedBus.arrivalTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Price per Seat:</span>
                    <span className="font-semibold text-blue-600">₹{selectedBus.price}</span>
                  </div>
                </div>
              </div>

              {/* Booking Form */}
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Number of Seats *</label>
                    <select
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 appearance-none"
                    >
                      {[1, 2, 3, 4, 5, 6].map(num => (
                        <option key={num} value={num}>{num} Seat{num > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Special Requirements</label>
                  <textarea
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-none"
                    placeholder="Any special needs or requests..."
                  ></textarea>
                </div>

                <div className="flex justify-between items-center pt-6 border-t border-gray-200">
                  <div className="text-lg font-semibold text-gray-900">
                    Total: <span className="text-2xl text-blue-600">₹{selectedBus.price}</span>
                  </div>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setShowBookingForm(false)}
                      className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                    >
                      Confirm Booking
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}



    </div>
  );
}
