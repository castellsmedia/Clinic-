
import React from 'react';
import { PhoneIncoming, User, Headset } from 'lucide-react';

export const DispatcherStatus: React.FC = () => {
  return (
    <div className="inline-flex flex-wrap items-center gap-4 bg-white/95 backdrop-blur-xl border border-white/80 px-5 py-3 rounded-2xl shadow-lg shadow-black/5 mb-8 animate-fade-in-up delay-200 w-fit ring-1 ring-white/50">
      
      {/* Agents Visual */}
      <div className="flex -space-x-3">
         {/* Busy Agent 1 */}
         <div className="relative w-10 h-10 rounded-full border-[3px] border-white bg-gray-200 flex items-center justify-center text-gray-400">
            <User size={18} />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></div>
         </div>
         {/* Busy Agent 2 */}
         <div className="relative w-10 h-10 rounded-full border-[3px] border-white bg-gray-200 flex items-center justify-center text-gray-400">
            <User size={18} />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></div>
         </div>
         {/* Active Agent */}
         <div className="relative w-10 h-10 rounded-full border-[3px] border-white bg-[#1D1D1B] flex items-center justify-center text-white ring-4 ring-[#00B67A]/10 z-10">
            <Headset size={18} />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#00B67A] border-2 border-white rounded-full animate-pulse"></div>
         </div>
      </div>
      
      {/* Text Info */}
      <div className="flex flex-col leading-none">
         <div className="flex items-center gap-1.5 mb-1">
             <span className="relative flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00B67A]"></span>
             </span>
             <span className="text-[10px] font-black text-[#00B67A] uppercase tracking-widest">Live Dispatch</span>
         </div>
         <span className="text-sm font-bold text-[#1D1D1B]">
             <span className="text-[#E30613]">1 of 3</span> Dispatchers Available
         </span>
      </div>
      
      {/* Vertical Divider & Icon */}
      <div className="hidden sm:flex items-center gap-2 pl-4 border-l border-gray-300/50 text-[#E30613]">
          <div className="p-1.5 bg-[#E30613]/10 rounded-full animate-pulse">
            <PhoneIncoming size={14} />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wide leading-tight">Call<br/>Volume</span>
      </div>

    </div>
  );
};
