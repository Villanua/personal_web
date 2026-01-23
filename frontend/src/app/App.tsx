import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown, Code, Brain, Cpu, BookOpen, MessageSquare, Send, X, Bot } from 'lucide-react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import FullAboutMe from './FullAboutMe';
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

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "Hello! I'm N.V. Assistant. How can I help you today?" }
  ]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        text: "I am a demonstration of Nacho's engineering stack. He specializes in Robotics, AI, and Software Architecture. Feel free to explore his trajectory." 
      }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <motion.button
        onClick={() => setIsOpen(true)}
        className="w-14 h-14 bg-zinc-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform relative group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageSquare className="w-6 h-6" />
        <span className="absolute right-full mr-4 bg-zinc-900 text-white text-[10px] uppercase tracking-[0.3em] py-2 px-4 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity rounded-none pointer-events-none">
          Inquiry Assistant
        </span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-80 md:w-96 bg-white border border-zinc-100 shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="bg-zinc-900 text-white p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bot className="w-4 h-4 text-zinc-400" />
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold">N.V. Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform duration-300">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="h-96 overflow-y-auto p-6 space-y-6 bg-zinc-50/30">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 text-sm leading-relaxed ${
                    m.role === 'user' 
                    ? 'bg-zinc-900 text-white font-light' 
                    : 'bg-white border border-zinc-100 text-zinc-600 font-light'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            <div className="p-4 bg-white border-t border-zinc-100">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask anything..."
                  className="flex-1 bg-zinc-50 border-none px-4 py-3 text-sm focus:ring-1 ring-zinc-200 outline-none transition-all placeholder:text-zinc-300 font-light"
                />
                <button 
                  onClick={handleSend}
                  className="w-12 h-12 bg-zinc-900 text-white flex items-center justify-center hover:bg-black transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["Robotics", "AI", "Software Development"];
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
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
        <div className="space-y-6 text-zinc-500 font-light leading-relaxed">
           <p>
              I work as a <strong>Software Developer at Acciona's Digital Hub</strong>, focusing on the <strong>design and development of innovative applications</strong> that bring cutting-edge technologies into real-world business solutions. While my main role is backend development, I've also contributed to frontend tasks across various projects.
            </p>
            <p>
              I've been involved in projects from their earliest stages: gathering requirements directly from clients, analyzing their needs, designing system architectures, planning resources and timelines, and developing the final product. I also participate in follow-up meetings to align progress with client expectations and iteratively improve our solutions.
            </p>
          
          <div>
            <h4 className="font-semibold text-zinc-900 mb-4 text-lg flex items-center gap-2 tracking-tight">
               <Brain className="w-5 h-5" />
               Artificial Intelligence & Data Science Projects
            </h4>
            <div className="space-y-4 pl-4 border-l border-zinc-200 ml-1">
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
             <h4 className="font-semibold text-zinc-900 mb-4 text-lg flex items-center gap-2 tracking-tight">
               <Cpu className="w-5 h-5" />
               Robotics Development
             </h4>
             <div className="space-y-4 pl-4 border-l border-zinc-200 ml-1">
               <p>
                 I've worked with a wide range of <strong>robotic platforms</strong> across different domains, including <strong>collaborative manipulators</strong> and <strong>autonomous mobile robots</strong>. My experience includes programming and deploying systems using <strong>UR3</strong> and <strong>UR10</strong> robotic arms, as well as mobile platforms like <strong>Boston Dynamics Spot</strong>, <strong>Summit-XL</strong>, <strong>MiR</strong>, <strong>Bellabot</strong>, and <strong>Kettybot</strong>—each adapted to specific tasks in logistics, inspection, and human-robot interaction.
               </p>
               
               <div className="flex flex-col md:flex-row gap-6 my-4 bg-zinc-50 p-6 border border-zinc-100">
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
                <img src="/img/slam3d.png" alt="SLAMAS" className="shadow-2xl border border-zinc-100" />
                <figcaption className="text-[10px] text-zinc-400 mt-2 uppercase tracking-widest">SLAMAS</figcaption>
              </figure>
              <figure className="text-center">
                <img src="/img/segmentation.png" alt="Segmentation" className="shadow-2xl border border-zinc-100" />
                <figcaption className="text-[10px] text-zinc-400 mt-2 uppercase tracking-widest">Segmentation</figcaption>
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
                  <img src="/img/me_final_thesis.jpg" alt="About Me" className="shadow-2xl border border-zinc-100 w-full object-cover" />
              </div>
           </div>

           <div className="bg-zinc-50/50 p-6 border border-zinc-100">
             <p className="text-sm text-zinc-900 font-light leading-relaxed">
                My Bachelor's Thesis, titled <strong><i>"Estrategia de colaboración humano-robot en cirugía endonasal"</i> (Human-Robot Collaboration Strategy in Endonasal Surgery)</strong>, was part of the National Research Plan project <i>"Global Planner for a Robotic System for Anastomosis"</i>. The work contributed to the publication <i><a href="https://www.mdpi.com/1424-8220/21/7/2320" target="_blank" className="underline hover:text-zinc-600 transition-colors">"Collaborative Robotic Assistant Platform for Endonasal Surgery: Preliminary In-Vitro Trials"</a></i>.
             </p>
           </div>

            <div className="grid grid-cols-2 gap-4 my-4">
              <figure className="text-center">
                <img src="/img/Craneeal_platform.png" alt='Craneeal platform' className="shadow-2xl border border-zinc-100" />
                <figcaption className="text-[10px] text-zinc-400 mt-2 uppercase tracking-widest">Craneeal platform</figcaption>
              </figure>
              <figure className="text-center">
                <img src="/img/Craneeal_interface.png" alt='Craneeal interface' className="shadow-2xl border border-zinc-100" />
                <figcaption className="text-[10px] text-zinc-400 mt-2 uppercase tracking-widest">Craneeal interface</figcaption>
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
    <Routes>
      <Route path="/about" element={
        <FullAboutMe 
          education={education} 
          experience={experience} 
          courses={courses} 
          skills={skills} 
        />
      } />
      <Route path="/" element={
        <div className="min-h-screen bg-white">
          {/* Navigation */}
          <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-md z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-20">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center">
                    <Cpu className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-bold text-sm tracking-tighter uppercase">N. Villanúa</span>
                </div>
                <div className="hidden md:flex gap-10">
                  <button 
                    onClick={() => scrollToSection('home')}
                    className="text-[13px] font-medium text-zinc-500 hover:text-zinc-900 transition-colors uppercase tracking-widest"
                  >
                    Home
                  </button>
                  <Link 
                    to="/about"
                    className="text-[13px] font-medium text-zinc-500 hover:text-zinc-900 transition-colors uppercase tracking-widest"
                  >
                    Trajectory
                  </Link>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="text-[13px] font-medium text-zinc-500 hover:text-zinc-900 transition-colors uppercase tracking-widest"
                  >
                    Contact
                  </button>
                </div>
              </div>
            </div>
          </nav>

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
                  Robotics & AI Engineer
                </span>
              </motion.div>
              
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-5xl md:text-9xl font-bold mb-4 text-zinc-900 tracking-tighter">
                  Building 
                </h1>
                <div className="h-24 md:h-40 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentWordIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="text-4xl md:text-9xl font-bold text-zinc-400 italic tracking-tighter text-center px-4"
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
                  <h2 className="text-xs font-bold text-zinc-400 uppercase tracking-[0.2em] mb-8">Background</h2>
                  <div className="space-y-8 text-xl text-zinc-600 leading-relaxed font-light">
                    <p>
                      I'm <span className="text-zinc-900 font-medium">Nacho Villanúa</span>, a Robotics & AI Engineer focused on building systems that perceive and interact with reality.
                    </p>
                    <p>
                      My work explores the synergy between <span className="font-normal text-zinc-900 hover:text-zinc-500 transition-colors cursor-default underline decoration-zinc-200 underline-offset-8">Autonomous Systems</span> and <span className="font-normal text-zinc-900 hover:text-zinc-500 transition-colors cursor-default underline decoration-zinc-200 underline-offset-8">Generative AI</span>.
                    </p>
                    <p className="text-base text-zinc-400">
                      Con experiencia en entornos tanto de investigación como industriales, disfruto enfrentándome a desafíos que requieren una mezcla de rigor matemático e ingeniería creativa.
                    </p>
                  </div>
                  <div className="mt-12">
                    <Link to="/about">
                      <Button variant="outline" className="rounded-none border-zinc-900 px-8 py-6 text-xs uppercase tracking-widest hover:bg-zinc-900 hover:text-white transition-all duration-300">
                        View Full Trajectory
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
                  <div className="flex items-end justify-between border-b border-zinc-100 pb-4">
                    <h3 className="text-2xl font-bold text-zinc-900 tracking-tight">Professional Experience</h3>
                    <span className="text-[10px] text-zinc-400 uppercase tracking-widest">01 / Experience</span>
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
                          <p className="text-sm text-zinc-500 leading-relaxed font-light">{exp.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education Summary */}
                <div className="space-y-12">
                  <div className="flex items-end justify-between border-b border-zinc-100 pb-4">
                    <h3 className="text-2xl font-bold text-zinc-900 tracking-tight">Academic Formation</h3>
                    <span className="text-[10px] text-zinc-400 uppercase tracking-widest">02 / Education</span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    {education.map((edu, index) => (
                      <div key={index} className="p-8 bg-zinc-50/50 border border-zinc-100/50 hover:bg-zinc-50 transition-colors flex flex-col justify-between group">
                        <div className="space-y-4">
                          <span className="text-[10px] text-zinc-400 font-mono italic bg-white px-2 py-1 border border-zinc-100 inline-block">{edu.year}</span>
                          <h4 className="text-xl font-bold text-zinc-900 leading-tight group-hover:translate-x-1 transition-transform duration-300">{edu.degree}</h4>
                          <p className="text-sm text-zinc-500 font-medium uppercase tracking-wider">{edu.institution}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 bg-zinc-900 text-white overflow-hidden relative">
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <span className="text-[10px] text-zinc-500 uppercase tracking-[0.5em] mb-8 block">Project Inquiry</span>
              <h2 className="text-4xl md:text-7xl font-bold mb-12 tracking-tighter text-white">Let's create something meaningful.</h2>
              
              <div className="flex flex-col md:flex-row justify-center items-center gap-12">
                <a href="mailto:ignacio.villanua@example.com" className="group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300">
                      <Mail className="w-5 h-5 text-white group-hover:text-black transition-colors" />
                    </div>
                    <span className="text-lg font-medium border-b border-zinc-700 group-hover:border-white transition-colors pb-1 uppercase tracking-widest text-[13px]">Email Me</span>
                  </div>
                </a>
                <div className="flex gap-8">
                  <a href="https://linkedin.com/in/ignacio-villanua-cuenca/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="https://github.com/Villanua" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-zinc-900 border-t border-zinc-800">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest">© 2026 Nacho Villanúa</span>
              <div className="flex gap-8">
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Madrid, ES</span>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Built with precision</span>
              </div>
            </div>
          </footer>
          <Chatbot />
        </div>
      } />
    </Routes>
  );
}
