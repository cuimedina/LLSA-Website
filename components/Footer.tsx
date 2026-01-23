import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-20 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center">
          <img 
            src="https://storage.googleapis.com/llsa-website-images/LLSALogo.png" 
            alt="LLSA White Logo" 
            className="h-10 w-auto mb-8 opacity-60" 
          />
          <h2 className="text-lg font-serif font-bold tracking-widest text-white mb-2 uppercase">LLSA</h2>
          <p className="text-[9px] text-white/30 uppercase tracking-label font-semibold font-sans mb-12">
            McGeorge School of Law
          </p>
          
          <div className="w-10 h-px bg-white/10 mb-10"></div>
          
          <p className="text-[9px] text-white/20 uppercase tracking-label font-sans font-light">
            &copy; {new Date().getFullYear()} Latinx Law Students Association. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;