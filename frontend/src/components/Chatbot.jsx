import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, X, Bot } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Hello! I am Ada, Nacho\'s AI assistant. How can I help you today?' }
  ]);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        text: `You asked about "${input}". As Nacho's assistant, I can tell you he is highly skilled in Robotics and Generative AI. This is a demo response.` 
      }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Pulsing Trigger */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="relative bg-[#dfb011] p-4 rounded-full shadow-2xl text-black hover:scale-110 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="absolute inset-0 rounded-full animate-ping bg-[#dfb011] opacity-20"></div>
        <MessageSquare size={24} />
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="absolute bottom-20 right-0 w-[350px] max-w-[90vw] h-[500px] bg-[#141414] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-[#dfb011] p-4 flex items-center justify-between text-black">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-sm">AI Assistant Ada</h3>
                  <p className="text-[10px] opacity-80 font-medium">Powering Nacho's Portfolio</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:bg-black/10 p-1 rounded-md transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    m.role === 'user' 
                    ? 'bg-[#dfb011] text-black font-medium' 
                    : 'bg-white/5 text-gray-300 border border-white/10'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-white/10 bg-black/40">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-gray-300 focus:outline-none focus:border-[#dfb011] transition-colors"
                />
                <button
                  onClick={handleSend}
                  className="bg-[#dfb011] p-2 rounded-xl text-black hover:opacity-90 transition-opacity"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;
