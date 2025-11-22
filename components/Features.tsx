
import React from 'react';
import { ShieldCheck, Clock, BadgeDollarSign, UserCheck } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <Clock size={20} />,
      title: "Same Day",
      desc: "24hr Turnaround"
    },
    {
      icon: <BadgeDollarSign size={20} />,
      title: "Flat Rate",
      desc: "Upfront Pricing"
    },
    {
      icon: <UserCheck size={20} />,
      title: "Licensed",
      desc: "Bonded Experts"
    },
    {
      icon: <ShieldCheck size={20} />,
      title: "90-Day",
      desc: "Warranty"
    }
  ];

  return (
    <div className="relative z-30 -mt-8 md:-mt-12 px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-white/70 backdrop-blur-2xl border border-white/50 p-3 md:p-4 rounded-[2rem] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)]">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200/50">
            {features.map((feature, idx) => (
                <div key={idx} className="flex items-center justify-center gap-3 p-2 md:p-4 hover:bg-white/50 rounded-xl transition-colors group cursor-default">
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#E30613] group-hover:scale-110 group-hover:bg-[#E30613] group-hover:text-white transition-all duration-300 shadow-sm">
                        {feature.icon}
                    </div>
                    <div className="text-left">
                        <h3 className="text-xs font-[900] uppercase tracking-wide text-[#1D1D1B]">{feature.title}</h3>
                        <p className="text-[10px] font-semibold text-gray-400">{feature.desc}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
      </div>
    </div>
  );
};
