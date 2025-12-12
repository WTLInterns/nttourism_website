'use client';

import { motion } from 'framer-motion';
import { FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingContactButtons = () => {
  const phoneNumber = '+917972858515';
  const whatsappNumber = '917972858515';
  const whatsappMessage = `Hello! I'm interested in learning more about your tourism services. Could you please share details about:
 
📅 *Tour Packages*
- Available itineraries & durations
- Pricing & inclusions
- Special offers
 
🚌 *Transportation*
- Vehicle types & capacities
- Rental rates
- Driver services
 
📍 *Destinations*
- Popular tourist spots
- Best times to visit
- Unique experiences
 
🏨 *Accommodations*
- Partner hotels
- Room categories
- Meal options
 
Looking forward to your response!`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        title="Chat with us on WhatsApp"
      >
        <FaWhatsapp className="w-7 h-7" />
        <span className="absolute right-16 bg-gray-900 text-white text-sm font-medium px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
          Chat on WhatsApp
        </span>
        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"></span>
      </motion.a>

      {/* Call Button */}
      <motion.a
        href={`tel:${phoneNumber}`}
        className="group relative w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300"
        whileHover={{ scale: 1.1, rotate: -5 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <FiPhone className="w-6 h-6 animate-pulse" />
        <span className="absolute right-16 bg-gray-900 text-white text-sm font-medium px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
          Call Now
        </span>
      </motion.a>
    </div>
  );
};

export default FloatingContactButtons;
