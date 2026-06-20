import { motion } from 'motion/react';
import { Laptop, Globe, GitMerge, Workflow, Server, Cpu } from 'lucide-react';
import { servicesData } from '@/app/data';

export default function ServicesSection() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Laptop': return <Laptop className="w-5 h-5 text-[#6366F1]" />;
      case 'Globe': return <Globe className="w-5 h-5 text-[#8B5CF6]" />;
      case 'GitMerge': return <GitMerge className="w-5 h-5 text-[#06B6D4]" />;
      case 'Workflow': return <Workflow className="w-5 h-5 text-[#A78BFA]" />;
      case 'Server': return <Server className="w-5 h-5 text-[#34D399]" />;
      default: return <Cpu className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section
      id="services"
      className="relative py-24 px-4 sm:px-6 lg:px-8 z-10 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center md:text-left mb-16">
          <p className="font-mono text-xs text-[#8B5CF6] tracking-widest uppercase">05 / CORE SYSTEM SERVICES</p>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1">
            Engineered Services
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] mt-4 rounded-full mx-auto md:mx-0" />
        </div>

        {/* Services grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {servicesData.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5, borderColor: 'rgba(255, 255, 255, 0.2)' }}
              className="relative p-7 sm:p-8 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-md transition-colors duration-300 overflow-hidden group shadow-2xl"
            >
              {/* Soft purple-to-cyan background glow bubble */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-tr from-[#6366F1]/5 to-[#06B6D4]/5 blur-[20px] rounded-full pointer-events-none group-hover:scale-125 transition-transform" />

              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-inner relative">
                {getIcon(service.iconName)}
                <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
              </div>

              <h3 className="font-sans text-base sm:text-lg font-bold text-white mb-3">
                {service.title}
              </h3>

              <p className="font-sans text-xs sm:text-sm text-white/50 leading-relaxed">
                {service.description}
              </p>

              {/* Decorative side tab line */}
              <div className="absolute left-0 bottom-0 top-0 w-0.5 bg-gradient-to-b from-[#6366F1] to-transparent scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
