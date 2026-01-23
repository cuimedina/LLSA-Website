import React from 'react';
import { Mail, MapPin, Instagram, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-llsa-gray text-llsa-charcoal border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          
          {/* Info Side */}
          <div>
            <span className="text-[10px] font-bold tracking-label uppercase text-llsa-accent mb-6 block">Connect</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12">Get in Touch</h2>
            <p className="text-gray-500 text-lg mb-16 font-light leading-relaxed max-w-md">
              Contact the LLSA co-presidents if you have any questions about membership, events, or partnerships.
            </p>

            <div className="space-y-12">
              <div className="flex items-start group">
                <div className="mt-1 text-llsa-accent p-3 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform"><Mail size={20} /></div>
                <div className="ml-6">
                  <h4 className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">Email Co-Presidents</h4>
                  <a href="mailto:mcgeorge.llsa@gmail.com" className="text-lg font-bold text-llsa-charcoal border-b-2 border-llsa-accent/20 hover:border-llsa-accent transition-all pb-1">
                    mcgeorge.llsa@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 text-llsa-accent p-3 bg-white rounded-full shadow-sm"><MapPin size={20} /></div>
                <div className="ml-6">
                  <h4 className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">Location</h4>
                  <p className="text-llsa-charcoal font-medium text-sm leading-relaxed">
                    University of the Pacific<br/>
                    McGeorge School of Law<br/>
                    Sacramento, CA
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Side */}
          <div className="flex flex-col justify-center">
            <div className="p-12 bg-white shadow-xl rounded-card border border-gray-100">
              <h3 className="text-[11px] font-bold uppercase tracking-widest mb-8 text-llsa-accent">Stay Updated</h3>
              <p className="text-sm text-gray-500 mb-12 leading-relaxed font-light">
                Follow our official accounts for real-time news and community highlights from our students and alumni.
              </p>
              
              <div className="flex space-x-6">
                <a 
                  href="https://www.instagram.com/mcg_llsa/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex flex-col items-center p-6 border border-gray-100 hover:border-llsa-accent hover:text-llsa-accent transition-all duration-500 rounded-md"
                >
                  <Instagram size={24} className="mb-4" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Instagram</span>
                </a>
                <a 
                  href="https://www.linkedin.com/groups/14525631/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex flex-col items-center p-6 border border-gray-100 hover:border-llsa-accent hover:text-llsa-accent transition-all duration-500 rounded-md"
                >
                  <Linkedin size={24} className="mb-4" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;