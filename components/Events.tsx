import React from 'react';
import { Calendar, Users, Mic2, Briefcase, Star } from 'lucide-react';

interface EventsProps {
  onNavigate?: (view: 'home' | 'graduates' | 'gala') => void;
}

const Events: React.FC<EventsProps> = ({ onNavigate }) => {
  return (
    <section id="events" className="py-24 md:py-32 bg-llsa-offwhite text-llsa-charcoal">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Featured Event Card */}
          <div className="lg:col-span-5">
            <div className="bg-white p-4 shadow-xl rounded-card border border-gray-100 group">
              <div className="relative overflow-hidden rounded-md mb-8">
                <img 
                  src="https://storage.googleapis.com/llsa-website-images/HNBALLSAStudentMixer.jpg" 
                  alt="LLSA Student Mixer" 
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="px-4 pb-4">
                <h3 className="text-2xl font-serif font-bold mb-4">Northern California Student Mixer</h3>
                <span className="text-[10px] font-bold uppercase tracking-label text-black mb-2 block">Hosted by HNBA Region XVII</span>
                <span className="text-[10px] font-bold uppercase tracking-label text-black mb-6 block">8 law schools • Una comunidad</span>
                
                <div className="space-y-4">
                  <a 
                    href="https://docs.google.com/forms/d/16xMWcRFfQRvxICAvrzn-YKZG_B5JTJg063m1wrfprgI/edit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center py-4 bg-black text-white text-[11px] font-bold uppercase tracking-label hover:opacity-80 transition-all"
                  >
                    RSVP for Mixer
                  </a>
                  
                  {onNavigate && (
                    <button 
                      onClick={() => onNavigate('gala')}
                      className="w-full inline-flex items-center justify-center py-4 border border-black text-black text-[11px] font-bold uppercase tracking-label hover:bg-black hover:text-white transition-all"
                    >
                      <Star size={14} className="mr-2" />
                      View Gala 2026 Details
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Event Types Content */}
          <div className="lg:col-span-7 py-8">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12">Events & Outreach</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-16">
              {[
                { icon: <Star size={20} />, title: "LLSA Gala 2026", desc: "Our hallmark annual celebration of Latinx excellence in the legal profession." },
                { icon: <Users size={20} />, title: "Networking Mixers", desc: "Connect with McGeorge alumni and legal professionals in Sacramento." },
                { icon: <Mic2 size={20} />, title: "Diversity Panels", desc: "Engagement on legal issues impacting the Latinx community." },
                { icon: <Calendar size={20} />, title: "Mentorship Programs", desc: "Peer-to-peer mentorship for 1L and 2L students." }
              ].map((item, i) => (
                <div key={i} className="flex space-x-5 group">
                  <div className="text-black mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-[12px] uppercase tracking-widest mb-2 text-black group-hover:text-gray-500 transition-colors">{item.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 border-l-2 border-black bg-white shadow-sm rounded-r-md">
              <p className="text-sm text-gray-600 leading-relaxed font-medium italic">
                Check <span className="text-black font-bold underline">The Docket</span> and <span className="text-black font-bold underline">The WRIT</span> for official event schedules and registration details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;