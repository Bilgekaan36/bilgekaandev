'use client';
import * as React from 'react';
import { useConsent } from '@/components/cookie-consent/ConsentProvider';

type Win = typeof window & { lintrk?: (ev: string, data: unknown) => void };

export function useLintrk() {
  const { ready, consent } = useConsent();

  return React.useCallback(
    (conversionId: number | string) => {
      if (!ready || !consent.marketing) return;
      const w = window as Win;
      if (typeof w.lintrk === 'function') {
        w.lintrk('track', { conversion_id: conversionId });
      }
    },
    [ready, consent]
  );
}
