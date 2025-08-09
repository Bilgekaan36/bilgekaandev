'use client';
import { AboutSection } from '@/components/AboutSection';
import { BentoGridSection } from '@/components/BentoGridSection';
import { DynamicMenuSection } from '@/components/DynamicMenuSection';
import { Hero } from '@/components/Hero';
import { LaunchSection } from '@/components/LaunchSection';
import { ProcessSection } from '@/components/ProcessSection';

export default function Home() {
  return (
    <div>
      <Hero />
      <DynamicMenuSection />
      <AboutSection />
      <BentoGridSection />
      <ProcessSection />
      <LaunchSection />
    </div>
  );
}
