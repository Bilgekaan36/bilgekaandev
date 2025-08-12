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
    slug: 'webdesigner-ki-zukunft',
    category: 'ALLGEMEIN',
    date: '22. April 2025',
    title:
      'Werden Webdesigner durch KI arbeitslos? – Eine realistische Einschätzung',
    excerpt:
      'Die Diskussion rund um Künstliche Intelligenz (KI) und ihre Auswirkungen auf den Arbeitsmarkt ist in vollem Gange – besonders in kreativen und digitalen Berufen.',
    featuredImage: '/blog/ai-webdesign-hero.jpg',
    author: {
      name: 'Bilgekaan Yilmaz',
      role: 'Webflow Experte',
      avatar: '/avatars/soenke.jpg',
    },
    readTime: '8 Min',
    featured: true,
    sections: [
      {
        id: 'aufstieg',
        title: 'Der Aufstieg der KI im Webdesign',
        content: `Mit der rasanten Entwicklung von KI-Tools wie ChatGPT, Midjourney, DALL·E und vor allem spezialisierten „Page Buildern", die per Texteingabe (Prompt) ganze Websites generieren können, wird eines klar: Die Künstliche Intelligenz ist im Webdesign angekommen. Tools wie Webflow, Relume, Squarespace und Wix integrieren mittlerweile KI-Funktionen, die sowohl Design als auch Textgenerierung automatisieren.

Das klingt im ersten Moment bedrohlich – besonders für Webdesigner, die befürchten, durch solche Tools ersetzt zu werden. Doch diesen ersten Eindruck täuscht.`,
        image: '/blog/ai-tools.jpg',
      },
      {
        id: 'was-kann',
        title: 'Was KI kann – und was nicht',
        content: `KI ist aktuell in der Lage, standardisierte Layouts, einfache Landingpages und sogar ganze Webseiten zu erstellen. Besonders durch sogenannte „Prompt Builder" lassen sich Websites in wenigen Minuten generieren. Was dabei auffällt: Die Ergebnisse erinnern stark an Templates. Sie sind funktional, aber oft generisch und austauschbar.

• Standardisierte Layouts und Templates
• Einfache Farbschemata und Typografie
• Basis-Funktionalitäten und Formulare
• Content-Generierung für allgemeine Themen

Was KI jedoch (noch) nicht kann: Komplexe, maßgeschneiderte Lösungen entwickeln, die perfekt auf die individuellen Bedürfnisse eines Unternehmens zugeschnitten sind.`,
      },
      {
        id: 'warum',
        title: 'Warum individuelle Webdesigner weiterhin gefragt bleiben',
        content:
          'Der entscheidende Unterschied zwischen KI-generierten Websites und professionellem Webdesign liegt in der Individualität und strategischen Ausrichtung. Ein erfahrener Webdesigner versteht nicht nur die technischen Aspekte, sondern auch die Geschäftsziele, Zielgruppen und Markenwerte seiner Kunden.',
      },
      {
        id: 'rolle',
        title: 'Die neue Rolle von KI: Assistent statt Ersatz',
        content:
          'Statt Webdesigner zu ersetzen, wird KI zunehmend zu einem wertvollen Werkzeug. Professionelle Designer nutzen KI-Tools bereits heute, um ihre Arbeitsprozesse zu optimieren und kreativer zu werden.',
      },
      {
        id: 'gefaehrdet',
        title: 'Wer wirklich gefährdet ist',
        content:
          'Die ehrliche Antwort: Designer, die ausschließlich Templates anpassen oder einfache Standardlösungen anbieten, könnten tatsächlich unter Druck geraten. Wer jedoch komplexe, strategische und kreative Lösungen entwickelt, wird auch in Zukunft gefragt sein.',
      },
      {
        id: 'zukunft',
        title: 'Die Zukunft gestalten: Den Experten Fazit',
        content:
          'Die Zukunft gehört denjenigen, die KI als Werkzeug verstehen und nutzen, ohne ihre menschliche Kreativität und Expertise zu vernachlässigen.',
      },
      {
        id: 'grund',
        title: 'Kein Grund zur Panik – im Gegenteil',
        content:
          'KI wird Webdesigner nicht arbeitslos machen – sie wird die Branche transformieren. Diejenigen, die sich anpassen und KI als Werkzeug nutzen, werden erfolgreicher denn je sein.',
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
  {
    id: 4,
    slug: 'medellin-digitaler-nomade',
    category: 'ALLGEMEIN',
    date: '17. April 2025',
    title: 'Lohnt sich Medellín, Kolumbien als digitaler Nomade?',
    excerpt:
      'Ein ehrlicher Erfahrungsbericht über das Leben und Arbeiten als Webdesigner in Medellín.',
    featuredImage: '/blog/medellin.jpg',
    author: {
      name: 'Bilgekaan Yilmaz',
      role: 'Webflow Experte',
      avatar: '/avatars/soenke.jpg',
    },
    readTime: '12 Min',
    featured: false,
    sections: [
      {
        id: 'erste-eindruecke',
        title: 'Erste Eindrücke',
        content:
          'Medellín hat sich in den letzten Jahren zu einem Hotspot für digitale Nomaden entwickelt. Die Stadt des ewigen Frühlings lockt mit perfektem Klima und niedrigen Lebenshaltungskosten.',
      },
      {
        id: 'arbeiten',
        title: 'Arbeiten in Medellín',
        content:
          'Co-Working Spaces, Cafés und eine wachsende Tech-Community machen Medellín zum idealen Arbeitsort für Freelancer und Remote Worker.',
      },
      {
        id: 'leben',
        title: 'Leben und Freizeit',
        content:
          'Von Salsa-Kursen bis zu Wochenendtrips in die Kaffeezone - Medellín bietet unzählige Möglichkeiten für die Work-Life-Balance.',
      },
      {
        id: 'fazit',
        title: 'Mein Fazit nach 6 Monaten',
        content:
          'Für wen sich Medellín lohnt und was man unbedingt beachten sollte.',
      },
    ],
  },
  {
    id: 5,
    slug: 'kunden-gewinnen-webdesigner',
    category: 'ALLGEMEIN',
    date: '13. September 2024',
    title: 'Kunden gewinnen als Webdesigner 2024: 10 Strategien',
    excerpt:
      'Bewährte Methoden und neue Ansätze, um als Webdesigner konstant neue Aufträge zu generieren.',
    featuredImage: '/blog/kunden-gewinnen.jpg',
    author: {
      name: 'Bilgekaan Yilmaz',
      role: 'Webflow Experte',
      avatar: '/avatars/soenke.jpg',
    },
    readTime: '15 Min',
    featured: false,
    sections: [
      {
        id: 'portfolio',
        title: 'Ein überzeugendes Portfolio',
        content:
          'Ihr Portfolio ist Ihre wichtigste Visitenkarte. So präsentieren Sie Ihre Arbeiten optimal.',
      },
      {
        id: 'netzwerk',
        title: 'Netzwerken richtig gemacht',
        content:
          'Online und offline Kontakte knüpfen, die zu Aufträgen führen.',
      },
      {
        id: 'content',
        title: 'Content Marketing',
        content:
          'Mit wertvollen Inhalten Expertise zeigen und Kunden anziehen.',
      },
      {
        id: 'preise',
        title: 'Preisgestaltung',
        content:
          'Wie Sie Ihre Preise selbstbewusst kommunizieren und durchsetzen.',
      },
    ],
  },
  {
    id: 6,
    slug: 'webdesign-prozess-2024',
    category: 'ALLGEMEIN',
    date: '09. September 2024',
    title: 'Mein Webdesign Prozess 2024 (Figma + Webflow)',
    excerpt:
      'Ein detaillierter Einblick in meinen bewährten Workflow vom ersten Kundengespräch bis zum Launch.',
    featuredImage: '/blog/design-process.jpg',
    author: {
      name: 'Bilgekaan Yilmaz',
      role: 'Webflow Experte',
      avatar: '/avatars/soenke.jpg',
    },
    readTime: '10 Min',
    featured: false,
    sections: [
      {
        id: 'discovery',
        title: 'Discovery Phase',
        content:
          'Alles beginnt mit dem Verständnis der Kundenbedürfnisse und Geschäftsziele.',
      },
      {
        id: 'design',
        title: 'Design in Figma',
        content:
          'Von Wireframes zu High-Fidelity Designs - mein strukturierter Designprozess.',
      },
      {
        id: 'development',
        title: 'Entwicklung in Webflow',
        content:
          'Effiziente Umsetzung mit Clean Code und optimaler Performance.',
      },
      {
        id: 'launch',
        title: 'Launch und darüber hinaus',
        content:
          'Testing, Optimierung und kontinuierliche Verbesserung nach dem Go-Live.',
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
