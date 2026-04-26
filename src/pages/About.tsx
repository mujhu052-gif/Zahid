import React from 'react';
import { motion } from 'motion/react';
import { Zap, CheckCircle2, UserCheck, ArrowRight } from 'lucide-react';
import { team } from '../constants';

export const About = () => {
  return (
    <div className="pt-20 md:pt-32 pb-10 md:pb-20 max-w-7xl mx-auto px-6 space-y-16 md:space-y-32">
      {/* Intro */}
      <section className="text-center max-w-4xl mx-auto space-y-4 md:space-y-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="inline-block px-4 py-1.5 glass rounded-full text-blue-400 text-[10px] md:text-xs font-bold uppercase tracking-widest border border-blue-500/20 mb-6 md:mb-8">
            Who We Are
          </div>
          <h2 className="text-3xl md:text-7xl font-bold text-white tracking-tight uppercase italic leading-tight mb-4 md:mb-8">
            Bridging Technology <br/>& Creativity
          </h2>
          <p className="text-white/60 text-base md:text-xl leading-relaxed">
            WHS Social Media Applications Development & Management Co. L.L.C is a Dubai-based digital powerhouse licensed under the Department of Economic Development (DET). Founded in 2024, we specialize in high-performance digital ecosystems.
          </p>
        </motion.div>
      </section>

      {/* Mission/Vision */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
        <div className="glass p-8 md:p-12 rounded-3xl md:rounded-[3rem] border border-white/10 space-y-4 md:space-y-6 bg-gradient-to-br from-blue-500/5 to-transparent">
          <Zap className="w-10 h-10 md:w-12 md:h-12 text-blue-400" />
          <h3 className="text-2xl md:text-3xl font-bold text-white">Mission</h3>
          <p className="text-white/50 italic text-base md:text-lg leading-relaxed font-serif">
            "To empower businesses with innovative digital solutions — from social media strategy to creative printing — helping brands connect, grow, and succeed."
          </p>
        </div>
        <div className="glass p-8 md:p-12 rounded-3xl md:rounded-[3rem] border border-white/10 space-y-4 md:space-y-6 bg-gradient-to-br from-indigo-500/5 to-transparent">
          <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12 text-indigo-400" />
          <h3 className="text-2xl md:text-3xl font-bold text-white">Vision</h3>
          <p className="text-white/50 italic text-base md:text-lg leading-relaxed font-serif">
            "To be the leading digital transformation partner for SMEs and enterprises across the UAE and South Asia."
           </p>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="scroll-mt-32">
        <div className="text-center mb-10 md:mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-white uppercase italic tracking-tight">Leadership</h3>
          <p className="text-white/40 mt-2 text-sm md:text-base">The expertise driving our client success.</p>
        </div>
        <div className="grid grid-cols-1 max-w-2xl mx-auto">
          {team.map((member, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="glass p-8 md:p-12 rounded-3xl md:rounded-[3rem] border border-white/10 text-center relative overflow-hidden bg-gradient-to-br from-blue-600/5 to-transparent">
               <div className="relative z-10 space-y-6">
                 <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl md:rounded-3xl mx-auto flex items-center justify-center text-white text-3xl md:text-4xl font-black shadow-2xl relative">
                   {member.name.charAt(0)}
                 </div>
                 <div>
                   <h4 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{member.name}</h4>
                   <div className="text-blue-400 font-mono text-[10px] md:text-xs uppercase tracking-widest mt-2 flex items-center justify-center gap-2">
                     <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                     {member.role}
                   </div>
                 </div>
                 <p className="text-white/60 text-sm md:text-lg leading-relaxed max-w-md mx-auto">{member.bio}</p>
                 <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-3.5 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition-all text-[10px] md:text-xs font-bold uppercase tracking-widest shadow-lg shadow-blue-900/30">
                    Connect on LinkedIn <ArrowRight className="w-4 h-4" />
                 </a>
               </div>
               <UserCheck className="absolute -bottom-10 -right-10 w-48 h-48 md:w-64 md:h-64 text-white/[0.01] pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* License Info */}
      <section className="glass rounded-[2.5rem] md:rounded-[3.5rem] border border-emerald-500/20 p-8 md:p-12 relative overflow-hidden">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
           <div>
             <h3 className="text-3xl md:text-4xl font-bold text-white uppercase italic mb-4 md:mb-6">Trade License</h3>
             <p className="text-white/40 mb-6 md:mb-8 leading-relaxed text-sm md:text-lg">
                DED Dubai certified digital agency #1403869. We operate with full regulatory compliance within the UAE digital ecosystem.
             </p>
             <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="p-4 md:p-6 glass rounded-2xl border border-white/5">
                   <div className="text-[8px] md:text-[10px] font-mono text-blue-400 uppercase tracking-widest mb-1 md:mb-2">License Number</div>
                   <div className="text-lg md:text-2xl font-black text-white">1403869</div>
                </div>
                <div className="p-4 md:p-6 glass rounded-2xl border border-white/5">
                   <div className="text-[8px] md:text-[10px] font-mono text-blue-400 uppercase tracking-widest mb-1 md:mb-2">Issue Date</div>
                   <div className="text-base md:text-xl font-black text-white">18 AUG 2024</div>
                </div>
             </div>
           </div>
           <div className="space-y-2 md:space-y-4">
             {[
               { k: 'Commercial Reg No', v: '2392456' },
               { k: 'Legal Type', v: 'LLC - SO' },
               { k: 'Expiry Date', v: '17 AUG 2025' },
               { k: 'License Agency', v: 'DED Dubai' }
             ].map((item) => (
               <div key={item.k} className="flex justify-between items-center py-3 md:py-4 border-b border-white/5">
                 <span className="text-white/30 text-xs md:text-sm font-medium">{item.k}</span>
                 <span className="text-white font-bold text-xs md:text-base">{item.v}</span>
               </div>
             ))}
           </div>
        </div>
        <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
      </section>
    </div>
  );
};
