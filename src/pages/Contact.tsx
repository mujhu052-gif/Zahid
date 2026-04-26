import React from 'react';
import { motion } from 'motion/react';
import { 
  ChevronRight, 
  MessageCircle, 
  Facebook, 
  Instagram, 
  Youtube, 
  Music,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export const Contact = () => {
  return (
    <div className="pt-20 md:pt-32 pb-10 md:pb-20 max-w-7xl mx-auto px-6 space-y-20 md:space-y-32">
      {/* Intro */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8 md:space-y-12">
          <div className="text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 glass rounded-full text-blue-400 text-[10px] md:text-xs font-bold uppercase tracking-widest border border-blue-500/20 mb-6 md:mb-8">
              Direct Connection
            </div>
            <h2 className="text-4xl md:text-8xl font-bold text-white tracking-tighter leading-tight mb-6 md:mb-8 italic uppercase">
              Let's Talk <br/>Results.
            </h2>
            <p className="text-white/40 text-lg md:text-2xl leading-relaxed max-w-lg mx-auto lg:mx-0">
              Operating from the digital heart of Dubai. Reach out for a specialized consultation or visit our HQ in Deira.
            </p>
          </div>

          <div className="grid gap-4 md:gap-6">
            <div className="glass p-8 md:p-12 rounded-3xl md:rounded-[3.5rem] border border-white/10 flex flex-col sm:flex-row items-center sm:items-start gap-6 md:gap-10 relative overflow-hidden group hover:border-blue-500/20 transition-all bg-gradient-to-br from-blue-500/5 to-transparent text-center sm:text-left">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 shrink-0 shadow-2xl relative z-10 transition-transform group-hover:scale-110">
                 <ChevronRight className="w-8 h-8 md:w-12 md:h-12" />
              </div>
              <div className="relative z-10">
                 <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-400 mb-2 md:mb-4">Office Headquarter</div>
                 <div className="text-white font-bold text-xl md:text-2xl mb-1 md:mb-2">Dubai Office No. 413-205</div>
                 <div className="text-white/60 leading-relaxed text-sm md:text-base italic">
                   Hamad Muhammad Abdul Rahman Al Bahr Bldg,<br className="hidden md:block"/>
                   Deira – Al Khabaisi, Dubai, UAE
                 </div>
                 <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-white/5 flex flex-wrap justify-center sm:justify-start gap-4 md:gap-6 text-[9px] md:text-xs font-mono text-white/20 uppercase tracking-widest">
                    <span>Near Al Rigga Metro</span> 
                    <span>|</span>
                    <span>10 Min from DXB</span>
                 </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <a href="tel:+971527628660" className="glass p-8 md:p-10 rounded-2xl md:rounded-[2.5rem] border border-white/10 group hover:border-emerald-500/50 transition-all hover:bg-emerald-500/5 text-center sm:text-left">
                 <div className="text-[9px] md:text-xs font-bold uppercase tracking-[0.3em] text-white/30 mb-2 md:mb-4">Phone / WhatsApp</div>
                 <div className="text-white font-black text-lg md:text-xl group-hover:text-emerald-400 transition-colors">+971 52 762 8660</div>
              </a>
              <a href="mailto:wazirpanhwer1@gmail.com" className="glass p-8 md:p-10 rounded-2xl md:rounded-[2.5rem] border border-white/10 group hover:border-indigo-500/50 transition-all hover:bg-indigo-500/5 overflow-hidden text-center sm:text-left">
                 <div className="text-[9px] md:text-xs font-bold uppercase tracking-[0.3em] text-white/30 mb-2 md:mb-4">Email Channels</div>
                 <div className="text-white font-black text-sm md:text-base group-hover:text-indigo-400 transition-colors truncate italic">wazirpanhwer1@gmail.com</div>
              </a>
            </div>
          </div>
        </motion.div>

        <div className="space-y-6 md:space-y-8 flex flex-col">
          <div className="glass p-8 md:p-12 rounded-3xl md:rounded-[3.5rem] border border-white/10 bg-black/40 flex flex-col justify-between h-full">
             <div className="space-y-6 md:space-y-8">
               <div className="flex justify-between items-center">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/30 font-mono">Operations Hub</div>
                  <div className="flex items-center gap-2">
                     <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                     <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Live Open</span>
                  </div>
               </div>
               <div className="space-y-4 md:space-y-6">
                  <div className="flex justify-between items-center text-lg md:text-2xl">
                     <span className="text-white font-black uppercase italic">Sun – Thu</span>
                     <span className="text-white/60">9:00 AM – 6:00 PM</span>
                  </div>
                  <div className="text-white/20 text-[10px] font-mono italic">Dubai Standard Time (GST, UAE)</div>
               </div>
             </div>

             <div className="mt-10 md:mt-12 pt-8 md:pt-12 border-t border-white/5 space-y-6 md:space-y-8">
                <div className="flex flex-col gap-3 md:gap-4 items-center md:items-start text-center md:text-left">
                   <span className="text-white/40 text-[10px] md:text-xs font-bold uppercase tracking-widest">Global Reach Channel</span>
                   <div className="flex gap-3 md:gap-4">
                      <a href="#" className="w-12 h-12 md:w-14 md:h-14 glass rounded-xl md:rounded-2xl flex items-center justify-center text-white/30 hover:text-blue-500 transition-all hover:scale-110" title="Facebook"><div className="scale-90 md:scale-100"><Facebook className="w-5 h-5 md:w-6 md:h-6" /></div></a>
                      <a href="#" className="w-12 h-12 md:w-14 md:h-14 glass rounded-xl md:rounded-2xl flex items-center justify-center text-white/30 hover:text-pink-500 transition-all hover:scale-110" title="Instagram"><div className="scale-90 md:scale-100"><Instagram className="w-5 h-5 md:w-6 md:h-6" /></div></a>
                      <a href="https://youtube.com/@whssocialmedia?si=JtUlJZv92pnZyJuC" target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-14 md:h-14 glass rounded-xl md:rounded-2xl flex items-center justify-center text-white/30 hover:text-red-500 transition-all hover:scale-110" title="YouTube"><div className="scale-90 md:scale-100"><Youtube className="w-5 h-5 md:w-6 md:h-6" /></div></a>
                      <a href="#" className="w-12 h-12 md:w-14 md:h-14 glass rounded-xl md:rounded-2xl flex items-center justify-center text-white/30 hover:text-white transition-all hover:scale-110" title="TikTok"><div className="scale-90 md:scale-100"><Music className="w-5 h-5 md:w-6 md:h-6" /></div></a>
                   </div>
                </div>
                <a 
                  href="https://wa.me/971527628660" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full py-5 md:py-6 bg-green-500 hover:bg-green-600 text-white rounded-2xl md:rounded-3xl font-black text-lg md:text-xl flex items-center justify-center gap-3 md:gap-4 transition-all shadow-2xl shadow-green-900/40 active:scale-95"
                >
                  <MessageCircle className="w-6 h-6 md:w-7 md:h-7" /> WhatsApp Direct
                </a>
             </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="glass rounded-[2rem] md:rounded-[4rem] overflow-hidden border border-white/10 h-[400px] md:h-[600px] relative group">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.697412345678!2d55.3344606!3d25.2639692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5cbdc2b0e07b%3A0xe548c7757917cbb8!2sAl%20Khabaisi%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sae!4v1714134567890!5m2!1sen!2sae" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true}
          loading="lazy" 
          className="opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 h-full w-full absolute inset-0"
        />
        <div className="absolute top-6 left-6 md:top-12 md:left-12 p-6 md:p-10 glass border border-white/10 rounded-2xl md:rounded-3xl z-20 pointer-events-none group-hover:opacity-0 transition-opacity duration-500 backdrop-blur-2xl max-w-[280px] md:max-w-none">
           <div className="text-blue-400 font-mono text-[9px] md:text-xs font-bold uppercase tracking-[0.4em] mb-2 md:mb-4">Location Anchor</div>
           <h4 className="text-lg md:text-2xl font-bold text-white mb-1 md:mb-2 tracking-tight">Al Khabaisi District, Deira</h4>
           <div className="text-white/40 text-[10px] md:text-sm font-medium">Search: 'Office 413-205 Deira'</div>
        </div>
      </section>

      {/* Trust Badge */}
      <section className="glass p-8 md:p-16 rounded-3xl md:rounded-[4rem] border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 text-center md:text-left">
           <div className="w-20 h-20 md:w-28 md:h-28 bg-emerald-500/20 rounded-2xl md:rounded-[2rem] flex items-center justify-center text-emerald-400 shadow-[0_0_50px_rgba(16,185,129,0.3)] shrink-0">
             <CheckCircle2 className="w-10 h-10 md:w-14 md:h-14" />
           </div>
           <div className="space-y-2 md:space-y-4">
              <h3 className="text-2xl md:text-4xl font-bold text-white uppercase italic tracking-tight">DED Licensed & Verified</h3>
              <p className="text-white/40 text-sm md:text-lg leading-relaxed max-w-2xl">
                Officially registered under the Dubai Department of Economy and Tourism (DET), providing a secure and professional foundation for all our digital partnerships across the UAE.
              </p>
           </div>
           <ArrowRight className="w-10 h-10 text-white/10 hidden lg:block" />
        </div>
      </section>
    </div>
  );
};
