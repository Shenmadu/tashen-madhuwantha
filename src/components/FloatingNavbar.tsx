import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, CodeXml } from 'lucide-react';

interface FloatingNavbarProps {
  onNavClick: (sectionId: string) => void;
  activeSection: string;
}

export default function FloatingNavbar({ onNavClick, activeSection }: FloatingNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 ${
          isScrolled ? 'backdrop-blur-none pb-0' : 'pb-0'
        }`}
      >
        <nav
          className={`max-w-7xl mx-auto rounded-2xl border transition-all duration-300 backdrop-blur-xl ${
            isScrolled
              ? 'bg-[#0B0B0F]/80 border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] py-3 px-6'
              : 'bg-white/5 border-white/10 py-4 px-6 sm:px-8 shadow-xl'
          }`}
          id="navbar"
        >
          <div className="flex items-center justify-between">
            {/* Logo Brand */}
            <div 
              className="flex items-center gap-2.5 cursor-pointer group"
              onClick={() => onNavClick('home')}
            >
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-[#6366F1] to-[#06B6D4] text-white font-bold text-sm italic shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-transform duration-300 group-hover:scale-105">
                TM
                <span className="absolute inset-0 rounded-lg border border-white/20 scale-100" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-sm font-semibold tracking-tight text-white">Tashen Madhuwantha</span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/75">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => onNavClick(item.id)}
                    className={`relative p-1.5 font-sans text-xs transition-colors duration-200 cursor-pointer ${
                      isActive ? 'text-white font-semibold' : 'hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavBackground"
                        className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-4 h-1 bg-[#6366F1] rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* Resume Button */}
            <div className="hidden md:block">
              {/* <button
                onClick={() => {
                  alert("CV Download Initiated: Tashen_Madhuwantha_Resume.pdf");
                }}
                className="px-5 py-2 bg-white text-black rounded-xl text-xs font-bold hover:bg-opacity-90 transition-all cursor-pointer"
              >
                Download CV
              </button> */}
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-white cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-4 right-4 z-40 md:hidden p-5 rounded-2xl border border-white/10 bg-[#0B0B0F]/95 backdrop-blur-2xl shadow-[0_16px_40px_rgba(0,0,0,0.8)]"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavClick(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left py-3 px-4 rounded-xl font-sans text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-[#6366F1]/10 to-[#8B5CF6]/10 text-white border border-white/10'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="h-px bg-white/10 my-1" />
              {/* <button
                onClick={() => {
                  onNavClick('contact');
                  setMobileMenuOpen(false);
                }}
                className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white font-sans text-sm font-semibold tracking-wide"
              >
                Download CV
              </button> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
