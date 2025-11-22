
import React from 'react';
import { MapPin, Navigation, Radio, Crosshair, ShieldCheck } from 'lucide-react';

export const ServiceArea: React.FC = () => {
  const zones = [
    { city: "Sherman Oaks", status: "Tech Nearby", time: "2m" },
    { city: "Studio City", status: "Active", time: "8m" },
    { city: "Encino", status: "High Demand", time: "12m" },
    { city: "Tarzana", status: "Active", time: "15m" },
    { city: "Woodland Hills", status: "Active", time: "18m" },
    { city: "North Hollywood", status: "Tech Nearby", time: "4m" },
    { city: "Burbank", status: "Active", time: "22m" },
    { city: "Glendale", status: "Active", time: "25m" },
    { city: "Van Nuys", status: "Tech Nearby", time: "6m" },
    { city: "Beverly Hills", status: "High Demand", time: "14m" },
    { city: "Santa Monica", status: "Active", time: "28m" },
    { city: "West Hollywood", status: "Active", time: "19m" },
  ];

  return (
    <section className="py-24 bg-[#111110] relative z-20 overflow-hidden border-t border-white/5">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
            <div>
                <div className="inline-flex items-center gap-2 text-[#FDC506] font-mono text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1 bg-[#FDC506]/10 rounded border border-[#FDC506]/20">
                    <Radio size={14} className="animate-pulse" />
                    <span>Operational Map</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-[900] text-white tracking-tight leading-none">
                    SERVICE <span className="text-[#E30613]">COMMAND</span>
                </h2>
            </div>
            <div className="flex items-center gap-6 text-gray-500 font-mono text-xs">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#00B67A] rounded-full animate-pulse"></div>
                    SYSTEM ONLINE
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#E30613] rounded-full"></div>
                    HIGH TRAFFIC
                </div>
            </div>
        </div>

        {/* DASHBOARD CONTAINER */}
        <div className="bg-[#1A1A1A] rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 relative">
            
            {/* LEFT PANEL: ZONES LIST */}
            <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-white/10 bg-[#161615] flex flex-col h-[500px] lg:h-[600px]">
                <div className="p-6 border-b border-white/10 flex justify-between items-center bg-[#1A1A1A]">
                    <span className="text-white font-bold text-sm uppercase tracking-wider">Active Zones</span>
                    <span className="text-[#FDC506] font-mono text-xs">LA / VALLEY REGION</span>
                </div>
                
                <div className="overflow-y-auto flex-grow scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
                    {zones.map((zone, i) => (
                        <div key={i} className="flex items-center justify-between p-4 border-b border-white/5 hover:bg-white/5 transition-colors cursor-default group">
                            <div className="flex items-center gap-3">
                                <div className={`w-1.5 h-1.5 rounded-full ${zone.status === 'High Demand' ? 'bg-[#E30613] animate-ping' : 'bg-[#00B67A]'}`}></div>
                                <div>
                                    <div className="text-gray-200 font-bold text-sm group-hover:text-white">{zone.city}</div>
                                    <div className="text-[10px] text-gray-500 font-mono uppercase">{zone.status}</div>
                                </div>
                            </div>
                            <div className="px-2 py-1 bg-black/30 rounded text-[10px] font-mono text-gray-400 border border-white/5">
                                ETA {zone.time}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="p-6 border-t border-white/10 bg-[#1A1A1A]">
                    <div className="flex items-center gap-3 mb-3">
                        <ShieldCheck size={16} className="text-[#00B67A]" />
                        <span className="text-xs font-bold text-gray-400 uppercase">Coverage Guarantee</span>
                    </div>
                    <p className="text-[11px] text-gray-500 leading-relaxed">
                        We cover 95% of Los Angeles County. If you don't see your city, call dispatch to confirm availability.
                    </p>
                </div>
            </div>

            {/* RIGHT PANEL: TACTICAL MAP */}
            <div className="lg:col-span-8 relative h-[500px] lg:h-[600px] bg-[#0a0a0a] overflow-hidden group">
                
                {/* Map Embed (Grayscale via filter) */}
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211549.38277703425!2d-118.53237235806538!3d34.10204300956739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1709324823742!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(120%)' }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="opacity-60 hover:opacity-80 transition-opacity duration-700"
                ></iframe>

                {/* Overlay: Grid - Solid Lines */}
                <div className="absolute inset-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                
                {/* Radar Sweep Animation - Solid Border */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#E30613]/20 rounded-full"></div>
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#E30613]/10 rounded-full"></div>
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-r border-[#E30613] rounded-full animate-spin-slow opacity-30"></div>
                </div>

                {/* Floating Tech Markers */}
                <div className="absolute top-1/3 left-1/4 pointer-events-none animate-float-delayed">
                    <div className="relative">
                        <div className="w-8 h-8 bg-[#1D1D1B] rounded-full border-2 border-white flex items-center justify-center shadow-xl text-white z-10 relative">
                            <Navigation size={14} className="rotate-45" />
                        </div>
                        <div className="absolute inset-0 bg-[#E30613] rounded-full animate-ping opacity-50"></div>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-black/80 text-white text-[9px] px-2 py-1 rounded font-bold whitespace-nowrap backdrop-blur-sm border border-white/10">
                            UNIT 04 - EN ROUTE
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-1/3 right-1/3 pointer-events-none animate-float">
                    <div className="relative">
                        <div className="w-8 h-8 bg-[#1D1D1B] rounded-full border-2 border-white flex items-center justify-center shadow-xl text-white z-10 relative">
                            <Navigation size={14} className="rotate-12" />
                        </div>
                        <div className="absolute inset-0 bg-[#00B67A] rounded-full animate-ping opacity-50"></div>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-black/80 text-white text-[9px] px-2 py-1 rounded font-bold whitespace-nowrap backdrop-blur-sm border border-white/10">
                            UNIT 12 - ON SITE
                        </div>
                    </div>
                </div>

                {/* Map Controls Decoration */}
                <div className="absolute top-6 right-6 flex flex-col gap-2">
                    <div className="w-8 h-8 bg-[#1A1A1A] border border-white/20 rounded flex items-center justify-center text-white shadow-lg">
                        <Crosshair size={16} />
                    </div>
                    <div className="w-8 h-8 bg-[#1A1A1A] border border-white/20 rounded flex items-center justify-center text-white font-bold text-xs shadow-lg">
                        +
                    </div>
                    <div className="w-8 h-8 bg-[#1A1A1A] border border-white/20 rounded flex items-center justify-center text-white font-bold text-xs shadow-lg">
                        -
                    </div>
                </div>

                <div className="absolute bottom-6 left-6 bg-[#1A1A1A]/90 backdrop-blur border border-white/10 p-3 rounded-lg">
                    <div className="flex items-center gap-4 text-[10px] text-gray-400 font-mono uppercase">
                        <div>Lat: 34.0522</div>
                        <div>Long: -118.2437</div>
                        <div className="text-[#00B67A]">Signal: Strong</div>
                    </div>
                </div>

            </div>

        </div>

        <style>{`
            @keyframes spin-slow {
                from { transform: translate(-50%, -50%) rotate(0deg); }
                to { transform: translate(-50%, -50%) rotate(360deg); }
            }
            .animate-spin-slow {
                animation: spin-slow 10s linear infinite;
            }
            @keyframes float-delayed {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
            }
            .animate-float-delayed {
                animation: float 3s ease-in-out infinite;
                animation-delay: 1.5s;
            }
        `}</style>
      </div>
    </section>
  );
};
