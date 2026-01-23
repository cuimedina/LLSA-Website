import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background - Minimalist Dark Theme */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] bg-white/[0.03] rounded-full blur-[100px] pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto flex flex-col items-center justify-center h-full pt-16">
        
        {/* Logo Lockup */}
        <div className="animate-fade-in-up flex flex-col items-center justify-center">
           <div className="mb-12 mx-auto transition-all duration-500 transform hover:scale-105">
             <img 
               src="LLSAWhiteLogo.png" 
               alt="Latinx Law Students Association Logo" 
               className="w-64 sm:w-80 md:w-96 lg:w-[32rem] h-auto object-contain mx-auto drop-shadow-2xl"
             />
           </div>
        </div>

        <div className="mt-8 sm:mt-12">
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