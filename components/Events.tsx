import React from 'react';
import { Calendar, Users, Mic2, MapPin, Clock } from 'lucide-react';

const Events: React.FC = () => {
  return (
    <section id="events" className="py-20 bg-llsa-gray text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-300 pb-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Events & Programming</h2>
            <p className="text-gray-600">Join us for networking mixers, diversity panels, and cultural celebrations.</p>
          </div>
          <div className="mt-4 md:mt-0">
             <span className="text-sm font-semibold tracking-wider uppercase text-gray-500">Check The Docket & The WRIT</span>
          </div>
        </div>

        {/* FEATURED EVENT: BAY AREA MIXER */}
        <div className="mb-20">
          <div className="bg-white shadow-xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row group">
            
            {/* Image Side - Restored sleek full-bleed look */}
            <div className="lg:w-1/2 relative min-h-[400px] md:min-h-[500px] overflow-hidden bg-gray-100">
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img 
                src="./HNBALLSAStudentMixer.jpg" 
                alt="LLSA Bay Area Mixer Flyer" 
                className="absolute inset-0 w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-6 left-6 z-20 bg-black text-white px-4 py-2">
                <span className="text-xs font-bold uppercase tracking-[0.2em]">Featured Event</span>
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">
              <h3 className="text-3xl md:text-5xl font-serif font-bold mb-2 text-black">LLSA Bay Area Mixer</h3>
              <p className="text-gray-500 mb-10 font-serif italic text-xl">Join us for our annual celebration</p>

              <div className="space-y-8">
                {/* Date */}
                <div className="flex items-start space-x-5">
                  <div className="flex-shrink-0 mt-1">
                    <Calendar className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-[0.15em] text-gray-400 mb-1">Date</h4>
                    <p className="text-xl font-medium text-black">January 31, 2026</p>
                  </div>
                </div>

                {/* Time */}
                <div className="flex items-start space-x-5">
                  <div className="flex-shrink-0 mt-1">
                    <Clock className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-[0.15em] text-gray-400 mb-1">Time</h4>
                    <p className="text-xl font-medium text-black">6:00 PM - 9:00 PM</p>
                    <p className="text-sm text-gray-500 mt-1">(Private event, opens to public after 9pm)</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-5">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-[0.15em] text-gray-400 mb-1">Location</h4>
                    <p className="text-xl font-medium text-black">Legacy Bar North Beach</p>
                    <a 
                      href="https://maps.google.com/?q=1326+Grant+Ave,+San+Francisco,+CA+94133" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black underline decoration-gray-300 underline-offset-4 transition-colors"
                    >
                      1326 Grant Ave, San Francisco, CA 94133
                    </a>
                  </div>
                </div>
              </div>

              {/* RSVP Button */}
              <div className="mt-10">
                <a 
                  href="https://docs.google.com/forms/d/16xMWcRFfQRvxICAvrzn-YKZG_B5JTJg063m1wrfprgI/viewform" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full sm:w-auto px-8 py-4 bg-black text-white text-center text-sm font-bold uppercase tracking-[0.2em] hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  RSVP Here
                </a>
              </div>

              {/* Partners Footer */}
              <div className="mt-12 pt-8 border-t border-gray-100">
                <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-4 font-bold">In Partnership With</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "HNBA Region XVII",
                    "USF LLSA",
                    "UC Law SF LLSA",
                    "UC Berkeley La Alianza",
                    "UC Davis King Hall Lalsa",
                    "Stanford LLSA",
                    "Santa Clara Law LLSA",
                    "Lincoln Law LLSA",
                    "McGeorge LLSA"
                  ].map((partner, i) => (
                    <span 
                      key={i} 
                      className="inline-block px-4 py-2 text-xs font-semibold rounded-full border bg-gray-50 text-gray-700 border-gray-200 shadow-sm"
                    >
                      {partner}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regular Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border-t-4 border-black">
            <div className="flex items-center justify-between mb-6">
              <Users className="w-8 h-8 text-gray-800" />
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Networking</span>
            </div>
            <h3 className="text-2xl font-serif font-bold mb-3">Networking Mixers</h3>
            <p className="text-gray-600 mb-6">
              Connect with alumni, local attorneys, and fellow students to build lasting professional relationships.
            </p>
            <div className="text-sm font-semibold border-b border-black inline-block pb-1">
              Fall & Spring Semester
            </div>
          </div>

          <div className="bg-white p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border-t-4 border-black">
            <div className="flex items-center justify-between mb-6">
              <Mic2 className="w-8 h-8 text-gray-800" />
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Education</span>
            </div>
            <h3 className="text-2xl font-serif font-bold mb-3">Diversity Panels</h3>
            <p className="text-gray-600 mb-6">
              Engaging discussions on critical legal issues impacting our communities, featuring guest speakers and experts.
            </p>
            <div className="text-sm font-semibold border-b border-black inline-block pb-1">
              Monthly Series
            </div>
          </div>

           <div className="bg-white p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border-t-4 border-black">
            <div className="flex items-center justify-between mb-6">
              <Calendar className="w-8 h-8 text-gray-800" />
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Social</span>
            </div>
            <h3 className="text-2xl font-serif font-bold mb-3">General Meetings</h3>
            <p className="text-gray-600 mb-6">
              Regular meetings to discuss organizational updates, plan future events, and welcome new members.
            </p>
            <div className="text-sm font-semibold border-b border-black inline-block pb-1">
              Bi-Weekly
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;