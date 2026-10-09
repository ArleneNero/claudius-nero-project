import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'Use Cases', href: '#use-cases' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-5 pb-2 transition-all duration-300">
      <div
        className={`max-w-5xl mx-auto rounded-full transition-all duration-300 glass-capsule ${
          isScrolled ? 'py-2.5 px-6 border-white/20 shadow-2xl' : 'py-3 px-7 border-white/10'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo Mark matching Reference (Glowing Gradient Sphere Ring) */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative w-7 h-7 rounded-full bg-gradient-to-tr from-[#0066FF] via-[#38BDF8] to-[#F97316] p-[2px] shadow-lg shadow-[#0066FF]/30 group-hover:scale-105 transition-transform duration-200">
              <div className="w-full h-full rounded-full bg-[#0A0E17] flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#38BDF8] to-[#0066FF]" />
              </div>
            </div>
            <span className="font-bold text-base tracking-tight text-white group-hover:text-white/90 transition-colors">
              {SITE_CONFIG.name}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-slate-300 hover:text-white transition-colors focus:outline-none"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button matching reference right button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-4 py-1.5 text-xs font-semibold rounded-full text-white bg-white/5 border border-white/20 hover:border-orange-500/60 hover:bg-white/10 transition-all duration-300 shadow-md shadow-black/40 focus:outline-none"
            >
              Discuss a Project
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 focus:outline-none"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-white/10 flex flex-col gap-3 pb-2 px-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="text-xs font-medium text-slate-300 hover:text-white py-1.5 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="inline-flex items-center justify-center w-full mt-2 px-4 py-2 text-xs font-semibold rounded-full text-white bg-white/10 border border-white/20 hover:bg-white/20 transition-colors"
            >
              Discuss a Project
            </a>
          </div>
        )}
      </div>
    </header>
  );
};
