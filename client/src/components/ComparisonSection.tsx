/**
 * Comparison Section - O-PREP DIVAN vs Standard Systems
 * Design: Industrial Minimalism with Data Clarity
 */

import { CheckCircle2, AlertCircle } from "lucide-react";

export default function ComparisonSection() {
  const comparisonData = [
    {
      category: "Sécurité de Pression",
      oprep: "Gravité Naturelle (Physique)",
      standard: "Régulation Électronique (Pompe)",
      oprep_highlight: true,
    },
    {
      category: "Confort Patient",
      oprep: "Manette Interactive à air",
      standard: "Soin Passif",
      oprep_highlight: true,
    },
    {
      category: "Hygiène Active",
      oprep: "Filtre UV + Protocole Auto",
      standard: "Filtration Mécanique simple",
      oprep_highlight: true,
    },
    {
      category: "Ergonomie",
      oprep: "Unité de soin intégrée",
      standard: "Appareil mural (table séparée)",
      oprep_highlight: true,
    },
    {
      category: "Précision Thermique",
      oprep: "37°C constant (30,5L)",
      standard: "Mitigeur variable",
      oprep_highlight: true,
    },
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-bold text-foreground mb-4">
            L'Excellence Technologique au service de la Sécurité
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Pourquoi O-PREP® DIVAN redéfinit les standards de l'irrigation colique médicale.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-4 px-6 font-semibold text-foreground bg-background">
                  Caractéristiques
                </th>
                <th className="text-left py-4 px-6 font-semibold text-white bg-primary">
                  O-PREP® DIVAN
                </th>
                <th className="text-left py-4 px-6 font-semibold text-foreground bg-background">
                  Systèmes Standards
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr
                  key={index}
                  className={`border-b border-border hover:bg-background/50 transition-colors duration-200 ${
                    index % 2 === 0 ? "bg-background/30" : ""
                  }`}
                >
                  <td className="py-4 px-6 font-medium text-foreground">
                    {row.category}
                  </td>
                  <td className="py-4 px-6 text-white bg-primary/95">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" strokeWidth={2} />
                      <span className="text-sm leading-relaxed">{row.oprep}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5 text-muted-foreground/50" strokeWidth={1.5} />
                      <span className="text-sm leading-relaxed">{row.standard}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Key Insight */}
        <div className="mt-12 p-8 bg-background border-l-4 border-primary rounded-lg">
          <p className="text-lg text-foreground leading-relaxed">
            <strong>O-PREP® DIVAN</strong> combine la sécurité physique de la gravité naturelle avec une ergonomie intégrée et une hygiène active, offrant une solution complète et fiable pour les professionnels de santé.
          </p>
        </div>
      </div>
    </section>
  );
}
