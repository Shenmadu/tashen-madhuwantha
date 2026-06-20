import { motion } from 'motion/react';
import { Award, CodeXml, Cpu, Sparkles, Terminal, ChevronRight } from 'lucide-react';
import { statsData } from '@/app/data';


interface AboutSectionProps {
  onNavClick: (id: string) => void;
}

export default function AboutSection({ onNavClick }: AboutSectionProps) {
  // Mapper for icons
  const getIcon = (name: string) => {
    switch (name) {
      case 'Award':
        return <Award className="w-5 h-5 text-[#6366F1]" />;
      case 'CodeXml':
        return <CodeXml className="w-5 h-5 text-[#8B5CF6]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#06B6D4]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#A78BFA]" />;
      default:
        return <Terminal className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section
      id="about"
      className="relative py-24 px-4 sm:px-6 lg:px-8 z-10 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center md:text-left mb-16">
          <p className="font-mono text-xs text-[#06B6D4] tracking-widest uppercase">01 / BRAND BACKGROUND</p>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1">
            Engineered with Precision & Passion
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-[#6366F1] to-[#06B6D4] mt-4 rounded-full mx-auto md:mx-0" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Professional Visual Card */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-3xl p-2 bg-gradient-to-tr from-white/10 to-transparent border border-white/10 backdrop-blur-2xl overflow-hidden group shadow-2xl"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-square max-w-[420px] mx-auto bg-black/50">
                <img
                  src="/img/about_graphic_1781282786393.jpg"
                  alt="Tashen Systems Flow Graphic"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
              </div>
              
              {/* Overlay Glass Card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0B0B0F]/80 border border-white/10 backdrop-blur-md">
                <span className="text-[10px] uppercase tracking-wider text-[#06B6D4] font-mono leading-none">CORE SPECIALIZATION</span>
                <p className="text-xs text-white font-medium mt-1">Cloud Architecture & Secure Backend APIs</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Descriptive Biography & Statistics */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
            <h3 className="font-sans text-xl sm:text-2xl font-semibold text-white tracking-tight leading-snug">
              Creating resilient full stack code structures with Vercel-like performance constraints.
            </h3>
            
            <p className="font-sans text-sm text-white/50 leading-relaxed">
              I've spent my career developing cloud services and modern user interfaces. I bridge the technical gap between beautiful frontends (Tailwind/React) and high-load servers (NodeJS, Laravel, Spring Boot). I am dedicated to maintaining optimal performance markers, automating pipeline builds, and designing pristine database models.
            </p>

            <p className="font-sans text-sm text-white/50 leading-relaxed">
              Based in Colombo, LKA, I specialize in translating complex system requirements into elegant web solutions. Whether containerizing backend servers or compiling interactive analytical dashboards, my deliverable goal is always the same: premium quality, optimized speed, and bulletproof security.
            </p>

            {/* Statistics Cards Grid */}            
            <div className="grid grid-cols-2 gap-3 mt-6 w-full min-w-0">
              {statsData.map((stat, idx) => (
                <motion.div
                  key={stat.id}                 
                  className="p-4 sm:p-6 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-md flex flex-col justify-between transition-colors duration-200 shadow-2xl break-words"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-sans text-2xl sm:text-4xl font-bold text-[#06B6D4] truncate">
                      {stat.value}
                    </span>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shadow-inner shrink-0">
                      {getIcon(stat.iconName)}
                    </div>
                  </div>
                  <div className="mt-4 text-left">
                    <p className="font-sans text-xs sm:text-sm font-semibold text-white truncate">{stat.label}</p>
                    <p className="font-mono text-[8px] sm:text-[9px] text-white/40 tracking-wider uppercase mt-1 truncate">{stat.sublabel}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={() => onNavClick('skills')}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider text-[#6366F1] hover:text-[#8B5CF6] transition-colors leading-none uppercase group cursor-pointer"
              >
                Inspect Technical Arsenal
                <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
