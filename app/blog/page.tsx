'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { blogPosts } from '@/data/blog';
import { GradientText } from '@/components/ui/gradient-text';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter posts based on search query
  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'TUTORIAL':
        return 'bg-blue-500/20 text-blue-500';
      case 'ALLGEMEIN':
        return 'bg-purple-500/20 text-purple-500';
      default:
        return 'bg-gray-500/20 text-gray-500';
    }
  };

  return (
    <div className='min-h-screen bg-black'>
      {/* Hero Section */}
      <section className='pt-32 pb-12 px-6'>
        <div className='max-w-7xl mx-auto'>
          <div className='font-orbitron text-left mb-10 md:mb-16 lg:mb-20'>
            <h2 className='font-orbitron font-semibold leading-none text-white text-[1.75em] sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mt-4 md:mt-5'>
              <span className='block sm:block'>Kennst du diese</span>{' '}
              <GradientText
                className='inline-block sm:inline'
                text='Herausforderungen?'
              />
            </h2>
            <p className='text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl mt-1 md:mt-4 lg:mt-6 max-w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-2xl'>
              Lass uns diese gemeinsam überwältigen!
            </p>
          </div>

          {/* Search Bar */}
          <div className='relative w-full'>
            <input
              type='text'
              placeholder='Suchen'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='w-full px-4 py-4 pr-12 bg-transparent border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors'
            />
            <Search className='absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500' />
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className='pb-20 px-6'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid md:grid-cols-2 gap-6'>
            {filteredPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <article className='group cursor-pointer h-full'>
                  <div className='relative h-[400px] rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 hover:border-gray-700 transition-all duration-300'>
                    {/* Background Image */}
                    <div
                      className='absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110'
                      style={{
                        backgroundImage: `url(${post.featuredImage})`,
                      }}
                    >
                      {/* Gradient Overlay */}
                      <div className='absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent' />
                    </div>

                    {/* Content */}
                    <div className='absolute bottom-0 left-0 right-0 p-6'>
                      <div className='flex items-center gap-3 mb-4'>
                        <span
                          className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${getCategoryColor(
                            post.category
                          )}`}
                        >
                          {post.category}
                        </span>
                        <span className='text-gray-400 text-sm'>
                          {post.date}
                        </span>
                      </div>

                      <h2 className='text-white text-xl lg:text-2xl font-bold leading-tight group-hover:text-blue-400 transition-colors'>
                        {post.title}
                      </h2>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* No Results Message */}
          {filteredPosts.length === 0 && (
            <div className='text-center py-20'>
              <p className='text-gray-400 text-lg'>
                Keine Artikel gefunden für &quot;{searchQuery}&quot;
              </p>
            </div>
          )}

          {/* Load More Button (optional) */}
          {/* {filteredPosts.length > 0 && (
            <div className='mt-12 text-center'>
              <button className='px-8 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-colors'>
                Mehr Artikel laden
              </button>
            </div>
          )} */}
        </div>
      </section>
    </div>
  );
}
