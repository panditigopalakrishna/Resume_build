'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Download, ArrowUpRight, MapPin } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import { fadeUp, scaleIn, viewportConfig } from '@/utils/animations';

const contactLinks = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: 'Email',
    value: 'kiruthigagiri@gmail.com',
    href: 'mailto:kiruthigagiri@gmail.com',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    label: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href: 'https://linkedin.com',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    icon: <Github className="w-5 h-5" />,
    label: 'GitHub',
    value: 'View Profile',
    href: 'https://github.com',
    color: 'text-white/70',
    bg: 'bg-white/5',
    border: 'border-white/10',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Get In Touch"
          title="Let's Work"
          highlight="Together"
          description="Open to new opportunities in data operations, AI-augmented workflows, and enterprise analytics across EMEA."
        />

        {/* Main CTA card */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-8"
        >
          <GlassCard className="p-8 sm:p-10 text-center relative overflow-hidden" gradient>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-3 text-white/40 text-sm">
                <MapPin className="w-4 h-4" />
                Dublin, Ireland · Open to remote
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to make data operations <span className="gradient-text">smarter</span>?
              </h3>

              <p className="text-white/55 leading-relaxed mb-8 max-w-lg mx-auto">
                Whether you&apos;re looking for someone to own EMEA reporting, automate operational
                workflows, or bridge the gap between your technical and business teams — let&apos;s talk.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href="mailto:kiruthigagiri@gmail.com"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-xl shadow-purple-500/25 border border-purple-500/30 hover:shadow-purple-500/40 transition-all duration-200 w-full sm:w-auto justify-center"
                >
                  <Mail className="w-5 h-5" />
                  Send a Message
                  <ArrowUpRight className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="/Kiruthiga_OPS.pdf"
                  download
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold bg-white/[0.05] border border-white/[0.1] text-white/80 hover:text-white hover:bg-white/[0.09] hover:border-white/20 transition-all duration-200 w-full sm:w-auto justify-center"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </motion.a>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Contact link cards */}
        <div className="grid sm:grid-cols-3 gap-4">
          {contactLinks.map((link, i) => (
            <motion.div
              key={link.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              custom={i}
            >
              <GlassCard hover>
                <a
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 group"
                >
                  <div className={`w-10 h-10 rounded-xl ${link.bg} border ${link.border} flex items-center justify-center ${link.color} flex-shrink-0 transition-all duration-200 group-hover:scale-110`}>
                    {link.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-semibold text-white/40 uppercase tracking-wider">{link.label}</div>
                    <div className="text-sm text-white/70 group-hover:text-white transition-colors truncate">{link.value}</div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-white/60 transition-colors flex-shrink-0" />
                </a>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
