import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate?: (view: 'home' | 'graduates' | 'gala') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white py-20 text-center border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col items-center">
          <button 
            onClick={() => onNavigate?.('home')}
            className="bg-black p-2 mb-8 rounded-sm hover:opacity-80 transition-opacity"
          >
            <img 
              src="https://storage.googleapis.com/llsa-website-images/LLSALogo.png" 
              alt="LLSA" 
              className="h-8 w-auto opacity-100" 
            />
          </button>
          
          <h2 className="text-base font-bold tracking-[0.3em] text-black mb-2 uppercase">LLSA</h2>
          <p className="text-[10px] text-gray-400 uppercase tracking-label font-bold mb-8">
            McGeorge School of Law
          </p>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10">
            <button onClick={() => onNavigate?.('home')} className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-black">Home</button>
            <button onClick={() => onNavigate?.('graduates')} className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-black">Graduates</button>
            <button onClick={() => onNavigate?.('gala')} className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-black">Gala 2026</button>
            <a href="https://www.instagram.com/mcg_llsa/" target="_blank" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-black">Instagram</a>
          </div>
          
          <div className="flex space-x-8 mb-12">
            <a href="https://www.instagram.com/mcg_llsa/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors">
              <Instagram size={18} />
            </a>
            <a href="https://www.linkedin.com/groups/14525631/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors">
              <Linkedin size={18} />
            </a>
          </div>

          <div className="w-12 h-[2px] bg-black/10 mb-10"></div>
          
          <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
            &copy; {new Date().getFullYear()} Latinx Law Students Association. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;