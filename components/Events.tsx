import React from 'react';
import { Calendar, Users, Mic2, Briefcase, ArrowRight } from 'lucide-react';

const Events: React.FC = () => {
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
                <span className="text-[10px] font-bold uppercase tracking-label text-llsa-accent mb-2 block">Featured Programming</span>
                <h3 className="text-2xl font-serif font-bold mb-6">Annual Inter-Collegiate Mixer</h3>
                <a 
                  href="https://docs.google.com/forms/d/16xMWcRFfQRvxICAvrzn-YKZG_B5JTJg063m1wrfprgI/edit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center py-4 bg-llsa-accent text-white text-[11px] font-bold uppercase tracking-label hover:bg-llsa-charcoal transition-all"
                >
                  RSVP for Events
                </a>
              </div>
            </div>
          </div>

          {/* Event Types Content */}
          <div className="lg:col-span-7 py-8">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12">Events & Outreach</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-16">
              {[
                { icon: <Users size={20} />, title: "Networking Mixers", desc: "Connect with McGeorge alumni and legal professionals in Sacramento." },
                { icon: <Mic2 size={20} />, title: "Diversity Panels", desc: "Engagement on legal issues impacting the Latinx community." },
                { icon: <Calendar size={20} />, title: "Mentorship Programs", desc: "Peer-to-peer mentorship for 1L and 2L students." },
                { icon: <Briefcase size={20} />, title: "Professional Development", desc: "Workshops on OCI, resumes, and career paths." }
              ].map((item, i) => (
                <div key={i} className="flex space-x-5 group">
                  <div className="text-llsa-accent mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-[12px] uppercase tracking-widest mb-2 text-llsa-charcoal group-hover:text-llsa-accent transition-colors">{item.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 border-l-2 border-llsa-accent bg-white shadow-sm rounded-r-md">
              <p className="text-sm text-gray-600 leading-relaxed font-medium italic">
                Check <span className="text-llsa-accent font-bold">The Docket</span> and <span className="text-llsa-accent font-bold">The WRIT</span> for official event schedules and registration details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;