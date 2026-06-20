import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Layers, Server, Database, Cloud, Atom, Terminal, ShieldAlert,
  FileJson, Braces, Leaf, Wind, Coffee, Activity, Scale, Cloudy,
  Box, GitBranch, Cpu, CheckCircle2, ChevronRight, Sparkles
} from 'lucide-react';
import { skillCategories } from '@/app/data';
import { Skill } from '@/app/types';

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>(skillCategories[0].category);
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);

  // Helper mapping icon names to Lucide icons
  const getIcon = (name: string, className: string = "w-5 h-5") => {
    switch (name) {
      case 'Layers': return <Layers className={className} />;
      case 'Server': return <Server className={className} />;
      case 'Database': return <Database className={className} />;
      case 'Cloud': return <Cloud className={className} />;
      case 'Atom': return <Atom className={className} />;
      case 'Terminal': return <Terminal className={className} />;
      case 'ShieldAlert': return <ShieldAlert className={className} />;
      case 'FileJson': return <FileJson className={className} />;
      case 'Braces': return <Braces className={className} />;
      case 'Leaf': return <Leaf className={className} />;
      case 'Wind': return <Wind className={className} />;
      case 'Coffee': return <Coffee className={className} />;
      case 'Activity': return <Activity className={className} />;
      case 'Scale': return <Scale className={className} />;
      case 'Cloudy': return <Cloudy className={className} />;
      case 'Box': return <Box className={className} />;
      case 'GitBranch': return <GitBranch className={className} />;
      default: return <Cpu className={className} />;
    }
  };

  const currentCategoryObj = skillCategories.find(cat => cat.category === selectedCategory) || skillCategories[0];

  return (
    <section
      id="skills"
      className="relative py-24 px-4 sm:px-6 lg:px-8 z-10 border-t border-white/5 bg-gradient-to-b from-transparent to-[#0B0B0F]/40"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header section */}
        <div className="text-center md:text-left mb-16">
          <p className="font-mono text-xs text-[#8B5CF6] tracking-widest uppercase">02 / TECHNICAL ARSENAL</p>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1">
            Engineered Capabilities
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] mt-4 rounded-full mx-auto md:mx-0" />
        </div>

        {/* Main Bento Grid layout - items-stretch ensures column alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Panel: Category Tabs and Insight Card */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Category selection card with flex-grow to match height */}
            <div className="p-2.5 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl flex-grow">
              <span className="block text-[9px] font-mono text-white/40 tracking-[0.2em] px-4 pt-3.5 pb-2 uppercase">SELECT ARCHITECTURE TIER</span>
              <div className="flex flex-col gap-1.5 p-1 pb-2">
                {skillCategories.map((catObj) => {
                  const isSelected = catObj.category === selectedCategory;
                  return (
                    <button
                      key={catObj.category}
                      onClick={() => {
                        setSelectedCategory(catObj.category);
                        setHoveredSkill(null);
                      }}
                      className={`w-full flex items-center justify-between p-3.5 rounded-2xl transition-all font-sans text-xs font-semibold tracking-wide cursor-pointer border ${
                        isSelected
                          ? 'bg-gradient-to-r from-[#6366F1]/10 to-[#8B5CF6]/10 text-white border-[#6366F1]/40 shadow-lg shadow-indigo-500/5'
                          : 'text-white/60 border-transparent hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${
                          isSelected ? 'bg-gradient-to-tr from-[#6366F1] to-[#8B5CF6] text-white shadow-md' : 'bg-white/5 text-white/50 border border-white/5'
                        }`}>
                          {getIcon(catObj.iconName, 'w-4 h-4')}
                        </div>
                        {catObj.category}
                      </div>
                      <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-0.5 text-indigo-400' : 'text-[#6366F1]'}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Insight card */}
            <div className="p-6 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-md text-left shadow-2xl">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#06B6D4] animate-pulse" />
                <span className="font-mono text-[9px] text-[#06B6D4] tracking-widest uppercase">DYNAMIC INSIGHT</span>
              </div>
              <h4 className="font-sans text-xs font-bold text-white mt-2">Pragmatic Skill Distribution</h4>
              <p className="font-sans text-[11px] text-white/50 leading-relaxed mt-1.5">
                Every percentage is reflective of production-grade operations. Real world proficiency is tested by benchmark optimization, sub-millisecond API latency, and stable platform uptime.
              </p>
            </div>
          </div>

          {/* Right Panel: Detailed Skill Breakdown and Visual Sandbox */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            
            {/* Active category details list */}
            <div className="md:col-span-7 p-8 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-md flex flex-col justify-between shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-gradient-to-tr from-[#6366F1]/15 to-[#8B5CF6]/15 border border-white/10 text-[#6366F1]">
                      {getIcon(currentCategoryObj.iconName, 'w-5 h-5')}
                    </div>
                    <span className="font-sans text-sm font-bold text-white">{currentCategoryObj.category}</span>
                  </div>
                  <span className="font-mono text-[9px] tracking-wider text-[#06B6D4] bg-[#06B6D4]/5 border border-[#06B6D4]/20 rounded-full px-2.5 py-1 uppercase font-semibold">
                    {currentCategoryObj.skills.length} Tools Mastered
                  </span>
                </div>

                <div className="space-y-4">
                  {currentCategoryObj.skills.map((skill) => (
                    <div
                      key={skill.name}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      className="group cursor-pointer p-2 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-250"
                    >
                      <div className="flex justify-between items-center mb-1.5">
                        <div className="flex items-center gap-2">
                          <div className="p-1 rounded-md bg-white/5 border border-white/10 text-white/70 group-hover:text-white transition-colors">
                            {getIcon(skill.iconName, 'w-3.5 h-3.5')}
                          </div>
                          <span className="font-sans text-xs font-semibold text-white/80 group-hover:text-white transition-colors">{skill.name}</span>
                        </div>
                        <div className="flex items-center gap-2 font-mono text-[10px]">
                          <span className="text-[#06B6D4] font-medium">{skill.level}</span>
                          <span className="text-white/45 group-hover:text-white/80 transition-colors">{skill.percentage}%</span>
                        </div>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden relative">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.percentage}%` }}
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                          className="h-full rounded-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-6 border-t border-white/10 mt-6 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="font-sans text-[10px] text-white/50">Hover over any competency block to capture system insights.</span>
              </div>
            </div>

            {/* Sandbox Side Interactive visualization */}
            <div className="md:col-span-5 p-8 rounded-[32px] bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex flex-col justify-between text-left relative overflow-hidden shadow-2xl">
              <span className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#6366F1]/10 blur-[40px] pointer-events-none" />
              <AnimatePresence mode="wait">
                {hoveredSkill ? (
                  <motion.div
                    key={hoveredSkill.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="h-full flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 flex-wrap">
                        <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-white">
                          {getIcon(hoveredSkill.iconName, 'w-6 h-6')}
                        </div>
                        <div>
                          <h4 className="font-sans text-base font-bold text-white">{hoveredSkill.name}</h4>
                          <span className="font-mono text-[9px] text-[#06B6D4] tracking-widest uppercase">{hoveredSkill.level} Tier</span>
                        </div>
                      </div>
                      <div className="space-y-2 border-t border-white/10 pt-4">
                        <p className="font-mono text-[9px] text-[#8B5CF6] tracking-widest uppercase">EVALUATION METRIC</p>
                        <ul className="space-y-1.5">
                          <li className="flex items-start gap-1.5 text-[11px] text-white/60">
                            <span className="font-mono text-[#8B5CF6]">•</span> High-concurrency benchmark tested
                          </li>
                          <li className="flex items-start gap-1.5 text-[11px] text-white/60">
                            <span className="font-mono text-[#8B5CF6]">•</span> Pragmatic pattern structure
                          </li>
                          <li className="flex items-start gap-1.5 text-[11px] text-white/60">
                            <span className="font-mono text-[#8B5CF6]">•</span> Zero manual layout leakage
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="pt-6">
                      <div className="p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/15 text-emerald-400 font-mono text-[9px] tracking-wider text-center uppercase">
                        ACTIVE IN 12+ REPOS
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full flex flex-col items-center justify-center text-center p-4 space-y-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40">
                      <Cpu className="w-6 h-6 animate-pulse" />
                    </div>
                    <div>
                      <h4 className="font-sans text-xs font-bold text-white">Inspect Tooling Block</h4>
                      <p className="font-sans text-[11px] text-white/40 leading-relaxed mt-1">
                        Move cursor over any skill listed in the current category view to inspect operational metrics.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}