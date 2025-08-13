'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Clock, User, Link as LinkIcon, Share2 } from 'lucide-react';
import type { CodeSnippet } from '@/data/blog';
import { BlogSection, getPostBySlug } from '@/data/blog';

// Theme (dark)
import 'prismjs/themes/prism-tomorrow.css';

// Plugins: CSS + JS
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/line-highlight/prism-line-highlight.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/line-highlight/prism-line-highlight';

// Core
import Prism from 'prismjs';

// *** WICHTIG: Basis-Grammatiken zuerst ***
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markup-templating';

// Jetzt erst die darauf aufbauenden Sprachen
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-tsx';

// Optional weitere
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-markdown';

/* ---------- Helper: Highlight-Line-Ranges (z.B. "3,5-7,12") ---------- */
function compressLinesToRanges(lines?: number[]) {
  if (!lines || lines.length === 0) return '';
  const sorted = [...new Set(lines)].sort((a, b) => a - b);
  const ranges: string[] = [];
  let start = sorted[0];
  let prev = sorted[0];

  for (let i = 1; i < sorted.length; i++) {
    const curr = sorted[i];
    if (curr === prev + 1) {
      prev = curr;
      continue;
    }
    ranges.push(start === prev ? `${start}` : `${start}-${prev}`);
    start = prev = curr;
  }
  ranges.push(start === prev ? `${start}` : `${start}-${prev}`);
  return ranges.join(',');
}

/* ---------- CodeBlock: rendert BlogSection.code mit Prism ---------- */
function CodeBlock({ snippet }: { snippet: CodeSnippet }) {
  const [copied, setCopied] = useState(false);

  // Trigger Prism, wenn sich Code/Language ändert
  useEffect(() => {
    // Prism scannt das DOM und färbt <code class="language-..."> ein
    Prism.highlightAll();
  }, [snippet.code, snippet.language]);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(snippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* noop */
    }
  };

  const lang = (snippet.language ?? 'ts').toLowerCase();
  const dataLine = compressLinesToRanges(snippet.highlightLines);

  return (
    <div className='group relative my-8 rounded-lg border border-white/10 overflow-hidden bg-[#0b0f14]'>
      {/* Header */}
      <div className='flex items-center justify-between px-3 py-2 text-xs text-gray-300 bg-gradient-to-r from-[#061a1f] via-[#0a1f1b] to-[#0f1a13] border-b border-white/10'>
        <div className='flex items-center gap-2'>
          <span className='inline-block w-2 h-2 rounded-full bg-[#61dafb]' />
          <span className='inline-block w-2 h-2 rounded-full bg-[#4cc3a5]' />
          <span className='inline-block w-2 h-2 rounded-full bg-[#41b883]' />
          <span className='ml-2'>{snippet.filename ?? `${lang}`}</span>
        </div>
        <button
          onClick={onCopy}
          className='rounded px-2 py-1 text-gray-200 hover:bg-white/5'
          aria-label='Code kopieren'
          title='Code kopieren'
        >
          {copied ? 'Kopiert ✓' : 'Copy'}
        </button>
      </div>

      {/* Code mit Prism */}
      <pre
        className='overflow-auto p-4 text-sm leading-6 m-0 line-numbers'
        // Prism Line Highlight nutzt data-line="3,5-7"
        data-line={dataLine || undefined}
        style={{
          background: '#0b0f14', // dunkler als default, passt zu deiner Palette
        }}
      >
        <code className={`language-${lang}`}>{snippet.code}</code>
      </pre>

      {/* zarter Bottom-Glow in deiner Farbpalette */}
      <div className='h-1 w-full bg-gradient-to-r from-[#61dafb] via-[#4cc3a5] to-[#41b883]' />
    </div>
  );
}

/* ---------- Page ---------- */
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
        el: document.getElementById(item.id),
      }));

      const y = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i];
        if (s.el && s.el.offsetTop <= y) {
          setActiveSection(s.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [post, tocItems]);

  if (!post) {
    return (
      <div className='min-h-screen bg-gray-900 text-white flex items-center justify-center'>
        <div className='max-w-3xl mx-auto px-6 text-center'>
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
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 96;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const categoryBadge =
    'bg-gradient-to-r from-[#61dafb]/30 via-[#4cc3a5]/30 to-[#41b883]/30 text-[#61dafb]';

  // Text-/Bullet-Renderer
  const renderSectionContent = (section: BlogSection) => {
    if (!section.content) return null;
    const lines = section.content.split('\n').map((l) => l.trim());
    const hasBullets = lines.some((l) => l.startsWith('•'));

    if (!hasBullets) {
      return (
        <p className='text-gray-200/90 leading-8 mb-6 whitespace-pre-line'>
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
          <p className='text-gray-200/90 leading-8 mb-6 whitespace-pre-line'>
            {paragraphs.join('\n\n')}
          </p>
        )}
        {bullets.length > 0 && (
          <ul className='ml-4 list-disc marker:text-[#4cc3a5] text-gray-200/90 space-y-2 leading-8 mb-6'>
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
      {/* HERO */}
      <section
        className='relative h-[58vh] min-h-[480px] w-full overflow-hidden'
        style={{ backgroundAttachment: 'fixed' }}
      >
        <div
          className='absolute inset-0 bg-cover bg-center transition-transform duration-700'
          style={{ backgroundImage: `url(${post.featuredImage})` }}
        >
          <div className='absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-900/75 to-gray-900/30' />
        </div>

        <div className='relative h-full flex items-end'>
          <div className='max-w-7xl mx-auto px-6 pb-12 w-full'>
            <div className='flex items-center gap-3 mb-5'>
              <span
                className={`${categoryBadge} text-xs sm:text-sm font-semibold uppercase tracking-wide px-3 py-1 rounded-full`}
              >
                {post.category}
              </span>
              <span className='text-gray-300 text-sm'>{post.date}</span>
            </div>

            <h1 className='text-white text-[2rem] md:text-4xl lg:text-5xl font-semibold leading-tight max-w-[26ch] md:max-w-[28ch]'>
              {post.title}
            </h1>

            <div className='mt-6 flex flex-wrap items-center gap-6 text-gray-300'>
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

      {/* CONTENT */}
      <section className='max-w-7xl mx-auto px-6 py-12'>
        <div className='grid lg:grid-cols-[260px_minmax(0,1fr)] gap-10 lg:gap-14'>
          {/* TOC */}
          <aside className='hidden lg:block'>
            <div className='sticky top-24'>
              <h3 className='text-white font-semibold text-base mb-4'>
                Inhaltsverzeichnis
              </h3>
              <nav className='space-y-1.5'>
                {tocItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`group relative block w-full text-left px-3 py-2 rounded-md transition-colors ${
                        isActive
                          ? 'bg-[#4cc3a5]/10 border-l-2 border-[#4cc3a5]'
                          : 'hover:bg-white/5'
                      }`}
                      style={{
                        color: isActive ? '#e5e7eb' : '#9ca3af',
                      }}
                    >
                      <span className='inline-flex items-center gap-2'>
                        {isActive && (
                          <LinkIcon className='w-3.5 h-3.5 text-[#4cc3a5]' />
                        )}
                        {item.title}
                      </span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* ARTICLE */}
          <article className='mx-auto w-full max-w-[72ch]'>
            {post.excerpt && (
              <p className='text-gray-200/90 text-xl leading-8 md:leading-9 mb-10'>
                {post.excerpt}
              </p>
            )}

            {post.sections.map((section) => (
              <section
                id={section.id}
                key={section.id}
                className='scroll-mt-28 mb-14 md:mb-16'
              >
                <h2 className='text-white text-2xl md:text-3xl font-semibold tracking-tight mb-4'>
                  <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#61dafb] via-[#4cc3a5] to-[#41b883]'>
                    {section.title}
                  </span>
                </h2>

                {/* Text / Bullets */}
                {renderSectionContent(section)}

                {/* Code */}
                {section.code && <CodeBlock snippet={section.code} />}

                {/* Image */}
                {section.image && (
                  <figure className='my-8'>
                    <Image
                      src={section.image}
                      alt={section.title}
                      width={1600}
                      height={900}
                      sizes='(min-width: 1024px) 720px, 100vw'
                      className='rounded-xl w-full border border-white/10'
                    />
                    <figcaption className='mt-3 text-sm text-gray-400'>
                      {section.title}
                    </figcaption>
                  </figure>
                )}
              </section>
            ))}

            {/* SHARE */}
            <div className='mt-12 flex items-center gap-4'>
              <Share2 className='w-5 h-5 text-gray-400' />
              <span className='text-gray-400 text-sm'>Teilen:</span>
              <div className='flex gap-3'>
                <a href='#' className='text-[#61dafb] hover:underline'>
                  Twitter
                </a>
                <a href='#' className='text-[#4cc3a5] hover:underline'>
                  LinkedIn
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Footer */}
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
