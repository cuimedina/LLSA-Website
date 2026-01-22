import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      // Close mobile menu first if open
      if (isOpen) setIsOpen(false);
      
      // Calculate position with offset for fixed header
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { name: 'Mission', href: '#mission' },
    { name: 'Events', href: '#events' },
    { name: 'Graduates', href: '#graduates' },
    { name: 'Donate', href: '#donate' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Logo / Brand */}
          <div className="flex-shrink-0 flex items-center space-x-4">
            <img 
              src="./LLSAWhiteLogo.png"
              alt="LLSA Logo"
              className={`h-12 w-auto object-contain transition-all duration-300 ${isScrolled ? 'brightness-0' : ''}`}
            />
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`text-xl font-serif tracking-[0.15em] font-bold ${isScrolled ? 'text-black' : 'text-white drop-shadow-md'}`}
            >
              LLSA
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-xs uppercase tracking-[0.2em] font-medium hover:opacity-70 transition-opacity cursor-pointer ${
                  isScrolled ? 'text-black' : 'text-white text-shadow-sm'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#donate"
              onClick={(e) => handleNavClick(e, '#donate')}
              className={`px-6 py-2 border text-xs uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer ${
                isScrolled
                  ? 'border-black text-black hover:bg-black hover:text-white'
                  : 'border-white text-white hover:bg-white hover:text-black'
              }`}
            >
              Support
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md focus:outline-none ${
                isScrolled ? 'text-black' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden flex flex-col justify-center items-center space-y-10`}
      >
         <button
            onClick={closeMenu}
            className="absolute top-6 right-6 p-2 text-black focus:outline-none"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>

        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="text-3xl font-serif text-black hover:text-gray-500 transition-colors cursor-pointer"
          >
            {link.name}
          </a>
        ))}
        <a
          href="#donate"
          onClick={(e) => handleNavClick(e, '#donate')}
          className="px-10 py-4 border border-black text-black text-sm uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all mt-6 cursor-pointer"
        >
          Support
        </a>
      </div>
    </nav>
  );
};

export default Navbar;