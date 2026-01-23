import React from 'react';
import { Calendar, Users, Mic2, Briefcase } from 'lucide-react';

const Events: React.FC = () => {
  return (
    <section id="events" className="py-24 md:py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Featured Event Flyer */}
          <div className="w-full lg:w-5/12">
            <div className="relative group max-w-[500px] mx-auto lg:mx-0">
              <div className="absolute -inset-2 bg-white/5 blur-xl group-hover:bg-white/10 transition-all rounded-lg"></div>
              <img 
                src="/images/HNBALLSAStudentMixer.jpg" 
                alt="LLSA Bay Area Mixer Flyer" 
                className="relative z-10 w-full h-auto rounded-lg shadow-2xl transition-transform duration-500 hover:scale-[1.01]"
              />
              <div className="mt-8 text-center lg:text-left">
                <span className="text-[9px] font-sans font-semibold uppercase tracking-label text-white/40">Featured Event</span>
                <p className="text-xl font-sans font-normal mt-2 text-white">Annual Inter-Collegiate Mixer</p>
              </div>
            </div>
          </div>

          {/* Event Content */}
          <div className="w-full lg:w-7/12">
            <h2 className="text-[10px] font-sans font-semibold tracking-label uppercase text-white/40 mb-6">Programming</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-10">Events & Outreach</h3>
            <p className="text-gray-400 text-lg mb-12 font-normal font-sans leading-relaxed">
              We host a variety of social, academic, and professional development events throughout the academic year.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-16">
              <div className="flex items-start space-x-5">
                <Users className="w-5 h-5 text-white/60 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-sans font-semibold text-[10px] uppercase tracking-label mb-2">Networking Mixers</h4>
                  <p className="text-xs text-gray-500 font-sans font-normal leading-relaxed">Connect with McGeorge alumni and legal professionals in Sacramento.</p>
                </div>
              </div>
              <div className="flex items-start space-x-5">
                <Mic2 className="w-5 h-5 text-white/60 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-sans font-semibold text-[10px] uppercase tracking-label mb-2">Diversity Panels</h4>
                  <p className="text-xs text-gray-500 font-sans font-normal leading-relaxed">Engagement on legal issues impacting the Latinx community.</p>
                </div>
              </div>
              <div className="flex items-start space-x-5">
                <Calendar className="w-5 h-5 text-white/60 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-sans font-semibold text-[10px] uppercase tracking-label mb-2">Mentorship Programs</h4>
                  <p className="text-xs text-gray-500 font-sans font-normal leading-relaxed">Peer-to-peer mentorship for 1L and 2L students.</p>
                </div>
              </div>
              <div className="flex items-start space-x-5">
                <Briefcase className="w-5 h-5 text-white/60 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-sans font-semibold text-[10px] uppercase tracking-label mb-2">Professional Development</h4>
                  <p className="text-xs text-gray-500 font-sans font-normal leading-relaxed">Workshops on OCI, resumes, and career paths.</p>
                </div>
              </div>
            </div>

            <div className="p-8 border-l border-white/20 bg-white/[0.02]">
              <p className="text-sm text-gray-400 leading-relaxed font-sans font-normal">
                Check <strong>The Docket</strong> and <strong>The WRIT</strong> for official event schedules and registration details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;