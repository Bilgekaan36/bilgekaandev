import { GradientText } from '@/components/ui/gradient-text';

export default function Datenschutz() {
  return (
    <main className='max-w-5xl mx-auto px-6 py-16 text-white'>
      <h1 className='font-orbitron text-4xl md:text-5xl font-bold mb-8'>
        <GradientText text='Datenschutzerklärung' />
      </h1>

      <div className='space-y-6 text-gray-300 leading-relaxed'>
        <p>
          Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und
          Zweck der Verarbeitung personenbezogener Daten innerhalb unseres
          Onlineangebotes auf.
        </p>

        <h2 className='text-xl font-semibold mt-8 mb-2'>Verantwortlicher</h2>
        <p>
          Bilgekaan Yilmaz
          <br />
          Musterstraße 12
          <br />
          74072 Heilbronn
          <br />
          E-Mail:{' '}
          <a
            href='mailto:bilgekaan-yilmaz@outlook.com'
            className='text-[var(--brand-mint)] hover:underline'
          >
            bilgekaan-yilmaz@outlook.com
          </a>
        </p>

        <h2 className='text-xl font-semibold mt-8 mb-2'>Erhobene Daten</h2>
        <ul className='list-disc list-inside space-y-1'>
          <li>Server-Logfiles (IP-Adresse, Browser, Zugriffszeit)</li>
          <li>Kontaktformular-Daten (Name, E-Mail, Nachricht)</li>
          <li>
            Analyse-Daten (z. B. via Plausible oder Google Analytics – falls
            genutzt)
          </li>
        </ul>

        <h2 className='text-xl font-semibold mt-8 mb-2'>Ihre Rechte</h2>
        <p>
          Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung,
          Einschränkung der Verarbeitung, Widerspruch gegen Verarbeitung sowie
          Datenübertragbarkeit (Art. 15–20 DSGVO).
        </p>

        <section id='linkedin-insight-tag'>
          <h3>LinkedIn Insight Tag</h3>

          <p>
            Wir nutzen auf unserer Website den{' '}
            <strong>LinkedIn Insight Tag</strong> der LinkedIn Ireland Unlimited
            Company, Wilton Place, Dublin 2, Irland.
          </p>

          <p>
            <strong>Zweck:</strong>
            <br />
            Das LinkedIn Insight Tag ermöglicht uns, den Erfolg unserer
            LinkedIn-Werbekampagnen zu messen, Zielgruppen für Anzeigen zu
            erstellen und unsere Marketingmaßnahmen zu optimieren.
          </p>

          <p>
            <strong>Erfasste Daten:</strong>
            <br />
            Hierzu werden u. a. die URL, Referrer-URL, IP-Adresse (gekürzt oder
            gehasht), Geräte- und Browserinformationen sowie Zeitstempel
            erfasst.
          </p>

          <p>
            <strong>Rechtsgrundlage:</strong>
            <br />
            Die Verarbeitung erfolgt auf Grundlage Ihrer{' '}
            <strong>Einwilligung</strong> nach Art. 6 Abs. 1 lit. a DSGVO. Ohne
            Ihre Zustimmung wird das Tool nicht geladen.
          </p>

          <p>
            <strong>Widerruf:</strong>
            <br />
            Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft
            über die
            <a href='/cookies'>Cookie-Einstellungen</a> widerrufen.
          </p>

          <p>
            <strong>Weitere Informationen:</strong>
            <br />
            Datenschutzerklärung von LinkedIn:
            <a
              href='https://www.linkedin.com/legal/privacy-policy'
              target='_blank'
              rel='noopener noreferrer'
            >
              https://www.linkedin.com/legal/privacy-policy
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
