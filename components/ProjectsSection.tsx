'use client';

import React from 'react';
import Image from 'next/image';
import localeIcon from '@/public/loc.svg';
import goalIcon from '@/public/goal.svg';
import { GradientText } from './ui/gradient-text';

export const ProjectsSection = () => {
  const projects = [
    {
      name: 'SaaS-Plattform im Energiesektor',
      tag: 'SaaS / Cloud',
      company: 'Confidential Client',
      website: null,
      image: null,
      initialSituation: {
        title: 'Ausgangssituation',
        points: [
          'Individuell konfigurierbares Kundenportal, das pro Endkunde dynamische Features anzeigt.',
          'Go-Live in nur 6 Wochen zwingend erforderlich – hohes Time-to-Market Risiko.',
        ],
      },
      solution: {
        title: 'Lösung & Ergebnisse',
        points: [
          {
            text: 'Aufbau einer modularen',
            highlight: 'UI-Component-Library',
            continuation:
              ' für schnelle Entwicklung und maximale Wiederverwendbarkeit.',
          },
          {
            text: 'Entwicklung stabiler',
            highlight: 'API-Integrationen in Laravel & Node.js',
            continuation: ' mit klarer Schnittstellenarchitektur.',
          },
          {
            text: 'Deployment auf',
            highlight: 'skalierbarer Cloud-Architektur',
            continuation: ' inkl. automatisierter CI/CD-Pipeline.',
          },
          {
            text: 'KPIs:',
            highlight: '40 % schnellere Feature-Auslieferung',
            continuation: ' und 25 % geringere Wartungskosten in 3 Monaten.',
          },
        ],
      },
    },
    {
      name: 'Intelligentes QR-Menü mit Analytics',
      tag: 'AI / Digital Menu',
      company: 'Eiscafé Remi',
      website: null,
      image: null,
      initialSituation: {
        title: 'Ausgangssituation',
        points: [
          'Digitale Menü-Lösung für effizientere Bestellungen benötigt.',
          'Keine Datenanalyse zu beliebten Produkten – Potenzial für Angebotsoptimierung.',
        ],
      },
      solution: {
        title: 'Lösung & Ergebnisse',
        points: [
          {
            text: 'Dynamisches',
            highlight: 'QR-Menü mit Admin-Dashboard',
            continuation:
              ' für Live-Updates von Kategorien, Produkten & Preisen.',
          },
          {
            text: 'Implementierung einer',
            highlight: 'KI-basierten Analysefunktion',
            continuation:
              ' zur automatischen Sortierung der meistgesuchten Produkte.',
          },
          {
            text: 'Mobile-First UI',
            highlight: ' mit schnellen Ladezeiten',
            continuation: ' und barrierearmem Zugriff.',
          },
          {
            text: 'KPIs:',
            highlight: '+30 % Umsatzsteigerung',
            continuation:
              ' durch bessere Angebotsplatzierung & +45 % höhere Nutzung des QR-Menüs.',
          },
        ],
      },
    },
  ];

  return (
    <section id='projects' className='bg-gray-900 py-20 px-6 relative'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='font-orbitron font-semibold text-white text-4xl md:text-5xl lg:text-6xl tracking-tight'>
            Erfolgreiche <GradientText text='Projekte' />
          </h2>
        </div>

        {/* Project Cards */}
        <div className='grid gap-10'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/10 hover:border-white/30 shadow-lg hover:shadow-2xl rounded-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.01]'
            >
              <div className='grid md:grid-cols-2'>
                {/* Left Side - Image */}
                {/* Left Side - Image */}
                <div className='relative bg-gray-900'>
                  {project.image ? (
                    <div
                      className='absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-80 transition-opacity duration-300'
                      style={{ backgroundImage: `url(${project.image})` }}
                    />
                  ) : (
                    <div className='absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800'>
                      <span className='text-white/80 text-2xl font-orbitron tracking-widest border border-white/20 px-6 py-3 rounded-lg shadow-lg backdrop-blur-sm'>
                        Coming Soon
                      </span>
                    </div>
                  )}

                  {/* Tag oben links */}
                  <span className='absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-xs uppercase tracking-wide text-white px-3 py-1 rounded-full border border-white/20'>
                    {project.tag}
                  </span>

                  <div className='relative z-10 p-8 md:p-12 h-full grid grid-rows-[1fr_auto] min-h-[400px]'>
                    <div />
                    <div>
                      <h3 className='text-white text-3xl font-bold mb-2'>
                        {project.name}
                      </h3>
                      <p className='text-gray-300 text-sm italic mb-4'>
                        {project.company}
                      </p>
                      {project.website && (
                        <p className='text-gray-400 text-sm mb-6'>
                          {project.website}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className='p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-white/5 to-white/[0.02]'>
                  {/* Initial Situation */}
                  <div className='mb-8'>
                    <h5 className='text-2xl font-bold mb-4 text-gray-200'>
                      <GradientText text={project.initialSituation.title} />
                    </h5>
                    <ul className='space-y-3'>
                      {project.initialSituation.points.map((point, idx) => (
                        <li
                          key={idx}
                          className='text-gray-300 leading-relaxed flex items-start gap-2'
                        >
                          <Image
                            src={localeIcon}
                            alt='initial Icon'
                            width={20}
                            height={20}
                            className='opacity-50 invert'
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solution */}
                  <div>
                    <h5 className='text-2xl font-bold mb-4 text-gray-200 italic'>
                      <GradientText text={project.solution.title} />
                    </h5>
                    <ul className='space-y-3'>
                      {project.solution.points.map((point, idx) => (
                        <li
                          key={idx}
                          className='text-gray-300 leading-relaxed flex items-start gap-2'
                        >
                          <Image
                            src={goalIcon}
                            alt='solution Icon'
                            width={20}
                            height={20}
                            className='opacity-50 invert'
                          />
                          <span>
                            {point.text}{' '}
                            <span className='font-bold text-white'>
                              {point.highlight}
                            </span>
                            {point.continuation}
                          </span>
                        </li>
                      ))}
                    </ul>
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
