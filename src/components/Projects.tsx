import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

export function Projects() {
  const containerRef = useRef<HTMLElement>(null);
  
  return (
    <section id="projects" ref={containerRef} className="py-24 md:py-40 relative bg-background z-10">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-24">
          <div className="w-full md:w-1/3">
            <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-6">
              [03] Selected Work
            </h2>
            <div className="w-full h-px bg-border" />
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-3xl md:text-5xl font-bold tracking-tighter">
              Featured projects & case studies.
            </h3>
          </div>
        </div>

        <div className="space-y-32">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any, index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const isEven = index % 2 === 0;

  return (
    <div ref={cardRef} className="group relative flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
      
      {/* Visual Placeholder for Project */}
      <div className={`w-full lg:w-3/5 aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden relative border border-border bg-muted/30 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-accent/20 to-background/50 flex flex-col items-center justify-center text-center"
          style={{ y }}
        >
          {project.image ? (
            <img src={project.image} alt={project.name} className="absolute inset-0 w-full h-full object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-8">
              <div className="text-foreground/20 font-bold tracking-tighter text-6xl md:text-8xl opacity-30 select-none group-hover:scale-110 group-hover:text-accent/30 transition-all duration-700">
                {project.name.split(' ')[0]}
              </div>
              
              <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />
              
              {/* Abstract UI representation */}
              <div className="absolute w-3/4 h-2/3 bg-background/80 backdrop-blur-md rounded-xl border border-border shadow-2xl flex flex-col transform rotate-2 group-hover:rotate-0 transition-transform duration-700 delay-75">
                <div className="h-8 border-b border-border flex items-center px-4 gap-2">
                  <div className="w-2 h-2 rounded-full bg-border/50" />
                  <div className="w-2 h-2 rounded-full bg-border/50" />
                  <div className="w-2 h-2 rounded-full bg-border/50" />
                </div>
                <div className="p-4 flex-1 flex flex-col gap-3">
                  <div className="h-4 w-1/3 bg-muted rounded" />
                  <div className="h-2 w-full bg-muted rounded" />
                  <div className="h-2 w-5/6 bg-muted rounded" />
                  <div className="h-2 w-4/6 bg-muted rounded" />
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* Content */}
      <div className={`w-full lg:w-2/5 flex flex-col ${isEven ? 'lg:order-2 lg:pl-8' : 'lg:order-1 lg:pr-8'}`}>
        <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">
          Featured Project
        </span>
        <h4 className="text-3xl md:text-4xl font-bold mb-6 group-hover:text-accent transition-colors">
          {project.link ? (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {project.name}
            </a>
          ) : (
            project.name
          )}
        </h4>
        
        <div className="bg-muted/30 border border-border rounded-xl p-6 md:p-8 mb-6 relative backdrop-blur-sm group-hover:bg-muted/50 transition-colors">
          <p className="text-muted-foreground leading-relaxed mb-6">
            {project.description}
          </p>
          
          <ul className="space-y-3 mb-0">
            {project.points.slice(0, 3).map((point: string, i: number) => (
              <li key={i} className="text-muted-foreground/80 text-sm flex gap-2 items-start">
                <span className="text-accent mt-1 opacity-50 block leading-none">▹</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech: string) => (
            <span key={tech} className="text-xs font-mono text-muted-foreground border border-border/50 px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>

      </div>
      
    </div>
  );
}
