'use client';

import React from 'react';
import { Copy } from 'lucide-react';

type Props = {
  code: string;
  language?: string;
  filename?: string;
  highlightLines?: number[];
};

export default function CodeBlock({
  code,
  language = 'ts',
  filename,
  highlightLines = [],
}: Props) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  };

  // einfache Line-Numbers & optionales Highlighting ohne extra Libs
  const lines = React.useMemo(
    () => code.replace(/\n$/, '').split('\n'),
    [code]
  );

  return (
    <div className='my-6 overflow-hidden rounded-xl border border-white/10 bg-[#0b0f14]'>
      <div className='flex items-center justify-between px-4 py-2 text-xs text-gray-300 border-b border-white/10'>
        <div className='flex items-center gap-2'>
          <span className='rounded-sm bg-white/5 px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-[#61dafb]'>
            {language}
          </span>
          {filename && <span className='text-gray-400'>{filename}</span>}
        </div>
        <button
          onClick={handleCopy}
          className='inline-flex items-center gap-1 rounded-md px-2 py-1 text-gray-300 hover:text-white hover:bg-white/5'
          title='Copy to clipboard'
        >
          <Copy className='h-3.5 w-3.5' />
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>

      <pre className='overflow-x-auto text-sm leading-6 p-4 m-0'>
        <code className='grid gap-[0.15rem] font-mono tab-[2] text-gray-100'>
          {lines.map((ln, i) => {
            const lineNo = i + 1;
            const isHL = highlightLines.includes(lineNo);
            return (
              <span
                key={i}
                className={`relative grid grid-cols-[3ch_1fr] items-start ${
                  isHL ? 'bg-white/5' : ''
                }`}
              >
                <span className='select-none pr-3 text-right text-xs text-gray-500'>
                  {lineNo}
                </span>
                <span className='whitespace-pre text-gray-100'>
                  {ln || ' '}
                </span>
              </span>
            );
          })}
        </code>
      </pre>
      {/* zarter Bottom-Glow in deiner Palette */}
      <div className='h-1 w-full bg-gradient-to-r from-[#61dafb] via-[#4cc3a5] to-[#41b883]' />
    </div>
  );
}
