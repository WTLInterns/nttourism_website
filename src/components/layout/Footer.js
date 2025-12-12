'use client';

import Link from 'next/link';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiMapPin, FiPhone, FiMail, FiClock, FiMessageSquare } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Fleet', href: '/fleet' },
    { name: 'Services', href: '/#services' },
    { name: 'Routes', href: '/routes' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
  ];

  const contactInfo = [
    { icon: <FiMapPin className="text-blue-500" />, text: '123 Travel Plaza, Mumbai, Maharashtra, India - 400001' },
    { icon: <FiPhone className="text-blue-500" />, text: '+91 7972858515' },
    { icon: <FiMail className="text-blue-500" />, text: 'info@nttourism.com' },
    { icon: <FiClock className="text-blue-500" />, text: '24/7 Customer Support' },
  ];

  const socialLinks = [
    { 
      icon: <FiMessageSquare />, 
      href: 'https://wa.me/917972858515?text=Hello!%20I%27m%20interested%20in%20your%20tourism%20services.%20Could%20you%20please%20provide%20information%20about%3A%0A%0A%F0%9F%93%85%20Available%20tour%20packages%0A%F0%9F%9A%8C%20Vehicle%20options%20and%20pricing%0A%F0%9F%93%8D%20Popular%20tourist%20destinations%0A%F0%9F%8F%A8%20Hotel%20partnerships%0A%0AThank%20you!', 
      label: 'WhatsApp' 
    },
    { icon: <FiFacebook />, href: 'https://facebook.com', label: 'Facebook' },
    { icon: <FiInstagram />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <FiLinkedin />, href: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-2">
                NT
              </div>
              <span className="text-xl font-bold">NT Tourism</span>
            </div>
            <p className="text-gray-400">
              Your trusted partner for luxury bus travel experiences across India. We provide comfortable, safe, and reliable transportation services.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                  aria-label={social.label}
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mt-1 mr-3">{item.icon}</span>
                  <span className="text-gray-400">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="space-y-3" suppressHydrationWarning>
              <div>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  required
                  suppressHydrationWarning
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                suppressHydrationWarning
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} NT Tourism. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/terms" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
