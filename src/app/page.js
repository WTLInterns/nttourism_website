'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiArrowRight, FiClock, FiMapPin, FiPhone, FiShield, FiWifi, FiCoffee, FiUsers, FiCalendar, FiSearch } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  const busImages = [
    '/images/Buss.png',
    '/images/Buss2.png', 
    '/images/Buss3.png'
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [tripType, setTripType] = useState('oneWay');
  const [galleryImageIndex, setGalleryImageIndex] = useState(0);
  const galleryImages = [
    '/images/Buss.png',
    '/images/Bus1.png',
    '/images/seatimage3.jpeg',
    '/images/Bus2.jpeg',
    '/images/Buss2.png',
    '/images/Buss3.png',
    '/images/seatimage2.jpeg',
    '/images/van1.png',
    '/images/Van2.png',
    '/images/seatimage.jpeg',
    '/images/seatimage4.jpeg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % busImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [busImages.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setGalleryImageIndex(prevIndex => (prevIndex + 1) % galleryImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [galleryImages.length]);

  const features = [
    {
      icon: <FiShield className="w-8 h-8 text-blue-600" />,
      title: 'Safe Travel',
      description: 'Your safety is our top priority with well-maintained buses and professional drivers.'
    },
    {
      icon: <FiClock className="w-8 h-8 text-blue-600" />,
      title: 'On Time',
      description: 'We value your time with 95% on-time performance across all our routes.'
    },
    {
      icon: <FiWifi className="w-8 h-8 text-blue-600" />,
      title: 'Free WiFi',
      description: 'Stay connected with our complimentary high-speed WiFi on all premium buses.'
    },
    {
      icon: <FiCoffee className="w-8 h-8 text-blue-600" />,
      title: 'Comfort',
      description: 'Travel in comfort with spacious seating and climate control on all our buses.'
    },
    {
      icon: <FiUsers className="w-8 h-8 text-blue-600" />,
      title: '24/7 Support',
      description: 'Our customer care team is available round the clock to assist you.'
    },
    {
      icon: <FiMapPin className="w-8 h-8 text-blue-600" />,
      title: '100+ Destinations',
      description: 'Extensive network covering major cities and tourist destinations across India.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Premium Travel Experience */}
      <section className="relative min-h-screen flex items-start justify-start overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/heroback.png')] bg-contain bg-right bg-no-repeat "></div>
          {/* Left side shadow for text */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 via-black/30 to-transparent"></div>
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-4 pl-9 relative z-10 pt-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-left max-w-4xl"
          >
            {/* Trust Badge */}
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-lg rounded-full border border-white/30 mb-8 shadow-2xl"
            >
              <FiShield className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-white font-medium">SINCE 2024 • 50,000+ HAPPY TRAVELERS</span>
            </motion.div> */}
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                Discover Incredible
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent drop-shadow-2xl">
                India With Urbania
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 max-w-4xl leading-relaxed mb-12 drop-shadow-lg"
            >
              Experience the magic of India's diverse landscapes, from pristine beaches to majestic mountains, 
              ancient temples to modern cities. Your unforgettable journey starts here.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-col sm:flex-row justify-start gap-4"
            >
              <Link 
                href="/booking"
                className="group relative px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full transition-all duration-300 shadow-xl hover:shadow-purple-500/25 hover:scale-105 border-2 border-purple-400/30 text-sm"
              >
                <span className="relative z-10 flex items-center">
                  <FiSearch className="mr-2 w-4 h-4" />
                  Explore Destinations
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <Link 
                href="routes"
                className="group px-8 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold rounded-full transition-all duration-300 hover:shadow-teal-500/25 hover:scale-105 shadow-xl border-2 border-teal-400/30 text-sm"
              >
                <span className="flex items-center">
                  <FiMapPin className="mr-2 w-4 h-4" />
                  View Tour Packages
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
          <div className="flex flex-col items-center text-white/60">
            <span className="text-sm mb-2">Explore More</span>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
            >
              <motion.div 
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-white/60 rounded-full mt-2"
              ></motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Premium Tourism Search Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Glassy Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2070')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-blue-50/80 to-indigo-50/90 backdrop-blur-sm"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">PLAN YOUR JOURNEY</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
              Find Your Perfect
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Travel Experience</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">Search from our premium fleet of luxury buses and explore India's most beautiful destinations</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            <div className="bg-white/60 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/30 p-10 relative overflow-hidden">
              {/* Glass Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-blue-50/40"></div>
              
              <div className="relative z-10 overflow-x-auto">
                <table className="w-full text-left rounded-2xl overflow-hidden">
                  <thead className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
                    <tr className="bg-gradient-to-r from-blue-600 to-indigo-700">
                      <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">SR</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">Bus Type</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">KM Charge</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">Outstation Min Kms</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">Driver DA on Outstation Trip</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">Toll, Tax, Permit</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">Extra KM Charges</th>
                      <th className="px-4 py-3 text-right text-xs font-semibold text-white uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    {[
                      {
                        id: 1,
                        busType: '12 Seater A/C',
                        kmCharge: '₹25/km',
                        outstationMinKms: '300 Kms',
                        driverDA: '₹500',
                        tollTaxPermit: 'As per actual',
                        extraKmCharges: '₹38'
                      },
                      {
                        id: 2,
                        busType: '17 Seater A/C',
                        kmCharge: '₹26/km',
                        outstationMinKms: '300 Kms',
                        driverDA: '₹500',
                        tollTaxPermit: 'As per actual',
                        extraKmCharges: '₹30'
                      },
                      {
                        id: 3,
                        busType: '17 Seater Non A/C',
                        kmCharge: '₹22/km',
                        outstationMinKms: '300 Kms',
                        driverDA: '₹500',
                        tollTaxPermit: 'As per actual',
                        extraKmCharges: '₹27'
                      },
                      {
                        id: 4,
                        busType: '20 Seater A/C',
                        kmCharge: '₹28/km',
                        outstationMinKms: '300 Kms',
                        driverDA: '₹500',
                        tollTaxPermit: 'As per actual',
                        extraKmCharges: '₹33'
                      },
                      {
                        id: 5,
                        busType: '20 Seater Non A/C',
                        kmCharge: '₹25/km',
                        outstationMinKms: '300 Kms',
                        driverDA: '₹500',
                        tollTaxPermit: 'As per actual',
                        extraKmCharges: '₹30'
                      },
                      {
                        id: 6,
                        busType: '27 Seater A/C',
                        kmCharge: '₹38/km',
                        outstationMinKms: '300 Kms',
                        driverDA: '₹500',
                        tollTaxPermit: 'As per actual',
                        extraKmCharges: '₹38'
                      },
                      {
                        id: 7,
                        busType: '27 Seater Non A/C',
                        kmCharge: '₹32/km',
                        outstationMinKms: '300 Kms',
                        driverDA: '₹500',
                        tollTaxPermit: 'As per actual',
                        extraKmCharges: '₹35'
                      },
                      {
                        id: 8,
                        busType: '35 Seater A/C',
                        kmCharge: '₹55/km',
                        outstationMinKms: '300 Kms',
                        driverDA: '₹500',
                        tollTaxPermit: 'As per actual',
                        extraKmCharges: '₹50'
                      },
                      {
                        id: 9,
                        busType: '35 Seater Non A/C',
                        kmCharge: '₹40/km',
                        outstationMinKms: '300 Kms',
                        driverDA: '₹500',
                        tollTaxPermit: 'As per actual',
                        extraKmCharges: '₹46'
                      },
                      {
                        id: 10,
                        busType: '45 Seater A/C',
                        kmCharge: '₹65/km',
                        outstationMinKms: '300 Kms',
                        driverDA: '₹500',
                        tollTaxPermit: 'As per actual',
                        extraKmCharges: '₹65'
                      },
                      {
                        id: 11,
                        busType: '45 Seater Non A/C',
                        kmCharge: '₹48/km',
                        outstationMinKms: '300 Kms',
                        driverDA: '₹500',
                        tollTaxPermit: 'As per actual',
                        extraKmCharges: '₹60'
                      }
                    ].map((bus) => (
                      <tr key={bus.id} className="hover:bg-gray-50 transition-colors border-b border-gray-100">
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{bus.id}</td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{bus.busType}</div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {bus.kmCharge}
                          </span>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                          {bus.outstationMinKms}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                          {bus.driverDA}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                          {bus.tollTaxPermit}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                            {bus.extraKmCharges}
                          </span>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium">
                          <Link 
                            href="/booking"
                            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-2 px-4 rounded-lg transition-all duration-300 inline-flex items-center text-xs"
                          >
                            <span>Book Now</span>
                            <FiArrowRight className="ml-1" size={14} />
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Premium Features Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Glassy Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488646953014-85cb44e25828b?q=80&w=2070')] bg-cover bg-center opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-blue-50/90 to-indigo-50/95 backdrop-blur-sm"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">Explore Our</span>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
              Popular
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Routes</span>
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">Discover India's beauty with our premium tourism services, designed to make every journey memorable</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: '/images/Bhimashankar.webp',
                title: 'Bhimashankar',
                description: 'A spiritual retreat in the Sahyadri range, home to the Jyotirlinga temple and lush green forests. Perfect for trekkers and pilgrims alike.'
              },
              {
                image: '/images/Lonavala.avif',
                title: 'Lonavala',
                description: 'The jewel of the Sahyadri ranges, famous for its scenic beauty, waterfalls, and delicious chikkis. A perfect weekend getaway from Mumbai and Pune.'
              },
              {
                image: '/images/Goa.jpg',
                title: 'Goa Beaches',
                description: 'Sun, sand, and sea - experience the vibrant beaches, Portuguese architecture, and exciting nightlife of India\'s party capital.'
              },
              {
                image: '/images/Mahabaleshwar.jpg',
                title: 'Mahabaleshwar',
                description: 'Famous for its strawberry farms, beautiful viewpoints, and pleasant weather throughout the year. A perfect hill station getaway.'
              },
              {
                image: '/images/Matheran.jpg',
                title: 'Matheran',
                description: 'Asia\'s only automobile-free hill station, known for its pollution-free air, toy train, and breathtaking viewpoints.'
              },
              {
                image: '/images/Alibaug.jpg',
                title: 'Alibaug',
                description: 'Famous for its beautiful beaches, historic forts, and water sports. A quick escape from Mumbai with a perfect blend of history and nature.'
              }
            ].map((destination, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/30 hover:border-blue-200 hover:scale-105 overflow-hidden"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image 
                    src={destination.image} 
                    alt={destination.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                    priority={index < 3} // Only preload first 3 images
                  />
                </div>
                <div className="p-6">
                  <h5 className="text-xl font-bold mb-3 text-gray-900">{destination.title}</h5>
                  <p className="text-gray-600 leading-relaxed mb-4">{destination.description}</p>
                  <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors border border-blue-600 px-4 py-2 rounded-full">
                    Book Now {destination.title.split(' ')[0]} →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tourism Routes Section */}
      <section id="popular-tourism-routes" className="py-20 md:py-28 relative overflow-hidden">
        {/* Glassy Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512453979448-43a2419029a0?q=80&w=2070')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-blue-50/90 to-indigo-50/95 backdrop-blur-sm"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">POPULAR TOURISM ROUTES</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
              Explore India's Most
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Loved Destinations</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">Discover the most sought-after tourist destinations that showcase India's incredible diversity</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { from: 'Mumbai', to: 'Goa', duration: '12h', description: 'Beach Paradise & Nightlife' },
              { from: 'Delhi', to: 'Jaipur', duration: '6h', description: 'Pink City & Royal Palaces' },
              { from: 'Bangalore', to: 'Chennai',  duration: '5h', description: 'Silicon Valley to Coastal Gateway' },
              { from: 'Hyderabad', to: 'Vijayawada', duration: '4h 30m', description: 'Pearl City to Business Hub' },
            ].map((route, index) => {
              const routeImages = [
                '/images/Buss.png',
                '/images/Bus2.jpeg', 
                '/images/Buss3.png',
                '/images/Buss2.png'
              ];
              
              return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-gray-300 transform hover:-translate-y-2"
              >
                <div className="h-48 relative overflow-hidden bg-gray-100">
                  <img
                    src={routeImages[index]}
                    alt={`${route.from} to ${route.to}`}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/images/Buss.png';
                    }}
                  />
                  
                </div>
                <div className="p-4 bg-gradient-to-b from-white to-blue-50">
                
                  <div className="text-center mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {index === 0 ? '17 + D Seater' : 
                       index === 1 ? '32 + D Seater' : 
                       index === 2 ? '26 + D Seater' : '16 + D Seater'}
                    </span>
                  </div>
                  <hr className="my-3 border-gray-200" />
                  <div className="text-xs text-gray-500 text-center mb-3">
                    {route.description}
                  </div>
                  <Link 
                    href="/booking"
                    className="mt-2 w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-sm flex justify-center items-center"
                  >
                    Book Now
                  </Link>
                </div>
              </motion.div>
              );
            })}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-20"
          >
            <Link 
              href="/routes" 
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 text-lg transition-all duration-300 group"
            >
              View All Tourism Routes 
              <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Premium Image Carousel Section */}
      <section className="py-16 bg-gradient-to-br from-white via-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-blue-600 font-medium text-sm">GALLERY</span>
            <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mt-2 mb-4">Experience Our Journey</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Take a visual tour through our compartments and travel experiences</p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={galleryImageIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={galleryImages[galleryImageIndex]}
                    alt="Luxury Bus Experience"
                    fill
                    className="object-contain bg-gray-100"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Overlay Content */}
                  <motion.div 
                    className="absolute bottom-8 left-8 right-8 text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <h4 className="text-2xl md:text-4xl font-bold mb-2">Premium Luxury Buses</h4>
                    <p className="text-lg md:text-xl opacity-90">Travel in comfort and style with our state-of-the-art fleet</p>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
              
              {/* Navigation Arrows */}
              <button 
                onClick={() => setGalleryImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={() => setGalleryImageIndex((prev) => (prev + 1) % galleryImages.length)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Thumbnail Navigation */}
            <div className="flex justify-center mt-6 space-x-3">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setGalleryImageIndex(index)}
                  className={`transition-all duration-300 ${
                    index === galleryImageIndex ? 'bg-blue-600 w-8 h-3' : 'bg-gray-300 hover:bg-blue-400 w-3 h-3'
                  } rounded-full`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-0 md:py-8 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 text-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Travel With Us?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto text-gray-600 leading-relaxed">
            Experience the comfort and luxury of our premium bus services. Book your next journey today!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="/booking" 
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Book Now
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent border-2 border-white text-black hover:bg-white hover:text-blue-700 font-semibold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}