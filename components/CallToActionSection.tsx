import { AnimatedCTAButton } from './custom/AnimatedCTAButtons';
import { GradientText } from './ui/gradient-text';

export const CallToActionSection = () => {
  return (
    <div className='bg-indigo-700'>
      <div className='px-6 py-24 sm:px-6 sm:py-32 lg:px-8'>
        <div className='mx-auto max-w-4xl flex flex-col'>
          <div className='font-orbitron text-center mb-10 md:mb-16 lg:mb-20'>
            <h2 className='font-orbitron font-semibold leading-none text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mt-4 md:mt-5'>
              <span className='inline sm:block'>Du bekommst innerhalb von</span>{' '}
              <GradientText className='inline sm:inline' text='24 Stunden' />{' '}
              eine Antwort
            </h2>
            <p className='text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl mt-3 md:mt-6 lg:mt-10'>
              Lass uns dein Projekt gemeinsam voranbringen!
            </p>
          </div>
          <div className='self-center'>
            <AnimatedCTAButton
              text='ERSTGESPRÄCH'
              variant='xl'
              onClick={() => alert('XL Button geklickt!')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
