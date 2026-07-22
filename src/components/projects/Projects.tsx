'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import { projects } from '@/data/portfolio';
import { fadeUp, viewportConfig } from '@/utils/animations';

const projectIcons: Record<string, string> = {
  'EMEA Retail Intelligence Dashboard': '📊',
  'AI-Augmented QC Workflow': '🤖',
  'Client Onboarding Acceleration': '🚀',
  'Sales Process Optimisation — Estée Lauder': '📈',
  'Test Automation Framework — TCS / Nationwide': '🛡️',
};

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? projects : projects.filter((p) => p.featured);

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-cyan-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Selected Projects"
          title="Impact Through"
          highlight="Execution"
          description="Operational initiatives and data projects that delivered measurable business outcomes."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {displayed.map((project, i) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              custom={i}
              className="group"
            >
              <GlassCard className="h-full p-6 flex flex-col" gradient hover>
                {/* Icon area */}
                <div className={`w-full h-36 rounded-xl mb-5 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden border border-white/[0.05]`}>
                  {/* Grid lines */}
                  <div className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                    }}
                  />
                  <span className="text-5xl relative z-10 group-hover:scale-110 transition-transform duration-300">
                    {projectIcons[project.title] ?? '💼'}
                  </span>
                  {project.featured && (
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-purple-500/20 border border-purple-500/30 text-purple-300">
                      Featured
                    </div>
                  )}
                </div>

                <h3 className="text-base font-bold text-white mb-2 leading-tight group-hover:text-purple-300 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-xs text-white/50 leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[10px] rounded-md bg-white/[0.05] border border-white/[0.07] text-white/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 text-xs text-white/40">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:text-white transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Code
                    </a>
                  ) : (
                    <span className="flex items-center gap-1 opacity-40">
                      <Github className="w-3.5 h-3.5" />
                      Private
                    </span>
                  )}
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:text-white transition-colors ml-auto"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live
                    </a>
                  ) : (
                    <span className="flex items-center gap-1 ml-auto opacity-40">
                      <ExternalLink className="w-3.5 h-3.5" />
                      Internal
                    </span>
                  )}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Show more */}
        {!showAll && projects.some((p) => !p.featured) && (
          <div className="text-center">
            <motion.button
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              onClick={() => setShowAll(true)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-white/[0.05] border border-white/[0.08] text-white/60 hover:text-white hover:bg-white/[0.09] hover:border-purple-500/30 transition-all duration-200"
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}
