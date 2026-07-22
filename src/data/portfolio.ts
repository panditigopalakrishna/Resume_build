import type {
  NavItem,
  ExperienceItem,
  SkillCategory,
  Project,
  EducationItem,
  AiCapability,
} from '@/types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'AI Tools', href: '#ai-engineering' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const experiences: ExperienceItem[] = [
  {
    company: 'Circana Market Research',
    role: 'Operations Analyst — Reporting & Data Operations',
    duration: '2024 – Present',
    location: 'Dublin, Ireland',
    summary:
      'Owned end-to-end retail performance reporting across 5 EMEA markets — Austria, Germany, KSA, France, and Spain — serving 25+ retail partners and up to 500+ client accounts per market.',
    bullets: [
      'Architected and maintained core Tableau reporting infrastructure tracking retail performance from raw data ingestion through to published client dashboards across the EMEA portfolio.',
      'Resolved ~10 client data issues weekly through end-to-end SQL-driven root cause analysis, closing gaps between client expectations and source-system reality.',
      'Reduced error-resolution time by 45% by integrating ChatGPT and Claude into Azure Pipeline diagnostics, surfacing discrepancies via weekly SQL- and VLOOKUP-driven QC checks.',
      'Cut manual processing time by 20% by automating Power BI dashboards with DAX formulas and M Queries, replacing ad-hoc reporting workflows.',
      'Upheld 100% SLA compliance, triaging 80+ internal and external tickets weekly via CRIMS spanning data access, platform queries, and reporting escalations.',
      'Compressed new-client go-live time from 3 weeks to 1 week through hands-on Power BI training and self-serve VLOOKUP-based validation toolkits.',
    ],
    technologies: ['SQL', 'Tableau', 'Power BI', 'Azure Pipeline', 'DAX', 'Excel', 'CRIMS', 'Claude', 'ChatGPT'],
    logo: '/logos/circana.svg',
  },
  {
    company: 'Estée Lauder Companies',
    role: 'Consultant — Retail Operations & Process Improvement',
    duration: '2022 – 2024',
    location: 'Dublin, Ireland',
    summary:
      'Drove process improvement and commercial analysis across sales, operations, and marketing — delivering measurable conversion growth and strategic insights.',
    bullets: [
      'Identified and closed process gaps in the sales workflow, implementing targeted improvements that contributed to a 20%+ lift in conversion rate.',
      'Built VLOOKUP-based Excel performance trackers monitoring weekly KPIs, giving cross-functional teams real-time visibility across sales and operations metrics.',
      'Self-initiated competitor analysis using Salesforce and MS Dynamics CRM data, presenting findings directly to senior leadership to shape go-to-market strategy.',
      'Achieved a 15% reduction in procurement costs through data-driven vendor negotiations conducted independently, without formal mandate.',
      'Coordinated 5+ in-store product launches and masterclass events annually, managing end-to-end logistics, stakeholder communication, and execution.',
    ],
    technologies: ['Power BI', 'Excel', 'Salesforce CRM', 'MS Dynamics', 'VLOOKUP', 'Data Analysis'],
    logo: '/logos/estee-lauder.svg',
  },
  {
    company: 'Tata Consultancy Services',
    role: 'System Engineer — QA & Test Automation',
    duration: '2020 – 2022',
    location: 'Chennai, India',
    summary:
      'Delivered end-to-end quality assurance for Nationwide, a US-based banking and insurance client, owning functional testing, UAT coordination, and data validation across all releases.',
    bullets: [
      'Designed and executed 100+ SQL queries to validate datasets and verify transaction accuracy, achieving 100% data accuracy across every release cycle.',
      'Built Python-based test automation scripts for validation tasks, establishing the technical foundation that later powered AI-assisted root cause analysis workflows.',
      'Coordinated UAT for all releases via Jira — managing tester readiness and defect tracking — achieving defect-free go-live on every production deployment.',
      'Extracted and structured insurance claims data from SAP systems using SQL joins and stored procedures, certifying it for downstream reporting pipelines.',
      'Led Python-assisted CAPA initiatives, reducing defect recurrence by 30% and improving overall system reliability by 25%.',
    ],
    technologies: ['Python', 'SQL', 'SAP', 'Jira', 'UAT', 'Test Automation', 'CAPA'],
    logo: '/logos/tcs.svg',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: 'Data & Analytics',
    icon: '📊',
    skills: [
      { name: 'SQL', logo: 'sql', color: '#336791' },
      { name: 'Power BI', logo: 'powerbi', color: '#F2C811' },
      { name: 'Tableau', logo: 'tableau', color: '#E97627' },
      { name: 'Excel', logo: 'excel', color: '#217346' },
      { name: 'DAX', logo: 'dax', color: '#F2C811' },
    ],
  },
  {
    name: 'AI & Automation',
    icon: '🤖',
    skills: [
      { name: 'Python', logo: 'python', color: '#3776AB' },
      { name: 'ChatGPT', logo: 'openai', color: '#10a37f' },
      { name: 'Claude', logo: 'claude', color: '#CC9B7A' },
      { name: 'Azure Pipeline', logo: 'azure', color: '#0078D4' },
      { name: 'Prompt Eng.', logo: 'prompt', color: '#7c3aed' },
    ],
  },
  {
    name: 'Operations Tools',
    icon: '⚙️',
    skills: [
      { name: 'Salesforce', logo: 'salesforce', color: '#00A1E0' },
      { name: 'Jira', logo: 'jira', color: '#0052CC' },
      { name: 'Confluence', logo: 'confluence', color: '#172B4D' },
      { name: 'SAP', logo: 'sap', color: '#0FAAFF' },
      { name: 'MS Dynamics', logo: 'dynamics', color: '#002050' },
    ],
  },
  {
    name: 'Cloud & DevOps',
    icon: '☁️',
    skills: [
      { name: 'Azure', logo: 'azure', color: '#0078D4' },
      { name: 'Git', logo: 'git', color: '#F05032' },
      { name: 'GitHub', logo: 'github', color: '#181717' },
      { name: 'Docker', logo: 'docker', color: '#2496ED' },
    ],
  },
  {
    name: 'Business Skills',
    icon: '💼',
    skills: [
      { name: 'Stakeholder Mgmt', logo: 'stakeholder', color: '#7c3aed' },
      { name: 'Process Mapping', logo: 'process', color: '#06b6d4' },
      { name: 'UAT & QA', logo: 'qa', color: '#10B981' },
      { name: 'Agile / Scrum', logo: 'agile', color: '#0052CC' },
      { name: 'Business Analysis', logo: 'ba', color: '#F59E0B' },
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'EMEA Retail Intelligence Dashboard',
    description:
      'Built a Tableau-powered reporting platform serving 500+ client accounts across 5 EMEA markets. Automated data pipelines from SAP and Azure reduced reporting latency by 20% and eliminated manual QC overhead.',
    technologies: ['Tableau', 'SQL', 'Azure Pipeline', 'Power BI', 'DAX'],
    featured: true,
    gradient: 'from-purple-700/20 via-purple-900/10 to-cyan-900/20',
  },
  {
    title: 'AI-Augmented QC Workflow',
    description:
      'Integrated Claude and ChatGPT into weekly data-quality workflows, enabling automated diagnosis of Azure Pipeline discrepancies. Cut error-resolution time by 45% across EMEA reporting operations.',
    technologies: ['Claude', 'ChatGPT', 'SQL', 'Python', 'Azure Pipeline'],
    featured: true,
    gradient: 'from-cyan-700/20 via-blue-900/10 to-purple-900/20',
  },
  {
    title: 'Client Onboarding Acceleration',
    description:
      'Redesigned the client onboarding process, combining Power BI training materials with VLOOKUP-based validation toolkits. Reduced go-live time from 3 weeks to 1 week while maintaining 100% SLA compliance.',
    technologies: ['Power BI', 'Excel', 'VLOOKUP', 'Process Design', 'Training'],
    featured: true,
    gradient: 'from-emerald-700/20 via-teal-900/10 to-cyan-900/20',
  },
  {
    title: 'Sales Process Optimisation — Estée Lauder',
    description:
      'Identified workflow gaps and implemented targeted improvements across the retail sales process. Delivered 20%+ conversion growth through structured process redesign and data-driven KPI tracking.',
    technologies: ['Salesforce', 'Power BI', 'Excel', 'MS Dynamics', 'Process Improvement'],
    featured: false,
    gradient: 'from-rose-700/20 via-pink-900/10 to-purple-900/20',
  },
  {
    title: 'Test Automation Framework — TCS / Nationwide',
    description:
      'Developed Python-based test automation scripts for end-to-end QA of banking and insurance web applications. CAPA-driven initiatives reduced defect recurrence by 30% and improved system reliability by 25%.',
    technologies: ['Python', 'SQL', 'SAP', 'Jira', 'UAT', 'Test Automation'],
    featured: false,
    gradient: 'from-blue-700/20 via-indigo-900/10 to-purple-900/20',
  },
];

export const aiCapabilities: AiCapability[] = [
  {
    title: 'AI-Augmented Operations',
    description:
      'Leverages Claude and ChatGPT to accelerate root cause analysis, automate documentation, and surface pipeline anomalies — turning hours of manual triage into minutes.',
    icon: '🤖',
    color: '#7c3aed',
    tags: ['Claude', 'ChatGPT', 'Prompt Engineering', 'Root Cause Analysis'],
  },
  {
    title: 'Intelligent Process Automation',
    description:
      'Combines Python scripting with AI-assisted workflows to automate repetitive data validation, QC checks, and reporting pipelines across enterprise environments.',
    icon: '⚡',
    color: '#06b6d4',
    tags: ['Python', 'Azure Pipeline', 'Process Automation', 'QC Workflows'],
  },
  {
    title: 'Data Pipeline Diagnostics',
    description:
      'Uses AI tools to diagnose discrepancies in complex ETL pipelines, translating cryptic pipeline errors into actionable fixes for both technical and business stakeholders.',
    icon: '🔍',
    color: '#10b981',
    tags: ['ETL', 'Azure Pipeline', 'SQL', 'Data Quality'],
  },
  {
    title: 'Stakeholder Translation',
    description:
      'Bridges the gap between engineering and business by translating technical findings into clear, decision-ready language — a skill enhanced by AI-assisted documentation generation.',
    icon: '🌐',
    color: '#f59e0b',
    tags: ['Communication', 'Documentation', 'Business Analysis', 'Reporting'],
  },
  {
    title: 'AI-Enhanced QA',
    description:
      'Applies AI-assisted test planning and CAPA analysis to detect failure patterns early, reducing defect recurrence and improving the reliability of production deployments.',
    icon: '🛡️',
    color: '#ec4899',
    tags: ['Python', 'CAPA', 'Test Automation', 'Defect Analysis'],
  },
  {
    title: 'Prompt & Tool Literacy',
    description:
      'Early adopter of LLM tooling across operational contexts — consistently ahead of standard team practice in applying generative AI to real operational problems.',
    icon: '💡',
    color: '#8b5cf6',
    tags: ['LLMs', 'Claude', 'ChatGPT', 'Workflow Integration'],
  },
];

export const educationItems: EducationItem[] = [
  {
    institution: 'Trinity College Dublin',
    degree: 'MSc in Management',
    duration: '2022 – 2023',
    location: 'Dublin, Ireland',
    research: 'Customer Retention Marketing Strategies in the Cosmetics Industry, Ireland',
    achievements: [
      'Postgraduate research on data-driven customer retention',
      'Applied analytical frameworks to real-world FMCG market data',
      'Strong focus on strategic decision-making and business operations',
    ],
    courses: ['Business Strategy', 'Operations Management', 'Marketing Analytics', 'Research Methods', 'Data Analysis'],
  },
  {
    institution: 'Anna University',
    degree: 'Bachelor of Engineering',
    duration: '2016 – 2020',
    location: 'Chennai, India',
    achievements: [
      'CGPA 8.2/10 — First Class Graduate',
      'Best Outgoing Student Award 2020',
      'Elected Student Coordinator',
    ],
    courses: ['Data Structures & Algorithms', 'Database Systems', 'Software Engineering', 'Systems Design', 'Python Programming'],
  },
];

export const recommendations = [
  {
    quote:
      '"A highly dependable and talented professional who adapts quickly, integrates seamlessly, and consistently delivers high-quality results. A strong asset to any organisation fortunate enough to have her."',
    name: 'Bosko Bjegovic',
    title: 'Senior Director, AI-Driven Operations',
    company: 'Circana',
  },
  {
    quote:
      '"She seamlessly integrated into our team culture, was always open to feedback, using it to continuously grow and elevate her work. A massive asset wherever she goes next."',
    name: 'Magdalena Pisarska',
    title: 'Senior Manager, Data Management',
    company: 'Circana',
  },
  {
    quote:
      '"Kiruthiga has excelled in this role, exhibiting one of the highest levels of productivity and professionalism I have witnessed during my 8+ years at the company."',
    name: 'Waldemar Baer',
    title: 'Account Manager',
    company: 'Circana',
  },
  {
    quote:
      '"A clever, fast-thinking, efficient and focused worker who consistently excels and would be a benefit to any employer lucky enough to get her."',
    name: 'Kristen Worth',
    title: 'Sales Manager',
    company: 'Estée Lauder Companies',
  },
];
