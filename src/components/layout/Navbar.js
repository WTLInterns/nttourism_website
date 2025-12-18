'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX, FiPhone, FiMail, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiYoutube, FiPhoneCall } from 'react-icons/fi';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';
import BookingInquiryModal from '../BookingInquiryModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showInquiryModal, setShowInquiryModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Fleet', href: '/fleet' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-0' : 'py-2'
      }`}
    >
      {/* Main Navigation - Premium Glass Design */}
      <nav className={`mx-4 rounded-2xl transition-all duration-500 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-2xl border border-white/20' 
          : 'bg-white/60 backdrop-blur-lg shadow-lg border border-white/10'
      }`}>
        <div className="container mx-auto px-5">
          <div className="flex justify-between items-center h-16">
            {/* Logo - Enhanced */}
            <Link href="/" className="flex items-center group">
              <motion.div 
                className="h-12 w-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center text-white font-bold text-2xl mr-3 shadow-lg backdrop-blur-sm"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                NT
              </motion.div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">NT Tourism</span>
                <span className="text-xs bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent font-medium hidden sm:block">Premium Travel Experience</span>
              </div>
            </Link>

            {/* Desktop Navigation - Enhanced */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    href={link.href}
                    className="px-4 py-2 text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300 rounded-lg hover:bg-blue-50 relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.div>
              ))}
              
              {/* Call Now Button */}
              <div className="flex items-center space-x-3">
                {/* Call Button */}
                <motion.a 
                  href="tel:+917972858515"
                  className="group relative px-5 py-2.5 bg-gradient-to-r from-blue-100 to-blue-50 border border-blue-200 text-blue-700 font-bold rounded-xl transition-all duration-300 flex items-center gap-2 overflow-hidden"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <FiPhoneCall className="w-4 h-4" />
                    <span className="text-sm font-semibold">Call Us</span>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-blue-400/5 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </motion.a>
                
                {/* WhatsApp Button */}
                <motion.a 
                  href="https://wa.me/917972858515?text=Hello!%20I%27m%20interested%20in%20your%20tourism%20services.%20Could%20you%20please%20provide%20information%20about%3A%0A%0A%F0%9F%93%85%20Available%20tour%20packages%0A%F0%9F%9A%8C%20Vehicle%20options%20and%20pricing%0A%F0%9F%93%8D%20Popular%20tourist%20destinations%0A%F0%9F%8F%A8%20Hotel%20partnerships%0A%0AThank%20you!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-5 py-2.5 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 text-green-700 font-bold rounded-xl transition-all duration-300 flex items-center gap-2 overflow-hidden"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  title="Chat with us on WhatsApp"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <IoLogoWhatsapp className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-semibold">WhatsApp</span>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-green-600/5 to-green-400/5 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </motion.a>
                
                {/* Book Now Button */}
                <Link href="/booking">
                  <motion.button
                    className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <span className="text-sm">Book Now</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-700/20 to-blue-900/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </motion.button>
                </Link>
              </div>
            </div>

            {/* Mobile menu button - Enhanced */}
            <div className="lg:hidden flex items-center gap-3">
              {/* Mobile Call Buttons */}
              <div className="flex items-center space-x-2">
                <motion.a
                  href="tel:+917972858515"
                  className="px-3 py-2 bg-gradient-to-r from-blue-600/5 to-blue-400/5 border border-blue-200 text-blue-700 font-semibold rounded-lg flex items-center gap-1 text-sm"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiPhoneCall className="w-4 h-4" />
                  <span>Call</span>
                </motion.a>
                <motion.a
                  href="https://wa.me/917972858515"
                  className="px-3 py-2 bg-gradient-to-r from-green-600/5 to-green-400/5 border border-green-200 text-green-700 font-semibold rounded-lg flex items-center gap-1 text-sm"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IoLogoWhatsapp className="w-4 h-4" />
                  <span>Chat</span>
                </motion.a>
              </div>
              
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-blue-600 focus:outline-none p-2 rounded-lg hover:bg-blue-50 transition-colors"
                whileTap={{ scale: 0.95 }}
                suppressHydrationWarning
              >
                {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation - Enhanced with Animation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div 
                className="lg:hidden bg-white/95 backdrop-blur-lg shadow-2xl rounded-2xl mt-2 mb-4 overflow-hidden border border-gray-200"
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-4 pt-4 pb-4 space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className="block px-4 py-3 rounded-xl text-base font-semibold text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:text-blue-700 transition-all duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                  
                  {/* Book Now Button Mobile */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="pt-2"
                  >
                    <Link href="/booking" onClick={() => setIsOpen(false)}>
                      <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                        Book Now
                      </button>
                    </Link>
                  </motion.div>
                  
                  {/* Contact Info Mobile */}
                  <div className="mt-4 pt-4 border-t-2 border-gray-100">
                    <div className="space-y-3 px-2">
                      <motion.a
                        href="tel:+919876543210"
                        className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors"
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                          <FiPhone className="w-4 h-4 text-blue-600" />
                        </div>
                        <span className="font-medium">+91 98765 43210</span>
                      </motion.a>
                      <motion.button
                        onClick={() => {
                          setShowInquiryModal(true);
                          setIsOpen(false);
                        }}
                        className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors w-full"
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                          <FiMail className="w-4 h-4 text-blue-600" />
                        </div>
                        <span className="font-medium">info@nttourism.com</span>
                      </motion.button>
                      <div className="flex items-start text-sm text-gray-600">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                          <FiMapPin className="w-4 h-4 text-blue-600" />
                        </div>
                        <span className="font-medium">123 Travel Plaza, Mumbai, India</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
      
      {/* Booking Inquiry Modal */}
      <BookingInquiryModal 
        isOpen={showInquiryModal} 
        onClose={() => setShowInquiryModal(false)} 
      />
    </header>
  );
};

export default Navbar;
