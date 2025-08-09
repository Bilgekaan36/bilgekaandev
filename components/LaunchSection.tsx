'use client';

import React, { useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import Lottie from 'lottie-react';
import type { InteractivityProps } from 'lottie-react';

// Import these in your actual implementation:
import rocket from '@/public/Rocket.json';
import confetti from '@/public/Confetti.json';

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
      <div className='sticky top-0 left-0 h-screen flex flex-col justify-center items-center'>
        <h1 className='text-white text-[10vw] sm:text-[8vw] md:text-[7vw] font-bold text-center'>
          Lass uns abheben
        </h1>
        <p className='text-white text-[6.5vw] sm:text-[5vw] md:text-[4vw] font-medium text-center pt-8 md:pt-16 lg:pt-24'>
          Das könnte
        </p>
        <p className='text-white text-[6.5vw] sm:text-[5vw] md:text-[4vw] font-medium text-center'>
          dein Projekt sein
        </p>
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
