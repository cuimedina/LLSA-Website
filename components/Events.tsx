import React from 'react';
import { Calendar, MapPin, Users, Mic2, ExternalLink } from 'lucide-react';

const Events: React.FC = () => {
  return (
    <section id="events" className="py-24 bg-llsa-gray text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">Events & Programming</h2>
          <div className="w-12 h-1 bg-black mb-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Flyer Card */}
          <div className="lg:col-span-2 bg-white shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <img 
                src="HNBALLSAStudentMixer.jpg" 
                alt="Mixer Flyer" 
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <div className="mb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Upcoming Signature Event</span>
                <h3 className="text-2xl font-serif font-bold mt-2">Bay Area Student Mixer</h3>
              </div>
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar size={16} className="mr-2" /> Jan 31, 2026 • 6:00 PM
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin size={16} className="mr-2" /> Legacy Bar North Beach, SF
                </div>
              </div>
              <a 
                href="https://docs.google.com/forms/d/16xMWcRFfQRvxICAvrzn-YKZG_B5JTJg063m1wrfprgI/viewform" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-black text-white text-[10px] font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors"
              >
                RSVP Now <ExternalLink size={12} className="ml-2" />
              </a>
            </div>
          </div>

          {/* Secondary Events / Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 border border-gray-100 shadow-sm">
              <Users className="mb-4 text-gray-400" size={24} />
              <h4 className="text-lg font-serif font-bold mb-2">Professional Mixers</h4>
              <p className="text-sm text-gray-500 leading-relaxed">Monthly gatherings to connect students with practicing attorneys and alumni.</p>
            </div>
            <div className="bg-white p-8 border border-gray-100 shadow-sm">
              <Mic2 className="mb-4 text-gray-400" size={24} />
              <h4 className="text-lg font-serif font-bold mb-2">Panel Discussions</h4>
              <p className="text-sm text-gray-500 leading-relaxed">Educational sessions on law school success and career pathways.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;