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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2">
              <Cpu className="w-6 h-6 text-blue-600" />
              <span className="font-semibold text-lg">Robótica & IA</span>
            </Link>
            <Link to="/">
              <Button variant="ghost" className="gap-2">
                <ChevronLeft className="w-4 h-4" />
                Volver al Inicio
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-black text-gray-900 mb-6">Trayectoria Completa</h1>
              <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
                Aquí encontrarás todo el detalle de mi formación académica, experiencia profesional y las habilidades técnicas que he desarrollado a lo largo de mi carrera en el mundo de la ingeniería.
              </p>
            </motion.div>
          </section>

          {/* Education Section */}
          <section className="mb-24">
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
              <div className="w-2 h-10 bg-blue-600 rounded"></div>
              Educación & Formación
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {education.map((edu: any, index: number) => (
                <Card key={index} className="border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline" className="text-blue-600 border-blue-100">{edu.year}</Badge>
                    </div>
                    <CardTitle className="text-2xl">{edu.degree}</CardTitle>
                    <CardDescription className="text-blue-600 font-medium">{edu.institution}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-50 p-4 rounded-xl text-gray-700 leading-relaxed">
                      {edu.fullDetails}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                Cursos & Certificaciones Adicionales
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {courses.map((course: any, index: number) => (
                  <div key={index} className="bg-white p-4 rounded-xl border border-gray-100 flex justify-between items-center shadow-sm">
                    <span className="text-gray-800 font-medium text-sm">{course.name}</span>
                    <span className="text-gray-400 text-xs">{course.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="mb-24">
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
              <div className="w-2 h-10 bg-blue-600 rounded"></div>
              Experiencia Profesional
            </h2>
            <div className="space-y-8">
              {experience.map((exp: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-gray-100 overflow-hidden">
                    <div className="bg-blue-600 h-1 w-full" />
                    <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                      <div>
                        <CardTitle className="text-2xl font-bold">{exp.role}</CardTitle>
                        <CardDescription className="text-blue-600 text-lg font-medium">{exp.company}</CardDescription>
                      </div>
                      <Badge className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-none">{exp.period}</Badge>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <div className="prose prose-blue max-w-none text-gray-700">
                        {exp.fullDetails}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section>
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
              <div className="w-2 h-10 bg-blue-600 rounded"></div>
              Ecosistema Técnico
            </h2>
            <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-white">
              <div className="flex flex-wrap gap-4">
                {skills.map((skill: string, index: number) => (
                  <Badge 
                    key={index} 
                    className="bg-white/10 hover:bg-white/20 text-white border-white/10 px-6 py-3 text-lg font-light rounded-full transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500 mb-6">© 2026 Nacho Villanúa. Robotics & AI Engineer.</p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/Villanua" className="text-gray-400 hover:text-blue-600 transition-colors"><Github className="w-6 h-6" /></a>
            <a href="https://linkedin.com/in/ignacio-villanua-cuenca/" className="text-gray-400 hover:text-blue-600 transition-colors"><Linkedin className="w-6 h-6" /></a>
            <a href="mailto:ignacio.villanua@example.com" className="text-gray-400 hover:text-blue-600 transition-colors"><Mail className="w-6 h-6" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
