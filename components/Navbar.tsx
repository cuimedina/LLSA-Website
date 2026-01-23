import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Mission', href: '#mission' },
    { name: 'Events', href: '#events' },
    { name: 'Graduates', href: '#graduates' },
    { name: 'Shop', href: '#shop' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md h-20 shadow-sm border-b border-gray-100' : 'bg-transparent h-24'}`}>
      <div className="max-w-[1200px] mx-auto px-6 h-full flex justify-between items-center">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="flex items-center space-x-3 group">
          <div className={`${isScrolled ? 'bg-llsa-accent' : 'bg-white/10'} p-1.5 rounded-sm transition-colors`}>
            <img 
              src="https://storage.googleapis.com/llsa-website-images/LLSALogo.png" 
              alt="LLSA" 
              className="h-8 w-auto object-contain" 
            />
          </div>
          <span className={`text-sm font-bold tracking-widest uppercase transition-colors ${isScrolled ? 'text-llsa-black' : 'text-white'}`}>LLSA</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className={`text-[11px] uppercase tracking-label font-bold transition-colors hover:text-llsa-accent ${isScrolled ? 'text-gray-600' : 'text-white/90'}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#donate"
            onClick={(e) => handleScrollTo(e, '#donate')}
            className="px-6 py-2.5 bg-llsa-accent text-white text-[11px] uppercase tracking-label font-bold rounded-sm hover:opacity-90 transition-all shadow-sm"
          >
            Support
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden p-2 ${isScrolled ? 'text-llsa-black' : 'text-white'}`}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-[90] transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden flex flex-col items-center justify-center space-y-8`}>
        <div className="bg-llsa-accent p-4 rounded-sm mb-4 shadow-lg">
          <img src="https://storage.googleapis.com/llsa-website-images/LLSALogo.png" alt="LLSA" className="h-12 w-auto" />
        </div>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleScrollTo(e, link.href)}
            className="text-xl font-bold text-llsa-charcoal uppercase tracking-widest"
          >
            {link.name}
          </a>
        ))}
        <a
          href="#donate"
          onClick={(e) => handleScrollTo(e, '#donate')}
          className="px-12 py-4 bg-llsa-accent text-white text-sm font-bold uppercase tracking-widest shadow-md"
        >
          Donate Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;