'use client';

import React from 'react';
import { useConsent } from './ConsentProvider';

export default function ManageCookiesButton({
  className = 'text-gray-400 hover:text-[var(--brand-mint)] transition-colors duration-200',
}: {
  className?: string;
}) {
  const { openPreferences } = useConsent();
  return (
    <button onClick={openPreferences} className={className}>
      COOKIE-EINSTELLUNGEN
    </button>
  );
}
