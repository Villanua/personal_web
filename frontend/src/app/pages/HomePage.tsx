import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Chatbot from '../components/Chatbot';
import { Button } from '../components/ui/button';
import { useLanguage, translations } from '../i18n';

interface HomePageProps {
  experience: readonly any[];
  education: readonly any[];
}

export default function HomePage({ experience, education }: HomePageProps) {
  const lang = useLanguage();
  const t = translations[lang];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = t.words;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderContent = (content: string) => {
    return content.split('**').map((part, index) => 
      index % 2 === 1 ? <strong key={index} className="font-medium text-zinc-900">{part}</strong> : part
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation onScrollToSection={scrollToSection} />

      {/* Hero Section */}
      <section id="home" className="h-screen flex items-center justify-center px-4 bg-white overflow-hidden relative">
        <div className="text-center z-10">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <span className="text-zinc-400 text-xs md:text-sm font-semibold tracking-[0.3em] uppercase">
              {t.welcome}
            </span>
          </motion.div>
          
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-4xl md:text-8xl font-bold text-zinc-900 tracking-tighter">
              {t.heroPrefix}
            </h1>
            <div className="h-32 md:h-48 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWordIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="text-5xl md:text-8xl font-bold text-zinc-400 italic tracking-tighter text-center px-4 min-w-min"
                >
                  {words[currentWordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 cursor-pointer"
            onClick={() => scrollToSection('about')}
          >
            <span className="text-zinc-400 text-[10px] uppercase tracking-[0.4em] font-bold">Discover</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            >
              <div className="w-[1px] h-12 bg-zinc-200 relative">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-zinc-900" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 bg-white border-t border-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-24 items-start mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-xs font-bold text-zinc-400 uppercase tracking-[0.2em] mb-8">{t.background}</h2>
              <div className="space-y-8 text-lg text-zinc-700 leading-relaxed font-light">
                <p>
                  {t.aboutText1Prefix}<span className="text-zinc-900 font-semibold">{t.name}</span>{t.aboutText1Suffix}
                </p>
                <p>
                  {t.aboutText2}
                </p>
                <p className="text-base text-zinc-600">
                  {t.aboutText3}
                </p>
              </div>
              <div className="mt-12">
                <Link to="/about">
                  <Button variant="outline" className="rounded-none border-zinc-900 px-8 py-6 text-xs uppercase tracking-widest hover:bg-zinc-900 hover:text-white transition-all duration-300">
                    {t.viewTrajectory}
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative group"
            >
              <div className="aspect-[4/5] overflow-hidden bg-zinc-100">
                <img 
                  src="/img/me.png"
                  alt="Nacho Villanúa"
                  className="w-full h-full object-cover grayscale brightness-110 contrast-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 ease-in-out"
                />
              </div>
              <div className="absolute -inset-4 border border-zinc-100 -z-10 group-hover:inset-0 transition-all duration-700"></div>
            </motion.div>
          </div>

          {/* Summary Sections */}
          <div className="space-y-32">
            {/* Experience Detail */}
            <div className="space-y-12">
              <div className="flex justify-end border-b border-zinc-100 pb-4">
                <span className="text-[10px] text-zinc-400 uppercase tracking-widest">{t.experienceLabel}</span>
              </div>
              <div className="grid gap-6">
                {experience.map((exp, index) => (
                  <div key={index} className="group bg-zinc-50/50 border border-zinc-100/50 p-8 md:p-10 transition-all duration-500 hover:bg-zinc-50 hover:border-zinc-200 hover:shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <h4 className="text-xl md:text-2xl font-bold text-zinc-900 tracking-tight">{exp.role}</h4>
                        <p className="text-sm text-zinc-400 font-semibold uppercase tracking-widest">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-zinc-400 font-mono tracking-tighter bg-white px-3 py-1 border border-zinc-100">{exp.period}</span>
                      </div>
                    </div>
                    <div className="mt-6 max-w-3xl">
                      <p className="text-sm text-zinc-500 leading-relaxed font-light">{renderContent(exp.description)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-8">Built with Precision • 2026</p>
          <div className="flex justify-center gap-12">
            <a href="https://github.com/Villanua" className="text-zinc-500 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://linkedin.com/in/ignacio-villanua-cuenca/" className="text-zinc-500 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="mailto:ignacio.villanua@example.com" className="text-zinc-500 hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
      <Chatbot />
    </div>
  );
}
