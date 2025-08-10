import { ChevronRightIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import { ScrollIndicator } from './ScrollIndicator';
import { GradientText } from './ui/gradient-text';
import { AnimatedCTAButton } from './AnimatedCTAButtons';
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from './ui/marquee';
import { ReactBadge } from './ReactBadge';
import { AvatarGroupComponent } from './AvatarGroup';

export const Hero = () => {
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
          className='aspect-1108/632 w-277 bg-linear-to-r from-[#80caff] to-[#4f46e5] opacity-20'
        />
      </div>
      <div className='mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-40'>
        <div className='mx-auto max-w-2xl shrink-0 lg:mx-0 lg:pt-8'>
          <div className='flex gap-6 mt-20 sm:mt-28 lg:mt-12'>
            <ReactBadge text='REACT EXPERTE' variant='neon' />
            <AvatarGroupComponent />
          </div>
          <h1 className='font-orbitron mt-5 text-5xl font-semibold tracking-tight text-pretty text-white sm:text-7xl'>
            <GradientText className='' text='Full Stack Power' /> für Ihre
            Projekte.
          </h1>
          <p className='mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8'>
            5+ Jahre Erfahrung mit React, Next.js, Node.js & TypeScript. Ich
            liefere performante Frontends, robuste Backends und saubere
            Architektur On-Demand, Remote und sofort einsatzbereit.
          </p>
          <div className='mt-10 flex items-center gap-x-6'>
            <AnimatedCTAButton
              text='ERSTGESPRÄCH'
              variant='xl'
              onClick={() => alert('XL Button geklickt!')}
            />
          </div>
          <div className='flex items-center justify-center mt-12'>
            <Marquee>
              <MarqueeFade side='left' />
              <MarqueeFade side='right' />
              <MarqueeContent>
                {new Array(6).fill(null).map((_, index) => (
                  <MarqueeItem className='h-12 w-12' key={index}>
                    <Image
                      alt={`Placeholder ${index}`}
                      className='overflow-hidden rounded-full'
                      src='/react-logo.png'
                      height={100}
                      width={100}
                    />
                  </MarqueeItem>
                ))}
              </MarqueeContent>
            </Marquee>
          </div>
        </div>
        <div className='mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none xl:ml-32'>
          <div className='max-w-3xl flex-none sm:max-w-5xl lg:max-w-none'>
            <Image
              alt='Bilgekaan'
              src='/bilgekaan-hero-main.png'
              width={2000}
              height={2000}
              className='w-150 rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10'
            />
          </div>
        </div>
      </div>
      <ScrollIndicator />
    </div>
  );
};
