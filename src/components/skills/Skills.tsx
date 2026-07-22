'use client';

import { useState } from 'react';
import type { ReactElement } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/common/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import { skillCategories } from '@/data/portfolio';
import { fadeUp, scaleIn, viewportConfig } from '@/utils/animations';

// SVG logos as inline components for key technologies
const SkillLogo = ({ logo, name }: { logo: string; name: string }) => {
  const logos: Record<string, ReactElement> = {
    python: (
      <svg viewBox="0 0 48 48" className="w-7 h-7">
        <path fill="#3776AB" d="M24 4C12.95 4 13.5 9.07 13.5 9.07l.01 3.13H24v1H8.9S4 12.66 4 24c0 11.34 5.29 10.93 5.29 10.93H12v-3.25S11.81 26 17.14 26H30.5s4.86.08 4.86-4.86V13.36S36.16 4 24 4zM17.56 11a1.85 1.85 0 1 1 0 3.7 1.85 1.85 0 0 1 0-3.7z"/>
        <path fill="#FFC107" d="M24 44c11.05 0 10.5-5.07 10.5-5.07l-.01-3.13H24v-1h15.1S44 35.34 44 24c0-11.34-5.29-10.93-5.29-10.93H36v3.25S36.19 22 30.86 22H17.5s-4.86-.08-4.86 4.86v8.78S11.84 44 24 44zm6.44-7a1.85 1.85 0 1 1 0-3.7 1.85 1.85 0 0 1 0 3.7z"/>
      </svg>
    ),
    sql: (
      <svg viewBox="0 0 48 48" className="w-7 h-7">
        <rect width="48" height="48" rx="8" fill="#336791"/>
        <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="monospace">SQL</text>
      </svg>
    ),
    powerbi: (
      <svg viewBox="0 0 48 48" className="w-7 h-7">
        <rect width="48" height="48" rx="8" fill="#F2C811"/>
        <rect x="8" y="28" width="8" height="14" rx="1" fill="#333"/>
        <rect x="20" y="20" width="8" height="22" rx="1" fill="#333"/>
        <rect x="32" y="12" width="8" height="30" rx="1" fill="#333"/>
      </svg>
    ),
    tableau: (
      <svg viewBox="0 0 48 48" className="w-7 h-7">
        <rect width="48" height="48" rx="8" fill="#E97627"/>
        <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="sans-serif">TABLEAU</text>
      </svg>
    ),
    excel: (
      <svg viewBox="0 0 48 48" className="w-7 h-7">
        <rect width="48" height="48" rx="8" fill="#217346"/>
        <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="sans-serif">X</text>
      </svg>
    ),
    dax: (
      <svg viewBox="0 0 48 48" className="w-7 h-7">
        <rect width="48" height="48" rx="8" fill="#F2C811"/>
        <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="#333" fontSize="12" fontWeight="bold" fontFamily="monospace">DAX</text>
      </svg>
    ),
    openai: (
      <svg viewBox="0 0 48 48" className="w-7 h-7">
        <rect width="48" height="48" rx="8" fill="#10a37f"/>
        <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">OpenAI</text>
      </svg>
    ),
    claude: (
      <svg viewBox="0 0 48 48" className="w-7 h-7">
        <rect width="48" height="48" rx="8" fill="#CC9B7A"/>
        <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Claude</text>
      </svg>
    ),
    azure: (
      <svg viewBox="0 0 48 48" className="w-7 h-7">
        <rect width="48" height="48" rx="8" fill="#0078D4"/>
        <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Azure</text>
      </svg>
    ),
    prompt: (
      <svg viewBox="0 0 48 48" className="w-7 h-7">
        <rect width="48" height="48" rx="8" fill="#7c3aed"/>
        <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">PE</text>
      </svg>
    ),
    salesforce: (
      <svg viewBox="0 0 48 48" className="w-7 h-7">
        <rect width="48" height="48" rx="8" fill="#00A1E0"/>
        <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">SF</text>
      </svg>
    ),
    jira: (
      <svg viewBox="0 0 48 48" className="w-7 h-7">
        <rect width="48" height="48" rx="8" fill="#0052CC"/>
        <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">JIRA</text>
      </svg>
    ),
    confluence: (
      <svg viewBox="0 0 48 48" className="w-7 h-7">
        <rect width="48" height="48" rx="8" fill="#172B4D"/>
        <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="#0052CC" fontSize="7" fontWeight="bold">CONF</text>
      </svg>
    ),
    sap: (
      <svg viewBox="0 0 48 48" className="w-7 h-7">
        <rect width="48" height="48" rx="8" fill="#0FAAFF"/>
        <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">SAP</text>
      </svg>
    ),
    dynamics: (
      <svg viewBox="0 0 48 48" className="w-7 h-7">
        <rect width="48" height="48" rx="8" fill="#002050"/>
        <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="#00A4EF" fontSize="7.5" fontWeight="bold">D365</text>
      </svg>
    ),
    git: (
      <svg viewBox="0 0 48 48" className="w-7 h-7">
        <rect width="48" height="48" rx="8" fill="#F05032"/>
        <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">git</text>
      </svg>
    ),
    github: (
      <svg viewBox="0 0 48 48" className="w-7 h-7">
        <rect width="48" height="48" rx="8" fill="#181717"/>
        <path fill="white" d="M24 9C15.72 9 9 15.72 9 24c0 6.63 4.31 12.25 10.29 14.23.75.14 1.02-.33 1.02-.73 0-.36-.01-1.31-.02-2.57-4.18.91-5.06-2.01-5.06-2.01-.68-1.73-1.66-2.19-1.66-2.19-1.36-.93.1-.91.1-.91 1.5.11 2.29 1.54 2.29 1.54 1.33 2.28 3.49 1.62 4.34 1.24.14-.97.52-1.62.95-1.99-3.33-.38-6.84-1.67-6.84-7.42 0-1.64.59-2.98 1.54-4.03-.15-.38-.67-1.91.15-3.98 0 0 1.26-.4 4.12 1.53a14.34 14.34 0 0 1 3.75-.5c1.27.01 2.55.17 3.75.5 2.86-1.93 4.11-1.53 4.11-1.53.82 2.07.3 3.6.15 3.98.96 1.05 1.54 2.39 1.54 4.03 0 5.77-3.51 7.04-6.86 7.41.54.47 1.02 1.38 1.02 2.79 0 2.01-.02 3.63-.02 4.12 0 .4.27.88 1.03.73C34.7 36.24 39 30.62 39 24c0-8.28-6.72-15-15-15z"/>
      </svg>
    ),
    docker: (
      <svg viewBox="0 0 48 48" className="w-7 h-7">
        <rect width="48" height="48" rx="8" fill="#2496ED"/>
        <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">DOCKER</text>
      </svg>
    ),
    stakeholder: (
      <svg viewBox="0 0 48 48" className="w-7 h-7">
        <rect width="48" height="48" rx="8" fill="#7c3aed"/>
        <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="14">🤝</text>
      </svg>
    ),
    process: (
      <svg viewBox="0 0 48 48" className="w-7 h-7">
        <rect width="48" height="48" rx="8" fill="#06b6d4"/>
        <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="14">⚙️</text>
      </svg>
    ),
    qa: (
      <svg viewBox="0 0 48 48" className="w-7 h-7">
        <rect width="48" height="48" rx="8" fill="#10B981"/>
        <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">QA</text>
      </svg>
    ),
    agile: (
      <svg viewBox="0 0 48 48" className="w-7 h-7">
        <rect width="48" height="48" rx="8" fill="#0052CC"/>
        <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">AGILE</text>
      </svg>
    ),
    ba: (
      <svg viewBox="0 0 48 48" className="w-7 h-7">
        <rect width="48" height="48" rx="8" fill="#F59E0B"/>
        <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">BA</text>
      </svg>
    ),
  };

  return logos[logo] ?? (
    <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-xs font-bold text-white/60">
      {name.slice(0, 2)}
    </div>
  );
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const displayed = activeCategory
    ? skillCategories.filter((c) => c.name === activeCategory)
    : skillCategories;

  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-purple-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Skills & Technologies"
          title="Tools I Work"
          highlight="With"
          description="From data pipelines and BI dashboards to AI-augmented workflows — the full stack of an operations specialist."
        />

        {/* Category filters */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
              activeCategory === null
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25'
                : 'bg-white/[0.05] border border-white/[0.07] text-white/50 hover:text-white/80 hover:bg-white/[0.08]'
            }`}
          >
            All
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(activeCategory === cat.name ? null : cat.name)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeCategory === cat.name
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-white/[0.05] border border-white/[0.07] text-white/50 hover:text-white/80 hover:bg-white/[0.08]'
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Skill categories */}
        <div className="space-y-8">
          {displayed.map((category, ci) => (
            <motion.div
              key={category.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              custom={ci}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl">{category.icon}</span>
                <h3 className="text-sm font-bold text-white/70 tracking-wider uppercase">
                  {category.name}
                </h3>
                <div className="flex-1 h-px bg-white/[0.06]" />
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3">
                {category.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    variants={scaleIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    custom={si}
                    whileHover={{ y: -4, scale: 1.06 }}
                    transition={{ duration: 0.2 }}
                    className="group flex flex-col items-center gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.07] hover:border-purple-500/30 cursor-default transition-all duration-200"
                  >
                    <div className="transition-all duration-200 group-hover:drop-shadow-[0_0_8px_rgba(124,58,237,0.6)]">
                      <SkillLogo logo={skill.logo} name={skill.name} />
                    </div>
                    <span className="text-[10px] font-medium text-white/50 group-hover:text-white/80 text-center leading-tight transition-colors duration-200">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
