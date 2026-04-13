/**
 * VideodigestBanner Component
 * Affiche un insert promotionnel pour Videodigest 2026
 * Utilisé sur la homepage et les pages produits
 */

import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin } from "lucide-react";

interface VideodigestBannerProps {
  variant?: "compact" | "full";
  showImage?: boolean;
}

export default function VideodigestBanner({
  variant = "full",
  showImage = true,
}: VideodigestBannerProps) {
  const logoUrl =
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663365995358/emZFRNSoPdeUeWX5JnxLkg/VD26_Logo_dffa1da5.jpg";
  const bannerUrl =
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663365995358/emZFRNSoPdeUeWX5JnxLkg/VD26_Bandeau_1200x200px97825895_b071d12b.webp";

  if (variant === "compact") {
    return (
      <div className="bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 rounded-lg p-6 my-8">
        <div className="flex items-center gap-4">
          {showImage && (
            <div className="flex-shrink-0 w-24 h-24">
              <img
                src={logoUrl}
                alt="Videodigest 2026"
                className="w-full h-full object-contain"
              />
            </div>
          )}
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Regnard Medical à Videodigest 2026
            </h3>
            <p className="text-sm text-gray-700 mb-4">
              Rejoignez-nous au Palais des Congrès de Paris pour découvrir nos
              innovations en endoscopie digestive.
            </p>
            <div className="flex gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>18-20 nov. 2026</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>Paris</span>
              </div>
            </div>
          </div>
          <Button className="flex-shrink-0 bg-sky-600 hover:bg-sky-700">
            En savoir plus
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="my-12 rounded-xl overflow-hidden bg-gradient-to-br from-sky-900 to-blue-900 text-white">
      {/* Header avec logo */}
      <div className="relative overflow-hidden">
        {showImage && (
          <div className="absolute inset-0 opacity-20">
            <img
              src={bannerUrl}
              alt="Videodigest background"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="relative px-8 py-12 sm:px-12 sm:py-16">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 bg-white rounded-lg p-2">
              <img
                src={logoUrl}
                alt="Videodigest 2026"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                Videodigest 2026
              </h2>
              <p className="text-sky-100 text-lg">
                Rejoignez Regnard Medical à Paris
              </p>
            </div>
          </div>

          {/* Détails de l'événement */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="flex items-start gap-3">
              <Calendar className="w-6 h-6 text-sky-300 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Dates</p>
                <p className="text-sky-100">18-20 novembre 2026</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-6 h-6 text-sky-300 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Lieu</p>
                <p className="text-sky-100">Palais des Congrès, Paris</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8 max-w-2xl">
            <h3 className="text-xl font-bold mb-3">
              Découvrez nos innovations en préparation colique
            </h3>
            <p className="text-sky-100 mb-4">
              Regnard Medical sera présent avec un stand dédié et une
              présentation de 10 minutes sur nos solutions. Venez nous rencontrer et discuter des dernières
              avancées en préparation colique.
            </p>
            <ul className="space-y-2 text-sky-100">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-sky-300 rounded-full"></span>
                Pitch de 10 minutes sur nos produits
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-sky-300 rounded-full"></span>
                Stand d'exposition avec démonstrations
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-white text-sky-900 hover:bg-sky-50 font-semibold"
            >
              En savoir plus
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Footer avec infos pratiques */}
      <div className="bg-sky-950/50 px-8 py-6 sm:px-12 border-t border-sky-700">
        <p className="text-sky-200 text-sm">
          Videodigest est le congrès de référence pour les gastro-entérologues
          francophones. Plus de 2000 participants attendus.
        </p>
      </div>
    </div>
  );
}
