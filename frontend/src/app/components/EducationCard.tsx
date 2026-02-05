import { motion } from 'framer-motion';

interface EducationCardProps {
  degree: string;
  institution: string;
  year: string;
  intro: string;
  intro2?: string;
  sections: Array<{
    title: string;
    description: string;
    items?: readonly string[];
  }>;
  index: number;
  images?: string[];
}

export default function EducationCard({ 
  degree, 
  institution, 
  year, 
  intro, 
  intro2,
  sections, 
  index,
  images
}: EducationCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className="grid md:grid-cols-3 gap-12"
    >
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="space-y-4"
      >
        <span className="text-[10px] font-mono text-zinc-400 italic block">{year}</span>
        <h3 className="text-xl font-bold tracking-tight leading-tight">{degree}</h3>
        <p className="text-sm uppercase tracking-widest font-semibold text-zinc-400">{institution}</p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="md:col-span-2"
      >
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-zinc-600 leading-relaxed text-base">{intro}</p>
            {intro2 && <p className="text-zinc-600 leading-relaxed text-base">{intro2}</p>}
            
            {sections[0] && (
              <div className="border-l-2 border-zinc-200 pl-6 mt-8">
                <h4 className="text-xs font-bold text-zinc-900 mb-4 uppercase tracking-[0.2em]">
                  {sections[0].title}
                </h4>
                <p className="text-zinc-600 text-sm leading-relaxed">{sections[0].description}</p>
              </div>
            )}
          </div>
          
          <div className="space-y-8">
            {sections.slice(1).map((section, i) => (
              <div key={i} className="border-l-2 border-zinc-200 pl-6">
                <h4 className="text-xs font-bold text-zinc-900 mb-4 uppercase tracking-[0.2em]">
                  {section.title}
                </h4>
                <p className="text-zinc-600 text-sm leading-relaxed mb-4">{section.description}</p>
                {section.items && section.items.length > 0 && (
                  <ul className="text-zinc-600 text-sm space-y-2.5">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex gap-3">
                        <span className="text-[oklch(0.7_0.15_80)] font-bold">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {images && images.length > 0 && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {images.map((img, i) => (
              <div key={i} className="rounded-lg overflow-hidden border border-zinc-100 shadow-sm relative group bg-zinc-50 h-64">
                <img 
                  src={img} 
                  alt={`Project image ${i+1}`} 
                  className="w-full h-full object-contain p-2 grayscale group-hover:grayscale-0 transition-all duration-500" 
                />
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
