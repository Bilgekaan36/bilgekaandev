'use client';

import React from 'react';
import { GradientText } from '@/components/ui/gradient-text';
import { OpenPreferencesButton } from '@/components/cookie-consent/OpenPreferencesButton';
import { Cookie, ShieldCheck, BarChart2, Megaphone, Info } from 'lucide-react';

export default function Cookies() {
  return (
    <main className='bg-gray-900 text-white'>
      {/* Hero */}
      <section className='max-w-7xl mx-auto px-6 pt-24 pb-8'>
        <h1 className='font-orbitron text-4xl md:text-5xl font-bold leading-tight'>
          <GradientText text='Cookies & Präferenzen' />
        </h1>
        <p className='mt-4 text-gray-400 max-w-2xl'>
          Wir nutzen Cookies und ähnliche Technologien, um unsere Website zu
          betreiben, zu messen und – nur mit deiner Einwilligung – Marketing zu
          ermöglichen. Du kannst deine Auswahl jederzeit anpassen.
        </p>
      </section>

      {/* Content */}
      <section className='max-w-7xl mx-auto px-6 pb-20'>
        <div className='grid gap-6 md:gap-8 md:grid-cols-2'>
          {/* Notwendig */}
          <article className='rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent p-6 md:p-8'>
            <div className='flex items-center gap-3 mb-3'>
              <ShieldCheck className='h-5 w-5 text-[#4cc3a5]' />
              <h2 className='text-xl font-semibold'>Notwendige Cookies</h2>
            </div>
            <p className='text-gray-300'>
              Diese sind für die Grundfunktionen der Seite erforderlich (z. B.
              Seitennavigation, CSRF-Schutz, Consent-Speicherung). Sie werden
              automatisch gesetzt und können nicht deaktiviert werden.
            </p>
            <ul className='mt-4 text-sm text-gray-400 space-y-2 list-disc list-inside'>
              <li>Session-ID / Sicherheit</li>
              <li>Consent-Status (deine gewählten Einstellungen)</li>
            </ul>
          </article>

          {/* Analytics */}
          <article className='rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent p-6 md:p-8'>
            <div className='flex items-center gap-3 mb-3'>
              <BarChart2 className='h-5 w-5 text-[#61dafb]' />
              <h2 className='text-xl font-semibold'>Analyse (optional)</h2>
            </div>
            <p className='text-gray-300'>
              Helfen uns zu verstehen, wie die Seite genutzt wird (z. B.
              Seitenaufrufe, Interaktionen, ungefähre Geolokation). Wird nur
              geladen, wenn du zustimmst.
            </p>
            <ul className='mt-4 text-sm text-gray-400 space-y-2 list-disc list-inside'>
              <li>
                Beispiel: Google Analytics (IP anonymisiert, wenn konfiguriert)
              </li>
            </ul>
          </article>

          {/* Marketing */}
          <article className='rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent p-6 md:p-8'>
            <div className='flex items-center gap-3 mb-3'>
              <Megaphone className='h-5 w-5 text-[#41b883]' />
              <h2 className='text-xl font-semibold'>Marketing (optional)</h2>
            </div>
            <p className='text-gray-300'>
              Dient zur Messung von Kampagnen und für Retargeting (z. B.
              LinkedIn Insight Tag). Wird nur geladen, wenn du zustimmst.
            </p>
            <ul className='mt-4 text-sm text-gray-400 space-y-2 list-disc list-inside'>
              <li>
                LinkedIn Insight Tag (Conversion-Tracking, Zielgruppenbildung)
              </li>
            </ul>
          </article>

          {/* Hinweise / Rechtsgrundlage */}
          <article className='rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent p-6 md:p-8'>
            <div className='flex items-center gap-3 mb-3'>
              <Info className='h-5 w-5 text-[#4cc3a5]' />
              <h2 className='text-xl font-semibold'>
                Rechtsgrundlagen & Widerruf
              </h2>
            </div>
            <p className='text-gray-300'>
              Für Analyse- und Marketing-Cookies stützen wir uns auf deine{' '}
              <strong>Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)</strong>. Du
              kannst diese Einwilligung jederzeit mit Wirkung für die Zukunft
              widerrufen.
            </p>
            <p className='mt-3 text-gray-300'>
              Details findest du in unserer{' '}
              <a
                href='/datenschutz'
                className='text-[var(--brand-mint)] hover:underline'
              >
                Datenschutzerklärung
              </a>
              .
            </p>
          </article>

          {/* Status + Action */}
          <article className='md:col-span-2 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent p-6 md:p-8'>
            <div className='flex items-center gap-3 mb-3'>
              <Cookie className='h-5 w-5 text-[#61dafb]' />
              <h2 className='text-xl font-semibold'>
                Deine Cookie-Einstellungen
              </h2>
            </div>
            <p className='text-gray-300'>
              Du kannst deine Auswahl hier prüfen und anpassen. Änderungen
              werden sofort übernommen.
            </p>

            <div className='mt-5'>
              {/* Öffnet deinen Consent-Dialog */}
              <OpenPreferencesButton />
            </div>

            <div className='mt-6 text-sm text-gray-400'>
              Tipp: Falls der Button nicht reagiert, lade die Seite neu. Einige
              Browser-Erweiterungen können Consent-Dialoge blockieren.
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
