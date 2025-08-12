import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline';
import { GradientText } from './ui/gradient-text';

export const NewsletterSection = () => {
  return (
    <div className='relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:max-w-none lg:grid-cols-2'>
          {/* Left: Copy */}
          <div className='max-w-xl lg:max-w-lg'>
            <h2 className='text-4xl font-semibold tracking-tight text-white leading-tight'>
              <span className='block'>Tech-Impulse & Verfügbarkeit in</span>{' '}
              <GradientText text='einem kompakten Update' />
            </h2>

            <p className='mt-4 text-lg text-gray-300'>
              Kurze, praxisnahe Updates für Projektleiter & Recruiting:
              Performance-Tipps, API-Patterns, Release-Hygiene – plus meine
              aktuelle Verfügbarkeit. Max. 1× pro Monat. Kein Sales-Spam.
            </p>

            {/* Form */}
            <form className='mt-6 flex max-w-md gap-x-3'>
              <label htmlFor='email-address' className='sr-only'>
                E-Mail-Adresse
              </label>
              <input
                id='email-address'
                name='email'
                type='email'
                required
                placeholder='E-Mail (geschäftlich bevorzugt)'
                autoComplete='email'
                className='min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-[#61dafb] sm:text-sm/6'
              />
              <button
                type='submit'
                className='flex-none rounded-md bg-gradient-to-r from-[#61dafb] via-[#4cc3a5] to-[#41b883] px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#61dafb]'
              >
                Anmelden
              </button>
            </form>

            {/* Consent / microcopy */}
            <p className='mt-3 text-xs text-gray-400'>
              Double-Opt-In, Abmeldung jederzeit. Keine Weitergabe an Dritte.
            </p>
          </div>

          {/* Right: Value bullets */}
          <dl className='grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2'>
            <div className='flex flex-col items-start'>
              <div className='rounded-md bg-white/5 p-2 ring-1 ring-white/10'>
                <CalendarDaysIcon
                  aria-hidden='true'
                  className='size-6 text-white'
                />
              </div>
              <dt className='mt-4 text-base font-semibold text-white'>
                Monatlich, auf den Punkt
              </dt>
              <dd className='mt-2 text-base/7 text-gray-400'>
                5-Minuten-Read mit konkreten Patterns (React/Next.js, Node.js,
                CI/CD) – sofort anwendbar im Sprint.
              </dd>
            </div>

            <div className='flex flex-col items-start'>
              <div className='rounded-md bg-white/5 p-2 ring-1 ring-white/10'>
                <HandRaisedIcon
                  aria-hidden='true'
                  className='size-6 text-white'
                />
              </div>
              <dt className='mt-4 text-base font-semibold text-white'>
                Keine Flut. Kein Sales.
              </dt>
              <dd className='mt-2 text-base/7 text-gray-400'>
                Max. 1× pro Monat, klare Kommunikation, kein Tracking-Zirkus.
              </dd>
            </div>

            <div className='flex flex-col items-start'>
              <div className='rounded-md bg-white/5 p-2 ring-1 ring-white/10'>
                {/* simple dot icon via css */}
                <div className='size-6 rounded-full bg-gradient-to-r from-[#61dafb] to-[#41b883]' />
              </div>
              <dt className='mt-4 text-base font-semibold text-white'>
                Verfügbarkeit & Starttermine
              </dt>
              <dd className='mt-2 text-base/7 text-gray-400'>
                Transparente Kapazitäten & frühzeitige Slots – hilfreich für
                Planung & Staffing.
              </dd>
            </div>

            <div className='flex flex-col items-start'>
              <div className='rounded-md bg-white/5 p-2 ring-1 ring-white/10'>
                <div className='size-6 grid place-items-center text-white'>
                  {' '}
                  {`</>`}{' '}
                </div>
              </div>
              <dt className='mt-4 text-base font-semibold text-white'>
                Mini-Snippet pro Ausgabe
              </dt>
              <dd className='mt-2 text-base/7 text-gray-400'>
                Kurzer Code- oder Config-Snippet (z. B. API-Contract, CI-Check,
                Perf-Tweak) inkl. Kontext.
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* subtle bg accent */}
      <div
        aria-hidden='true'
        className='absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6'
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className='aspect-1155/678 w-288.75 bg-gradient-to-tr from-[#61dafb] via-[#4cc3a5] to-[#41b883] opacity-20'
        />
      </div>
    </div>
  );
};
