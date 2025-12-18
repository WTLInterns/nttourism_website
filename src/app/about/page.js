'use client';

import { FiAward, FiMap, FiUsers, FiShield, FiClock, FiMapPin } from 'react-icons/fi';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '500+', label: 'Luxury Buses' },
    { value: '1M+', label: 'Happy Customers' },
    { value: '50+', label: 'Destinations' },
  ];

  const features = [
    {
      icon: <FiAward className="w-8 h-8 text-blue-600" />,
      title: 'Award Winning Service',
      description: 'Recognized for excellence in customer service and operational efficiency.'
    },
    {
      icon: <FiMap className="w-8 h-8 text-blue-600" />,
      title: 'Extensive Network',
      description: 'Connecting major cities and tourist destinations across India.'
    },
    {
      icon: <FiUsers className="w-8 h-8 text-blue-600" />,
      title: 'Experienced Team',
      description: 'Professional drivers and staff with years of experience.'
    },
    {
      icon: <FiShield className="w-8 h-8 text-blue-600" />,
      title: 'Safety First',
      description: 'Regular vehicle maintenance and safety checks for worry-free travel.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#fef7f1] to-[#f7fbfe]">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-gray-900/80 backdrop-blur-lg border-b border-white/20 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-white/10" />
        <div className="container mx-auto px-4 relative z-10 text-center pt-16">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Our Journey
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Pioneering luxury bus travel with comfort, safety, and reliability since 2008
          </motion.p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl blur-xl opacity-30" />
                <Image
                  src="/images/Bus4.png"
                  alt="Our Team"
                  fill
                  className="object-cover rounded-2xl"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/Bus1.png';
                  }}
                />
                <div className="absolute bottom-4 left-6 bg-white/90  p-2 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600">Since 2008</div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">OUR STORY</span>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3 mb-6">Redefining Luxury Travel Since 2008</h3>
              <p className="text-gray-600 mb-6">
                Founded with a vision to transform road travel, our company has grown from a small fleet of 5 buses to one of the most trusted names in luxury bus transportation. What started as a humble beginning has now become a benchmark for excellence in the industry.
              </p>
              <p className="text-gray-600 mb-8">
                Our commitment to quality service, punctuality, and customer satisfaction has helped us build lasting relationships with millions of travelers. We continue to innovate and set new standards in the luxury bus travel segment.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start p-4 bg-white/60 backdrop-blur-sm rounded-xl hover:bg-white/80 transition-all duration-300 group"
                    whileHover={{ x: 5, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 rounded-xl mr-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1 text-sm">{feature.title}</h4>
                      <p className="text-xs text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-br from-blue-50/50 to-white/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">OUR ACHIEVEMENTS</span>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">Numbers That Speak</h3>
            <p className="text-gray-600">Our journey marked by excellence, growth, and countless satisfied travelers.</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-blue-50 rounded-2xl shadow-xl transform group-hover:scale-105 transition-all duration-500" />
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-white p-6 rounded-2xl shadow-lg border border-white/50 group-hover:shadow-xl transition-all duration-500 overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-100/50 to-cyan-100/50 rounded-full -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-500" />
                  <div className="relative z-10">
                    <motion.div 
                      className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-gray-600 font-medium leading-tight">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">OUR VALUES</span>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">What Drives Us Forward</h3>
            <p className="text-gray-600">Our core values shape our culture and guide our decisions as we continue to serve you better.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Customer First',
                description: 'We put our customers at the heart of everything we do, ensuring their comfort and satisfaction is our top priority.'
              },
              {
                title: 'Safety & Reliability',
                description: 'Rigorous maintenance schedules and well-trained staff ensure your journey is always safe and on time.'
              },
              {
                title: 'Innovation',
                description: 'Continuously improving our services with the latest technology and modern amenities for a better travel experience.'
              },
              {
                title: 'Sustainability',
                description: 'Committed to reducing our environmental impact through efficient operations and eco-friendly practices.'
              },
              {
                title: 'Integrity',
                description: 'We conduct our business with honesty, transparency, and ethical practices at all times.'
              },
              {
                title: 'Excellence',
                description: 'Striving for excellence in every aspect of our service to exceed customer expectations.'
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  <div className="w-4 h-4 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full"></div>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">MEET OUR TEAM</span>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3 mb-4">Dedicated Professionals</h3>
            <p className="text-gray-600 text-sm">Our experienced team committed to excellence in travel service.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[ 
              {
                name: 'Vikram Singh',
                role: 'Senior Driver',
                experience: '12+ Years',
                routes: 'Mumbai-Goa, Mumbai-Pune',
                image: 'https://randomuser.me/api/portraits/men/32.jpg'
              },
              {
                name: 'Ramesh Iyer',
                role: 'Luxury Coach Driver',
                experience: '15+ Years',
                routes: 'Delhi-Jaipur, Delhi-Chandigarh',
                image: 'https://randomuser.me/api/portraits/men/44.jpg'
              },
              {
                name: 'Suresh Kumar',
                role: 'Night Service Specialist',
                experience: '10+ Years',
                routes: 'Bangalore-Chennai, Bangalore-Hyderabad',
                image: 'https://randomuser.me/api/portraits/men/67.jpg'
              },
              {
                name: 'Mahesh Patel',
                role: 'Mountain Route Expert',
                experience: '14+ Years',
                routes: 'Dehradun-Delhi, Manali-Chandigarh',
                image: 'https://randomuser.me/api/portraits/men/22.jpg'
              }
            ].map((driver, index) => (
              <motion.div 
                key={index}
                className={`group relative flex flex-col items-center bg-white rounded-2xl p-6 overflow-hidden transition-all duration-300
                  border-2 ${
                    index % 4 === 0 ? 'border-blue-400 hover:shadow-lg hover:shadow-blue-100' : 
                    index % 4 === 1 ? 'border-green-400 hover:shadow-lg hover:shadow-green-100' :
                    index % 4 === 2 ? 'border-amber-400 hover:shadow-lg hover:shadow-amber-100' :
                    'border-purple-400 hover:shadow-lg hover:shadow-purple-100'
                  }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                {/* Decorative corner elements */}
                <div className={`absolute -top-6 -right-6 w-12 h-12 rounded-full ${
                  index % 4 === 0 ? 'bg-blue-100' : 
                  index % 4 === 1 ? 'bg-green-100' :
                  index % 4 === 2 ? 'bg-amber-100' : 'bg-purple-100'
                }`}></div>
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className={`relative w-32 h-32 mb-6 rounded-full overflow-hidden border-4 ${
                    index % 4 === 0 ? 'border-blue-200' : 
                    index % 4 === 1 ? 'border-green-200' :
                    index % 4 === 2 ? 'border-amber-200' : 'border-purple-200'
                  } group-hover:scale-105 transition-transform duration-300`}>
                    <Image
                      src={driver.image}
                      alt={driver.name}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(driver.name) + '&background=random';
                      }}
                    />
                  </div>
                  
                  <div className="text-center">
                    <h4 className="text-lg font-bold text-gray-800 mb-1">{driver.name}</h4>
                    <p className={`text-sm font-medium mb-3 ${
                      index % 4 === 0 ? 'text-blue-600' : 
                      index % 4 === 1 ? 'text-green-600' :
                      index % 4 === 2 ? 'text-amber-600' : 'text-purple-600'
                    }`}>
                      {driver.role}
                    </p>
                    
                    <div className="mb-2">
                      <div className="flex items-center justify-center text-gray-600 text-sm mb-1">
                        <FiClock className={`mr-2 ${
                          index % 4 === 0 ? 'text-blue-500' : 
                          index % 4 === 1 ? 'text-green-500' :
                          index % 4 === 2 ? 'text-amber-500' : 'text-purple-500'
                        }`} />
                        <span>{driver.experience} Experience</span>
                      </div>
                      <div className="flex items-start justify-center text-gray-600 text-xs">
                        <FiMapPin className={`mt-0.5 mr-1 flex-shrink-0 ${
                          index % 4 === 0 ? 'text-blue-500' : 
                          index % 4 === 1 ? 'text-green-500' :
                          index % 4 === 2 ? 'text-amber-500' : 'text-purple-500'
                        }`} />
                        <span className="text-center">{driver.routes}</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-center space-x-3 mt-4">
                      <button className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                        index % 4 === 0 ? 'bg-blue-50 hover:bg-blue-100 text-blue-600' : 
                        index % 4 === 1 ? 'bg-green-50 hover:bg-green-100 text-green-600' :
                        index % 4 === 2 ? 'bg-amber-50 hover:bg-amber-100 text-amber-600' : 
                        'bg-purple-50 hover:bg-purple-100 text-purple-600'
                      }`}>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                        </svg>
                      </button>
                      <button className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                        index % 4 === 0 ? 'bg-blue-50 hover:bg-blue-100 text-blue-600' : 
                        index % 4 === 1 ? 'bg-green-50 hover:bg-green-100 text-green-600' :
                        index % 4 === 2 ? 'bg-amber-50 hover:bg-amber-100 text-amber-600' : 
                        'bg-purple-50 hover:bg-purple-100 text-purple-600'
                      }`}>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.964-.94 1.161-.174.196-.347.221-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.795-1.484-1.784-1.66-2.087-.173-.297-.018-.458.132-.606.136-.133.296-.347.445-.52.146-.174.194-.298.29-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.915-2.207-.242-.579-.487-.5-.669-.508-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.078 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.87.118.57-.08 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.422 6.923h-.004a9.6 9.6 0 01-5.328-1.611c-2.82-1.92-4.32-5.13-4.32-8.65 0-3.087 1.994-5.93 5.2-6.96a9.86 9.86 0 013.8-.39 9.876 9.876 0 015.7 2.92 9.9 9.9 0 012.9 7.08c0 3.52-1.5 6.73-4.32 8.65a9.6 9.6 0 01-5.628 1.61z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white text-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Travel With Us?
          </motion.h2>
          <motion.p 
            className="text-xl mb-10 max-w-2xl mx-auto text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Experience the difference of traveling with a company that truly cares about your journey.
          </motion.p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 font-semibold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Contact Us
            </a>
            <a 
              href="/fleet" 
              className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              View Our Fleet
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
