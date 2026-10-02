import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

export function Experience() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" ref={containerRef} className="py-24 md:py-40 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-20">
          <div className="w-full md:w-1/3">
            <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-6">
              [02] Experience
            </h2>
            <div className="w-full h-px bg-border" />
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-3xl md:text-5xl font-bold tracking-tighter">
              Engineering impact at scale.
            </h3>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-border md:-translate-x-1/2" />
          
          {/* Animated Progress Line */}
          <motion.div 
            className="absolute left-[20px] md:left-1/2 top-0 w-[2px] bg-accent md:-translate-x-1/2 origin-top"
            style={{ height: lineHeight }}
          />

          {portfolioData.experience.map((exp) => (
            <div key={exp.id} className="relative flex flex-col md:flex-row items-start justify-between mb-24 last:mb-0 group">
              
              {/* Dot */}
              <div className="absolute left-[16px] md:left-1/2 top-2 w-[10px] h-[10px] rounded-full bg-background border-2 border-accent md:-translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-150 group-hover:bg-accent" />

              {/* Date & Location (Desktop Left) */}
              <div className="w-full md:w-[45%] pl-12 md:pl-0 md:text-right md:pr-12 pt-1 mb-4 md:mb-0">
                <span className="inline-block text-accent font-mono text-sm tracking-wider mb-2 bg-accent/10 px-3 py-1 rounded-full">
                  {exp.date}
                </span>
                <p className="text-muted-foreground text-sm uppercase tracking-widest">{exp.location}</p>
              </div>

              {/* Content (Desktop Right) */}
              <div className="w-full md:w-[45%] pl-12 md:pl-12">
                <h4 className="text-2xl md:text-3xl font-bold mb-1">{exp.role}</h4>
                <h5 className="text-xl text-muted-foreground mb-6">{exp.company}</h5>
                
                <ul className="space-y-4 mb-6">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-muted-foreground/80 leading-relaxed text-sm md:text-base flex gap-3">
                      <span className="text-accent mt-1 opacity-50">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Metrics */}
                {exp.metrics && exp.metrics.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6 pt-4 border-t border-border/50">
                    {exp.metrics.map((metric, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="text-2xl md:text-3xl font-mono font-bold text-foreground">{metric.value}</span>
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">{metric.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map(tech => (
                    <span key={tech} className="text-xs font-mono border border-border/50 text-muted-foreground px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
