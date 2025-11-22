
import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('button, a, input, .cursor-pointer')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference hidden md:flex items-center justify-center -ml-4 -mt-4 transition-transform duration-100 ease-out"
    >
        {/* Outer Ring */}
        <div className={`absolute border border-white rounded-full transition-all duration-300 ${
            isHovering ? 'w-12 h-12 border-2 bg-white/10 scale-110' : 'w-4 h-4 border-2 scale-100'
        }`}></div>
        
        {/* Inner Dot */}
        <div className={`w-1 h-1 bg-white rounded-full transition-all duration-300 ${
            isHovering ? 'opacity-0' : 'opacity-100'
        }`}></div>

        {/* Context Text */}
        <div className={`absolute top-full mt-2 text-[8px] font-black text-white uppercase tracking-widest transition-opacity duration-300 ${
            isHovering ? 'opacity-100' : 'opacity-0'
        }`}>
            OPEN
        </div>
    </div>
  );
};
