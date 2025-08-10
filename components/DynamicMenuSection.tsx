import React, { useState, useEffect, useRef } from 'react';

export const DynamicMenuSection = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const menuItems = [
    {
      id: 1,
      title: 'Veraltete Webseite',
      content: {
        number: '01',
        title: 'KEINE ODER VERALTETE WEBSEITE',
        description:
          'Dein Unternehmen wird online nicht ordentlich repräsentiert und ihr braucht eine neue Website?',
      },
    },
    {
      id: 2,
      title: 'Keine Kundenanfragen',
      content: {
        number: '02',
        title: 'GERINGE ONLINE-SICHTBARKEIT',
        description:
          'Potenzielle Kunden finden dich nicht online und du verpasst wertvolle Geschäftschancen?',
      },
    },
    {
      id: 3,
      title: 'Probleme mit WordPress & Co.',
      content: {
        number: '03',
        title: 'TECHNISCHE PROBLEME',
        description:
          'Ständige Wartungsarbeiten, Sicherheitslücken und Performance-Probleme belasten dein Business?',
      },
    },
    {
      id: 4,
      title: 'Website ohne Wow-Effekt',
      content: {
        number: '04',
        title: 'LANGWEILIGES DESIGN',
        description:
          'Deine aktuelle Website wirkt unprofessionell und hebt sich nicht von der Konkurrenz ab?',
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
        containerRect.bottom < windowHeight * 0.2 ||
        containerRect.top > windowHeight * 0.8
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
      'from-red-500 to-red-600',
      'from-blue-500 to-blue-600',
      'from-green-500 to-green-600',
      'from-purple-500 to-purple-600',
    ];
    return colors[index] || colors[0];
  };

  return (
    <div ref={containerRef} className='min-h-[400vh] bg-gray-900 text-white'>
      {/* Header - Fixed positioning when in view */}
      <div className='sticky top-0 min-h-screen flex flex-col justify-center'>
        <div className='max-w-7xl mx-auto px-6 w-full'>
          {/* Header */}
          <div className='text-left mb-20'>
            <h2 className='text-5xl lg:text-7xl font-bold mb-6'>
              KENNST DU DIESE{' '}
              <span className='text-red-500 block lg:inline'>
                HERAUSFORDERUNGEN?
              </span>
            </h2>
            <p className='text-xl text-gray-300'>
              Lass uns diese gemeinsam überwältigen!
            </p>
          </div>

          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            {/* Left Menu */}
            <div className='space-y-12'>
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
                  text-4xl lg:text-5xl font-bold mb-8 transition-all duration-1000
                  bg-gradient-to-r ${getGradientColor(
                    activeSection
                  )} bg-clip-text text-transparent
                  leading-tight
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
                    <span>04</span>
                  </div>
                </div>

                {/* Call to Action */}
                <div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
