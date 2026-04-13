import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

/**
 * Composant EhpadStudySection
 * Section 4 de la page d'accueil
 * Invitation à participer à l'étude EHPAD
 * Design : Industrial Minimalism
 */
export default function EhpadStudySection() {
  const [, navigate] = useLocation();

  return (
    <section className="py-8 md:py-20 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          {/* Titre principal */}
          <h2 className="text-4xl font-bold text-foreground mb-6 leading-tight">
            Directeur d'EHPAD? Participez à notre étude sur la prise en charge de l'inconfort digestif.
          </h2>

          {/* Texte descriptif */}
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Nous menons une étude sur la gestion des troubles du transit (constipation sévère, fécalomes). L'objectif est de valider l'apport de notre nouvelle solution d'irrigation automatisée pour améliorer le confort des résidents et simplifier le travail des soignants.
          </p>

          {/* Bouton d'action */}
          <Button
            onClick={() => navigate("/etude-marche")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            Répondre au questionnaire
          </Button>
        </div>
      </div>
    </section>
  );
}
