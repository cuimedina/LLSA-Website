import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background - Minimalist Dark Theme */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900" />
        {/* Subtle abstract glow for depth */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] bg-white/[0.03] rounded-full blur-[100px] pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto flex flex-col items-center justify-center h-full pt-16">
        
        {/* Logo Lockup */}
        <div className="animate-fade-in-up flex flex-col items-center">
           
           {/* Top Text - Modern Sleek Serif */}
           <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-medium tracking-[0.1em] text-white leading-tight mb-8 text-shadow-sm">
             LATINX LAW
           </h1>
           
           {/* Agave/Floral Logo Graphic */}
           <div className="mb-10 mx-auto text-white opacity-95 hover:opacity-100 transition-all duration-500 transform hover:scale-105">
             <svg width="140" height="90" viewBox="0 0 140 90" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="filter drop-shadow-lg">
                {/* Central Base Point */}
                <circle cx="70" cy="82" r="2" />

                {/* Inner Ray of Dots */}
                <g className="opacity-80">
                  <circle cx="60" cy="78" r="1.5" />
                  <circle cx="80" cy="78" r="1.5" />
                  <circle cx="52" cy="72" r="1.5" />
                  <circle cx="88" cy="72" r="1.5" />
                  <circle cx="46" cy="64" r="1.5" />
                  <circle cx="94" cy="64" r="1.5" />
                </g>

                {/* Inner Petals (Teardrops) */}
                <g>
                   <path d="M70 78 C70 78 65 60 70 50 C75 60 70 78 70 78 Z" /> {/* Center */}
                   
                   <path d="M62 76 C62 76 52 60 54 52 C60 62 62 76 62 76 Z" transform="rotate(-15 62 76)" />
                   <path d="M78 76 C78 76 88 60 86 52 C80 62 78 76 78 76 Z" transform="rotate(15 78 76)" />
                   
                   <path d="M54 70 C54 70 40 58 40 48 C50 58 54 70 54 70 Z" transform="rotate(-35 54 70)" />
                   <path d="M86 70 C86 70 100 58 100 48 C90 58 86 70 86 70 Z" transform="rotate(35 86 70)" />
                </g>

                {/* Outer Petals (Larger Leaves) */}
                <g className="opacity-90">
                   <path d="M70 45 C70 45 62 25 70 10 C78 25 70 45 70 45 Z" /> {/* Top Center */}
                   
                   <path d="M50 48 C50 48 40 28 35 15 C45 30 50 48 50 48 Z" transform="rotate(-20 50 48)" />
                   <path d="M90 48 C90 48 100 28 105 15 C95 30 90 48 90 48 Z" transform="rotate(20 90 48)" />
                   
                   <path d="M35 60 C35 60 20 45 10 35 C28 50 35 60 35 60 Z" transform="rotate(-45 35 60)" />
                   <path d="M105 60 C105 60 120 45 130 35 C112 50 105 60 105 60 Z" transform="rotate(45 105 60)" />
                </g>
             </svg>
           </div>

           {/* Bottom Text - Stacked */}
           <div className="flex flex-col items-center space-y-3">
             <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif tracking-[0.25em] text-white uppercase">
               Students
             </h2>
             <h2 className="text-xl sm:text-2xl md:text-3xl font-serif tracking-[0.25em] text-white/90 uppercase">
               Assoc.
             </h2>
           </div>
        </div>

        <div className="mt-16 sm:mt-24">
           <p className="text-sm md:text-base font-sans font-light tracking-widest text-gray-400 mb-8 uppercase">
            University of the Pacific &bull; McGeorge School of Law
          </p>
          
          <a 
            href="#mission" 
            className="inline-flex flex-col items-center text-xs uppercase tracking-[0.3em] text-white/60 hover:text-white transition-colors duration-300"
          >
            <span className="mb-3">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;