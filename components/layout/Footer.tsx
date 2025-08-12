import React from 'react';
import Link from 'next/link';
import { Linkedin } from 'lucide-react';
import { GradientText } from '../ui/gradient-text';
import { AnimatedCTAButton } from '../custom/AnimatedCTAButtons';

export const Footer = () => {
  // gleiche Menüpunkte wie in der Navbar
  const navigation = [
    { name: 'Über mich', href: '#about' },
    { name: 'Leistungen', href: '#services' },
    { name: 'Projekte', href: '#projects' },
    { name: 'Kontakt', href: '#contact' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <footer id='contact' className='bg-gray-900 text-white'>
      <div className='mx-auto flex flex-col max-w-7xl px-6 py-16 md:py-20 lg:py-24'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8'>
          {/* CTA */}
          <div className='md:col-span-2 lg:col-span-2'>
            <div className='font-orbitron text-left mb-10 md:mb-16 lg:mb-20'>
              <h2 className='font-orbitron font-semibold leading-none text-white text-4xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mt-4 md:mt-5'>
                <span className='block sm:block'>Lass uns</span>{' '}
                <GradientText
                  className='inline-block sm:inline'
                  text='loslegen'
                />
              </h2>
            </div>
            <div className='mt-10 flex items-center gap-x-6'>
              <Link href='/erstgespraech'>
                <AnimatedCTAButton
                  text='Projekt anfragen'
                  variant='xl'
                  onClick={() => alert('XL Button geklickt!')}
                />
              </Link>
            </div>
          </div>

          {/* Navigation (identisch zur Navbar) */}
          <div>
            <h3 className='text-gray-400 text-sm font-medium tracking-wider mb-6'>
              NAVIGATION
            </h3>
            <nav className='space-y-4'>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className='block text-sm/6 font-semibold text-white hover:text-[var(--brand-mint)] transition-colors duration-200'
                >
                  {item.name.toUpperCase()}
                </Link>
              ))}
            </nav>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className='text-gray-400 text-sm font-medium tracking-wider mb-6'>
              USEFUL LINKS
            </h3>
            <div className='flex gap-4'>
              <Link
                href='https://linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='LinkedIn'
                className='text-white hover:text-[var(--brand-mint)] transition-colors duration-200'
              >
                <Linkedin className='h-6 w-6' />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className='mt-16 pt-8 border-t border-gray-800'>
          <div className='flex flex-col sm:flex-row justify-between items-center gap-6'>
            {/* Legal */}
            <div className='flex flex-wrap justify-center sm:justify-start gap-6 text-sm'>
              <Link
                href='/impressum'
                className='text-gray-400 hover:text-[var(--brand-mint)] transition-colors duration-200'
              >
                IMPRESSUM
              </Link>
              <Link
                href='/datenschutz'
                className='text-gray-400 hover:text-[var(--brand-mint)] transition-colors duration-200'
              >
                DATENSCHUTZ
              </Link>
              <Link
                href='/cookies'
                className='text-gray-400 hover:text-[var(--brand-mint)] transition-colors duration-200'
              >
                COOKIES
              </Link>
            </div>

            {/* Copyright */}
            <div className='text-gray-400 text-sm text-center sm:text-right'>
              Copyright Bilgekaan Yilmaz 2025. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
