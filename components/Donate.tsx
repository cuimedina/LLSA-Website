import React from 'react';

const Donate: React.FC = () => {
  return (
    <section id="donate" className="py-24 md:py-32 bg-black text-white text-center border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-[10px] font-sans font-semibold tracking-label uppercase text-white/40 mb-6">Contribute</h2>
        <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8">Support Our Cause</h3>
        <p className="text-lg md:text-xl text-gray-400 font-normal mb-14 max-w-2xl mx-auto leading-relaxed font-sans">
          Your contribution directly supports student scholarships, event programming, and community outreach initiatives. 
          Help us empower the next generation of Latinx legal professionals.
        </p>

        <div className="flex flex-col items-center">
          <a 
            href="https://crowdfunding.pacific.edu/campaigns/latinx-law-students-association-llsa-fund"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 md:px-20 py-6 bg-white text-black text-[10px] font-sans font-semibold uppercase tracking-label hover:bg-gray-200 transition-all transform hover:scale-105 active:scale-95 shadow-2xl"
          >
            Donate Now
          </a>
          
          <p className="mt-12 text-[9px] text-gray-500 font-sans font-semibold uppercase tracking-label max-w-lg">
            You will be redirected to the University of the Pacific's official crowdfunding page to securely complete your donation.
          </p>
          
          <div className="mt-6 w-8 h-px bg-white/10 mx-auto"></div>
          
          <p className="mt-6 text-[9px] text-gray-600 uppercase tracking-label font-sans font-light">
            *ALL DONATIONS ARE TAX-DEDUCTIBLE
          </p>
        </div>
      </div>
    </section>
  );
};

export default Donate;