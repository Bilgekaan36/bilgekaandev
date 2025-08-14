import React, { useState, useEffect, useRef } from 'react';
import { GradientText } from './ui/gradient-text';

export const ScrollMenuSection = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const menuItems = [
    {
      id: 1,
      title: 'Engpass im Entwicklerteam',
      content: {
        number: '01',
        title: 'PERSONELLE ENGPÄSSE',
        description:
          'Deadlines rücken näher, aber Ihrem Team fehlen erfahrene Entwickler, um Features rechtzeitig fertigzustellen?',
      },
    },
    {
      id: 2,
      title: 'Schwache Frontend-Performance',
      content: {
        number: '02',
        title: 'PERFORMANCE-PROBLEME',
        description:
          'Langsame Ladezeiten, ruckelige Interfaces oder technische Bugs führen zu unzufriedenen Nutzern und steigenden Absprungraten?',
      },
    },
    {
      id: 3,
      title: 'Instabile oder unklare APIs',
      content: {
        number: '03',
        title: 'API- UND INTEGRATIONS PROBLEME',
        description:
          'Ihre API-Schnittstellen sind instabil, schlecht dokumentiert oder erschweren die Integration neuer Systeme?',
      },
    },
    {
      id: 4,
      title: 'Fehlende CI/CD-Prozesse',
      content: {
        number: '04',
        title: 'LANGSAME RELEASE-ZYKLEN',
        description:
          'Ohne automatisierte Tests und CI/CD-Prozesse verzögern sich Deployments und die Time-to-Market verlängert sich unnötig?',
      },
    },
    {
      id: 5,
      title: 'Gebundene interne Ressourcen',
      content: {
        number: '05',
        title: 'FEHLENDE KAPAZITÄTEN',
        description:
          'Das interne Team ist voll ausgelastet, neue Features oder Produktideen bleiben liegen und wichtige Innovationen verzögern sich?',
      },
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Only proceed if the container is significantly in view
      if (
        containerRect.bottom < windowHeight * 0.4 ||
        containerRect.top > windowHeight * 1
      ) {
        return;
      }

      // Calculate progress through the entire section
      const containerHeight = container.offsetHeight;
      const scrollProgress = Math.max(
        0,
        Math.min(
          1,
          (-containerRect.top + windowHeight * 0.2) /
            (containerHeight - windowHeight * 1.5) // Erhöht für sanfteren Auslauf
        )
      );

      // Determine active section based on scroll progress with easing at the end
      let sectionProgress = scrollProgress * (menuItems.length - 1);

      // Easing-Funktion für das letzte Element - bleibt länger aktiv
      if (sectionProgress > menuItems.length - 2) {
        const lastSectionProgress = sectionProgress - (menuItems.length - 2);
        sectionProgress = menuItems.length - 2 + lastSectionProgress * 0.7; // Verlangsamt das letzte Element
      }

      const newActiveSection = Math.min(
        menuItems.length - 1,
        Math.round(sectionProgress)
      );

      // Only update if section actually changed
      if (
        newActiveSection !== activeSection &&
        newActiveSection >= 0 &&
        newActiveSection < menuItems.length
      ) {
        setActiveSection(newActiveSection);
      }
    };

    // Throttle scroll events for better performance
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
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [activeSection, menuItems.length]);

  const scrollToSection = (index: number) => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const containerHeight = container.offsetHeight;
    const windowHeight = window.innerHeight;

    // Calculate the scroll position to center this section
    const progress = index / (menuItems.length - 1);
    const targetScroll =
      container.offsetTop + (containerHeight - windowHeight) * progress;

    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth',
    });
  };

  const getGradientColor = (index: number) => {
    const colors = [
      'from-[#10b981] to-[#ef4444]',
      'from-[#3b82f6] to-[#f43f5e]',
      'from-[#2dd4bf] to-[#7c3aed]',
      'from-[#06b6d4] to-[#fde047]',
      'from-[#61dafb] to-[#ec4899]',
    ];
    return colors[index] || colors[0];
  };

  return (
    <div
      ref={containerRef}
      className='min-h-[500vh] bg-gray-900 text-white relative'
    >
      {/* Extra padding am Ende für sanfteren Auslauf */}
      <div className='absolute bottom-0 w-full h-[100vh] bg-gray-900' />

      {/* Sticky Container mit fester Höhe */}
      <div className='sticky top-0 h-screen flex flex-col justify-center overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 w-full'>
          {/* Header mit fester Höhe */}
          <div className='font-orbitron text-left mb-8 lg:mb-12'>
            <h2 className='font-orbitron font-semibold leading-[1.1] text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight'>
              <span className='block'>Kennst du diese</span>{' '}
              <GradientText
                className='block sm:inline-block mt-1 sm:mt-0'
                text='Herausforderungen?'
              />
            </h2>
            <p className='text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl mt-3 md:mt-4 lg:mt-6 max-w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-2xl'>
              Lass uns diese gemeinsam bewältigen!
            </p>
          </div>

          <div className='grid lg:grid-cols-2 gap-8 lg:gap-16'>
            {/* Left Menu - Desktop only */}
            <div className='hidden lg:flex items-center'>
              <div className='space-y-8 xl:space-y-12 w-full'>
                {menuItems.map((item, index) => (
                  <div
                    key={item.id}
                    ref={(el) => {
                      sectionRefs.current[index] = el;
                    }}
                    className={`
                      cursor-pointer transition-all duration-700 ease-out transform
                      ${
                        activeSection === index
                          ? 'opacity-100 scale-100'
                          : 'opacity-50 hover:opacity-80 scale-95'
                      }
                    `}
                    onClick={() => scrollToSection(index)}
                  >
                    <div className='flex items-center space-x-4 xl:space-x-6 group'>
                      <span
                        className={`
                        text-2xl xl:text-3xl font-bold transition-all duration-700 min-w-[3rem]
                        ${
                          activeSection === index
                            ? 'text-white'
                            : 'text-gray-500'
                        }
                      `}
                      >
                        {String(item.id).padStart(2, '0')}
                      </span>
                      <div
                        className={`
                        h-px flex-1 transition-all duration-700
                        ${activeSection === index ? 'bg-white' : 'bg-gray-700'}
                      `}
                      />
                      <h3
                        className={`
                        text-lg xl:text-2xl 2xl:text-3xl font-semibold transition-all duration-700
                        ${
                          activeSection === index
                            ? 'text-white'
                            : 'text-gray-400'
                        }
                        group-hover:text-white
                      `}
                      >
                        {item.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Mit festen Höhen für Stabilität */}
            <div className='relative'>
              {/* Content Container mit fester Mindesthöhe */}
              <div className='min-h-[400px] sm:min-h-[450px] lg:min-h-[500px] flex flex-col justify-center'>
                {/* Alle Content-Items absolut positioniert und übereinander */}
                {menuItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={`
                      absolute inset-0 transition-all duration-700 ease-out
                      ${
                        activeSection === index
                          ? 'opacity-100 translate-y-0 pointer-events-auto'
                          : 'opacity-0 translate-y-4 pointer-events-none'
                      }
                    `}
                  >
                    {/* Number mit fester Höhe */}
                    <div className='h-32 sm:h-40 lg:h-48 flex items-center mb-4'>
                      <span
                        className={`
                        text-7xl sm:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] 
                        font-black opacity-15
                        bg-gradient-to-r ${getGradientColor(index)} 
                        bg-clip-text text-transparent
                        leading-none select-none
                      `}
                      >
                        {item.content.number}
                      </span>
                    </div>

                    {/* Title mit fester Höhe */}
                    <div className='h-20 sm:h-24 lg:h-28 flex items-start mb-4'>
                      <h3
                        className={`
                        text-2xl sm:text-3xl lg:text-4xl font-bold
                        bg-gradient-to-r ${getGradientColor(index)} 
                        bg-clip-text text-transparent
                        leading-tight
                      `}
                      >
                        {item.content.title}
                      </h3>
                    </div>

                    {/* Description mit fester Höhe */}
                    <div className='h-24 sm:h-28 lg:h-32 flex items-start'>
                      <p className='text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-300 leading-relaxed'>
                        {item.content.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Progress Indicator - Außerhalb des animierten Bereichs für Stabilität */}
              <div className='mt-8 lg:mt-12'>
                <div className='flex space-x-2 sm:space-x-3'>
                  {menuItems.map((_, index) => (
                    <button
                      key={index}
                      className={`
                        h-1.5 sm:h-2 flex-1 rounded-full transition-all duration-700
                        ${
                          index === activeSection
                            ? `bg-gradient-to-r ${getGradientColor(
                                activeSection
                              )}`
                            : 'bg-gray-700 hover:bg-gray-600'
                        }
                      `}
                      onClick={() => scrollToSection(index)}
                      aria-label={`Go to section ${index + 1}`}
                    />
                  ))}
                </div>
                <div className='flex justify-between mt-2 text-xs sm:text-sm text-gray-500'>
                  <span>01</span>
                  <span>05</span>
                </div>
              </div>

              {/* Mobile Menu Indicators */}
              <div className='lg:hidden mt-6'>
                <div className='flex items-center justify-between text-sm text-gray-400'>
                  <span className='font-semibold'>
                    {String(activeSection + 1).padStart(2, '0')} / 05
                  </span>
                  <span className='text-xs uppercase tracking-wider'>
                    Scroll für mehr
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
