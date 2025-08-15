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
import {
  ConsentProvider,
  useConsent,
} from '@/components/cookie-consent/ConsentProvider';
// import LinkedInInsight from '@/components/cookie-consent/LinkedInInsight';

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

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
// const DOMAIN = process.env.NEXT_PUBLIC_SITE_DOMAIN ?? 'localhost';

function GAConsentSync() {
  // Sobald der Nutzer Analytics erlaubt, Consent-Flags auf "granted" setzen.
  const { consent } = useConsent(); // { analytics?: boolean, marketing?: boolean, ... }

  return (
    <>
      {/* Default: alles denied (vor dem Laden von GA) */}
      <Script id='ga-consent-default' strategy='beforeInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'analytics_storage': 'denied',
            'functionality_storage': 'denied',
            'personalization_storage': 'denied',
            'security_storage': 'granted'
          });
        `}
      </Script>

      {/* Wenn der Nutzer Analytics erlaubt hat → auf granted schalten */}
      {consent.analytics && (
        <Script id='ga-consent-grant' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'update', {
              'analytics_storage': 'granted'
            });
          `}
        </Script>
      )}
    </>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='de'>
      <body
        className={`${inter.variable} ${orbitron.variable} font-sans antialiased relative`}
      >
        <ConsentProvider>
          {/* Consent Mode Sync */}
          <GAConsentSync />

          {/* --- Google Analytics (GA4) NUR bei Analytics-Consent --- */}
          <ScriptGate allow='analytics'>
            {GA_ID && (
              <>
                <Script
                  id='ga4'
                  strategy='afterInteractive'
                  src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                />
                <Script id='ga4-init' strategy='afterInteractive'>
                  {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_ID}', {
                      anonymize_ip: true,
                      send_page_view: true
                    });
                  `}
                </Script>
              </>
            )}
          </ScriptGate>

          {/* --- LinkedIn Insight Tag NUR bei Marketing-Consent --- */}
          {/* <ScriptGate allow='marketing'>
            <LinkedInInsight
              pid={process.env.NEXT_PUBLIC_LINKEDIN_PID}
              domain={DOMAIN}
            />
          </ScriptGate> */}

          {/* Seite */}
          <Navbar />
          <ParallaxProvider>{children}</ParallaxProvider>
          <Footer />

          {/* Cookie UI */}
          <CookieBanner />
          <PreferencesDialog />
        </ConsentProvider>
      </body>
    </html>
  );
}
