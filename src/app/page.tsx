'use client';

import dynamic from 'next/dynamic';
import Navbar from '@/components/navbar/Navbar';
import Hero from '@/components/hero/Hero';
import About from '@/components/about/About';
import Experience from '@/components/experience/Experience';
import Skills from '@/components/skills/Skills';
import Projects from '@/components/projects/Projects';
import AiEngineering from '@/components/ai-engineering/AiEngineering';
import Education from '@/components/education/Education';
import Contact from '@/components/contact/Contact';
import Footer from '@/components/footer/Footer';

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <AiEngineering />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
