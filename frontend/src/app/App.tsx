import { useState } from 'react';
import { Github, Linkedin, Mail, ChevronDown, Code, Brain, Cpu, BookOpen } from 'lucide-react';
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

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const experience = [
    {
      role: 'Profesor Adjunto de Robótica Móvil',
      company: 'ICAI Comillas',
      period: 'Enero 2026 - Actualidad',
      description: 'Supervisión de sesiones prácticas sobre navegación autónoma, localización y control de sistemas robóticos para alumnos de grado.',
      fullDetails: (
        <p>Supervisión de sesiones prácticas sobre navegación autónoma, localización y control de sistemas robóticos para alumnos de grado.</p>
      )
    },
    {
      role: 'Software Developer',
      company: 'Syntonize',
      period: 'Julio 2025 - Actualidad',
      description: 'Consultoría para la UNIR (Proeduca) en aplicaciones basadas en IA generativa, incluyendo NLP y Marketing Predictivo.',
      fullDetails: (
        <div className="space-y-4">
          <p>Trabajos de consultoría para la UNIR (Proeduca) de aplicaciones basadas en IA generativa.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>NLP y Marketing Predictivo:</strong> Desarrollo de aplicación para la inferencia de perfiles psicográficos (motivaciones, salarios, edad) de alumnos potenciales para optimizar la conversión de leads en UNIR.</li>
            <li>Implementación de un pipeline de análisis de llamadas (Speech-to-Text + LLMs) para evaluar la calidad comercial (auditorías) y extraer perfiles profesionales automáticamente.</li>
            <li>Diseño de una aplicación de IA generativa para recomendación de carreras basada en trayectorias profesionales, desplegada con FastAPI y microservicios en Microsoft Azure.</li>
          </ul>
        </div>
      )
    },
    {
      role: 'Software Developer @ Digital Hub',
      company: 'Acciona',
      period: 'Enero 2023 - Julio 2025',
      description: 'Liderazgo y desarrollo de proyectos de IA generativa, sistemas autónomos y robótica, desde la interacción con clientes hasta la implementación.',
      fullDetails: (
        <div className="space-y-6 text-gray-700 leading-relaxed">
           <p>
              I work as a <strong>Software Developer at Acciona's Digital Hub</strong>, focusing on the <strong>design and development of innovative applications</strong> that bring cutting-edge technologies into real-world business solutions. While my main role is backend development, I've also contributed to frontend tasks across various projects.
            </p>
            <p>
              I've been involved in projects from their earliest stages: gathering requirements directly from clients, analyzing their needs, designing system architectures, planning resources and timelines, and developing the final product. I also participate in follow-up meetings to align progress with client expectations and iteratively improve our solutions.
            </p>
          
          <div>
            <h4 className="font-semibold text-blue-700 mb-3 text-lg flex items-center gap-2">
               <Brain className="w-5 h-5" />
               Artificial Intelligence & Data Science Projects
            </h4>
            <div className="space-y-4 pl-2 border-l-2 border-blue-100 ml-1">
               <p>
                 I've worked on a range of projects applying <strong>Machine Learning</strong> and <strong>Deep Learning</strong> techniques to extract insights, predict behaviors, and support data-driven decisions. My main focus has been on <strong>Generative AI</strong> and <strong>intelligent agent design</strong>, where I build tailored solutions that meet real client needs.
               </p>
               <p>
                 This includes developing customized <strong>RAG (Retrieval-Augmented Generation)</strong> systems with <strong>Human-in-the-Loop</strong> pipelines, creating <strong>autonomous agents</strong> capable of executing Python code, performing live web searches, or analyzing documents across modalities (text, image, tables). I've also designed agents capable of detecting inconsistencies across document bases or finding contradictions based in <strong>Knowledge Graphs</strong>.
               </p>
               <p>
                 I've built agents using frameworks like <strong>LangChain</strong> and <strong>LangGraph</strong>, adapting their architectures to specific workflows and integration needs. I've also worked on applying <strong>Knowledge Graphs</strong> to structure unorganized data into meaningful graph-based relationships—helping define dependencies, enhance semantic search, and support reasoning tasks in larger systems.
               </p>
               <p>
                 Additionally, I've performed <strong>fine-tuning</strong> both locally and in the cloud, applying techniques like <strong>LoRA</strong> and <strong>model quantization</strong>. This includes local fine-tuning of models such as <strong>Deepseek</strong> and <strong>Gemma</strong>, as well as cloud-based fine-tuning of <strong>Gemini 2.0</strong> on Google Cloud Platform. These efforts have allowed me to adapt LLMs to domain-specific needs and optimize their performance for real-world use cases.
               </p>
            </div>
          </div>

          <div>
             <h4 className="font-semibold text-blue-700 mb-3 text-lg flex items-center gap-2">
               <Cpu className="w-5 h-5" />
               Robotics Development
             </h4>
             <div className="space-y-4 pl-2 border-l-2 border-blue-100 ml-1">
               <p>
                 I've worked with a wide range of <strong>robotic platforms</strong> across different domains, including <strong>collaborative manipulators</strong> and <strong>autonomous mobile robots</strong>. My experience includes programming and deploying systems using <strong>UR3</strong> and <strong>UR10</strong> robotic arms, as well as mobile platforms like <strong>Boston Dynamics Spot</strong>, <strong>Summit-XL</strong>, <strong>MiR</strong>, <strong>Bellabot</strong>, and <strong>Kettybot</strong>—each adapted to specific tasks in logistics, inspection, and human-robot interaction.
               </p>
               
               <div className="flex flex-col md:flex-row gap-6 my-4 bg-gray-50 p-4 rounded-xl">
                  <div className="w-full md:w-1/3 shrink-0">
                     <img src="/img/me_spot.jpg" alt="About Me with Spot" className="rounded-lg shadow-md w-full object-cover" />
                  </div>
                  <div className="space-y-4">
                    <p>
                      For robotic arms, I've integrated peripherals such as elevators, conveyors, and custom grippers, creating complex automation workflows. On mobile robots, I've implemented localization systems using <strong>EKF</strong> and <strong>AMCL</strong>, built mission behavior logic through <strong>C++ state machines</strong>, and developed planning systems using SQLite databases for task sequencing and navigation.
                    </p>
                    <p>
                      I've also built web interfaces connected to <strong>ROS</strong> via <strong>ROSBridge</strong> to allow intuitive control and monitoring, enhancing accessibility for operators and non-technical users. Additionally, I've managed field deployments and recovery procedures for real-world use cases, such as autonomous disinfection, event participation, and campus surveillance.
                    </p>
                  </div>
               </div>
             </div>
          </div>
        </div>
      )
    }
  ];

  const education = [
    {
      degree: 'Máster en Robótica y Automatización',
      institution: 'Universidad Carlos III de Madrid',
      year: '2023',
      details: 'Especialización en robótica médica y colaboración humano-robot.',
      fullDetails: (
        <div className="space-y-6">
           <p>
              I earned my <strong>Bachelor's Degree in Industrial Technologies Engineering</strong> at the <strong>University of Málaga</strong>. This multidisciplinary program provided a broad and solid understanding of engineering fundamentals, including <strong>mechanics</strong>, <strong>structural analysis</strong>, <strong>electrical systems</strong>, <strong>thermodynamics</strong>, <strong>fluid dynamics</strong>, and <strong>control theory</strong>.
           </p>
           <p>
              My Master's Thesis, <strong><i>"Simultaneous Localization and Mapping and Segmentation"</i></strong>, focused on <strong>mobile robotics</strong> and spatial understanding. I developed a <strong>SLAM</strong> algorithm capable of <strong>generating 2D and 3D maps</strong> using point cloud registration techniques such as <strong>ICP</strong> and <strong>NDT</strong>, integrated through <strong>pose graphs</strong>.
           </p>
           <div className="grid grid-cols-2 gap-4 my-4">
              <figure className="text-center">
                <img src="/img/slam3d.png" alt="SLAMAS" className="rounded-lg shadow-md border border-gray-100" />
                <figcaption className="text-xs text-gray-500 mt-2">SLAMAS</figcaption>
              </figure>
              <figure className="text-center">
                <img src="/img/segmentation.png" alt="Segmentation" className="rounded-lg shadow-md border border-gray-100" />
                <figcaption className="text-xs text-gray-500 mt-2">Segmentation</figcaption>
              </figure>
           </div>
           <p>
              I implemented a <strong>segmentation pipeline</strong> for <strong>door and room detection</strong> using <strong>computer vision</strong> techniques, including <strong>watershed algorithms</strong> and multi-method fusion for robust detection. These components allowed me to build <strong>topological maps</strong> from geometric data, enabling structured, <strong>high-level navigation for autonomous robots</strong>.
           </p>
        </div>
      )
    },
    {
      degree: 'Grado en Ingeniería en Tecnologías Industriales',
      institution: 'Universidad de Málaga',
      year: '2021',
      details: 'Especialización en automática y robótica móvil.',
      fullDetails: (
        <div className="space-y-6">
           <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="space-y-4 flex-1">
                <p>
                  I earned my <strong>Bachelor's Degree in Industrial Technologies Engineering</strong> at the <strong>University of Málaga</strong>. This multidisciplinary program provided a broad and solid understanding of engineering fundamentals, including <strong>mechanics</strong>, <strong>structural analysis</strong>, <strong>electrical systems</strong>, <strong>thermodynamics</strong>, <strong>fluid dynamics</strong>, and <strong>control theory</strong>.
                </p>
                <p>
                  Beyond the core subjects, the degree emphasized <strong>analytical thinking</strong> and <strong>problem-solving</strong>, equipping me with the ability to understand and model complex systems and to approach challenges from a systemic perspective.
                </p>
                <p>
                  I specialized in the field of <strong>automation</strong> and <strong>electronics</strong>, where I studied <strong>industrial and collaborative robotics</strong>, <strong>computer vision</strong>, <strong>digital and analog electronics</strong>, as well as <strong>machine learning</strong> and <strong>deep learning</strong> techniques applied to intelligent systems.
                </p>
              </div>
              <div className="w-full md:w-1/3 shrink-0">
                  <img src="/img/me_final_thesis.jpg" alt="About Me" className="rounded-lg shadow-lg border border-gray-100 w-full object-cover" />
              </div>
           </div>

           <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
             <p className="text-sm text-blue-900">
                My Bachelor's Thesis, titled <strong><i>"Estrategia de colaboración humano-robot en cirugía endonasal"</i> (Human-Robot Collaboration Strategy in Endonasal Surgery)</strong>, was part of the National Research Plan project <i>"Global Planner for a Robotic System for Anastomosis"</i>. The work contributed to the publication <i><a href="https://www.mdpi.com/1424-8220/21/7/2320" target="_blank" className="underline hover:text-blue-700">"Collaborative Robotic Assistant Platform for Endonasal Surgery: Preliminary In-Vitro Trials"</a></i>.
             </p>
           </div>

            <div className="grid grid-cols-2 gap-4 my-4">
              <figure className="text-center">
                <img src="/img/Craneeal_platform.png" alt='Craneeal platform' className="rounded-lg shadow-md border border-gray-100" />
                <figcaption className="text-xs text-gray-500 mt-2">Craneeal platform</figcaption>
              </figure>
              <figure className="text-center">
                <img src="/img/Craneeal_interface.png" alt='Craneeal interface' className="rounded-lg shadow-md border border-gray-100" />
                <figcaption className="text-xs text-gray-500 mt-2">Craneeal interface</figcaption>
              </figure>
            </div>

            <p>
              The CRANEEAL system consists of <strong>two robotic arms (one autonomous, one teleoperated via haptic interface)</strong>, <strong>force sensors</strong>, and a <strong>ROS-based software architecture</strong> for seamless integration. I designed a <strong>virtual obstacle generation module</strong> to improve surgical safety through <strong>force feedback</strong> and <strong>collision avoidance</strong>.
            </p>
            <p>
              I developed a custom <strong>camera calibration</strong> setup to ensure accurate mapping between 3D environments and 2D vision, using a <strong>3D-printed calibration piece</strong>. For human-robot interaction, I implemented a <strong>state machine</strong> based on an ontology, allowing autonomous and teleoperated mode switching through <strong>computer vision</strong> and <strong>Markov models</strong>.
            </p>
            <p>
              To unify all modules, I built a <strong>web-based interface</strong> that enables real-time monitoring and control, offering intuitive access to the system's autonomous and manual functions.
            </p>
        </div>
      )
    }
  ];

  const courses = [
    { name: 'LangGraph - Develop LLM AI agents with LangGraph', year: '2024' },
    { name: 'LangChain - Develop LLM applications with LangChain', year: '2024' },
    { name: 'Introduction to Monte Carlo Methods', year: '2024' },
    { name: 'Responsive Web Design', year: '2023' },
    { name: 'Iniciación a ROS (Robot Operating System)', year: '2022' }
  ];

  const skills = [
    'Python', 'C++', 'ROS/ROS2', 'TensorFlow', 'PyTorch', 'OpenCV', 
    'SLAM', 'Generative AI', 'Deep Learning', 'Reinforcement Learning',
    'LangChain', 'GCP', 'Docker', 'Linux', 'Git', 'Robot Manipulation'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Cpu className="w-6 h-6 text-blue-600" />
              <span className="font-semibold text-lg">Robótica & IA</span>
            </div>
            <div className="hidden md:flex gap-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                About Me
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Brain className="w-5 h-5 text-blue-600" />
                <span className="text-blue-600">Robotics & AI Engineer</span>
              </div>
              <h1 className="text-5xl mb-6">
                Building the future of intelligent robotics
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Specialized in autonomous systems, computer vision, and machine learning applied to robotics.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Button onClick={() => scrollToSection('about')} className="bg-blue-600 hover:bg-blue-700">
                  Know More
                  <ChevronDown className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" onClick={() => scrollToSection('contact')}>
                  Contact
                </Button>
              </div>
              <div className="flex gap-4 mt-8">
                <a href="https://github.com/Villanua" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/ignacio-villanua-cuenca/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:ignacio.villanua@example.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
                <img 
                  src="/img/me.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-200">
                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="text-sm text-gray-600">Active Projects</div>
                    <div className="font-semibold">2+ on GitHub</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Engineer passionate about the intersection between robotics and artificial intelligence.
            </p>
          </div>

          {/* Education */}
          <div className="mb-16">
            <h3 className="text-2xl mb-8 flex items-center gap-2">
              <div className="w-1 h-8 bg-blue-600 rounded"></div>
              Formación Académica
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <Dialog key={index}>
                  <Card className="h-full flex flex-col">
                    <CardHeader>
                      <CardTitle className="leading-tight text-lg">{edu.degree}</CardTitle>
                      <CardDescription>{edu.institution}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-sm text-gray-600 mb-2">{edu.year}</p>
                      <p className="text-sm text-gray-700">{edu.details}</p>
                    </CardContent>
                    <CardFooter>
                      <DialogTrigger asChild>
                        <Button variant="secondary" size="sm" className="w-full gap-2">
                          <BookOpen className="w-4 h-4" />
                          Ver detalles
                        </Button>
                      </DialogTrigger>
                    </CardFooter>
                  </Card>
                  
                  <DialogContent className="max-w-lg">
                    <DialogHeader>
                      <DialogTitle className="text-xl">{edu.degree}</DialogTitle>
                      <DialogDescription className="text-base text-blue-600">
                        {edu.institution} • {edu.year}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2 text-sm text-gray-900">Detalle del programa y TFG/TFM</h4>
                      <p className="text-gray-600 leading-relaxed text-justify">
                        {edu.fullDetails}
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <BookOpen className="w-4 h-4" />
                    Ver formación completa
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Formación Académica Detallada</DialogTitle>
                    <DialogDescription>
                      Detalle de titulaciones universitarias y cursos complementarios.
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="space-y-6 mt-4">
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold flex items-center gap-2">
                        <div className="w-1 h-6 bg-blue-600 rounded"></div>
                        Titulaciones
                      </h4>
                      {education.map((edu, index) => (
                         <div key={index} className="border-l-2 border-gray-100 pl-4 py-1">
                            <h5 className="font-medium text-gray-900">{edu.degree}</h5>
                            <p className="text-sm text-blue-600 mb-2">{edu.institution} | {edu.year}</p>
                            <p className="text-sm text-gray-600 leading-relaxed">{edu.fullDetails}</p>
                         </div>
                      ))}
                    </div>

                    <div className="space-y-4">
                       <h4 className="text-lg font-semibold flex items-center gap-2">
                        <div className="w-1 h-6 bg-blue-600 rounded"></div>
                        Cursos y Certificaciones
                      </h4>
                      <ul className="grid gap-2">
                        {courses.map((course, index) => (
                          <li key={index} className="flex justify-between items-center text-sm p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            <span className="text-gray-700 font-medium">{course.name}</span>
                            <span className="text-gray-500 text-xs bg-white px-2 py-1 rounded border border-gray-200 shadow-sm">{course.year}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-16">
            <h3 className="text-2xl mb-8 flex items-center gap-2">
              <div className="w-1 h-8 bg-blue-600 rounded"></div>
              Professional Experience
            </h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <Dialog key={index}>
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-start flex-wrap gap-2">
                        <div>
                          <CardTitle>{exp.role}</CardTitle>
                          <CardDescription>{exp.company}</CardDescription>
                        </div>
                        <Badge variant="secondary">{exp.period}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">{exp.description}</p>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="gap-2">
                          <Code className="w-4 h-4" />
                          Ver detalles del puesto
                        </Button>
                      </DialogTrigger>
                    </CardContent>
                  </Card>
                  
                  <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-xl flex items-center gap-2">
                        {exp.role} 
                        <span className="text-gray-400 font-normal text-base">at</span> 
                        <span className="text-blue-600">{exp.company}</span>
                      </DialogTitle>
                      <DialogDescription>
                        {exp.period}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-4 text-gray-700">
                      {exp.fullDetails}
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl mb-8 flex items-center gap-2">
              <div className="w-1 h-8 bg-blue-600 rounded"></div>
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <Badge key={index} variant="outline" className="px-4 py-2 text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl mb-6">Let's Work Together</h2>
          <p className="text-xl text-gray-600 mb-8">
            Interested in collaborating on robotics or AI projects? Feel free to contact me.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="mailto:ignacio.villanua@example.com">
              <Button className="bg-blue-600 hover:bg-blue-700 gap-2">
                <Mail className="w-4 h-4" />
                Send Email
              </Button>
            </a>
            <a href="https://linkedin.com/in/ignacio-villanua-cuenca/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Button>
            </a>
            <a href="https://github.com/Villanua" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2">
                <Github className="w-4 h-4" />
                GitHub
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center text-gray-600">
          <p>© 2026 Robotics & AI Engineer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
