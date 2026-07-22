'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/common/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import { aiCapabilities } from '@/data/portfolio';
import { fadeUp, scaleIn, viewportConfig } from '@/utils/animations';
import dynamic from 'next/dynamic';

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

const AiCanvas = dynamic(
  () =>
    Promise.resolve(() => (
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }} gl={{ antialias: true, alpha: true }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.5} />
        <pointLight position={[3, 3, 3]} color="#7c3aed" intensity={2} />
        <pointLight position={[-3, -3, -3]} color="#06b6d4" intensity={1.5} />
        <NeuralNet />
      </Canvas>
    )),
  { ssr: false }
);

export default function AiEngineering() {
  return (
    <section id="ai-engineering" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="AI & Operations"
          title="AI-Augmented"
          highlight="Workflows"
          description="Not just a user of AI tools — an early adopter who integrates LLMs directly into live enterprise operations to solve real problems faster."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Neural network visual */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="relative h-80 lg:h-96"
          >
            <AiCanvas />
            {/* Overlay labels */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-4 left-4 px-2.5 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-xs text-purple-300 font-medium">
                Claude · ChatGPT
              </div>
              <div className="absolute bottom-4 right-4 px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-300 font-medium">
                Azure Pipeline · SQL
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-2 px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/[0.08] text-xs text-white/50 font-medium">
                AI Diagnostics
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Actively Integrating AI
            </div>

            <h3 className="text-2xl font-bold text-white leading-tight">
              AI tools aren&apos;t a future plan —{' '}
              <span className="gradient-text">they&apos;re already in production</span>
            </h3>

            <p className="text-white/55 leading-relaxed">
              I integrated Claude and ChatGPT into Circana&apos;s weekly QC workflow to diagnose Azure Pipeline
              discrepancies — cutting error-resolution time by 45%. This wasn&apos;t a side project; it was a
              live operational improvement adopted ahead of standard team practice.
            </p>

            <div className="space-y-3">
              {[
                'Prompt engineering for data pipeline diagnostics',
                'AI-assisted root cause analysis in enterprise ETL',
                'LLM-augmented documentation and stakeholder reporting',
                'Python scripting layered with AI-driven CAPA analysis',
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportConfig}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 text-sm text-white/65"
                >
                  <span className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0">✓</span>
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Capability cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {aiCapabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              custom={i}
            >
              <GlassCard className="p-5 h-full" gradient hover>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-3"
                  style={{ background: `${cap.color}20`, border: `1px solid ${cap.color}40` }}
                >
                  {cap.icon}
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{cap.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed mb-3">{cap.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {cap.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] rounded-md border text-white/50"
                      style={{ borderColor: `${cap.color}30`, background: `${cap.color}10` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
