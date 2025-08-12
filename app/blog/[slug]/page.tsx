'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Clock, User } from 'lucide-react';
import { BlogSection, getPostBySlug } from '@/data/blog';

export default function BlogDetailPage() {
  const params = useParams<{ slug: string }>();
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;

  const post = useMemo(() => (slug ? getPostBySlug(slug) : undefined), [slug]);

  const [activeSection, setActiveSection] = useState('');

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

  if (!post) {
    return (
      <div className='min-h-screen bg-gray-900 text-white'>
        <div className='max-w-3xl mx-auto px-6 py-24'>
          <h1 className='text-3xl font-bold mb-4'>Beitrag nicht gefunden</h1>
          <p className='text-gray-400 mb-8'>
            Der angeforderte Artikel existiert nicht oder der Link ist veraltet.
          </p>
          <Link
            href='/blog'
            className='inline-flex items-center gap-2 text-gray-300 hover:text-[#4cc3a5]'
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

  // Kategorie-Badge in deiner Palette
  const categoryBadge =
    'bg-gradient-to-r from-[#61dafb]/30 via-[#4cc3a5]/30 to-[#41b883]/30 text-[#61dafb]';

  // Render-Helfer (Bullet/Paragraph)
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
      if (l.startsWith('•')) bullets.push(l.replace(/^•\s?/, ''));
      else if (l.length) paragraphs.push(l);
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
    <div className='min-h-screen bg-gray-900'>
      {/* Hero Section */}
      <section className='relative h-[60vh] min-h-[500px] w-full'>
        <div
          className='absolute inset-0 bg-cover bg-center'
          style={{ backgroundImage: `url(${post.featuredImage})` }}
        >
          {/* dunkleres Overlay für Lesbarkeit */}
          <div className='absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/70 to-gray-900/30' />
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
              <span className='text-gray-300 text-sm'>{post.date}</span>
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
                  <div className='w-10 h-10 bg-white/10 rounded-full flex items-center justify-center'>
                    <User className='w-5 h-5 text-white/80' />
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
                <Clock className='w-4 h-4 text-white/80' />
                <span className='text-sm'>{post.readTime} Lesezeit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className='max-w-7xl mx-auto px-6 py-12'>
        <div className='grid lg:grid-cols-[300px_1fr] gap-12'>
          {/* Left Sidebar - TOC */}
          <aside className='hidden lg:block'>
            <div className='sticky top-24'>
              <h3 className='text-white font-bold text-lg mb-6'>
                Inhaltsverzeichnis
              </h3>
              <nav className='space-y-3'>
                {tocItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`relative block w-full text-left text-sm transition-colors duration-300 pl-4`}
                      style={
                        isActive
                          ? {
                              color: '#4cc3a5',
                              borderLeftWidth: 2,
                              borderImage:
                                'linear-gradient(180deg,#61dafb,#4cc3a5,#41b883) 1',
                              borderLeftStyle: 'solid',
                            }
                          : {
                              color: '#9ca3af',
                              borderLeft: '2px solid #1f2937',
                            }
                      }
                    >
                      {item.title}
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Right Content - Article */}
          <article className='prose prose-invert prose-lg max-w-none'>
            {post.excerpt && (
              <div className='text-gray-300 leading-relaxed mb-12'>
                <p className='text-xl leading-relaxed'>{post.excerpt}</p>
              </div>
            )}

            {post.sections.map((section) => (
              <section id={section.id} className='mb-16' key={section.id}>
                <h2 className='text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#61dafb] via-[#4cc3a5] to-[#41b883]'>
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
          className='inline-flex items-center gap-2 text-gray-300 hover:text-[#4cc3a5] transition-colors'
        >
          <ArrowLeft className='w-4 h-4' />
          Zurück zum Blog
        </Link>
      </div>
    </div>
  );
}
