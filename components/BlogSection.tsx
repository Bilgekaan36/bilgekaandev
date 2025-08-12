'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { GradientText } from './ui/gradient-text';

export const BlogSection = () => {
  const featuredPost = {
    category: 'ALLGEMEIN',
    date: '22. April 2025',
    title:
      'Werden Webdesigner durch KI arbeitslos? – Eine realistische Einschätzung',
    image: '/blog-featured.jpg',
    slug: 'webdesigner-ki-zukunft',
  };

  const posts = [
    {
      category: 'TUTORIAL',
      date: '22. April 2025',
      title: 'Die Top 5 Webflow Animationen für den Wow-Effekt',
      image: '/blog1.jpg',
      slug: 'webflow-animationen-wow-effekt',
    },
    {
      category: 'TUTORIAL',
      date: '22. April 2025',
      title:
        'Mehr qualifizierte Leads mit Webflow: Multistep-Formulare effektiv nutzen',
      image: '/blog2.jpg',
      slug: 'webflow-multistep-formulare',
    },
  ];

  return (
    <section className='bg-gray-900 py-20 px-6'>
      <div className='max-w-7xl mx-auto flex flex-col'>
        {/* Header */}
        <div className='font-orbitron text-left mb-10 md:mb-16 lg:mb-20'>
          <h2 className='font-orbitron font-semibold leading-none text-white text-[1.75em] sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mt-4 md:mt-5'>
            <GradientText
              className='inline-block sm:inline'
              text='Insights & Trends'
            />
            <span className='block sm:block'> aus der Webentwicklung</span>
          </h2>
        </div>

        {/* Blog Grid */}
        <div className='grid lg:grid-cols-2 gap-6'>
          {/* Featured Post */}
          <div className='group cursor-pointer'>
            <Link href={`/blog/${featuredPost.slug}`}>
              <div className='relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden bg-gray-900'>
                {/* Background Image */}
                <div
                  className='absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110'
                  style={{
                    backgroundImage: `url(${featuredPost.image})`,
                  }}
                >
                  {/* Gradient Overlay angepasst */}
                  <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent' />
                </div>

                {/* Content */}
                <div className='absolute bottom-0 left-0 right-0 p-8'>
                  <div className='flex items-center gap-3 mb-4'>
                    <span className='text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r from-[#61dafb]/30 via-[#4cc3a5]/30 to-[#41b883]/30 text-[#61dafb]'>
                      {featuredPost.category}
                    </span>
                    <span className='text-gray-400 text-sm'>
                      {featuredPost.date}
                    </span>
                  </div>

                  <h3 className='text-white text-2xl lg:text-3xl font-bold leading-tight mb-6'>
                    {featuredPost.title}
                  </h3>

                  <button className='px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2 transition-all bg-gradient-to-r from-[#61dafb] via-[#4cc3a5] to-[#41b883] hover:opacity-90'>
                    ARTIKEL LESEN
                    <ArrowUpRight className='w-4 h-4' />
                  </button>
                </div>
              </div>
            </Link>
          </div>

          {/* Right Side - Posts */}
          <div className='grid gap-6'>
            {posts.map((post, index) => (
              <div key={index} className='group cursor-pointer'>
                <Link href={`/blog/${post.slug}`}>
                  <div className='relative h-[280px] rounded-2xl overflow-hidden bg-gray-900'>
                    <div
                      className='absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110'
                      style={{
                        backgroundImage: `url(${post.image})`,
                      }}
                    >
                      <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent' />
                    </div>

                    <div className='absolute bottom-0 left-0 right-0 p-6'>
                      <div className='flex items-center gap-3 mb-3'>
                        <span className='text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r from-[#61dafb]/30 via-[#4cc3a5]/30 to-[#41b883]/30 text-[#61dafb]'>
                          {post.category}
                        </span>
                        <span className='text-gray-400 text-xs'>
                          {post.date}
                        </span>
                      </div>

                      <h3 className='text-white text-lg lg:text-xl font-bold leading-tight'>
                        {post.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
