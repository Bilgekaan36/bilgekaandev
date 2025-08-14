'use client';
import { AboutSection } from '@/components/AboutSection';
import { BentoGridSection } from '@/components/BentoGridSection';
import { BlogSection } from '@/components/BlogSection';
import { CallToActionSection } from '@/components/CallToActionSection';
import { ScrollMenuSection } from '@/components/ScrollMenuSection';
import { FAQSection } from '@/components/FAQSection';
import { HeroSection } from '@/components/HeroSection';
import { LaunchSection } from '@/components/LaunchSection';
import { NewsletterSection } from '@/components/NewsletterSection';
import { ProcessSection } from '@/components/ProcessSection';
import { ProjectsSection } from '@/components/ProjectsSection';
// import { TestimonialsSection } from '@/components/TestimonialsSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ScrollMenuSection />
      <AboutSection />
      <BentoGridSection />
      <ProcessSection />
      <LaunchSection />
      <ProjectsSection />
      {/* <TestimonialsSection /> */}
      <CallToActionSection />
      <FAQSection />
      <BlogSection />
      <NewsletterSection />
    </div>
  );
}
