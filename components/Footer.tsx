import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-serif font-bold tracking-widest text-black">LLSA</h2>
          <p className="text-sm text-gray-500 mt-2 font-light">© {new Date().getFullYear()} Latinx Law Students Association.</p>
          <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">McGeorge School of Law</p>
        </div>
        
        <div className="flex space-x-8">
          <a href="#mission" className="text-xs uppercase tracking-widest text-gray-500 hover:text-black transition-colors">Mission</a>
          <a href="#events" className="text-xs uppercase tracking-widest text-gray-500 hover:text-black transition-colors">Events</a>
          <a href="#donate" className="text-xs uppercase tracking-widest text-gray-500 hover:text-black transition-colors">Donate</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;