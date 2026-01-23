import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          
          {/* Brand & Logo */}
          <div className="flex items-center space-x-4">
            <img src="LLSA_logo.PNG" alt="LLSA Logo" className="h-10 w-auto opacity-80" />
            <div className="text-center md:text-left">
              <h2 className="text-xl font-serif font-bold tracking-widest text-black">LLSA</h2>
              <p className="text-[10px] text-gray-400 uppercase tracking-wider">McGeorge School of Law</p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-8">
            <a href="#mission" onClick={(e) => handleNavClick(e, '#mission')} className="text-xs uppercase tracking-widest text-gray-500 hover:text-black transition-colors">Mission</a>
            <a href="#events" onClick={(e) => handleNavClick(e, '#events')} className="text-xs uppercase tracking-widest text-gray-500 hover:text-black transition-colors">Events</a>
            <a href="#graduates" onClick={(e) => handleNavClick(e, '#graduates')} className="text-xs uppercase tracking-widest text-gray-500 hover:text-black transition-colors">Graduates</a>
            <a href="#donate" onClick={(e) => handleNavClick(e, '#donate')} className="text-xs uppercase tracking-widest text-gray-500 hover:text-black transition-colors">Donate</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="text-xs uppercase tracking-widest text-gray-500 hover:text-black transition-colors">Contact</a>
          </div>

          {/* Social Links & Copyright */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex space-x-6">
              <a href="https://www.instagram.com/mcg_llsa/?hl=en" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/groups/14525631/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <p className="text-[10px] text-gray-400 font-light">© {new Date().getFullYear()} Latinx Law Students Association.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;