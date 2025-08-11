'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';
import Image from 'next/image';
import { GradientText } from './ui/gradient-text';

export const TestimonialsSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const containerRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: 'Starke hat unsere Erwartungen an die Webseite bei weitem übertroffen und eine Webseite geschaffen, die nicht nur ästhetisch ansprechend ist, sondern auch unsere Zielgruppe optimal anspricht. Dank seiner Expertise konnten wir unsere Online-Präsenz erheblich verbessern und neue Kunden gewinnen. Starke versteht unsere Anforderungen direkt und kann die Wünsche in direkt sichtbare Ergebnisse verwandeln!',
      company: 'CISO Datenschutz GmbH',
      website: 'www.ciso-datenschutz.de',
      logo: '/logo1.png', // Replace with actual logo
    },
    {
      id: 2,
      rating: 5,
      text: 'Bei SRFN ist es wichtig, komplexe Inhalte verständlich und zugleich visuell auf den Punkt zu bringen. Mit Starke an unserer Seite hatten wir einen kompetenten Sparringspartner, der uns geholfen hat, unser Know-how getraut das CD optimal umzusetzen und dabei niemals langweilig zu sein. Danke Starke!',
      company: 'Serafin Asset Management GmbH',
      website: 'www.srfn.de',
      logo: '/logo2.png', // Replace with actual logo
    },
    {
      id: 3,
      rating: 5,
      text: 'Großartige Zusammenarbeit! Die neue Website hat uns geholfen, unsere digitale Präsenz zu stärken und neue Kunden zu gewinnen. Die Umsetzung war professionell und die Kommunikation erstklassig.',
      company: 'Butter & Speck GmbH',
      website: 'www.butter-speck.de',
      logo: '/logo3.png', // Replace with actual logo
    },
    {
      id: 4,
      rating: 5,
      text: 'Exzellente Arbeit! Das Team hat unsere Vision perfekt umgesetzt und dabei innovative Lösungen präsentiert, die unsere Erwartungen übertroffen haben.',
      company: 'Digital Solutions AG',
      website: 'www.digital-solutions.de',
      logo: '/logo4.png', // Replace with actual logo
    },
    {
      id: 5,
      rating: 5,
      text: 'Professionell, kreativ und zuverlässig. Die Zusammenarbeit war von Anfang bis Ende ein voller Erfolg.',
      company: 'Innovation Labs GmbH',
      website: 'www.innovation-labs.de',
      logo: '/logo5.png', // Replace with actual logo
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate scroll progress when section is in view
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const totalScroll = rect.height + windowHeight;
        const currentScroll = windowHeight - rect.top;
        const progress = Math.max(0, Math.min(1, currentScroll / totalScroll));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate translation based on scroll progress
  const translateX = scrollProgress * (testimonials.length - 3) * 30;

  return (
    <section
      ref={sectionRef}
      className='bg-blue-700 py-20 overflow-hidden relative'
      // Extra height for scroll effect
    >
      <div className='max-w-7xl mx-auto px-6'>
        {/* Header */}
        <div className='font-orbitron text-center mb-10 md:mb-16 lg:mb-20'>
          <h2 className='font-orbitron font-semibold text-white text-[1.75em] sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mt-4 md:mt-5'>
            <GradientText
              className='inline-block sm:inline'
              text='Kundenstimmen'
            />
          </h2>
        </div>

        {/* Testimonials Container */}
        <div className='relative'>
          <div
            ref={containerRef}
            className='grid grid-flow-col auto-cols-[90%] sm:auto-cols-[60%] md:auto-cols-[45%] lg:auto-cols-[38%] xl:auto-cols-[35%] gap-4 lg:gap-6 transition-transform duration-300 ease-out'
            style={{
              transform: `translateX(-${translateX}%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className='bg-gray-900 rounded-2xl p-6 lg:p-8 h-full min-h-[280px] lg:min-h-[320px]'
              >
                {/* Stars */}
                <div className='flex gap-1 mb-6'>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className='w-5 h-5 fill-yellow-400 text-yellow-400'
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className='text-gray-300 text-sm lg:text-base leading-relaxed mb-6 line-clamp-4 lg:line-clamp-5'>
                  {testimonial.text}
                </p>

                {/* Company Info */}
                <div className='mt-auto'>
                  <div className='flex items-center gap-4'>
                    <div className='w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center'>
                      {/* Replace with actual Image component when logos are available */}
                      <div className='text-white text-xs font-bold'>
                        {testimonial.company.slice(0, 2).toUpperCase()}
                      </div>
                    </div>
                    <div>
                      <p className='text-white font-semibold text-sm'>
                        {testimonial.company}
                      </p>
                      <p className='text-gray-400 text-xs'>
                        {testimonial.website}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className='flex justify-center mt-12 gap-2'>
          {[...Array(Math.max(1, testimonials.length - 2))].map((_, i) => (
            <div
              key={i}
              className='h-1 w-8 rounded-full transition-all duration-300'
              style={{
                backgroundColor:
                  i / (testimonials.length - 3) <= scrollProgress
                    ? 'white'
                    : 'rgba(255, 255, 255, 0.3)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
