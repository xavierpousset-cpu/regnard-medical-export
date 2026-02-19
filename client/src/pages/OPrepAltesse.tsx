/**
 * O-PREP ALTESSE Product Page
 * Design: Industrial Minimalism with Human Touch
 * - Professional, accessible, focused on simplicity and integration
 * - Lightweight solution replacing traditional toilet seat
 */

import { Button } from "@/components/ui/button";
import { CheckCircle2, Zap, Home, Users, Wrench, Award } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function OPrepAltesse() {
  const [formData, setFormData] = useState({
    name: "",
    function: "",
    establishment: "",
    structureType: "",
    email: "",
    phone: "",
    estimatedNeed: "",
    message: "",
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Votre demande de devis a été envoyée. Réponse sous 48h ouvrées.");
    setFormData({
      name: "",
      function: "",
      establishment: "",
      structureType: "",
      email: "",
      phone: "",
      estimatedNeed: "",
      message: "",
    });
  };

  const scrollToForm = () => {
    const form = document.getElementById("devis-form");
    form?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSurvey = () => {
    window.open("https://tally.so/r/ZjN5py?transparentBackground=1", "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-background to-secondary">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              O-PREP®ALTESSE
            </h1>
            <p className="text-2xl text-primary font-semibold mb-6">
              Préparation coloscopique accessible et discrète
            </p>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Une solution légère et intégrée, pensée pour les environnements où la simplicité et l'accessibilité sont prioritaires.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToForm}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold"
              >
                Demander un devis
              </Button>
              <Button
                onClick={scrollToSurvey}
                variant="outline"
                className="border-2 border-foreground px-8 py-6 text-base font-semibold"
              >
                Participer à l'enquête terrain
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Description */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold text-foreground mb-8">Une solution légère et intégrée</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                O-PREP®ALTESSE est une solution allégée et discrète conçue pour faciliter la préparation à la coloscopie. En remplaçant simplement la cuvette de WC traditionnelle, elle offre une approche moins invasive et plus accessible, particulièrement adaptée aux environnements où l'installation d'équipements complets n'est pas possible.
              </p>
              <div className="bg-secondary p-8 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-6">Caractéristiques principales :</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span>Installation simple et rapide</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span>Remplacement direct de la cuvette existante</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span>Discrétion et confort du patient</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span>Facilité d'utilisation pour les soignants</span>
                  </li>
                </ul>
              </div>
              <p>
                O-PREP®ALTESSE s'intègre naturellement dans les environnements existants sans nécessiter de modifications structurelles. Elle offre une alternative pragmatique et efficace pour les établissements cherchant une solution de préparation coloscopique accessible et discrète.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specific Benefits */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <h2 className="text-4xl font-bold text-foreground mb-16">Bénéfices spécifiques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Installation rapide",
                description: "Mise en place simple sans travaux ou modifications complexes.",
              },
              {
                icon: Home,
                title: "Intégration discrète",
                description: "S'adapte aux environnements existants sans altération visuelle.",
              },
              {
                icon: Users,
                title: "Confort du patient",
                description: "Approche moins invasive, plus respectueuse de la dignité.",
              },
              {
                icon: Wrench,
                title: "Maintenance simplifiée",
                description: "Entretien facile et nettoyage adapté aux protocoles standards.",
              },
              {
                icon: Award,
                title: "Accessibilité accrue",
                description: "Solution adaptée aux établissements de toutes tailles.",
              },
              {
                icon: CheckCircle2,
                title: "Efficacité éprouvée",
                description: "Préparation coloscopique optimale avec approche légère.",
              },
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-background p-8 rounded-lg border border-border hover:border-primary transition-colors duration-150">
                  <Icon className="h-8 w-8 text-primary mb-4" strokeWidth={1.5} />
                  <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Organizational Impact */}
      <section className="py-24 bg-background">
        <div className="container">
          <h2 className="text-4xl font-bold text-foreground mb-8">Impact organisationnel pour les décideurs</h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-3xl">
            O-PREP®ALTESSE contribue à l'amélioration opérationnelle et financière de votre structure :
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
            {[
              "Réduction des coûts d'installation et d'infrastructure",
              "Amélioration de l'accessibilité pour tous les patients",
              "Simplification des protocoles de préparation",
              "Augmentation de la satisfaction des patients et des familles",
            ].map((item, index) => (
              <div key={index} className="flex items-start p-6 bg-secondary rounded-lg border border-border">
                <CheckCircle2 className="h-6 w-6 text-primary mr-4 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Validation */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <h2 className="text-4xl font-bold text-foreground mb-12">Confiance & Validation</h2>
          <div className="max-w-3xl bg-background p-12 rounded-lg border-2 border-primary">
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Une innovation développée sur le terrain, validée par l'usage et l'expertise médicale.
            </p>
            <ul className="space-y-4">
              {[
                "✔ Testé en environnement clinique",
                "✔ Développé avec des professionnels de santé",
                "✔ Solution accessible et pragmatique",
                "✔ Conception française",
                "✔ Système breveté / en cours de dépôt",
                "✔ Conforme aux exigences des dispositifs médicaux",
              ].map((item, index) => (
                <li key={index} className="text-foreground font-medium">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Survey Section */}
      <section className="py-24 bg-background">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-bold text-foreground mb-6">Participez à l'amélioration des pratiques</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Nous menons une enquête auprès des établissements de santé et EHPAD afin d'adapter nos solutions aux réalités du terrain.
          </p>
          <Button
            onClick={scrollToSurvey}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold"
          >
            Accéder au questionnaire
          </Button>
        </div>
      </section>

      {/* Quote Form */}
      <section id="devis-form" className="py-24 bg-secondary">
        <div className="container max-w-2xl">
          <h2 className="text-4xl font-bold text-foreground mb-12">Demander un devis personnalisé</h2>
          <form onSubmit={handleFormSubmit} className="space-y-6 bg-background p-8 rounded-lg border border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Nom *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Fonction *</label>
                <input
                  type="text"
                  name="function"
                  value={formData.function}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  placeholder="Cadre de santé, Direction, etc."
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Établissement *</label>
                <input
                  type="text"
                  name="establishment"
                  value={formData.establishment}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  placeholder="Nom de l'établissement"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Type de structure *</label>
                <select
                  name="structureType"
                  value={formData.structureType}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                >
                  <option value="">Sélectionner...</option>
                  <option value="EHPAD">EHPAD</option>
                  <option value="CH">Centre Hospitalier</option>
                  <option value="Clinique">Clinique</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  placeholder="votre.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Téléphone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  placeholder="06 12 34 56 78"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Besoin estimé</label>
              <input
                type="text"
                name="estimatedNeed"
                value={formData.estimatedNeed}
                onChange={handleFormChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                placeholder="Ex: 1 unité, 5 unités, etc."
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                rows={5}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground resize-none"
                placeholder="Décrivez vos besoins spécifiques..."
              />
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Réponse sous 48h ouvrées.</strong> Nous traiterons votre demande avec attention pour vous proposer une solution adaptée.
              </p>
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-base font-semibold"
            >
              Recevoir une proposition personnalisée
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
