'use client';

import React from 'react';
import { useConsent } from './ConsentProvider';

type Props = {
  allow: 'analytics' | 'marketing';
  children: React.ReactNode;
};

// Rendert Children nur, wenn die passende Kategorie erlaubt ist
export default function ScriptGate({ allow, children }: Props) {
  const { ready, consent } = useConsent();
  if (!ready) return null;
  if (!consent[allow]) return null;
  return <>{children}</>;
}
