import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, MessageCircle, Zap, Facebook, Instagram, Youtube, Smartphone } from 'lucide-react';
import { services } from '../constants';
import { ServiceDetail } from '../types';

// Extract components from original App.tsx logic...
const ImpactSlideshow = () => {
  const images = [
    { url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113", title: "Social Media Management", label: "Core Service" },
    { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f", title: "Data-Driven Viral Growth", label: "Algorithmic Insights" },
    { url: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0", title: "Content Creation Lab", label: "Visual Authority" },
    { url: "https://images.unsplash.com/photo-1551434678-e076c223a692", title: "Strategic Campaigns", label: "Market Dominance" },
    { url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0", title: "Brand Optimization", label: "Identity Scale" },
    { url: "https://images.unsplash.com/photo-1557838923-2985c318be48", title: "Ad Placement Strategy", label: "ROI Focused" },
    { url: "https://images.unsplash.com/photo-1552664730-d307ca884978", title: "Consultancy & Planning", label: "Global Standards" },
    { url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f", title: "Creative Direction", label: "Next-Gen Media" },
    { url: "https://images.unsplash.com/photo-1533750349088-cd871a92f312", title: "Full Scale Deployment", label: "Execution Peak" },
    { url: "https://images.unsplash.com/photo-1626785774573-4b799315345d", title: "WHS Social Media Power", label: "Engineered Success" }
  ];

  const [index, setIndex] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-[350px] sm:h-[500px] md:h-[600px] overflow-hidden rounded-[2rem] md:rounded-[3rem] glass border border-white/10 group">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img 
            src={`${images[index].url}?auto=format&fit=crop&q=80&w=1600`} 
            alt={images[index].title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
          
          {index === 2 && (
            <div className="absolute inset-x-0 top-[40%] flex justify-center pointer-events-none">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/10 backdrop-blur-3xl px-12 py-6 rounded-2xl border border-white/20 shadow-2xl"
              >
                <div className="text-6xl md:text-8xl font-black text-white tracking-[0.2em] flex flex-col items-center gap-4">
                  <img src="/logo.png" alt="WHS Logo" className="w-48 md:w-64" />
                </div>
              </motion.div>
            </div>
          )}

          <div className="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 md:right-12 flex justify-between items-end">
            <div className="space-y-1 md:space-y-2">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                key={`label-${index}`}
                className="text-blue-400 font-mono text-[8px] md:text-[10px] uppercase tracking-[0.4em] font-black"
              >
                {images[index].label}
              </motion.div>
              <motion.h3 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                key={`title-${index}`}
                className="text-xl md:text-5xl font-black text-white tracking-tighter uppercase italic"
              >
                {images[index].title}
              </motion.h3>
            </div>
            
            <div className="flex gap-2">
              {images.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1 transition-all duration-500 rounded-full ${i === index ? 'w-8 bg-blue-500' : 'w-2 bg-white/20'}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const AutoImageSlider = ({ images, height = "h-80" }: { images: { url: string; title: string }[], height?: string }) => {
  const [index, setIndex] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className={`relative ${height} rounded-3xl overflow-hidden glass border border-white/10 group`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img 
            src={`${images[index].url}?auto=format&fit=crop&q=80&w=800`} 
            alt={images[index].title} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const ProfileSection = () => {
  const socialIcons = [
    { icon: <Facebook className="w-4 h-4" />, color: 'bg-blue-600' },
    { icon: <Youtube className="w-4 h-4" />, color: 'bg-red-600' },
    { icon: <Smartphone className="w-4 h-4" />, color: 'bg-black' },
    { icon: <Instagram className="w-4 h-4" />, color: 'bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-500' },
    { icon: <MessageCircle className="w-4 h-4" />, color: 'bg-green-500' },
    { icon: <Zap className="w-4 h-4" />, color: 'bg-yellow-500' },
  ];

  return (
    <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 mx-auto">
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-0 z-20">
        {socialIcons.map((item, i) => (
          <div key={i} className="absolute" style={{ top: '50%', left: '50%', transform: `rotate(${(i * (360 / socialIcons.length))}deg) translate(clamp(110px, 15vw, 145px), -50%)` }}>
             <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className={`w-8 h-8 md:w-10 md:h-10 ${item.color} rounded-lg md:rounded-xl flex items-center justify-center text-white shadow-2xl border-2 border-white/30 backdrop-blur-md transform hover:scale-125 transition-all cursor-pointer`}>
               <div className="scale-75 md:scale-100">{item.icon}</div>
             </motion.div>
          </div>
        ))}
      </motion.div>
      <div className="absolute inset-0 rounded-full p-4 bg-white/5 backdrop-blur-md border border-white/20 shadow-[0_0_50px_rgba(37,99,235,0.2)]">
        <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/20 bg-slate-800 group relative">
          <AutoImageSlider 
            height="h-full"
            images={[
              { url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113", title: "" },
              { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f", title: "" },
              { url: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0", title: "" },
              { url: "https://images.unsplash.com/photo-1551434678-e076c223a692", title: "" }
            ]}
          />
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ service, delay = 0 }: { service: typeof services[0]; delay?: number; key?: string }) => {
  const navigate = useNavigate();
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -15, scale: 1.02 }}
      onClick={() => navigate(`/services?id=${service.id}`)}
      className="p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-400/50 transition-all group cursor-pointer relative overflow-hidden"
    >
    <div className="w-10 h-10 sm:w-14 sm:h-14 bg-blue-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-lg relative z-10">
      <div className="scale-75 sm:scale-100">{service.icon}</div>
    </div>
    <h3 className="text-sm sm:text-xl font-bold text-white mb-2 sm:mb-3 tracking-tight group-hover:text-blue-200 transition-colors relative z-10 leading-tight uppercase italic">{service.title}</h3>
    <p className="text-[10px] sm:text-sm text-white/40 leading-relaxed mb-4 sm:mb-6 group-hover:text-white/70 transition-colors relative z-10 line-clamp-2 md:line-clamp-none">{service.shortDesc}</p>
    <div className="flex items-center justify-between mt-auto pt-4 sm:pt-6 border-t border-white/5 relative z-10">
      <span className="text-emerald-400 font-bold text-xs sm:text-lg">{service.price}</span>
      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-white/30 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
    </div>
  </motion.div>
  );
};

export const Home = () => {
  return (
    <div className="pt-10 md:pt-20">
      {/* Hero */}
      <section className="relative pt-10 pb-10 md:pt-20 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="space-y-6 md:space-y-8 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-[10px] md:text-xs font-semibold tracking-wider uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Dubai's Elite Social Agency
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold leading-[1.1] tracking-tight text-white uppercase italic">
              Your Vision. <br/> Our Code. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300 text-glow">Dubai's Digital Agency.</span>
            </h1>
            <p className="text-base md:text-lg text-white/60 max-w-lg mx-auto md:mx-0 leading-relaxed">
              WHS Social Media — Dubai's trusted partner for social media management, 
              application development, and premium printing services.
            </p>
            <div className="pt-2 md:pt-4">
              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
                 <img src="/logo.png" alt="WHS Logo" className="w-24 md:w-32 h-auto" />
                 <div className="space-y-1 text-center sm:text-left">
                    <div className="text-lg md:text-xl font-bold text-white tracking-tight uppercase">WHS Social Media</div>
                    <div className="flex items-center justify-center sm:justify-start gap-2 text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
                       <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                       Active Monetization Engine
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="flex items-center justify-center pt-10 md:pt-0">
             <ProfileSection />
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 max-w-7xl mx-auto px-6 border-t border-white/5">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight uppercase italic leading-tight">Our Services</h2>
          <p className="text-white/40 leading-relaxed mt-4">Premium growth engines for Dubai's creators.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.slice(0, 6).map((service, i) => (
            <FeatureCard key={service.id} service={service} delay={i * 0.1} />
          ))}
        </div>
      </section>

      {/* Slideshow */}
      <section className="py-16 max-w-7xl mx-auto px-6">
         <ImpactSlideshow />
      </section>
    </div>
  );
};
