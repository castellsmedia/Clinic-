
import React, { useEffect, useState } from 'react';

export const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Non-linear progress
        const increment = Math.random() * 15;
        return Math.min(prev + increment, 100);
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setIsExiting(true);
        setTimeout(onComplete, 800); // Wait for exit animation
      }, 500);
    }
  }, [progress, onComplete]);

  if (progress === 100 && isExiting) {
     // Returns component with exit class, or null after completion in parent
  }

  return (
    <div className={`fixed inset-0 z-[9999] bg-[#1D1D1B] flex items-center justify-center transition-transform duration-1000 cubic-bezier(0.87, 0, 0.13, 1) ${isExiting ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="w-full max-w-md px-8">
            <div className="flex justify-between text-xs font-mono text-[#FDC506] mb-2 uppercase tracking-widest">
                <span>System Check</span>
                <span>{Math.floor(progress)}%</span>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-[#E30613] transition-all duration-200 ease-out relative"
                    style={{ width: `${progress}%` }}
                >
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white/50 to-transparent"></div>
                </div>
            </div>

            <div className="mt-4 text-center">
                 <div className="inline-flex flex-col items-center animate-pulse">
                     <div className="text-[10px] font-mono text-gray-500 uppercase mb-1">Initializing Diagnostic Core</div>
                     <h1 className="text-2xl font-[900] italic tracking-tighter text-white font-sans">COOL DOC</h1>
                 </div>
            </div>
        </div>
    </div>
  );
};
