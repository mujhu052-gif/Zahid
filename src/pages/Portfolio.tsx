import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Zap } from 'lucide-react';
import { projects } from '../constants';

export const Portfolio = () => {
  return (
    <div className="pt-20 md:pt-32 pb-10 md:pb-20 max-w-7xl mx-auto px-6 space-y-20 md:space-y-32">
      {/* Intro */}
      <section className="text-center max-w-4xl mx-auto space-y-4 md:space-y-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="inline-block px-4 py-1.5 glass rounded-full text-emerald-400 text-[10px] md:text-xs font-bold uppercase tracking-widest border border-emerald-500/20 mb-6 md:mb-8">
            Case Studies
          </div>
          <h2 className="text-3xl md:text-7xl font-bold text-white tracking-tight uppercase italic leading-tight">
            Execution <br/>& Impact
          </h2>
          <p className="text-white/60 text-base md:text-xl leading-relaxed mt-4 md:mt-8">
            Turning complex vision into measurable market dominance across the GCC for our strategic partners.
          </p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {projects.map((project, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            className="group relative min-h-[400px] md:h-[650px] rounded-3xl md:rounded-[3.5rem] overflow-hidden border border-white/10 shadow-3xl bg-slate-950 flex flex-col pt-0"
          >
            <img 
              src={`${project.image}?auto=format&fit=crop&q=80&w=1200`} 
              alt={project.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-30 md:grayscale grayscale group-hover:grayscale-0 group-hover:opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
            
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-12 flex flex-col justify-end h-full">
               <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                  <span className="px-2 py-0.5 md:px-3 md:py-1 bg-blue-600/20 text-blue-400 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest border border-blue-500/20">
                    {project.category}
                  </span>
                  <span className="px-2 py-0.5 md:px-3 md:py-1 bg-white/5 text-white/40 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest border border-white/10">
                    {project.duration}
                  </span>
               </div>
               
               <h4 className="text-xl md:text-3xl font-bold text-white mb-3 md:mb-6 leading-tight group-hover:text-blue-200 transition-colors tracking-tight uppercase italic">{project.title}</h4>
               
               <p className="text-white/60 text-xs md:text-lg mb-6 md:mb-10 line-clamp-2 md:line-clamp-3 leading-relaxed transition-colors group-hover:text-white/80">{project.description}</p>

               <div className="space-y-2 md:space-y-4 mb-8 md:mb-10 hidden sm:block">
                 <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/20 mb-1 md:mb-2 font-mono">Key Success Metrics</div>
                 {project.results.map((res, j) => (
                   <div key={j} className="flex items-center gap-3 md:gap-4 text-sm md:text-lg text-white/90">
                     <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-emerald-500 rounded-full shadow-[0_0_12px_rgba(16,185,129,0.8)] shrink-0" />
                     <span className="font-bold">{res}</span>
                   </div>
                 ))}
               </div>

               <a 
                 href="https://wa.me/971527628660"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-full py-4 md:py-5 bg-white text-slate-950 font-black rounded-xl md:rounded-2xl flex items-center justify-center gap-3 hover:bg-blue-500 hover:text-white transition-all group/btn uppercase tracking-widest text-[10px] md:text-sm"
               >
                 Inquire <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover/btn:translate-x-3 transition-transform" />
               </a>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Success Stats Placeholder */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 py-10 md:py-16 border-y border-white/5">
        {[
          { label: 'Followers Gained', val: '2M+', sub: 'Last 12 Months' },
          { label: 'Ad Spend Managed', val: 'AED 5M+', sub: 'Global Projects' },
          { label: 'Growth ROAS', val: '4.5x', sub: 'E-commerce AVG' },
          { label: 'Market Presence', val: 'GCC', sub: 'UAE & KSA focus' }
        ].map((stat) => (
          <div key={stat.label} className="text-center space-y-1 md:space-y-2">
            <div className="text-2xl md:text-5xl font-black text-white tracking-tighter italic uppercase underline decoration-blue-500 decoration-2 md:decoration-4 underline-offset-4 md:underline-offset-8">{stat.val}</div>
            <div className="text-[8px] md:text-xs font-mono text-blue-400 uppercase tracking-widest font-bold pt-2 md:pt-4">{stat.label}</div>
            <div className="text-[7px] md:text-[10px] text-white/20">{stat.sub}</div>
          </div>
        ))}
      </section>
    </div>
  );
};
