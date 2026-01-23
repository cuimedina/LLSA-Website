import React from 'react';
import { Mail, MapPin, Instagram, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
          
          {/* Info Side */}
          <div>
            <h2 className="text-[10px] font-sans font-semibold tracking-label uppercase text-white/40 mb-6">Connect</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-10">Get in Touch</h3>
            <p className="text-gray-400 text-lg mb-12 font-normal font-sans leading-relaxed">
              Contact the LLSA co-presidents if you have any questions about membership, events, or partnerships.
            </p>

            <div className="space-y-12">
              <div className="flex items-start space-x-6 group">
                <div className="mt-1 text-white/40 group-hover:text-white transition-colors duration-500"><Mail size={18} /></div>
                <div>
                  <h4 className="text-[10px] font-sans font-semibold uppercase tracking-label text-white/40 mb-2">Email Co-Presidents</h4>
                  <a href="mailto:mcgeorge.llsa@gmail.com" className="text-lg font-sans font-normal text-white border-b border-transparent hover:border-white transition-all pb-0.5">
                    mcgeorge.llsa@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="mt-1 text-white/40"><MapPin size={18} /></div>
                <div>
                  <h4 className="text-[10px] font-sans font-semibold uppercase tracking-label text-white/40 mb-2">Location</h4>
                  <p className="text-white/80 font-sans font-normal text-sm leading-relaxed">
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
            <div className="p-10 border border-white/10 bg-white/[0.02]">
              <h3 className="text-[10px] font-sans font-semibold uppercase tracking-label mb-8 text-white/60">Stay Updated</h3>
              <p className="text-sm text-gray-500 mb-10 leading-relaxed font-sans font-normal">
                Follow our official accounts for real-time news and community highlights.
              </p>
              
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/mcg_llsa/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 border border-white/10 hover:border-white hover:bg-white hover:text-black transition-all duration-500"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/groups/14525631/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 border border-white/10 hover:border-white hover:bg-white hover:text-black transition-all duration-500"
                >
                  <Linkedin size={20} />
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