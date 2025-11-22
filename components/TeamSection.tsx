
import React from 'react';
import { BadgeCheck, Wrench, Phone, Star, ShieldCheck, Activity } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  id: string;
  specialty: string;
  exp: string;
  color: string;
}

export const TeamSection: React.FC = () => {
  const team: TeamMember[] = [
    {
      name: "Alex R.",
      role: "Founder & Chief Tech",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      id: "UNIT-01",
      specialty: "High-End Refrigeration",
      exp: "23 Years",
      color: "#E30613"
    },
    {
      name: "Sarah J.",
      role: "Head of Dispatch",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      id: "HQ-LEAD",
      specialty: "Logistics & Support",
      exp: "12 Years",
      color: "#1866B9"
    },
    {
      name: "Mike T.",
      role: "Senior Technician",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      id: "UNIT-04",
      specialty: "Gas & Electric Ranges",
      exp: "18 Years",
      color: "#FDC506"
    },
    {
      name: "David L.",
      role: "Field Specialist",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      id: "UNIT-09",
      specialty: "Laundry Systems",
      exp: "9 Years",
      color: "#1D1D1B"
    }
  ];

  return (
    <section className="py-24 bg-[#F4F6F8] relative z-20 overflow-hidden border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D1D1B]/5 border border-[#1D1D1B]/10 text-[#1D1D1B] font-bold text-[10px] tracking-widest uppercase mb-6">
                    <BadgeCheck size={12} />
                    Certified Personnel
                </div>
                <h2 className="text-4xl md:text-6xl font-[900] text-[#1D1D1B] tracking-tight leading-[0.9]">
                    MEET THE <br/>
                    <span className="text-[#1866B9]">SPECIALISTS.</span>
                </h2>
            </div>
            <div className="flex flex-col items-end">
                <p className="text-gray-500 text-right max-w-xs text-sm font-medium">
                   Factory trained. Background checked. The most trusted hands in Los Angeles.
                </p>
            </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
                <div 
                    key={idx} 
                    className="group relative bg-white rounded-[2rem] overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                >
                    {/* Image Container */}
                    <div className="relative h-[320px] overflow-hidden bg-gray-100">
                        <img 
                            src={member.image} 
                            alt={member.name} 
                            className="w-full h-full object-cover transition-all duration-700 filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105"
                        />
                        
                        {/* Overlay Gradient (Solid Fade) */}
                        <div className="absolute inset-0 bg-[#1D1D1B]/10 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500"></div>

                        {/* Scanner Line Effect */}
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-white/80 shadow-[0_0_15px_rgba(255,255,255,0.8)] translate-y-[-10px] group-hover:translate-y-[320px] transition-transform duration-[1.5s] ease-in-out opacity-0 group-hover:opacity-100"></div>

                        {/* Status Badge */}
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 rounded text-[9px] font-black text-[#1D1D1B] uppercase tracking-widest border border-white/20 shadow-sm">
                            {member.id}
                        </div>
                    </div>

                    {/* Info Card */}
                    <div className="p-6 relative">
                        {/* Floating Role Badge */}
                        <div 
                            className="absolute -top-4 left-6 px-3 py-1.5 rounded-lg text-white text-[10px] font-bold uppercase tracking-wide shadow-lg"
                            style={{ backgroundColor: member.color }}
                        >
                            {member.role}
                        </div>

                        <div className="mt-2">
                            <h3 className="text-2xl font-[900] text-[#1D1D1B] uppercase tracking-tight">{member.name}</h3>
                            
                            <div className="mt-4 space-y-3">
                                <div className="flex items-center justify-between text-xs border-b border-gray-100 pb-2">
                                    <span className="text-gray-400 font-bold uppercase">Specialty</span>
                                    <span className="text-[#1D1D1B] font-bold text-right">{member.specialty}</span>
                                </div>
                                <div className="flex items-center justify-between text-xs">
                                    <span className="text-gray-400 font-bold uppercase">Experience</span>
                                    <span className="text-[#1D1D1B] font-bold">{member.exp}</span>
                                </div>
                            </div>
                        </div>

                        {/* Hover Reveal Action */}
                        <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={10} className="fill-[#FDC506] text-[#FDC506]" />
                                ))}
                            </div>
                            <ShieldCheck size={16} className="text-[#00B67A]" />
                        </div>
                    </div>

                    {/* Decorative Corner */}
                    <div 
                        className="absolute top-0 left-0 w-full h-1 transition-transform duration-500 transform scale-x-0 group-hover:scale-x-100 origin-left"
                        style={{ backgroundColor: member.color }}
                    ></div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};
