import { useState } from 'react';
import { Github, Linkedin, Mail, ChevronDown, Code, Brain, Cpu } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';

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
      role: 'Software Developer @ Digital Hub',
      company: 'Acciona',
      period: 'Present',
      description: 'Design and development of innovative applications, focusing on Generative AI (RAG, Agents, Fine-tuning), Knowledge Graphs, and Robotics Development (Manipulators like UR3/UR10 and Mobile Robots like Spot/Summit-XL). Integration of AI with robotic systems and deployment on GCP.'
    }
  ];

  const education = [
    {
      degree: 'Master\'s Degree in Robotics and Automation',
      institution: 'Universidad Carlos III de Madrid',
      year: '2019-2020',
      details: 'Specialization in mobile robotics, SLAM, and spatial understanding. Thesis: "Simultaneous Localization and Mapping and Segmentation" (SLAMAS).'
    },
    {
      degree: 'Bachelor\'s Degree in Industrial Technologies Engineering',
      institution: 'University of Málaga',
      year: '2015-2019',
      details: 'Specialized in Automation and Electronics. Thesis: "Human-Robot Collaboration Strategy in Endonasal Surgery" (CRANEEAL system).'
    }
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
              Academic Background
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{edu.degree}</CardTitle>
                    <CardDescription>{edu.institution}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-2">{edu.year}</p>
                    <p className="text-sm">{edu.details}</p>
                  </CardContent>
                </Card>
              ))}
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
                <Card key={index}>
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
                    <p className="text-gray-700">{exp.description}</p>
                  </CardContent>
                </Card>
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
