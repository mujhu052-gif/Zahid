import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Menu, 
  Facebook, 
  Instagram, 
  Youtube, 
  Music 
} from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/10 backdrop-blur-md border border-white/20 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16 md:h-20">
        <Link to="/" className="flex items-center gap-3 cursor-pointer group shrink-0">
          <img src="/logo.png" alt="WHS Logo" className="h-8 md:h-10 w-auto group-hover:scale-105 transition-transform" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path}
              className={`transition-colors ${location.pathname === item.path ? 'text-blue-400' : 'text-white/70 hover:text-white'}`}
            >
              {item.name}
            </Link>
          ))}
          <Link to="/contact" className="bg-blue-600 text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/20">
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden fixed inset-x-0 top-16 bg-slate-950/95 border-b border-white/10 p-6 flex flex-col gap-5 shadow-2xl z-[100] backdrop-blur-2xl"
          >
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path}
                className={`text-xl font-black uppercase italic tracking-tighter ${location.pathname === item.path ? 'text-blue-400' : 'text-white/80 hover:text-white'}`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="mt-20 text-center pb-12 border-t border-white/5 pt-16">
      <div className="flex flex-col items-center gap-8">
        <img src="/logo.png" alt="WHS Logo" className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 text-[10px] font-black font-mono text-white/20 tracking-[0.4em] uppercase text-glow-low w-full text-center">
          <div>&copy; 2026 WHS SOCIAL MEDIA</div>
          <div className="text-blue-400">DED DUBAI CERTIFIED #1403869</div>
          <div className="flex justify-center gap-6 md:gap-10">
            <Link to="/about" className="hover:text-white transition-colors cursor-pointer">Privacy Docs</Link>
            <Link to="/about" className="hover:text-white transition-colors cursor-pointer">Entity Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen relative overflow-x-hidden bg-slate-900 text-white selection:bg-blue-500/30 scroll-smooth">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
