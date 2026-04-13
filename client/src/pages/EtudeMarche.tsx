/**
 * Page Étude de Marché - Regnard Medical
 * Formulaire Tally dédié aux professionnels de santé
 * URL: /etude-marche
 * 
 * Design: Formulaire fullscreen avec header et footer qui n'apparaît qu'au scroll
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

export default function EtudeMarche() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    // Charger le script Tally si nécessaire
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Gérer la visibilité du footer au scroll
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const clientHeight = window.innerHeight;
      
      // Afficher le footer si on est proche du bas (500px)
      const isNearBottom = scrollHeight - (scrollTop + clientHeight) < 500;
      setShowFooter(isNearBottom);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background overflow-x-hidden">
      <Header />
      
      {/* Main content with fullscreen form */}
      <main className="flex-1 w-full flex flex-col pt-20">
        {/* Intro section - minimal */}
        <div className="bg-background border-b border-border py-8 px-4">
          <div className="container max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Étude de marché O-PREP
            </h1>
            <p className="text-base text-muted-foreground">
              Participez à notre étude et partagez vos retours d'expérience
            </p>
          </div>
        </div>

        {/* Fullscreen form container */}
        <div className="flex-1 w-full flex items-center justify-center px-4 py-8">
          <div className="w-full max-w-4xl">
            <iframe
              data-tally-src="https://tally.so/r/xXZ8yo?transparentBackground=1"
              width="100%"
              height="900"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Étude de marché O-PREP — Regnard Medical"
              style={{
                border: "none",
                borderRadius: "8px",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
              }}
            />
          </div>
        </div>

        {/* Hidden footer section - appears only on scroll */}
        {showFooter && (
          <div className="w-full border-t border-border">
            <Footer />
          </div>
        )}
      </main>

      {/* CSS to hide scrollbar */}
      <style>{`
        html {
          scrollbar-width: none;
        }
        html::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
