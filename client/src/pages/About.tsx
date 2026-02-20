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
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const [, setLocation] = useLocation();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="py-12 md:py-24 bg-gradient-to-b from-secondary to-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-white mb-6">
                {t('about.hero.title')}
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                {t('about.hero.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* L'Histoire Section */}
        <section className="py-8 md:py-20 bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="mb-12">
                {t('about.story.heading')}
              </h2>

              <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
                <p>
                  {t('about.story.p1')}
                </p>

                <p>
                  {t('about.story.p2')}
                </p>

                <p className="font-semibold text-foreground">
                  {t('about.story.p3')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* La Genèse d'O-PREP®DIVAN Section */}
        <section className="py-8 md:py-20 bg-secondary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="mb-12">
                {t('about.genesis.heading')}
              </h2>

              <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
                <p>
                  {t('about.genesis.p1')}
                </p>

                <p>
                  {t('about.genesis.p2')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Notre ADN Section */}
        <section className="py-8 md:py-20 bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="mb-16">
                {t('about.dna.heading')}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Pilier 1 */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <h3 className="text-foreground font-semibold">
                      {t('about.dna.rigor')}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('about.dna.rigor.desc')}
                  </p>
                </div>

                {/* Pilier 2 */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <h3 className="text-foreground font-semibold">
                      {t('about.dna.collaboration')}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('about.dna.collaboration.desc')}
                  </p>
                </div>

                {/* Pilier 3 */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <h3 className="text-foreground font-semibold">
                      {t('about.dna.innovation')}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('about.dna.innovation.desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Engagement Section */}
        <section className="py-8 md:py-20 bg-secondary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="mb-12">
                {t('about.vision.heading')}
              </h2>

              <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
                <p>
                  {t('about.vision.p1')}
                </p>

                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-foreground font-medium">
                      {t('about.vision.reliability')}
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-foreground font-medium">
                      {t('about.vision.durability')}
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-foreground font-medium">
                      {t('about.vision.compliance')}
                    </p>
                  </div>
                </div>

                <p className="pt-8 font-semibold text-foreground">
                  {t('about.vision.ambition')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ancrage & Fabrication Section */}
        <section className="py-8 md:py-20 bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="mb-12">
                {t('about.manufacturing.heading')}
              </h2>

              <div className="bg-secondary border border-border rounded-lg p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-1 h-12 bg-primary rounded-full"></div>
                  <div>
                    <h3 className="text-foreground font-semibold mb-2">
                      {t('about.manufacturing.design')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('about.manufacturing.design.desc')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-1 h-12 bg-primary rounded-full"></div>
                  <div>
                    <h3 className="text-foreground font-semibold mb-2">
                      {t('about.manufacturing.development')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('about.manufacturing.development.desc')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-1 h-12 bg-primary rounded-full"></div>
                  <div>
                    <h3 className="text-foreground font-semibold mb-2">
                      {t('about.manufacturing.vision')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('about.manufacturing.vision.desc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 md:py-20 bg-secondary">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-white mb-6">
                {t('about.cta.heading')}
              </h2>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                {t('about.cta.description')}
              </p>
              <Button
                size="lg"
                onClick={() => window.location.href = '/contact'}
                className="bg-white text-secondary hover:bg-white/90 transition-colors duration-150 font-medium"
              >
                {t('about.cta.button')}
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
