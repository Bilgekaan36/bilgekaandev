import { useEffect, useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { AnimatedCTAButton } from '../custom/AnimatedCTAButtons';
import { GradientText } from '../ui/gradient-text';

const navigation = [
  { name: 'Über mich', href: '#about' },
  { name: 'Leistungen', href: '#services' },
  { name: 'Projekte', href: '#projects' },
  { name: 'Kontakt', href: '#contact' },
  { name: 'Blog', href: '/blog' },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll-Listener -> verstärktes Glas + Shadow nach 8px
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50',
        // „Click-through“ verhindern, aber nur auf dem Container
        'pointer-events-none',
      ].join(' ')}
    >
      {/* Glass-Bar */}
      <div
        className={[
          'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8',
          'pt-3 pb-3 md:pt-4 md:pb-4',
          'pointer-events-auto', // Interaktionen wieder aktivieren
        ].join(' ')}
      >
        <nav
          aria-label='Global'
          className={[
            'flex items-center justify-between',
            'rounded-2xl border',
            'backdrop-blur-md', // Glass
            scrolled ? 'bg-white/12' : 'bg-white/8', // etwas stärker beim Scroll
            'border-white/12',
            // zarter Gradient-Rand
            'relative',
            'before:absolute before:inset-0 before:-z-10 before:rounded-2xl',
            'before:p-[1px] before:bg-[linear-gradient(90deg,#61dafb33,#4cc3a533,#41b88333)]',
            'before:mask before:[mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)]',
            'before:[mask-composite:exclude]',
            // Shadow je nach Scroll
            scrolled
              ? 'shadow-[0_8px_24px_-10px_rgba(0,0,0,0.5)]'
              : 'shadow-none',
            'transition-all duration-300',
          ].join(' ')}
        >
          {/* Logo */}
          <div className='flex lg:flex-1'>
            <Link
              href='/'
              className='px-3 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4cc3a5]/50'
            >
              <span className='sr-only'>Startseite</span>
              <GradientText className='text-2xl font-extrabold' text='BLGKN' />
              <span className='text-2xl font-extrabold text-white'>YLMZ</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className='flex lg:hidden'>
            <button
              type='button'
              onClick={() => setMobileMenuOpen(true)}
              className='inline-flex items-center justify-center rounded-xl p-2.5 text-white/80 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#4cc3a5]/50'
              aria-label='Menü öffnen'
            >
              <Bars3Icon aria-hidden='true' className='size-6' />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex lg:gap-x-10'>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='text-sm font-semibold text-white/90 hover:text-white transition-colors'
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className='hidden lg:flex lg:flex-1 lg:justify-end m-2'>
            <AnimatedCTAButton text='Projekt anfragen' variant='default' />
          </div>
        </nav>
      </div>

      {/* Mobile Menu (Glass-Panel) */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className='lg:hidden'
      >
        {/* Dimmed backdrop mit Blur */}
        <div
          className='fixed inset-0 z-50 bg-black/40 backdrop-blur-sm'
          aria-hidden='true'
        />
        <DialogPanel
          className={[
            'fixed inset-y-0 right-0 z-50 w-full sm:max-w-sm',
            'overflow-y-auto',
            // Glasscard
            'bg-white/10 backdrop-blur-xl border-l border-white/15',
            'shadow-[0_8px_30px_rgba(0,0,0,0.6)]',
          ].join(' ')}
        >
          <div className='px-6 pt-6 pb-4'>
            <div className='flex items-center justify-between'>
              <Link
                href='/'
                className='-m-1.5 p-1.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4cc3a5]/50'
              >
                <GradientText
                  className='text-2xl font-extrabold'
                  text='BLGKN'
                />
                <span className='text-2xl font-extrabold text-white'>YLMZ</span>
              </Link>
              <button
                type='button'
                onClick={() => setMobileMenuOpen(false)}
                className='rounded-xl p-2.5 text-white/80 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#4cc3a5]/50'
                aria-label='Menü schließen'
              >
                <XMarkIcon aria-hidden='true' className='size-6' />
              </button>
            </div>
          </div>

          <div className='px-6 pb-8'>
            <div className='space-y-2'>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className='block rounded-xl px-3 py-2 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10'
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className='mt-6'>
              <AnimatedCTAButton text='Projekt anfragen' variant='default' />
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};
