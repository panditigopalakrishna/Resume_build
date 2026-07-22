'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Download, Mail, ArrowDown, Sparkles, BarChart2, Database, Bot } from 'lucide-react';
import { useTypingEffect } from '@/hooks/useAnimations';
import Button from '@/components/ui/Button';

const HeroCanvas = dynamic(() => import('./HeroCanvas'), { ssr: false });

const roles = [
  'Operations Specialist',
  'Data Analytics Lead',
  'AI-Powered Process Designer',
  'EMEA Reporting Expert',
  'Business Intelligence Analyst',
];

const statsData = [
  { value: '4+', label: 'Years Experience', icon: <Sparkles className="w-4 h-4" /> },
  { value: '5', label: 'EMEA Markets', icon: <Database className="w-4 h-4" /> },
  { value: '45%', label: 'Error Reduction', icon: <BarChart2 className="w-4 h-4" /> },
  { value: '100%', label: 'SLA Compliance', icon: <Bot className="w-4 h-4" /> },
];

export default function Hero() {
  const typedRole = useTypingEffect(roles, 75, 2200);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Three.js background */}
      <div className="absolute inset-0 z-0">
        <HeroCanvas />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-radial from-purple-900/20 via-transparent to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-40 z-[1] bg-gradient-to-t from-background to-transparent" />
      <div className="absolute top-0 inset-x-0 h-32 z-[1] bg-gradient-to-b from-background to-transparent" />

      {/* Dot grid */}
      <div className="absolute inset-0 z-[1] dot-grid opacity-30" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 bg-purple-500/10 border border-purple-500/20 text-purple-300"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for new opportunities
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-4 leading-[1.05]"
            >
              Kiruthiga
              <br />
              <span className="gradient-text">Giridharan</span>
            </motion.h1>

            {/* Typing role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-xl sm:text-2xl font-medium text-white/70 mb-6 h-8"
            >
              <span className="typing-cursor">{typedRole}</span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-white/50 text-lg leading-relaxed mb-8 max-w-xl"
            >
              MSc (Trinity College Dublin) · Engineering degree (First Class) · Specialist in
              turning complex data operations into reliable, on-time reporting at scale —
              now augmented with AI tools.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Button
                href="#contact"
                variant="primary"
                size="lg"
                icon={<Mail className="w-4 h-4" />}
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get In Touch
              </Button>
              <Button
                href="/Kiruthiga_OPS.pdf"
                variant="secondary"
                size="lg"
                icon={<Download className="w-4 h-4" />}
                download
              >
                Download Resume
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              {statsData.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + i * 0.08 }}
                  className="bg-white/[0.04] border border-white/[0.07] rounded-xl p-3 text-center backdrop-blur-sm"
                >
                  <div className="flex justify-center mb-1 text-purple-400">{stat.icon}</div>
                  <div className="text-xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-white/40 mt-0.5">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: profile + floating cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="relative flex items-center justify-center"
          >
            {/* Profile picture placeholder */}
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden relative border-2 border-purple-500/30 shadow-2xl shadow-purple-500/20">
                {/* Gradient placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-slate-800 to-cyan-900/60 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-black gradient-text mb-2">KG</div>
                    <div className="text-xs text-white/30 tracking-wider uppercase">Add your photo</div>
                  </div>
                </div>
              </div>

              {/* Orbit ring decoration */}
              <div className="absolute inset-0 rounded-full border border-purple-500/20 animate-spin-slow" />
              <div className="absolute -inset-4 rounded-full border border-cyan-500/10 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />

              {/* Floating tech badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-8 bg-white/[0.08] backdrop-blur-xl border border-white/10 rounded-xl px-3 py-2 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">🤖</span>
                  <div>
                    <div className="text-xs font-semibold text-white">AI Augmented</div>
                    <div className="text-[10px] text-white/40">Claude · ChatGPT</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-8 bg-white/[0.08] backdrop-blur-xl border border-white/10 rounded-xl px-3 py-2 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">📊</span>
                  <div>
                    <div className="text-xs font-semibold text-white">Power BI · Tableau</div>
                    <div className="text-[10px] text-white/40">EMEA Analytics</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-1/2 -right-14 bg-white/[0.08] backdrop-blur-xl border border-white/10 rounded-xl px-3 py-2 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">🏆</span>
                  <div>
                    <div className="text-xs font-semibold text-white">Top Performer</div>
                    <div className="text-[10px] text-white/40">TCS FY'21</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/30 text-xs"
      >
        <span className="tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
