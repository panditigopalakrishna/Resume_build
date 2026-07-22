'use client';

import { motion } from 'framer-motion';
import { ArrowUp, Mail, Linkedin, Github } from 'lucide-react';

const socials = [
  { icon: <Mail className="w-4 h-4" />, href: 'mailto:kiruthigagiri@gmail.com', label: 'Email' },
  { icon: <Linkedin className="w-4 h-4" />, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: <Github className="w-4 h-4" />, href: 'https://github.com', label: 'GitHub' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-white/[0.05] py-8 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Left: branding + copyright */}
          <div className="flex items-center gap-3 text-sm text-white/30">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center text-[10px] font-black text-white">
              K
            </div>
            <span>© 2025 Kiruthiga Giridharan. Built with Next.js & Framer Motion.</span>
          </div>

          {/* Center: socials */}
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={s.label}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.08] hover:border-purple-500/30 transition-all duration-200"
              >
                {s.icon}
              </motion.a>
            ))}
          </div>

          {/* Right: back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.92 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white/[0.04] border border-white/[0.07] text-white/40 hover:text-white hover:bg-white/[0.08] hover:border-purple-500/30 transition-all duration-200"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
