"use client";

import { useEffect, useState } from 'react';

interface ConfettiProps {
  count?: number;
  duration?: number;
  trigger?: boolean;
}

export default function ConfettiEffect({ count = 50, duration = 4, trigger = false }: ConfettiProps) {
  const [confetti, setConfetti] = useState<JSX.Element[]>([]);
  
  useEffect(() => {
    if (!trigger) return;
    
    const newConfetti: JSX.Element[] = [];
    
    for (let i = 0; i < count; i++) {
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const size = Math.floor(Math.random() * 10) + 5;
      const duration = Math.random() * 3 + (duration - 1);
      const delay = Math.random() * 2;
      const rotation = Math.random() * 360;
      
      const style = {
        left: `${left}%`,
        top: `${top}%`,
        width: `${size}px`,
        height: `${size}px`,
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        transform: `rotate(${rotation}deg)`,
      };
      
      newConfetti.push(
        <div 
          key={i}
          className="confetti"
          style={style}
        />
      );
    }
    
    setConfetti(newConfetti);
    
    const timer = setTimeout(() => {
      setConfetti([]);
    }, (duration + 2) * 1000); // Clear after animation completes
    
    return () => clearTimeout(timer);
  }, [count, duration, trigger]);
  
  if (!trigger || confetti.length === 0) return null;
  
  return (
    <div className="confetti-container">
      {confetti}
    </div>
  );
} 