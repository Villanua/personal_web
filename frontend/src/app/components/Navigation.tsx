import { Link } from 'react-router-dom';
import { useLanguage, translations } from '../i18n';

interface NavigationProps {
  onScrollToSection: (section: string) => void;
}

export default function Navigation({ onScrollToSection }: NavigationProps) {
  const lang = useLanguage();
  const t = translations[lang];
  
  return (
    <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3 hover:opacity-70 transition-opacity">
            <img src="/img/logo.png" alt="Villanua Logo" className="h-10 w-10" />
            <span className="font-light text-base tracking-widest text-zinc-900">Villanúa</span>
          </Link>
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
        </div>
      </div>
    </nav>
  );
}
