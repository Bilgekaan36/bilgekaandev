'use client';

// app/not-found.tsx
import Link from 'next/link';
import { ArrowLeft, Search } from 'lucide-react';
import { GradientText } from '@/components/ui/gradient-text';
import { AnimatedCTAButton } from '@/components/custom/AnimatedCTAButtons';

export default function NotFound() {
  return (
    <main className='relative min-h-[100svh] bg-gray-950 text-white overflow-hidden'>
      {/* Subtile Hintergrund-Verläufe (deterministisch, kein Math.random → keine Hydration-Issues) */}
      <div className='pointer-events-none absolute inset-0'>
        <div
          className='absolute -top-24 -left-24 w-[38rem] h-[38rem] rounded-full blur-3xl opacity-20'
          style={{
            background:
              'radial-gradient(closest-side, #61dafb 20%, transparent 70%)',
          }}
        />
        <div
          className='absolute -bottom-32 -right-28 w-[42rem] h-[42rem] rounded-full blur-3xl opacity-20'
          style={{
            background:
              'radial-gradient(closest-side, #41b883 20%, transparent 70%)',
          }}
        />
      </div>

      <section className='relative mx-auto max-w-7xl px-6 py-24 md:py-32'>
        {/* Glass-Card */}
        <div className='mx-auto max-w-3xl rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.45)]'>
          {/* Gradient Border Glow */}
          <div className='pointer-events-none absolute inset-0 -z-10 rounded-2xl' />

          <header className='text-center mb-8 md:mb-10'>
            <p className='text-sm font-semibold tracking-widest text-white/60'>
              ERROR 404
            </p>
            <h1 className='mt-3 text-3xl md:text-5xl font-bold leading-tight'>
              <GradientText text='Seite nicht gefunden' />
            </h1>
            <p className='mt-4 text-white/80 md:text-lg'>
              Die angeforderte URL existiert nicht oder wurde verschoben.
            </p>
          </header>

          {/* Quick Links */}
          <div className='grid gap-3 sm:grid-cols-2'>
            <Link
              href='/'
              className='group inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10 transition'
            >
              <ArrowLeft className='h-4 w-4 opacity-80 group-hover:opacity-100' />
              Zur Startseite
            </Link>

            <Link
              href='/blog'
              className='group inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10 transition'
            >
              <Search className='h-4 w-4 opacity-80 group-hover:opacity-100' />
              Zum Blog
            </Link>
          </div>

          {/* CTA im hausgemachten Stil */}
          <div className='mt-8 md:mt-10 flex justify-center'>
            <AnimatedCTAButton text='Projekt anfragen' variant='default' />
          </div>

          {/* Kleines Hint-Feld */}
          <div className='mt-6 rounded-lg border border-white/10 bg-black/20 p-4 text-sm text-white/70'>
            <p>
              Tipp: Prüfe die URL oder nutze die Navigation oben. Wenn du einem
              alten Link gefolgt bist, wurde der Inhalt womöglich umgezogen.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
