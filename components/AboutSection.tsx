'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Image from 'next/image';
import { GradientText } from './ui/gradient-text';

/* -------- deterministic PRNG: sfc32 + String-Seed -------- */
function sfc32(a: number, b: number, c: number, d: number) {
  return function () {
    a |= 0;
    b |= 0;
    c |= 0;
    d |= 0;
    let t = (((a + b) | 0) + d) | 0;
    d = (d + 1) | 0;
    a = b ^ (b >>> 9);
    b = (c + (c << 3)) | 0;
    c = (c << 21) | (c >>> 11);
    t = (t + (t << 3)) | 0;
    t = t ^ (t >>> 7);
    t = (t + (t << 1)) | 0;
    return (t >>> 0) / 4294967296;
  };
}
function hashSeed(str: string): [number, number, number, number] {
  let h1 = 1779033703,
    h2 = 3144134277,
    h3 = 1013904242,
    h4 = 2773480762;
  for (let i = 0; i < str.length; i++) {
    const k = str.charCodeAt(i);
    h1 = (h2 ^ Math.imul(h1 ^ k, 597399067)) | 0;
    h2 = (h3 ^ Math.imul(h2 ^ k, 2869860233)) | 0;
    h3 = (h4 ^ Math.imul(h3 ^ k, 951274213)) | 0;
    h4 = (h1 ^ Math.imul(h4 ^ k, 2716044179)) | 0;
  }
  return [h1, h2, h3, h4];
}
/* --------------------------------------------------------- */

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

  // Partikel deterministisch erzeugen (identisch in SSR & Client)
  const particles = useMemo(() => {
    const rng = sfc32(...hashSeed('about-particles-v1'));
    const count = 20;
    return Array.from({ length: count }).map((_, i) => {
      const left = `${(rng() * 100).toFixed(4)}%`;
      const top = `${(rng() * 100).toFixed(4)}%`;
      const delay = `${(rng() * 2).toFixed(3)}s`;
      const duration = `${(2 + rng() * 3).toFixed(3)}s`;
      return { id: `p-${i}`, left, top, delay, duration };
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;
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
      {/* Animated floating particles (deterministisch) */}
      <div className='absolute inset-0 overflow-hidden'>
        {particles.map((p) => (
          <div
            key={p.id}
            className='absolute w-2 h-2 bg-white/20 rounded-full animate-pulse'
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.delay, // camelCase in React
              animationDuration: p.duration, // camelCase in React
            }}
          />
        ))}
      </div>

      {/* Gradient overlay for depth */}
      <div className='absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10' />

      <div className='relative min-h-screen flex items-center justify-center px-6'>
        <div className='max-w-7xl mx-auto items-center'>
          {/* Title */}
          <div className='space-y-8 mb-14'>
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
                  performante React/Next.js-Anwendungen{' '}
                </span>
                und{' '}
                <span className='font-semibold text-white'>
                  {' '}
                  robuste Backends mit Node.js
                </span>
                . Ich bin es gewohnt, in
                <span className='font-semibold text-white'>
                  {' '}
                  agilen Teams
                </span>{' '}
                zu arbeiten, mich
                <span className='font-semibold text-white'>
                  {' '}
                  schnell in bestehende Codebasen
                </span>{' '}
                einzuarbeiten und
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

          {/* Image + Achievements */}
          <div className='relative'>
            <div className='relative w-full mx-auto flex flex-col justify-center items-center'>
              {/* Main profile image */}
              <div className='relative z-10 max-w-7xl'>
                <div className='aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 shadow-2xl'>
                  <Image
                    src='/hero-image.png'
                    alt='Bilgekaan Yilmaz - React Experte'
                    width={2000}
                    height={2000}
                    className='w-full h-full object-cover grayscale'
                    priority
                  />
                </div>
              </div>

              {/* Floating achievement badges (Desktop) */}
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
                      transition: 'transform 500ms ease',
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
                        <div className='absolute inset-0 rounded-lg bg-gradient-to-r from-[#61dafb]/10 to-[#41b883]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile achievements (stacked) */}
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

              {/* Decorative gradients */}
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
                , sondern
                <span className='font-semibold text-white'>
                  {' '}
                  aktiv zum Projekterfolg beitragen
                </span>{' '}
                durch
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
          background: 'linear-gradient(to bottom, transparent, #101828)',
        }}
      />
    </div>
  );
};
