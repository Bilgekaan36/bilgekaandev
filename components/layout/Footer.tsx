'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { GradientText } from '../ui/gradient-text';
import { AnimatedCTAButton } from '../custom/AnimatedCTAButtons';
import ManageCookiesButton from '../cookie-consent/ManageCookiesButton';

// zentrale Icon-Konfiguration
type Social =
  | 'linkedin'
  | 'x'
  | 'github'
  | 'freelancermap'
  | 'freelance-de'
  | 'upwork';
// | 'stackoverflow'

const SOCIALS: Array<{
  key: Social;
  label: string;
  href: string;
  // Iconify-Name (https://icon-sets.iconify.design/simple-icons/<brand>/)
  iconify?: string;
  // optionaler Pfad zu Custom-SVG in /public
  customSvg?: string;
  hover?: string; // Tailwind-Farbe on hover
}> = [
  {
    key: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/bilgekaan-yilmaz-107888228',
    iconify: 'simple-icons:linkedin',
    hover: 'hover:text-[#0A66C2]',
  },
  {
    key: 'x',
    label: 'X (Twitter)',
    href: 'https://x.com/YilmazBilgekaan',
    iconify: 'simple-icons:x',
    hover: 'hover:text-white',
  },
  {
    key: 'github',
    label: 'GitHub',
    href: 'https://github.com/Bilgekaan36',
    iconify: 'simple-icons:github',
    hover: 'hover:text-[#adbac7]',
  },
  {
    key: 'upwork',
    label: 'Upwork',
    href: 'https://www.upwork.com/freelancers/~015300b1317059a0cc?mp_source=share',
    iconify: 'simple-icons:upwork',
    hover: 'hover:text-[#14a800]',
  },
  // Nischen-Plattformen → Custom SVG Fallback
  {
    key: 'freelancermap',
    label: 'freelancermap',
    href: 'https://www.freelancermap.de/profil/bilgekaan-yilmaz',
    customSvg: '/brands/freelancermap.svg',
    hover: 'hover:opacity-90',
  },
  {
    key: 'freelance-de',
    label: 'freelance.de',
    href: 'https://www.freelance.de/Freelancer/Bilgekaan',
    customSvg: '/brands/freelance-de.svg',
    hover: 'hover:opacity-90',
  },
  // {
  //   key: 'stackoverflow',
  //   label: 'Stack Overflow',
  //   href: 'https://stackoverflow.com/users/DEIN-ID',
  //   iconify: 'simple-icons:stackoverflow',
  //   hover: 'hover:text-[#F48024]',
  // },
];

// einzelner Social-Link mit Iconify oder SVG-Fallback
function SocialLink({
  label,
  href,
  iconify,
  customSvg,
  hover,
}: (typeof SOCIALS)[number]) {
  return (
    <Link
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      aria-label={label}
      title={label}
      className={`text-white/90 transition-colors ${
        hover ?? 'hover:text-[var(--brand-mint)]'
      }`}
    >
      {iconify ? (
        // Iconify rendert als SVG, frei skalierbar
        <Icon icon={iconify} width='24' height='24' />
      ) : customSvg ? (
        // lokales SVG (liegt unter /public/brands/*)
        <Image
          src={customSvg}
          alt={label}
          width={24}
          height={24}
          className='object-contain'
        />
      ) : (
        // harmloser Fallback: Initialen
        <span className='inline-flex h-6 w-6 items-center justify-center rounded bg-white/10 text-[11px] font-bold'>
          {label.substring(0, 2).toUpperCase()}
        </span>
      )}
    </Link>
  );
}

export const Footer = () => {
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
              <AnimatedCTAButton text='Projekt anfragen' variant='xl' />
            </div>
          </div>

          {/* Navigation */}
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
              SOCIALS & PROFILES
            </h3>
            <div className='flex flex-wrap gap-4'>
              {SOCIALS.map((s) => (
                <SocialLink {...s} key={s.key} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className='mt-16 pt-8 border-t border-gray-800'>
          <div className='flex flex-col sm:flex-row justify-between items-center gap-6'>
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

            <div className='text-gray-400 text-sm text-center sm:text-right'>
              Copyright Bilgekaan Yilmaz 2025. All rights reserved.
            </div>
          </div>
        </div>
      </div>
      {/* <ManageCookiesButton /> */}
    </footer>
  );
};
