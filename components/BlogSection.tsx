'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { GradientText } from './ui/gradient-text';
import { blogPosts, getFeaturedPosts } from '@/data/blog';

// Optional: neue Kategorie-Farben im Brand-Gradient
const getCategoryBadge = (category: string) => {
  // Wenn du harte Farben je Kategorie willst, nutze getLegacyCategoryColor(category)
  // Hier: einheitlicher Brand-Gradient
  return 'bg-gradient-to-r from-[#61dafb]/30 via-[#4cc3a5]/30 to-[#41b883]/30 text-[#61dafb]';
};

export const BlogSection = () => {
  // Featured: nimm den ersten "featured" Post, sonst den ersten Post als Fallback
  const featured = useMemo(() => {
    const feat = getFeaturedPosts();
    return feat.length > 0 ? feat[0] : blogPosts[0];
  }, []);

  // Neueste Posts rechts: nimm die ersten 2, aber schließe den Featured aus
  const rightPosts = useMemo(() => {
    if (!featured) return [];
    return blogPosts.filter((p) => p.id !== featured.id).slice(0, 2);
  }, [featured]);

  if (!featured) return null;

  return (
    <section className='bg-gray-900 py-20 px-6'>
      <div className='max-w-7xl mx-auto flex flex-col'>
        {/* Header */}
        <div className='font-orbitron text-left mb-10 md:mb-16 lg:mb-20'>
          <h2 className='font-orbitron font-semibold leading-none text-white text-[1.75em] sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mt-4 md:mt-5'>
            <GradientText
              className='inline-block sm:inline'
              text='Insights & Trends'
            />{' '}
            <span className='block sm:block'>aus der Webentwicklung</span>
          </h2>
        </div>

        {/* Blog Grid */}
        <div className='grid lg:grid-cols-2 gap-6'>
          {/* Featured Post */}
          <div className='group cursor-pointer'>
            <Link href={`/blog/${featured.slug}`}>
              <div className='relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden bg-gray-900'>
                {/* Background Image */}
                <div
                  className='absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110'
                  style={{ backgroundImage: `url(${featured.featuredImage})` }}
                >
                  {/* Gradient Overlay */}
                  <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent' />
                </div>

                {/* Content */}
                <div className='absolute bottom-0 left-0 right-0 p-8'>
                  <div className='flex items-center gap-3 mb-4'>
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${getCategoryBadge(
                        featured.category
                      )}`}
                    >
                      {featured.category}
                    </span>
                    <span className='text-gray-400 text-sm'>
                      {featured.date}
                    </span>
                  </div>

                  <h3 className='text-white text-2xl lg:text-3xl font-bold leading-tight mb-3'>
                    {featured.title}
                  </h3>
                  {featured.excerpt && (
                    <p className='text-gray-300 text-sm lg:text-base mb-6 line-clamp-3'>
                      {featured.excerpt}
                    </p>
                  )}

                  <button className='px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2 transition-all bg-gradient-to-r from-[#61dafb] via-[#4cc3a5] to-[#41b883] hover:opacity-90'>
                    ARTIKEL LESEN
                    <ArrowUpRight className='w-4 h-4' />
                  </button>
                </div>
              </div>
            </Link>
          </div>

          {/* Right Side - Two Posts */}
          <div className='grid gap-6'>
            {rightPosts.map((post) => (
              <div key={post.id} className='group cursor-pointer'>
                <Link href={`/blog/${post.slug}`}>
                  <div className='relative h-[280px] rounded-2xl overflow-hidden bg-gray-900'>
                    {/* Background Image */}
                    <div
                      className='absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110'
                      style={{ backgroundImage: `url(${post.featuredImage})` }}
                    >
                      <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent' />
                    </div>

                    {/* Content */}
                    <div className='absolute bottom-0 left-0 right-0 p-6'>
                      <div className='flex items-center gap-3 mb-3'>
                        <span
                          className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${getCategoryBadge(
                            post.category
                          )}`}
                        >
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
