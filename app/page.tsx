'use client';
import { AboutSection } from '@/components/AboutSection';
import { BentoGridSection } from '@/components/BentoGridSection';
import { BlogSection } from '@/components/BlogSection';
import { CallToActionSection } from '@/components/CallToActionSection';
import { DynamicMenuSection } from '@/components/DynamicMenuSection';
import { FAQSection } from '@/components/FAQSection';
import { Hero } from '@/components/Hero';
import { LaunchSection } from '@/components/LaunchSection';
import { ProcessSection } from '@/components/ProcessSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';

export default function Home() {
  return (
    <div>
      <Hero />
      <DynamicMenuSection />
      <AboutSection />
      <BentoGridSection />
      <ProcessSection />
      <LaunchSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CallToActionSection />
      <FAQSection />
      <BlogSection />
    </div>
  );
}
