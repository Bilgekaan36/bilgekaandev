'use client';
import type { Metadata } from 'next';
import { Inter, Orbitron } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { ParallaxProvider } from 'react-scroll-parallax';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const orbitron = Orbitron({
  variable: '--font-orbitron',
  subsets: ['latin'],
  weight: ['400', '700', '800', '900'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} ${orbitron.variable} font-sans antialiased relative`}
      >
        <Navbar />
        <ParallaxProvider>{children}</ParallaxProvider>
      </body>
    </html>
  );
}
