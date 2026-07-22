'use client';

import { motion } from 'framer-motion';
import { fadeUp, viewportConfig } from '@/utils/animations';

interface SectionHeadingProps {
  label: string;
  title: string;
  highlight: string;
  description?: string;
  center?: boolean;
}

export default function SectionHeading({
  label,
  title,
  highlight,
  description,
  center = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${center ? 'text-center' : ''}`}>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        custom={0}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4 bg-white/5 border border-white/10 text-purple-400"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
        {label}
      </motion.div>

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        custom={1}
        className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
      >
        {title}{' '}
        <span className="gradient-text">{highlight}</span>
      </motion.h2>

      {description && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          custom={2}
          className={`text-white/50 text-lg max-w-2xl leading-relaxed ${center ? 'mx-auto' : ''}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
