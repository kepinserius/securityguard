"use client";

import { useEffect, useState } from 'react';

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const element = document.getElementById('testimonials');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const testimonials = [
    {
      name: "Budi Santoso",
      role: "Pengusaha Online",
      content: "CyberLens telah membantu saya mengidentifikasi beberapa upaya penipuan yang hampir saya jatuh korbannya. Aplikasi ini sangat intuitif dan memberikan peringatan real-time yang sangat berguna.",
      avatar: "BS",
    },
    {
      name: "Siti Rahayu",
      role: "Ibu Rumah Tangga",
      content: "Sebagai orang yang tidak terlalu paham teknologi, CyberLens sangat membantu saya untuk tetap aman saat berbelanja online. Saya merasa lebih percaya diri sekarang saat menggunakan internet.",
      avatar: "SR",
    },
    {
      name: "Arief Wijaya",
      role: "Mahasiswa Teknik",
      content: "Aplikasi yang luar biasa! Saya menggunakannya untuk memverifikasi keamanan situs web dan transaksi online. Fitur analisis mendalam sangat berguna untuk mendeteksi potensi ancaman.",
      avatar: "AW",
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-light-blue">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
            Apa Kata Pengguna Kami
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Dengarkan pengalaman dari pengguna yang telah merasakan manfaat dari CyberLens
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`bg-white p-8 rounded-xl shadow-md transition-all duration-500 ${
                activeIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute'
              }`}
              style={{ display: activeIndex === index ? 'block' : 'none' }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-primary-blue text-white flex items-center justify-center font-bold text-lg">
                  {testimonial.avatar}
                </div>
                <div className="ml-4">
                  <div className="font-bold text-lg">{testimonial.name}</div>
                  <div className="text-gray-500">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-gray-600 italic mb-6">"{testimonial.content}"</p>
              <div className="flex justify-center">
                <div className="flex space-x-2">
                  {testimonials.map((_, idx) => (
                    <button 
                      key={idx} 
                      className={`w-3 h-3 rounded-full ${
                        activeIndex === idx ? 'bg-primary-blue' : 'bg-gray-300'
                      }`}
                      onClick={() => setActiveIndex(idx)}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 