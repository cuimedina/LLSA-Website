import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Content Overlay - Pure black background as requested */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center animate-fade-in-up">
        {/* Logo centered without any background boxes or containers */}
        <div className="mb-10 md:mb-12">
          <img 
            src="https://storage.googleapis.com/llsa-website-images/LLSALogo.png" 
            alt="LLSA Logo" 
            className="w-[280px] md:w-[400px] h-auto object-contain mx-auto"
          />
        </div>
        
        {/* Tagline in white */}
        <h2 className="text-white text-base md:text-xl font-medium tracking-editorial mb-4">
          University of the Pacific • McGeorge School of Law
        </h2>
        
        {/* Subtitle in lighter gray (#A1A1A1) */}
        <p className="text-[#A1A1A1] text-sm md:text-base lg:text-lg font-sans font-light max-w-2xl mx-auto leading-relaxed">
          Advancing academic success, professional excellence, and cultural awareness at McGeorge School of Law
        </p>

        {/* Action Button moved slightly closer */}
        <div className="mt-12">
          <a 
            href="#mission"
            className="px-10 py-4 border border-white/20 text-white text-[11px] uppercase tracking-label font-bold hover:bg-white hover:text-black transition-all duration-500"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Subtle white scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
        <ChevronDown size={28} strokeWidth={1} />
      </div>
    </section>
  );
};

export default Hero;