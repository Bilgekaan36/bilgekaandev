import React, { useState, useEffect, useRef } from 'react';
import { GradientText } from './ui/gradient-text';
import { HighlightText } from './ui/highlight-text';

export const DynamicMenuSection = () => {
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
            (containerHeight - windowHeight * 0.4)
        )
      );

      // Determine active section based on scroll progress
      const sectionProgress = scrollProgress * (menuItems.length - 1);
      const newActiveSection = Math.round(sectionProgress);

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
      // 1) Smaragd → Rot (starker Farbkonflikt für Aufmerksamkeit)
      'from-[#10b981] to-[#ef4444]',

      // 2) Kaltblau → Warmrot (kräftige Dualität)
      'from-[#3b82f6] to-[#f43f5e]',
      // 3) Türkis → Tiefes Lila (cool/warm Tech-Look)
      'from-[#2dd4bf] to-[#7c3aed]',

      // 4) Helles Cyan → Gelb (freundlich/auffällig)
      'from-[#06b6d4] to-[#fde047]',

      // 5) React-Blau → Neonpink (UI-Highlight)
      'from-[#61dafb] to-[#ec4899]',
    ];
    return colors[index] || colors[0];
  };

  return (
    <div ref={containerRef} className='min-h-[400vh] bg-gray-900 text-white'>
      {/* Header - Fixed positioning when in view */}
      <div className='sticky top-0 min-h-screen flex flex-col justify-center'>
        <div className='max-w-7xl mx-auto px-6 w-full'>
          {/* Header */}
          <div className='font-orbitron text-left mt-8 mb-4 md:mb-8 lg:mb-10'>
            <h2 className='font-orbitron font-semibold leading-none text-white text-[1.75em] sm:text-4xl md:text-5xl lg:text-6xl tracking-tight md:mt-5'>
              <span className='block sm:block'>Kennst du diese</span>{' '}
              <GradientText
                className='inline-block sm:inline'
                text='Herausforderungen?'
              />
            </h2>
            <p className='text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl mt-1 md:mt-4 lg:mt-6 max-w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-2xl'>
              Lass uns diese gemeinsam bewältigen!
            </p>
          </div>

          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            {/* Left Menu */}
            <div className='space-y-12 hidden lg:block'>
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
                  <div className='flex items-center space-x-6 group'>
                    <span
                      className={`
                      text-3xl font-bold transition-all duration-700
                      ${
                        activeSection === index ? 'text-white' : 'text-gray-500'
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
                      text-xl lg:text-3xl font-semibold transition-all duration-700
                      ${
                        activeSection === index ? 'text-white' : 'text-gray-400'
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

            {/* Right Content */}
            <div className='flex flex-col justify-center min-h-[60vh]'>
              <div
                className={`
                transition-all duration-1000 ease-out transform
                ${
                  activeSection >= 0
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }
              `}
              >
                <div className='mb-8'>
                  <span
                    className={`
                    text-9xl lg:text-[12rem] font-black opacity-15 transition-all duration-1000
                    bg-gradient-to-r ${getGradientColor(
                      activeSection
                    )} bg-clip-text text-transparent
                    block leading-none
                  `}
                  >
                    {menuItems[activeSection]?.content.number}
                  </span>
                </div>

                <h3
                  className={`
                  text-4xl lg:text-4xl font-bold mb-8 transition-all duration-1000
                  bg-gradient-to-r ${getGradientColor(
                    activeSection
                  )} bg-clip-text text-transparent
                  leading-tight break-words
                `}
                >
                  {menuItems[activeSection]?.content.title}
                </h3>

                <p className='text-xl lg:text-2xl text-gray-300 leading-relaxed transition-all duration-1000 mb-12'>
                  {menuItems[activeSection]?.content.description}
                </p>

                {/* Progress Indicator */}
                <div className='mb-8'>
                  <div className='flex space-x-3'>
                    {menuItems.map((_, index) => (
                      <div
                        key={index}
                        className={`
                          h-2 flex-1 rounded-full transition-all duration-700 cursor-pointer
                          ${
                            index === activeSection
                              ? `bg-gradient-to-r ${getGradientColor(
                                  activeSection
                                )}`
                              : 'bg-gray-700 hover:bg-gray-600'
                          }
                        `}
                        onClick={() => scrollToSection(index)}
                      />
                    ))}
                  </div>
                  <div className='flex justify-between mt-2 text-sm text-gray-500'>
                    <span>01</span>
                    <span>05</span>
                  </div>
                </div>

                {/* Call to Action */}
                {/* <div>
                  <button
                    className={`
                    px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-700 transform hover:scale-105
                    bg-gradient-to-r ${getGradientColor(
                      activeSection
                    )} text-white shadow-xl
                    hover:shadow-2xl hover:brightness-110
                  `}
                  >
                    Lösung entdecken
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
