
import React, { useState, useEffect } from 'react';
import { X, Tag, ArrowRight, Timer } from 'lucide-react';

export const ExitModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // If mouse moves to top of viewport (user closing tab/typing url) and hasn't triggered yet
      if (e.clientY < 10 && !hasTriggered) {
        setIsOpen(true);
        setHasTriggered(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasTriggered]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={() => setIsOpen(false)}></div>

      {/* Modal */}
      <div className="relative bg-white w-full max-w-lg rounded-[2rem] shadow-2xl overflow-hidden animate-bounce-in">
        
        {/* Close Button */}
        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors z-10">
            <X size={20} className="text-gray-500" />
        </button>

        <div className="flex flex-col md:flex-row">
            {/* Left Side (Visual) */}
            <div className="bg-[#E30613] p-8 text-white flex flex-col justify-center items-center text-center md:w-2/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <div className="relative z-10">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-md border border-white/30">
                        <Tag size={32} className="text-white" />
                    </div>
                    <div className="text-5xl font-[900] mb-1 tracking-tighter">$55</div>
                    <div className="text-xl font-bold uppercase tracking-widest opacity-90">OFF</div>
                    <div className="mt-4 text-xs font-medium opacity-80 border border-white/30 px-3 py-1 rounded-full">
                        First Repair Only
                    </div>
                </div>
            </div>

            {/* Right Side (Content) */}
            <div className="p-8 md:w-3/5 bg-white">
                <div className="flex items-center gap-2 text-[#E30613] font-bold text-xs uppercase tracking-widest mb-3">
                    <Timer size={14} className="animate-pulse" />
                    <span>Wait! Don't leave yet</span>
                </div>
                <h2 className="text-3xl font-[900] text-[#1D1D1B] mb-2 leading-none">CLAIM YOUR DISCOUNT</h2>
                <p className="text-gray-500 text-sm mb-6">
                    Book your service online right now and we'll knock $55 off your first repair. 
                </p>
                
                <div className="bg-gray-100 rounded-xl p-3 flex items-center justify-between mb-6 border border-gray-200 border-dashed">
                    <code className="text-lg font-bold text-[#1D1D1B]">SAVE55</code>
                    <span className="text-xs text-gray-400 uppercase font-bold">Code Applied</span>
                </div>

                <a href="tel:8187310445" className="w-full bg-[#1D1D1B] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#E30613] transition-colors shadow-xl">
                    Book Now & Save <ArrowRight size={18} />
                </a>
                
                <button onClick={() => setIsOpen(false)} className="w-full text-center text-gray-400 text-xs font-bold mt-4 hover:text-gray-600">
                    No thanks, I hate saving money
                </button>
            </div>
        </div>
      </div>
      <style>{`
        @keyframes bounce-in {
            0% { transform: scale(0.9); opacity: 0; }
            50% { transform: scale(1.05); opacity: 1; }
            100% { transform: scale(1); opacity: 1; }
        }
        .animate-bounce-in {
            animation: bounce-in 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
      `}</style>
    </div>
  );
};
