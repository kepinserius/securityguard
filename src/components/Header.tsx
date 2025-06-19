"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 w-full ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'
    }`}>
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className={`font-bold text-2xl transition-colors duration-300 text-primary-blue`}>
              Security Guard
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="#features" className={`font-medium transition-colors duration-300 text-gray-700 hover:text-primary-blue`}>
            Fitur
          </Link>
          <Link href="#showcase" className={`font-medium transition-colors duration-300 text-gray-700 hover:text-primary-blue`}>
            Showcase
          </Link>
          <Link href="#why-us" className={`font-medium transition-colors duration-300 text-gray-700 hover:text-primary-blue`}>
            Mengapa Kami
          </Link>
          <Link href="#testimonials" className={`font-medium transition-colors duration-300 text-gray-700 hover:text-primary-blue`}>
            Testimoni
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg animate-fade-in">
          <div className="container-custom py-4 space-y-3">
            <Link href="#features" className="block text-gray-700 hover:text-primary-blue font-medium" onClick={() => setMobileMenuOpen(false)}>
              Fitur
            </Link>
            <Link href="#showcase" className="block text-gray-700 hover:text-primary-blue font-medium" onClick={() => setMobileMenuOpen(false)}>
              Showcase
            </Link>
            <Link href="#why-us" className="block text-gray-700 hover:text-primary-blue font-medium" onClick={() => setMobileMenuOpen(false)}>
              Mengapa Kami
            </Link>
            <Link href="#testimonials" className="block text-gray-700 hover:text-primary-blue font-medium" onClick={() => setMobileMenuOpen(false)}>
              Testimoni
            </Link>
            <Link href="#contact" className="block btn-primary text-center" onClick={() => setMobileMenuOpen(false)}>
              Hubungi Kami
            </Link>
          </div>
        </div>
      )}
    </header>
  );
} 