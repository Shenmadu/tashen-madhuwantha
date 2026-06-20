"use client";
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function DynamicBackground() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
 
  if (!isMounted) {
    return (
      <div className="fixed inset-0 -z-50 overflow-hidden bg-[#0B0B0F] pointer-events-none">
        {/* Aurora Background Effects */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#6366F1] rounded-full blur-[120px] opacity-20 pointer-events-none animate-pulse duration-[8000ms]" />
        <div className="absolute bottom-[0%] right-[-5%] w-[400px] h-[400px] bg-[#06B6D4] rounded-full blur-[100px] opacity-10 pointer-events-none" />
        <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-[#8B5CF6] rounded-full blur-[150px] opacity-15 pointer-events-none" />
        
        {/* Light Mesh Accent Paths */}
        <div className="absolute top-0 left-0 right-0 h-[100vh] bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at 50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      </div>
    );
  }
 
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#0B0B0F] pointer-events-none">
      {/* Aurora Background Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#6366F1] rounded-full blur-[120px] opacity-20 pointer-events-none animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-[0%] right-[-5%] w-[400px] h-[400px] bg-[#06B6D4] rounded-full blur-[100px] opacity-10 pointer-events-none" />
      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-[#8B5CF6] rounded-full blur-[150px] opacity-15 pointer-events-none" />
      
      {/* Light Mesh Accent Paths */}
      <div className="absolute top-0 left-0 right-0 h-[100vh] bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at 50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Small floating points */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => {
          const size = Math.random() * 4 + 2;
          return (
            <motion.div
              key={i}
              className="absolute bg-white/20 rounded-full"
              style={{
                width: size,
                height: size,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * -100 - 40, 0],
                x: [0, Math.random() * 40 - 20, 0],
                opacity: [0.1, Math.random() * 0.6 + 0.2, 0.1],
              }}
              transition={{
                duration: Math.random() * 15 + 15,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          );
        })}
      </div>
    </div>
  );
}