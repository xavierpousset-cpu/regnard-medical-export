/**
 * Values Section - Regnard Medical
 * Design: Industrial Minimalism
 * - 3 piliers : Expertise, Fiabilité, Innovation
 * - Layout horizontal avec séparateurs
 */

import { Award, Shield, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Expertise",
    description:
      "Une maîtrise technique approfondie des dispositifs médicaux, acquise par des années d'expérience terrain et une formation continue de nos équipes.",
  },
  {
    icon: Shield,
    title: "Fiabilité",
    description:
      "Des processus rigoureux, des contrôles qualité systématiques et un engagement de résultat pour garantir la conformité et la sécurité de vos équipements.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Une capacité R&D interne qui nous permet de concevoir des solutions sur mesure, d'optimiser les équipements existants et d'anticiper les besoins futurs.",
  },
];

export default function ValuesSection() {
  return (
    <section className="py-32 bg-background">
      <div className="container">
        {/* Section number */}
        <div className="section-number mb-8">04 — Valeurs</div>

        {/* Title */}
        <h2 className="mb-20 max-w-2xl">
          Nos engagements
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {values.map((value, index) => (
            <div key={index} className="relative">
              {/* Vertical guide line */}
              {index < values.length - 1 && (
                <div className="hidden md:block absolute top-0 -right-4 w-px h-full bg-border"></div>
              )}

              {/* Icon */}
              <div className="mb-6">
                <value.icon className="h-12 w-12 text-primary" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="mb-4 font-display font-semibold text-foreground">
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
