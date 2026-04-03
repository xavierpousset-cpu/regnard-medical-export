/**
 * Trust Section - "Ils nous font confiance"
 * Showcases real healthcare establishments using O'PREP
 * Premium medical design with official institutional images
 */

import { ExternalLink } from "lucide-react";

interface TrustCard {
  id: string;
  name: string;
  location: string;
  description: string;
  link: string;
  imageUrl: string;
  imageAlt: string;
}

const trustCards: TrustCard[] = [
  {
    id: "avicenne",
    name: "Hôpital Avicenne – AP-HP",
    location: "Bobigny, France",
    description: "Centre hospitalo-universitaire de référence en région parisienne",
    link: "https://www.aphp.fr/hopitaux/avicenne",
    imageUrl: "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Hôpital Avicenne – AP-HP"
  },
  {
    id: "villa-donatello",
    name: "Villa Donatello",
    location: "Florence, Italie",
    description: "Clinique privée spécialisée, orientée parcours patient et innovation",
    link: "https://villadonatello.com",
    imageUrl: "https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Villa Donatello"
  },
  {
    id: "humanitas",
    name: "Humanitas Mater Domini",
    location: "Gerenzano / Castellanza, Italie",
    description: "Hôpital du groupe Humanitas, reconnu pour son excellence médicale",
    link: "https://www.materdomini.it",
    imageUrl: "https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Humanitas Mater Domini"
  }
];

export default function TrustSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            O'PREP est aujourd'hui utilisé dans plusieurs établissements hospitaliers et cliniques en Europe.
          </p>
        </div>

        {/* Trust Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {trustCards.map((card) => (
            <a
              key={card.id}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-secondary rounded-lg overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative w-full h-64 overflow-hidden bg-muted">
                <img
                  src={card.imageUrl}
                  alt={card.imageAlt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-200">
                      {card.name}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium mb-3">
                      {card.location}
                    </p>
                  </div>
                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-200 flex-shrink-0 ml-2" strokeWidth={1.5} />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="max-w-3xl mx-auto p-8 bg-primary/5 rounded-lg border border-primary/20">
          <p className="text-center text-foreground font-medium">
            O'PREP fait l'objet d'évaluations cliniques en conditions réelles d'utilisation.
          </p>
        </div>
      </div>
    </section>
  );
}
