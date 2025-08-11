'use client';

import React, { useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import Lottie from 'lottie-react';
import type { InteractivityProps } from 'lottie-react';

// Import these in your actual implementation:
import rocket from '@/public/Rocket.json';
import confetti from '@/public/Confetti.json';
import { GradientText } from './ui/gradient-text';

type ActionType = 'seek' | 'stop' | 'loop' | 'play';

interface LottieAction {
  visibility: [number, number];
  type: ActionType;
  frames: [number] | [number, number];
}

interface LottieInteractivity {
  mode: 'scroll' | 'cursor' | 'chain';
  actions: LottieAction[];
}

export const LaunchSection = () => {
  const [progress, setProgress] = useState(100);

  const handleProgress = (data: number) => {
    setProgress(data);
  };

  const rocketInteractivity: LottieInteractivity = {
    mode: 'scroll',
    actions: [
      {
        visibility: [0, 0.1],
        type: 'stop' as ActionType,
        frames: [1],
      },
      {
        visibility: [0.2, 1],
        type: 'seek' as ActionType,
        frames: [1, 90],
      },
    ],
  };

  const confettiInteractivity: LottieInteractivity = {
    mode: 'scroll',
    actions: [
      {
        visibility: [0, 0.1],
        type: 'stop' as ActionType,
        frames: [1],
      },
      {
        visibility: [0.2, 1],
        type: 'seek' as ActionType,
        frames: [1, 90],
      },
    ],
  };

  return (
    <div
      className='relative bg-[#1E1F26] transition-all duration-[400ms] ease-in-out px-4 md:px-8 xl:px-20 pb-20'
      style={{
        height: '240vh',
        backgroundImage: `linear-gradient(to top, white ${progress}%, #1E1F26 ${progress}%)`,
      }}
    >
      {/* Sticky Content Container */}
      <div className='sticky top-0 left-0 h-screen flex flex-col justify-center items-center text-center'>
        <div className='font-orbitron mb-10 md:mb-16 lg:mb-20'>
          <h2 className='font-orbitron font-semibold text-white text-[1.75em] sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mt-4 md:mt-5'>
            <span className='block sm:inline'>LASS UNS ABHEBEN</span>{' '}
          </h2>
          <p className='text-white text-base sm:text-lg md:text-xl lg:text-2xl mt-1 md:mt-4 lg:mt-6 text-center'>
            Dein Projekt wird es dir danken!
          </p>
        </div>
      </div>

      {/* Rocket Animation */}
      <Lottie
        animationData={rocket}
        interactivity={
          rocketInteractivity as Omit<InteractivityProps, 'lottieObj'>
        }
        className='absolute h-[300px] md:h-[700px] top-[65vh] md:top-[60vh] left-1/2 -translate-x-1/2'
        style={{
          width: 'auto',
        }}
      />

      {/* Confetti Animation */}
      <Lottie
        animationData={confetti}
        interactivity={
          confettiInteractivity as Omit<InteractivityProps, 'lottieObj'>
        }
        className='absolute w-full h-[60%] bottom-0 left-0'
      />

      {/* Parallax Trigger */}
      <Parallax
        onProgressChange={(progressData) => {
          const result = 100 - progressData * 100;
          handleProgress(result);
        }}
        className='absolute left-1/2'
        style={{
          top: '100vh',
        }}
      />
    </div>
  );
};
