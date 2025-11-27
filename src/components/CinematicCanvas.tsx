'use client';

import { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Stars } from '@react-three/drei';
import * as THREE from 'three';

function RotatingReel() {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.3;
    group.current.rotation.x = Math.sin(Date.now() * 0.0004) * 0.2;
  });

  const frames = useMemo(() => new Array(6).fill(null), []);

  return (
    <group ref={group}>
      <mesh castShadow receiveShadow>
        <torusGeometry args={[1.5, 0.08, 32, 128]} />
        <meshStandardMaterial
          color="#00D1FF"
          emissive="#00D1FF"
          emissiveIntensity={1.2}
          metalness={0.6}
          roughness={0.2}
        />
      </mesh>
      {frames.map((_, index) => (
        <mesh key={index} rotation={[0, (index / frames.length) * Math.PI * 2, 0]}>
          <boxGeometry args={[0.05, 2.6, 1.2]} />
          <meshStandardMaterial color="#111111" metalness={0.2} roughness={0.8} />
        </mesh>
      ))}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.45, 0.45, 0.6, 48]} />
        <meshStandardMaterial color="#121212" metalness={0.5} roughness={0.3} />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <ringGeometry args={[0.4, 0.42, 64]} />
        <meshBasicMaterial color="#00D1FF" />
      </mesh>
    </group>
  );
}

function FloatingPanels() {
  return (
    <group position={[0, 0.4, -1.6]}>
      <Float
        speed={1.6}
        rotationIntensity={0.2}
        floatIntensity={0.8}
        floatingRange={[-0.3, 0.3]}
      >
        <mesh position={[-1.8, 0.2, 0]} rotation={[0.2, 0.4, -0.2]}>
          <planeGeometry args={[1.6, 2.4]} />
          <meshStandardMaterial
            color="#121212"
            metalness={0.35}
            roughness={0.25}
          />
        </mesh>
      </Float>
      <Float
        speed={1.3}
        rotationIntensity={0.15}
        floatIntensity={0.6}
        floatingRange={[-0.2, 0.2]}
      >
        <mesh position={[1.6, -0.2, 0]} rotation={[-0.3, -0.3, 0.3]}>
          <boxGeometry args={[1.2, 1.8, 0.08]} />
          <meshStandardMaterial color="#1B1B1B" metalness={0.4} roughness={0.35} />
        </mesh>
      </Float>
    </group>
  );
}

function CinematicLighting() {
  return (
    <group>
      <ambientLight intensity={0.2} />
      <spotLight
        position={[5, 8, 6]}
        intensity={1.8}
        angle={0.45}
        penumbra={0.6}
        castShadow
        color={new THREE.Color('#00D1FF')}
      />
      <spotLight
        position={[-6, -4, -3]}
        intensity={0.9}
        angle={0.5}
        penumbra={0.5}
        color={new THREE.Color('#FFFFFF')}
      />
      <pointLight position={[0, 0, 4]} intensity={0.3} color={new THREE.Color('#00D1FF')} />
    </group>
  );
}

function SceneContent() {
  return (
    <group>
      <RotatingReel />
      <FloatingPanels />
    </group>
  );
}

export default function CinematicCanvas() {
  return (
    <div className="relative h-[520px] w-full max-w-5xl">
      <Suspense fallback={<div className="h-full w-full" aria-hidden />}>
        <Canvas
          shadows
          dpr={[1, 1.8]}
          gl={{ antialias: true, alpha: true }}
          camera={{ position: [0, 1.2, 5.5], fov: 55 }}
        >
          <color attach="background" args={[0, 0, 0]} />
          <PerspectiveCamera makeDefault position={[0, 1.2, 5.5]} fov={55} />
          <CinematicLighting />
          <SceneContent />
          <Stars
            radius={35}
            depth={40}
            count={8000}
            factor={2.5}
            saturation={0}
            fade
            speed={0.3}
          />
        </Canvas>
      </Suspense>
      <div className="pointer-events-none absolute inset-0 rounded-[48px] border border-white/5 bg-gradient-to-b from-white/5 via-transparent to-black/60 shadow-glow" />
      <div className="pointer-events-none absolute -inset-12 -z-10 rounded-full bg-accentGlow/20 blur-3xl" />
    </div>
  );
}
