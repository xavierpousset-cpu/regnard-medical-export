/**
 * Meta tags configuration for each page
 * Used to inject Open Graph, Twitter Card tags, and structured data for social media sharing and SEO
 */

export interface MetaTagsConfig {
  title: string;
  description: string;
  image: string;
  imageWidth?: number;
  imageHeight?: number;
  keywords?: string;
  structuredData?: Record<string, unknown>;
}

export const pageMetaTags: Record<string, MetaTagsConfig> = {
  '/oprep-divan': {
    title: 'O-PREP® DIVAN - Solution d\'hydrolavage colique pour EHPAD | Regnard Medical',
    description: 'O-PREP® DIVAN : solution d\'hydrolavage colique (ITA) pour EHPAD et milieu hospitalier. Système ergonomique, sécurisé, haute performance. Videodigest 2026. Demandez un devis.',
    keywords: 'O-PREP, O PREP, O\'PREP, hydrolavage colique, ITA, irrigation transanale, EHPAD, gériatrie, dispositif médical, préparation coloscopique',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663365995358/emZFRNSoPdeUeWX5JnxLkg/ImageOpenGraph_df52b19a.png',
    imageWidth: 1200,
    imageHeight: 630,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'O-PREP® DIVAN',
      description: 'Solution d\'hydrolavage colique (ITA) pour EHPAD et milieu hospitalier. Système ergonomique, sécurisé, haute performance avec réservoir de 30,5 litres.',
      image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663365995358/PkszOBngDOpNWnXd.png',
      brand: {
        '@type': 'Brand',
        name: 'Regnard Medical',
      },
      manufacturer: {
        '@type': 'Organization',
        name: 'Regnard Medical',
        url: 'https://www.regnardmedical.com',
      },
      category: 'Dispositif Médical - Irrigation Transanale',
      url: 'https://www.regnardmedical.com/oprep-divan',
    },
  },
  '/oprep-altesse': {
    title: 'O-PREP® ALTESSE - Hydrolavage colique avancé | Videodigest 2026',
    description: 'Découvrez O-PREP ALTESSE, notre solution d\'hydrolavage colique de nouvelle génération. En développement. Videodigest 2026.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663365995358/emZFRNSoPdeUeWX5JnxLkg/og-image-etude-marche-Wnit9fmvYijmqyF3CrugSh.webp',
    imageWidth: 1200,
    imageHeight: 630,
  },
  '/etude-marche': {
    title: 'Étude de marché O-PREP | Regnard Medical',
    description: 'Participez à notre étude de marché sur les solutions d\'hydrolavage colique. Vos retours nous aident à innover.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663365995358/emZFRNSoPdeUeWX5JnxLkg/og-image-etude-marche-Wnit9fmvYijmqyF3CrugSh.webp',
    imageWidth: 1200,
    imageHeight: 630,
  },
};

export function getMetaTagsForPath(path: string): MetaTagsConfig | null {
  // Remove query parameters and hash
  const cleanPath = path.split('?')[0].split('#')[0];
  return pageMetaTags[cleanPath] || null;
}

export function injectMetaTags(html: string, metaTags: MetaTagsConfig): string {
  let injectedHtml = html;

  // Inject meta tags
  const ogTags = `    <meta property="og:title" content="${escapeHtml(metaTags.title)}" />
    <meta property="og:description" content="${escapeHtml(metaTags.description)}" />
    <meta property="og:image" content="${metaTags.image}" />
    <meta property="og:image:width" content="${metaTags.imageWidth || 1200}" />
    <meta property="og:image:height" content="${metaTags.imageHeight || 630}" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="fr_FR" />
    ${metaTags.keywords ? `<meta name="keywords" content="${escapeHtml(metaTags.keywords)}" />` : ''}
    <link rel="canonical" href="https://www.regnardmedical.com${getCanonicalPath(metaTags.title)}" />
    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(metaTags.title)}" />
    <meta name="twitter:description" content="${escapeHtml(metaTags.description)}" />
    <meta name="twitter:image" content="${metaTags.image}" />`;

  // Replace the existing og tags with new ones
  const ogTagsPattern = /    <!-- Open Graph Meta Tags -->[\s\S]*?<!-- Twitter Card Meta Tags -->[\s\S]*?<meta name="twitter:image"[^>]*\/>/;

  if (ogTagsPattern.test(injectedHtml)) {
    injectedHtml = injectedHtml.replace(ogTagsPattern, `    <!-- Open Graph Meta Tags -->\n${ogTags}`);
  } else {
    // If pattern not found, inject before </head>
    injectedHtml = injectedHtml.replace('</head>', `    <!-- Open Graph Meta Tags -->\n${ogTags}\n</head>`);
  }

  // Inject structured data (JSON-LD)
  if (metaTags.structuredData) {
    const structuredDataScript = `    <script type="application/ld+json">\n${JSON.stringify(metaTags.structuredData, null, 2)}\n    </script>`;
    injectedHtml = injectedHtml.replace('</head>', `${structuredDataScript}\n</head>`);
  }

  return injectedHtml;
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}

function getCanonicalPath(title: string): string {
  // Extract path from title or use default
  if (title.includes('O-PREP® DIVAN')) return '/oprep-divan';
  if (title.includes('O-PREP® ALTESSE')) return '/oprep-altesse';
  if (title.includes('Étude de marché')) return '/etude-marche';
  return '/';
}
