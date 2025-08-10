'use client';

import * as React from 'react';
import {
  motion,
  useInView,
  type HTMLMotionProps,
  type Transition,
  type UseInViewOptions,
} from 'motion/react';
import { cn } from '@/lib/utils';

type HighlightTextBaseProps = Omit<HTMLMotionProps<'span'>, 'ref'> & {
  text: string;
  /** Wenn true, wird InView getrackt. Wenn false, animiert immer sofort. */
  inView?: boolean;
  inViewMargin?: UseInViewOptions['margin'];
  inViewOnce?: boolean;
  transition?: Transition;
};

export type HighlightTextProps = HighlightTextBaseProps;

export const HighlightText = React.forwardRef<
  HTMLSpanElement,
  HighlightTextProps
>(
  (
    {
      text,
      className,
      inView = false,
      inViewMargin = '0px',
      inViewOnce = true,
      transition = { duration: 2, ease: 'easeInOut' },
      style,
      ...props
    },
    ref
  ) => {
    const localRef = React.useRef<HTMLSpanElement>(null);

    // Externen ref mit lokalem verbinden
    React.useImperativeHandle(ref, () => localRef.current as HTMLSpanElement);

    const isInViewNow = useInView(localRef, {
      once: inViewOnce,
      margin: inViewMargin,
    });

    const shouldAnimate = !inView || isInViewNow;

    return (
      <motion.span
        ref={localRef}
        data-slot='highlight-text'
        initial={{ backgroundSize: '0% 100%' }}
        animate={shouldAnimate ? { backgroundSize: '100% 100%' } : undefined}
        transition={transition}
        style={{
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left center',
          display: 'inline',
          // du kannst hier auch direkt einen CSS-Gradient setzen, dann reicht Tailwind nicht:
          // backgroundImage: 'linear-gradient(90deg, rgba(59,130,246,.25), rgba(168,85,247,.25))'
          ...style,
        }}
        className={cn(
          // Tailwind-Variante eines hell/dunkel Verlaufs als „Highlighter“
          'relative inline-block rounded-lg px-2 py-1',
          'bg-gradient-to-r from-blue-700 to-green-500 dark:from-blue-500/40 dark:to-purple-500/40',
          // wichtig: Hintergrund soll nur unter dem Text sichtbar sein
          'selection:bg-transparent',
          className
        )}
        {...props}
      >
        {text}
      </motion.span>
    );
  }
);

HighlightText.displayName = 'HighlightText';
