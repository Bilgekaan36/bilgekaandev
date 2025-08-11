import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface AnimatedCTAButtonProps {
  text?: string;
  variant?: 'default' | 'glow' | 'xl';
  onClick?: () => void;
}

export const AnimatedCTAButton: React.FC<AnimatedCTAButtonProps> = ({
  text = 'ERSTGESPRÄCH',
  variant = 'default',
  onClick,
}) => {
  const handleClick =
    onClick ||
    (() => {
      console.log('Button clicked');
      // Default action
    });

  // Varianten-Styles
  const getVariantStyles = () => {
    switch (variant) {
      case 'glow':
        return {
          padding: 'px-8 py-4',
          fontSize: 'text-lg',
          iconSize: 'h-5 w-5',
          boxShadow:
            '0 4px 15px rgba(65, 184, 131, 0.4), 0 0 30px rgba(97, 218, 251, 0.2)',
          boxShadowHover:
            '0 6px 20px rgba(65, 184, 131, 0.6), 0 0 40px rgba(97, 218, 251, 0.4)',
        };
      case 'xl':
        return {
          padding: 'px-10 py-5',
          fontSize: 'text-xl',
          iconSize: 'h-6 w-6',
          boxShadow:
            '0 8px 25px rgba(65, 184, 131, 0.35), 0 0 50px rgba(97, 218, 251, 0.15)',
          boxShadowHover:
            '0 10px 35px rgba(65, 184, 131, 0.5), 0 0 60px rgba(97, 218, 251, 0.3)',
        };
      default:
        return {
          padding: 'px-8 py-4',
          fontSize: 'text-lg',
          iconSize: 'h-5 w-5',
          boxShadow: '0 4px 15px rgba(65, 184, 131, 0.3)',
          boxShadowHover: '0 6px 20px rgba(65, 184, 131, 0.5)',
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <button
      onClick={handleClick}
      className={`group relative ${styles.padding} font-bold text-white transition-all duration-300 rounded-full hover:scale-105`}
      style={{
        background:
          'linear-gradient(90deg, #61dafb 0%, #4cc3a5 25%, #41b883 50%, #4cc3a5 75%, #61dafb 100%)',
        boxShadow: styles.boxShadow,
        backgroundSize: '200% 100%',
        backgroundPosition: '0% 0%',
        transition: 'all 0.5s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundPosition = '100% 0%';
        e.currentTarget.style.boxShadow = styles.boxShadowHover;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundPosition = '0% 0%';
        e.currentTarget.style.boxShadow = styles.boxShadow;
      }}
    >
      <span className={`font-orbitron flex items-center gap-2 ${styles.fontSize}`}>
        {text}
        <span
          className='inline-block transition-transform duration-300 ease-in-out group-hover:rotate-45'
          style={{
            transform: 'rotate(0deg)',
          }}
        >
          <ArrowUpRight className={styles.iconSize} />
        </span>
      </span>
    </button>
  );
};
