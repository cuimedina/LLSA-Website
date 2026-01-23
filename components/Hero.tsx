import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Subtle Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800 via-black to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <img 
            src="LLSAWhiteLogo.png" 
            alt="LLSA Logo" 
            className="w-64 md:w-80 h-auto mx-auto mb-10 drop-shadow-lg"
          />
          <h1 className="text-sm md:text-base font-sans font-bold tracking-[0.6em] uppercase text-gray-400 mb-4">
            McGeorge School of Law
          </h1>
          <div className="w-12 h-[1px] bg-white/30 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl font-serif italic text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Empowering the next generation of Latinx legal professionals through community, advocacy, and excellence.
          </p>
        </div>

        <div className="mt-16 animate-fade-in" style={{ animationDelay: '600ms' }}>
          <a 
            href="#mission" 
            className="text-[10px] uppercase tracking-[0.4em] text-white/50 hover:text-white transition-all duration-300 border-b border-white/20 pb-2"
          >
            Our Mission
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;