import { portfolioData } from '../data/portfolio';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50 relative z-10 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {portfolioData.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/70 mt-1">
            Designed & engineered with React, Three.js and caffeine.
          </p>
        </div>
        
        <div className="flex gap-4">
          <a 
            href={portfolioData.github} 
            target="_blank" 
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            GitHub
          </a>
          <a 
            href={`mailto:${portfolioData.email}`}
            className="text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
