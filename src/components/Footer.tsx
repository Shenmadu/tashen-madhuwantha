import { Github, Linkedin, Mail, ArrowUpCircle } from 'lucide-react';

interface FooterProps {
  onScrollTop: () => void;
}

export default function Footer({ onScrollTop }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-[#0B0B0F] z-10 text-zinc-500">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand signature */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-1">
          <p className="font-sans text-xs font-semibold text-white tracking-wide">Tashen Madhuwantha</p>
          <p className="font-mono text-[9px] tracking-wider text-zinc-500 uppercase">Senior Full Stack Software Engineer • © {currentYear}</p>
        </div>

        {/* Social connections links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/tashenmadhuwantha"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-white/2.5 border border-white/5 hover:border-white/10 text-zinc-400 hover:text-white transition-all cursor-pointer"
            title="GitHub Account"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/tashenmadhuwantha"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-white/2.5 border border-white/5 hover:border-white/10 text-zinc-400 hover:text-white transition-all cursor-pointer"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:tashenmadhuwantha@gmail.com"
            className="p-2.5 rounded-xl bg-white/2.5 border border-white/5 hover:border-white/10 text-zinc-400 hover:text-white transition-all cursor-pointer"
            title="Email Direct"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Scroll back to top handler */}
        <button
          onClick={onScrollTop}
          className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-[#06B6D4] hover:text-white transition-colors cursor-pointer group"
          title="Scroll to Top"
        >
          BACK_TO_TOP
          <ArrowUpCircle className="w-4 h-4 text-[#06B6D4] transition-transform group-hover:-translate-y-0.5" />
        </button>

      </div>
    </footer>
  );
}
