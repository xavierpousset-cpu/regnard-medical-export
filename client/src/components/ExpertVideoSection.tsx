/**
 * Expert Video Section
 * Featuring Dr. Christian L'hirondel, gastroenterologist and scientific advisor
 * YouTube video embedded with key takeaways
 */

import { Clock, Lightbulb } from "lucide-react";

export default function ExpertVideoSection() {
  const keyPoints = [
    {
      title: "Comprendre le colon",
      description: "Une explication pédagogique sur le fonctionnement du système digestif et l'importance du microbiote",
      timestamp: "07:17",
    },
    {
      title: "L'évolution du soin",
      description: "Pourquoi le passage à la position allongée a révolutionné la technique du lavement dès le XIXe siècle",
      timestamp: "17:44",
    },
    {
      title: "Innovation Regnard Medical",
      description: "Présentation du divan comme une \"première mondiale\" combinant confort absolu et sécurité gravitaire",
      timestamp: "16:29",
    },
    {
      title: "Focus Technologie",
      description: "Les détails sur la filtration d'eau stérile, la désinfection automatique et le contrôle par effet Doppler",
      timestamp: "20:34",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-bold text-foreground mb-4">
            Le mot du Gastro-entérologue
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Découvrez l'intervention du Dr Christian L'hirondel, gastro-entérologue et conseiller scientifique de Regnard Medical, lors de sa conférence sur la physiologie digestive et l'innovation technologique du divan.
          </p>
        </div>

        {/* Video and Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Video Column (spans 2 columns on large screens) */}
          <div className="lg:col-span-2">
            <div className="relative w-full bg-black rounded-2xl overflow-hidden shadow-lg">
              {/* YouTube Embed */}
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/mqtNrQ7nJVQ"
                  title="Le mot du Gastro-entérologue : Pourquoi choisir O-PREP ?"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Key Takeaways Column */}
          <div className="lg:col-span-1">
            <div className="bg-secondary rounded-2xl p-8 border border-border h-full flex flex-col">
              <h3 className="font-semibold text-foreground mb-6 flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-primary" strokeWidth={1.5} />
                L'Essentiel de la conférence
              </h3>
              <div className="space-y-4 flex-1">
                {keyPoints.map((point, index) => (
                  <div key={index} className="pb-4 border-b border-border last:border-b-0 last:pb-0">
                    <p className="text-sm font-semibold text-foreground mb-1">
                      {point.title}
                    </p>
                    <p className="text-xs text-muted-foreground leading-snug mb-2">
                      {point.description}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-primary font-medium">
                      <Clock className="h-3 w-3" strokeWidth={2} />
                      {point.timestamp}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Expert Bio */}
        <div className="mt-12 p-8 bg-secondary rounded-2xl border border-border">
          <h4 className="font-semibold text-foreground mb-3">
            Dr Christian L'hirondel
          </h4>
          <p className="text-muted-foreground leading-relaxed">
            Gastro-entérologue et conseiller scientifique de Regnard Medical. Son expertise en physiologie digestive et sa vision de l'innovation technologique au service du patient font de lui un partenaire clé dans le développement du O-PREP® DIVAN.
          </p>
        </div>
      </div>
    </section>
  );
}
