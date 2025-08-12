import React from 'react';

export const ScrollIndicator = () => {
  return (
    <div className='hidden lg:block absolute bottom-8 left-1/2 transform -translate-x-1/2'>
      <div className='flex flex-col items-center space-y-2 text-white/60'>
        <span className='text-sm font-medium'>Scroll für mehr</span>
        <div className='w-6 h-10 border-2 border-white/30 rounded-full flex justify-center'>
          <div className='w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce' />
        </div>
      </div>
    </div>
  );
};
