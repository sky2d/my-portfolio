import { useRef, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";

const TECH_ICONS = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
];

function TechBox({
  icon,
  initialPosition,
  baseVelocity,
  rotationSpeed,
  scale,
}: any) {
  const groupRef = useRef<THREE.Group>(null);
  const velocity = useRef(new THREE.Vector3(0, 0, 0));
  const [showGreeting, setShowGreeting] = useState(false);

  useFrame((state) => {
    if (!groupRef.current) return;
    const group = groupRef.current;

    const mousePos = new THREE.Vector3(
      (state.pointer.x * state.viewport.width) / 2,
      (state.pointer.y * state.viewport.height) / 2,
      0,
    );

    // Calculate distance to mouse
    const dx = group.position.x - mousePos.x;
    const dy = group.position.y - mousePos.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    // Interactive Repel effect (dodge the mouse)
    if (dist < 4) {
      const force = (4 - dist) * 0.02;
      velocity.current.x += (dx / dist) * force;
      velocity.current.y += (dy / dist) * force;
    }

    // Smoothly pull current velocity back to the box's original random drifting direction
    velocity.current.lerp(baseVelocity, 0.05);

    // Update position
    group.position.add(velocity.current);

    // Gently rotate
    group.rotation.x += rotationSpeed.x;
    group.rotation.y += rotationSpeed.y;
    group.rotation.z += rotationSpeed.z;

    // Infinite Wrapping on tighter boundaries to maintain density
    if (group.position.x > 18) group.position.x = -18;
    if (group.position.x < -18) group.position.x = 18;
    if (group.position.y > 12) group.position.y = -12;
    if (group.position.y < -12) group.position.y = 12;
  });

  return (
    <group ref={groupRef} position={initialPosition} scale={scale}>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color="#ffffff"
          roughness={0.2}
          metalness={0.1}
          transparent
          opacity={0.3}
        />

        <Html transform distanceFactor={4} position={[0, 0, 0.51]}>
          <div
            className="w-16 h-16 bg-white/90 rounded-xl flex items-center justify-center p-3 shadow-lg border border-black/5 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setShowGreeting(true);
              setTimeout(() => setShowGreeting(false), 2000);
            }}>
            {showGreeting ? (
              <span className="text-xl font-bold text-black select-none whitespace-nowrap">
                Hii 👋
              </span>
            ) : (
              <img
                src={icon}
                alt="tech"
                className="w-full h-full object-contain pointer-events-none"
              />
            )}
          </div>
        </Html>
        <Html
          transform
          distanceFactor={4}
          position={[0, 0, -0.51]}
          rotation={[0, Math.PI, 0]}>
          <div
            className="w-16 h-16 bg-white/90 rounded-xl flex items-center justify-center p-3 shadow-lg border border-black/5 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setShowGreeting(true);
              setTimeout(() => setShowGreeting(false), 2000);
            }}>
            {showGreeting ? (
              <span className="text-xl font-bold text-black select-none whitespace-nowrap">
                Hii 👋
              </span>
            ) : (
              <img
                src={icon}
                alt="tech"
                className="w-full h-full object-contain pointer-events-none"
              />
            )}
          </div>
        </Html>
      </mesh>
    </group>
  );
}

export function FloatingTechIcons() {
  const count = 40;

  const boxes = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      icon: TECH_ICONS[i % TECH_ICONS.length],
      initialPosition: new THREE.Vector3(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 8 - 2,
      ),
      baseVelocity: new THREE.Vector3(
        (Math.random() - 0.5) * 0.04,
        (Math.random() - 0.5) * 0.04,
        (Math.random() - 0.5) * 0.01,
      ),
      rotationSpeed: new THREE.Vector3(
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.01,
      ),
      scale: Math.random() * 1.6 + 0.2,
    }));
  }, []);

  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1.2}
        color="#ffffff"
      />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#e99b8a" />

      {boxes.map((box, i) => (
        <TechBox key={i} {...box} />
      ))}
    </>
  );
}

export function Scene3D() {
  return <FloatingTechIcons />;
}
