
import React from 'react';
import { ArrowRight, Shield, Check, Star } from 'lucide-react';
import { DispatcherStatus } from './DispatcherStatus';
import { TechnicianRadar } from './TechnicianRadar';
import { RippleButton } from './ui/RippleButton';

export const HeroText: React.FC = () => {
  const handleScheduleClick = () => {
    window.location.href = 'tel:8187310445';
  };

  return (
    <div className="z-20 relative">
      
      {/* Technical Data Ticker */}
      <div className="flex items-center gap-4 mb-8 opacity-60 animate-fade-in-up">
         <div className="flex items-center gap-2 text-[10px] font-mono text-[#1D1D1B] border border-gray-300 rounded px-2 py-1">
            <div className="w-1.5 h-1.5 bg-[#E30613] rounded-full animate-pulse"></div>
            <span>SYSTEM: ONLINE</span>
         </div>
         <div className="text-[10px] font-mono text-gray-500 tracking-widest uppercase">
            Loc: Los Angeles, CA // Lat: 34.05 // Lon: -118.24
         </div>
      </div>

      {/* Main Headline - Massive Scale - SOLID COLORS */}
      <h1 className="text-6xl md:text-[5.5rem] lg:text-[7rem] leading-[0.9] font-[900] tracking-[-0.04em] text-[#1D1D1B] mb-8 animate-fade-in-up delay-100">
        THE <span className="text-[#1866B9]">CLINIC</span><br />
        FOR YOUR<br />
        <span className="relative inline-block">
            <span className="relative z-10 text-[#1D1D1B]">APPLIANCES</span>
            <div className="absolute bottom-2 left-0 w-full h-1/3 bg-[#FDC506] -z-0 opacity-60"></div>
        </span>
        <span className="text-[#E30613] text-7xl md:text-[8rem] leading-none inline-block animate-pulse-slow">.</span>
      </h1>
      
      {/* Subheadline with vertical divider layout */}
      <div className="flex flex-col md:flex-row gap-6 md:items-center mb-10 animate-fade-in-up delay-200">
          <div className="w-12 h-1 bg-[#E30613] md:w-1 md:h-16"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-lg font-medium leading-relaxed">
            We diagnose & cure Refrigerators, Ovens, Washers & Dryers. <br />
            <span className="text-[#1D1D1B] font-bold">Licensed. Expert. Same-Day.</span>
          </p>
      </div>

      {/* LIVE DISPATCHER STATUS & RADAR WIDGETS */}
      <div className="flex flex-wrap items-end gap-0 mb-4">
        <DispatcherStatus />
        <TechnicianRadar />
      </div>

      {/* CTA Buttons - High Tech Style - SOLID */}
      <div className="flex flex-col sm:flex-row gap-5 animate-fade-in-up delay-300 mb-16 mt-4">
        
        <RippleButton 
            onClick={handleScheduleClick}
            className="group bg-[#1D1D1B] text-white px-10 py-5 rounded-2xl text-lg font-bold shadow-[0_10px_30px_-10px_rgba(29,29,27,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(29,29,27,0.7)] hover:bg-[#E30613] hover:-translate-y-1 transition-all overflow-hidden"
            rippleColor="#ffffff"
        >
          <span className="flex items-center gap-3">
             Schedule Exam <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </span>
        </RippleButton>
        
        <div className="flex items-center gap-4 px-6 py-4 bg-white/40 backdrop-blur-lg rounded-2xl border border-white/60 shadow-sm hover:bg-white/60 transition-colors cursor-default">
            <div className="relative">
                <div className="absolute inset-0 bg-[#1866B9] blur-md opacity-30 rounded-full"></div>
                <div className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-100 text-[#1866B9]">
                    <Shield size={18} strokeWidth={2.5} />
                </div>
            </div>
            <div className="flex flex-col leading-none">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Warranty</span>
                <span className="text-sm font-black text-[#1D1D1B]">90 Days Included</span>
            </div>
        </div>
      </div>

      {/* Floating Stats */}
      <div className="inline-flex flex-wrap gap-2 md:gap-8 p-1 animate-fade-in-up delay-500">
          {[
            { icon: <Star size={14} className="fill-[#FDC506] text-[#FDC506]" />, text: "5.0 Rating" },
            { icon: <Check size={14} className="text-[#1866B9]" />, text: "Licensed & Bonded" },
            { icon: <div className="w-2 h-2 bg-[#E30613] rounded-full animate-pulse"></div>, text: "Techs Nearby" }
          ].map((stat, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/50 backdrop-blur px-4 py-2 rounded-full border border-white/50 text-xs font-bold text-[#1D1D1B]">
                  {stat.icon}
                  <span>{stat.text}</span>
              </div>
          ))}
      </div>
    </div>
  );
};
