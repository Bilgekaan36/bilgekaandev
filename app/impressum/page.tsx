import { GradientText } from '@/components/ui/gradient-text';
import { MapPin, Phone, Mail, Shield, FileText, Globe } from 'lucide-react';
import type { Metadata } from 'next';
import React from 'react';

// Optional: App Router SEO (kannst du lassen, wenn du globales SEO nutzt)
export const metadata: Metadata = {
  title: 'Impressum – Bilgekaan Yilmaz',
  description:
    'Impressum von Bilgekaan Yilmaz – Fullstack React/Next.js Entwickler im DACH-Raum.',
};

export default function Impressum() {
  const address = {
    name: 'Bilgekaan Yilmaz',
    street: 'Herbert-Hoover-Straße 19',
    zip: '74074',
    city: 'Heilbronn',
    country: 'Deutschland',
  };

  const phone = '+49 176 80423919';
  const email = 'info@bilgekaan.dev';

  return (
    <main className='bg-gray-900 text-white'>
      {/* Hero */}
      <section className='relative'>
        <div className='max-w-7xl mx-auto px-6 pt-24 pb-8'>
          <h1 className='font-orbitron text-4xl md:text-5xl font-bold leading-tight'>
            <GradientText text='Impressum' />
          </h1>
          <p className='mt-4 text-gray-400 max-w-2xl'>
            Rechtliche Angaben gemäß § 5 TMG und § 55 RStV.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className='max-w-7xl mx-auto px-6 pb-20'>
        <div className='grid gap-6 md:gap-8 md:grid-cols-2'>
          {/* Betreiber */}
          <article className='rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent p-6 md:p-8'>
            <div className='flex items-center gap-3 mb-4'>
              <FileText className='h-5 w-5 text-[#4cc3a5]' />
              <h2 className='text-xl font-semibold'>Diensteanbieter</h2>
            </div>

            <address
              className='not-italic space-y-2 text-gray-300'
              itemScope
              itemType='https://schema.org/Person'
            >
              <p className='text-white font-medium' itemProp='name'>
                {address.name}
              </p>

              <div className='flex items-start gap-3'>
                <MapPin className='mt-1 h-4 w-4 text-gray-400' />
                <p
                  itemProp='address'
                  itemScope
                  itemType='https://schema.org/PostalAddress'
                >
                  <span itemProp='streetAddress'>{address.street}</span>
                  <br />
                  <span itemProp='postalCode'>{address.zip}</span>{' '}
                  <span itemProp='addressLocality'>{address.city}</span>
                  <br />
                  <span itemProp='addressCountry'>{address.country}</span>
                </p>
              </div>

              <div className='flex items-center gap-3'>
                <Phone className='h-4 w-4 text-gray-400' />
                <a
                  href={`tel:${phone.replace(/\s+/g, '')}`}
                  className='text-[var(--brand-mint)] hover:underline'
                  itemProp='telephone'
                >
                  {phone}
                </a>
              </div>

              <div className='flex items-center gap-3'>
                <Mail className='h-4 w-4 text-gray-400' />
                <a
                  href={`mailto:${email}`}
                  className='text-[var(--brand-mint)] hover:underline'
                  itemProp='email'
                >
                  {email}
                </a>
              </div>
            </address>
          </article>

          {/* Verantwortlicher */}
          <article className='rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent p-6 md:p-8'>
            <div className='flex items-center gap-3 mb-4'>
              <Shield className='h-5 w-5 text-[#61dafb]' />
              <h2 className='text-xl font-semibold'>
                Verantwortlich i.S.d. § 55 Abs. 2 RStV
              </h2>
            </div>

            <p className='text-gray-300'>{address.name}, Anschrift wie oben.</p>

            <div className='mt-6 space-y-2 text-gray-400 text-sm'>
              {/* <p>
                <span className='text-gray-500'>Umsatzsteuer-ID:</span>{' '}
                DE123456789
              </p> */}
              <p className='flex items-center gap-2'>
                <Globe className='h-4 w-4' />
                <span>Geltungsbereich: Deutschland / EU</span>
              </p>
            </div>
          </article>

          {/* Haftung / Links */}
          <article className='rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent p-6 md:p-8 md:col-span-2'>
            <h2 className='text-xl font-semibold mb-3'>
              Haftung für Inhalte & Links
            </h2>
            <div className='prose prose-invert max-w-none text-gray-300'>
              <p>
                Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt.
                Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
                kann ich jedoch keine Gewähr übernehmen. Als Diensteanbieter bin
                ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
                nach den allgemeinen Gesetzen verantwortlich.
              </p>
              <p>
                Diese Website enthält Links zu externen Websites Dritter, auf
                deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich.
              </p>
            </div>
          </article>

          {/* Urheberrecht */}
          <article className='rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent p-6 md:p-8 md:col-span-2'>
            <h2 className='text-xl font-semibold mb-3'>Urheberrecht</h2>
            <p className='text-gray-300'>
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge
              Dritter sind als solche gekennzeichnet. Die Vervielfältigung,
              Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung
              des jeweiligen Autors bzw. Erstellers.
            </p>
          </article>

          {/* Online-Streitbeilegung (Optional für B2C) */}
          <article className='rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent p-6 md:p-8 md:col-span-2'>
            <h2 className='text-xl font-semibold mb-3'>
              EU-Streitschlichtung / Verbraucher­streitbeilegung
            </h2>
            <p className='text-gray-300'>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{' '}
              <a
                href='https://ec.europa.eu/consumers/odr'
                target='_blank'
                rel='noopener noreferrer'
                className='text-[var(--brand-mint)] hover:underline'
              >
                https://ec.europa.eu/consumers/odr
              </a>
              . Ich bin nicht verpflichtet und grundsätzlich nicht bereit, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </article>
        </div>
      </section>

      {/* JSON-LD (strukturierte Daten für Impressum/Kontakt) */}
      <script
        type='application/ld+json'
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: address.name,
            url: 'https://www.bilgekaan.dev',
            address: {
              '@type': 'PostalAddress',
              streetAddress: address.street,
              postalCode: address.zip,
              addressLocality: address.city,
              addressCountry: 'DE',
            },
            email: `mailto:${email}`,
            telephone: phone,
          }),
        }}
      />
    </main>
  );
}
