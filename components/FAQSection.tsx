'use client';

import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { GradientText } from './ui/gradient-text';

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Was unterscheidet Dich von anderen Webflow Entwicklern?',
      answer:
        'Meine Kombination aus technischer Expertise, kreativem Design und strategischem Denken macht den Unterschied. Ich entwickle nicht nur Websites, sondern digitale Erlebnisse, die messbare Ergebnisse liefern. Dabei setze ich auf transparente Kommunikation, agile Prozesse und eine partnerschaftliche Zusammenarbeit auf Augenhöhe.',
    },
    {
      question: 'Wie genau funktionieren die SEO Maßnahmen?',
      answer:
        'SEO ist ein ganzheitlicher Ansatz: Von der technischen Optimierung über Content-Strategie bis zur Performance-Optimierung. Ich analysiere Keywords, optimiere Meta-Tags, strukturiere Inhalte suchmaschinenfreundlich und stelle sicher, dass deine Website schnell lädt. Regelmäßige Reports zeigen dir den Fortschritt.',
    },
    {
      question: 'Wie viel kostet eine Website?',
      answer:
        'Die Kosten hängen vom Umfang und der Komplexität deines Projekts ab. Eine einfache Landing Page startet bei 2.500€, während umfangreiche Corporate Websites bei 10.000€ beginnen. Nach einem kostenlosen Erstgespräch erhältst du ein transparentes Angebot mit allen Leistungen im Detail.',
    },
    {
      question: 'Arbeitest Du ausschließlich mit Webflow?',
      answer:
        'Webflow ist mein bevorzugtes Tool für die meisten Projekte, da es die perfekte Balance aus Design-Freiheit und Performance bietet. Bei speziellen Anforderungen arbeite ich auch mit anderen Technologien wie React, Next.js oder WordPress. Die Wahl der Technologie richtet sich immer nach deinen Zielen.',
    },
    {
      question: 'Bietest Du auch nur Webflow Entwicklungen an?',
      answer:
        'Ja, ich biete auch reine Entwicklungsleistungen an. Wenn du bereits ein fertiges Design hast, setze ich dieses pixelgenau in Webflow um. Dabei achte ich auf sauberen Code, Responsive Design und optimale Performance. Die Entwicklung erfolgt dabei in enger Abstimmung mit dir oder deinem Design-Team.',
    },
    {
      question: 'Bietest Du auch nur SEO an?',
      answer:
        'Absolut! SEO kann als separater Service gebucht werden. Ich biete SEO-Audits, Keyword-Recherche, On-Page Optimierung und technisches SEO an. Auch die laufende Betreuung und Optimierung bestehender Websites ist möglich. Gemeinsam entwickeln wir eine Strategie, die zu deinen Zielen passt.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='bg-black py-20 px-6'>
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
