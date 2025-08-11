import React from 'react';

interface ReactBadgeProps {
  text?: string;
  variant?: 'rotating' | 'glitch' | 'neon' | 'particles' | 'morph';
}

// React Logo Component
const ReactLogo = () => (
  <svg
    className='w-6 h-6 text-white drop-shadow-lg relative z-10'
    viewBox='0 0 24 24'
    fill='currentColor'
  >
    <path d='M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z' />
  </svg>
);

export const ReactBadge: React.FC<ReactBadgeProps> = ({
  text = 'REACT EXPERT',
  variant = 'rotating',
}) => {
  // Basis-Styles die alle Varianten teilen
  const baseStyles = {
    gradient:
      'linear-gradient(90deg, #61dafb 0%, #4cc3a5 25%, #41b883 50%, #4cc3a5 75%, #61dafb 100%)',
    gradientAlt:
      'linear-gradient(90deg, #41b883 0%, #61dafb 25%, #4cc3a5 50%, #61dafb 75%, #41b883 100%)',
  };

  // Render-Funktion für verschiedene Varianten
  const renderBadge = () => {
    switch (variant) {
      case 'rotating':
        return (
          <div
            className='group relative inline-flex items-center gap-3 px-6 py-3 rounded-full font-bold text-white shadow-2xl transform transition-all duration-500 hover:scale-110 cursor-pointer'
            style={{
              background: baseStyles.gradient,
              backgroundSize: '200% 100%',
              animation: 'gradient 3s ease infinite',
              boxShadow:
                '0 0 40px rgba(97, 218, 251, 0.5), 0 0 80px rgba(65, 184, 131, 0.3)',
            }}
          >
            <div
              className='absolute inset-0 rounded-full blur-xl opacity-70'
              style={{
                background: baseStyles.gradient,
                animation: 'pulse 2s ease-in-out infinite',
              }}
            />
            <div className='relative animate-spin-slow'>
              <ReactLogo />
            </div>
            <span className='relative text-lg font-extrabold tracking-wider'>
              {text}
            </span>
          </div>
        );

      case 'glitch':
        return (
          <div className='relative group cursor-pointer'>
            <div
              className='absolute inset-0 flex items-center gap-3 px-6 py-3 rounded-full font-bold text-white opacity-80'
              style={{
                background: baseStyles.gradient,
                animation: 'glitch1 2s infinite',
                clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
              }}
            >
              <ReactLogo />
              <span className='text-lg font-extrabold tracking-wider'>
                {text}
              </span>
            </div>

            <div
              className='absolute inset-0 flex items-center gap-3 px-6 py-3 rounded-full font-bold text-white opacity-80'
              style={{
                background: baseStyles.gradientAlt,
                animation: 'glitch2 2s infinite',
                clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)',
              }}
            >
              <ReactLogo />
              <span className='font-orbitron text-lg font-extrabold tracking-wider'>
                {text}
              </span>
            </div>

            <div
              className='relative flex items-center gap-3 px-6 py-3 rounded-full font-bold text-white transform transition-all duration-300 hover:scale-110'
              style={{
                background: baseStyles.gradient,
                backgroundSize: '200% 100%',
                animation: 'gradient 3s ease infinite',
              }}
            >
              <ReactLogo />
              <span className='text-lg font-extrabold tracking-wider'>
                {text}
              </span>
            </div>
          </div>
        );

      case 'neon':
        return (
          <div className='relative group'>
            <div
              className='absolute -inset-1 rounded-full opacity-75 blur-sm group-hover:opacity-100 transition duration-500'
              style={{
                background: baseStyles.gradient,
                backgroundSize: '200% 200%',
                animation: 'gradient 2s linear infinite',
              }}
            />
            <div className='relative flex items-center gap-3 px-4 py-2 rounded-full bg-gray-900 font-bold text-white group-hover:bg-gray-800 transition-all duration-300'>
              <div className='relative'>
                <div
                  className='absolute inset-0 blur-md'
                  style={{
                    background: baseStyles.gradient,
                    animation: 'pulse 2s ease-in-out infinite',
                  }}
                />
                <ReactLogo />
              </div>
              <span
                className='font-orbitron text-sm font-extrabold tracking-wider bg-clip-text text-transparent'
                style={{
                  backgroundImage: baseStyles.gradient,
                  backgroundSize: '200% 100%',
                  animation: 'gradient 3s ease infinite',
                }}
              >
                {text}
              </span>
            </div>
          </div>
        );

      case 'particles':
        return (
          <div
            className='relative group inline-flex items-center gap-3 px-6 py-3 rounded-full font-bold text-white overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105'
            style={{
              background: baseStyles.gradient,
              backgroundSize: '200% 100%',
              animation: 'gradient 3s ease infinite',
            }}
          >
            <div className='absolute inset-0'>
              <div className='absolute top-2 left-4 w-1 h-1 bg-white rounded-full animate-float-up opacity-70' />
              <div
                className='absolute top-4 left-12 w-1.5 h-1.5 bg-white rounded-full animate-float-up opacity-60'
                style={{ animationDelay: '0.5s' }}
              />
              <div
                className='absolute top-3 right-8 w-1 h-1 bg-white rounded-full animate-float-up opacity-80'
                style={{ animationDelay: '1s' }}
              />
              <div
                className='absolute top-5 right-4 w-2 h-2 bg-white rounded-full animate-float-up opacity-50'
                style={{ animationDelay: '1.5s' }}
              />
              <div
                className='absolute top-1 left-1/2 w-1.5 h-1.5 bg-white rounded-full animate-float-up opacity-70'
                style={{ animationDelay: '0.7s' }}
              />
            </div>
            <div className='relative animate-bounce-slow'>
              <ReactLogo />
            </div>
            <span className='relative text-lg font-extrabold tracking-wider drop-shadow-lg'>
              {text}
            </span>
          </div>
        );

      case 'morph':
        return (
          <div
            className='group relative inline-flex items-center gap-3 px-8 py-4 font-bold text-white cursor-pointer'
            style={{
              background: baseStyles.gradient,
              backgroundSize: '200% 100%',
              animation:
                'gradient 3s ease infinite, morph 8s ease-in-out infinite',
              borderRadius: '50% 40% 50% 40%',
              transform: 'rotate(0deg)',
              transition: 'all 0.5s ease',
            }}
            onMouseEnter={(e) => {
              const target = e.currentTarget as HTMLElement;
              target.style.borderRadius = '40% 50% 40% 50%';
              target.style.transform = 'rotate(5deg) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget as HTMLElement;
              target.style.borderRadius = '50% 40% 50% 40%';
              target.style.transform = 'rotate(0deg) scale(1)';
            }}
          >
            <ReactLogo />
            <span className='text-xl font-extrabold tracking-wider'>
              {text}
            </span>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className='inline-block'>
      {renderBadge()}
      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.7;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
        }

        @keyframes glitch1 {
          0%,
          100% {
            clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
            transform: translateX(0);
          }
          20% {
            clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
            transform: translateX(-2px);
          }
          40% {
            clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
            transform: translateX(2px);
          }
        }

        @keyframes glitch2 {
          0%,
          100% {
            clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
            transform: translateX(0);
          }
          20% {
            clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
            transform: translateX(2px);
          }
          40% {
            clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
            transform: translateX(-2px);
          }
        }

        @keyframes float-up {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          90% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(-40px) scale(0);
            opacity: 0;
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes morph {
          0%,
          100% {
            border-radius: 50% 40% 50% 40%;
          }
          33% {
            border-radius: 40% 50% 40% 50%;
          }
          66% {
            border-radius: 50% 40% 50% 40%;
          }
        }

        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }

        .animate-float-up {
          animation: float-up 3s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

// Verwendungsbeispiele
export const BadgeShowcase = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 p-8'>
      <div className='max-w-6xl mx-auto space-y-12'>
        <h2 className='text-3xl font-bold text-white text-center mb-12'>
          React Badge Component - Dynamisch konfigurierbar
        </h2>

        <div className='grid gap-8 place-items-center'>
          {/* Standard */}
          <div className='text-center space-y-4'>
            <p className='text-white/60 text-sm'>Default (rotating)</p>
            <ReactBadge />
          </div>

          {/* Custom Text */}
          <div className='text-center space-y-4'>
            <p className='text-white/60 text-sm'>Custom Text + Glitch</p>
            <ReactBadge text='FRONTEND DEV' variant='glitch' />
          </div>

          {/* Neon Variante */}
          <div className='text-center space-y-4'>
            <p className='text-white/60 text-sm'>Neon Border</p>
            <ReactBadge text='REACT PRO' variant='neon' />
          </div>

          {/* Particles */}
          <div className='text-center space-y-4'>
            <p className='text-white/60 text-sm'>Mit Partikeln</p>
            <ReactBadge text='NEXT.JS GURU' variant='particles' />
          </div>

          {/* Morph */}
          <div className='text-center space-y-4'>
            <p className='text-white/60 text-sm'>Morphing Shape</p>
            <ReactBadge text='TYPESCRIPT' variant='morph' />
          </div>
        </div>

        {/* Code Beispiel */}
        <div className='mt-16 p-6 bg-white/5 rounded-lg'>
          <h3 className='text-white font-bold mb-4'>Verwendung:</h3>
          <pre className='text-green-400 text-sm overflow-x-auto'>
            {`import { ReactBadge } from './ReactBadge';

// Default
<ReactBadge />

// Mit eigenem Text
<ReactBadge text="FRONTEND DEV" />

// Mit Variante
<ReactBadge 
  text="REACT PRO" 
  variant="glitch" 
/>

// Verfügbare Varianten:
// 'rotating' | 'glitch' | 'neon' | 'particles' | 'morph'`}
          </pre>
        </div>
      </div>
    </div>
  );
};
