import { GradientText } from '@/components/ui/gradient-text';

export default function Cookies() {
  return (
    <main className='max-w-5xl mx-auto px-6 py-16 text-white'>
      <h1 className='font-orbitron text-4xl md:text-5xl font-bold mb-8'>
        <GradientText text='Cookies' />
      </h1>

      <div className='space-y-6 text-gray-300 leading-relaxed'>
        <p>
          Diese Website verwendet Cookies, um die Benutzererfahrung zu
          verbessern. Cookies sind kleine Textdateien, die auf Ihrem Gerät
          gespeichert werden.
        </p>

        <h2 className='text-xl font-semibold mt-8 mb-2'>Arten von Cookies</h2>
        <ul className='list-disc list-inside space-y-1'>
          <li>
            <strong>Notwendige Cookies:</strong> Für den Betrieb der Website
            erforderlich.
          </li>
          <li>
            <strong>Analyse-Cookies:</strong> Helfen uns, die Website zu
            verbessern.
          </li>
          <li>
            <strong>Marketing-Cookies:</strong> Dienen zur Personalisierung von
            Werbung (nur mit Zustimmung).
          </li>
        </ul>

        <h2 className='text-xl font-semibold mt-8 mb-2'>
          Cookie-Einstellungen
        </h2>
        <p>
          Sie können Ihre Cookie-Einstellungen jederzeit über den entsprechenden
          Button im Footer ändern.
        </p>
      </div>
    </main>
  );
}
