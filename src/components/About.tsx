import { useEffect, useRef, Suspense } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData } from '../data/portfolio';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, Html } from '@react-three/drei';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

import { useGLTF, OrbitControls } from '@react-three/drei';

// Preload the GLTF model
useGLTF.preload('/desktop_pc/scene.gltf');

// Load the highly detailed GLTF model
function RealisticWorkspace() {
  const { scene } = useGLTF('/desktop_pc/scene.gltf');

  return (
    <group>
      <primitive
        object={scene}
        scale={0.45}
        position={[0, -1.4, 0]}
        rotation={[0.1, -Math.PI / 2, 0]}
      />
    </group>
  );
}

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!textRef.current) return;
    
    const chars = textRef.current.querySelectorAll('.char');
    
    gsap.fromTo(chars, 
      { opacity: 0.2 },
      {
        opacity: 1,
        stagger: 0.05,
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          end: 'bottom 40%',
          scrub: true,
        }
      }
    );
  }, []);

  const splitText = (text: string) => {
    return text.split('').map((char, index) => (
      <span key={index} className="char transition-colors">
        {char}
      </span>
    ));
  };

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-40 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center">
          
          <div className="w-full md:w-1/2 relative h-[400px] md:h-[600px] cursor-crosshair">
            {/* 3D Canvas element in About */}
            <Canvas 
              frameloop="demand"
              shadows 
              camera={{ position: [0, 0, 20], fov: 25 }}
              gl={{ preserveDrawingBuffer: true }}
            >
              <Suspense fallback={null}>
                <OrbitControls 
                  enableZoom={false} 
                  maxPolarAngle={Math.PI / 2}
                  minPolarAngle={Math.PI / 2 - 0.2}
                />
                <Float speed={1} rotationIntensity={0.05} floatIntensity={0.1}>
                  <RealisticWorkspace />
                </Float>
                <hemisphereLight intensity={0.15} groundColor="black" />
                <ambientLight intensity={1.5} />
                <spotLight
                  position={[-20, 50, 10]}
                  angle={0.12}
                  penumbra={1}
                  intensity={1}
                  castShadow
                  shadow-mapSize={1024}
                />
                <pointLight intensity={1} />
                <Environment preset="city" />
              </Suspense>
            </Canvas>
          </div>

          <div className="w-full md:w-1/2">
            <motion.h2 
              className="text-sm font-mono text-accent uppercase tracking-widest mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              [01] Overview
            </motion.h2>
            <motion.div 
              className="w-full h-px bg-border mb-8"
              initial={{ scaleX: 0, originX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            
            <div ref={textRef} className="text-xl md:text-3xl lg:text-4xl font-medium leading-[1.4] tracking-tight mb-8">
              {splitText(portfolioData.about)}
            </div>

            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-muted/30 p-6 rounded-2xl border border-border/50 backdrop-blur-sm"
              >
                <h3 className="text-3xl md:text-4xl font-bold font-mono text-foreground mb-2 text-accent">2+</h3>
                <p className="text-muted-foreground uppercase text-xs font-semibold tracking-wider">Years Experience</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-muted/30 p-6 rounded-2xl border border-border/50 backdrop-blur-sm"
              >
                <h3 className="text-3xl md:text-4xl font-bold font-mono text-foreground mb-2 text-accent">9+</h3>
                <p className="text-muted-foreground uppercase text-xs font-semibold tracking-wider">AI Providers</p>
              </motion.div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
