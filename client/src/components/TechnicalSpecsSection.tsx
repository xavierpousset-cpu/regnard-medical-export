/**
 * Technical Specifications & Regulatory Compliance Section
 * Design: Blueprint/Data Sheet style with technical icons
 * Two-column layout: Technical Characteristics (left) | Standards & Safety (right)
 */

import {
  Droplet,
  Thermometer,
  Zap,
  Shield,
  CheckCircle2,
  Gauge,
  Filter,
  Wrench,
  FileCheck,
  AlertTriangle,
  Cpu,
  Waves,
} from "lucide-react";

export default function TechnicalSpecsSection() {
  const technicalSpecs = [
    {
      icon: Waves,
      label: "Principe de fonctionnement",
      value: "Irrigation colique par gravité naturelle (statique)",
    },
    {
      icon: Droplet,
      label: "Capacité de réserve",
      value: "Réservoir autonome de 30,5 Litres",
    },
    {
      icon: Gauge,
      label: "Hauteur de charge",
      value: "Positionnement fixe à 90 cm au-dessus du bassin patient",
    },
    {
      icon: Zap,
      label: "Pression constante",
      value: "0,7 PA",
    },
    {
      icon: Waves,
      label: "Débit moyen",
      value: "1,3 Litres / minute",
    },
    {
      icon: Thermometer,
      label: "Régulation thermique",
      value: "Eau maintenue à 37°C (Température physiologique)",
    },
    {
      icon: Filter,
      label: "Hygiène active",
      value: "Filtre UV + cycle d'auto-nettoyage en temps réel",
    },
    {
      icon: Cpu,
      label: "Pilotage interactif",
      value: "Console opérateur + Manette patient à air pulsé (Biofeedback)",
    },
  ];

  const complianceSpecs = [
    {
      icon: Shield,
      label: "Classification DM",
      value: "Classe I (Règlement UE 2017/745)",
    },
    {
      icon: FileCheck,
      label: "Système Qualité",
      value: "ISO 13485 (SMQ Dispositifs Médicaux)",
    },
    {
      icon: Zap,
      label: "Sécurité Électrique",
      value: "IEC 60601-1 (Appareils électromédicaux)",
    },
    {
      icon: Cpu,
      label: "Compatibilité Électromagnétique",
      value: "IEC 60601-1-2",
    },
    {
      icon: AlertTriangle,
      label: "Sécurité Thermique",
      value: "Arrêt d'urgence automatique par coupure de flux",
    },
    {
      icon: Wrench,
      label: "Installation",
      value: "Raccordement conforme aux normes sanitaires",
    },
    {
      icon: CheckCircle2,
      label: "Marquage CE",
      value: "Auto-déclaration de conformité (GSPR)",
    },
    {
      icon: Shield,
      label: "Gestion des Risques",
      value: "ISO 14971 - Analyse et réduction des risques",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-bold text-foreground mb-4">
            Fiche Technique & Référentiel Normatif
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            L'ingénierie et la garantie de conformité du O-PREP® DIVAN. Conçu et fabriqué en France selon le référentiel ISO 13485.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Technical Characteristics */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b-2 border-primary">
              <Wrench className="h-6 w-6 text-primary" strokeWidth={1.5} />
              <h3 className="font-semibold text-foreground text-lg">
                Caractéristiques Techniques
              </h3>
            </div>

            <div className="space-y-4">
              {technicalSpecs.map((spec, index) => (
                <div key={index} className="flex gap-4 p-4 bg-secondary rounded-lg border border-border hover:border-primary/50 transition-colors duration-200">
                  <spec.icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                      {spec.label}
                    </p>
                    <p className="text-foreground font-semibold text-sm leading-snug">
                      {spec.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Standards & Compliance */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b-2 border-primary">
              <Shield className="h-6 w-6 text-primary" strokeWidth={1.5} />
              <h3 className="font-semibold text-foreground text-lg">
                Normes & Conformité
              </h3>
            </div>

            <div className="space-y-4">
              {complianceSpecs.map((spec, index) => (
                <div key={index} className="flex gap-4 p-4 bg-secondary rounded-lg border border-border hover:border-primary/50 transition-colors duration-200">
                  <spec.icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                      {spec.label}
                    </p>
                    <p className="text-foreground font-semibold text-sm leading-snug">
                      {spec.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Insight Box */}
        <div className="mt-12 p-8 bg-primary/10 border-l-4 border-primary rounded-lg">
          <div className="flex gap-4">
            <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" strokeWidth={1.5} />
            <div>
              <p className="text-foreground font-semibold mb-2">
                Sécurité par la Physique
              </p>
              <p className="text-muted-foreground leading-relaxed">
                La pression du O-PREP® DIVAN est limitée physiquement par la hauteur du réservoir (90 cm), garantissant une basse pression constante de 0,7 PA, conforme aux recommandations de sécurité pour l'irrigation colique. Cette approche élimine les risques liés aux systèmes de régulation électronique.
              </p>
            </div>
          </div>
        </div>

        {/* Certification Note */}
        <div className="mt-8 p-6 bg-secondary rounded-lg border border-border">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong>Note importante :</strong> Même en tant que Dispositif Médical de Classe I, Regnard Medical s'impose la rigueur des classes supérieures en appliquant l'ISO 13485 dans sa totalité. Cette approche garantit la qualité et la fiabilité du O-PREP® DIVAN au-delà des exigences réglementaires minimales.
          </p>
        </div>
      </div>
    </section>
  );
}
