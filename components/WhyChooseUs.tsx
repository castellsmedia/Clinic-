
import React from 'react';
import { ShieldCheck, Zap, UserCheck, Search } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: <UserCheck size={24} />,
      title: "Expert Technicians",
      desc: "Our team is factory-trained, background-checked, and licensed to work on all major brands."
    },
    {
      icon: <Zap size={24} />,
      title: "Same-Day Service",
      desc: "We carry common parts in our trucks to fix your appliance on the very first visit."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "90-Day Warranty",
      desc: "We stand by our work with a solid guarantee on all parts and labor."
    },
    {
      icon: <Search size={24} />,
      title: "Transparent Pricing",
      desc: "Flat-rate pricing provided upfront. No hidden fees, no hourly billing surprises."
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100 relative z-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E30613]/5 border border-[#E30613]/20 text-[#E30613] font-bold text-[10px] tracking-widest uppercase mb-6">
                <ShieldCheck size={12} />
                The Clinic Difference
             </div>
             <h2 className="text-4xl md:text-5xl font-[900] text-[#1D1D1B] mb-6 tracking-tight leading-none">
                WHY CHOOSE <br/> <span className="text-[#E30613]">COOL DOC?</span>
             </h2>
             <p className="text-gray-500 text-lg font-medium leading-relaxed mb-8 max-w-lg">
                We treat your appliances with the same care a doctor treats a patient. Precision diagnostics, surgical repairs, and a commitment to your home's health.
             </p>
             <a href="#quote" className="inline-flex items-center justify-center px-8 py-4 bg-[#1D1D1B] text-white rounded-xl font-bold shadow-lg hover:bg-[#E30613] transition-all hover:-translate-y-1">
                Book Your Expert
             </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
             {reasons.map((reason, idx) => (
                <div key={idx} className="p-6 rounded-[2rem] border border-gray-100 bg-[#F8FAFC] hover:border-gray-200 hover:shadow-lg transition-all duration-300 group">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#1D1D1B] border border-gray-100 shadow-sm mb-4 group-hover:scale-110 transition-transform">
                        {reason.icon}
                    </div>
                    <h3 className="text-lg font-[800] text-[#1D1D1B] mb-2">{reason.title}</h3>
                    <p className="text-sm text-gray-500 font-medium leading-relaxed">
                        {reason.desc}
                    </p>
                </div>
             ))}
          </div>
        </div>

      </div>
    </section>
  );
};
