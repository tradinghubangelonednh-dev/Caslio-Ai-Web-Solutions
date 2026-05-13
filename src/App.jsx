import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import IntroLoader from './components/IntroLoader.jsx';

import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Solutions from './pages/Solutions.jsx';
import Work from './pages/Work.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

/* BLOG PAGES */
import Blog from './pages/Blog.jsx';
import BlogPost from './pages/BlogPost.jsx';

function PageShell({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.main>
  );
}

export default function App() {
  const location = useLocation();
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white text-navy antialiased">
      <IntroLoader show={showIntro} />

      <ScrollToTop />
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageShell>
                <Home />
              </PageShell>
            }
          />

          <Route
            path="/services"
            element={
              <PageShell>
                <Services />
              </PageShell>
            }
          />

          <Route
            path="/solutions"
            element={
              <PageShell>
                <Solutions />
              </PageShell>
            }
          />

          <Route
            path="/work"
            element={
              <PageShell>
                <Work />
              </PageShell>
            }
          />

          <Route
            path="/about"
            element={
              <PageShell>
                <About />
              </PageShell>
            }
          />

          <Route
            path="/contact"
            element={
              <PageShell>
                <Contact />
              </PageShell>
            }
          />

          {/* BLOG ROUTES */}

          <Route
            path="/blog"
            element={
              <PageShell>
                <Blog />
              </PageShell>
            }
          />

          <Route
            path="/blog/:slug"
            element={
              <PageShell>
                <BlogPost />
              </PageShell>
            }
          />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  );
}