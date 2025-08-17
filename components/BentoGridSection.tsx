import Image from 'next/image';
import { GradientText } from './ui/gradient-text';

export const BentoGridSection = () => {
  return (
    <div className='bg-gray-900 py-24 sm:py-24'>
      <div className='mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8'>
        {/* Header */}
        <div className='font-orbitron text-left mb-10 md:mb-16 lg:mb-20'>
          <h2 className='font-orbitron font-semibold leading-none text-white text-[1.75em] sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mt-4 md:mt-5'>
            <span className='block sm:inline'>Wie sieht unsere</span>{' '}
            <GradientText
              className='inline-block sm:inline'
              text='Erfolgreiche Zusammenarbeit'
            />{' '}
            aus?
          </h2>
        </div>
        <div className='mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2'>
          <div className='relative lg:row-span-2'>
            <div className='absolute inset-px rounded-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 shadow-2xl lg:rounded-l-4xl' />
            <div className='relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]'>
              <div className='px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0'>
                <p
                  className='mt-2 text-lg font-bold tracking-tight max-lg:text-center bg-clip-text text-transparent'
                  style={{
                    backgroundImage:
                      'linear-gradient(90deg, #61dafb 0%, #4cc3a5 25%, #41b883 50%, #4cc3a5 75%, #61dafb 100%)',
                  }}
                >
                  Performance-Optimierung
                </p>
                <p className='mt-2 max-w-lg text-md/6 text-gray-300 max-lg:text-center'>
                  Zielgerichtetes{' '}
                  <span className='font-semibold text-white'>
                    Frontend- und Backend-Tuning{' '}
                  </span>
                  für{' '}
                  <span className='font-semibold text-white'>
                    kurze Ladezeiten
                  </span>
                  ,{' '}
                  <span className='font-semibold text-white'>
                    flüssige User Experience{' '}
                  </span>
                  und spürbar bessere{' '}
                  <span className='font-semibold text-white'>Kennzahlen</span>.
                </p>
              </div>
              <div className='@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm'>
                <div className='absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl'>
                  <Image
                    alt=' Performance-Optimierung Illustration'
                    src='/lightspeed.svg'
                    className='size-full object-cover'
                    height={100}
                    width={100}
                  />
                </div>
              </div>
            </div>
            <div className='pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-l-4xl' />
          </div>
          <div className='relative max-lg:row-start-1'>
            <div className='absolute inset-px rounded-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 shadow-2xl max-lg:rounded-t-4xl' />
            <div className='relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]'>
              <div className='px-8 pt-8 sm:px-10 sm:pt-10'>
                <p
                  className='mt-2 text-lg font-bold tracking-tight max-lg:text-center bg-clip-text text-transparent'
                  style={{
                    backgroundImage:
                      'linear-gradient(90deg, #61dafb 0%, #4cc3a5 25%, #41b883 50%, #4cc3a5 75%, #61dafb 100%)',
                  }}
                >
                  Schnelle Integration ins Team
                </p>
                <p className='mt-2 max-w-lg text-md/6 text-gray-300 max-lg:text-center'>
                  Reibungsloser Einstieg in bestehende{' '}
                  <span className='font-semibold text-white'>Codebases</span>,
                  <span className='font-semibold text-white'>Toolchains</span>{' '}
                  und{' '}
                  <span className='font-semibold text-white'>Teamprozesse</span>{' '}
                  produktiv ab{' '}
                  <span className='font-semibold text-white'>Tag 1</span>, ohne
                  lange{' '}
                  <span className='font-semibold text-white'>
                    Einarbeitungsphase
                  </span>
                  .
                </p>
              </div>
              <div className='flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2'>
                <Image
                  alt='Schnelle Integration ins Team Illustration'
                  src='https://tailwindcss.com/plus-assets/img/component-images/bento-03-performance.png'
                  className='w-full max-lg:max-w-xs'
                  height={100}
                  width={100}
                />
              </div>
            </div>
            <div className='pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl' />
          </div>
          <div className='relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2'>
            <div className='absolute inset-px rounded-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 shadow-2xl' />
            <div className='relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]'>
              <div className='px-8 pt-8 sm:px-10 sm:pt-10'>
                <p
                  className='mt-2 text-lg font-bold tracking-tight max-lg:text-center bg-clip-text text-transparent'
                  style={{
                    backgroundImage:
                      'linear-gradient(90deg, #61dafb 0%, #4cc3a5 25%, #41b883 50%, #4cc3a5 75%, #61dafb 100%)',
                  }}
                >
                  Sichere & stabile Systeme
                </p>
                <p className='mt-2 max-w-lg text-md/6 text-gray-300 max-lg:text-center'>
                  Saubere{' '}
                  <span className='font-semibold text-white'>
                    Schnittstellenarchitektur{' '}
                  </span>
                  mit klarer{' '}
                  <span className='font-semibold text-white'>
                    Dokumentation
                  </span>
                  , stabilen{' '}
                  <span className='font-semibold text-white'>Endpoints </span>
                  und reibungslosen{' '}
                  <span className='font-semibold text-white'>
                    Integrationen
                  </span>
                  .
                </p>
              </div>
              <div className='@container flex flex-1 items-center max-lg:py-6 lg:pb-2'>
                <Image
                  alt='Sichere & stabile Systeme Illustration'
                  src='https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png'
                  className='h-[min(152px,40cqw)] object-cover'
                  height={1000}
                  width={1000}
                />
              </div>
            </div>
            <div className='pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5' />
          </div>
          <div className='relative lg:row-span-2'>
            <div className='absolute inset-px rounded-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 shadow-2xl max-lg:rounded-b-4xl lg:rounded-r-4xl' />
            <div className='relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]'>
              <div className='px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0'>
                <p
                  className='mt-2 text-lg font-bold tracking-tight max-lg:text-center bg-clip-text text-transparent'
                  style={{
                    backgroundImage:
                      'linear-gradient(90deg, #61dafb 0%, #4cc3a5 25%, #41b883 50%, #4cc3a5 75%, #61dafb 100%)',
                  }}
                >
                  Zuverlässige API-Integrationen
                </p>
                <p className='mt-2 max-w-lg text-md/6 text-gray-300 max-lg:text-center'>
                  Implementierung von{' '}
                  <span className='font-semibold text-white'>
                    Security-Best-Practices
                  </span>
                  ,{' '}
                  <span className='font-semibold text-white'>
                    API-Absicherung
                  </span>{' '}
                  und{' '}
                  <span className='font-semibold text-white'>
                    Datenintegrität
                  </span>{' '}
                  für langfristige{' '}
                  <span className='font-semibold text-white'>
                    Betriebssicherheit
                  </span>
                  .
                </p>
              </div>
              <div className='relative min-h-120 w-full grow'>
                <div className='absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-700 shadow-2xl outline outline-white/10'>
                  <div className='flex bg-gray-700 outline outline-white/5'>
                    <div className='-mb-px flex text-sm/6 font-medium text-gray-400'>
                      <div className='border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white'>
                        user.routes.ts
                      </div>
                      <div className='border-r border-gray-600/10 px-4 py-2'>
                        apiClient.ts
                      </div>
                    </div>
                  </div>
                  <div className='px-6 pt-6 pb-14'>
                    {/* Your code example */}
                    <pre className='text-sm text-gray-100'>
                      {`// users.routes.ts
import express, { RequestHandler } from 'express';
import { z } from 'zod';
import { authenticate } from './middleware/auth';
import { UserService } from './services/UserService';

const router = express.Router();

// --- Schemas ---
const paginateQuery = z.object({
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(100).default(20),
});

const createUserBody = z.object({
  email: z.string().email(),
  name: z.string().min(2),
  role: z.enum(['admin', 'user']).default('user'),
});

// --- Utils ---
const validate =
  (schema: z.ZodTypeAny): RequestHandler =>
  (req, res, next) => {
    const parsed = schema.safeParse({ ...req.query, ...req.body, ...req.params });
    if (!parsed.success) {
      return res.status(400).json({ success: false, error: parsed.error.flatten() });
    }
    // @ts-expect-error attach validated payload for handler
    req.valid = parsed.data;
    next();
  };

const asyncHandler =
  (fn: RequestHandler): RequestHandler =>
  (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);

// --- Routes (v1) ---
router.get(
  '/api/v1/users',
  authenticate,
  validate(paginateQuery),
  asyncHandler(async (req, res) => {
    const { page, pageSize } = (req as any).valid as z.infer<typeof paginateQuery>;
    const { items, total } = await UserService.list({ page, pageSize });

    res.set('Cache-Control', 'private, max-age=30'); // small, safe client cache
    return res.json({ success: true, data: items, meta: { page, pageSize, total } });
  })
);

router.post(
  '/api/v1/users',
  authenticate,
  validate(createUserBody),
  asyncHandler(async (req, res) => {
    const input = (req as any).valid as z.infer<typeof createUserBody>;
    const user = await UserService.create(input);

    res.location(\`/api/v1/users/\${user.id}\`);
    return res.status(201).json({ success: true, data: user });
  })
);

export default router;`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
            <div className='pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl' />
          </div>
        </div>
      </div>
    </div>
  );
};
