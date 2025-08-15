import { GradientText } from '@/components/ui/gradient-text';
import {
  Shield,
  UserCircle2,
  Database,
  Cookie,
  BarChart2,
  Share2,
  Mail,
  Server,
  Globe,
} from 'lucide-react';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung – Bilgekaan Yilmaz',
  description:
    'Datenschutz-Informationen für die Website von Bilgekaan Yilmaz – Fullstack React/Next.js Entwickler.',
};

export default function Datenschutz() {
  // zentral gepflegte Kontaktdaten
  const controller = {
    name: 'Bilgekaan Yilmaz',
    street: 'Herbert-Hoover-Straße 19',
    zip: '74074',
    city: 'Heilbronn',
    country: 'Deutschland',
    email: 'info@bilgekaan.dev',
  };

  return (
    <main className='bg-gray-900 text-white'>
      {/* Hero */}
      <section className='relative'>
        <div className='max-w-7xl mx-auto px-6 pt-24 pb-8'>
          <h1 className='font-orbitron text-4xl md:text-5xl font-bold leading-tight'>
            <GradientText
              className='inline break-words'
              text='Datenschutzerklärung'
            />
          </h1>
          <p className='mt-4 text-gray-400 max-w-2xl'>
            Diese Erklärung informiert über Art, Umfang und Zwecke der
            Verarbeitung personenbezogener Daten auf dieser Website gemäß DSGVO.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className='max-w-7xl mx-auto px-6 pb-20'>
        <div className='grid gap-6 md:gap-8 md:grid-cols-2'>
          {/* Verantwortlicher */}
          <article className='rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent p-6 md:p-8'>
            <div className='flex items-center gap-3 mb-4'>
              <UserCircle2 className='h-5 w-5 text-[#4cc3a5]' />
              <h2 className='text-xl font-semibold'>Verantwortlicher</h2>
            </div>
            <div className='text-gray-300 space-y-2'>
              <p className='text-white font-medium'>{controller.name}</p>
              <p>
                {controller.street}
                <br />
                {controller.zip} {controller.city}
                <br />
                {controller.country}
              </p>
              <p className='flex items-center gap-2'>
                <Mail className='h-4 w-4 text-gray-400' />
                <a
                  href={`mailto:${controller.email}`}
                  className='text-[var(--brand-mint)] hover:underline'
                >
                  {controller.email}
                </a>
              </p>
            </div>
          </article>

          {/* Grundsätze */}
          <article className='rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent p-6 md:p-8'>
            <div className='flex items-center gap-3 mb-4'>
              <Shield className='h-5 w-5 text-[#61dafb]' />
              <h2 className='text-xl font-semibold'>
                Grundsätze der Verarbeitung
              </h2>
            </div>
            <div className='text-gray-300 space-y-3'>
              <p>
                Rechtsgrundlagen je nach Zweck:{' '}
                <strong>Art. 6 Abs. 1 lit. a</strong> (Einwilligung),{' '}
                <strong>lit. b</strong> (Vertrag/Anbahnung),{' '}
                <strong>lit. f</strong> (berechtigtes Interesse).
              </p>
              <p>
                Personenbezogene Daten werden nur so lange gespeichert, wie es
                zur Erfüllung der jeweiligen Zwecke erforderlich ist oder
                gesetzliche Aufbewahrungspflichten bestehen.
              </p>
            </div>
          </article>

          {/* Hosting / Server-Logs */}
          <article className='rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent p-6 md:p-8 md:col-span-2'>
            <div className='flex items-center gap-3 mb-4'>
              <Server className='h-5 w-5 text-[#41b883]' />
              <h2 className='text-xl font-semibold'>
                Hosting & Server-Logfiles
              </h2>
            </div>
            <div className='prose prose-invert max-w-none text-gray-300'>
              <p>
                Beim Aufruf der Seiten werden durch den Server automatisch
                Log-Daten verarbeitet (z. B. IP-Adresse, Datum/Uhrzeit,
                angeforderte Ressource, Referrer, User-Agent).
              </p>
              <p>
                Zweck: Betrieb, Sicherheit und Fehleranalyse der Website (
                <strong>Art. 6 Abs. 1 lit. f DSGVO</strong>). IP-Adressen werden
                gekürzt bzw. nur für die Dauer der Sitzung/kurzfristig
                gespeichert, sofern technisch nötig.
              </p>
            </div>
          </article>

          {/* Kontakt */}
          <article className='rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent p-6 md:p-8'>
            <div className='flex items-center gap-3 mb-4'>
              <Mail className='h-5 w-5 text-[#4cc3a5]' />
              <h2 className='text-xl font-semibold'>Kontaktaufnahme</h2>
            </div>
            <p className='text-gray-300'>
              Bei Kontakt per E-Mail werden die Angaben zur Bearbeitung der
              Anfrage verarbeitet (<strong>Art. 6 Abs. 1 lit. b/f DSGVO</strong>
              ). Daten werden gelöscht, wenn das Anliegen erledigt ist und keine
              gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>
          </article>

          {/* Cookies / Consent */}
          <article className='rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent p-6 md:p-8'>
            <div className='flex items-center gap-3 mb-4'>
              <Cookie className='h-5 w-5 text-[#61dafb]' />
              <h2 className='text-xl font-semibold'>
                Cookies & Einwilligungen
              </h2>
            </div>
            <div className='text-gray-300 space-y-3'>
              <p>
                Nicht technisch notwendige Dienste (z. B. Analytics/Marketing)
                werden erst nach Ihrer Einwilligung geladen (
                <strong>Art. 6 Abs. 1 lit. a DSGVO</strong>).
              </p>
              <p>
                Sie können Ihre Auswahl jederzeit in den{' '}
                <a
                  href='/cookies'
                  className='text-[var(--brand-mint)] hover:underline'
                >
                  Cookie-Einstellungen
                </a>{' '}
                ändern/widerrufen.
              </p>
            </div>
          </article>

          {/* Google Analytics */}
          <article
            className='rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent p-6 md:p-8 md:col-span-2'
            id='google-analytics'
          >
            <div className='flex items-center gap-3 mb-4'>
              <BarChart2 className='h-5 w-5 text-[#4cc3a5]' />
              <h2 className='text-xl font-semibold'>Google Analytics</h2>
            </div>
            <div className='prose prose-invert max-w-none text-gray-300'>
              <p>
                Anbieter: Google Ireland Limited, Gordon House, Barrow Street,
                Dublin 4, Irland. Wir setzen Google Analytics zur
                Reichweitenmessung und Verbesserung unseres Angebots ein.
              </p>
              <p>
                <strong>Erfasste Daten:</strong> Seitenaufrufe, Interaktionen,
                Referrer, ungefähre Geolokation, Geräte-/Browser-Infos, ggf.
                gekürzte IP.
              </p>
              <p>
                <strong>Rechtsgrundlage:</strong> Einwilligung (Art. 6 Abs. 1
                lit. a DSGVO). Ohne Einwilligung wird Analytics nicht geladen.
              </p>
              <p>
                <strong>Widerruf:</strong> jederzeit in den{' '}
                <a
                  href='/cookies'
                  className='text-[var(--brand-mint)] hover:underline'
                >
                  Cookie-Einstellungen
                </a>
                .
              </p>
              <p>
                Weitere Infos:{' '}
                <a
                  href='https://policies.google.com/privacy'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-[var(--brand-mint)] hover:underline'
                >
                  https://policies.google.com/privacy
                </a>
              </p>
            </div>
          </article>

          {/* LinkedIn Insight Tag */}
          <article
            className='rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent p-6 md:p-8 md:col-span-2'
            id='linkedin-insight-tag'
          >
            <div className='flex items-center gap-3 mb-4'>
              <Share2 className='h-5 w-5 text-[#61dafb]' />
              <h2 className='text-xl font-semibold'>LinkedIn Insight Tag</h2>
            </div>
            <div className='prose prose-invert max-w-none text-gray-300'>
              <p>
                Anbieter: LinkedIn Ireland Unlimited Company, Wilton Place,
                Dublin 2, Irland.
              </p>
              <p>
                <strong>Zweck:</strong> Conversion-Tracking, Zielgruppenbildung
                (Retargeting) und Kampagnen-Optimierung.
              </p>
              <p>
                <strong>Erfasste Daten:</strong> URL/Referrer, gekürzte/gehashte
                IP, Geräte-/Browser-Infos, Zeitstempel, LinkedIn-Cookie-ID
                (falls eingeloggt).
              </p>
              <p>
                <strong>Rechtsgrundlage:</strong> Einwilligung (Art. 6 Abs. 1
                lit. a DSGVO). Ohne Einwilligung wird das Tag nicht geladen.
              </p>
              <p>
                <strong>Widerruf:</strong> über die{' '}
                <a
                  href='/cookies'
                  className='text-[var(--brand-mint)] hover:underline'
                >
                  Cookie-Einstellungen
                </a>{' '}
                jederzeit möglich.
              </p>
              <p>
                Details:{' '}
                <a
                  href='https://www.linkedin.com/legal/privacy-policy'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-[var(--brand-mint)] hover:underline'
                >
                  https://www.linkedin.com/legal/privacy-policy
                </a>
              </p>
            </div>
          </article>

          {/* Betroffenenrechte */}
          <article className='rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent p-6 md:p-8'>
            <div className='flex items-center gap-3 mb-4'>
              <Database className='h-5 w-5 text-[#41b883]' />
              <h2 className='text-xl font-semibold'>Ihre Rechte</h2>
            </div>
            <ul className='text-gray-300 space-y-2 list-disc list-inside'>
              <li>
                Auskunft, Berichtigung, Löschung, Einschränkung (Art. 15–18
                DSGVO)
              </li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch gegen Verarbeitungen (Art. 21 DSGVO)</li>
              <li>Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
            </ul>
          </article>

          {/* Drittland / Auftragsverarbeiter */}
          <article className='rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent p-6 md:p-8'>
            <div className='flex items-center gap-3 mb-4'>
              <Globe className='h-5 w-5 text-[#4cc3a5]' />
              <h2 className='text-xl font-semibold'>
                Auftragsverarbeitung & Drittland
              </h2>
            </div>
            <div className='text-gray-300 space-y-3'>
              <p>
                Diensteanbieter können als Auftragsverarbeiter eingesetzt werden
                (Art. 28 DSGVO). Soweit Daten in Drittländer (z. B. USA)
                übertragen werden, erfolgt dies auf Basis geeigneter Garantien
                (Standardvertragsklauseln) oder Ihrer Einwilligung.
              </p>
            </div>
          </article>

          {/* Stand */}
          <article className='rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent p-6 md:p-8 md:col-span-2'>
            <p className='text-sm text-gray-400'>
              Stand: {new Date().toLocaleDateString('de-DE')}
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
