'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Clock, User } from 'lucide-react';
import { BlogSection, getCategoryColor, getPostBySlug } from '@/data/blog';

export default function BlogDetailPage() {
  const params = useParams<{ slug: string }>();
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;

  const post = useMemo(() => (slug ? getPostBySlug(slug) : undefined), [slug]);

  // Always call hooks unconditionally
  const [activeSection, setActiveSection] = useState('');

  // Table of Contents dynamisch aus Sections
  const tocItems = useMemo(
    () => post?.sections?.map((s) => ({ id: s.id, title: s.title })) ?? [],
    [post]
  );

  useEffect(() => {
    if (!post) return;
    const handleScroll = () => {
      const sections = tocItems.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));

      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [post, tocItems]);

  // Fallback bei nicht gefundenem Post
  if (!post) {
    return (
      <div className='min-h-screen bg-black text-white'>
        <div className='max-w-3xl mx-auto px-6 py-24'>
          <h1 className='text-3xl font-bold mb-4'>Beitrag nicht gefunden</h1>
          <p className='text-gray-400 mb-8'>
            Der angeforderte Artikel existiert nicht oder der Link ist veraltet.
          </p>
          <Link
            href='/blog'
            className='inline-flex items-center gap-2 text-gray-300 hover:text-white'
          >
            <ArrowLeft className='w-4 h-4' />
            Zurück zum Blog
          </Link>
        </div>
      </div>
    );
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  // Kategorie-Badge Farbe
  const categoryBadge = getCategoryColor(post.category);

  // Hilfsrenderer für Content mit einfachen Bullet-Points ("• ")
  const renderSectionContent = (section: BlogSection) => {
    const lines = section.content.split('\n').map((l) => l.trim());
    const hasBullets = lines.some((l) => l.startsWith('•'));

    if (!hasBullets) {
      return (
        <p className='text-gray-300 mb-6 whitespace-pre-line'>
          {section.content}
        </p>
      );
    }

    const paragraphs: string[] = [];
    const bullets: string[] = [];
    lines.forEach((l) => {
      if (l.startsWith('•')) {
        bullets.push(l.replace(/^•\s?/, ''));
      } else if (l.length) {
        paragraphs.push(l);
      }
    });

    return (
      <>
        {paragraphs.length > 0 && (
          <p className='text-gray-300 mb-6 whitespace-pre-line'>
            {paragraphs.join('\n\n')}
          </p>
        )}
        {bullets.length > 0 && (
          <ul className='list-disc list-inside text-gray-300 space-y-2 mb-6'>
            {bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}
      </>
    );
  };

  return (
    <div className='min-h-screen bg-black'>
      {/* Hero Section */}
      <section className='relative h-[60vh] min-h-[500px] w-full'>
        <div
          className='absolute inset-0 bg-cover bg-center'
          style={{ backgroundImage: `url(${post.featuredImage})` }}
        >
          <div className='absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30' />
        </div>

        {/* Hero Content */}
        <div className='relative h-full flex items-end'>
          <div className='max-w-7xl mx-auto px-6 pb-12 w-full'>
            <div className='flex items-center gap-3 mb-6'>
              <span
                className={`${categoryBadge} text-sm font-semibold uppercase tracking-wider px-3 py-1 rounded-full`}
              >
                {post.category}
              </span>
              <span className='text-gray-400 text-sm'>{post.date}</span>
            </div>

            <h1 className='text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl mb-6'>
              {post.title}
            </h1>

            {/* Author Info */}
            <div className='flex items-center gap-6 text-gray-300'>
              <div className='flex items-center gap-3'>
                {post.author?.avatar ? (
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={40}
                    height={40}
                    className='w-10 h-10 rounded-full object-cover'
                  />
                ) : (
                  <div className='w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center'>
                    <User className='w-5 h-5' />
                  </div>
                )}
                <div>
                  <p className='text-sm font-medium text-white'>
                    {post.author.name}
                  </p>
                  <p className='text-xs text-gray-400'>{post.author.role}</p>
                </div>
              </div>
              <div className='flex items-center gap-1'>
                <Clock className='w-4 h-4' />
                <span className='text-sm'>{post.readTime} Lesezeit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className='max-w-7xl mx-auto px-6 py-12'>
        <div className='grid lg:grid-cols-[300px_1fr] gap-12'>
          {/* Left Sidebar - Table of Contents */}
          <aside className='hidden lg:block'>
            <div className='sticky top-24'>
              <h3 className='text-white font-bold text-lg mb-6'>
                Inhaltsverzeichnis
              </h3>
              <nav className='space-y-3'>
                {tocItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left text-sm transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-blue-500 font-medium pl-4 border-l-2 border-blue-500'
                        : 'text-gray-400 hover:text-white pl-4 border-l-2 border-gray-800'
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Right Content - Article */}
          <article className='prose prose-invert prose-lg max-w-none'>
            {/* Optional Einleitung aus excerpt */}
            {post.excerpt && (
              <div className='text-gray-300 leading-relaxed mb-12'>
                <p className='text-xl leading-relaxed'>{post.excerpt}</p>
              </div>
            )}

            {/* Sections */}
            {post.sections.map((section) => (
              <section id={section.id} className='mb-16' key={section.id}>
                <h2 className='text-3xl font-bold text-white mb-6'>
                  {section.title}
                </h2>

                {renderSectionContent(section)}

                {section.image && (
                  <div className='my-10'>
                    <Image
                      src={section.image}
                      alt={section.title}
                      width={1200}
                      height={600}
                      className='rounded-xl w-full'
                    />
                  </div>
                )}
              </section>
            ))}
          </article>
        </div>
      </section>

      {/* Back to Blog */}
      <div className='max-w-7xl mx-auto px-6 py-12'>
        <Link
          href='/blog'
          className='text-gray-400 hover:text-white inline-flex items-center gap-2 transition-colors'
        >
          <ArrowLeft className='w-4 h-4' />
          Zurück zum Blog
        </Link>
      </div>
    </div>
  );
}
