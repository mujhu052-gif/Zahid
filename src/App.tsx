import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { Portfolio } from './pages/Portfolio';
import { Contact } from './pages/Contact';
import { 
  Facebook, 
  Instagram, 
  Youtube, 
  Smartphone, 
  MessageCircle, 
  Zap 
} from 'lucide-react';

const BackgroundIcons = () => {
  const icons = [
    <Facebook className="w-4 h-4" />,
    <Youtube className="w-4 h-4" />,
    <Instagram className="w-4 h-4" />,
    <Smartphone className="w-4 h-4" />,
    <MessageCircle className="w-4 h-4" />,
  ];

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + '%', 
              y: Math.random() * 100 + '%',
              opacity: 0 
            }}
            animate={{ 
              x: [null, Math.random() * 100 + '%'], 
              y: [null, Math.random() * 100 + '%'],
              opacity: [0, 0.4, 0],
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 15 + Math.random() * 25, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute"
          >
            <div className="p-1.5 glass rounded-lg border border-white/10">
              {icons[i % icons.length]}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-700/20 rounded-full blur-[100px]"></div>
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-purple-600/15 rounded-full blur-[80px]"></div>
      </div>
    </>
  );
};

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <BackgroundIcons />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}
