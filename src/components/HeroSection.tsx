"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const parallaxElements = heroRef.current.querySelectorAll('.parallax');
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      parallaxElements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        const speedX = htmlEl.dataset.speedX || "0.05";
        const speedY = htmlEl.dataset.speedY || "0.05";
        const moveX = (mouseX - 0.5) * Number(speedX) * 100;
        const moveY = (mouseY - 0.5) * Number(speedY) * 100;
        
        htmlEl.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section ref={heroRef} className="bg-gradient-to-br from-light-blue via-white to-light-blue py-20 md:py-32 relative overflow-hidden">
      {/* Decorative floating elements */}
      <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-blue-200 rounded-full opacity-20 animate-float" style={{animationDelay: "0s"}}></div>
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-blue-300 rounded-full opacity-20 animate-float" style={{animationDelay: "0.5s"}}></div>
      <div className="absolute top-2/3 left-1/3 w-16 h-16 bg-blue-400 rounded-full opacity-20 animate-float" style={{animationDelay: "1s"}}></div>
      
      {/* Floating dots grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary-blue rounded-full opacity-40 animate-pulse" style={{animationDelay: "0.1s"}}></div>
        <div className="absolute top-40 left-40 w-2 h-2 bg-primary-blue rounded-full opacity-40 animate-pulse" style={{animationDelay: "0.2s"}}></div>
        <div className="absolute top-60 left-60 w-2 h-2 bg-primary-blue rounded-full opacity-40 animate-pulse" style={{animationDelay: "0.3s"}}></div>
        <div className="absolute top-20 right-20 w-2 h-2 bg-primary-blue rounded-full opacity-40 animate-pulse" style={{animationDelay: "0.4s"}}></div>
        <div className="absolute top-40 right-40 w-2 h-2 bg-primary-blue rounded-full opacity-40 animate-pulse" style={{animationDelay: "0.5s"}}></div>
        <div className="absolute top-60 right-60 w-2 h-2 bg-primary-blue rounded-full opacity-40 animate-pulse" style={{animationDelay: "0.6s"}}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className={`w-full md:w-1/2 mb-10 md:mb-0 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Solusi <span className="gradient-text">Keamanan Cerdas</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 mb-8 animate-slide-in" style={{animationDelay: '0.4s'}}>
              Kenali produk kami: <span className="font-semibold text-secondary-blue glow-on-hover">CyberLens</span>
            </h2>
            <p className="text-gray-600 mb-8 text-lg animate-slide-in" style={{animationDelay: '0.6s'}}>
              Aplikasi mobile AI yang dapat memindai layar perangkat lain untuk mendeteksi potensi penipuan, 
              melakukan OCR, analisis risiko, dan memberikan saran keamanan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-in" style={{animationDelay: '0.8s'}}>
              <Link href="#download" className="btn-primary text-center glow-on-hover">
                Download CyberLens Sekarang
              </Link>
              <Link href="#features" className="btn-secondary text-center hover-lift">
                Pelajari Lebih Lanjut
              </Link>
            </div>
          </div>
          <div className={`w-full md:w-1/2 flex justify-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.5s'}}>
            <div className="relative w-full max-w-md h-[400px] perspective">
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-blue-400 rounded-full opacity-20 parallax" data-speed-x="0.03" data-speed-y="0.04"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-blue-600 rounded-full opacity-20 parallax" data-speed-x="0.05" data-speed-y="0.02"></div>
              
              <div className="absolute inset-0 bg-primary-blue rounded-3xl transform rotate-3 opacity-20 animate-scale"></div>
              <div className="absolute inset-0 bg-white rounded-3xl shadow-xl flex items-center justify-center p-8 hover-lift rotate-y card-hover">
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 rounded-full bg-primary-blue flex items-center justify-center shadow-lg overflow-hidden">
                      <Image 
                        src="/logo.png" 
                        alt="Security Guard Logo" 
                        width={80} 
                        height={80}
                        className="object-contain rounded-full"
                        onError={(e) => {
                          // Tampilkan icon default jika logo belum ada
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                            svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                            svg.setAttribute("className", "h-14 w-14 text-white");
                            svg.setAttribute("fill", "none");
                            svg.setAttribute("viewBox", "0 0 24 24");
                            svg.setAttribute("stroke", "currentColor");
                            
                            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
                            path.setAttribute("strokeLinecap", "round");
                            path.setAttribute("strokeLinejoin", "round");
                            path.setAttribute("strokeWidth", "2");
                            path.setAttribute("d", "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z");
                            
                            svg.appendChild(path);
                            parent.appendChild(svg);
                          }
                        }}
                      />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-primary-blue mb-2 animate-fade-in" style={{animationDelay: '0.7s'}}>Security Guard</h3>
                  <p className="text-gray-600 mb-6 animate-fade-in" style={{animationDelay: '0.8s'}}>Lindungi diri Anda dari ancaman digital</p>
                  <div className="bg-light-blue text-primary-blue font-semibold py-2 px-4 rounded-lg inline-block animate-fade-in hover-zoom" style={{animationDelay: '0.9s'}}>
                    CyberLens AI
                  </div>
                </div>
              </div>
              
              {/* Floating shield badge */}
              <div className="absolute -right-10 top-1/2 transform -translate-y-1/2 animate-float" style={{animationDelay: '1.2s'}}>
                <div className="bg-white rounded-full p-3 shadow-lg">
                  <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Floating security badge */}
              <div className="absolute -left-8 bottom-20 animate-float" style={{animationDelay: '0.8s'}}>
                <div className="bg-white rounded-full p-2 shadow-lg">
                  <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Abstract wave shape with animation */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden z-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 text-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor" className="animate-float" style={{animationDelay: '0s', animationDuration: '8s'}}></path>
        </svg>
      </div>
      
      {/* Radial gradient background */}
      <div className="blur-bg"></div>
    </section>
  );
} 