import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <div className="pt-24 min-h-screen bg-[radial-gradient(circle_at_0%_0%,rgba(199,162,0,0.06)_5%,#0f0a00)] text-white font-roboto font-thin">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* General Description */}
        <section 
          id="general-description"
          className="min-h-[90vh] flex flex-col md:flex-row items-center justify-between gap-16 py-20 bg-blend-soft-light"
          style={{
             background: 'radial-gradient(circle at 75% 60%, rgba(199, 162, 0, 0.06), #0f0a00)'
          }}
        >
          <motion.div 
            className="flex-1 max-w-2xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold-light text-xl mb-4 font-light">Hello Everyone!</p>
            <h1 className="text-6xl md:text-8xl font-normal text-white mb-12 leading-tight">I'm Nacho Villanúa</h1>
            <p className="text-xl md:text-2xl leading-relaxed mb-8 font-light text-gray-200">
              I'm a <strong className="text-white font-normal">Robotics & AI engineer</strong>, passionate about continuous learning. My love for mathematics and physics, along with a deep curiosity about how the world works, has driven me to take on the exciting challenges of robotics and artificial intelligence.
            </p>
            <p className="text-xl md:text-2xl leading-relaxed font-light text-gray-200">
              I specialize in <strong className="text-white font-normal">software development</strong> for robotic platforms and AI-powered applications, with a strong focus on Generative AI and intelligent agents.
            </p>
          </motion.div>
          <motion.div 
            className="w-full md:w-[450px] relative shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="/img/me.png" 
              alt="Nacho Villanúa" 
              className="w-full h-auto rounded-none shadow-2xl"
              style={{ boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}
            />
          </motion.div>
        </section>

        {/* Professional Experience */}
        <section 
          className="py-24"
            style={{
             background: 'radial-gradient(circle at 0% 30%, rgba(187, 131, 0, 0.08) 0%, #0c0700 100%)',
             backgroundBlendMode: 'soft-light'
          }}
        >
          <motion.h2 
            className="text-4xl font-normal text-white mb-20 border-b border-white/20 pb-6 inline-block w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Professional Experience
          </motion.h2>

          <div className="space-y-20">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                <h3 className="text-3xl font-bold text-white">Acciona</h3>
                <span className="text-gold-medium text-xl font-light border-l border-gold-medium/30 pl-6">Software Developer @ Digital Hub</span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-16 text-lg text-gray-200 font-light">
                <div className="space-y-6">
                  <h4 className="text-2xl font-normal text-white flex items-center gap-3 mb-6">
                    Artificial Intelligence & Data Science
                  </h4>
                  <p>
                    Specializing in <strong className="text-white font-normal">Generative AI</strong> and <strong className="text-white font-normal">intelligent agent design</strong>. I build RAG systems with Human-in-the-Loop pipelines and autonomous agents.
                  </p>
                  <p>
                    Expertise in <strong className="text-white font-normal">Knowledge Graphs</strong> and <strong className="text-white font-normal">Fine-Tuning</strong> (LoRA, Quantization) of models like DeepSeek, Gemma, and Gemini on GCP.
                  </p>
                </div>
                <div className="space-y-6">
                  <h4 className="text-2xl font-normal text-white flex items-center gap-3 mb-6">
                    Robotics Development
                  </h4>
                  <p>
                    Experience with <strong className="text-white font-normal">collaborative manipulators</strong> (UR3, UR10) and mobile robots (Spot, Summit-XL). Integrated localization systems and C++ state machines.
                  </p>
                </div>
              </div>
              
              <div className="mt-16 flex justify-center">
                <img src="/img/me_spot.jpg" alt="Working with Spot" className="rounded-lg shadow-2xl max-h-[400px] w-auto opacity-90 hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Academic Background */}
        <section 
          className="py-24"
           style={{
             background: 'radial-gradient(circle at 40% 30%, rgba(187, 131, 0, 0.08) 50%, #0f0a00 100%)',
             backgroundBlendMode: 'soft-light'
          }}
        >
          <motion.h2 
            className="text-4xl font-normal text-white mb-20 border-b border-white/20 pb-6 inline-block w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Academic Background
          </motion.h2>

          <div className="space-y-32 max-w-6xl mx-auto">
            {/* Bachelor's */}
            <div>
              <h3 className="text-3xl font-normal text-white mb-2">Industrial Technologies Engineering</h3>
              <p className="text-gold-light/80 text-lg mb-10 italic font-light">University of Málaga</p>
              
              <div className="grid md:grid-cols-2 gap-16 items-start">
                <div className="space-y-6 text-lg text-gray-200 font-light">
                  <p>
                    Solid foundation in mechanics, control theory, and electronics. Specialized in <strong className="text-white font-normal">automation</strong> and industrial robotics.
                  </p>
                  <p>
                    Bachelor's Thesis: <strong className="text-white font-normal">"Human-Robot Collaboration Strategy in Endonasal Surgery"</strong>.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <figure className="text-center">
                    <img src="/img/Craneeal_platform.png" alt="Craneeal platform" className="rounded shadow-lg w-full" />
                    <figcaption className="text-sm text-gray-400 mt-2 font-light">Craneeal Platform</figcaption>
                  </figure>
                  <figure className="text-center">
                    <img src="/img/Craneeal_interface.png" alt="Craneeal interface" className="rounded shadow-lg w-full" />
                    <figcaption className="text-sm text-gray-400 mt-2 font-light">Control Interface</figcaption>
                  </figure>
                </div>
              </div>
            </div>

            {/* Master's */}
            <div>
               <h3 className="text-3xl font-normal text-white mb-2">Master's Degree in Robotics and Automation</h3>
              <p className="text-gold-light/80 text-lg mb-10 italic font-light">Universidad Carlos III de Madrid</p>
              
               <div className="grid md:grid-cols-2 gap-16 items-start">
                  <div className="grid grid-cols-2 gap-4 order-last md:order-first">
                    <figure className="text-center">
                      <img src="/img/slam3d.png" alt="SLAM 3D" className="rounded shadow-lg w-full" />
                      <figcaption className="text-sm text-gray-400 mt-2 font-light">SLAMAS</figcaption>
                    </figure>
                    <figure className="text-center">
                      <img src="/img/segmentation.png" alt="Segmentation" className="rounded shadow-lg w-full" />
                      <figcaption className="text-sm text-gray-400 mt-2 font-light">Segmentation</figcaption>
                    </figure>
                  </div>
                <div className="space-y-6 text-lg text-gray-200 font-light">
                  <p>
                    Master's Thesis: <strong className="text-white font-normal">"Simultaneous Localization and Mapping and Segmentation" (SLAMAS)</strong>.
                  </p>
                  <p>
                    Developed a specialized SLAM algorithm for 3D map generation using ICP/NDT point cloud registration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;

