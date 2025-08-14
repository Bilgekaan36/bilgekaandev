'use client';

import React from 'react';

type Categories = 'necessary' | 'analytics' | 'marketing';

export type ConsentState = Record<Categories, boolean>;

type ConsentContextType = {
  ready: boolean; // erst nach Hydration true
  consent: ConsentState;
  setConsent: (next: ConsentState) => void;
  acceptAll: () => void;
  rejectAll: () => void;
  openPreferences: () => void;
  closePreferences: () => void;
  preferencesOpen: boolean;
};

const defaultConsent: ConsentState = {
  necessary: true,
  analytics: false,
  marketing: false,
};

const CONSENT_COOKIE = 'cookie_consent';
const CONSENT_VERSION = 1; // wenn du Texte/Kategorien änderst -> hochzählen
const CONSENT_MAX_AGE = 60 * 60 * 24 * 365; // 1 Jahr

function getCookie(name: string) {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

function setCookie(name: string, value: string, maxAge = CONSENT_MAX_AGE) {
  if (typeof document === 'undefined') return;
  document.cookie = `${name}=${encodeURIComponent(
    value
  )}; Max-Age=${maxAge}; Path=/; SameSite=Lax; Secure`;
}

function readStoredConsent(): {
  version: number;
  consent: ConsentState;
} | null {
  try {
    const raw = getCookie(CONSENT_COOKIE);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (
      typeof parsed === 'object' &&
      typeof parsed.version === 'number' &&
      typeof parsed.consent === 'object'
    ) {
      return parsed;
    }
  } catch {}
  return null;
}

function writeStoredConsent(consent: ConsentState) {
  setCookie(
    CONSENT_COOKIE,
    JSON.stringify({ version: CONSENT_VERSION, consent })
  );
}

export const ConsentContext = React.createContext<ConsentContextType | null>(
  null
);

export function useConsent() {
  const ctx = React.useContext(ConsentContext);
  if (!ctx) throw new Error('useConsent must be used within <ConsentProvider>');
  return ctx;
}

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = React.useState(false);
  const [preferencesOpen, setPreferencesOpen] = React.useState(false);
  const [consent, _setConsent] = React.useState<ConsentState>(defaultConsent);

  // Initial laden (Client)
  React.useEffect(() => {
    const stored = readStoredConsent();
    if (stored && stored.version === CONSENT_VERSION) {
      _setConsent(stored.consent);
    } else {
      // falls Version geändert -> neu einholen (Standard = nur necessary)
      _setConsent(defaultConsent);
    }
    setReady(true);
  }, []);

  const setConsent = React.useCallback((next: ConsentState) => {
    _setConsent(next);
    writeStoredConsent(next);
  }, []);

  const acceptAll = React.useCallback(() => {
    const next: ConsentState = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setConsent(next);
    setPreferencesOpen(false);
  }, [setConsent]);

  const rejectAll = React.useCallback(() => {
    const next: ConsentState = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    setConsent(next);
    setPreferencesOpen(false);
  }, [setConsent]);

  const openPreferences = React.useCallback(() => setPreferencesOpen(true), []);
  const closePreferences = React.useCallback(
    () => setPreferencesOpen(false),
    []
  );

  const value: ConsentContextType = {
    ready,
    consent,
    setConsent,
    acceptAll,
    rejectAll,
    openPreferences,
    closePreferences,
    preferencesOpen,
  };

  return (
    <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>
  );
}
