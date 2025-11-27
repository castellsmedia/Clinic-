import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <div className={`flex items-center gap-1 select-none ${className}`}>
            <img
                src="/public/logo.svg"
                alt="Cool Doc Logo"
                className="h-24 w-auto object-contain"
            />

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