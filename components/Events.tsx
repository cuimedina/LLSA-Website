import React from 'react';
import { Calendar, Users, Mic2 } from 'lucide-react';

const Events: React.FC = () => {
  return (
    <section id="events" className="py-20 bg-llsa-gray text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-300 pb-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Upcoming Events</h2>
            <p className="text-gray-600">Join us for networking mixers, diversity panels, and cultural celebrations.</p>
          </div>
          <div className="mt-4 md:mt-0">
             <span className="text-sm font-semibold tracking-wider uppercase text-gray-500">Check The Docket & The WRIT</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Event Card 1 */}
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

          {/* Event Card 2 */}
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

           {/* Event Card 3 */}
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