import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, X, Bot } from 'lucide-react';

export default function Chatbot() {
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
}
