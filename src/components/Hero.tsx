import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { Scene3D } from './Scene3D';
import { useMediaQuery } from '../hooks/useMediaQuery';

export function Hero() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-noise pt-20">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-50 md:opacity-100">
        {!prefersReducedMotion && (
          <Canvas
            camera={{ position: [0, 0, 5], fov: 45 }}
            dpr={isMobile ? [1, 1.5] : [1, 2]}
            gl={{ antialias: !isMobile }}
          >
            <Suspense fallback={null}>
              <Scene3D />
            </Suspense>
          </Canvas>
        )}
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="w-full md:w-3/5 flex flex-col items-start justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-accent font-mono text-sm md:text-base font-semibold tracking-wider uppercase mb-4">
              {portfolioData.role}
            </h2>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[1.1] mb-6"
          >
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">intelligent</span> products at the intersection of AI × Engineering.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10"
          >
            I'm {portfolioData.name.split(' ')[0]}, building unified AI inference infrastructures and crafting robust frontend experiences.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              data-cursor-hover
              className="group flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-semibold hover:bg-white transition-colors"
            >
              View Projects
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              download="Akash_Verma_CV.pdf"
              data-cursor-hover
              className="group flex items-center gap-2 border border-border bg-background/50 backdrop-blur-sm px-8 py-4 rounded-full font-semibold hover:bg-muted transition-colors"
            >
              <Download className="group-hover:-translate-y-0.5 transition-transform" size={18} />
              Download CV
            </a>
            <a
              href="#contact"
              data-cursor-hover
              className="flex items-center gap-2 border border-border bg-background/50 backdrop-blur-sm px-8 py-4 rounded-full font-semibold hover:bg-muted transition-colors"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-border relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-accent"
            animate={{ y: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
