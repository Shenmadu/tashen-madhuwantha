import { techMarqueeData } from '@/app/data';

export default function TechMarquee() {
  return (
    <div className="relative py-8 bg-[#0B0B0F]/40 border-y border-white/5 overflow-hidden w-full z-10">
      {/* Dynamic Fades over corners */}
      <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#0B0B0F] to-transparent z-25 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#0B0B0F] to-transparent z-25 pointer-events-none" />

      {/* Marquee slider tracks */}
      <div className="flex w-max gap-8 animate-marquee">
        {/* Double load items to make a seamless continuous loop */}
        {[...techMarqueeData, ...techMarqueeData, ...techMarqueeData].map((tech, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 group cursor-default"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1] group-hover:scale-150 transition-transform duration-200" />
            <span className="font-mono text-[10px] sm:text-xs font-bold text-zinc-400 group-hover:text-white transition-colors uppercase tracking-widest leading-none">
              {tech}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}
