import { motion } from 'framer-motion';
import { Cpu, Github, Linkedin, Mail, BookOpen, Code, ChevronLeft } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { Link } from 'react-router-dom';

export default function FullAboutMe({ education, experience, courses, skills }: any) {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-md z-50 border-b border-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Cpu className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-sm tracking-tighter uppercase">N. Villanúa</span>
            </Link>
            <Link to="/">
              <Button variant="ghost" className="text-[10px] uppercase tracking-widest font-bold hover:bg-zinc-50 rounded-none px-6">
                <ChevronLeft className="w-3 h-3 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-40 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <section className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-12">Full Trajectory</h1>
              <p className="text-xl text-zinc-500 max-w-2xl leading-relaxed font-light">
                A detailed overview of my academic background, professional path, and the technical ecosystem I've built through years of engineering.
              </p>
            </motion.div>
          </section>

          {/* Experience Section */}
          <section className="mb-40">
            <div className="flex items-end justify-between border-b border-zinc-100 pb-4 mb-12">
              <h2 className="text-2xl font-bold tracking-tight">Professional Path</h2>
              <span className="text-[10px] text-zinc-400 uppercase tracking-widest">01 / Experience</span>
            </div>
            <div className="space-y-1">
              {experience.map((exp: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="group py-16 border-b border-zinc-50 last:border-0 hover:bg-zinc-50/50 transition-colors px-6 -mx-6">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
                      <div>
                        <h3 className="text-3xl font-medium tracking-tight mb-2 group-hover:translate-x-2 transition-transform duration-500">{exp.role}</h3>
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">{exp.company}</span>
                          <span className="w-1 h-1 bg-zinc-200 rounded-full"></span>
                          <span className="text-xs font-mono text-zinc-400">{exp.period}</span>
                        </div>
                      </div>
                    </div>
                    <div className="prose prose-zinc max-w-4xl text-zinc-500 font-light leading-relaxed">
                      {exp.fullDetails}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-40">
            <div className="flex items-end justify-between border-b border-zinc-100 pb-4 mb-20">
              <h2 className="text-2xl font-bold tracking-tight">Academic Journey</h2>
              <span className="text-[10px] text-zinc-400 uppercase tracking-widest">02 / Education</span>
            </div>
            <div className="grid gap-24">
              {education.map((edu: any, index: number) => (
                <div key={index} className="grid md:grid-cols-3 gap-12">
                  <div className="space-y-4">
                    <span className="text-[10px] font-mono text-zinc-400 italic block">{edu.year}</span>
                    <h3 className="text-xl font-bold tracking-tight leading-tight">{edu.degree}</h3>
                    <p className="text-sm uppercase tracking-widest font-semibold text-zinc-400">{edu.institution}</p>
                  </div>
                  <div className="md:col-span-2 prose prose-zinc text-zinc-500 font-light leading-relaxed">
                    {edu.fullDetails}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-32 pt-20 border-t border-zinc-100">
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] mb-12 text-zinc-400">Certifications & Courses</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-100 border border-zinc-100">
                {courses.map((course: any, index: number) => (
                  <div key={index} className="bg-white p-8 flex flex-col justify-between hover:bg-zinc-50 transition-colors">
                    <span className="text-zinc-900 font-medium mb-4 leading-snug">{course.name}</span>
                    <span className="text-[10px] font-mono text-zinc-300">{course.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section>
            <div className="flex items-end justify-between border-b border-zinc-100 pb-4 mb-16">
              <h2 className="text-2xl font-bold tracking-tight">Technical Ecosystem</h2>
              <span className="text-[10px] text-zinc-400 uppercase tracking-widest">03 / Skills</span>
            </div>
            <div className="flex flex-wrap gap-x-12 gap-y-8">
              {skills.map((skill: string, index: number) => (
                <span 
                  key={index} 
                  className="text-4xl md:text-6xl font-bold text-zinc-100 hover:text-zinc-900 transition-colors duration-500 cursor-default tracking-tighter"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer className="py-20 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-12">Built with Precision • 2026</p>
          <div className="flex justify-center gap-12">
            <a href="https://github.com/Villanua" className="text-zinc-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            <a href="https://linkedin.com/in/ignacio-villanua-cuenca/" className="text-zinc-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="mailto:ignacio.villanua@example.com" className="text-zinc-500 hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

