/**
 * Hero Section - Regnard Medical
 * Design: Industrial Minimalism
 * - Palette restreinte: blanc, gris béton, noir technique, accent bleu acier
 * - Typographie: DM Sans (display) + IBM Plex Sans (body)
 * - Pas d'animations superflues, focus sur la crédibilité
 */

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-background">
      {/* Background Image avec overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://private-us-east-1.manuscdn.com/sessionFile/V8tu5qMPe1byRexDgMU2NQ/sandbox/BndEUYCABGUfi8qq8lXOOF-img-1_1771423114000_na1fn_aGVyby1tZWRpY2FsLWxhYg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVjh0dTVxTVBlMWJ5UmV4RGdNVTJOUS9zYW5kYm94L0JuZEVVWUNBQkdVZmk4cXE4bFhPT0YtaW1nLTFfMTc3MTQyMzExNDAwMF9uYTFmbl9hR1Z5YnkxdFpXUnBZMkZzTFd4aFlnLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=KO5j0BZmGok379a2SCYfybZrGRuOXjCbnLqDi54p~URFsjqKDzuY5zALt1P7ympgjy1dNY-kDQkjxgzxorJTh3fj~2ft5TY2rXo-eov5eTSXJWe1MnccH1~IEuWF5vXJqMlwTisIkOtfn90Z1am4mXIOEyHKtFRunx26DHabKUqcZ44lDeTvONqTxFAMIGMZUdKdOVQd~051sorphKW4Cm6OcGLH1l4HT2ia6wf5-Szg8PG3ROz0amxLuFo8Vbz3wEhtnY~1C~jmfmGzkTJnLQeiZHwNRCEr7RzcelHBDNA4GV-~DQPEipZCgj~wxXoZV63pWt3yBtw-ZCwWF5rBJw__"
          alt="Laboratoire médical moderne"
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient pour lisibilité du texte - couleur sombre sur image claire */}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/50"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl">
          {/* Section number - Industrial Minimalism signature */}
          <div className="section-number mb-8 text-white/60">01 — Accueil</div>

          {/* Main Title */}
          <h1 className="text-white mb-6 tracking-tight">
            Expertise et Innovation au service du Médical
          </h1>

          {/* Subtitle */}
          <div className="mb-12">
            <p className="text-xl text-white/90 font-medium mb-2">
              Réparation • Recherche • Développement
            </p>
            <p className="text-lg text-white/80">
              Partenaire technique des établissements de santé
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-150 text-base font-medium px-8 py-6"
            >
              Demander un diagnostic
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="border-2 border-white text-white hover:bg-white hover:text-foreground transition-colors duration-150 text-base font-medium px-8 py-6 bg-transparent"
            >
              Nous contacter
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
