/**
 * Page Étude de Marché - Regnard Medical
 * Formulaire Tally dédié aux professionnels de santé
 * URL: /etude-marche
 * 
 * Design: Formulaire fullscreen sans scrollbar interne
 * Footer visible au scroll de la page
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
      
      {/* Main content with fullscreen form */}
      <main className="flex-1 w-full flex flex-col">
        {/* Fullscreen form container - takes full viewport height minus header */}
        <div className="w-full flex-1 pt-20" style={{ height: "calc(100vh - 80px)" }}>
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
        </div>

        {/* Footer - visible on scroll */}
        <div className="w-full border-t border-border bg-background">
          <Footer />
        </div>
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
  );
}
