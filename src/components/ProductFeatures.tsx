"use client";

import { useEffect, useState, useRef } from 'react';

export default function ProductFeatures() {
  const [isVisible, setIsVisible] = useState(false);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const element = document.getElementById('features');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const features = [
    {
      title: "Scan AI",
      description: "Teknologi AI canggih yang dapat memindai layar perangkat dan mendeteksi potensi penipuan atau ancaman keamanan.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "OCR",
      description: "Mengonversi teks dari gambar menjadi teks digital yang dapat ditelusuri dan dianalisis untuk mendeteksi konten mencurigakan.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      ),
      color: "from-purple-400 to-purple-600",
    },
    {
      title: "Penilaian Risiko",
      description: "Menganalisis konten dan memberikan skor risiko berdasarkan pola penipuan yang dikenali dan indikator ancaman.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "from-red-400 to-red-600",
    },
    {
      title: "Rekomendasi Tindakan",
      description: "Memberikan saran langkah-langkah yang harus diambil berdasarkan hasil analisis untuk melindungi data dan privasi Anda.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "from-green-400 to-green-600",
    },
    {
      title: "Riwayat Scan",
      description: "Menyimpan dan mengelola riwayat pemindaian untuk melacak dan memantau ancaman yang terdeteksi dari waktu ke waktu.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "from-yellow-400 to-yellow-600",
    },
    {
      title: "Pembaruan Otomatis",
      description: "Database ancaman yang terus diperbarui secara otomatis untuk melindungi dari jenis penipuan dan serangan terbaru.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      color: "from-indigo-400 to-indigo-600",
    },
  ];

  return (
    <section id="features" ref={featuresRef} className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-light-blue rounded-full opacity-20 transform translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-200 rounded-full opacity-20 transform -translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1 bg-light-blue text-primary-blue rounded-full text-sm font-semibold mb-4 animate-pulse">FITUR UNGGULAN</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">CyberLens:</span> Keamanan Digital dalam Genggaman Anda
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Aplikasi mobile AI yang dirancang untuk melindungi Anda dari penipuan digital dan ancaman keamanan dengan fitur-fitur canggih.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`bg-white p-6 rounded-xl shadow-lg transition-all duration-500 border border-gray-100 card-hover reveal-on-scroll stagger-item ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{animationDelay: `${0.1 + (index * 0.1)}s`}}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center mb-6 text-white shadow-lg transform transition-transform duration-500 group-hover:scale-110`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary-blue transition-colors">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
              
              {/* Highlight indicator */}
              <div className="w-0 group-hover:w-full h-1 bg-gradient-to-r from-primary-blue to-secondary-blue mt-4 transition-all duration-300 rounded-full"></div>
            </div>
          ))}
        </div>
        
        {/* Floating badge */}
        <div className="absolute -right-10 bottom-1/4 animate-float parallax-slow" style={{animationDelay: '1s'}}>
          <div className="bg-white p-3 rounded-xl shadow-lg flex items-center space-x-2 transform rotate-6">
            <span className="flex h-8 w-8 bg-green-100 rounded-full items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="text-sm font-medium">Terpercaya</span>
          </div>
        </div>
      </div>
    </section>
  );
} 