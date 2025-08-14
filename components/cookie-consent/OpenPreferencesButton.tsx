'use client';

import { useConsent } from './ConsentProvider';



export function OpenPreferencesButton() {
  const { openPreferences } = useConsent();
  return (
    <button
      onClick={openPreferences}
      className='mt-4 rounded-full px-4 py-2 text-sm font-semibold text-gray-900 bg-gradient-to-r from-[#61dafb] via-[#4cc3a5] to-[#41b883] hover:opacity-95'
    >
      Cookie-Einstellungen öffnen
    </button>
  );
}
