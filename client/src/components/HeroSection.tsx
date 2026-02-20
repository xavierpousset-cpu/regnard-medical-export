/**
 * Hero Section - Regnard Medical
 * Design: Industrial Minimalism
 * - Palette restreinte: blanc, gris béton, noir technique, accent bleu acier
 * - Typographie: DM Sans (display) + IBM Plex Sans (body)
 * - Pas d'animations superflues, focus sur la crédibilité
 */

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-background">
      {/* Background Image avec overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663365995358/fegrwvTyCSkprUFO.jpg"
          alt="Bureau d'études Regnard Medical"
          className="w-full h-full object-cover"
        />
        {/* Overlay noir pour lisibilité du texte */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl">
          {/* Main Title */}
          <h1 className="text-white mb-6 tracking-tight">
            {t('hero.title')}
          </h1>

          {/* Subtitle */}
          <div className="mb-12">
            <p className="text-xl text-white/90 font-medium mb-2">
              {t('hero.subtitle')}
            </p>
            <p className="text-lg text-white/80">
              {t('hero.description')}
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-150 text-base font-medium px-8 py-6"
            >
              {t('hero.cta1')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="border-2 border-white text-white hover:bg-white hover:text-foreground transition-colors duration-150 text-base font-medium px-8 py-6 bg-transparent"
            >
              {t('hero.cta2')}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-16 bg-white/30"></div>
      </div>
    </section>
  );
}
