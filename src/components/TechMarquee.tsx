import { portfolioData } from '../data/portfolio';

export function TechMarquee() {
  const allTech = [
    ...portfolioData.skills.frameworks,
    ...portfolioData.skills.languages,
    ...portfolioData.skills.databases,
    ...portfolioData.skills.tools,
  ];

  // Remove duplicates and shuffle lightly
  const uniqueTech = Array.from(new Set(allTech)).sort(() => 0.5 - Math.random());

  return (
    <div className="py-12 md:py-24 border-y border-border/50 bg-background/50 overflow-hidden relative">
      <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-background to-transparent z-10" />
      
      <div className="flex gap-8 md:gap-16 whitespace-nowrap animate-marquee">
        {/* Double the list to create infinite seamless effect */}
        {[...uniqueTech, ...uniqueTech, ...uniqueTech].map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-4 text-muted-foreground/50 hover:text-accent transition-colors duration-300"
          >
            <span className="text-2xl md:text-4xl font-bold font-mono tracking-tighter uppercase">
              {tech}
            </span>
            <span className="text-accent">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
