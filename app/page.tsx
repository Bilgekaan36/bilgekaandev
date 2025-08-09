'use client';
import { AboutSection } from '@/components/AboutSection';
import { DynamicMenuSection } from '@/components/DynamicMenuSection';
import { Hero } from '@/components/Hero';

export default function Home() {
  return (
    <div>
      <Hero />
      <DynamicMenuSection />
      <AboutSection />
    </div>
  );
}
