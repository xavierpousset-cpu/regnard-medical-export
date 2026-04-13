/**
 * Page Étude de Marché - Regnard Medical
 * Formulaire Tally dédié aux professionnels de santé
 * URL: /etude-marche
 * 
 * Design: Formulaire fullscreen sans scrollbar interne
 */

import Header from "@/components/Header";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

export default function EtudeMarche() {
  useEffect(() => {
    // Charger le script Tally si nécessaire
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Étude de marché O-PREP | Regnard Medical</title>
        <meta name="description" content="Participez à notre étude de marché O-PREP et partagez vos retours d'expérience sur les solutions de préparation colique. Vos insights nous aident à développer des solutions toujours plus adaptées." />
        <meta property="og:title" content="Étude de marché O-PREP | Regnard Medical" />
        <meta property="og:description" content="Participez à notre étude de marché O-PREP et partagez vos retours d'expérience sur les solutions de préparation colique." />
        <meta property="og:image" content="https://d2xsxph8kpxj0f.cloudfront.net/310519663365995358/emZFRNSoPdeUeWX5JnxLkg/og-image-etude-marche-Wnit9fmvYijmqyF3CrugSh.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Étude de marché O-PREP | Regnard Medical" />
        <meta name="twitter:description" content="Participez à notre étude de marché O-PREP et partagez vos retours d'expérience." />
        <meta name="twitter:image" content="https://d2xsxph8kpxj0f.cloudfront.net/310519663365995358/emZFRNSoPdeUeWX5JnxLkg/og-image-etude-marche-Wnit9fmvYijmqyF3CrugSh.webp" />
      </Helmet>
      <div className="flex flex-col h-screen bg-background">
      <Header />
      
      {/* Fullscreen form - takes all remaining space */}
      <main className="flex-1 w-full overflow-hidden">
        <iframe
          data-tally-src="https://tally.so/r/xXZ8yo?transparentBackground=1"
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Étude de marché O-PREP — Regnard Medical"
          style={{
            border: "none",
            display: "block",
          }}
        />
      </main>

        {/* CSS to hide Tally iframe scrollbar only */}
        <style>{`
          iframe[data-tally-src] {
            scrollbar-width: none;
          }
          iframe[data-tally-src]::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </>
  );
}
