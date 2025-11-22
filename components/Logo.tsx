import React, { useState } from 'react';
import { Wrench } from 'lucide-react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  // We default to error true to show the CSS fallback immediately since the user hasn't uploaded logo.png yet.
  // In a real scenario, you would place logo.png in the public folder.
  const [imgError, setImgError] = useState(true); 

  if (!imgError) {
      return (
          <img 
            src="/logo.png" 
            alt="Cool Doc Logo" 
            className={`h-16 w-auto object-contain ${className}`} 
            onError={() => setImgError(true)}
          />
      );
  }

  // CSS/SVG Fallback that looks like the uploaded image
  return (
    <div className={`flex items-center gap-1 select-none ${className}`}>
       {/* Mascot Composite */}
       <div className="relative w-20 h-20 shrink-0 flex items-center justify-center">
           
           {/* Robot Body/Coat */}
           <div className="absolute bottom-1 w-12 h-10 bg-white border-[2.5px] border-[#1D1D1B] rounded-t-2xl z-10 overflow-hidden shadow-sm">
               {/* Blue Shirt Center */}
               <div className="absolute inset-x-0 top-0 h-full w-full flex justify-center">
                   <div className="w-4 h-full bg-[#1866B9] border-x-[2.5px] border-[#1D1D1B]"></div>
               </div>
               {/* Coat Lapels (Triangles) */}
               <div className="absolute top-0 left-0 w-full h-full">
                   <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-white mx-auto drop-shadow-sm"></div>
               </div>
           </div>

           {/* Robot Head */}
           <div className="absolute top-2 z-20 bg-[#EAEAEA] border-[2.5px] border-[#1D1D1B] rounded-[1rem] w-12 h-10 flex flex-col items-center shadow-sm">
                {/* Eyes */}
                <div className="w-full flex justify-center gap-1.5 mt-2">
                    <div className="w-3 h-3 bg-[#1D1D1B] rounded-full ring-1 ring-white/20"></div>
                    <div className="w-3 h-3 bg-[#1D1D1B] rounded-full ring-1 ring-white/20"></div>
                </div>
                {/* Smile */}
                <div className="w-6 h-3 border-b-[3px] border-[#1D1D1B] rounded-b-full mt-[-2px]"></div>
                
                {/* Nurse Hat */}
                <div className="absolute -top-3.5 bg-[#EAEAEA] border-[2.5px] border-[#1D1D1B] rounded-t-lg w-7 h-4 flex items-center justify-center shadow-sm">
                    <div className="bg-[#E30613] rounded-full w-3.5 h-3.5 flex items-center justify-center border border-[#1D1D1B]">
                        <div className="text-[8px] font-black text-white leading-none mt-[1px]">+</div>
                    </div>
                </div>
                {/* Antennas */}
                <div className="absolute -top-2 -left-1 w-1 h-3 bg-[#1D1D1B] -rotate-12 -z-10">
                     <div className="absolute -top-1 -left-0.5 w-2 h-2 bg-[#E30613] rounded-full border border-[#1D1D1B]"></div>
                </div>
                <div className="absolute -top-2 -right-1 w-1 h-3 bg-[#1D1D1B] rotate-12 -z-10">
                     <div className="absolute -top-1 -left-0.5 w-2 h-2 bg-[#E30613] rounded-full border border-[#1D1D1B]"></div>
                </div>
           </div>

           {/* Wrench (Left Hand) */}
           <div className="absolute left-0 top-7 -rotate-[20deg] z-30 drop-shadow-md">
                <Wrench size={28} className="fill-gray-200 text-[#1D1D1B]" strokeWidth={2.5} />
                {/* Red Glove */}
                <div className="absolute top-4 left-1 w-4 h-4 bg-[#E30613] rounded-full border-[2.5px] border-[#1D1D1B] -z-10"></div>
           </div>

           {/* Medical Kit (Right Hand) */}
           <div className="absolute right-0 top-10 rotate-[10deg] z-30">
               <div className="w-10 h-7 bg-gray-200 border-[2.5px] border-[#1D1D1B] rounded-md flex items-center justify-center shadow-md relative z-10">
                   <div className="text-[#E30613] font-black text-sm drop-shadow-sm">+</div>
               </div>
               {/* Handle */}
               <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-3 border-[2.5px] border-[#1D1D1B] rounded-t-md border-b-0 z-0"></div>
               {/* Red Glove */}
               <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#E30613] rounded-full border-[2.5px] border-[#1D1D1B] z-20"></div>
           </div>
       </div>

       {/* Typography Stack */}
       <div className="flex flex-col items-center -space-y-1 relative z-10">
           <h1 
             className="font-[900] text-[2rem] leading-none italic tracking-tighter text-[#E30613]"
             style={{ 
                 WebkitTextStroke: '1.5px #1D1D1B', 
                 textShadow: '3px 2px 0px white',
                 fontFamily: 'Impact, sans-serif'
             }}
           >
             COOL DOC
           </h1>
           <div className="bg-[#FDC506] px-4 py-1 rounded-full border-[2.5px] border-[#1D1D1B] shadow-[2px_2px_0px_black] -mt-1 relative z-20 transform -rotate-1">
               <span className="block text-[10px] font-[900] text-[#1D1D1B] uppercase tracking-widest leading-none">
                   Appliance Repair
               </span>
           </div>
       </div>
    </div>
  );
};