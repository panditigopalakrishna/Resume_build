'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import { experiences } from '@/data/portfolio';
import { fadeUp, viewportConfig } from '@/utils/animations';

const companyColors: Record<string, { bg: string; border: string; dot: string }> = {
  'Circana Market Research': {
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
    dot: 'bg-purple-400',
  },
  'Estée Lauder Companies': {
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/30',
    dot: 'bg-pink-400',
  },
  'Tata Consultancy Services': {
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/30',
    dot: 'bg-cyan-400',
  },
};

export default function Experience() {
  const [expanded, setExpanded] = useState<number>(0);

  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Work Experience"
          title="Professional"
          highlight="Journey"
          description="4+ years bridging data operations, AI tooling, and enterprise delivery across EMEA markets."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-cyan-500/30 to-transparent" />

          <div className="space-y-6">
            {experiences.map((exp, i) => {
              const colors = companyColors[exp.company] ?? {
                bg: 'bg-white/5',
                border: 'border-white/20',
                dot: 'bg-white',
              };
              const isOpen = expanded === i;

              return (
                <motion.div
                  key={exp.company}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportConfig}
                  custom={i}
                  className="pl-10 md:pl-16 relative"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-2 md:left-4 top-6 w-4 h-4 rounded-full ${colors.dot} border-2 border-background shadow-lg`} />

                  <GlassCard
                    className="overflow-hidden"
                    gradient={isOpen}
                    hover={false}
                  >
                    {/* Header — always visible */}
                    <button
                      onClick={() => setExpanded(isOpen ? -1 : i)}
                      className="w-full text-left p-6"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full ${colors.bg} border ${colors.border} text-white/70`}>
                              {exp.company}
                            </span>
                            {i === 0 && (
                              <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                                Current
                              </span>
                            )}
                          </div>
                          <h3 className="text-lg font-bold text-white leading-tight">{exp.role}</h3>
                          <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-white/40">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5" />
                              {exp.duration}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5" />
                              {exp.location}
                            </span>
                          </div>
                        </div>
                        <span className="text-white/30 flex-shrink-0 mt-1">
                          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </span>
                      </div>

                      {/* Tech tags — always visible */}
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-[11px] rounded-md bg-white/[0.05] border border-white/[0.07] text-white/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </button>

                    {/* Expanded content */}
                    <motion.div
                      initial={false}
                      animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="px-6 pb-6 border-t border-white/[0.05] pt-4">
                        <p className="text-sm text-white/50 italic mb-4 leading-relaxed">
                          {exp.summary}
                        </p>
                        <ul className="space-y-3">
                          {exp.bullets.map((bullet, bi) => (
                            <motion.li
                              key={bi}
                              initial={{ opacity: 0, x: -12 }}
                              animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -12 }}
                              transition={{ delay: bi * 0.07 + 0.1 }}
                              className="flex gap-3 text-sm text-white/65 leading-relaxed"
                            >
                              <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-purple-400 to-cyan-400" />
                              {bullet}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
