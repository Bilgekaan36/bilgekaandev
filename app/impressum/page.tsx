import { GradientText } from '@/components/ui/gradient-text';

export default function Impressum() {
  return (
    <main className='max-w-5xl mx-auto px-6 py-16 text-white'>
      <h1 className='font-orbitron text-4xl md:text-5xl font-bold mb-8'>
        <GradientText text='Impressum' />
      </h1>

      <div className='space-y-6 text-gray-300 leading-relaxed'>
        <p>Angaben gemäß § 5 TMG</p>
        <p>
          <strong>Bilgekaan Yilmaz</strong>
          <br />
          Musterstraße 12
          <br />
          74072 Heilbronn
          <br />
          Deutschland
        </p>
        <p>
          Telefon:{' '}
          <a
            href='tel:+4917680423919'
            className='text-[var(--brand-mint)] hover:underline'
          >
            +49 176 80423919
          </a>
          <br />
          E-Mail:{' '}
          <a
            href='mailto:bilgekaan-yilmaz@outlook.com'
            className='text-[var(--brand-mint)] hover:underline'
          >
            bilgekaan-yilmaz@outlook.com
          </a>
        </p>
        <p>Umsatzsteuer-ID: DE123456789 (falls vorhanden)</p>
        <p>
          Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
          <br />
          Bilgekaan Yilmaz, Anschrift wie oben
        </p>
      </div>
    </main>
  );
}
