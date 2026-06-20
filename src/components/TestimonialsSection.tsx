import { motion } from 'motion/react';
import { Quote, Sparkles } from 'lucide-react';
import { testimonialsData } from '@/app/data';

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative py-24 px-4 sm:px-6 lg:px-8 z-10 border-t border-white/5 bg-gradient-to-b from-transparent to-[#0B0B0F]/20"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center md:text-left mb-16">
          <p className="font-mono text-xs text-[#06B6D4] tracking-widest uppercase">06 / CLIENT REVIEWS</p>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1">
            Industry Endorsements
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-[#06B6D4] to-[#8B5CF6] mt-4 rounded-full mx-auto md:mx-0" />
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {testimonialsData.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4, borderColor: 'rgba(255, 255, 255, 0.12)' }}
              className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#121217]/50 to-[#121217]/10 border border-white/5 backdrop-blur-md flex flex-col justify-between relative group"
            >
              
              {/* Graphic Element */}
              <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Quote className="w-12 h-12 text-[#6366F1]" />
              </div>

              {/* Quote text */}
              <div className="space-y-4">
                <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 mt-8 border-t border-white/5 pt-4">
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white/5 border border-white/10 shrink-0">
                  <img
                    src={testimonial.avatarUrl}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-sans text-xs font-bold text-white tracking-wide">
                    {testimonial.author}
                  </h4>
                  <p className="font-sans text-[10px] text-zinc-400 mt-0.5 font-semibold">
                    {testimonial.role}, <span className="text-zinc-500">{testimonial.company}</span>
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
