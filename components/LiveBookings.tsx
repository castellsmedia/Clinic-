import React, { useState, useEffect } from 'react';
import { CheckCircle2, MapPin } from 'lucide-react';

const bookings = [
  { name: "Michael R.", city: "Sherman Oaks", service: "Refrigerator Repair" },
  { name: "Sarah J.", city: "Studio City", service: "Washer Fix" },
  { name: "David L.", city: "Encino", service: "Oven Maintenance" },
  { name: "Jessica M.", city: "Burbank", service: "Dryer Repair" },
  { name: "Robert K.", city: "Glendale", service: "Dishwasher Service" },
  { name: "Elena P.", city: "Beverly Hills", service: "Sub-Zero Repair" },
  { name: "Tom H.", city: "North Hollywood", service: "Range Repair" }
];

export const LiveBookings: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [booking, setBooking] = useState(bookings[0]);

  useEffect(() => {
    // Initial delay
    const initialTimeout = setTimeout(() => {
      triggerNotification();
    }, 5000);

    const triggerNotification = () => {
      // Pick random booking
      const random = bookings[Math.floor(Math.random() * bookings.length)];
      setBooking(random);
      setVisible(true);

      // Hide after 5 seconds
      setTimeout(() => {
        setVisible(false);
      }, 5000);

      // Schedule next one (random between 15-30s)
      const nextDelay = Math.floor(Math.random() * 15000) + 15000;
      setTimeout(triggerNotification, nextDelay);
    };

    return () => clearTimeout(initialTimeout);
  }, []);

  return (
    <div className={`fixed bottom-24 left-4 md:bottom-6 md:left-6 z-40 transition-all duration-500 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>
      <div className="bg-white/90 backdrop-blur-md border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.12)] rounded-2xl p-4 flex items-center gap-4 max-w-[300px] md:max-w-sm">
        <div className="relative shrink-0">
            <div className="w-10 h-10 bg-[#E30613]/10 rounded-full flex items-center justify-center">
                <CheckCircle2 size={20} className="text-[#E30613]" />
            </div>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border-2 border-white"></span>
            </span>
        </div>
        <div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-0.5">Just Booked</div>
            <div className="text-sm font-bold text-[#1D1D1B] leading-tight">
                {booking.name} in {booking.city} booked <span className="text-[#1866B9]">{booking.service}</span>
            </div>
            <div className="text-[10px] text-gray-400 mt-1 flex items-center gap-1">
                <MapPin size={10} /> Local Technician Dispatched
            </div>
        </div>
      </div>
    </div>
  );
};