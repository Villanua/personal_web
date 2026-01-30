import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';

interface ExpandableSectionProps {
  title: string;
  summary: string;
  fullText: string;
  expandText: string;
  collapseText: string;
}

export default function ExpandableSection({ 
  title, 
  summary, 
  fullText,
  expandText,
  collapseText 
}: ExpandableSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="border-l-2 border-zinc-200 pl-6">
        <h4 className="text-xs font-bold text-zinc-900 mb-4 uppercase tracking-[0.2em]">
          {title}
        </h4>
        
        <p className="text-zinc-600 leading-relaxed text-sm mb-4">{summary}</p>
        
        <button
          onClick={() => setIsOpen(true)}
          className="text-xs text-[oklch(0.7_0.15_80)] hover:text-zinc-900 transition-colors uppercase tracking-wide font-semibold"
        >
          {expandText} →
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => setIsOpen(false)}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-3xl z-50"
            >
              <div className="bg-white rounded-lg shadow-2xl h-full md:h-auto md:max-h-[85vh] flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-6 md:p-8 border-b border-zinc-100">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight">{title}</h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-zinc-400 hover:text-zinc-900 transition-colors p-2 -m-2"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Content */}
                <div className="overflow-y-auto p-6 md:p-8">
                  <div className="text-zinc-600 leading-relaxed space-y-4">
                    {fullText.split('\n\n').map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="p-6 md:p-8 border-t border-zinc-100 bg-zinc-50">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors uppercase tracking-wide font-semibold"
                  >
                    {collapseText}
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
