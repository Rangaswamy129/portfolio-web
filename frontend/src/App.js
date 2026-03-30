import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import CursorGlow from "./components/CursorGlow";
import Cursor from "./components/Cursor";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

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
         

          <CursorGlow />
          <Cursor />

          <main className="max-w-7xl mx-auto px-6">
            <AnimatePresence mode="wait">
              <Routes>

                {/* PUBLIC ROUTES */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* PROTECTED ROUTES */}
                <Route path="/" element={
                  <ProtectedRoute>
                     <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
                    <Home />
                      <Footer />
                  </ProtectedRoute>
                } />

                <Route path="/about" element={
                  <ProtectedRoute>
                     <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
                    <About />
                      <Footer />
                  </ProtectedRoute>
                } />

                <Route path="/projects" element={
                  <ProtectedRoute>
                     <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
                    <Projects />
                      <Footer />
                  </ProtectedRoute>
                } />

                <Route path="/contact" element={
                  <ProtectedRoute>
                     <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
                    <Contact />
                     <Footer />
                  </ProtectedRoute>
                } />

              </Routes>
            </AnimatePresence>
          </main>
        </Router>
      </div>

    
    </div>
  );
}

export default App;