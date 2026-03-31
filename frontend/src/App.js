import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import CursorGlow from "./components/CursorGlow";
import Cursor from "./components/Cursor";
import Footer from "./components/Footer";


// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-50 dark:bg-[#0f172a] text-slate-900 dark:text-slate-100 selection:bg-blue-500/30">
        <Router>
          <ScrollToTop />
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
           
      <CursorGlow />
      {/* your routes/components */}
       <Cursor />
      {/* your routes */}
       
    
          <main className="max-w-7xl mx-auto px-6">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </AnimatePresence>
          </main>
        </Router>
      </div>
        <Footer />
    </div>
  );
}

export default App;  