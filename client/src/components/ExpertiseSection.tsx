/**
 * Expertise Section - Regnard Medical
 * Design: Industrial Minimalism
 * - 3 colonnes avec séparateurs verticaux
 * - Icônes minimalistes
 * - Espacement généreux
 */

import { Wrench, FlaskConical, Ruler } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const getExpertiseItems = (t: (key: string) => string) => [
  {
    icon: Wrench,
    title: t('expertise.repair'),
    items: [
      t('expertise.repair.desc'),
      "Remise en conformité",
      "Prolongation du cycle de vie",
    ],
  },
  {
    icon: FlaskConical,
    title: t('expertise.research'),
    items: [
      t('expertise.research.desc'),
      "Prototypage",
      "Optimisation fonctionnelle",
    ],
  },
  {
    icon: Ruler,
    title: t('expertise.studies'),
    items: [
      t('expertise.studies.desc'),
      "Amélioration produit",
      "Développement sur mesure",
    ],
  },
];

export default function ExpertiseSection() {
  const { t } = useLanguage();
  const expertiseItems = getExpertiseItems(t);
  
  return (
    <section className="py-32 bg-background">
      <div className="container">
        {/* Title */}
        <h2 className="mb-20 max-w-2xl">
          {t('expertise.title')}
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {expertiseItems.map((item, index) => (
            <div key={index} className="relative">
              {/* Vertical guide line - Industrial Minimalism signature */}
              {index < expertiseItems.length - 1 && (
                <div className="hidden md:block absolute top-0 -right-4 w-px h-full bg-border"></div>
              )}

              {/* Icon */}
              <div className="mb-6">
                <item.icon className="h-12 w-12 text-primary" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="mb-6 font-display font-semibold text-foreground">
                {item.title}
              </h3>

              {/* Items */}
              <ul className="space-y-3">
                {item.items.map((listItem, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-3 mt-2 h-1 w-1 flex-shrink-0 bg-foreground"></span>
                    <span className="text-muted-foreground">{listItem}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
