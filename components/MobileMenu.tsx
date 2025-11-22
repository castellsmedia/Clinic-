
import React from 'react';
import { X, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const links = [
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Reviews", href: "#reviews" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className={`fixed inset-0 z-[100] bg-[#1D1D1B] text-white transition-all duration-500 cubic-bezier(0.76, 0, 0.24, 1) ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
    }`}>
        
        {/* Close Button */}
        <button 
            onClick={onClose}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
        >
            <X size={24} />
        </button>

        <div className="h-full flex flex-col p-8 pt-24">
            
            <div className="text-[10px] font-mono text-[#FDC506] uppercase tracking-widest mb-8 border-b border-white/10 pb-4">
                Menu Navigation
            </div>

            <nav className="flex-grow">
                <ul className="space-y-2">
                    {links.map((link, idx) => (
                        <li key={idx} className={`transform transition-all duration-700 delay-${idx * 100} ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <a 
                                href={link.href} 
                                onClick={onClose}
                                className="flex items-center justify-between group text-4xl font-[900] uppercase tracking-tight hover:text-[#E30613] transition-colors py-2"
                            >
                                <span>{link.name}</span>
                                <ArrowRight size={24} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className={`space-y-6 mt-8 border-t border-white/10 pt-8 transition-all duration-1000 delay-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <a href="tel:8187310445" className="flex items-center gap-4 text-lg font-bold">
                    <div className="w-10 h-10 rounded-full bg-[#E30613] flex items-center justify-center">
                        <Phone size={18} />
                    </div>
                    (818) 731-0445
                </a>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <MapPin size={18} />
                    </div>
                    Los Angeles, CA
                </div>
            </div>
        </div>
    </div>
  );
};
