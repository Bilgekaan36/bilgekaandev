'use client';
import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { AvatarGroup, AvatarGroupTooltip } from '../ui/avatar-group';

// Loading Spinner Component mit deinen Branding-Farben
const GradientSpinner = () => {
  return (
    <div className='relative w-full h-full flex items-center justify-center'>
      {/* Äußerer Ring mit Gradient */}
      <div
        className='absolute inset-2 rounded-full animate-spin'
        style={{
          background:
            'conic-gradient(from 0deg, transparent, #61dafb, #4cc3a5, #41b883, transparent)',
          maskImage: 'radial-gradient(circle, transparent 60%, black 60%)',
          WebkitMaskImage:
            'radial-gradient(circle, transparent 60%, black 60%)',
        }}
      />

      {/* Innerer pulsierender Punkt */}
      <div className='absolute w-2 h-2 bg-gradient-to-r from-[#61dafb] to-[#41b883] rounded-full animate-pulse' />

      {/* Alternative: Drei rotierende Punkte */}
      {/* <div className="relative w-8 h-8 animate-spin">
        <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#61dafb] rounded-full" />
        <span className="absolute bottom-0 left-0 w-2 h-2 bg-[#4cc3a5] rounded-full" />
        <span className="absolute bottom-0 right-0 w-2 h-2 bg-[#41b883] rounded-full" />
      </div> */}
    </div>
  );
};

// Alternative: Pulse Rings Loading
const PulseRingsLoader = () => {
  return (
    <div className='relative w-full h-full flex items-center justify-center'>
      <div className='absolute w-8 h-8 rounded-full border-2 border-[#61dafb] animate-ping opacity-75' />
      <div className='absolute w-6 h-6 rounded-full border-2 border-[#4cc3a5] animate-ping animation-delay-200 opacity-75' />
      <div className='absolute w-4 h-4 rounded-full bg-gradient-to-r from-[#61dafb] to-[#41b883] animate-pulse' />
    </div>
  );
};

// Alternative: DNA Helix Loader
const HelixLoader = () => {
  return (
    <div className='relative w-full h-full flex items-center justify-center'>
      <div className='flex gap-1'>
        <span
          className='inline-block w-1 h-4 bg-[#61dafb] rounded-full animate-bounce'
          style={{ animationDelay: '0ms' }}
        />
        <span
          className='inline-block w-1 h-4 bg-[#4cc3a5] rounded-full animate-bounce'
          style={{ animationDelay: '150ms' }}
        />
        <span
          className='inline-block w-1 h-4 bg-[#41b883] rounded-full animate-bounce'
          style={{ animationDelay: '300ms' }}
        />
      </div>
    </div>
  );
};

// Custom Avatar mit Loading State
const CustomAvatar = ({
  src,
  tooltip,
  index,
}: {
  src: string;
  tooltip: string;
  index: number;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <Avatar className='size-12 border-3 border-background'>
      <AvatarImage
        src={src}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        className={
          isLoading
            ? 'opacity-0'
            : 'opacity-100 transition-opacity duration-300'
        }
      />
      <AvatarFallback className='bg-gray-900'>
        {isLoading ? (
          <GradientSpinner />
        ) : hasError ? (
          // Error State - Zeige Icon
          <div className='w-full h-full flex items-center justify-center'>
            <div className='text-[#41b883] text-xs font-bold'>
              {tooltip.charAt(0)}
            </div>
          </div>
        ) : null}
      </AvatarFallback>
      <AvatarGroupTooltip>
        <p>{tooltip}</p>
      </AvatarGroupTooltip>
    </Avatar>
  );
};

const AVATARS = [
  {
    src: '/avatars/react-logo-v.png',
    fallback: 'React',
    tooltip: 'React',
  },
  {
    src: '/avatars/nodejs-logo.webp',
    fallback: 'Nodejs',
    tooltip: 'Node.js',
  },
  {
    src: '/avatars/vuejs-logo.png',
    fallback: 'Vue.js',
    tooltip: 'Vue.js',
  },
  {
    src: '/avatars/typescript-logo.png',
    fallback: 'TypeScript',
    tooltip: 'TypeScript',
  },
  {
    src: '/avatars/psql-logo.jpg',
    fallback: 'PostgreSQL',
    tooltip: 'PostgreSQL',
  },
];

export const AvatarGroupComponent = () => {
  return (
    <>
      <AvatarGroup variant='motion' className='h-12 -space-x-3'>
        {AVATARS.map((avatar, index) => (
          <CustomAvatar
            key={index}
            src={avatar.src}
            tooltip={avatar.tooltip}
            index={index}
          />
        ))}
      </AvatarGroup>

      {/* CSS für Animationen */}
      <style jsx global>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin {
          animation: spin 1s linear infinite;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(-25%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }
      `}</style>
    </>
  );
};

// Export einzelne Loader für Wiederverwendung
export { GradientSpinner, PulseRingsLoader, HelixLoader };

// Demo Component zum Testen verschiedener Loader
export const LoaderShowcase = () => {
  return (
    <div className='bg-gray-900 p-8 space-y-8'>
      <h3 className='text-white text-xl mb-4'>Loading Spinner Varianten:</h3>

      <div className='grid grid-cols-3 gap-8'>
        <div className='text-center'>
          <div className='w-12 h-12 bg-gray-800 rounded-full mx-auto mb-2'>
            <GradientSpinner />
          </div>
          <p className='text-white text-sm'>Gradient Spinner</p>
        </div>

        <div className='text-center'>
          <div className='w-12 h-12 bg-gray-800 rounded-full mx-auto mb-2'>
            <PulseRingsLoader />
          </div>
          <p className='text-white text-sm'>Pulse Rings</p>
        </div>

        <div className='text-center'>
          <div className='w-12 h-12 bg-gray-800 rounded-full mx-auto mb-2'>
            <HelixLoader />
          </div>
          <p className='text-white text-sm'>Helix Loader</p>
        </div>
      </div>

      <div className='mt-8'>
        <h4 className='text-white mb-4'>Avatar Group mit Loading:</h4>
        <AvatarGroupComponent />
      </div>
    </div>
  );
};
