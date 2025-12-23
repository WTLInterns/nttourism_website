'use client';

import { useState } from 'react';
import { FiPhone, FiMail, FiMapPin, FiClock, FiHeadphones } from 'react-icons/fi';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for contacting us! We will get back to you soon.');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#fef7f1] to-[#f7fbfe]">
      {/* Contact Info Cards */}
      <section className="py-20 md:py-28 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">CONTACT US</span>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">Get in Touch</h3>
            <p className="text-gray-600">Multiple ways to reach us - we're always here to help!</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              { icon: <FiPhone className="w-8 h-8 text-blue-600" />, title: 'Phone Support', desc: '24/7 Customer Service', link: 'tel:+919876543210', text: '+91 98765 43210' },
              { icon: <FiMail className="w-8 h-8 text-blue-600" />, title: 'Email Support', desc: 'Quick Response', link: 'mailto:info@nttourism.com', text: 'info@nttourism.com' },
              { icon: <FiMapPin className="w-8 h-8 text-blue-600" />, title: 'Office Location', desc: 'Visit Us', link: null, text: '123, MG Road, Bangalore, Karnataka 560001' },
              { icon: <FiClock className="w-8 h-8 text-blue-600" />, title: 'Business Hours', desc: 'Always Available', link: null, text: 'Mon-Sun: 24/7' }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-blue-50 rounded-3xl shadow-2xl transform group-hover:scale-105 transition-all duration-500" />
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-white/50 group-hover:shadow-2xl transition-all duration-500 overflow-hidden text-center">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100/50 to-cyan-100/50 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500" />
                  <div className="relative z-10">
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-blue-50 to-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      {item.icon}
                    </motion.div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                    <p className="text-gray-600 mb-4">{item.desc}</p>
                    {item.link ? (
                      <a href={item.link} className="text-blue-600 font-semibold hover:text-blue-700 transition-colors inline-flex items-center gap-1 group-hover:scale-105 transition-transform">
                        {item.text}
                      </a>
                    ) : (
                      <p className="text-sm text-gray-700">{item.text}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Content with Image */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Image Section - FIXED TO SHOW FULL IMAGE */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-gray-200 bg-gradient-to-br from-blue-50 to-cyan-50">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative w-full h-full min-h-[500px] flex items-center justify-center p-8"
              >
                {/* Container to control image size */}
                <div className="relative w-full h-[400px] max-w-[600px] mx-auto">
                  <Image
                    src="/images/contact.png"
                    alt="Modern Bus Transportation"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-20">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg"
                  >
                    <span className="text-sm font-bold text-blue-700">Premium Travel</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg"
                  >
                    <span className="text-sm font-bold text-cyan-700">24/7 Service</span>
                  </motion.div>
                </div>
                
                {/* Bottom text overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-6 left-6 right-6 z-20"
                >
                  <div className="bg-gradient-to-r from-blue-600/90 to-cyan-600/90 backdrop-blur-sm rounded-xl p-4 shadow-2xl">
                    <p className="text-white font-bold text-lg">Your Journey, Our Priority</p>
                    <p className="text-white/90 text-sm mt-1">Comfortable, safe, and reliable transportation</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              <motion.div 
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200 relative overflow-hidden"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-3xl blur-xl opacity-20" />
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <motion.div 
                      className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center mr-3 shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FiHeadphones className="w-6 h-6 text-blue-600" />
                    </motion.div>
                    <h4 className="text-2xl font-bold text-gray-900">Need Immediate Assistance?</h4>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Our customer support team is available 24/7 to help you with your booking inquiries, travel plans, and any assistance you need.
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/booking"
                      className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl"
                    >
                      Book Now
                    </Link>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-100 relative overflow-hidden"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl blur-xl opacity-10" />
                <div className="relative z-10">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h4>
                  <div className="space-y-4">
                    {[
                      { q: 'How do I book a bus?', a: 'You can book online through our website or call our 24/7 helpline.' },
                      { q: 'What payment methods do you accept?', a: 'We accept all major credit cards, debit cards, and online payment methods.' },
                      { q: 'Can I cancel my booking?', a: 'Yes, you can cancel up to 24 hours before departure for a full refund.' }
                    ].map((faq, index) => (
                      <motion.div 
                        key={index}
                        className="border-b border-gray-200 pb-4 last:border-0"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <h5 className="font-semibold text-gray-900 mb-2">{faq.q}</h5>
                        <p className="text-sm text-gray-600">{faq.a}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}