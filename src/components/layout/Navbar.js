'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX, FiPhone, FiMail, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiYoutube, FiPhoneCall } from 'react-icons/fi';
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
    { name: 'Routes', href: '/routes' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-xl' : 'shadow-md'
      }`}
    >
      {/* Main Navigation - Premium Sticky Design */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo - Enhanced */}
            <Link href="/" className="flex items-center group">
              <motion.div 
                className="h-12 w-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center text-white font-bold text-2xl mr-3 shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                NT
              </motion.div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">NT Tourism</span>
                <span className="text-xs text-gray-500 font-medium hidden sm:block">Premium Travel Experience</span>
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
              <motion.a 
                href="tel:+919876543210"
                className="ml-2 px-5 py-2.5 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiPhoneCall className="w-5 h-5 animate-pulse" />
                <span>Call Now</span>
              </motion.a>
              
              {/* Book Now Button */}
              <Link href="/booking">
                <motion.button
                  className="ml-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book Now
                </motion.button>
              </Link>
            </div>

            {/* Mobile menu button - Enhanced */}
            <div className="lg:hidden flex items-center gap-3">
              {/* Mobile Call Button */}
              <motion.a
                href="tel:+919876543210"
                className="px-3 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-lg shadow-lg flex items-center gap-1"
                whileTap={{ scale: 0.95 }}
              >
                <FiPhoneCall className="w-4 h-4" />
                <span className="text-sm">Call</span>
              </motion.a>
              
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
