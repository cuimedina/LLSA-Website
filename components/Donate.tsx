import React from 'react';

const Donate: React.FC = () => {
  return (
    <section id="donate" className="py-24 md:py-32 bg-white text-llsa-charcoal text-center">
      <div className="max-w-4xl mx-auto px-6">
        <span className="text-[10px] font-bold tracking-label uppercase text-black mb-8 block">Contribute</span>
        <h3 className="text-4xl md:text-6xl font-serif font-bold mb-10">Support Our Cause</h3>
        <p className="text-lg md:text-xl text-gray-500 font-light mb-16 max-w-2xl mx-auto leading-relaxed">
          Your contribution directly supports student scholarships, event programming, and community outreach initiatives. 
          Help us empower the next generation of Latinx legal professionals.
        </p>

        <div className="flex flex-col items-center">
          <a 
            href="https://crowdfunding.pacific.edu/campaigns/latinx-law-students-association-llsa-fund"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-16 md:px-24 py-5 bg-black text-white text-[12px] font-bold uppercase tracking-widest hover:opacity-80 transition-all shadow-xl rounded-sm"
          >
            Donate Now
          </a>
          
          <p className="mt-12 text-[10px] text-gray-400 font-medium uppercase tracking-widest max-w-md leading-loose">
            You will be redirected to the University of the Pacific's official crowdfunding page.
          </p>
          
          <p className="mt-4 text-[10px] text-black font-bold uppercase tracking-widest">
            *ALL DONATIONS ARE TAX-DEDUCTIBLE
          </p>
        </div>
      </div>
    </section>
  );
};

export default Donate;