import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['tailwindcss.com'],
    // oder für neuere Next.js Versionen:
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailwindcss.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
