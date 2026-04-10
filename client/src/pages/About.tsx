/**
 * About Page - Regnard Medical
 * Page "À propos" professionnelle, humaine et crédible
 * Design: Industrial Minimalism
 */

import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLocation } from "wouter";

export default function About() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24">
        {/* Hero Section with Image */}
        <section className="relative py-32 overflow-hidden">
          {/* Background Image with Dark Overlay */}
          <div className="absolute inset-0">
            <img
              src="/atelier-regnard.jpg"
              alt="Atelier Regnard Medical - Conception et fabrication de dispositifs médicaux innovants"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Content */}
          <div className="relative container z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-white mb-6">
                Une expertise industrielle au service du soin
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                L'alliance de la précision technique et de l'expérience médicale.
              </p>
            </div>
          </div>
        </section>

        {/* La Genèse d'O-PREP®DIVAN Section */}
        <section className="py-20 bg-secondary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="mb-12">
                La genèse d'O-PREP®DIVAN
              </h2>

              <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
                <p>
                  O-PREP®DIVAN est le fruit d'un travail collaboratif entre pratique clinique et ingénierie technique. À partir des besoins identifiés en service d'endoscopie et en gérontologie, la solution a été conçue pour sécuriser les phases préparatoires, améliorer l'ergonomie pour les soignants et renforcer le confort et la stabilité des patients.
                </p>

                <p>
                  Le développement s'est appuyé sur un processus rigoureux : prototypage, tests terrain, ajustements techniques et retours d'expérience clinique. Chaque itération a intégré les observations des professionnels de santé pour aboutir à une solution réellement adaptée aux réalités hospitalières.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Notre ADN Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="mb-16">
                Notre ADN
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Pilier 1 */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <h3 className="text-foreground font-semibold">
                      Rigueur industrielle
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Maîtrise mécanique, précision, durabilité. Des solutions conçues pour fonctionner dans les environnements les plus exigeants.
                  </p>
                </div>

                {/* Pilier 2 */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <h3 className="text-foreground font-semibold">
                      Collaboration médicale
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Développement en lien direct avec les professionnels de santé. Chaque innovation est validée sur le terrain.
                  </p>
                </div>

                {/* Pilier 3 */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <h3 className="text-foreground font-semibold">
                      Innovation utile
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Des solutions concrètes, pensées pour le terrain. Pas de gadget, mais des réponses aux vrais besoins.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Engagement Section */}
        <section className="py-20 bg-secondary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="mb-12">
                Vision et engagement
              </h2>

              <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Nous croyons que l'innovation médicale doit être pragmatique, utile et sécurisée. Regnard Medical s'engage à développer des solutions fiables, durables et adaptées aux réalités hospitalières, conformes aux exigences réglementaires les plus strictes.
                </p>

                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-foreground font-medium">
                      Fiabilité : des solutions testées et éprouvées en environnement réel
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-foreground font-medium">
                      Durabilité : des produits conçus pour durer et accompagner l'évolution des pratiques
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-foreground font-medium">
                      Conformité : respect des exigences réglementaires et normes de qualité
                    </p>
                  </div>
                </div>

                <p className="pt-8 font-semibold text-foreground">
                  Notre ambition : devenir un partenaire technique reconnu des établissements de santé.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ancrage & Fabrication Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="mb-12">
                Ancrage et fabrication
              </h2>

              <div className="bg-secondary border border-border rounded-lg p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-1 h-12 bg-primary rounded-full"></div>
                  <div>
                    <h3 className="text-foreground font-semibold mb-2">
                      Conception française
                    </h3>
                    <p className="text-muted-foreground">
                      Nos solutions sont développées en France, par une équipe qui connaît les réalités du terrain médical français.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-1 h-12 bg-primary rounded-full"></div>
                  <div>
                    <h3 className="text-foreground font-semibold mb-2">
                      Développement interne
                    </h3>
                    <p className="text-muted-foreground">
                      Maîtrise complète de la chaîne de conception et de production, garantissant qualité et réactivité.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-1 h-12 bg-primary rounded-full"></div>
                  <div>
                    <h3 className="text-foreground font-semibold mb-2">
                      Vision long terme
                    </h3>
                    <p className="text-muted-foreground">
                      Nous investissons pour la durabilité et l'amélioration continue, pas pour des résultats court-termistes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-white mb-6">
                Parlons de votre projet
              </h2>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Vous avez une problématique en endoscopie, gérontologie ou préparation coloscopique ? Découvrez comment nos solutions peuvent améliorer votre pratique.
              </p>
              <Button
                size="lg"
                onClick={() => window.location.href = '/contact'}
                className="bg-white text-primary hover:bg-gray-100 transition-colors duration-150 font-semibold"
              >
                Nous contacter
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
