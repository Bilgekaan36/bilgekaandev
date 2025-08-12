// mockData/blogData.ts

export interface BlogSection {
  id: string;
  title: string;
  content: string;
  image?: string;
}

export interface BlogPost {
  id: number;
  slug: string;
  category: 'ALLGEMEIN' | 'TUTORIAL' | 'CASE STUDY';
  date: string;
  title: string;
  excerpt: string;
  featuredImage: string;
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
      avatar: '/avatars/bilgekaan.jpg',
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
          'Suspense ermöglicht partielle, frühe Auslieferung; „Wasserfall“ vermeiden, kritische Teile zuerst streamen.\n\n• Above-the-fold priorisieren: kritische Server Components ohne tiefe Abhängigkeiten rendern.\n• Progressive Hydration: Client-Islands nachrangig laden.\n• Pattern: Layout (Server) → Slot (Suspense) → Fallback (Skeleton) → Child (Server/Client) – so werden teure Subtrees parallelisiert.\n• Anti-Pattern: globaler Suspense um die ganze Seite → verliert Granularität.',
        image: '/blog/1_blog/rsc-suspense.png',
      },
      {
        id: 'server-actions',
        title: 'Server Actions: Mutationen ohne API-Boilerplate',
        content:
          'Server Actions erlauben Form- und Event-basierte Mutationen direkt auf dem Server – ohne manuelle REST/GraphQL-Runden.\n\n• Ideal für: Create/Update/Delete, Auth-Flows, Upload-Pipelines.\n• Validation: Zod/Yup serverseitig; Rückgabe strukturierter Fehler an Client Components.\n• Revalidation: nach erfolgreicher Mutation gezielte Cache-Invalidierung per Tags.\n• Security: Actions leben im Server-Trust-Boundary; Eingaben trotzdem strikt validieren und Fehler pfleglich behandeln.',
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
        image: '/blog/1_blog/rsc-pitfalls.png',
      },
      {
        id: 'fazit',
        title: 'Fazit & Empfehlung',
        content:
          'RSC sind kein Selbstzweck. Richtig eingesetzt reduzieren sie Client-JS, vereinfachen Data-Flows und verbessern wahrgenommene Performance. Der Schlüssel ist sauberes Boundary-Design, explizites Caching/Revalidation und gezielter Einsatz von Server Actions. Starte mit einer Route, messe Effekte und rolle Patterns schrittweise aus.',
        image: '/blog/1_blog/rsc-conclusion.jpg',
      },
    ],
  },
  {
    id: 2,
    slug: 'webflow-animationen-wow-effekt',
    category: 'TUTORIAL',
    date: '22. April 2025',
    title: 'Die Top 5 Webflow Animationen für den Wow-Effekt',
    excerpt:
      'Entdecke die kraftvollsten Animationen in Webflow, die deine Website zum Leben erwecken und Besucher begeistern.',
    featuredImage: '/blog/webflow-animations.jpg',
    author: {
      name: 'Bilgekaan Yilmaz',
      role: 'Webflow Experte',
      avatar: '/avatars/soenke.jpg',
    },
    readTime: '6 Min',
    featured: false,
    sections: [
      {
        id: 'intro',
        title: 'Einführung in Webflow Animationen',
        content:
          'Webflow bietet unzählige Möglichkeiten, Websites mit beeindruckenden Animationen zu versehen. In diesem Tutorial zeigen wir die Top 5 Animationen, die garantiert für einen Wow-Effekt sorgen.',
      },
      {
        id: 'parallax',
        title: 'Parallax Scrolling',
        content:
          'Der Klassiker unter den Webanimationen. Parallax-Effekte erzeugen Tiefe und lassen Ihre Website dreidimensional wirken.',
      },
      {
        id: 'hover',
        title: 'Kreative Hover-Effekte',
        content:
          'Hover-Animationen sind der perfekte Weg, um Interaktivität zu signalisieren und die User Experience zu verbessern.',
      },
      {
        id: 'scroll-trigger',
        title: 'Scroll-Triggered Animations',
        content:
          'Elemente, die beim Scrollen erscheinen, halten die Aufmerksamkeit der Besucher und führen sie durch die Seite.',
      },
      {
        id: 'morph',
        title: 'Shape Morphing',
        content:
          'Moderne SVG-Animationen, die Formen ineinander übergehen lassen, sorgen für einen futuristischen Look.',
      },
    ],
  },
  {
    id: 3,
    slug: 'webflow-multistep-formulare',
    category: 'TUTORIAL',
    date: '22. April 2025',
    title:
      'Mehr qualifizierte Leads mit Webflow: Multistep-Formulare effektiv nutzen',
    excerpt:
      'Wie Sie mit mehrstufigen Formularen in Webflow die Conversion-Rate steigern und qualifiziertere Leads generieren.',
    featuredImage: '/blog/multistep-forms.jpg',
    author: {
      name: 'Bilgekaan Yilmaz',
      role: 'Webflow Experte',
      avatar: '/avatars/soenke.jpg',
    },
    readTime: '10 Min',
    featured: false,
    sections: [
      {
        id: 'warum-multistep',
        title: 'Warum Multistep-Formulare?',
        content:
          'Multistep-Formulare reduzieren die kognitive Belastung und erhöhen nachweislich die Completion-Rate um bis zu 300%.',
      },
      {
        id: 'psychologie',
        title: 'Die Psychologie dahinter',
        content:
          'Durch die Aufteilung in kleine, überschaubare Schritte wird der Fortschritt sichtbar und die Motivation steigt.',
      },
      {
        id: 'implementation',
        title: 'Technische Umsetzung in Webflow',
        content:
          'Schritt-für-Schritt Anleitung zur Erstellung eines Multistep-Formulars mit Webflow Interactions.',
      },
      {
        id: 'best-practices',
        title: 'Best Practices',
        content:
          'Von Progress-Bars bis zur optimalen Anzahl von Feldern pro Schritt - diese Tipps maximieren Ihre Conversions.',
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
