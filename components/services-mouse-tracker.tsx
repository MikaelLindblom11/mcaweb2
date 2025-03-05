"use client"

import { useEffect } from 'react'

export function ServicesMouseTracker() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const servicesSection = document.querySelector('.your-class-name') as HTMLElement;

      if (servicesSection) {
        const rect = servicesSection.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        // Smoothly update the CSS variables
        requestAnimationFrame(() => {
          servicesSection.style.setProperty('--mouse-x', `${x}%`);
          servicesSection.style.setProperty('--mouse-y', `${y}%`);
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return null;
}