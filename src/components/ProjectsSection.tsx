import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, Filter, CheckCircle2 } from 'lucide-react';
import { projectsData } from '@/app/data';

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<string>('All');
  
  const categories = ['All', 'Full Stack', 'Cloud', 'Frontend'];

  const filteredProjects = activeTab === 'All'
    ? projectsData
    : projectsData.filter(proj => proj.category === activeTab);

  return (
    <section
      id="projects"
      className="relative py-24 px-4 sm:px-6 lg:px-8 z-10 border-t border-white/5 bg-gradient-to-b from-[#0B0B0F]/40 to-transparent"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header content and filters */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="text-center md:text-left">
            <p className="font-mono text-xs text-[#06B6D4] tracking-widest uppercase">04 / ENGINEERED REPOS</p>
            <h2 className="font-sans text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1">
              Featured Projects
            </h2>
            <div className="h-1 w-12 bg-gradient-to-r from-[#06B6D4] to-[#8B5CF6] mt-4 rounded-full mx-auto md:mx-0" />
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md self-center md:self-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`relative px-4 py-1.5 rounded-xl font-sans text-xs font-semibold tracking-wide cursor-pointer transition-colors ${
                  activeTab === cat ? 'text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                {activeTab === cat && (
                  <motion.span
                    layoutId="activeTabBackground"
                    className="absolute inset-0 bg-[#6366F1]/20 border border-[#6366F1]/30 rounded-xl -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-[32px] bg-white/5 border border-white/10 overflow-hidden shadow-2xl flex flex-col justify-between backdrop-blur-md"
              >
                
                {/* Image Top bar */}
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-black/40 border-b border-white/10">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Dark gradient blur over image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

                    <div className="absolute top-4 left-4 bg-black/80 border border-white/10 rounded-lg px-2.5 py-1 text-[9px] text-[#06B6D4] font-mono tracking-widest uppercase shadow-md font-bold">
                      {project.category}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <h3 className="font-sans text-base sm:text-lg font-bold text-white group-hover:text-[#6366F1] transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-sans text-xs text-white/80 leading-relaxed font-semibold">
                      {project.summary}
                    </p>
                    <p className="font-sans text-xs text-white/50 leading-relaxed max-h-[80px] overflow-hidden text-ellipsis">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Footer specs & actions */}
                <div className="p-6 pt-0 space-y-4">
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                    {project.technologies.map(tech => (
                      <span
                        key={tech}
                        className="font-mono text-[9px] font-semibold text-white/50 bg-white/5 border border-white/10 rounded-md px-2 py-0.5 uppercase"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Button bar links */}
                  <div className="flex items-center gap-3 pt-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 active:scale-[0.98] transition-all cursor-pointer"
                      >
                        <Github className="w-3.5 h-3.5" />
                        Code
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:opacity-90 rounded-xl active:scale-[0.98] transition-all cursor-pointer shadow-[0_4px_12px_rgba(99,102,241,0.15)]"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
