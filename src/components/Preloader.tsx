"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (minimal 800ms untuk menghindari flash)
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = 'visible';
    }, 1200);

    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'visible';
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader">
      <div className="mb-8 relative w-16 h-16">
        <Image 
          src="/logo.png" 
          alt="Logo" 
          width={64} 
          height={64}
          className="object-contain animate-pulse"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
      </div>
      <h2 className="text-2xl font-bold mb-2 gradient-text">Security Guard</h2>
      <p className="text-gray-600 mb-4">Memuat...</p>
      <div className="preloader-bar">
        <div className="preloader-progress"></div>
      </div>
    </div>
  );
} 