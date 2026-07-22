'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function NeuralNet() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.2;
    }
  });

  const nodes: [number, number, number][] = [
    [0, 0, 0],
    [1.5, 1, 0.5], [-1.5, 1, -0.5], [0.5, -1.5, 0.5],
    [-0.5, -1.5, -0.5], [2, -0.5, -1], [-2, 0.5, 1],
    [0, 2, -1], [1, -2, 0.5], [-1, 0, 2],
  ];

  const edges: [number, number][] = [
    [0,1],[0,2],[0,3],[0,4],[1,5],[1,7],[2,6],[2,8],[3,9],[4,9],[5,7],[6,8],
  ];

  return (
    <group ref={groupRef}>
      {nodes.map((pos, i) => (
        <Float key={i} speed={1 + i * 0.1} floatIntensity={0.2}>
          <mesh position={pos}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshBasicMaterial color={i === 0 ? '#c084fc' : i % 2 === 0 ? '#7c3aed' : '#06b6d4'} />
          </mesh>
        </Float>
      ))}
      {edges.map(([a, b], i) => {
        const start = new THREE.Vector3(...nodes[a]);
        const end = new THREE.Vector3(...nodes[b]);
        const mid = start.clone().add(end).multiplyScalar(0.5);
        const dir = end.clone().sub(start);
        const len = dir.length();
        const axis = new THREE.Vector3(0, 1, 0);
        const q = new THREE.Quaternion().setFromUnitVectors(axis, dir.clone().normalize());

        return (
          <mesh key={i} position={mid} quaternion={q}>
            <cylinderGeometry args={[0.008, 0.008, len, 4]} />
            <meshBasicMaterial color="#7c3aed" transparent opacity={0.3} />
          </mesh>
        );
      })}
    </group>
  );
}

export default function AiCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }} gl={{ antialias: true, alpha: true }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.5} />
      <pointLight position={[3, 3, 3]} color="#7c3aed" intensity={2} />
      <pointLight position={[-3, -3, -3]} color="#06b6d4" intensity={1.5} />
      <NeuralNet />
    </Canvas>
  );
}
