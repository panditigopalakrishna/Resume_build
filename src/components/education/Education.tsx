'use client';

import { motion } from 'framer-motion';
import { MapPin, Calendar, Award } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import { educationItems, recommendations } from '@/data/portfolio';
import { fadeUp, slideLeft, slideRight, viewportConfig } from '@/utils/animations';

export default function Education() {
  return (
    <section id="education" className="section-padding relative">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-purple-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Education"
          title="Academic"
          highlight="Foundation"
          description="Engineering rigour meets business strategy — a dual-discipline background that drives how I think about operations."
        />

        {/* Education cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {educationItems.map((edu, i) => (
            <motion.div
              key={edu.institution}
              variants={i === 0 ? slideLeft : slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <GlassCard className="p-6 h-full" gradient hover>
                {/* Header */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/30 to-cyan-600/20 border border-purple-500/20 flex items-center justify-center text-xl flex-shrink-0">
                    🎓
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white leading-tight">{edu.degree}</h3>
                    <p className="text-sm text-purple-400 font-medium mt-0.5">{edu.institution}</p>
                    <div className="flex flex-wrap gap-3 mt-1.5 text-xs text-white/40">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {edu.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {edu.location}
                      </span>
                    </div>
                  </div>
                </div>

                {edu.research && (
                  <div className="mb-4 px-3 py-2 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                    <div className="text-[10px] font-semibold text-white/30 tracking-widest uppercase mb-1">Research</div>
                    <p className="text-xs text-white/55 italic leading-relaxed">{edu.research}</p>
                  </div>
                )}

                {/* Achievements */}
                <div className="mb-4">
                  <div className="text-[10px] font-semibold text-white/30 tracking-widest uppercase mb-2">Achievements</div>
                  <ul className="space-y-1.5">
                    {edu.achievements.map((a, ai) => (
                      <li key={ai} className="flex items-start gap-2 text-xs text-white/55">
                        <Award className="w-3 h-3 text-amber-400 flex-shrink-0 mt-0.5" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Courses */}
                <div>
                  <div className="text-[10px] font-semibold text-white/30 tracking-widest uppercase mb-2">Core Areas</div>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.courses.map((c) => (
                      <span
                        key={c}
                        className="px-2 py-0.5 text-[10px] rounded-md bg-white/[0.05] border border-white/[0.07] text-white/50"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Recommendations */}
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-white">
              What Others <span className="gradient-text">Say</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {recommendations.map((rec, i) => (
              <motion.div
                key={rec.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                custom={i}
              >
                <GlassCard className="p-5 h-full" hover>
                  <div className="text-purple-400 text-3xl leading-none mb-3 font-serif">"</div>
                  <p className="text-sm text-white/65 leading-relaxed mb-4 italic">{rec.quote.replace(/^"|"$/g, '')}</p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600/30 to-cyan-600/20 border border-purple-500/20 flex items-center justify-center text-xs font-bold text-white">
                      {rec.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">{rec.name}</div>
                      <div className="text-[10px] text-white/40">{rec.title} · {rec.company}</div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
