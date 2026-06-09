import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

interface NavigationProps {
  onBookCallClick: () => void;
}

export default function Navigation({ onBookCallClick }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        id="main-nav"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-md border-b border-[#f0f0f0] shadow-sm py-4'
            : 'bg-white/40 backdrop-blur-sm border-b border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Section */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none" id="nav-logo">
            <div className="relative bg-[#1A1D20] px-4.5 py-2 rounded-xl flex items-center justify-center shadow-md group-hover:bg-[#25292E] transition-all duration-300 shrink-0 h-10">
              <img 
                src="https://luota.ch/wp-content/uploads/2020/06/LUOTA_Logo_RGB_weiss.svg" 
                alt="Luota Logo" 
                className="h-5.5 w-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </a>

          {/* Desktop & Mobile Actions Side / CTA Button */}
          <div className="flex items-center gap-4 animate-fade-in" id="nav-actions">
            <button
              id="cta-nav-button"
              onClick={onBookCallClick}
              className="bg-[#0887EB] text-white hover:bg-[#3A9FEF] px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 shadow-md shadow-[#0887EB]/10 hover:shadow-lg hover:shadow-[#0887EB]/20 flex items-center gap-2 cursor-pointer"
            >
              <span>Beratung buchen</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </nav>

    </>
  );
}
