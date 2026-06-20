import { motion } from 'motion/react';
import { FileDown, Sparkles, Terminal, ArrowRight, ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  onNavClick: (sectionId: string) => void;
}

export default function HeroSection({ onNavClick }: HeroSectionProps) {
  const floatingTech = [
    { name: 'React', color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', top: '12%', left: '10%' },
    { name: 'Spring Boot', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', top: '25%', right: '8%' },
    { name: 'Next.js', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20', bottom: '15%', left: '15%' },
    { name: 'AWS', color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20', bottom: '28%', right: '12%' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden px-4 sm:px-6 lg:px-8 z-10"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side Info */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 md:space-y-8 text-left">
          
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-[#6366F1]/20 border border-[#6366F1]/30 rounded-full w-fit"
          >
            <span className="w-1.5 h-1.5 bg-[#6366F1] rounded-full animate-pulse"></span>
            <span className="text-[#6366F1] font-mono text-[9px] font-bold uppercase tracking-widest">
              Available for new projects
            </span>
          </motion.div>

          {/* Title & Name */}
          <div className="space-y-2 w-full">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-mono text-xs font-semibold tracking-widest text-white/40 uppercase"
            >
              BASED IN COLOMBO, SRI LANKA
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-white"
            >
              Tashen <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#06B6D4]">
                Madhuwantha
              </span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-sans text-lg sm:text-xl font-medium tracking-wide text-white/70 mt-1"
            >
              Full Stack Software Engineer
            </motion.h2>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-sans text-sm sm:text-base leading-relaxed text-white/50 max-w-xl"
          >
            Architecting scalable digital ecosystems for enterprise brands through high-performance code, next-gen reactive frontends, and modular server microservices.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => onNavClick('projects')}
              className="px-8 py-4 bg-[#6366F1] text-white rounded-2xl font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#6366F1]/20 cursor-pointer active:scale-95 transition-all hover:opacity-95"
            >
              View My Projects
            </button>
            <button
              onClick={() => onNavClick('contact')}
              className="px-8 py-4 border border-white/10 bg-white/5 rounded-2xl font-bold text-xs uppercase tracking-wider cursor-pointer hover:bg-white/10 active:scale-95 transition-all text-white"
            >
              Contact Me
            </button>
          </motion.div>
        </div>

        {/* Right Side Image Graphics */}
        <div className="lg:col-span-5 relative flex items-center justify-center min-h-[400px]">
          
          {/* Animated Glow Backdrops */}
          <div className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-[#6366F1]/20 via-[#8B5CF6]/20 to-[#06B6D4]/10 blur-[80px] -z-10 animate-pulse duration-[6000ms]" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[340px] md:h-[340px] rounded-3xl p-2.5 bg-gradient-to-tr from-white/10 via-white/5 to-white/0 border border-white/10 backdrop-blur-xl shadow-2xl flex items-center justify-center overflow-hidden"
          >
            {/* Visual Border Glow Layer */}
            <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8B5CF6]/40 to-transparent" />
            <span className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-[#6366F1]/40 to-transparent" />

            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black/40">
              <img             
                src="/img/tashen_avatar_1781282744726.jpg"
                alt="Tashen Madhuwantha - Full Stack Software Engineer"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Glass subtle gradient masking */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* In-corner status dot */}
            <div className="absolute bottom-5 left-5 bg-[#0B0B0F]/90 border border-white/10 rounded-xl px-3 py-1 text-[10px] text-emerald-400 font-mono tracking-wider uppercase flex items-center gap-1.5 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              SYSTEM_ONLINE
            </div>
          </motion.div>

          {/* Floating Technology Bubbles */}
          {floatingTech.map((tech, idx) => (
            <motion.div
              key={idx}
              className={`absolute hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl backdrop-blur-xl shadow-lg border ${tech.bg} ${tech.border}`}
              style={{
                top: tech.top,
                left: tech.left,
                right: tech.right,
                bottom: tech.bottom,
              }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: idx % 2 === 0 ? 5 : 6,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: idx * 0.5,
              }}
            >
              <div className={`w-1.5 h-1.5 rounded-full ${tech.color} bg-current`} />
              <span className="font-mono text-[9px] font-bold text-white tracking-wider uppercase">{tech.name}</span>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Floating Section Scroller Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
        <span className="text-zinc-500 font-mono text-[8px] tracking-widest uppercase">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="cursor-pointer"
          onClick={() => onNavClick('about')}
        >
          <ArrowDown className="w-3.5 h-3.5 text-[#06B6D4]" />
        </motion.div>
      </div>

    </section>
  );
}
