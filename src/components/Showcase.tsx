"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Showcase() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeScreen, setActiveScreen] = useState(0);

  // BAGIAN YANG DAPAT DIUBAH: Daftar screenshot aplikasi
  // Anda dapat mengubah judul, deskripsi, dan path gambar sesuai kebutuhan
  const appScreenshots = [
    { 
      image: '/screenshots/app-screen-1.png', 
      title: 'Scan Keamanan',
      description: 'Pindai perangkat Anda untuk mendeteksi ancaman secara real-time'
    },
    { 
      image: '/screenshots/app-screen-2.png', 
      title: 'Analisis Risiko', 
      description: 'Evaluasi terperinci tentang ancaman yang terdeteksi'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const element = document.getElementById('showcase');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    // Rotasi otomatis screenshot
    const interval = setInterval(() => {
      setActiveScreen((current) => 
        current === appScreenshots.length - 1 ? 0 : current + 1
      );
    }, 5000);

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, [appScreenshots.length]);

  return (
    <section id="showcase" className="py-16 md:py-24 bg-light-blue relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-blue-300 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">CyberLens</span> dalam Aksi
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Lihat bagaimana CyberLens bekerja untuk melindungi Anda dari ancaman digital
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Phone Mockup dengan Screenshots */}
          <div className={`relative w-64 h-[550px] md:w-72 md:h-[600px] ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
            {/* Phone Frame */}
            <div className="absolute inset-0 bg-black rounded-[40px] shadow-2xl overflow-hidden">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-7 bg-black rounded-b-xl z-20"></div>
              
              {/* Phone buttons */}
              <div className="absolute top-24 right-0 w-1 h-12 bg-gray-700 rounded-l-md"></div>
              <div className="absolute top-40 right-0 w-1 h-12 bg-gray-700 rounded-l-md"></div>
              <div className="absolute top-24 left-0 w-1 h-16 bg-gray-700 rounded-r-md"></div>
              
              {/* Inner border for aesthetic */}
              <div className="absolute inset-0 rounded-[40px] border-8 border-black z-10 pointer-events-none"></div>
              
              {/* Screen Content - Image */}
              <div className="absolute inset-0 rounded-[40px] overflow-hidden p-2">
                <div className="relative w-full h-full rounded-[35px] overflow-hidden">
                  {appScreenshots.map((screen, index) => (
                    <div 
                      key={index}
                      className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
                        index === activeScreen ? 'opacity-100 z-10' : 'opacity-0 z-0'
                      }`}
                    >
                      <Image
                        src={screen.image}
                        alt={`UI mobile aplikasi - ${screen.title}`}
                        fill
                        className="object-cover"
                        priority={index === 0}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.classList.add('bg-gray-100', 'flex', 'items-center', 'justify-center');
                            const textDiv = document.createElement('div');
                            textDiv.className = 'p-4 text-center text-gray-500';
                            textDiv.innerHTML = `
                              <div class="flex flex-col items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <p class="text-lg font-medium">Screenshot Aplikasi</p>
                                <p class="text-sm">${screen.title}</p>
                                <p class="text-xs mt-4 max-w-[200px]">Silakan ganti file ${screen.image} dengan UI aplikasi Anda</p>
                              </div>
                            `;
                            parent.appendChild(textDiv);
                          }
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Screen reflection overlay */}
              <div className="absolute inset-0 rounded-[40px] overflow-hidden bg-gradient-to-br from-white/5 to-transparent pointer-events-none z-10"></div>
            </div>
          </div>
          
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            {/* App Screenshot Info */}
            <div className={`mb-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.3s'}}>
              {appScreenshots.map((screen, index) => (
                <div 
                  key={index} 
                  className={`transition-all duration-700 ${
                    index === activeScreen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 absolute'
                  }`}
                >
                  <h3 className="text-2xl font-bold text-primary-blue mb-2">{screen.title}</h3>
                  <p className="text-gray-600 mb-4">{screen.description}</p>
                </div>
              ))}

              {/* Navigation dots */}
              <div className="flex space-x-2 mt-4">
                {appScreenshots.map((_, index) => (
                  <button 
                    key={index} 
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === activeScreen ? 'bg-primary-blue scale-125' : 'bg-gray-300'
                    }`}
                    onClick={() => setActiveScreen(index)}
                    aria-label={`Lihat screenshot ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Features List */}
            <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
              <h3 className="text-2xl font-bold text-primary-blue mb-6">Fitur Unggulan</h3>
              <ul className="space-y-4">
                {/* BAGIAN YANG DAPAT DIUBAH: Daftar fitur unggulan aplikasi */}
                {/* Anda dapat mengubah judul dan deskripsi fitur sesuai kebutuhan */}
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary-blue rounded-full flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">Deteksi Real-time</h4>
                    <p className="text-gray-600">Pemindaian instan untuk mendeteksi ancaman dalam hitungan detik</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary-blue rounded-full flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">Analisis Mendalam</h4>
                    <p className="text-gray-600">Evaluasi konten dengan teknologi AI untuk identifikasi penipuan</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary-blue rounded-full flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">Saran Tindakan</h4>
                    <p className="text-gray-600">Rekomendasi langkah-langkah keamanan berdasarkan hasil pemindaian</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary-blue rounded-full flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">Pembaruan Database</h4>
                    <p className="text-gray-600">Database ancaman yang terus diperbarui untuk perlindungan maksimal</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* CTA Button */}
            <div className={`mt-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.5s'}}>
              <a 
                href="#download" 
                className="inline-block bg-gradient-to-r from-primary-blue to-secondary-blue text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              >
                Download Aplikasi
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 