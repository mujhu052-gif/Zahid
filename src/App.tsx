/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  Package, 
  Truck, 
  BarChart3, 
  ShieldCheck, 
  ArrowRight, 
  Menu, 
  X, 
  Cpu, 
  Globe, 
  Zap,
  ChevronRight,
  Database,
  Search,
  LayoutDashboard,
  Youtube,
  Smartphone,
  Facebook,
  Megaphone,
  UserCheck,
  Wand2,
  MessageCircle,
  CheckCircle2
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
          {['Services', 'Case Studies', 'Technology', 'About'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-white/70 hover:text-white transition-colors">
              {item}
            </a>
          ))}
          <button className="bg-white text-slate-900 px-5 py-2 rounded-xl text-sm font-bold hover:bg-blue-50 transition-all">
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
            className="md:hidden fixed inset-x-0 top-[72px] bg-slate-900 border-b border-slate-800 p-6 flex flex-col gap-4"
          >
            {['Solutions', 'Features', 'Network', 'Analytics'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-lg font-medium text-slate-300" onClick={() => setIsOpen(false)}>
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const LiveTerminal = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const messages = [
    "[SYSTEM] TikTok monetization approved for client: Ahmed_K",
    "[AUTO] Facebook In-Stream Ads enabled: Fatima_Store",
    "[WHS] YouTube Milestone: 100k view target reached",
    "[FLEET] Content delivery optimized via AI model v3",
    "[SEC] Payment verified: Order #40129",
    "[SYNC] Ad campaign 'Growth_Spring' is active",
    "[ALERT] New AI Tool 'CaptionAI Pro' now in store",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLogs((prev) => [...prev.slice(-4), messages[Math.floor(Math.random() * messages.length)]]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-950 rounded-xl border border-slate-800 font-mono text-[11px] p-4 h-48 flex flex-col gap-1 overflow-hidden glow-blue/10">
      <div className="flex justify-between items-center mb-2 border-b border-slate-800 pb-2">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-500" />
          <div className="w-2 h-2 rounded-full bg-yellow-500" />
          <div className="w-2 h-2 rounded-full bg-green-500" />
        </div>
        <span className="text-slate-500 uppercase tracking-widest text-[9px]">Live_System_Monitor</span>
      </div>
      <div className="flex flex-col gap-1">
        {logs.map((log, i) => (
          <motion.div 
            initial={{ opacity: 0, x: -5 }} 
            animate={{ opacity: 1, x: 0 }} 
            key={i} 
            className={`${log.includes('ALERT') ? 'text-red-400' : log.includes('SYSTEM') ? 'text-sky-400' : 'text-slate-400'}`}
          >
            <span className="text-slate-600 font-mono mr-2">12:04:{20 + i}</span>
            {log}
          </motion.div>
        ))}
        {logs.length === 0 && <div className="text-slate-700 italic">Initializing stream...</div>}
      </div>
    </div>
  );
};

const FeatureCard = ({ service, delay = 0, onClick }: FeatureProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    onClick={() => onClick(service)}
    className="p-8 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group transform hover:scale-[1.02] cursor-pointer relative overflow-hidden"
  >
    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
      {service.icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{service.title}</h3>
    <p className="text-white/40 text-sm leading-relaxed mb-6">{service.shortDesc}</p>
    
    <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
      <span className="text-emerald-400 font-bold">{service.price}</span>
      <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 group-hover:text-white transition-colors">
        View Details <ChevronRight className="w-3 h-3" />
      </span>
    </div>
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
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-500 shadow-lg shadow-blue-900/40 transition-all flex items-center justify-center gap-2">
                Explore Solutions <ArrowRight className="w-4 h-4" />
              </button>
              <button className="bg-white/5 backdrop-blur-sm border border-white/10 px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all">
                Watch Demo
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative z-10 glass rounded-3xl p-2 border-slate-700/50 shadow-2xl">
              <div className="bg-slate-900 rounded-2xl overflow-hidden aspect-square md:aspect-video flex flex-col">
                {/* Simulated Dashboard UI */}
                <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-950/50">
                  <div className="flex gap-4 items-center">
                    <div className="w-32 h-3 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div 
                        animate={{ width: ['20%', '80%', '50%', '90%'] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        className="h-full bg-blue-500" 
                      />
                    </div>
                    <span className="text-blue-500 font-mono text-[10px]">MONETIZATION LIVE</span>
                  </div>
                  <LayoutDashboard className="w-4 h-4 text-slate-500" />
                </div>
                
                <div className="p-6 flex-1 grid grid-cols-2 gap-4">
                  <div className="col-span-2 relative bg-slate-950/50 rounded-xl p-4 border border-slate-800/50 overflow-hidden">
                    <div className="flex justify-between items-end mb-4">
                      <div>
                        <div className="text-[10px] text-slate-500 uppercase font-bold mb-1">Weekly Creator Earnings</div>
                        <div className="text-2xl font-bold text-white">$12,890.00</div>
                      </div>
                      <div className="text-[10px] text-green-500">+24% growth</div>
                    </div>
                    {/* Visual Bar Chart */}
                    <div className="flex items-end gap-1 h-12">
                      {[40, 70, 45, 90, 65, 80, 55, 95, 75, 85].map((h, i) => (
                        <div key={i} className="flex-1 bg-blue-400/20 rounded-t-sm relative">
                           <motion.div 
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ delay: i * 0.1, duration: 1 }}
                            className="absolute bottom-0 inset-x-0 bg-blue-500/60 rounded-t-sm"
                           />
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-slate-950/50 rounded-xl p-4 border border-slate-800/50">
                    <div className="text-[10px] text-slate-500 uppercase font-bold mb-1">Active Accounts</div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 pulse" />
                      <span className="text-white font-bold">542 Managed</span>
                    </div>
                  </div>
                  <div className="bg-slate-950/50 rounded-xl p-4 border border-slate-800/50">
                    <div className="text-[10px] text-slate-500 uppercase font-bold mb-1">AI Tool Usage</div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <span className="text-white font-bold text-sm tracking-tighter">9.2M Queries</span>
                    </div>
                  </div>
                  
                  <div className="col-span-2 mt-2">
                    <LiveTerminal />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements for depth */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-10 -right-10 w-24 h-24 glass rounded-2xl flex items-center justify-center -rotate-12 z-0"
            >
              <Database className="text-sky-500 w-10 h-10" />
            </motion.div>
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="absolute -bottom-10 -left-10 w-20 h-20 glass rounded-full flex items-center justify-center rotate-12 z-0"
            >
              <Cpu className="text-indigo-500 w-8 h-8" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Footer Bar */}
      <section className="mt-12 py-12 border-t border-white/10 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center flex-wrap gap-12">
          <div className="flex gap-12">
            {[
              { label: 'Audits Completed', value: '1.2M+' },
              { label: 'Uptime Reliability', value: '99.9%' },
              { label: 'Global Partners', value: '250+' }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-white/40 uppercase tracking-widest font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4 text-sm text-white/40">
            <span>Trusted by industrial leaders</span>
            <div className="flex gap-3 opacity-50">
              <div className="w-8 h-8 bg-white/20 rounded-full"></div>
              <div className="w-8 h-8 bg-white/20 rounded-full"></div>
              <div className="w-8 h-8 bg-white/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-24 max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-[1.1]">Complete Monetization Suite</h2>
          <p className="text-white/40 leading-relaxed">Everything you need to grow and monetize your social presence with Dubai's #1 digital growth agency.</p>
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

        {/* WhatsApp Button at bottom of services */}
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

      {/* Pricing Section */}
      <section id="pricing" className="py-24 max-w-7xl mx-auto px-6 border-t border-white/10">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-[1.1]">Transparent Pricing</h2>
          <p className="text-white/40 leading-relaxed">Choose the plan that fits your current goals and scale with us as you grow.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              name: 'Starter Plan', 
              price: '$49', 
              desc: 'Perfect for new creators just getting started.',
              features: ['1 Core Service', 'Standard Timeline', 'Email & Chat Support', 'Progress Tracking']
            },
            { 
              name: 'Standard Plan', 
              price: '$99', 
              featured: true,
              desc: 'Great for small businesses and growing creators.',
              features: ['Up to 3 Services', 'Faster Delivery', 'Account Manager', 'AI Tool Access', 'Weekly Reports']
            },
            { 
              name: 'Growth Plan', 
              price: '$199', 
              desc: 'Designed for serious creators and enterprises.',
              features: ['All Services Access', 'VIP Queue (Fastest)', 'Strategy Consultant', '24/7 WhatsApp Support', 'Full AI Store access']
            }
          ].map((plan, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-3xl border flex flex-col ${plan.featured ? 'bg-blue-600 border-blue-400 scale-105 z-10 shadow-2xl shadow-blue-500/20' : 'bg-white/5 border-white/10'}`}
            >
              <div className="mb-8">
                <div className="text-sm font-bold opacity-60 uppercase tracking-widest mb-2">{plan.name}</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className="text-sm opacity-60">/mo demo</span>
                </div>
              </div>
              <p className={`text-sm mb-8 leading-relaxed ${plan.featured ? 'text-white' : 'text-white/40'}`}>{plan.desc}</p>
              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className={`w-4 h-4 shrink-0 ${plan.featured ? 'text-blue-200' : 'text-blue-400'}`} />
                    <span className={plan.featured ? 'text-white' : 'text-white/70'}>{f}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.featured ? 'bg-white text-blue-600 hover:bg-blue-50' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-transparent to-sky-500/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-12 md:p-20 relative overflow-hidden"
          >
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-500/10 via-transparent to-transparent -z-10" />
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Ready to Upgrade Your <br /> 
              <span className="text-sky-400">Logistics Infrastructure?</span>
            </h2>
            <p className="text-slate-400 mb-10 max-w-lg mx-auto">
              Join 500+ enterprises using WHS to streamline their operations, reduce waste, and increase throughput by up to 240%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-5 bg-sky-500 hover:bg-sky-400 text-slate-900 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all glow-blue group">
                Get Started Now <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-5 bg-slate-800 hover:bg-slate-700 text-white rounded-2xl font-bold transition-all">
                Talk to Sales
              </button>
            </div>
          </motion.div>
        </div>
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
