import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-black/95 backdrop-blur-md py-3 shadow-xl border-b border-white/10' : 'bg-transparent py-4 md:py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="flex items-center group">
          <img 
            src="https://storage.googleapis.com/llsa-website-images/LLSALogo.png" 
            alt="LLSA Logo" 
            className="h-[36px] md:h-[44px] w-auto object-contain transition-transform duration-500 group-hover:scale-105" 
          />
          <span className="hidden sm:block ml-4 text-sm font-serif font-bold tracking-widest text-white uppercase">LLSA</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10 lg:space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-[10px] uppercase tracking-label font-semibold text-white/60 hover:text-white transition-all font-sans"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#donate"
            onClick={(e) => handleScrollTo(e, '#donate')}
            className="px-6 py-2 border border-white/30 text-white text-[10px] uppercase tracking-label font-semibold hover:bg-white hover:text-black hover:border-white transition-all font-sans"
          >
            Support
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black z-[90] transition-transform duration-700 ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden flex flex-col items-center justify-center space-y-10`}>
        <img 
          src="https://storage.googleapis.com/llsa-website-images/LLSALogo.png" 
          alt="Logo" 
          className="h-16 w-auto mb-4"
        />
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleScrollTo(e, link.href)}
            className="text-lg font-sans font-semibold text-white uppercase tracking-label hover:text-white/50 transition-colors"
          >
            {link.name}
          </a>
        ))}
        <a
          href="#donate"
          onClick={(e) => handleScrollTo(e, '#donate')}
          className="px-12 py-5 border border-white text-white text-sm font-semibold uppercase tracking-label font-sans"
        >
          Donate Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;