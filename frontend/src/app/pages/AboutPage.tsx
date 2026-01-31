import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Plus, Minus, BrainCircuit, Bot, ChevronRight, Wrench, Sparkles } from 'lucide-react';
import { useState, useRef } from 'react';
import Navigation from '../components/Navigation';
import ExpandableSection from '../components/ExpandableSection';
import EducationCard from '../components/EducationCard';
import { useLanguage, translations } from '../i18n';

interface AboutPageProps {
  education: readonly any[];
  experience: readonly any[];
  courses: readonly any[];
  skills: readonly any[];
}

export default function AboutPage({ education, experience, courses, skills }: AboutPageProps) {
  const lang = useLanguage();
  const t = translations[lang];
  const [expandedIndices, setExpandedIndices] = useState<number[]>([]);
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleScrollToSection = () => {};

  const toggleExperience = (e: React.MouseEvent, index: number, hasDetails: boolean) => {
    e.stopPropagation();
    if (!hasDetails) return;
    
    const isExpanded = expandedIndices.includes(index);

    if (isExpanded) {
      setExpandedIndices(prev => prev.filter(i => i !== index));
      // Usamos setTimeout para asegurar que la referencia y el DOM están listos, aunque el cálculo
      // se basa en coordenadas absolutas que no deberían cambiar al colapsar (ya que el top es fijo)
      setTimeout(() => {
        const el = experienceRefs.current[index];
        if (el) {
          const rect = el.getBoundingClientRect();
          // Si la tarjeta está por encima de la zona de confort visual (tapada por header o muy arriba)
          if (rect.top < 150) {
            const y = rect.top + window.scrollY;
            const yOffset = -100; // Ajuste para el header fijo
            window.scrollTo({ top: y + yOffset, behavior: 'smooth' });
          }
        }
      }, 10);
    } else {
      setExpandedIndices(prev => [...prev, index]);
    }
  };

  const renderContent = (content: string) => {
    return content.split('**').map((part, index) => 
      index % 2 === 1 ? <strong key={index} className="font-medium text-zinc-900">{part}</strong> : part
    );
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white">
      <Navigation onScrollToSection={handleScrollToSection} />

      <main className="pt-40 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Introduction Section */}
          <section className="mb-40">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -left-8 top-0 w-1 h-24 bg-gradient-to-b from-[oklch(0.7_0.15_80)] to-transparent"></div>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-sm uppercase tracking-[0.3em] text-zinc-400 mb-8 font-semibold"
              >
                {t.greeting}
              </motion.p>
              
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold tracking-tight mb-12 leading-tight"
              >
                {t.imName}
              </motion.h2>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="grid md:grid-cols-[1fr_450px] gap-12 items-start"
              >
                <div className="space-y-6 text-lg md:text-xl text-zinc-600 leading-relaxed font-light">
                  <p>{t.intro1}</p>
                  <p>{t.intro2}</p>
                </div>
                
                <div className="hidden md:block">
                  <div className="relative rounded-lg overflow-hidden border border-zinc-100 shadow-sm aspect-[4/5]">
                    <img 
                      src="/img/me_spot.jpg" 
                      alt="Nacho with Spot Robot" 
                      className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500" 
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </section>

          {/* Experience Section */}
          <section className="mb-40">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="flex items-end justify-end border-b border-zinc-100 pb-4 mb-12"
            >
              <h3 className="text-sm font-bold tracking-[0.3em] text-zinc-400">{t.professionalPath}</h3>
            </motion.div>
            <div className="space-y-8">
              {experience.map((exp: any, index: number) => {
                const details = exp.company === 'Acciona' ? t.acciona : 
                              exp.company === 'Syntonize' ? t.syntonize : 
                              exp.company === 'ICAI Comillas' ? t.icai : null;
                const hasDetails = !!details;
                const isExpanded = expandedIndices.includes(index);
                
                return (
                <motion.div
                  key={index}
                  ref={(el: HTMLDivElement | null) => { experienceRefs.current[index] = el; }}
                  style={{ scrollMarginTop: '100px' }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                >
                  <div 
                    onClick={(e) => toggleExperience(e, index, hasDetails)}
                    className={`group bg-zinc-50/50 border border-zinc-100/50 p-8 md:p-10 transition-all duration-500 hover:bg-zinc-50 hover:border-zinc-200 hover:shadow-sm ${hasDetails ? 'cursor-pointer' : ''}`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight mb-2">{exp.role}</h3>
                        <p className="text-sm text-zinc-400 font-semibold uppercase tracking-widest">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-zinc-400 font-mono tracking-tighter bg-white px-3 py-1 border border-zinc-100">{exp.period}</span>
                      </div>
                    </div>
                    <div className="max-w-4xl">
                      <p className="text-sm text-zinc-600 leading-relaxed font-light mb-6">{renderContent(exp.description)}</p>
                      
                      {hasDetails && (
                        <div className="mt-6">
                          <div 
                            onClick={(e) => toggleExperience(e, index, hasDetails)}
                            className="group/btn flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-zinc-400 hover:text-zinc-900 transition-colors"
                          >
                            <span>{isExpanded ? (details?.clickToCollapse || "Ver menos detalles") : (details?.clickToExpand || "Ver más detalles")}</span>
                            <span className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                              <ChevronRight className="w-3 h-3" />
                            </span>
                          </div>

                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="overflow-hidden"
                              >
                                <div className="pt-8 pb-2 space-y-8">
                                    {/* Introduction */}
                                    <div className="text-sm text-zinc-600 leading-relaxed font-light space-y-4">
                                      {details?.intro1 && <p>{renderContent(details.intro1)}</p>}
                                      {details?.intro2 && <p>{renderContent(details.intro2)}</p>}
                                    </div>

                                    {/* Generic Project List (for Syntonize/ICAI if needed) */}
                                    {details?.projectList && (
                                      <motion.div 
                                      initial={{ y: 20, opacity: 0 }}
                                      animate={{ y: 0, opacity: 1 }}
                                      transition={{ delay: 0.1, duration: 0.5 }}
                                      className="relative p-6 bg-white border border-zinc-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                                    >
                                      <div className="absolute top-0 left-0 w-1 h-full bg-zinc-400"></div>
                                      <div className="flex items-center gap-3 mb-6">
                                        <Sparkles className="w-5 h-5 text-zinc-400" />
                                        <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-900">{details.projectTitle || "Proyectos"}</h4>
                                      </div>
                                      <ul className="space-y-4">
                                        {details.projectList.map((item: string, i: number) => (
                                          <li key={i} className="text-sm text-zinc-600 leading-relaxed font-light pl-4 border-l border-zinc-200">
                                            {renderContent(item)}
                                          </li>
                                        ))}
                                      </ul>
                                    </motion.div>
                                    )}

                                    {/* Robotics Section (Using Wrench) */}
                                    {details?.roboticsSection && (
                                    <motion.div 
                                      initial={{ y: 20, opacity: 0 }}
                                      animate={{ y: 0, opacity: 1 }}
                                      transition={{ delay: 0.1, duration: 0.5 }}
                                      className="relative p-6 bg-white border border-zinc-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                                    >
                                      <div className="absolute top-0 left-0 w-1 h-full bg-zinc-300"></div>
                                      <div className="flex items-center gap-3 mb-6">
                                        <Wrench className="w-5 h-5 text-zinc-400" />
                                        <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-900">{details.roboticsSection.title}</h4>
                                      </div>
                                      
                                      {/* Manipulation */}
                                      {details.roboticsSection.manipulation && (
                                      <div className="mb-8">
                                        <h5 className="text-xs font-bold text-zinc-800 uppercase tracking-widest mb-4">{details.roboticsSection.manipulation.title}</h5>
                                        <ul className="space-y-4">
                                          {details.roboticsSection.manipulation.items?.map((item: string, i: number) => (
                                            <li key={i} className="text-sm text-zinc-600 leading-relaxed font-light pl-4 border-l border-zinc-200">
                                              {renderContent(item)}
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                      )}

                                      {/* Navigation */}
                                      {details.roboticsSection.navigation && (
                                      <div className="mb-8">
                                        <h5 className="text-xs font-bold text-zinc-800 uppercase tracking-widest mb-4">{details.roboticsSection.navigation.title}</h5>
                                        <ul className="space-y-4">
                                          {details.roboticsSection.navigation.items?.map((item: string, i: number) => (
                                            <li key={i} className="text-sm text-zinc-600 leading-relaxed font-light pl-4 border-l border-zinc-200">
                                              {renderContent(item)}
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                      )}

                                      {/* Interfaces */}
                                      {details.roboticsSection.interfaces && (
                                      <div>
                                        <h5 className="text-xs font-bold text-zinc-800 uppercase tracking-widest mb-4">{details.roboticsSection.interfaces.title}</h5>
                                        <ul className="space-y-4">
                                          {details.roboticsSection.interfaces.items?.map((item: string, i: number) => (
                                            <li key={i} className="text-sm text-zinc-600 leading-relaxed font-light pl-4 border-l border-zinc-200">
                                              {renderContent(item)}
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                      )}
                                    </motion.div>
                                    )}

                                    {/* AI Section (Using Sparkles) */}
                                    {details?.aiSection && (
                                    <motion.div 
                                      initial={{ y: 20, opacity: 0 }}
                                      animate={{ y: 0, opacity: 1 }}
                                      transition={{ delay: 0.2, duration: 0.5 }}
                                      className="relative p-6 bg-white border border-zinc-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                                    >
                                      <div className="absolute top-0 left-0 w-1 h-full bg-zinc-900"></div>
                                      <div className="flex items-center gap-3 mb-6">
                                        <Sparkles className="w-5 h-5 text-zinc-400" />
                                        <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-900">{details.aiSection.title}</h4>
                                      </div>
                                      
                                      {/* Generative AI */}
                                      {details.aiSection.generativeAi && (
                                      <div className="mb-8">
                                        <h5 className="text-xs font-bold text-zinc-800 uppercase tracking-widest mb-4">{details.aiSection.generativeAi.title}</h5>
                                        <ul className="space-y-4">
                                          {details.aiSection.generativeAi.items?.map((item: string, i: number) => (
                                            <li key={i} className="text-sm text-zinc-600 leading-relaxed font-light pl-4 border-l border-zinc-200">
                                              {renderContent(item)}
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                      )}

                                      {/* Data Science */}
                                      {details.aiSection.dataScience && (
                                      <div>
                                        <h5 className="text-xs font-bold text-zinc-800 uppercase tracking-widest mb-4">{details.aiSection.dataScience.title}</h5>
                                        <ul className="space-y-4">
                                          {details.aiSection.dataScience.items?.map((item: string, i: number) => (
                                            <li key={i} className="text-sm text-zinc-600 leading-relaxed font-light pl-4 border-l border-zinc-200">
                                              {renderContent(item)}
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                      )}
                                    </motion.div>
                                    )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
                );
              })}
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-40">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="flex items-end justify-end border-b border-zinc-100 pb-4 mb-20"
            >
              <h3 className="text-sm font-bold tracking-[0.3em] text-zinc-400">{t.academicJourney}</h3>
            </motion.div>
            <div className="grid gap-24">
              {education.map((edu: any, index: number) => {
                if (edu.year === '2023') {
                  // Master's degree
                  return (
                    <EducationCard
                      key={index}
                      degree={edu.degree}
                      institution={edu.institution}
                      year={edu.year}
                      intro={t.master.intro}
                      sections={[
                        {
                          title: t.master.thesisTitle,
                          description: t.master.thesisDesc
                        },
                        {
                          title: t.master.contributionsTitle,
                          description: '',
                          items: t.master.contributionsItems
                        }
                      ]}
                      index={index}
                    />
                  );
                } else if (edu.year === '2021') {
                  // Bachelor's degree
                  return (
                    <EducationCard
                      key={index}
                      degree={edu.degree}
                      institution={edu.institution}
                      year={edu.year}
                      intro={t.bachelor.intro1}
                      intro2={t.bachelor.intro2}
                      sections={[
                        {
                          title: t.bachelor.specializationTitle,
                          description: t.bachelor.specializationDesc
                        },
                        {
                          title: t.bachelor.thesisTitle,
                          description: t.bachelor.thesisDesc
                        },
                        {
                          title: t.bachelor.contributionsTitle,
                          description: '',
                          items: t.bachelor.contributionsItems
                        }
                      ]}
                      index={index}
                    />
                  );
                }
                return null;
              })}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="mt-32 pt-20 border-t border-zinc-100"
            >
              <h3 className="text-sm font-bold tracking-[0.3em] mb-12 text-zinc-400 text-right">{t.certificationsTitle}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-100 border border-zinc-100">
                {courses.map((course: any, index: number) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    className="bg-white p-8 flex flex-col justify-between hover:bg-zinc-50 hover:shadow-lg transition-all duration-300"
                  >
                    <span className="text-zinc-900 font-medium mb-4 leading-snug">{course.name}</span>
                    <span className="text-[10px] font-mono text-zinc-300">{course.year}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Skills Section */}
          <section>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="flex items-end justify-end border-b border-zinc-100 pb-4 mb-16"
            >
              <h3 className="text-sm font-bold tracking-[0.3em] text-zinc-400">{t.technicalEcosystem}</h3>
            </motion.div>
            <div className="flex flex-wrap gap-x-12 gap-y-8">
              {skills.map((skill: string, index: number) => (
                <motion.span 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03, duration: 0.5 }}
                  className="text-lg md:text-2xl font-bold text-zinc-300 hover:text-zinc-900 transition-colors duration-500 cursor-default tracking-tighter"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer className="py-20 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-12">Built with Precision • 2026</p>
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
    </div>
  );
}

