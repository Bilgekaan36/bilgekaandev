import Image from 'next/image';
import { ScrollIndicator } from './custom/ScrollIndicator';
import { GradientText } from './ui/gradient-text';
import { AnimatedCTAButton } from './custom/AnimatedCTAButtons';
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from './ui/marquee';
import { ReactBadge } from './custom/ReactBadge';
import { AvatarGroupComponent } from './custom/AvatarGroup';

export const HeroSection = () => {
  // constants/client-logos.ts
  const CLIENT_LOGOS = [
    { src: '/client-logos/deen-logo.svg', alt: 'Deen Logo' },
    { src: '/client-logos/digi-flash.png', alt: 'Digi Flash Logo' },
    { src: '/client-logos/eiscafe-remi.svg', alt: 'Eiscafe Remi Logo' },
    { src: '/client-logos/heartbeat-logo.svg', alt: 'Heartbeat Logo' },
    { src: '/client-logos/init-logo.png', alt: 'INIT Logo' },
    { src: '/client-logos/piri-logo.svg', alt: 'PostgreSQL Logo' },
    { src: '/client-logos/workdigital-logo.svg', alt: 'Workdigital Logo' },
    { src: '/client-logos/yilmaz-bakery-logo.svg', alt: 'Yilmaz Bakery Logo' },
  ];

  return (
    <div className='relative isolate overflow-hidden bg-gray-900'>
      <svg
        aria-hidden='true'
        className='absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-white/10'
      >
        <defs>
          <pattern
            x='50%'
            y={-1}
            id='983e3e4c-de6d-4c3f-8d64-b9761d1534cc'
            width={200}
            height={200}
            patternUnits='userSpaceOnUse'
          >
            <path d='M.5 200V.5H200' fill='none' />
          </pattern>
        </defs>
        <svg x='50%' y={-1} className='overflow-visible fill-gray-800/20'>
          <path
            d='M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z'
            strokeWidth={0}
          />
        </svg>
        <rect
          fill='url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)'
          width='100%'
          height='100%'
          strokeWidth={0}
        />
      </svg>
      <div
        aria-hidden='true'
        className='absolute top-10 left-[calc(50%-4rem)] -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:top-[calc(50%-30rem)] lg:left-48 xl:left-[calc(50%-24rem)]'
      >
        <div
          style={{
            clipPath:
              'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
          }}
          className='aspect-1108/632 w-277 bg-gradient-to-r from-[#61dafb] via-[#4cc3a5] to-[#41b883] opacity-20'
        />
      </div>
      <div className='mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-40'>
        <div className='mx-auto max-w-2xl shrink-0 lg:mx-0 lg:pt-8'>
          <div className='flex gap-6 mt-20 lg:mt-0'>
            <ReactBadge text='REACT EXPERTE' variant='neon' />
            <AvatarGroupComponent />
          </div>
          <h1 className='font-orbitron font-semibold text-white text-[2rem] md:text-5xl tracking-tight mt-4 md:mt-5 break-words'>
            <GradientText
              className='inline-block sm:inline text-4xl md:text-[2.5rem] mt-5'
              text='Fullstack React Entwickler'
            />{' '}
            <span className='block sm:block'>
              Sofort einsatzbereit für Ihr Projektteam
            </span>
          </h1>
          <p className='text-gray-300 text-xl lg:text-2xl mt-4 lg:mt-6 max-w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-2xl'>
            Ich unterstütze <strong>Unternehmen</strong> und{' '}
            <strong>Projektteams</strong> mit
            <strong> performanten Webanwendungen</strong>,{' '}
            <strong>stabiler Architektur</strong> und
            <strong> klarer Kommunikation</strong>. Mein Fokus: vom{' '}
            <strong>ersten Tag</strong> an
            <strong> messbaren Mehrwert</strong> schaffen{' '}
            <strong>technisch</strong> wie
            <strong> organisatorisch</strong>.
          </p>
          <div className='mt-10 flex items-center gap-x-6'>
            <AnimatedCTAButton text='Projekt anfragen' variant='xl' />
          </div>
          <div className='mt-12'>
            <Marquee>
              <MarqueeFade side='left' />
              <MarqueeFade side='right' />
              <MarqueeContent pauseOnHover={false}>
                {CLIENT_LOGOS.map((logo, index) => (
                  <MarqueeItem className='grayscale h-16 max-w-24' key={index}>
                    <Image
                      alt={logo.alt}
                      className='w-full h-full object-contain'
                      src={logo.src}
                      height={100}
                      width={100}
                    />
                  </MarqueeItem>
                ))}
              </MarqueeContent>
            </Marquee>
          </div>
        </div>
        <div className='mx-auto mt-16 flex justify-center max-w-2xl sm:mt-24 lg:mt-0  lg:max-w-none lg:flex-none pl-3'>
          <div className='max-w-3xl flex-none sm:max-w-5xl lg:max-w-none'>
            <Image
              alt='Bilgekaan'
              src='/yilmaz.png'
              width={2000}
              height={2000}
              className='w-125 rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10'
            />
          </div>
        </div>
      </div>
      <ScrollIndicator />
    </div>
  );
};
