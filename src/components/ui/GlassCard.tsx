'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

export default function GlassCard({
  children,
  className = '',
  hover = true,
  gradient = false,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`
        relative rounded-2xl overflow-hidden
        bg-white/[0.03] backdrop-blur-xl
        border border-white/[0.07]
        ${gradient ? 'gradient-border' : ''}
        ${hover ? 'cursor-pointer' : ''}
        ${className}
      `}
      {...props}
    >
      {gradient && (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5 pointer-events-none" />
      )}
      {children}
    </motion.div>
  );
}
