import React, { useState } from 'react';
import { Instagram, Linkedin, Send, Bell } from 'lucide-react';

const GalaPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center pt-20">
      {/* Hero Section */}
      <div className="max-w-[800px] w-full px-6 py-20 text-center animate-fade-in-up">
        <div className="mb-12 flex justify-center">
          <img 
            src="https://storage.googleapis.com/llsa-website-images/LLSALogo.png" 
            alt="LLSA Logo" 
            className="w-[180px] md:w-[200px] h-auto object-contain opacity-90"
          />
        </div>

        <div className="inline-block px-4 py-1.5 border border-white/30 rounded-full mb-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/80">Coming Soon</span>
        </div>

        <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8 leading-tight tracking-tight">
          LLSA Gala 2026
        </h1>
        
        <p className="text-xl md:text-2xl font-light text-white/60 mb-16 leading-relaxed">
          An evening celebrating nuestra comunidad
        </p>

        {/* Placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20 border-y border-white/10 py-12">
          <div>
            <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2">Date</p>
            <p className="text-lg font-medium">To Be Announced</p>
          </div>
          <div>
            <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2">Venue</p>
            <p className="text-lg font-medium">To Be Announced</p>
          </div>
          <div>
            <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2">Time</p>
            <p className="text-lg font-medium">To Be Announced</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-md mx-auto">
          <h3 className="text-xl font-bold mb-6 flex items-center justify-center">
            <Bell size={20} className="mr-3" />
            Stay Informed
          </h3>
          <p className="text-sm text-white/50 mb-10 leading-relaxed font-light">
            Be the first to know when tickets go on sale and event details are announced.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                required
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow bg-transparent border border-white/20 px-6 py-4 rounded-sm text-sm focus:outline-none focus:border-white transition-all"
              />
              <button 
                type="submit"
                className="px-8 py-4 bg-white text-black text-[11px] font-bold uppercase tracking-widest hover:bg-gray-200 transition-all rounded-sm flex items-center justify-center"
              >
                Notify Me
              </button>
            </form>
          ) : (
            <div className="p-6 border border-white/20 rounded-sm bg-white/5 animate-pulse">
              <p className="text-sm font-bold uppercase tracking-widest flex items-center justify-center">
                <Send size={14} className="mr-3" />
                Thank you. We'll be in touch.
              </p>
            </div>
          )}

          <div className="mt-16 pt-16 border-t border-white/10">
            <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold mb-8">
              Follow for Updates
            </p>
            <div className="flex justify-center space-x-8">
              <a href="https://www.instagram.com/mcg_llsa/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/groups/14525631/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Event",
          "name": "LLSA Gala 2026",
          "description": "An evening celebrating nuestra comunidad",
          "eventStatus": "https://schema.org/EventScheduled",
          "location": {
            "@type": "Place",
            "name": "To Be Announced",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Sacramento",
              "addressRegion": "CA",
              "addressCountry": "US"
            }
          },
          "organizer": {
            "@type": "Organization",
            "name": "Latinx Law Students Association",
            "url": "https://llsapacific.org"
          }
        })}
      </script>

      {/* Future Sections - Activate when finalized
      <section id="sponsors" className="py-20 bg-white text-black w-full">
         ... Sponsors Grid ...
      </section>
      */}
    </div>
  );
};

export default GalaPage;