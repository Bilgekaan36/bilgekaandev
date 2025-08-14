'use client';

import React from 'react';
import { X } from 'lucide-react';
import { useConsent } from './ConsentProvider';

export default function PreferencesDialog() {
  const { preferencesOpen, closePreferences, consent, setConsent, rejectAll } =
    useConsent();
  const [local, setLocal] = React.useState(consent);

  React.useEffect(() => {
    if (preferencesOpen) setLocal(consent);
  }, [preferencesOpen, consent]);

  const onSave = () => {
    setConsent({ ...local, necessary: true });
    closePreferences();
  };

  if (!preferencesOpen) return null;

  return (
    <div className='fixed inset-0 z-[70] flex items-center justify-center'>
      {/* Backdrop */}
      <div
        className='absolute inset-0 bg-black/60 backdrop-blur-sm'
        onClick={closePreferences}
      />
      {/* Dialog */}
      <div className='relative mx-4 w-full max-w-2xl rounded-2xl border border-white/10 bg-gray-900 p-6 shadow-2xl'>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-white text-xl font-semibold'>
            Cookie-Einstellungen
          </h2>
          <button
            aria-label='Schließen'
            onClick={closePreferences}
            className='rounded p-2 hover:bg-white/5'
          >
            <X className='w-5 h-5 text-gray-300' />
          </button>
        </div>

        <p className='text-gray-300 text-sm mb-6'>
          Wähle, welche Kategorien du zulassen möchtest. Du kannst deine Auswahl
          jederzeit ändern.
        </p>

        <div className='space-y-5'>
          {/* Necessary */}
          <div className='rounded-xl border border-white/10 p-4'>
            <div className='flex items-start justify-between gap-4'>
              <div>
                <h3 className='text-white font-medium'>Notwendige Cookies</h3>
                <p className='text-gray-400 text-sm'>
                  Für den technischen Betrieb der Website erforderlich. Immer
                  aktiv.
                </p>
              </div>
              <div className='px-3 py-1 text-xs rounded-full bg-white/5 text-gray-400'>
                Aktiv
              </div>
            </div>
          </div>

          {/* Analytics */}
          <div className='rounded-xl border border-white/10 p-4'>
            <div className='flex items-start justify-between gap-4'>
              <div>
                <h3 className='text-white font-medium'>Analytics</h3>
                <p className='text-gray-400 text-sm'>
                  Anonyme Nutzungsstatistiken zur Verbesserung der Website.
                </p>
              </div>
              <label className='inline-flex items-center gap-2 cursor-pointer'>
                <input
                  type='checkbox'
                  className='h-4 w-4 accent-[#4cc3a5]'
                  checked={local.analytics}
                  onChange={(e) =>
                    setLocal((s) => ({ ...s, analytics: e.target.checked }))
                  }
                />
                <span className='text-sm text-gray-300'>Zulassen</span>
              </label>
            </div>
          </div>

          {/* Marketing */}
          <div className='rounded-xl border border-white/10 p-4'>
            <div className='flex items-start justify-between gap-4'>
              <div>
                <h3 className='text-white font-medium'>Marketing</h3>
                <p className='text-gray-400 text-sm'>
                  Personalisierte Inhalte/Ads (z. B. LinkedIn Insight Tag).
                </p>
              </div>
              <label className='inline-flex items-center gap-2 cursor-pointer'>
                <input
                  type='checkbox'
                  className='h-4 w-4 accent-[#4cc3a5]'
                  checked={local.marketing}
                  onChange={(e) =>
                    setLocal((s) => ({ ...s, marketing: e.target.checked }))
                  }
                />
                <span className='text-sm text-gray-300'>Zulassen</span>
              </label>
            </div>
          </div>
        </div>

        <div className='mt-6 flex flex-wrap justify-end gap-3'>
          <button
            onClick={rejectAll}
            className='rounded-full border border-white/15 px-4 py-2 text-sm text-gray-300 hover:bg-white/5'
          >
            Alle ablehnen
          </button>
          <button
            onClick={onSave}
            className='rounded-full px-4 py-2 text-sm font-semibold text-gray-900 bg-gradient-to-r from-[#61dafb] via-[#4cc3a5] to-[#41b883] hover:opacity-95'
          >
            Einstellungen speichern
          </button>
        </div>
      </div>
    </div>
  );
}
