'use client';
import { Inter, Orbitron } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Footer } from '@/components/layout/Footer';
import CookieBanner from '@/components/cookie-consent/CookieBanner';
import PreferencesDialog from '@/components/cookie-consent/PreferencesDialog';
import ScriptGate from '@/components/cookie-consent/ScriptGate';
import Script from 'next/script';
import { ConsentProvider } from '@/components/cookie-consent/ConsentProvider';
import LinkedInInsight from '@/components/cookie-consent/LinkedInInsight';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const orbitron = Orbitron({
  variable: '--font-orbitron',
  subsets: ['latin'],
  weight: ['400', '700', '800', '900'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} ${orbitron.variable} font-sans antialiased relative`}
      >
        <ConsentProvider>
          {/* Beispiel: Analytics NUR bei Consent (Plausible ODER GA einfügen) */}
          {/* --- Plausible --- */}
          <ScriptGate allow='analytics'>
            <Script
              strategy='afterInteractive'
              data-domain='bilgekaan.dev'
              src='https://plausible.io/js/script.js'
            />
          </ScriptGate>

          {/* Marketing: LinkedIn Insight Tag */}
          <ScriptGate allow='marketing'>
            <LinkedInInsight />
          </ScriptGate>

          {/* --- Google Analytics (GA4) --- */}
          <ScriptGate allow='analytics'>
            <Script
              id='ga4'
              strategy='afterInteractive'
              src='https://www.googletagmanager.com/gtag/js?id=G-S53WX76T74'
            />
            <Script id='ga4-init' strategy='afterInteractive'>
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-S53WX76T74', { anonymize_ip: true });
              `}
            </Script>
          </ScriptGate>
          <Navbar />
          <ParallaxProvider>{children}</ParallaxProvider>
          <Footer />
          {/* Banner + Dialog */}
          <CookieBanner />
          <PreferencesDialog />
        </ConsentProvider>
      </body>
    </html>
  );
}
