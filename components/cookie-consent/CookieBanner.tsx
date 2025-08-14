'use client';

import React from 'react';
import { useConsent } from './ConsentProvider';

export default function CookieBanner() {
  const { ready, consent, acceptAll, rejectAll, openPreferences } =
    useConsent();

  // Banner nur zeigen, wenn noch keine explizite Entscheidung (analytics/marketing) getroffen wurde
  const show =
    ready &&
    consent.analytics === false &&
    consent.marketing === false &&
    // Unterscheidung: Wenn User schon mal "Alles akzeptieren" gewählt hat, sind beide true.
    // Wenn User "Einstellungen speichern" genutzt hat, können true/false gemischt sein – dann Banner weg.
    // Hier: Banner bleibt sichtbar solange nie gespeichert/angepasst wurde (default false/false).
    true;

  if (!show) return null;

  return (
    <div className='fixed inset-x-0 bottom-0 z-[60]'>
      <div className='mx-auto max-w-5xl rounded-t-2xl border border-white/10 bg-gray-900/95 backdrop-blur px-6 py-5 shadow-2xl'>
        <div className='flex flex-col md:flex-row md:items-center md:gap-6'>
          <p className='text-gray-200 text-sm leading-6 flex-1'>
            Wir verwenden Cookies, um unsere Website zu verbessern.
            <span className='hidden sm:inline'>
              {' '}
              Notwendige Cookies sind immer aktiv, Analytics/Marketing nur mit
              deiner Zustimmung.
            </span>
          </p>
          <div className='mt-4 md:mt-0 flex items-center gap-3'>
            <button
              onClick={openPreferences}
              className='rounded-full border border-white/15 px-4 py-2 text-sm text-gray-100 hover:bg-white/5'
            >
              Einstellungen
            </button>
            <button
              onClick={rejectAll}
              className='rounded-full border border-white/15 px-4 py-2 text-sm text-gray-300 hover:bg-white/5'
            >
              Ablehnen
            </button>
            <button
              onClick={acceptAll}
              className='rounded-full px-4 py-2 text-sm font-semibold text-gray-900 bg-gradient-to-r from-[#61dafb] via-[#4cc3a5] to-[#41b883] hover:opacity-95'
            >
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
