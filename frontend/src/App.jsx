import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Chatbot from './components/Chatbot';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0a0a0a]">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
          </Routes>
        </main>
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
