import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';
import { useEffect, useState } from 'react';

const Contact = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="contact" className="bg-blue-100 relative py-16 overflow-hidden">
      {/* Animated Communication Background */}
      <div className="absolute inset-0">
        {/* Signal Waves */}
        <div className="absolute top-1/4 left-10">
          {[1, 2, 3].map((i) => (
            <div 
              key={i}
              className="absolute w-16 h-16 border-2 border-blue-200/30 rounded-full"
              style={{ 
                transform: `scale(${1 + i * 0.5 + Math.sin(scrollY * 0.01 + i) * 0.2})`,
                opacity: 0.6 - i * 0.15
              }}
            />
          ))}
        </div>
        
        <div className="absolute bottom-1/3 right-20">
          {[1, 2, 3].map((i) => (
            <div 
              key={i}
              className="absolute w-12 h-12 border-2 border-indigo-200/25 rounded-full"
              style={{ 
                transform: `scale(${1 + i * 0.4 + Math.cos(scrollY * 0.008 + i) * 0.3})`,
                opacity: 0.5 - i * 0.1
              }}
            />
          ))}
        </div>
        
        {/* Floating Icons */}
        <div 
          className="absolute top-32 right-1/4 opacity-20"
          style={{ transform: `translateY(${Math.sin(scrollY * 0.01) * 15}px) rotate(${scrollY * 0.02}deg)` }}
        >
          <Mail size={24} className="text-blue-400" />
        </div>
        <div 
          className="absolute bottom-48 left-1/3 opacity-15"
          style={{ transform: `translateY(${Math.cos(scrollY * 0.012) * 18}px) rotate(${scrollY * -0.015}deg)` }}
        >
          <MessageSquare size={28} className="text-indigo-400" />
        </div>
        
        {/* Connection Lines */}
        <svg className="absolute w-full h-full opacity-10">
          <path 
            d={`M100,100 Q${400 + Math.sin(scrollY * 0.01) * 30},${200 + Math.cos(scrollY * 0.01) * 20} 700,150`}
            stroke="#3B82F6" 
            strokeWidth="1" 
            fill="none"
          />
          <path 
            d={`M200,400 Q${500 + Math.cos(scrollY * 0.008) * 25},${300 + Math.sin(scrollY * 0.008) * 15} 800,350`}
            stroke="#6366F1" 
            strokeWidth="1" 
            fill="none"
          />
        </svg>
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{ 
            backgroundImage: `radial-gradient(circle at 50% 50%, #3B82F6 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            transform: `translate(${Math.sin(scrollY * 0.005) * 10}px, ${Math.cos(scrollY * 0.005) * 10}px)`
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact</h2>
        </div>

        <div className="grid gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="text-blue-600" size={20} />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                      <a href="mailto:chiara.sava@unimi.it" className="text-gray-600 hover:text-blue-600">
                      <p>chiara.sava[at]unimi.it</p>
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="text-blue-600" size={20} />
                  <div>
                    <a href="https://matematica.unimi.it/it" target='_blank' className="text-gray-600 hover:text-blue-600">
                      <p className="font-medium text-gray-900"> Department of Mathematics "Federigo Enriques" </p>
                      <p> Università degli Studi di Milano Statale </p> 
                      <p> Via Saldini 50, 20133 MILANO (MI) </p>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
