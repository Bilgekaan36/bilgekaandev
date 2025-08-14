'use client';

import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatedCTAButton } from '../custom/AnimatedCTAButtons';
import { GradientText } from '../ui/gradient-text';

const navigation = [
  { name: 'Über mich', href: '#about' },
  { name: 'Leistungen', href: '#services' },
  { name: 'Projekte', href: '#projects' },
  { name: 'Kontakt', href: '#contact' },
  { name: 'Blog', href: '/blog' }, // Weiterleitung
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='bg-transparent fixed top-0 left-0 right-0 z-50'>
      <nav
        aria-label='Global'
        className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'
      >
        {/* Logo */}
        <div className='flex lg:flex-1'>
          <Link href='/' className='-m-1.5 p-1.5'>
            <GradientText className='text-2xl font-extrabold' text='BLGKN' />
            <span className='text-2xl font-extrabold text-white'>YLMZ</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className='flex lg:hidden'>
          <button
            type='button'
            onClick={() => setMobileMenuOpen(true)}
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400'
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon aria-hidden='true' className='size-6' />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden lg:flex lg:gap-x-12'>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className='text-sm/6 font-semibold text-white'
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Login */}
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <AnimatedCTAButton text='Projekt anfragen' variant='default' />
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className='lg:hidden'
      >
        <div className='fixed inset-0 z-50' />
        <DialogPanel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10'>
          <div className='flex items-center justify-between'>
            <Link href='/' className='-m-1.5 p-1.5'>
              <GradientText className='text-2xl font-extrabold' text='BLGKN' />
              <span className='text-2xl font-extrabold text-white'>YLMZ</span>
            </Link>
            <button
              type='button'
              onClick={() => setMobileMenuOpen(false)}
              className='-m-2.5 rounded-md p-2.5 text-gray-400'
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon aria-hidden='true' className='size-6' />
            </button>
          </div>

          {/* Mobile Links */}
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-white/10'>
              <div className='space-y-2 py-6'>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className='-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5'
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className='py-6'>
                <AnimatedCTAButton text='Projekt anfragen' variant='default' />
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};
