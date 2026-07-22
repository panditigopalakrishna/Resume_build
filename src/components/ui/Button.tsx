'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: ReactNode;
  target?: string;
  rel?: string;
  download?: string | boolean;
}

export default function Button({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  target,
  rel,
  download,
}: ButtonProps) {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const variants = {
    primary:
      'bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white shadow-lg shadow-purple-500/25 border border-purple-500/30',
    secondary:
      'bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 backdrop-blur-sm',
    ghost:
      'bg-transparent hover:bg-white/5 text-white/70 hover:text-white border border-transparent',
  };

  const base = `
    inline-flex items-center gap-2 rounded-xl font-semibold
    transition-all duration-200 ease-out
    ${sizes[size]} ${variants[variant]} ${className}
  `;

  const content = (
    <>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        download={download}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={base}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={base}
    >
      {content}
    </motion.button>
  );
}
