import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, Sparkles } from 'lucide-react';
import { experiencesData } from '@/app/data';


export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative py-24 px-4 sm:px-6 lg:px-8 z-10 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center md:text-left mb-16">
          <p className="font-mono text-xs text-[#06B6D4] tracking-widest uppercase">03 / DEVELOPMENT CARREER</p>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1">
            Experience Timeline
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-[#06B6D4] to-[#6366F1] mt-4 rounded-full mx-auto md:mx-0" />
        </div>

        {/* Timeline container */}
        <div className="relative max-w-4xl mx-auto md:ml-12 text-left">
          
          {/* Glowing vertical line and nodes */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#6366F1] via-[#8B5CF6] to-transparent" />

          <div className="space-y-12">
            {experiencesData.map((exp, idx) => {
              const isGlowing = exp.glowing;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="relative pl-12 md:pl-20 group"
                >
                  
                  {/* Timeline Node Selector */}
                  <div className="absolute left-1.5 md:left-5.5 top-1.5 flex items-center justify-center">
                    {isGlowing ? (
                      <div className="relative w-5 h-5">
                        <span className="absolute -inset-1 rounded-full bg-[#6366F1] opacity-75 animate-ping blur-[2px]" />
                        <span className="relative block w-5 h-5 rounded-full bg-gradient-to-tr from-[#6366F1] to-[#06B6D4] border-2 border-[#0B0B0F]" />
                      </div>
                    ) : (
                      <span className="block w-4 h-4 rounded-full bg-[#121217] border-2 border-zinc-600 transition-colors group-hover:border-purple-400 group-hover:bg-purple-950" />
                    )}
                  </div>

                  {/* Company Box Grid Card */}
                  <motion.div
                    whileHover={{ y: -4, borderColor: 'rgba(255, 255, 255, 0.12)' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className={`relative p-6 sm:p-8 rounded-2xl border transition-colors duration-200 ${
                      isGlowing 
                        ? 'bg-gradient-to-tr from-[#121217]/80 to-[#121217]/35 border-white/10 shadow-xl shadow-indigo-500/5' 
                        : 'bg-[#121217]/30 border-white/5'
                    }`}
                  >
                    
                    {/* Header line context */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-4 pb-4 border-b border-white/5">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-sans text-base sm:text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                            {exp.role}
                          </span>
                          {isGlowing && (
                            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/20 text-[9px] font-mono text-indigo-400 uppercase tracking-widest leading-none">
                              <Sparkles className="w-2.5 h-2.5" />
                              Active
                            </span>
                          )}
                        </div>
                        <p className="font-sans text-sm font-semibold text-zinc-300 flex items-center gap-1.5">
                          <Briefcase className="w-3.5 h-3.5 text-[#06B6D4]" />
                          {exp.company}
                        </p>
                      </div>

                      <div className="flex flex-row sm:flex-col items-start sm:items-end gap-3 sm:gap-1 text-[11px] font-mono text-zinc-500">
                        <span className="flex items-center gap-1 shrink-0">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.duration}
                        </span>
                        <span className="flex items-center gap-1 shrink-0">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-2.5 text-left">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors leading-relaxed">
                          <span className="font-mono text-[#06B6D4] mt-1 text-[10px] shrink-0">■</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>

                  </motion.div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
