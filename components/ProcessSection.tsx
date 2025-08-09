'use client';

import React, { useEffect, useState } from 'react';
import { Parallax } from 'react-scroll-parallax';

export const ProcessSection = () => {
  const [progress, setProgress] = useState(100);
  const [activeBackground, setActiveBackground] = useState('white');

  const handleStep = (data: React.SetStateAction<string>) => {
    setActiveBackground(data);
  };

  const handleProgress = (data: React.SetStateAction<number>) => {
    const value = typeof data === 'function' ? data(progress) : data;
    if (value >= 0.9) {
      return;
    }
    setProgress(value);
  };

  useEffect(() => {
    handleStep('white');
  }, []);

  const textData = [
    {
      subtitles: [
        { textId: 'subtitleDiscovery1', text: 'User Research & Analysis' },
        { textId: 'subtitleDiscovery2', text: 'Market Research' },
        { textId: 'subtitleDiscovery3', text: 'Competitive Analysis' },
      ],
    },
    {
      subtitles: [
        { textId: 'subtitleStrategy1', text: 'Define Goals & Objectives' },
        { textId: 'subtitleStrategy2', text: 'Create Roadmap' },
        { textId: 'subtitleStrategy3', text: 'Set KPIs' },
      ],
    },
    {
      subtitles: [
        { textId: 'subtitleDesign1', text: 'Wireframing & Prototyping' },
        { textId: 'subtitleDesign2', text: 'Visual Design & UI' },
      ],
    },
    {
      subtitles: [
        { textId: 'subtitleDevelopment1', text: 'Frontend Development' },
        { textId: 'subtitleDevelopment2', text: 'Backend Development' },
        { textId: 'subtitleDevelopment3', text: 'API Integration' },
        { textId: 'subtitleDevelopment4', text: 'Testing & QA' },
      ],
    },
    {
      subtitles: [
        { textId: 'subtitleOnboarding1', text: 'Deployment' },
        { textId: 'subtitleOnboarding2', text: 'Training & Documentation' },
        { textId: 'subtitleOnboarding3', text: 'Support Setup' },
        { textId: 'subtitleOnboarding4', text: 'Performance Monitoring' },
      ],
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Discovery',
      content:
        'Understanding your business, users, and goals to create a solid foundation for your project.',
      subtitles: textData[0].subtitles,
    },
    {
      number: '02',
      title: 'Strategy',
      content:
        'Developing a comprehensive plan that aligns with your business objectives and user needs.',
      subtitles: textData[1].subtitles,
    },
    {
      number: '03',
      title: 'Design',
      content:
        'Creating intuitive and beautiful user experiences that delight and engage.',
      subtitles: textData[2].subtitles,
    },
    {
      number: '04',
      title: 'Development',
      content:
        'Building robust, scalable solutions using cutting-edge technologies.',
      subtitles: textData[3].subtitles,
    },
    {
      number: '05',
      title: 'Onboarding',
      content:
        'Ensuring smooth launch and adoption with comprehensive support and training.',
      subtitles: textData[4].subtitles,
    },
  ];

  return (
    <div
      className='mx-auto max-w-2xl pt-32 px-6 lg:max-w-7xl lg:px-8 bg-gray-900 transition-colors duration-500 md:flex md:gap-12'
      style={{ backgroundColor: activeBackground }}
    >
      {/* Process Steps */}
      <Parallax onProgressChange={handleProgress}>
        <div className='w-full relative'>
          {/* Progress Line */}
          <div
            className='absolute top-0 left-0 bg-[#1e1f26] w-[2px] sm:w-[3px]'
            style={{
              height: `${progress * 2000}px`,
            }}
          />

          {/* Steps */}
          {steps.map((step, index) => (
            <div key={index} className='relative flex mb-32 last:mb-0'>
              {/* Step Number */}
              <div
                className='absolute -left-5 lg:-left-5 top-0 w-16 lg:w-24 text-center font-black text-3xl lg:text-5xl transition-colors duration-300'
                style={{
                  backgroundColor: activeBackground,
                  color: activeBackground === '#1e1f26' ? 'white' : '#1e1f26',
                }}
              >
                {step.number}
              </div>

              {/* Step Content */}
              <div className='w-full pl-12 lg:pl-20 z-10'>
                <p className='text-[#848484] text-base lg:text-lg font-normal mb-2'>
                  {step.title}
                </p>
                <h3
                  className='text-2xl lg:text-3xl font-medium mb-3 transition-colors duration-300'
                  style={{
                    color: activeBackground === '#1e1f26' ? 'white' : '#1e1f26',
                  }}
                >
                  {step.title}
                </h3>
                <p className='text-[#848484] text-base lg:text-lg font-light mb-4'>
                  {step.content}
                </p>
                {step.subtitles.map((subtitle) => (
                  <p
                    key={subtitle.textId}
                    className='text-lg lg:text-xl font-medium mb-3 transition-colors duration-300'
                    style={{
                      color:
                        activeBackground === '#1e1f26' ? 'white' : '#1e1f26',
                    }}
                  >
                    {subtitle.text}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Parallax>
      {/* Title Section */}
      <div className='lg:sticky lg:top-24 lg:h-fit'>
        <h2 className='text-[#1e1f26] text-2xl md:text-3xl lg:text-5xl font-bold leading-tight mb-4'>
          We build digital
          <br />
          experiences that matter
        </h2>
        <p className='text-[#848484] text-lg md:text-xl lg:text-2xl font-normal'>
          From concept to launch,
          <br />
          were with you every step of the way
        </p>
      </div>
    </div>
  );
};
