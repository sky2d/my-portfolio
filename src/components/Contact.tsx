import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.1-.34 6.33-1.54 6.33-6.9a5.05 5.05 0 0 0-1.4-3.64 4.6 4.6 0 0 0-.14-3.58s-1.12-.36-3.67 1.36a12.6 12.6 0 0 0-6.6 0C6.12 1.48 5 1.84 5 1.84a4.6 4.6 0 0 0-.14 3.58 5.05 5.05 0 0 0-1.4 3.64c0 5.34 3.23 6.54 6.33 6.9a4.8 4.8 0 0 0-1 3.02V22" />
    <path d="M9 20c-5 1.5-5-2.5-7-3" />
  </svg>
);

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-40 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl aspect-square bg-accent/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-8 leading-[1.1]">
            Let's build something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
              worth shipping.
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm currently available for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href={`mailto:${portfolioData.email}`}
              data-cursor-hover
              className="flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-full font-semibold hover:bg-white transition-colors"
            >
              <Mail size={20} />
              Say Hello
            </a>
            
            <a
              href={`tel:${portfolioData.phone}`}
              data-cursor-hover
              className="flex items-center gap-3 border border-border bg-background/50 backdrop-blur-sm px-8 py-4 rounded-full font-semibold hover:bg-muted transition-colors"
            >
              <Phone size={20} />
              {portfolioData.phone}
            </a>

            <a
              href={portfolioData.github}
              target="_blank"
              rel="noreferrer"
              data-cursor-hover
              className="flex items-center gap-3 border border-border bg-background/50 backdrop-blur-sm px-8 py-4 rounded-full font-semibold hover:bg-muted transition-colors"
            >
              <GithubIcon size={20} />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
