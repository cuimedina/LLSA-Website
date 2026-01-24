import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (view: 'home' | 'graduates' | 'gala') => void;
  currentView: 'home' | 'graduates' | 'gala';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isAltPage = currentView === 'graduates' || currentView === 'gala';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActiveWhiteNav = isScrolled || isAltPage;

  const navLinks = [
    { name: 'Mission', href: '#mission', type: 'anchor' },
    { name: 'Events', href: '#events', type: 'anchor' },
    { name: 'Graduates', href: '#graduates', type: 'page', view: 'graduates' },
    { name: 'Gala 2026', href: '#gala', type: 'page', view: 'gala' },
    { name: 'Shop', href: '#shop', type: 'anchor' },
    { name: 'Contact', href: '#contact', type: 'anchor' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: any) => {
    setIsOpen(false);
    
    if (link.type === 'page') {
      e.preventDefault();
      onNavigate(link.view);
      return;
    }

    if (isAltPage) {
      e.preventDefault();
      onNavigate('home');
      setTimeout(() => {
        const target = document.querySelector(link.href);
        if (target) {
          window.scrollTo({
            top: target.getBoundingClientRect().top + window.pageYOffset - 80,
            behavior: 'smooth'
          });
        }
      }, 100);
      return;
    }

    e.preventDefault();
    const target = document.querySelector(link.href);
    if (target) {
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className={`fixed w-full z-[100] transition-all duration-300 ease-in-out ${
        isActiveWhiteNav 
          ? 'bg-white shadow-[0px_2px_8px_rgba(0,0,0,0.08)] h-20' 
          : 'bg-transparent h-24'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-full flex justify-between items-center">
        <button onClick={() => onNavigate('home')} className="flex items-center space-x-3 group text-left">
          <div 
            className={`p-1.5 rounded-sm transition-all duration-300 ${
              isActiveWhiteNav ? 'bg-transparent' : 'bg-white/10'
            }`}
          >
            <img 
              src="https://storage.googleapis.com/llsa-website-images/LLSALogo.png" 
              alt="LLSA" 
              className={`h-8 w-auto object-contain transition-all duration-300 ${
                isActiveWhiteNav ? 'invert' : 'invert-0'
              }`}
            />
          </div>
          <span 
            className={`text-sm font-bold tracking-widest uppercase transition-colors duration-300 ${
              isActiveWhiteNav ? 'text-[#1A1A1A]' : 'text-white'
            }`}
          >
            LLSA
          </span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link)}
              className={`text-[11px] uppercase tracking-label font-bold transition-colors duration-300 hover:text-gray-400 ${
                isActiveWhiteNav ? 'text-[#1A1A1A]' : 'text-white/90'
              }`}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              if (isAltPage) onNavigate('home');
              setTimeout(() => {
                const target = document.querySelector('#donate');
                if (target) window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' });
              }, 100);
            }}
            className={`px-6 py-2.5 text-[11px] uppercase tracking-label font-bold rounded-sm transition-all duration-300 shadow-sm ${
              isActiveWhiteNav 
                ? 'bg-black text-white hover:bg-gray-800' 
                : 'bg-white text-black hover:bg-gray-100'
            }`}
          >
            Support
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className={`md:hidden p-2 transition-colors duration-300 ${
            isActiveWhiteNav ? 'text-black' : 'text-white'
          }`}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white z-[90] transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden flex flex-col items-center justify-center space-y-8`}
      >
        <div className="bg-black p-4 rounded-sm mb-4 shadow-lg">
          <img src="https://storage.googleapis.com/llsa-website-images/LLSALogo.png" alt="LLSA" className="h-12 w-auto" />
        </div>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleLinkClick(e, link)}
            className="text-xl font-bold text-[#1A1A1A] uppercase tracking-widest"
          >
            {link.name}
          </a>
        ))}
        <button
          onClick={() => {
            setIsOpen(false);
            if (isAltPage) onNavigate('home');
            setTimeout(() => {
              const target = document.querySelector('#donate');
              if (target) window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' });
            }, 100);
          }}
          className="px-12 py-4 bg-black text-white text-sm font-bold uppercase tracking-widest shadow-md"
        >
          Donate Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;