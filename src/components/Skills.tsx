import { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { cn } from '../lib/utils';

type SkillCategory = keyof typeof portfolioData.skills;

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | null>(null);

  const categories: { key: SkillCategory; label: string }[] = [
    { key: 'frameworks', label: 'Frameworks' },
    { key: 'languages', label: 'Languages' },
    { key: 'databases', label: 'Databases' },
    { key: 'tools', label: 'Tools & Services' },
  ];

  const handleHover = (category: SkillCategory | null) => {
    setActiveCategory(category);
  };

  return (
    <section id="skills" className="py-24 md:py-40 relative">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-20">
          <div className="w-full md:w-1/3">
            <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-6">
              [04] Constellation
            </h2>
            <div className="w-full h-px bg-border" />
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
              The technology stack.
            </h3>
            <p className="text-muted-foreground text-lg max-w-xl">
              A carefully curated set of tools and technologies I use to build scalable, high-performance applications and AI integrations.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map(({ key, label }) => (
            <div 
              key={key}
              className={cn(
                "p-8 rounded-2xl border border-border bg-muted/30 transition-all duration-500",
                activeCategory === key ? "border-accent shadow-[0_0_30px_rgba(var(--accent),0.1)] bg-muted/50" : 
                activeCategory ? "opacity-50 blur-[2px] scale-95" : ""
              )}
              onMouseEnter={() => handleHover(key)}
              onMouseLeave={() => handleHover(null)}
            >
              <h4 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent" />
                {label}
              </h4>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills[key].map(skill => (
                  <motion.span 
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-background border border-border text-sm font-medium"
                    whileHover={{ scale: 1.05, borderColor: 'hsl(var(--accent))' }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
