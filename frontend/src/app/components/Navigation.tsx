import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage, translations } from '../i18n';

interface NavigationProps {
  onScrollToSection: (section: string) => void;
}

export default function Navigation({ onScrollToSection }: NavigationProps) {
  const lang = useLanguage();
  const t = translations[lang];
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3 hover:opacity-70 transition-opacity">
            <img src="/img/logo.png" alt="Villanua Logo" className="h-10 w-10" />
            <span className="font-light text-base tracking-widest text-zinc-900">Villanúa</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-10">
            <Link 
              to="/"
              className="text-[13px] font-medium text-zinc-500 hover:text-zinc-900 transition-colors uppercase tracking-widest"
            >
              {t.navHome}
            </Link>
            <Link 
              to="/about"
              className="text-[13px] font-medium text-zinc-500 hover:text-zinc-900 transition-colors uppercase tracking-widest"
            >
              {t.navTrajectory}
            </Link>
            <Link 
              to="/contact"
              className="text-[13px] font-medium text-zinc-500 hover:text-zinc-900 transition-colors uppercase tracking-widest"
            >
              {t.navContact}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-zinc-600 hover:text-zinc-900 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-zinc-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4 flex flex-col items-center">
              <Link 
                to="/"
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-zinc-600 hover:text-zinc-900 uppercase tracking-widest py-2"
              >
                {t.navHome}
              </Link>
              <Link 
                to="/about"
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-zinc-600 hover:text-zinc-900 uppercase tracking-widest py-2"
              >
                {t.navTrajectory}
              </Link>
              <Link 
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-zinc-600 hover:text-zinc-900 uppercase tracking-widest py-2"
              >
                {t.navContact}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
