import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-navbar-gradient border-b border-white/5 font-roboto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img 
                src="/img/logo.png" 
                alt="Logo" 
                className="h-8 w-auto opacity-90 hover:opacity-100 transition-opacity" 
                style={{ height: '2rem' }}
              />
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/about" className="text-white hover:text-gold-medium px-3 py-2 rounded-md text-base font-light transition-colors">
                About me
              </Link>
              
              <div className="relative">
                <button 
                  onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                  className="text-white hover:text-gold-medium px-3 py-2 rounded-md text-base font-light flex items-center transition-colors"
                >
                  Projects <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                
                {isProjectsOpen && (
                  <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-black/90 ring-1 ring-gold-dark/20 divide-y divide-white/5">
                    <div className="py-1">
                      <a href="https://github.com/Villanua/vectra_hw" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gold-deep/20 hover:text-white font-light">
                        Vectra (Work in progress)
                      </a>
                      <a href="https://github.com/Villanua" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gold-deep/20 hover:text-white font-light">
                        Ada (Work in progress)
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/about" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              About me
            </Link>
            <div className="px-3 py-2 text-gray-300 font-medium border-t border-white/10 mt-2">Projects</div>
            <a href="https://github.com/Villanua/vectra_hw" target="_blank" onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Vectra
            </a>
            <a href="https://github.com/Villanua" target="_blank" onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Ada
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
