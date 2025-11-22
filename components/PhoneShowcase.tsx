
import React from 'react';
import { Bot, Check, Phone, MapPin, ShieldCheck } from 'lucide-react';

export const PhoneShowcase: React.FC = () => {
  return (
    <div className="relative z-30 animate-float">
      
      {/* Glass Card Wrapper */}
      <div className="relative bg-white/10 backdrop-blur-xl p-4 rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] border border-white/20">
        
        {/* Scanner Beam Animation - Solid White */}
        <div className="absolute inset-0 rounded-[3rem] overflow-hidden pointer-events-none z-50">
             <div className="absolute top-[-50%] left-[-50%] right-[-50%] h-[4px] bg-white/50 rotate-12 animate-scan"></div>
        </div>

        {/* Phone Frame */}
        <div className="relative w-[280px] h-[580px] bg-[#1D1D1B] rounded-[2.5rem] shadow-2xl overflow-hidden border-[6px] border-[#2a2a2a] ring-1 ring-black">
            
            {/* Dynamic Island */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-28 bg-black rounded-b-xl z-30"></div>

            {/* Screen Content */}
            <div className="w-full h-full bg-[#F4F6F8] flex flex-col relative font-sans">
                
                {/* Header */}
                <div className="bg-[#1D1D1B] pt-12 pb-6 px-6 rounded-b-[2rem] shadow-xl relative z-10">
                    <div className="flex justify-between items-center mb-6">
                        <Bot size={20} className="text-white" />
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Cool Doc App</div>
                        <div className="w-5"></div>
                    </div>
                    <h3 className="text-2xl font-black text-white leading-none mb-1">Tracking<br/>Technician</h3>
                    <div className="flex items-center gap-2 mt-3">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-[10px] font-bold text-green-400 uppercase">Live Status</span>
                    </div>
                </div>

                {/* Map Viz - Solid Colors */}
                <div className="relative h-40 w-full bg-gray-200 overflow-hidden">
                     <div className="absolute inset-0 bg-[#E5E7EB]"></div>
                     {/* Stylized Map Lines */}
                     <div className="absolute top-0 left-0 w-full h-full">
                         <svg width="100%" height="100%" className="opacity-30">
                             <path d="M0 40 Q 140 60 280 40" stroke="#1866B9" strokeWidth="2" fill="none" />
                             <path d="M50 0 L 50 160" stroke="#999" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                             <path d="M220 0 L 220 160" stroke="#999" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                         </svg>
                     </div>
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 bg-[#E30613] rounded-full shadow-lg shadow-red-500/40 animate-bounce">
                         <MapPin size={20} className="text-white fill-white" />
                     </div>
                </div>

                {/* Tech Card */}
                <div className="mx-4 -mt-10 bg-white p-5 rounded-2xl shadow-lg border border-gray-100 relative z-20">
                     <div className="flex items-center justify-between mb-4">
                         <div className="flex items-center gap-3">
                             <div className="w-10 h-10 bg-[#F0F0F0] rounded-full flex items-center justify-center text-[#1D1D1B] font-black border border-gray-200">
                                 AL
                             </div>
                             <div>
                                 <div className="text-xs text-gray-400 font-bold uppercase">Expert Tech</div>
                                 <div className="font-bold text-[#1D1D1B]">Alex L.</div>
                             </div>
                         </div>
                         <div className="w-8 h-8 bg-[#E30613] rounded-full flex items-center justify-center shadow-lg shadow-red-500/30">
                             <Phone size={14} className="text-white" />
                         </div>
                     </div>
                     <div className="bg-[#F4F6F8] p-3 rounded-xl flex justify-between items-center">
                         <span className="text-xs font-bold text-gray-500">ETA</span>
                         <span className="text-lg font-black text-[#1D1D1B]">14 Mins</span>
                     </div>
                </div>

                {/* Checklist */}
                <div className="px-6 mt-6 space-y-4">
                     <div className="flex items-center gap-4">
                         <div className="w-6 h-6 rounded-full bg-[#1866B9] flex items-center justify-center shadow-md shadow-blue-500/30">
                             <Check size={12} className="text-white" />
                         </div>
                         <span className="text-sm font-bold text-[#1D1D1B]">Diagnostic Confirmed</span>
                     </div>
                     <div className="flex items-center gap-4 opacity-40">
                         <div className="w-6 h-6 rounded-full border-2 border-gray-300"></div>
                         <span className="text-sm font-bold text-[#1D1D1B]">Repair Completed</span>
                     </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                     <button className="w-full py-3 bg-[#1D1D1B] rounded-xl text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xl">
                         <ShieldCheck size={14} />
                         90-Day Warranty Active
                     </button>
                </div>

            </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
        }
        @keyframes scan {
            0% { transform: translateY(0%) rotate(12deg); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(600px) rotate(12deg); opacity: 0; }
        }
        .animate-float {
            animation: float 6s ease-in-out infinite;
        }
        .animate-scan {
            animation: scan 3s linear infinite;
        }
      `}</style>
    </div>
  );
};
