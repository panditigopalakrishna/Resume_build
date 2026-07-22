'use client';

import { motion } from 'framer-motion';
import { Brain, Zap, Target, Globe } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import { fadeUp, slideLeft, slideRight, viewportConfig } from '@/utils/animations';

const traits = [
  {
    icon: <Brain className="w-5 h-5" />,
    title: 'Dual Fluency',
    description:
      'Engineering degree meets MSc in Management — I translate technical root causes into language business teams act on, and business priorities into engineering-ready specs.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: 'AI-First Operator',
    description:
      'Early adopter of Claude and ChatGPT for operational diagnostics and documentation — consistently ahead of standard team practice in integrating LLM tooling into real workflows.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: 'Scale & Precision',
    description:
      '100% SLA compliance across 500+ client accounts. Every process I design is built for reliability at scale — from onboarding pipelines to automated QC workflows.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: 'EMEA Enterprise Delivery',
    description:
      'Operated across Austria, Germany, KSA, France, and Spain — navigating multi-market data environments, cross-functional escalations, and diverse stakeholder expectations.',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
  },
];

const techPills = [
  'SQL', 'Power BI', 'Tableau', 'Azure Pipeline',
  'Python', 'Claude', 'ChatGPT', 'DAX',
  'Salesforce', 'SAP', 'Jira', 'Excel',
];

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="About Me"
          title="Where Data Meets"
          highlight="AI Operations"
          description="I bridge the gap between technical complexity and business clarity — building the systems and processes that keep enterprise data operations running at scale."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: narrative */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <GlassCard className="p-8" gradient>
              <div className="space-y-5">
                <p className="text-white/70 leading-relaxed">
                  I&apos;m an Operations Specialist with a background that spans systems engineering,
                  data operations, and business strategy — giving me an unusual ability to work
                  comfortably at both the technical and commercial layer of any organisation.
                </p>
                <p className="text-white/70 leading-relaxed">
                  At <span className="text-white font-medium">Circana</span>, I own end-to-end retail
                  reporting across five EMEA markets, resolving complex data pipeline issues, automating
                  dashboards, and maintaining 100% SLA compliance for 500+ client accounts — all while
                  integrating Claude and ChatGPT into live operational workflows.
                </p>
                <p className="text-white/70 leading-relaxed">
                  My foundation in QA and Python from{' '}
                  <span className="text-white font-medium">Tata Consultancy Services</span> gives me
                  technical rigour, while my{' '}
                  <span className="text-white font-medium">MSc from Trinity College Dublin</span> sharpens
                  the strategic lens. I build processes that are reliable, automated, and ready for scale.
                </p>

                {/* Tech pills */}
                <div className="pt-2">
                  <div className="text-xs font-semibold text-white/30 tracking-widest uppercase mb-3">
                    Core Technologies
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {techPills.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs rounded-lg bg-white/[0.05] border border-white/[0.08] text-white/60 hover:text-white/90 hover:border-purple-500/30 transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Right: trait cards */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {traits.map((trait, i) => (
              <motion.div
                key={trait.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                custom={i}
              >
                <GlassCard className="p-5 h-full" hover>
                  <div className={`w-9 h-9 rounded-xl ${trait.bg} border ${trait.border} flex items-center justify-center mb-3 ${trait.color}`}>
                    {trait.icon}
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2">{trait.title}</h3>
                  <p className="text-xs text-white/50 leading-relaxed">{trait.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Certifications banner */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          custom={4}
          className="mt-12"
        >
          <GlassCard className="p-5 flex flex-col sm:flex-row items-center justify-between gap-4" gradient>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                🎓
              </div>
              <div>
                <div className="text-sm font-semibold text-white">PMP Certification In Progress</div>
                <div className="text-xs text-white/40">Project Management Professional · PMI</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-xs text-amber-400 font-medium">In Progress</span>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
