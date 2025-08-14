'use client';

import React from 'react';
import Script from 'next/script';

const partnerId = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID ?? '';

/**
 * Lädt das LinkedIn Insight Tag (Marketing) – wird von ScriptGate gated.
 * Quelle: https://www.linkedin.com/help/lms/answer/a427660
 */
export default function LinkedInInsight() {
  if (!partnerId) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('[LinkedInInsight] NEXT_PUBLIC_LINKEDIN_PARTNER_ID fehlt.');
    }
  }

  return (
    <>
      {/* Init: Partner-ID registrieren */}
      <Script id='li-insight-init' strategy='afterInteractive'>
        {`
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push("${partnerId}");
        `}
      </Script>

      {/* Loader */}
      <Script id='li-insight-loader' strategy='afterInteractive'>
        {`
          (function(l){if(!l){window.lintrk=function(a,b){window.lintrk.q.push([a,b])};window.lintrk.q=[]}
            var s=document.getElementsByTagName("script")[0];
            var b=document.createElement("script");
            b.type="text/javascript";b.async=true;b.src="https://snap.licdn.com/li.lms-analytics/insight.min.js";
            s.parentNode.insertBefore(b,s);
          })(window.lintrk);
        `}
      </Script>

      {/* Noscript Pixel (wird bei deaktiviertem JS von React zwar nicht ausgeführt,
          ist aber Best Practice, falls der HTML-Output gecached/serviert wird) */}
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height='1'
          width='1'
          style={{ display: 'none' }}
          alt=''
          src={`https://px.ads.linkedin.com/collect/?pid=${partnerId}&fmt=gif`}
        />
      </noscript>
    </>
  );
}
