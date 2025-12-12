'use client';

import { FiTruck, FiMap, FiCalendar, FiUsers, FiShield, FiBriefcase, FiGlobe, FiClock, FiWifi, FiCompass, FiNavigation, FiSun } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  const services = [
    {
      icon: <FiTruck className="w-8 h-8 text-blue-600" />,
      title: 'Luxury Bus Rental',
      description: 'Experience premium comfort with our luxury bus rental services for all your travel needs.'
    },
    {
      icon: <FiMap className="w-8 h-8 text-blue-600" />,
      title: 'Pilgrimage Tours',
      description: 'Sacred journeys made comfortable with our specialized pilgrimage tour packages.'
    },
    {
      icon: <FiCalendar className="w-8 h-8 text-blue-600" />,
      title: 'Event Transportation',
      description: 'Reliable transportation solutions for weddings, corporate events, and group tours.'
    },
    {
      icon: <FiUsers className="w-8 h-8 text-blue-600" />,
      title: 'Group Travel',
      description: 'Perfect travel solutions for large groups with customized itineraries.'
    },
    {
      icon: <FiShield className="w-8 h-8 text-blue-600" />,
      title: 'Safe & Secure',
      description: 'Your safety is our priority with well-maintained vehicles and professional drivers.'
    },
    {
      icon: <FiBriefcase className="w-8 h-8 text-blue-600" />,
      title: 'Corporate Travel',
      description: 'Efficient and comfortable travel solutions for your business needs.'
    },
  ];

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
            Our Premium Services
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Premium transportation solutions tailored to your needs with comfort and reliability
          </motion.p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Glassy Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-blue-50/90 to-cyan-50/95 backdrop-blur-sm"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full px-4 py-2 mb-6 shadow-lg"
            >
              <FiGlobe className="mr-2" />
              <span className="font-semibold text-sm tracking-wider uppercase">WHAT WE OFFER</span>
            </motion.div>
            <h3 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mt-3 mb-6">Comprehensive Travel Solutions</h3>
            <p className="text-gray-700 text-lg leading-relaxed">We provide a wide range of transportation services to meet all your travel requirements with comfort and reliability.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className="bg-white/70 backdrop-blur-2xl rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-white/30 hover:border-blue-400/50 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="p-8">
                  <motion.div 
                    className="w-20 h-20 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="text-blue-600">
                      {service.icon}
                    </div>
                  </motion.div>
                  <h4 className="text-xl font-bold text-center mb-4 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">{service.title}</h4>
                  <p className="text-gray-700 text-center leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50/50 to-white/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/images/ved1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">WHY CHOOSE US</span>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-8">Your Comfort is Our Priority</h3>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 rounded-xl mr-4 group-hover:shadow-md transition-all">
                    <FiUsers className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-gray-900 mb-2">Experienced Drivers</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">Our professional drivers are trained to ensure your journey is safe and comfortable.</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 rounded-xl mr-4 group-hover:shadow-md transition-all">
                    <FiShield className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-gray-900 mb-2">Safety First</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">Regular maintenance and safety checks to ensure worry-free travel.</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 rounded-xl mr-4 group-hover:shadow-md transition-all">
                    <FiClock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-gray-900 mb-2">24/7 Support</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">Round-the-clock customer support for all your travel needs.</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 rounded-xl mr-4 group-hover:shadow-md transition-all">
                    <FiWifi className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-gray-900 mb-2">Free WiFi</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">Stay connected throughout your journey with complimentary WiFi.</p>
                  </div>
                </motion.div>
              </div>
              
              <div className="mt-8">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    href="/contact" 
                    className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-white via-[#fef7f1] to-[#f7fbfe] text-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Book Your Journey?
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Experience the comfort and luxury of our premium bus services. Get in touch with us today!
          </motion.p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/booking" 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 font-bold py-4 px-10 rounded-full transition-all duration-300 transform shadow-2xl inline-block"
              >
                Book Now
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/contact" 
                className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-4 px-10 rounded-full transition-all duration-300 inline-block"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
