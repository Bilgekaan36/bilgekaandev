// mockData/blogData.ts

export interface BlogSection {
  id: string;
  title: string;
  content?: string;
  image?: string;
}

export type CodeLanguage =
  | 'ts'
  | 'tsx'
  | 'js'
  | 'jsx'
  | 'bash'
  | 'json'
  | 'sql'
  | 'css'
  | 'md';

export interface CodeSnippet {
  language: CodeLanguage;
  code: string;
  filename?: string; // optional: "actions.ts"
  highlightLines?: number[]; // optional: [3,4,10]
}

export interface BlogSection {
  id: string;
  title: string;
  content?: string; // optional, damit reine Code-/Bild-Sektionen möglich sind
  image?: string;
  code?: CodeSnippet; // << neu
}

export interface BlogPost {
  id: number;
  slug: string;
  category: 'ALLGEMEIN' | 'TUTORIAL' | 'CASE STUDY';
  date: string;
  title: string;
  excerpt: string;
  featuredImage?: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  readTime: string;
  featured?: boolean;
  sections: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'react-server-components-nextjs-15-best-practices',
    category: 'TUTORIAL',
    date: '12. August 2025',
    title:
      'React Server Components in Next.js 15: Production-Patterns, Caching & Fallstricke',
    excerpt:
      'Ein praxisnaher Leitfaden für RSC in Next.js 15: Mental Model, Suspense/Streaming, Caching-Strategien, Server Actions, Boundary-Design, DX- und Performance-Fallen – inklusive checkbarer Best Practices.',
    featuredImage: '/blog/1_blog/hero.png',
    author: {
      name: 'Bilgekaan Yilmaz',
      role: 'Fullstack Entwickler (React/Next.js, Node.js, TypeScript)',
      avatar: '/avatars/bilgekaan.png',
    },
    readTime: '14 Min',
    featured: true,
    sections: [
      {
        id: 'intro',
        title: 'Warum React Server Components (RSC) – und wann nicht?',
        content:
          'RSC verlagern UI-Bereiche auf den Server: weniger Client-JS, bessere TTFB/TTI, vereinfachtes Data-Fetching und natürliches Streaming über Suspense.\n\n• Sinnvoll: datenlastige Views, Listen/Detailseiten, Dashboard-Widgets, Marketing-Pages, Suchergebnisse.\n• Weniger sinnvoll: hochinteraktive, zustandsreiche Widgets (Drag&Drop, Canvas, komplexe Editors) → dort gezielt Client Components kapseln.\n• Ziel: möglichst viel Server, exakt so viel Client wie nötig (Boundary-Design).',
        image: '/blog/1_blog/rsc-when-when-not.png',
      },
      {
        id: 'mental-model',
        title: 'Mental Model: Server-Tree vs. Client-Islands',
        content:
          'RSC rendert Komponenten auf dem Server; nur dort hat man direkten DB/FS/Secret-Zugriff. Client Components sind „Islands“, die interaktive UI kapseln.\n\n• Server: Daten holen, HTML streamen, kein Browser-JS-Bundle für diese Teile.\n• Client: „use client“ an der Komponentenspitze; nur dort Hooks wie useState/useEffect und Browser APIs.\n• Boundary-Regel: Server → Client darf Props (serialisierbar) übergeben; Client → Server nur via Server Actions.',
        image: '/blog/1_blog/rsc-mental-model.png',
      },
      {
        id: 'data-fetching-caching',
        title: 'Data-Fetching & Caching in Next.js 15',
        content:
          'Next.js kombiniert RSC mit Request-/Route-bezogenem Cache. Die wichtigsten Hebel:\n\n• fetch-Caching: implizit „force-cache“ (build-time) oder konfiguriert mit { cache: "no-store" } bzw. { next: { revalidate: 60 } }.\n• Revalidation: „revalidate“ pro Request oder Route; zeit-/event-basiert (Tag-basierte Invalidierung für präzises Busting).\n• Tagging: Antworten mit Tags versehen (z. B. "posts", "user:42") und gezielt invalidieren (on-write Busting nach Mutationen).\n• DB-Zugriff direkt im Server Component/Server Action – kein API-Boilerplate nötig.\n• Anti-Pattern: blind „no-store“ überall → verschenkt RSC-Vorteile.',
        image: '/blog/1_blog/rsc-caching.png',
      },
      {
        id: 'suspense-streaming',
        title: 'Suspense & Streaming richtig einsetzen',
        content:
          'Suspense ermöglicht partielle, frühe Auslieferung; „Wasserfall“ vermeiden, kritische Teile zuerst streamen.\n\n• Above-the-fold priorisieren: kritische Server Components ohne tiefe Abhängigkeiten rendern.\n• Progressive Hydration: Client-Islands nachrangig laden.\n• Pattern: Layout (Server) → Slot (Suspense) → Fallback (Skeleton) → Child (Server/Client) so werden teure Subtrees parallelisiert.\n• Anti-Pattern: globaler Suspense um die ganze Seite → verliert Granularität.',
        image: '/blog/1_blog/rsc-suspense.png',
      },
      {
        id: 'server-actions',
        title: 'Server Actions: Mutationen ohne API-Boilerplate',
        content:
          'Server Actions erlauben Form- und Event-basierte Mutationen direkt auf dem Server ohne manuelle REST/GraphQL-Runden.\n\n• Ideal für: Create/Update/Delete, Auth-Flows, Upload-Pipelines.\n• Validation: Zod/Yup serverseitig; Rückgabe strukturierter Fehler an Client Components.\n• Revalidation: nach erfolgreicher Mutation gezielte Cache-Invalidierung per Tags.\n• Security: Actions leben im Server-Trust-Boundary; Eingaben trotzdem strikt validieren und Fehler pfleglich behandeln.',
        image: '/blog/1_blog/rsc-actions.png',
      },
      {
        id: 'boundaries',
        title: 'Klare Boundaries: „use client“ nur dort, wo nötig',
        content:
          'Ein häufiger Fehler ist zu breite Client-Grenzen, die unnötig viel JS bundlen.\n\n• Splitten: Container (Server) + kleine, fokussierte Client-Widgets (Form, Dropdown, DatePicker).\n• 3rd-Party-Libs: UI-Libs mit DOM-Zugriff in Client-Islands kapseln; Datenbereitstellung im Server Container.\n• Props-Design: nur Serialisierbares übergeben (keine Funktionen/Instanzen).',
        image: '/blog/1_blog/rsc-boundaries.png',
      },
      {
        id: 'performance',
        title: 'Performance-Checkliste für RSC-Apps',
        content:
          'Praktische Punkte, die in Audits sofort Wirkung zeigen:\n\n• Cache-Budget: pro Route klare Caching/Tagging-Strategie definieren.\n• Over-fetching minimieren: Aggregation im Server (Join/SELECT only needed fields), nicht im Client.\n• Bilder: Server-rendern + responsive Größen; Client-Lazy-Load nur für wirklich „below the fold“.\n• Bundle-Watch: Client-Islands klein halten; heavy deps in Server bewegen.\n• Streaming-Cuts: mehrere Suspense-Boundaries statt einer großen.\n• Telemetrie: Server/Client getrennt messen (TTFB, LCP, Hydration-Time).',
        image: '/blog/1_blog/rsc-perf.png',
      },
      {
        id: 'migration',
        title: 'Migration: Pages Router / CSR → App Router mit RSC',
        content:
          'Schrittweise vorgehen, Risiko klein halten.\n\n• Start klein: neue Route im App Router, nicht Big-Bang.\n• Container zuerst: Datenbeschaffung in Server Components verschieben, UI unverändert lassen.\n• Widget-Kapselung: interaktive Teile bewusst als Client-Islands.\n• Nach Mutationen: Tag-basierte Revalidierung etablieren; „no-store“ entfernen.\n• Messbar machen: Vor/Nach-KPIs (TTFB/LCP/JS-Payload) tracken.',
        image: '/blog/1_blog/rsc-migration.png',
      },
      {
        id: 'pitfalls',
        title: 'Häufige Fallstricke in Projekten',
        content:
          'Erfahrungen aus realen Codebases:\n\n• „use client“ an zu hohen Stellen → unnötig großes Client-Bundle.\n• Kein Tag-System → Revalidation wird chaotisch/teuer.\n• Fetch im Client statt Server → doppelte Logik, schlechtere TTFB.\n• Monolithische Suspense → Streams kommen zu spät.\n• Unklare Fehlerpfade in Server Actions → UI ohne Feedback.\n• Geheimnisse im Client-Code → Sicherheitsrisiko.',
        image: undefined,
      },
      {
        id: 'fazit',
        title: 'Fazit & Empfehlung',
        content:
          'RSC sind kein Selbstzweck. Richtig eingesetzt reduzieren sie Client-JS, vereinfachen Data-Flows und verbessern wahrgenommene Performance. Der Schlüssel ist sauberes Boundary-Design, explizites Caching/Revalidation und gezielter Einsatz von Server Actions. Starte mit einer Route, messe Effekte und rolle Patterns schrittweise aus.',
        image: '/blog/1_blog/rsc-conclusion.png',
      },
    ],
  },
  {
    id: 2,
    slug: 'typescript-6-neue-features-grosse-codebases',
    category: 'TUTORIAL',
    date: '13. August 2025',
    title: 'TypeScript 6 – Was die neuen Features für große Codebases bedeuten',
    excerpt:
      'TypeScript 6 bringt entscheidende Verbesserungen für große Codebases – von präziseren Generics über stabile Dekoratoren bis hin zu smarterem Resource-Management.',
    featuredImage: '/blog/2_blog/hero.png',
    author: {
      name: 'Bilgekaan Yilmaz',
      role: 'Fullstack Entwickler (React/Next.js, Node.js, TypeScript)',
      avatar: '/avatars/bilgekaan.png',
    },
    readTime: '8 Min',
    featured: false,
    sections: [
      {
        id: 'intro',
        title: 'Einleitung',
        content:
          'TypeScript ist längst der De-facto-Standard für komplexe JavaScript-Projekte. Mit Version 6 legt Microsoft erneut nach – nicht nur mit kosmetischen Änderungen, sondern mit Features, die gerade in Enterprise-Codebases und für skalierende SaaS-Projekte entscheidend sein können. In diesem Artikel zeige ich die wichtigsten Neuerungen, warum sie in großen Projekten relevant sind und wie du als IT-Freelancer oder Tech-Lead sie nutzt, um Projekte sauberer, wartbarer und attraktiver für Kunden zu gestalten.',
      },
      {
        id: 'noinfer',
        title: '“NoInfer” – Präzisere Generics ohne Typ-Hölle',
        content:
          'Wer in großen Projekten mit komplexen Generics arbeitet, kennt das Problem: TypeScript inferiert manchmal zu viel, manchmal zu wenig – und plötzlich hat man implizit breite Typen, die Fehler nicht mehr zuverlässig abfangen. Mit NoInfer<T> lässt sich die Inferenz gezielt stoppen. Das verhindert, dass Parameter ungewollt „weicher“ werden – und sorgt für klarere API-Contracts, stabilere Typdefinitionen und weniger schwer nachvollziehbare Build-Fehler.',
        code: {
          language: 'ts',
          code: `function update<T>(obj: T, updates: NoInfer<T>) {
  return { ...obj, ...updates };
}`,
          filename: 'update.ts',
        },
      },
      {
        id: 'variadic-tuple',
        title: 'Variadic Tuple Types 2.0 – Mächtiger in der Praxis',
        content:
          'Variadic Tuple Types gab es schon, aber mit TS 6 sind sie flexibler: besseres Mergen mehrerer Tuple-Typen und klar typ-sichere Verkettung von Argumentlisten. Ideal für Middleware-Pipelines oder Funktionskomposition, bei denen jeder Schritt neue Parameter ergänzt – ohne auf any-Workarounds zurückzufallen.',
        code: {
          language: 'ts',
          code: `type PipelineArgs<T extends unknown[]> = [...T, string];`,
          filename: 'pipeline.ts',
        },
      },
      {
        id: 'decorators',
        title: 'Dekoratoren – Jetzt offiziell stabil',
        content:
          'Nach Jahren im Experimentiermodus sind ECMAScript-konforme Dekoratoren offiziell unterstützt. Das ist ein Gamechanger für Dependency Injection in Node.js-Services, ORM-Model-Deklarationen (z. B. Prisma/TypeORM) und API-Route-Metadata. Für Freelancer heißt das: moderne Architektur-Patterns ohne Framework-Sonderwege – sauber, standardnah, wartbar.',
      },
      {
        id: 'exhaustive-switch',
        title: 'Exhaustive Switch Checking – Weniger „vergessene“ Cases',
        content:
          'Gerade in großen Codebases schleichen sich Fehler ein, wenn neue Enum-/Union-Werte dazukommen. Mit verbesserten Exhaustiveness-Checks warnt TS 6 verlässlicher bei unvollständigen Switches.',
        code: {
          language: 'ts',
          code: `switch (status) {
  case "open": break;
  case "closed": break;
  default:
    const _exhaustive: never = status; // Fehler, falls neuer Wert fehlt
}`,
          filename: 'status.ts',
          highlightLines: [5],
        },
      },
      {
        id: 'import-resolver',
        title: 'Smarterer Import-Resolver – Weniger Build-Brüche',
        content:
          'In monorepo-lastigen Enterprise-Projekten war es oft ein Alptraum, wenn Module in verschiedenen Pfaden lagen. TS 6 verbessert das Mapping von package.json-Exports, stabilisiert IntelliSense bei Alias-Pfaden und reduziert Konflikte zwischen ESM und CommonJS – spürbare Reibungsverluste in pnpm-/Turborepo-Setups gehen zurück.',
      },
      {
        id: 'using-syntax',
        title: 'Neue using-Syntax für Resource Management',
        content:
          'Mit der neuen using-Syntax (ECMAScript Dispose Proposal) gibst du Ressourcen automatisch frei. Für Node.js-Projekte mit Streams, File-Handles oder DB-Verbindungen hochrelevant – weniger Memory-Leaks, klarere Lifecycle-Logik.',
        code: {
          language: 'ts',
          code: `await using conn = await db.connect();
// conn wird automatisch geschlossen`,
          filename: 'db.ts',
        },
      },
      {
        id: 'impact',
        title: 'Warum das für große Codebases so wichtig ist',
        content:
          '• Konsistenz: Neue Features wie NoInfer und Exhaustive Checks machen APIs robuster.\n• Wartbarkeit: Dekoratoren und Resource-Management reduzieren Boilerplate.\n• Performance in Teams: Klare Typen = weniger Zeit in Code Reviews und Bugfixes.\n\nFür IT-Freelancer: klare Positionierung als Experte für skalierbare TypeScript-Architekturen – genau das, was Headhunter und Enterprise-Kunden suchen.',
      },
      {
        id: 'fazit',
        title: 'Mein Fazit',
        content:
          'TypeScript 6 ist kein „Nice-to-Have“, sondern ein strategischer Schritt Richtung Enterprise-Reife. Wer diese Features gezielt einsetzt, erhöht Code-Qualität, wird für Kunden unverzichtbar und kann höhere Tagessätze rechtfertigen. 2025 solltest du TS 6 nicht nur kennen – nutze es aktiv als USP in Pitches.',
      },
    ],
  },
  {
    id: 3,
    slug: 'react-19-upgrade-gamechanger',
    category: 'TUTORIAL',
    date: '17. August 2025',
    title: 'React 19 – Das Upgrade, das dein Frontend-Spiel verändert',
    excerpt:
      'React 19 bringt zahlreiche Neuerungen, die nicht nur syntaktisch glänzen, sondern den Entwicklungsalltag spürbar erleichtern – von intelligenten Formularaktionen bis hin zu stabilen Event-Handlern.',
    featuredImage: '/blog/3_blog/hero.jpg',
    author: {
      name: 'Bilgekaan Yilmaz',
      role: 'Fullstack Entwickler (React/Next.js, Node.js, TypeScript)',
      avatar: '/avatars/bilgekaan.png',
    },
    readTime: '9 Min',
    featured: true,
    sections: [
      {
        id: 'intro',
        title: 'Einleitung',
        content:
          'Mit React 19 bringt Meta das bisher rundeste Update seit der Einführung von Hooks. Statt nur kosmetischer Neuerungen erwarten dich tiefgreifende Verbesserungen in der Handhabung von Formularen, serverseitigem Rendering und asynchronem UI-Verhalten. Gerade für skalierende Anwendungen mit Fokus auf UX und Developer Productivity ist dieses Release ein Gamechanger.',
      },
      {
        id: 'form-actions',
        title: 'Native Form Actions – Direkt zum Punkt',
        content:
          'Formularverarbeitung war bisher oft ein Flickwerk aus preventDefault, Fetch und State-Handling. Mit React 19 kannst du direkt eine Serverfunktion binden – minimalistisch und sicher.',
        code: {
          language: 'tsx',
          code: `// server.ts
'use server';

export async function handleContact(data: FormData) {
  const message = data.get("message");
  await sendToCRM(message);
}

// client.tsx
<form action={handleContact}>
  <textarea name="message" placeholder="Nachricht schreiben..." />
  <button type="submit">Senden</button>
</form>`,
          filename: 'contactForm.tsx',
        },
      },
      {
        id: 'use-optimistic',
        title: 'useOptimistic – Optimistisches UI ohne Chaos',
        content:
          'Reaktive UX bedeutet schnelles Feedback – aber ohne unnötiges State-Wirrwarr. useOptimistic ermöglicht vorausschauende UI-Reaktionen, bevor der Server antwortet.',
        code: {
          language: 'tsx',
          code: `const [items, addItem] = useOptimistic([], (prev, next) => [...prev, next]);

const onSubmit = async (formData: FormData) => {
  const name = formData.get("name");
  addItem({ name });

  await saveToBackend(name);
};`,
          filename: 'optimisticItem.tsx',
        },
      },
      {
        id: 'use',
        title: 'use() – Promises direkt in Komponenten',
        content:
          'Dank des neuen use()-Hooks kannst du nun direkt in Komponenten auf Promises zugreifen. Kein useEffect, kein State-Management – pure Klarheit.',
        code: {
          language: 'tsx',
          code: `async function fetchStats() {
  const res = await fetch("/api/stats");
  return res.json();
}

export default function Dashboard() {
  const stats = use(fetchStats());

  return <div>{stats.views} Aufrufe</div>;
}`,
          filename: 'dashboard.tsx',
        },
      },
      {
        id: 'form-status',
        title: 'useFormStatus – Formulare, die kommunizieren',
        content:
          'Mit useFormStatus kannst du den Zustand von Formularen gezielt anzeigen – z. B. Ladeindikatoren beim Absenden. Kein eigener State nötig.',
        code: {
          language: 'tsx',
          code: `function SubmitButton() {
  const { pending } = useFormStatus();
  return <button disabled={pending}>{pending ? "Lädt…" : "Absenden"}</button>;
}`,
          filename: 'submitButton.tsx',
        },
      },
      {
        id: 'custom-elements',
        title: 'Web Components – Jetzt offiziell unterstützt',
        content:
          'React 19 unterstützt native Custom Elements. Du kannst Web Components wie gewohnt nutzen – inklusive Eventbindung.',
        code: {
          language: 'tsx',
          code: `useEffect(() => {
  const widget = document.querySelector("user-badge");
  widget?.addEventListener("ready", () => console.log("Widget bereit"));
}, []);

// JSX
<user-badge data-user="42"></user-badge>`,
          filename: 'customElements.tsx',
        },
      },
      {
        id: 'server-components',
        title: 'Server Components – Jetzt stabil und produktionsreif',
        content:
          'Server Components sparen JS im Client, beschleunigen dein UI und eliminieren Prop-Drilling. Ideal für die App-Directory in Next.js.',
        code: {
          language: 'tsx',
          code: `// app/products/page.tsx (Server Component)
export default async function Products() {
  const res = await fetch("https://api.example.com/products");
  const products = await res.json();

  return (
    <ul>
      {products.map((p) => (
        <li key={p.id}>{p.name}</li>
      ))}
    </ul>
  );
}`,
          filename: 'productsPage.tsx',
        },
      },
      {
        id: 'use-event',
        title: 'useEvent – Endlich stabile Callback-Referenzen',
        content:
          'Mit useEvent schreibst du Eventhandler, die sich nicht auf magische Weise bei jedem Render ändern. Ideal für Performance und Klarheit.',
        code: {
          language: 'tsx',
          code: `function LoggerButton() {
  const [value, setValue] = useState("Init");

  const logValue = useEvent(() => {
    console.log("Aktueller Wert:", value);
  });

  return <button onClick={logValue}>Log</button>;
}`,
          filename: 'logger.tsx',
        },
      },
      {
        id: 'fazit',
        title: 'Fazit – Solltest du upgraden?',
        content:
          'React 19 ist kein kosmetisches Update, sondern ein Qualitäts-Boost für deine Codebase. Es vereinfacht gängige Muster, reduziert Boilerplate und bringt moderne Konzepte wie Server Components und Web Component Integration auf die nächste Stufe. Wer moderne UX und wartbare Codearchitektur ernst nimmt, sollte dieses Update einplanen.',
      },
    ],
  },
];

// Helper Functions
export const getFeaturedPosts = () => blogPosts.filter((post) => post.featured);

export const getLatestPosts = (count: number = 3) => blogPosts.slice(0, count);

export const getPostBySlug = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);

export const getPostsByCategory = (category: string) =>
  blogPosts.filter((post) => post.category === category);

export const getCategoryColor = (category: string) => {
  switch (category) {
    case 'TUTORIAL':
      return 'bg-blue-500/20 text-blue-500';
    case 'ALLGEMEIN':
      return 'bg-purple-500/20 text-purple-500';
    case 'CASE STUDY':
      return 'bg-green-500/20 text-green-500';
    default:
      return 'bg-gray-500/20 text-gray-500';
  }
};
