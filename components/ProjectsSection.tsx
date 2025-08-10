'use client';

import React from 'react';
import Image from 'next/image';
import { PlayCircle } from 'lucide-react';
import localeIcon from '@/public/loc.svg';
import goalIcon from '@/public/goal.svg';

export const ProjectsSection = () => {
  const projects = [
    {
      name: 'Robert Steinmann',
      company: 'Rocket Search GmbH',
      website: 'www.rocketsearch-recruiting.com',
      image: '/project1.jpg', // Replace with actual image path
      logo: '/react-logo.png', // Replace with actual logo path
      initialSituation: {
        title: 'Ausgangssituation',
        points: [
          'Die Website war rudimentär aufgebaut – eher um überhaupt online präsent zu sein.',
          'Das Unternehmen hat sich schneller entwickelt als die Website.',
        ],
      },
      solution: {
        title: 'Lösung',
        points: [
          {
            text: 'In Figma + Webflow haben wir',
            highlight: 'einzigartiges Design entwickelt',
            continuation: ', welches das dynamische Unternehmen widerspiegelt.',
          },
          {
            text: 'Die Website kann',
            highlight: 'aktiv in der Akquise eingesetzt',
            continuation: 'werden, um Kunden zu gewinnen.',
          },
        ],
      },
    },
    {
      name: 'Fabian Bauer',
      company: 'ECOM MATE',
      website: 'www.fabian-bauer.de',
      image: '/project2.jpg', // Replace with actual image path
      logo: null,
      initialSituation: {
        title: 'Ausgangssituation',
        points: [
          'Die Website hatte viele versteckte Probleme. Änderungen und Pflege waren sehr aufwendig.',
          {
            text: 'Durch das Design konnte Fabians Website',
            highlight: 'nicht',
            continuation: 'in dem umkämpften Markt herausstechen.',
          },
        ],
      },
      solution: {
        title: 'Lösung',
        points: [
          {
            text: 'Zusammen haben eine',
            highlight: 'Custom-Lösung in Figma und Webflow entwickelt',
            continuation: ', die technisch optimal aufgesetzt ist.',
          },
          {
            text: 'Das Design ist',
            highlight: 'absolut einzigartig',
            continuation: 'und',
            highlight2: 'perfekt',
            continuation2: 'auf Fabian und seine Dienstleistung abgestimmt.',
          },
        ],
      },
    },
  ];

  return (
    <section className='bg-blue-700 py-20 px-6'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <h2 className='text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 italic'>
          ERFOLGREICHE <span className='font-black'>PROJEKTE</span>
        </h2>

        {/* Project Cards */}
        <div className='grid gap-8'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 shadow-2xl rounded-2xl overflow-hidden'
            >
              <div className='grid md:grid-cols-2'>
                {/* Left Side - Image and Info */}
                <div className='relative bg-gray-900'>
                  <div
                    className='absolute inset-0 bg-cover bg-center opacity-50'
                    style={{
                      backgroundImage: `url(${project.image})`,
                    }}
                  />
                  <div className='relative z-10 p-8 md:p-12 h-full grid grid-rows-[1fr_auto] min-h-[400px]'>
                    <div />
                    <div>
                      <h3 className='text-white text-3xl font-bold mb-2'>
                        {project.name}
                      </h3>
                      <p className='text-gray-300 text-sm italic mb-4'>
                        {project.company}
                      </p>
                      <p className='text-gray-400 text-sm mb-6'>
                        {project.website}
                      </p>
                      <button className='bg-white text-gray-900 px-6 py-3 rounded-full font-semibold inline-grid grid-cols-[auto_auto] items-center gap-2 hover:bg-gray-100 transition-colors'>
                        <span>Testimonial ansehen</span>
                        <PlayCircle className='w-5 h-5' />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className='p-8 md:p-12 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 shadow-2xl'>
                  {/* Logo Section */}
                  {project.logo && (
                    <div className='mb-8'>
                      <Image
                        src={project.logo}
                        alt={`${project.company} Logo`}
                        width={150}
                        height={50}
                        className='h-12 w-auto'
                      />
                    </div>
                  )}
                  {!project.logo && (
                    <h4 className='text-2xl font-bold mb-8 text-gray-200'>
                      {project.company}
                    </h4>
                  )}

                  {/* Initial Situation - Grid Layout */}
                  <div className='grid grid-cols-[auto_1fr] gap-4 mb-8'>
                    {/* Left Column - Icon */}
                    <div>
                      <Image
                        src={localeIcon}
                        alt='initial Icon'
                        width={50}
                        height={50}
                        className='w-8 h-8 opacity-20 invert'
                      />
                    </div>

                    {/* Right Column - Content */}
                    <div>
                      <h5 className='text-xl font-bold mb-4 text-gray-200'>
                        {project.initialSituation.title}
                      </h5>
                      <div className='grid gap-3'>
                        {project.initialSituation.points.map((point, idx) => (
                          <p
                            key={idx}
                            className='text-gray-300 leading-relaxed'
                          >
                            {typeof point === 'string' ? (
                              point
                            ) : (
                              <>
                                {point.text}{' '}
                                <span className='font-bold'>
                                  {point.highlight}
                                </span>
                                {point.continuation}
                              </>
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Solution - Grid Layout */}
                  <div className='grid grid-cols-[auto_1fr] gap-4'>
                    {/* Left Column - Icon */}
                    <div>
                      <Image
                        src={goalIcon}
                        alt='solution Icon'
                        width={50}
                        height={50}
                        className='w-8 h-8 opacity-20 invert'
                      />
                    </div>

                    {/* Right Column - Content */}
                    <div>
                      <h5 className='text-xl font-bold mb-4 text-gray-200 italic'>
                        {project.solution.title}
                      </h5>
                      <div className='grid gap-3'>
                        {project.solution.points.map((point, idx) => (
                          <p
                            key={idx}
                            className='text-gray-300 leading-relaxed'
                          >
                            {point.text}{' '}
                            <span className='font-bold'>{point.highlight}</span>
                            {point.continuation}
                            {point.highlight && (
                              <>
                                <span className='font-bold'>
                                  {point.highlight}
                                </span>
                                {point.continuation}
                              </>
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
