'use client';

import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { GradientText } from './ui/gradient-text';

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

const faqs = [
  {
    question: 'Wie schnell kannst Du in ein laufendes Projekt einsteigen?',
    answer:
      'In der Regel kann ich innerhalb von 48 Stunden starten. Dank meiner Erfahrung mit verschiedenen Tech-Stacks (React, Next.js, Node.js, Vue, u.a.) und agilen Prozessen bin ich in der Lage, mich sofort in bestehende Codebases und Workflows einzuarbeiten produktiv ab Tag 1.',
  },
  {
    question: 'Arbeitest Du auch mit bestehenden Entwickler- oder Designteams?',
    answer:
      'Ja, ich bin es gewohnt, mich in bestehende Teams einzufügen – ob als zusätzliche Verstärkung im Sprint oder als alleinverantwortlicher Entwickler für einen Teilbereich. Klare Kommunikation, Git-Workflow und transparente Statusupdates gehören für mich zum Standard.',
  },
  {
    question: 'Kannst Du auch komplexe API-Integrationen und Backend-Logik umsetzen?',
    answer:
      'Absolut. Ich habe Erfahrung in der Entwicklung und Anbindung von REST- und GraphQL-APIs, Datenbankabfragen (PostgreSQL, MongoDB) sowie Cloud-Funktionen. Dabei setze ich auf saubere Schnittstellenarchitektur, klare Dokumentation und performanten Code.',
  },
  {
    question: 'Wie stellst Du die Qualität und Performance sicher?',
    answer:
      'Ich arbeite mit Code-Reviews, automatisierten Tests, Performance-Monitoring und CI/CD-Pipelines. So bleibt der Code stabil, skalierbar und wartungsfreundlich. Zusätzlich optimiere ich Ladezeiten und Lighthouse-Scores für bestmögliche User Experience.',
  },
  {
    question: 'Unterstützt Du auch bei Konzeption und Architektur?',
    answer:
      'Ja – von der Ideenphase bis zur fertigen Umsetzung. Ich helfe bei der Auswahl des Tech-Stacks, dem Aufbau einer skalierbaren Architektur und der Planung von Features, um Entwicklungszeit und -kosten zu optimieren.',
  },
  {
    question: 'Wie läuft die Zusammenarbeit typischerweise ab?',
    answer:
      'Nach einem kurzen Kick-off-Call stimmen wir Ziele, Deliverables und Kommunikationswege ab. Ich dokumentiere Fortschritte transparent und bin über die vereinbarten Kanäle (Slack, Teams, E-Mail) jederzeit erreichbar. Bei Bedarf liefere ich Zwischenstände in kurzen Review-Zyklen.',
  },
];


  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='bg-gray-900 py-20 px-6'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='font-orbitron text-left mb-10 md:mb-16 lg:mb-20'>
          <h2 className='font-orbitron font-semibold leading-none text-white text-[1.75em] sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mt-4 md:mt-5'>
            <span className='block sm:block'>Häufig gestellte</span>{' '}
            <GradientText className='inline-block sm:inline' text='Fragen' />
          </h2>
        </div>

        {/* FAQ Items */}
        <div className='space-y-0'>
          {faqs.map((faq, index) => (
            <div key={index} className='border-b border-gray-800'>
              <button
                onClick={() => toggleAccordion(index)}
                className='w-full py-6 lg:py-8 text-left group'
              >
                <div className='flex items-center justify-between'>
                  <h3 className='text-white text-lg md:text-xl lg:text-2xl font-medium pr-4 transition-colors duration-300 group-hover:bg-gradient-to-r group-hover:from-[#61dafb] group-hover:via-[#4cc3a5] group-hover:via-[#41b883] group-hover:via-[#4cc3a5] group-hover:to-[#61dafb] group-hover:bg-clip-text group-hover:text-transparent'>
                    {faq.question}
                  </h3>
                  <div className='flex-shrink-0'>
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                        openIndex === index
                          ? 'rotate-45 bg-gradient-to-r from-[#61dafb] via-[#4cc3a5] to-[#41b883]'
                          : 'border border-gray-600 group-hover:border-[#4cc3a5]'
                      }`}
                    >
                      <Plus
                        className={`w-5 h-5 transition-colors duration-300 ${
                          openIndex === index
                            ? 'text-white'
                            : 'text-gray-400 group-hover:text-blue-400'
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </button>
              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <p className='text-gray-400 text-base lg:text-lg leading-relaxed pb-6 pr-12'>
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
