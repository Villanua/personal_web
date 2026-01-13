import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github } from 'lucide-react';

const Home = () => {
  const lights = [
    { id: 1, duration: 4, scale: 1.0, left: '0%' },
    { id: 2, duration: 7, scale: 1.6, left: '15%' },
    { id: 3, duration: 2.5, scale: 0.5, left: '-15%' },
    { id: 4, duration: 4.5, scale: 1.2, left: '-34%' },
    { id: 5, duration: 8, scale: 2.2, left: '-57%' },
    { id: 6, duration: 3, scale: 0.8, left: '-81%' },
    { id: 7, duration: 5.3, scale: 3.2, left: '37%' },
    { id: 8, duration: 4.7, scale: 1.7, left: '62%' },
    { id: 9, duration: 4.1, scale: 0.9, left: '85%' },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-home-gradient">
      {/* Animated Lights Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {lights.map((light) => (
          <motion.div
            key={light.id}
            className="absolute bg-[#dfb011] rounded-full"
            style={{
              width: '2px',
              height: '2px',
              left: `calc(50% + ${light.left})`,
              boxShadow: '0 0 15px 2px #dfb011',
              scale: light.scale,
            }}
            initial={{ y: '100vh', opacity: 0 }}
            animate={{
              y: '-100vh',
              opacity: [0, 1, 0.8, 1, 0],
            }}
            transition={{
              duration: light.duration,
              repeat: Infinity,
              ease: "linear",
              times: [0, 0.25, 0.5, 0.75, 1]
            }}
          />
        ))}
      </div>

      <div className="z-10 text-center px-4 font-roboto font-thin">
        <motion.h1 
          className="text-4xl md:text-8xl text-white mb-2 tracking-wider font-thin"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome!
        </motion.h1>
        <motion.h2 
          className="text-xl md:text-3xl text-gray-200 mb-1 font-thin"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          This is a space of
        </motion.h2>
        <motion.h3 
          className="text-2xl md:text-5xl font-normal text-gold-medium tracking-tight mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Robotics and AI Engineering
        </motion.h3>
      </div>

      <footer className="absolute bottom-10 z-10 w-full">
        <div className="flex justify-center space-x-8">
          <motion.a 
            href="https://www.linkedin.com/in/ignacio-villanua-cuenca/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-white transition-opacity hover:opacity-80"
            whileHover={{ scale: 1.1 }}
          >
            <Linkedin size={32} strokeWidth={1.5} />
          </motion.a>
          <motion.a 
            href="https://github.com/Villanua" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-white transition-opacity hover:opacity-80"
            whileHover={{ scale: 1.1 }}
          >
            <Github size={32} strokeWidth={1.5} />
          </motion.a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
