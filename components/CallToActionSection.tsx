import { AnimatedCTAButton } from './custom/AnimatedCTAButtons';
import { GradientText } from './ui/gradient-text';

export const CallToActionSection = () => {
  return (
    <div className='bg-gray-900'>
      <div className='px-6 py-24 sm:px-6 sm:py-32 lg:px-8'>
        <div className='mx-auto max-w-4xl flex flex-col'>
          <div className=' text-center mb-10 md:mb-16 lg:mb-20'>
            <h2 className='font-orbitron font-semibold leading-none text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mt-4 md:mt-5'>
              <span className='inline sm:block'>Klare Antworten in</span>{' '}
              <GradientText className='inline sm:inline' text='24 Stunden' />{' '}
              für einen reibungslosen Projektfluss
            </h2>
            <p className='text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl mt-3 md:mt-6 lg:mt-10'>
              Ob im laufenden Sprint oder beim Projektstart du erhältst zeitnah
              und präzise Rückmeldung, damit Entscheidungen nicht warten müssen.{' '}
            </p>
          </div>
          <div className='self-center'>
            <AnimatedCTAButton text='Projekt anfragen' variant='xl' />
          </div>
        </div>
      </div>
    </div>
  );
};
