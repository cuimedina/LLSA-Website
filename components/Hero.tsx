import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Dark Background Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-zinc-900 to-black"></div>
      
      {/* Subtle Pattern/Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[100px] z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
        <div className="animate-fade-in-up">
          <img 
            src="/images/LLSAWhiteLogo.png" 
            alt="LLSA Logo" 
            className="w-64 md:w-[400px] lg:w-[480px] h-auto object-contain mx-auto mb-12 drop-shadow-2xl"
          />
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight mb-6">
            LLSA
          </h1>
          
          <p className="text-[10px] md:text-xs font-sans font-semibold tracking-label uppercase text-white/50 mb-10">
            University of the Pacific • McGeorge School of Law
          </p>
          
          <div className="w-12 h-px bg-white/20 mx-auto mb-10"></div>
          
          <p className="text-lg md:text-2xl font-sans font-normal text-white/90 max-w-3xl mx-auto leading-relaxed">
            Advancing academic success, professional excellence, and cultural awareness at McGeorge School of Law
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;