import { motion } from 'framer-motion';

interface ExperienceCardProps {
  role: string;
  company: string;
  period: string;
  intro1: string;
  intro2: string;
  sections: Array<{
    title: string;
    description: string;
    items: readonly string[];
  }>;
  index: number;
  image?: string;
}

export default function ExperienceCard({ 
  role, 
  company, 
  period, 
  intro1, 
  intro2, 
  sections, 
  index,
  image
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
    >
      <div className="group py-16 border-b border-zinc-50 last:border-0 hover:bg-zinc-50/30 transition-all duration-300 px-6 -mx-6 rounded-lg">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
          <div>
            <h3 className="text-3xl font-medium tracking-tight mb-2 group-hover:translate-x-2 transition-transform duration-500">
              {role}
            </h3>
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">{company}</span>
              <span className="w-1 h-1 bg-zinc-200 rounded-full"></span>
              <span className="text-xs font-mono text-zinc-400">{period}</span>
            </div>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-zinc-600 leading-relaxed text-base">{intro1}</p>
              <p className="text-zinc-600 leading-relaxed text-base">{intro2}</p>
              
              {image && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="rounded-lg overflow-hidden border border-zinc-200"
                >
                  <img 
                    src={`/img/${image}`} 
                    alt={`${company} experience`}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              )}
              
              {sections[0] && (
                <div className="border-l-2 border-zinc-200 pl-6 mt-8">
                  <h4 className="text-xs font-bold text-zinc-900 mb-4 uppercase tracking-[0.2em]">
                    {sections[0].title}
                  </h4>
                  <p className="text-zinc-600 leading-relaxed text-sm mb-4">{sections[0].description}</p>
                  <ul className="text-zinc-600 text-sm space-y-2.5">
                    {sections[0].items.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-[oklch(0.7_0.15_80)] font-bold">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            <div className="space-y-8">
              {sections.slice(1).map((section, i) => (
                <div key={i} className="border-l-2 border-zinc-200 pl-6">
                  <h4 className="text-xs font-bold text-zinc-900 mb-4 uppercase tracking-[0.2em]">
                    {section.title}
                  </h4>
                  <p className="text-zinc-600 leading-relaxed text-sm mb-4">{section.description}</p>
                  <ul className="text-zinc-600 text-sm space-y-2.5">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex gap-3">
                        <span className="text-[oklch(0.7_0.15_80)] font-bold">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
