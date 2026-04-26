import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';
import { services } from '../constants';

import { useSearchParams } from 'react-router-dom';

export const Services = () => {
  const [searchParams] = useSearchParams();
  const serviceId = searchParams.get('id');
  const [activeTab, setActiveTab] = React.useState(serviceId || services[0].id);

  React.useEffect(() => {
    if (serviceId) {
      setActiveTab(serviceId);
    }
  }, [serviceId]);

  return (
    <div className="pt-20 md:pt-32 pb-10 md:pb-20 max-w-7xl mx-auto px-6 space-y-20 md:space-y-32">
      {/* Intro */}
      <section className="text-center max-w-4xl mx-auto space-y-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="inline-block px-4 py-1.5 glass rounded-full text-blue-400 text-[10px] md:text-xs font-bold uppercase tracking-widest border border-blue-500/20 mb-6 md:mb-8">
            Growth Engines
          </div>
          <h2 className="text-3xl md:text-7xl font-bold text-white tracking-tight uppercase italic leading-tight">
            Our Digital <br/>Solutions
          </h2>
          <p className="text-white/60 text-base md:text-xl leading-relaxed mt-4 md:mt-8">
            Premium monetization and growth strategies tailored for Dubai's elite creators.
          </p>
        </motion.div>
      </section>

      {/* Mobile Selection (Tab Style) */}
      <div className="md:hidden flex overflow-x-auto gap-3 pb-8 no-scrollbar scroll-smooth">
        {services.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveTab(s.id)}
            className={`whitespace-nowrap px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-tighter transition-all transition-all border ${
              activeTab === s.id 
                ? 'bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-900/40' 
                : 'bg-white/5 border-white/10 text-white/40'
            }`}
          >
            {s.title.split(' ')[0]}
          </button>
        ))}
      </div>

      {/* Services Grid (Desktop) / Active Tab (Mobile) */}
      <section className="space-y-8 md:space-y-12">
        {services.map((service, i) => (
          <motion.div 
            key={service.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={`
              ${activeTab === service.id ? 'flex' : 'hidden md:flex'}
              flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} 
              gap-8 md:gap-12 items-center p-6 md:p-12 glass rounded-3xl md:rounded-[3.5rem] 
              border border-white/10 bg-gradient-to-br from-blue-600/5 to-transparent relative overflow-hidden
            `}
          >
            <div className="lg:w-1/2 space-y-6 md:space-y-8 relative z-10 w-full">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-500/20 rounded-xl md:rounded-2xl flex items-center justify-center text-blue-400 shadow-2xl">
                <div className="scale-75 md:scale-100">{service.icon}</div>
              </div>
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight leading-tight uppercase italic">{service.title}</h3>
                <p className="text-emerald-400 font-mono font-black text-xl md:text-2xl">{service.price}</p>
                <p className="text-white/60 text-sm md:text-lg leading-relaxed">{service.fullDesc}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {service.benefits.map((benefit, j) => (
                  <div key={j} className="flex items-center gap-3 text-white/50 text-xs md:text-sm">
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-emerald-500 shrink-0" />
                    {benefit}
                  </div>
                ))}
              </div>

              <a 
                href={`https://wa.me/971527628660?text=I am interested in ${service.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 md:gap-4 bg-green-500 text-white px-8 py-4 md:px-10 md:py-5 rounded-xl md:rounded-2xl font-black text-lg md:text-xl hover:bg-green-600 transition-all shadow-xl shadow-green-900/30 group w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                Inquire Now
              </a>
            </div>

            <div className="lg:w-1/2 w-full h-[200px] md:h-[400px] glass rounded-2xl md:rounded-[2.5rem] overflow-hidden relative border border-white/10 group">
               <img 
                 src={`https://images.unsplash.com/photo-${service.id === 'app-dev' ? '1460925895917-afdab827c52f' : '1611162617474-5b21e879e113'}?auto=format&fit=crop&q=80&w=1200`} 
                 alt={service.title}
                 className="w-full h-full object-cover grayscale opacity-40 md:opacity-100 md:grayscale-0 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};
