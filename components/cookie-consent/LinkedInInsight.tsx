'use client';

import Script from 'next/script';

type Props = {
  /** LinkedIn Partner ID, z.B. "1234567" */
  pid?: string;
  /** Deine Domain für den noscript-Fallback (optional) */
  domain?: string;
};

/**
 * Lädt das LinkedIn Insight Tag inkl. noscript-Pixel.
 * Nur rendern, wenn Consent "marketing" erteilt ist (über ScriptGate).
 */
export default function LinkedInInsight({ pid }: Props) {
  if (!pid) return null;

  return (
    <>
      <Script id='linkedin-insight' strategy='afterInteractive'>
        {`
          (function(){
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(${JSON.stringify(pid)});
          })();
        `}
      </Script>
      <Script
        id='linkedin-insight-loader'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            (function(l) {
              if (window.lintrk) return;
              window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
              window.lintrk.q=[];
              var s = document.createElement("script");
              s.type = "text/javascript"; s.async = true; s.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              var x = document.getElementsByTagName("script")[0];
              x.parentNode.insertBefore(s, x);
            })(window);
          `,
        }}
      />
      {/* noscript Fallback */}
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height='1'
          width='1'
          style={{ display: 'none' }}
          alt='LinkedInInsight Logo'
          src={`https://px.ads.linkedin.com/collect/?pid=${encodeURIComponent(
            pid
          )}&fmt=gif`}
        />
      </noscript>
    </>
  );
}
