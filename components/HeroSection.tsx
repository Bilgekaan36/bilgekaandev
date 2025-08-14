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
