export interface NavItem {
  label: string;
  href: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  summary: string;
  bullets: string[];
  technologies: string[];
  logo?: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  logo: string;
  color: string;
}

export interface Project {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  github?: string;
  live?: string;
  featured: boolean;
  gradient: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  location: string;
  research?: string;
  achievements: string[];
  courses: string[];
}

export interface AiCapability {
  title: string;
  description: string;
  icon: string;
  color: string;
  tags: string[];
}
