import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { HighlightText } from './ui/highlight-text';
import { GradientText } from './ui/gradient-text';

export const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const achievements = [
    {
      text: '10+ erfolgreiche Projekte in SaaS, Energie & E-Learning',
      position: 'top-20 left-[-150]',
    },
    {
      text: '5+ Jahre Erfahrung mit React/Vue & TypeScript',
      position: 'top-40 right-[-120]',
    },
    {
      text: 'Zertifizierter React- & Node.js-Entwickler',
      position: 'bottom-70 right-[-75]',
    },
    {
      text: 'API-Architektur & Integrationen für skalierbare Systeme',
      position: 'bottom-50 left-[-130]',
    },
    {
      text: 'Schnelle Einarbeitung & messbarer Projekt-Impact',
      position: 'bottom-10 right-30',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if section is visible for animations
      const isInView = rect.top < windowHeight && rect.bottom > 0;
      setIsVisible(isInView);
    };

    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, []);

  return (
    <div
      id='about'
      ref={sectionRef}
      className='min-h-[150vh] py-12 relative overflow-hidden'
      style={{ backgroundColor: '#101828' }}
    >
      {/* Animated floating particles */}
      <div className='absolute inset-0 overflow-hidden'>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-white/20 rounded-full animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient overlay for depth */}
      <div className='absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10' />

      <div className='relative min-h-screen flex items-center justify-center px-6'>
        <div className='max-w-7xl mx-auto items-center'>
          {/* Title Content */}
          <div className={`space-y-8 mb-14`}>
            <div className='text-center space-y-16 flex flex-col items-center'>
              <div className='font-orbitron text-center mb-10 md:mb-16 lg:mb-20'>
                <h2 className='font-orbitron font-semibold leading-none text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight mt-4 md:mt-5'>
                  <span className='block sm:block'>Bilgekaan Yilmaz</span>{' '}
                  <GradientText
                    className='inline-block sm:inline'
                    text='React Experte'
                  />
                </h2>
              </div>

              <p className='text-lg lg:text-xl text-white/90 leading-relaxed max-w-3xl'>
                Seit über{' '}
                <span className='font-semibold text-white'>5 Jahren</span>{' '}
                entwickle ich
                <span className='font-semibold text-white'>
                  {' '}
                  performante React/Next.js-Anwendungen
                </span>
                und{' '}
                <span className='font-semibold text-white'>
                  {' '}
                  robuste Backends mit Node.js
                </span>
                . Ich bin es gewohnt, in{' '}
                <span className='font-semibold text-white'>
                  {' '}
                  agilen Teams
                </span>{' '}
                zu arbeiten, mich{' '}
                <span className='font-semibold text-white'>
                  {' '}
                  schnell in bestehende Codebasen
                </span>{' '}
                einzuarbeiten und{' '}
                <span className='font-semibold text-white'>
                  {' '}
                  komplexe Anforderungen
                </span>{' '}
                in
                <span className='font-semibold text-white'>
                  {' '}
                  sauberen, wartbaren Code
                </span>{' '}
                zu übersetzen.
              </p>
            </div>
          </div>

          {/* Image Content - Image with floating achievements */}
          <div className={`relative`}>
            <div className='relative w-full mx-auto flex flex-col  justify-center items-center'>
              {/* Main profile image */}
              <div className='relative z-10 max-w-7xl'>
                <div className='aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 shadow-2xl'>
                  <Image
                    src='/hero-image.png'
                    alt='Bilgekaan Yilmaz - React Experte'
                    width={2000}
                    height={2000}
                    className='w-full h-full object-cover grayscale'
                  />
                </div>
              </div>

              {/* Floating achievement badges */}
              <div className='hidden sm:block'>
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`absolute ${achievement.position} z-20`}
                    style={{
                      animationDelay: `${index * 200 + 800}ms`,
                      transform: isVisible
                        ? 'translate(0, 0) scale(1)'
                        : `translate(${
                            index % 2 === 0 ? '-20px' : '20px'
                          }, 20px) scale(0.85)`,
                    }}
                  >
                    <div className='group relative animate-float'>
                      {/* Gradient Border Glow */}
                      <div className='absolute inset-0 rounded-lg p-[1.5px] bg-gradient-to-r from-[#61dafb] via-[#4cc3a5] to-[#41b883] blur-sm opacity-80 group-hover:opacity-100 transition-all duration-300' />

                      {/* Card Body */}
                      <div className='relative bg-white/10 backdrop-blur-md text-white px-3 py-2 rounded-lg shadow-lg border border-white/20 group-hover:scale-105 transition-all duration-300'>
                        <span className='font-semibold text-xs lg:text-sm whitespace-nowrap'>
                          {achievement.text}
                        </span>

                        {/* Hover Glow Overlay */}
                        <div className='absolute inset-0 rounded-lg bg-gradient-to-r from-[#61dafb]/10 to-[#41b883]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile version - stacked below image */}
              <div className='mt-6 grid grid-cols-1 gap-3 sm:hidden'>
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className='relative bg-white/10 backdrop-blur-md text-white px-4 py-3 rounded-lg shadow-lg border border-white/20'
                  >
                    <span className='font-semibold text-sm'>
                      {achievement.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Decorative elements */}
              <div className='absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#61dafb]/20 via-[#4cc3a5]/20 to-[#41b883]/20 rounded-full blur-2xl animate-pulse' />
              <div
                className='absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-[#41b883]/20 via-[#4cc3a5]/20 to-[#61dafb]/20 rounded-full blur-xl animate-pulse'
                style={{ animationDelay: '1s' }}
              />
            </div>
          </div>
          <div className='max-w-7xl mx-auto text-center items-center'>
            <div className='pt-18 flex flex-col items-center'>
              <p className='text-lg lg:text-xl text-white/90 leading-relaxed max-w-3xl'>
                Mein Anspruch: nicht nur{' '}
                <span className='font-semibold text-white'>
                  „Code abliefern“
                </span>
                , sondern{' '}
                <span className='font-semibold text-white'>
                  {' '}
                  aktiv zum Projekterfolg beitragen
                </span>{' '}
                durch{' '}
                <span className='font-semibold text-white'>
                  {' '}
                  saubere Architektur
                </span>
                ,
                <span className='font-semibold text-white'>
                  {' '}
                  proaktive Kommunikation{' '}
                </span>
                und den{' '}
                <span className='font-semibold text-white'>
                  {' '}
                  Blick auf den gesamten Produkt-Lifecycle
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient transition */}
      <div
        className='absolute bottom-0 left-0 right-0 h-32'
        style={{
          background: `linear-gradient(to bottom, transparent, #101828)`,
        }}
      />
    </div>
  );
};
