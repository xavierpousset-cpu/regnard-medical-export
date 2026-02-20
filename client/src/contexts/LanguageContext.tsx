import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations as translationDict } from '@/translations';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Utiliser les traductions du fichier translations.ts
const translations = translationDict as Record<Language, Record<string, string>>;

// Ancien dictionnaire (à supprimer après migration complète)
const oldTranslations: Record<Language, Record<string, string>> = {
  fr: {
    // Header
    'header.products': 'Nos produits',
    'header.services': 'Nos services',
    'header.forum': 'Forum',
    'header.faq': 'FAQ',
    'header.about': 'À propos',
    'header.contact': 'Contact',
    'header.login': 'Connexion',

    // Home
    'home.hero.title': 'Expertise et Innovation au service du Médical',
    'home.hero.subtitle': 'Réparation • Recherche • Développement',
    'home.hero.description': 'Partenaire technique des établissements de santé',
    'home.hero.cta1': 'Demander un diagnostic',
    'home.hero.cta2': 'Nous contacter',

    'home.expertise.title': 'Une expertise technique complète au service de vos équipements médicaux',
    'home.expertise.repair': 'Réparation',
    'home.expertise.repair.desc': 'Maintenance spécialisée',
    'home.expertise.research': 'Recherche & Développement',
    'home.expertise.research.desc': 'Conception de solutions techniques',
    'home.expertise.studies': 'Bureau d\'Études',
    'home.expertise.studies.desc': 'Analyse technique',

    // Products
    'products.divan.title': 'O-PREP®DIVAN',
    'products.altesse.title': 'O-PREP®ALTESSE',

    // Services
    'services.title': 'Nos services techniques et d\'innovation',

    // FAQ
    'faq.title': 'Questions Fréquemment Posées',
    'faq.description': 'Trouvez les réponses à vos questions sur nos services de maintenance, nos tarifs et nos conditions d\'intervention.',

    // Contact
    'contact.title': 'Nous contacter',
    'contact.description': 'Envoyez-nous votre demande',

    // About
    'about.title': 'À propos de Regnard Medical',

    // Forum
    'forum.title': 'Forum',

    // Footer
    'footer.legal': 'Mentions légales',
    'footer.privacy': 'Politique de confidentialité',
  },
  en: {
    // Header
    'header.products': 'Our Products',
    'header.services': 'Our Services',
    'header.forum': 'Forum',
    'header.faq': 'FAQ',
    'header.about': 'About',
    'header.contact': 'Contact',
    'header.login': 'Login',

    // Home
    'home.hero.title': 'Expertise and Innovation in Medical Services',
    'home.hero.subtitle': 'Repair • Research • Development',
    'home.hero.description': 'Technical partner for healthcare facilities',
    'home.hero.cta1': 'Request a Diagnosis',
    'home.hero.cta2': 'Contact Us',

    'home.expertise.title': 'Complete technical expertise for your medical equipment',
    'home.expertise.repair': 'Repair',
    'home.expertise.repair.desc': 'Specialized maintenance',
    'home.expertise.research': 'Research & Development',
    'home.expertise.research.desc': 'Technical solution design',
    'home.expertise.studies': 'Engineering Bureau',
    'home.expertise.studies.desc': 'Technical analysis',

    // Products
    'products.divan.title': 'O-PREP®DIVAN',
    'products.altesse.title': 'O-PREP®ALTESSE',

    // Services
    'services.title': 'Our technical and innovation services',

    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.description': 'Find answers to your questions about our maintenance services, rates and intervention conditions.',

    // Contact
    'contact.title': 'Contact Us',
    'contact.description': 'Send us your request',

    // About
    'about.title': 'About Regnard Medical',

    // Forum
    'forum.title': 'Forum',

    // Footer
    'footer.legal': 'Legal Notice',
    'footer.privacy': 'Privacy Policy',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    // Récupérer la langue du localStorage ou utiliser le français par défaut
    const saved = localStorage.getItem('language') as Language | null;
    return saved || 'fr';
  });

  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };

  // Sauvegarder la langue dans localStorage quand elle change
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
