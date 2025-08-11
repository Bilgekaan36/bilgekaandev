import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Youtube, Linkedin } from 'lucide-react';
import { GradientText } from '../ui/gradient-text';
import { AnimatedCTAButton } from '../custom/AnimatedCTAButtons';

export const Footer = () => {
  return (
    <footer className='bg-black text-white'>
      <div className='mx-auto flex flex-col max-w-7xl px-6 py-16 md:py-20 lg:py-24'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8'>
          {/* Left Column - CTA */}
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
                  text='ERSTGESPRÄCH'
                  variant='xl'
                  onClick={() => alert('XL Button geklickt!')}
                />
              </Link>
            </div>
          </div>

          {/* Empty column for spacing on desktop */}
          {/* <div className='hidden lg:block'></div> */}

          {/* Navigation Column */}
          <div>
            <h3 className='text-gray-400 text-sm font-medium tracking-wider mb-6'>
              NAVIGATION
            </h3>
            <nav className='space-y-4'>
              <Link
                href='/testimonials'
                className='block text-white hover:text-blue-400 transition-colors duration-200'
              >
                TESTIMONIALS
              </Link>
              <Link
                href='/faqs'
                className='block text-white hover:text-blue-400 transition-colors duration-200'
              >
                FAQ&apos;S
              </Link>
              <Link
                href='/blog'
                className='block text-white hover:text-blue-400 transition-colors duration-200'
              >
                BLOG
              </Link>
              <Link
                href='/webflow-academy'
                className='block text-white hover:text-blue-400 transition-colors duration-200'
              >
                WEBFLOW ACADEMY
              </Link>
              <Link
                href='/webflow-starten'
                className='block text-white hover:text-blue-400 transition-colors duration-200'
              >
                MIT WEBFLOW STARTEN*
              </Link>
            </nav>
          </div>

          {/* Useful Links Column */}
          <div>
            <h3 className='text-gray-400 text-sm font-medium tracking-wider mb-6'>
              USEFUL LINKS
            </h3>
            <div className='flex gap-4'>
              <Link
                href='https://youtube.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white hover:text-blue-400 transition-colors duration-200'
                aria-label='YouTube'
              >
                <Youtube className='h-6 w-6' />
              </Link>
              <Link
                href='https://linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white hover:text-blue-400 transition-colors duration-200'
                aria-label='LinkedIn'
              >
                <Linkedin className='h-6 w-6' />
              </Link>
              <Link
                href='https://webflow.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white hover:text-blue-400 transition-colors duration-200'
                aria-label='Webflow'
              >
                <svg
                  className='h-6 w-6 fill-current'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M24 4.515c0 1.232-.409 2.24-1.024 3.024-.615.784-1.408 1.176-2.376 1.176-1.024 0-1.856-.392-2.496-1.176-.64-.784-.96-1.792-.96-3.024 0-1.232.32-2.24.96-3.024C18.744.707 19.576.315 20.6.315c.968 0 1.761.392 2.376 1.176.615.784 1.024 1.792 1.024 3.024zm-4.752 0c0-.744.128-1.344.384-1.8.256-.456.608-.684 1.056-.684s.8.228 1.056.684c.256.456.384 1.056.384 1.8s-.128 1.344-.384 1.8c-.256.456-.608.684-1.056.684s-.8-.228-1.056-.684c-.256-.456-.384-1.056-.384-1.8zM16.848 8.34h-1.44l-1.008-3.744-.96 3.744h-1.44l-1.44-5.568h1.44l.768 3.936.96-3.936h1.344l1.008 3.936.768-3.936h1.44l-1.44 5.568zM9.024 4.515c0 1.232-.336 2.24-.96 3.024-.624.784-1.44 1.176-2.448 1.176-.432 0-.816-.08-1.152-.24v2.88H3.12V2.772h1.344v.48c.336-.384.816-.576 1.44-.576.96 0 1.728.392 2.304 1.176.576.784.816 1.792.816 3.024zm-1.44 0c0-.744-.144-1.344-.432-1.8-.288-.456-.672-.684-1.152-.684-.528 0-.912.252-1.152.756v3.456c.24.504.624.756 1.152.756.48 0 .864-.228 1.152-.684.288-.456.432-1.056.432-1.8z' />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='mt-16 pt-8 border-t border-gray-800'>
          <div className='flex flex-col sm:flex-row justify-between items-center gap-6'>
            {/* Legal Links */}
            <div className='flex flex-wrap justify-center sm:justify-start gap-6 text-sm'>
              <Link
                href='/impressum'
                className='text-gray-400 hover:text-white transition-colors duration-200'
              >
                IMPRESSUM
              </Link>
              <Link
                href='/datenschutz'
                className='text-gray-400 hover:text-white transition-colors duration-200'
              >
                DATENSCHUTZ
              </Link>
              <Link
                href='/cookies'
                className='text-gray-400 hover:text-white transition-colors duration-200'
              >
                COOKIES
              </Link>
            </div>

            {/* Copyright */}
            <div className='text-gray-400 text-sm text-center sm:text-right'>
              Mit Sternchen * markierte Links sind Affiliate-Links.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Alternative mit mehr Webflow-ähnlichem Logo
export const FooterWithCustomLogo = () => {
  return (
    <footer className='bg-black text-white'>
      <div className='container mx-auto px-6 py-16 md:py-20 lg:py-24'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8'>
          {/* Left Column - CTA */}
          <div className='md:col-span-2 lg:col-span-1'>
            <div className='max-w-sm'>
              <h2 className='text-4xl md:text-5xl font-bold leading-tight mb-8'>
                <span className='block'>LASS UNS</span>
                <span className='block bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent'>
                  LOSLEGEN
                </span>
              </h2>

              <button className='bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-4 text-sm tracking-wider rounded-md w-full sm:w-auto transition-all duration-300 group flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105'>
                ERSTGESPRÄCH VEREINBAREN
                <svg
                  className='w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M7 17L17 7M17 7H7M17 7V17'
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Empty column for spacing */}
          <div className='hidden lg:block'></div>

          {/* Navigation Column */}
          <div>
            <h3 className='text-gray-500 text-xs font-semibold tracking-[0.2em] mb-6 uppercase'>
              Navigation
            </h3>
            <nav className='space-y-3'>
              {[
                'TESTIMONIALS',
                "FAQ'S",
                'BLOG',
                'WEBFLOW ACADEMY',
                'MIT WEBFLOW STARTEN*',
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className='block text-gray-300 hover:text-white transition-colors duration-200 text-sm'
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links Column */}
          <div>
            <h3 className='text-gray-500 text-xs font-semibold tracking-[0.2em] mb-6 uppercase'>
              Useful Links
            </h3>
            <div className='flex gap-3'>
              {/* YouTube Icon */}
              <a
                href='#'
                className='w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110'
                aria-label='YouTube'
              >
                <Youtube className='h-5 w-5 text-gray-300' />
              </a>

              {/* LinkedIn Icon */}
              <a
                href='#'
                className='w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110'
                aria-label='LinkedIn'
              >
                <Linkedin className='h-5 w-5 text-gray-300' />
              </a>

              {/* Custom Icon */}
              <a
                href='#'
                className='w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110'
                aria-label='Partner'
              >
                <span className='text-gray-300 font-bold text-xs'>W</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='mt-16 pt-8 border-t border-gray-800'>
          <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
            <div className='flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 text-xs text-gray-500 uppercase tracking-wider'>
              <a href='#' className='hover:text-gray-300 transition-colors'>
                Impressum
              </a>
              <a href='#' className='hover:text-gray-300 transition-colors'>
                Datenschutz
              </a>
              <a href='#' className='hover:text-gray-300 transition-colors'>
                Cookies
              </a>
            </div>

            <p className='text-xs text-gray-500 text-center sm:text-right'>
              Mit Sternchen * markierte Links sind Affiliate-Links.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
