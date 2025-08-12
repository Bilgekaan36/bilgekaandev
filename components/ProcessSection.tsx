'use client';

import React, { useEffect, useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { GradientText } from './ui/gradient-text';

export const ProcessSection = () => {
  const [progress, setProgress] = useState(100);
  const [activeBackground, setActiveBackground] = useState('white');

  const handleStep = (data: React.SetStateAction<string>) => {
    setActiveBackground(data);
  };

  const handleProgress = (progressValue: number) => {
    if (progressValue >= 0.9) {
      return;
    }
    setProgress(progressValue);
  };

  useEffect(() => {
    handleStep('white');
  }, []);

  const textData = [
    {
      subtitles: [
        {
          textId: 'subtitleDiscovery1',
          text: 'Überblick über Codebase & Architektur',
        },
        { textId: 'subtitleDiscovery2', text: 'Tooling-Analyse & Setup' },
        {
          textId: 'subtitleDiscovery3',
          text: 'Klärung von Prioritäten & Risiken',
        },
      ],
    },
    {
      subtitles: [
        {
          textId: 'subtitleStrategy1',
          text: 'Optimierungspotenzial identifizieren',
        },
        { textId: 'subtitleStrategy2', text: 'Risiken bewerten' },
        {
          textId: 'subtitleStrategy3',
          text: 'Technische Konzepte für Features/Refactorings',
        },
      ],
    },
    {
      subtitles: [
        {
          textId: 'subtitleDesign1',
          text: 'Frontend-Umsetzung nach Team-Standards',
        },
        { textId: 'subtitleDesign2', text: 'Backend-Integration' },
        { textId: 'subtitleDesign3', text: 'Code-Reviews & Testing' },
        {
          textId: 'subtitleDesign4',
          text: 'Reibungslose Integration ins System',
        },
      ],
    },
    {
      subtitles: [
        {
          textId: 'subtitleDevelopment1',
          text: 'Automatisierte Tests (Jest, Cypress)',
        },
        {
          textId: 'subtitleDevelopment2',
          text: 'CI/CD-Pipelines implementieren',
        },
        { textId: 'subtitleDevelopment3', text: 'Performancetuning' },
        {
          textId: 'subtitleDevelopment4',
          text: 'Vollständige technische Dokumentation',
        },
      ],
    },
    {
      subtitles: [
        {
          textId: 'subtitleOnboarding1',
          text: 'Strukturierte Übergabe an interne Teams',
        },
        {
          textId: 'subtitleOnboarding2',
          text: 'Onboarding-Sessions durchführen',
        },
        {
          textId: 'subtitleOnboarding3',
          text: 'Support bereitstellen (optional)',
        },
        { textId: 'subtitleOnboarding4', text: 'Wissen nachhaltig sichern' },
      ],
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Projektanalyse & Einarbeitung',
      content:
        'Schneller Überblick über Codebase, Architektur und Tooling. Klärung von Prioritäten und Risiken damit ich ab Tag 1 produktiv bin.',
      subtitles: textData[0].subtitles,
    },
    {
      number: '02',
      title: 'Architektur & Planung',
      content:
        'Identifikation von Optimierungspotenzial und Risiken. Erstellung technischer Konzepte für neue Features oder Refactorings.',
      subtitles: textData[1].subtitles,
    },
    {
      number: '03',
      title: 'Entwicklung & Integration',
      content:
        'Umsetzung in Front- und Backend nach Team-Standards. Code-Reviews, Testing und reibungslose Integration ins bestehende System.',
      subtitles: textData[2].subtitles,
    },
    {
      number: '04',
      title: 'Qualitätssicherung & Deployment',
      content:
        'Automatisierte Tests (Jest, Cypress), CI/CD-Pipelines, Performancetuning und vollständige technische Dokumentation.',
      subtitles: textData[3].subtitles,
    },
    {
      number: '05',
      title: 'Übergabe & Wissenssicherung',
      content:
        'Strukturierte Übergabe an interne Teams inkl. Onboarding-Sessions, Dokumentation und optionalem Support.',
      subtitles: textData[4].subtitles,
    },
  ];

  return (
    <div
      id='services'
      className='mx-auto max-w-7xl pt-32 px-3 sm:px-6  lg:px-8 bg-gray-900 transition-colors duration-500 flex flex-col md:flex-row md:gap-3'
      style={{ backgroundColor: activeBackground }}
    >
      {/* Title Section */}
      <div className='md:sticky top-12 mb-12 h-fit lg:top-24 order-first lg:h-fit w-full md:w-3/6 z-100'>
        <div className='font-orbitron text-left mb-10 md:mb-16 lg:mb-20'>
          <h2 className='font-orbitron font-semibold text-gray-400 text-2xl  md:text-3xl tracking-tight mt-4 md:mt-5 leading-tight'>
            <span className='inline sm:inline'>
              So löse ich Ihre Engpässe pragmatisch und teamkompatibel mit
            </span>{' '}
            <GradientText
              className='inline sm:inline'
              text='messbarem Impact ab Woche eins'
            />
          </h2>
        </div>
      </div>

      {/* Process Steps */}
      <Parallax onProgressChange={handleProgress}>
        <div className='w-full md:w-11/12 order-2 relative'>
          {/* Progress Line mit Glow-Kugel */}
          <div
            className='absolute top-0 left-[6px] rounded-full'
            style={{
              width: '6px',
              height: `${progress * 2300}px`,
              background:
                'linear-gradient(180deg, #61dafb 0%, #4cc3a5 25%, #41b883 50%, #4cc3a5 75%, #61dafb 100%)',
            }}
          >
            {/* <div
              className='absolute -left-[9px] w-6 h-6 rounded-full animate-pulse'
              style={{
                top: `${progress * 2000 - 12}px`,
                background: 'radial-gradient(circle, #61dafb 0%, #41b883 70%)',
                boxShadow:
                  '0 0 12px rgba(97, 218, 251, 0.8), 0 0 24px rgba(65, 184, 131, 0.6)',
              }}
            ></div> */}
          </div>

          {/* Steps */}
          {steps.map((step, index) => (
            <div key={index} className='relative flex mb-32 last:mb-0'>
              {/* Step Number */}
              <div
                className='absolute -left-5 lg:-left-5 top-0 w-16 lg:w-24 text-center font-black text-3xl lg:text-5xl transition-colors duration-300 flex items-center justify-center rounded-md shadow-md'
                style={{
                  backgroundColor: activeBackground,
                  color: activeBackground === '#1e1f26' ? 'white' : '#1e1f26',
                }}
              >
                {step.number}
              </div>

              {/* Step Content */}
              <div className='w-full pl-12 lg:pl-20 z-10'>
                <h3
                  className='text-2xl lg:text-3xl font-bold mb-4 bg-clip-text text-transparent'
                  style={{
                    backgroundImage:
                      'linear-gradient(90deg, #61dafb 0%, #4cc3a5 25%, #41b883 50%, #4cc3a5 75%, #61dafb 100%)',
                  }}
                >
                  {step.title}
                </h3>
                <p className='text-gray-300 text-lg lg:text-xl font-medium mb-6 leading-relaxed'>
                  {step.content}
                </p>
                {step.subtitles.map((subtitle) => (
                  <p
                    key={subtitle.textId}
                    className='text-lg lg:text-xl font-medium mb-4 flex items-start text-gray-500'
                  >
                    <span className='mr-2 text-[#61dafb]'>•</span>{' '}
                    {subtitle.text}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Parallax>
    </div>
  );
};
