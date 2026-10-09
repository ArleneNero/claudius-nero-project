import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

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
    <>
      {/* Floating Top Navbar Bar */}
      <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-6 lg:px-8 pt-4 sm:pt-5 pb-2 transition-all duration-300">
        <div
          className={`max-w-5xl mx-auto rounded-full transition-all duration-300 glass-capsule ${
            isScrolled ? 'py-2 px-4 sm:px-6 border-white/20 shadow-2xl' : 'py-2.5 px-4 sm:px-7 border-white/10'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo Mark matching Reference (Glowing Gradient Sphere Ring) */}
            <a
              href="#"
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none min-w-0"
            >
              <div className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-tr from-[#0066FF] via-[#38BDF8] to-[#F97316] p-[2px] shadow-lg shadow-[#0066FF]/30 shrink-0 group-hover:scale-105 transition-transform duration-200">
                <div className="w-full h-full rounded-full bg-[#0A0E17] flex items-center justify-center">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-gradient-to-r from-[#38BDF8] to-[#0066FF]" />
                </div>
              </div>
              <span className="font-bold text-sm sm:text-base tracking-tight text-white group-hover:text-white/90 transition-colors truncate">
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

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-4 py-1.5 text-xs font-semibold rounded-full text-white bg-white/5 border border-white/20 hover:border-orange-500/60 hover:bg-white/10 transition-all duration-300 shadow-md shadow-black/40 focus:outline-none"
              >
                Discuss a Project
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none active:scale-95 transition-transform"
              aria-expanded={isMobileMenuOpen}
              aria-label="Open mobile navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Overlay (100% Opaque, Scroll-Locked, Clean) */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#030509] flex flex-col justify-between overflow-y-auto px-5 py-6 sm:p-8 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          {/* Header inside Menu Overlay */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <a
              href="#"
              onClick={handleLinkClick}
              className="flex items-center gap-2.5 focus:outline-none"
            >
              <div className="relative w-7 h-7 rounded-full bg-gradient-to-tr from-[#0066FF] via-[#38BDF8] to-[#F97316] p-[2px] shadow-lg shrink-0">
                <div className="w-full h-full rounded-full bg-[#0A0E17] flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#38BDF8] to-[#0066FF]" />
                </div>
              </div>
              <span className="font-bold text-base tracking-tight text-white">
                {SITE_CONFIG.name}
              </span>
            </a>

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none active:scale-95 transition-transform"
              aria-label="Close mobile navigation menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav Links Stack */}
          <nav className="flex flex-col gap-2 py-8 my-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="flex items-center justify-between text-lg font-medium text-slate-200 hover:text-white px-4 py-3.5 rounded-xl hover:bg-white/5 active:bg-white/10 border border-transparent hover:border-white/10 transition-all duration-150"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
          </nav>

          {/* Bottom Actions and Info */}
          <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="w-full inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold rounded-full text-white btn-glow-orange transition-all duration-300"
            >
              Discuss a Project
              <ArrowRight className="ml-2 w-4 h-4 text-orange-400" />
            </a>

            <div className="text-center text-xs text-slate-500 font-mono pt-1">
              {SITE_CONFIG.domain}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
