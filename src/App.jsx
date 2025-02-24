import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Background3D from './components/Background3D';
import CursorEffect from './components/CursorEffect';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [visitorCount, setVisitorCount] = useState(0);
  const [timeSpent, setTimeSpent] = useState(0);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    // Visitor count
    const count = localStorage.getItem('visitorCount') || 0;
    setVisitorCount(Number(count) + 1);
    localStorage.setItem('visitorCount', Number(count) + 1);
    
    // Time-based animations
    const timer = setInterval(() => {
      setTimeSpent(prev => prev + 1);
    }, 1000);

    // Exit animation
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      setIsLeaving(true);
      return (e.returnValue = '');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    setTimeout(() => setIsLoading(false), 2000);

    return () => {
      clearInterval(timer);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <>
      <CursorEffect />
      <Toaster position="top-center" />
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="text-center"
            >
              <h1 className="text-4xl font-bold text-purple-500 mb-4">
                Welcome Explorer #{visitorCount}
              </h1>
              <p className="text-gray-400">Preparing your unique experience...</p>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative"
          >
            <Background3D timeSpent={timeSpent} />
            <Navbar />
            <Hero visitorCount={visitorCount} />
            <Skills />
            <Projects />
            <Resume />
            <Contact />

            {/* Exit Animation */}
            <AnimatePresence>
              {isLeaving && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0, rotate: 360 }}
                    className="text-center"
                  >
                    <h2 className="text-3xl font-bold text-purple-500 mb-4">
                      Your journey ends here, but we hope to see you again!
                    </h2>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;