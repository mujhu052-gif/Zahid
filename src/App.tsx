/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Menu, 
  X, 
  Zap,
  ChevronRight,
  Youtube,
  Smartphone,
  Facebook,
  Megaphone,
  UserCheck,
  Wand2,
  MessageCircle,
  CheckCircle2,
  Instagram
} from 'lucide-react';
import { useState, useEffect, ReactNode } from 'react';

// --- Types ---
interface ServiceDetail {
  id: string;
  icon: ReactNode;
  title: string;
  shortDesc: string;
  fullDesc: string;
  price: string;
  benefits: string[];
}

interface FeatureProps {
  service: ServiceDetail;
  delay: number;
  onClick: (service: ServiceDetail) => void;
  key?: string | number;
}

// --- Components ---

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
    { url: "https://images.unsplash.com/photo-1626785774573-4b799315345d", title: "WHS Systems Power", label: "Engineered Success" }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-[3rem] glass border border-white/10 group">
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
          
          {/* Animated "WHS" Branding Overlay for the specific poster request */}
          {index === 2 && (
            <div className="absolute inset-x-0 top-[40%] flex justify-center pointer-events-none">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/10 backdrop-blur-3xl px-12 py-6 rounded-2xl border border-white/20 shadow-2xl"
              >
                <div className="text-6xl md:text-8xl font-black text-white tracking-[0.2em]">WHS</div>
                <div className="text-center text-blue-400 font-mono text-xs uppercase tracking-[0.3em] mt-2">Systems Worldwide</div>
              </motion.div>
            </div>
          )}

          <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
            <div className="space-y-2">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                key={`label-${index}`}
                className="text-blue-400 font-mono text-xs uppercase tracking-[0.3em] font-bold"
              >
                {images[index].label}
              </motion.div>
              <motion.h3 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                key={`title-${index}`}
                className="text-3xl md:text-5xl font-bold text-white tracking-tight"
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

const AutoImageSlider = ({ images, height = "h-80" }: { images: { url: string; title: string; desc?: string; label?: string }[], height?: string }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
            {images[index].label && (
              <div className="text-blue-400 font-mono text-xs uppercase tracking-widest mb-2 font-bold">{images[index].label}</div>
            )}
            <h3 className="text-2xl font-bold text-white">{images[index].title}</h3>
            {images[index].desc && (
              <p className="text-white/60 text-sm mt-2 max-w-md">{images[index].desc}</p>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const TestimonialGallery = () => {
  const reviews = [
    { text: "My account reach jumped 400% in just 2 weeks. Simply incredible!", author: "@alex_creatives", color: "from-blue-500/20" },
    { text: "Finally found a team that understands platform algorithms. Top tier service.", author: "@dubai_lifestyle", color: "from-indigo-500/20" },
    { text: "WHS helped me monetize my hobby. I'm now full-time on social media!", author: "@chef_sara", color: "from-purple-500/20" },
    { text: "Professional, reliable, and results-driven. Highly recommended for any brand.", author: "@tech_insights", color: "from-cyan-500/20" },
    { text: "The engagement rates we're seeing now are unlike anything before. WHS is the real deal.", author: "@market_guru", color: "from-blue-600/20" },
    { text: "From zero to viral in 30 days. Their strategy is pure math and magic.", author: "@viral_vibe", color: "from-emerald-500/20" }
  ];

  return (
    <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {reviews.map((msg, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.1 }}
          className={`p-6 rounded-2xl glass border border-white/10 bg-gradient-to-br ${msg.color} to-transparent relative overflow-hidden group`}
        >
          <div className="relative z-10">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, star) => (
                <Zap key={star} className="w-3 h-3 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <p className="text-white/80 text-sm italic mb-4 leading-relaxed">"{msg.text}"</p>
            <div className="text-white font-bold text-xs">{msg.author}</div>
            <div className="text-blue-400 text-[10px] mt-1 font-mono uppercase tracking-tighter">Verified Creator</div>
          </div>
          <MessageCircle className="absolute -bottom-2 -right-2 w-12 h-12 text-white/5 group-hover:text-white/10 transition-colors" />
        </motion.div>
      ))}
    </div>
  );
};

const BackgroundIcons = () => {
  const icons = [
    <Facebook className="w-4 h-4" />,
    <Youtube className="w-4 h-4" />,
    <Instagram className="w-4 h-4" />,
    <Smartphone className="w-4 h-4" />, // TikTok
    <MessageCircle className="w-4 h-4" />,
  ];

  return (
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
  );
};

const ServiceModal = ({ 
  service, 
  isOpen, 
  onClose 
}: { 
  service: ServiceDetail | null; 
  isOpen: boolean; 
  onClose: () => void 
}) => {
  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-slate-900 border border-white/20 rounded-3xl overflow-hidden shadow-2xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-8 md:p-12">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-8 text-blue-400">
                {service.icon}
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                {service.title}
              </h2>
              
              <div className="flex items-center gap-2 mb-8">
                <span className="text-emerald-400 font-bold text-2xl">{service.price}</span>
                <span className="text-white/40 text-sm font-mono uppercase tracking-widest mt-1">Starting Demo Price</span>
              </div>

              <div className="space-y-6 mb-10">
                <p className="text-white/70 leading-relaxed text-lg">
                  {service.fullDesc}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-white/60 bg-white/5 p-3 rounded-xl border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={`https://wa.me/923403516101?text=Hi, I am interested in ${encodeURIComponent(service.title)}. Can you help me?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg shadow-green-900/30 group"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Order via WhatsApp
                </a>
                <button 
                  onClick={onClose}
                  className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-xl font-bold border border-white/10 transition-all"
                >
                  Close Details
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const ProfileSection = () => {
  const socialIcons = [
    { icon: <Facebook className="w-4 h-4" />, color: 'bg-blue-600' },
    { icon: <Youtube className="w-4 h-4" />, color: 'bg-red-600' },
    { icon: <Smartphone className="w-4 h-4" />, color: 'bg-black' }, // TikTok
    { icon: <Instagram className="w-4 h-4" />, color: 'bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-500' },
    { icon: <MessageCircle className="w-4 h-4" />, color: 'bg-green-500' },
    { icon: <Zap className="w-4 h-4" />, color: 'bg-yellow-500' },
  ];

  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
      {/* Circling Icons Container */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 z-20"
      >
        {socialIcons.map((item, i) => (
          <div 
            key={i}
            className="absolute"
            style={{
              top: '50%',
              left: '50%',
              transform: `rotate(${(i * (360 / socialIcons.length))}deg) translate(145px, -50%)`,
            }}
          >
             <motion.div 
               animate={{ rotate: -360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className={`w-10 h-10 ${item.color} rounded-xl flex items-center justify-center text-white shadow-2xl border-2 border-white/30 backdrop-blur-md transform hover:scale-125 transition-all cursor-pointer`}
             >
               {item.icon}
             </motion.div>
          </div>
        ))}
      </motion.div>

      {/* Main Profile with Glass Effect */}
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
          <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>
      
      {/* Small orbiting dots and logos */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          animate={{ rotate: -360 }}
          transition={{ duration: 12 + i * 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 pointer-events-none"
        >
          <div 
            className="w-1.5 h-1.5 bg-blue-400 rounded-full blur-[1px] absolute"
            style={{
              top: '50%',
              left: '50%',
              transform: `rotate(${i * 60}deg) translate(180px, -50%)`,
            }}
          />
        </motion.div>
      ))}

      {/* Extra Outer Orbit for density */}
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 z-10 opacity-40"
      >
        {[<Instagram />, <Facebook />, <Youtube />, <Smartphone />].map((icon, i) => (
          <div 
            key={`outer-${i}`}
            className="absolute"
            style={{
              top: '50%',
              left: '50%',
              transform: `rotate(${i * 90 + 45}deg) translate(200px, -50%) scale(0.6)`,
            }}
          >
             <div className="w-8 h-8 glass rounded-lg flex items-center justify-center text-white/50 border border-white/10">
               {icon}
             </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/10 backdrop-blur-md border border-white/20 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="font-bold text-white">W</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-white/90 uppercase">WHS Systems</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {['Home', 'Services', 'About', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={item === 'Home' ? '#' : `#${item.toLowerCase()}`} 
              className="text-white/70 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="bg-blue-600 text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/20">
            Get Started
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-x-0 top-[72px] bg-slate-900 border-b border-slate-800 p-6 flex flex-col gap-4 shadow-2xl z-[100]"
          >
            {['Home', 'Services', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={item === 'Home' ? '#' : `#${item.toLowerCase()}`} 
                className="text-lg font-medium text-slate-300" 
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const FeatureCard = ({ service, delay = 0, onClick }: FeatureProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ 
      duration: 0.8,
      delay,
      ease: [0.16, 1, 0.3, 1] // Custom spring-like ease
    }}
    whileHover={{ 
      y: -15, 
      scale: 1.02,
      rotateX: 2,
      rotateY: -2,
      perspective: 1000
    }}
    onClick={() => onClick(service)}
    className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-400/50 transition-colors group cursor-pointer relative overflow-hidden"
    style={{ transformStyle: 'preserve-3d' }}
  >
    {/* Sweeping Shine Effect */}
    <div className="absolute inset-x-0 -top-full h-[200%] bg-gradient-to-b from-transparent via-white/10 to-transparent skew-y-12 transition-transform duration-1000 group-hover:translate-y-[100%] pointer-events-none" />
    
    {/* Background Glow */}
    <div className="absolute -inset-24 bg-blue-600/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

    <motion.div 
      whileHover={{ 
        rotate: 360, 
        scale: 1.1,
        z: 20
      }}
      transition={{ duration: 0.6, type: "spring" }}
      className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-lg relative z-10"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {service.icon}
    </motion.div>
    
    <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-blue-200 transition-colors relative z-10" style={{ transform: 'translateZ(15px)' }}>{service.title}</h3>
    <p className="text-white/40 text-sm leading-relaxed mb-6 group-hover:text-white/70 transition-colors relative z-10" style={{ transform: 'translateZ(10px)' }}>{service.shortDesc}</p>
    
    <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5 relative z-10" style={{ transform: 'translateZ(5px)' }}>
      <motion.span 
        whileHover={{ scale: 1.1 }}
        className="text-emerald-400 font-bold text-lg"
      >
        {service.price}
      </motion.span>
      <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 group-hover:text-blue-400 transition-colors">
        Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </span>
    </div>

    {/* Floating accent dot */}
    <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-400/5 rounded-full blur-3xl group-hover:bg-blue-400/15 transition-colors pointer-events-none" />
  </motion.div>
);

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services: ServiceDetail[] = [
    {
      id: 'tiktok',
      icon: <Smartphone />,
      title: "TikTok Monetization",
      shortDesc: "We get your account approved for the Creativity Program and LIVE gifts safely and quickly.",
      fullDesc: "Unlock multiple revenue streams on TikTok. We handle everything from account requirements to safe activation of the Creator Fund and Creativity Program Beta. Dubai's most reliable activation service.",
      price: "$75.00",
      benefits: ['Creator Fund Activation', 'Creativity Program Beta', 'LIVE Gifts Enabled', 'Safe Activation']
    },
    {
      id: 'youtube',
      icon: <Youtube />,
      title: "YouTube Monetization",
      shortDesc: "Expert guidance to reach YPP milestones and start earning ad revenue from your video content.",
      fullDesc: "Reaching the YouTube Partner Program milestones can be tough. Our experts help you grow your watch time and subscriber base safely, ensuring your channel meets all policy requirements for approval.",
      price: "$120.00",
      benefits: ['Ads Revenue Access', 'Watch Time Growth', 'Subscriber Boost', 'Channel Policy Audit']
    },
    {
      id: 'facebook',
      icon: <Facebook />,
      title: "Facebook Monetization",
      shortDesc: "Activate In-Stream Ads and Stars for your Page to create a steady stream of passive income.",
      fullDesc: "Monetize your Facebook Page with In-Stream ads for on-demand and live videos. We help you meet the 600,000 eligible minutes requirement and set up Stars monetization for your audience.",
      price: "$65.00",
      benefits: ['In-Stream Ads Setup', 'Stars Activation', 'Page Policy Clean-up', 'Revenue Management']
    },
    {
      id: 'ads',
      icon: <Megaphone />,
      title: "Paid Ads Management",
      shortDesc: "High-converting TikTok and Meta ad campaigns designed to bring you real customers and growth.",
      fullDesc: "Stop wasting money on ineffective ads. Our specialists create high-ROI campaigns on TikTok and Meta, handling everything from creative strategy to advanced audience targeting and daily optimization.",
      price: "$150.00",
      benefits: ['High-ROI Strategy', 'Targeted Traffic', 'Creative Copywriting', 'Daily Optimization']
    },
    {
      id: 'management',
      icon: <UserCheck />,
      title: "Account Management",
      shortDesc: "We handle the daily stress of content planning, posting, and engagement so you can stay creative.",
      fullDesc: "Running a brand on social media is a full-time job. We handle your content calendar, daily posting, engagement, and growth statistics so you can focus on running your business or being a creator.",
      price: "$200.00",
      benefits: ['Content Planning', 'Daily Posting', 'Engagement Support', 'Growth Analytics']
    },
    {
      id: 'ai-tools',
      icon: <Wand2 />,
      title: "AI Tools Access",
      shortDesc: "Get instant access to our curated store of AI-powered content tools for creators and markers.",
      fullDesc: "Work 10x faster with our premium AI tools. From viral caption generators to AI-powered video editors and script writers, we provide the ultimate digital toolkit for the modern creator economy.",
      price: "$30.00",
      benefits: ['Caption Generator', 'Script Bot Studio', 'Video Suite AI', 'Growth Analytics']
    }
  ];

  const handleOpenModal = (service: ServiceDetail) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };
  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-900 text-white selection:bg-blue-500/30">
      <BackgroundIcons />
      {/* Background Mesh Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/30 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-700/30 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-purple-600/20 rounded-full blur-[80px] -z-10"></div>

      <Navbar />
      <ServiceModal 
        service={selectedService} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-xs font-semibold tracking-wider uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Dubai's Elite Social Agency
            </div>
            <h1 className="text-6xl md:text-7xl font-extrabold leading-[1.1] tracking-tight text-white">
              Grow Your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300 text-glow">Social Media.</span>
            </h1>
            <p className="text-lg text-white/60 max-w-lg leading-relaxed">
              Unlock monetization on TikTok, YouTube, and Facebook. We help creators and brands 
              work smarter with cutting-edge AI tools and expert management.
            </p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="pt-4"
            >
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="inline-flex items-center gap-6"
              >
                <div className="relative group">
                  <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-500/40 transition-colors animate-pulse" />
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl flex items-center justify-center shadow-2xl relative border-2 border-white/20 backdrop-blur-xl">
                    <span className="text-4xl md:text-6xl font-black text-white tracking-tighter drop-shadow-lg">WHS</span>
                    
                    {/* Decorative glass ring */}
                    <div className="absolute -inset-2 border border-white/10 rounded-3xl animate-[spin_10s_linear_infinity]" />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="text-xl font-bold text-white tracking-tight uppercase">WHS Systems</div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Active Monetization Engine</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center pt-10 md:pt-0"
          >
            <ProfileSection />
          </motion.div>

        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 max-w-7xl mx-auto px-6 border-t border-white/10">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-[1.1]">Our Services</h2>
          <p className="text-white/40 leading-relaxed text-lg">Premium social media growth and monetization solutions tailored for Dubai's creators.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <FeatureCard 
              key={service.id}
              service={service}
              delay={i * 0.1}
              onClick={handleOpenModal}
            />
          ))}
        </div>

        <div className="mt-20 text-center">
          <a 
            href="https://wa.me/923403516101" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-green-500 hover:bg-green-600 text-white rounded-2xl font-bold shadow-xl shadow-green-900/30 transition-all group"
          >
            <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
            Chat with us on WhatsApp
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 max-w-7xl mx-auto px-6 border-t border-white/10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Dubai Founded. <br />
              <span className="text-blue-400">Global Ambition.</span>
            </h2>
            <div className="space-y-6 text-white/60 leading-relaxed">
              <p>
                WHS Social Media Management was founded in Dubai with one goal: to make digital success accessible to everyone. We started as markers struggling with platform rules, and built the solution we wished existed.
              </p>
              <p>
                Today, we empower thousands of creators worldwide with the tools, strategies, and expert support they need to turn social media into a sustainable source of income.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-white">10k+</div>
                <div className="text-xs text-white/40 uppercase tracking-widest font-bold mt-1">Creators Managed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-xs text-white/40 uppercase tracking-widest font-bold mt-1">Live Support</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* New Visual Gallery & Success Stories */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Dubai Story Slider */}
          <div className="md:col-span-2">
            <AutoImageSlider 
              images={[
                { 
                  url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c", 
                  title: "Dubai Headquarters", 
                  label: "Founding Hub",
                  desc: "Operating from the heart of the world's digital economy." 
                },
                { 
                  url: "https://images.unsplash.com/photo-1526431893694-9a0b69a55a80", 
                  title: "Global Connectivity", 
                  label: "Strategic Reach",
                  desc: "Bridging the gap between creators and global markets." 
                }
              ]} 
            />
          </div>

          {/* Professional Office Slider */}
          <AutoImageSlider 
            images={[
              { 
                url: "https://images.unsplash.com/photo-1497366216548-37526070297c", 
                title: "Innovation Lab", 
                label: "WHS Office",
                desc: "Where viral strategies are engineered."
              },
              { 
                url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174", 
                title: "Scale Studio", 
                label: "Performance Center",
                desc: "Optimizing reach every single second."
              }
            ]} 
          />

          {/* Testimonials / Messages Gallery */}
          <TestimonialGallery />
        </div>
      </section>

      {/* Cinematic Impact Slideshow */}
      <section className="py-12 max-w-7xl mx-auto px-6">
        <ImpactSlideshow />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 max-w-7xl mx-auto px-6 border-t border-white/10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 1,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="glass rounded-3xl p-12 md:p-20 relative overflow-hidden shadow-[0_0_50px_rgba(37,99,235,0.1)]"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent -z-10" />
          
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-white tracking-tight">Let's Talk — We're Ready to Help.</h2>
              <p className="text-white/40 leading-relaxed text-lg">
                Have a question? Ready to get started? Reach out and we'll get back to you within 24 hours.
              </p>
              <div className="space-y-6 pt-6">
                <a 
                  href="https://wa.me/923403516101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-white/80 hover:text-green-400 transition-colors group"
                >
                  <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-blue-400 group-hover:text-green-400 group-hover:scale-110 transition-all">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold uppercase tracking-widest text-white/40 group-hover:text-green-400/60 transition-colors">WhatsApp</div>
                    <div className="text-lg font-semibold">+92 340 3516101</div>
                  </div>
                </a>
                <div className="flex items-center gap-4 text-white/80">
                  <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-blue-400">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold uppercase tracking-widest text-white/40">Response Time</div>
                    <div className="text-lg font-semibold">Under 2 hours</div>
                  </div>
                </div>

                {/* Social Quick Connect Panel */}
                <div className="pt-8 border-t border-white/5">
                  <div className="text-xs font-bold uppercase tracking-widest text-white/30 mb-6 font-mono">Instant Channels</div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[
                      { icon: <MessageCircle className="w-6 h-6" />, label: "WhatsApp", color: "hover:text-green-400", bg: "hover:bg-green-500/10", link: "https://wa.me/923403516101" },
                      { icon: <Facebook className="w-6 h-6" />, label: "Facebook", color: "hover:text-blue-500", bg: "hover:bg-blue-600/10", link: "https://facebook.com/WHS_Systems" },
                      { icon: <Instagram className="w-6 h-6" />, label: "Instagram", color: "hover:text-pink-500", bg: "hover:bg-pink-600/10", link: "https://instagram.com/WHS_Systems" },
                      { icon: <Youtube className="w-6 h-6" />, label: "YouTube", color: "hover:text-red-500", bg: "hover:bg-red-600/10", link: "https://youtube.com/WHS_Systems" }
                    ].map((item, i) => (
                      <motion.a
                        key={i}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`glass p-4 rounded-2xl flex flex-col items-center justify-center gap-3 border border-white/5 transition-all group ${item.bg} ${item.color}`}
                      >
                        <div className="text-white/60 group-hover:text-inherit transition-colors">
                          {item.icon}
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">{item.label}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
              />
              <textarea 
                placeholder="How can we help?" 
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
              ></textarea>
              <button 
                type="button"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white py-5 rounded-2xl font-bold shadow-xl shadow-blue-900/30 transition-all flex items-center justify-center gap-3"
              >
                Send Message <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-white/40">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
               <span className="font-bold text-white">W</span>
            </div>
            <span className="text-xl font-bold text-white/90 tracking-tight uppercase">WHS Systems</span>
          </div>
          
          <div className="flex gap-8 text-xs font-semibold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Status</a>
            <a href="#" className="hover:text-white transition-colors">API</a>
          </div>
          
          <div className="text-xs font-semibold opacity-50 flex items-center gap-4">
            <span>© 2026 WHS SYSTEMS. TRADING INTERNATIONALLY.</span>
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full"></div>
              <div className="w-8 h-8 bg-white/20 rounded-full"></div>
              <div className="w-8 h-8 bg-white/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
