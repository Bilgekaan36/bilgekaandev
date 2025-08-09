import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const achievements = [
    { text: '50+ erfolgreiche Projekte', position: 'top-20 left-[-50]' },
    { text: '4+ Jahre Erfahrung in Webflow', position: 'top-36 right-[-100]' },
    {
      text: 'Zertifizierter React Experte',
      position: 'bottom-60 right-[-45]',
    },
    {
      text: 'Suchmaschinen-optimierte Websites',
      position: 'bottom-50 left-[-30]',
    },
    { text: 'Individuelle Beratung', position: 'bottom-20 right-60' },
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
          <div
            className={`space-y-8 transition-all duration-1000 delay-300 mb-14 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className='space-y-6 flex flex-col items-center'>
              <h2 className='text-5xl lg:text-7xl font-bold text-white leading-tight'>
                BILGEKAAN YILMAZ,
                <br />
                <span className='relative inline-block'>
                  <span className='bg-black text-white px-4 py-2 rounded-lg italic font-medium'>
                    WEBFLOW
                  </span>
                  <span className='ml-4'>EXPERTE</span>
                </span>
              </h2>

              <p className='text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl'>
                Mit dem Herz voller{' '}
                <span className='font-semibold text-white'>
                  Leidenschaft für Design & Interaktion
                </span>{' '}
                und dem Verstand fest auf{' '}
                <span className='font-semibold text-white'>
                  Performance und Zahlen
                </span>{' '}
                gerichtet, entwerfe ich{' '}
                <span className='font-semibold text-white'>
                  einzigartige und professionelle Websites
                </span>{' '}
                für Branchenführer – oder welche die es noch werden wollen.
              </p>
            </div>
          </div>

          {/* Image Content - Image with floating achievements */}
          <div
            className={`relative transition-all duration-1000 delay-500 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-10'
            }`}
          >
            <div className='relative w-full mx-auto flex justify-center items-center'>
              {/* Main profile image */}
              <div className='relative z-10 max-w-3xl'>
                <div className='aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 shadow-2xl'>
                  <Image
                    src='/Hero-Image.png'
                    alt='Sönke Sproll - Webflow Experte'
                    width={2000}
                    height={2000}
                    className='w-full h-full object-cover'
                  />
                </div>
              </div>

              {/* Floating achievement badges */}
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`absolute ${achievement.position} z-20 transform transition-all duration-1000`}
                  style={{
                    animationDelay: `${index * 200 + 800}ms`,
                    transform: isVisible
                      ? 'translate(0, 0) scale(1)'
                      : `translate(${
                          index % 2 === 0 ? '-20px' : '20px'
                        }, 20px) scale(0.8)`,
                  }}
                >
                  <div className='group relative'>
                    <div className='absolute inset-0 bg-white/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300' />
                    <div className='relative bg-white/95 backdrop-blur-sm text-gray-900 px-4 py-3 rounded-xl shadow-xl border border-white/30 hover:scale-105 transition-all duration-300 hover:shadow-2xl'>
                      <span className='font-semibold text-sm lg:text-base whitespace-nowrap'>
                        {achievement.text}
                      </span>
                      <div className='absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                    </div>
                  </div>
                </div>
              ))}

              {/* Decorative elements */}
              <div className='absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-2xl animate-pulse' />
              <div
                className='absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-xl animate-pulse'
                style={{ animationDelay: '1s' }}
              />
            </div>
          </div>
          <div className='max-w-7xl mx-auto items-center'>
            <div className='pt-18 flex flex-col items-center'>
              <p className='text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl'>
                Mit dem Herz voller{' '}
                <span className='font-semibold text-white'>
                  Leidenschaft für Design & Interaktion
                </span>{' '}
                und dem Verstand fest auf{' '}
                <span className='font-semibold text-white'>
                  Performance und Zahlen
                </span>{' '}
                gerichtet, entwerfe ich{' '}
                <span className='font-semibold text-white'>
                  einzigartige und professionelle Websites
                </span>{' '}
                für Branchenführer – oder welche die es noch werden wollen.
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
