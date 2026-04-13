/**
 * Page Étude de Marché - Regnard Medical
 * Formulaire Tally dédié aux professionnels de santé
 * URL: /etude-marche
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

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
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 w-full pt-24">
        <div className="container py-12">
          <div className="max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Étude de marché O-PREP
            </h1>
            <p className="text-lg text-muted-foreground">
              Participez à notre étude de marché et partagez vos retours d'expérience sur les solutions de préparation coloscopique. Vos insights nous aident à développer des solutions toujours plus adaptées aux besoins des professionnels de santé.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <iframe
              data-tally-src="https://tally.so/r/xXZ8yo?transparentBackground=1"
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Étude de marché O-PREP — Regnard Medical"
              style={{
                border: "none",
                minHeight: "800px",
              }}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
