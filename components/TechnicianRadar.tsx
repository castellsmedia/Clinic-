
import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

export const TechnicianRadar: React.FC = () => {
  return (
    <div className="inline-flex flex-wrap items-center gap-4 bg-white/95 backdrop-blur-xl border border-white/80 px-4 py-2 rounded-2xl shadow-lg shadow-black/5 mb-8 animate-fade-in-up delay-300 w-fit ml-4 ring-1 ring-white/50">
      
      {/* Radar Visual */}
      <div className="relative w-12 h-12 flex items-center justify-center">
          {/* Pulse Rings */}
          <div className="absolute inset-0 rounded-full border border-[#1866B9]/30 animate-ping"></div>
          <div className="absolute inset-2 rounded-full border border-[#1866B9]/50"></div>
          
          {/* Radar Sweep */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#1866B9]/20 to-transparent animate-spin-slow" style={{ clipPath: 'polygon(50% 50%, 100% 0, 100% 50%)' }}></div>
          
          {/* Tech Dot */}
          <div className="absolute top-2 right-2 w-2 h-2 bg-[#1866B9] rounded-full shadow-[0_0_10px_#1866B9]"></div>
          
          {/* Center Icon */}
          <div className="relative z-10 bg-white rounded-full p-1 shadow-sm">
              <Navigation size={14} className="text-[#1866B9] fill-[#1866B9] rotate-45" />
          </div>
      </div>

      {/* Text Info */}
      <div className="flex flex-col leading-none">
         <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Technician Detected</div>
         <div className="flex items-center gap-2">
             <div className="w-6 h-6 bg-gray-200 rounded-full overflow-hidden border border-white">
                 <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="Tech" className="w-full h-full object-cover" />
             </div>
             <span className="text-sm font-black text-[#1D1D1B]">
                 Alex L. <span className="font-medium text-gray-500 text-xs ml-1">is 2.4 mi away</span>
             </span>
         </div>
      </div>

      <style>{`
        @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
            animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
};
