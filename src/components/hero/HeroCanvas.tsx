'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Stars, Trail } from '@react-three/drei';
import * as THREE from 'three';
import { useMousePosition } from '@/hooks/useAnimations';

function ParticleField() {
  const meshRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const count = 1200;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const colorA = new THREE.Color('#7c3aed');
    const colorB = new THREE.Color('#06b6d4');
    const colorC = new THREE.Color('#ffffff');

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;

      const t = Math.random();
      const c = t < 0.4 ? colorA : t < 0.7 ? colorB : colorC;
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, []);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.02;
      meshRef.current.rotation.y += delta * 0.015;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          array={colors}
          count={colors.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.025} vertexColors transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

function AiOrb({ mouse }: { mouse: { x: number; y: number } }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { size } = useThree();

  useFrame((state) => {
    if (meshRef.current) {
      const targetX = (mouse.x / size.width - 0.5) * 0.8;
      const targetY = -(mouse.y / size.height - 0.5) * 0.8;
      meshRef.current.rotation.x += (targetY - meshRef.current.rotation.x) * 0.05;
      meshRef.current.rotation.y += (targetX - meshRef.current.rotation.y) * 0.05;
      meshRef.current.position.x += (targetX * 0.3 - meshRef.current.position.x) * 0.04;
      meshRef.current.position.y += (targetY * 0.3 - meshRef.current.position.y) * 0.04;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={meshRef}>
        <Sphere args={[1.2, 64, 64]}>
          <MeshDistortMaterial
            color="#7c3aed"
            attach="material"
            distort={0.45}
            speed={2.5}
            roughness={0}
            metalness={0.2}
            transparent
            opacity={0.85}
          />
        </Sphere>
        {/* Inner glow core */}
        <Sphere args={[0.7, 32, 32]}>
          <meshBasicMaterial color="#c084fc" transparent opacity={0.3} />
        </Sphere>
      </mesh>
    </Float>
  );
}

function OrbitRing() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.z += delta * 0.3;
      groupRef.current.rotation.x += delta * 0.1;
    }
  });

  const ringGeom = useMemo(() => {
    return new THREE.TorusGeometry(1.9, 0.01, 8, 100);
  }, []);

  return (
    <group ref={groupRef}>
      <mesh geometry={ringGeom}>
        <meshBasicMaterial color="#7c3aed" transparent opacity={0.3} />
      </mesh>
      <mesh geometry={ringGeom} rotation={[Math.PI / 3, 0, 0]}>
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.2} />
      </mesh>
    </group>
  );
}

export default function HeroCanvas() {
  const mouse = useMousePosition();

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      gl={{ antialias: true, alpha: true }}
      style={{ position: 'absolute', inset: 0 }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} color="#7c3aed" intensity={3} />
      <pointLight position={[-5, -3, -5]} color="#06b6d4" intensity={2} />
      <Stars radius={80} depth={50} count={2000} factor={2} saturation={0} fade speed={0.5} />
      <ParticleField />
      <AiOrb mouse={mouse} />
      <OrbitRing />
    </Canvas>
  );
}
