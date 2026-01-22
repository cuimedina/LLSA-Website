import React from 'react';

const Donate: React.FC = () => {
  return (
    <section id="donate" className="py-20 md:py-28 bg-black text-white relative overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gray-800 rounded-full mix-blend-overlay filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Support Our Cause</h2>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          Your contribution directly supports student scholarships, event programming, and community outreach initiatives. Help us empower the next generation of Latinx legal professionals.
        </p>

        <div className="bg-white/5 backdrop-blur-sm p-8 md:p-16 rounded-lg border border-white/10 flex flex-col items-center justify-center">
          
          <a 
            href="https://crowdfunding.pacific.edu/campaigns/latinx-law-students-association-llsa-fund"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full md:w-auto px-12 py-5 bg-white text-black text-xl font-bold uppercase tracking-widest hover:bg-gray-200 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-white/20"
          >
            Donate Now
          </a>
          
          <p className="mt-8 text-sm text-gray-400 font-light max-w-lg">
            You will be redirected to the University of the Pacific's official crowdfunding page to securely complete your donation.
          </p>

          <p className="mt-4 text-xs text-gray-600 uppercase tracking-wider">
            *All donations are tax-deductible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Donate;