/**
 * O-PREP DIVAN Product Page
 * Design: Industrial Minimalism with Human Touch
 * - Professional, reassuring, focused on safety and ease of use
 * - Adapted for EHPAD, geriatric services, and healthcare centers
 */

import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, Heart, Users, Droplet, Award } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TechnicalSpecsSection from "@/components/TechnicalSpecsSection";
import { trpc } from "@/lib/trpc";

export default function OPrepDivan() {
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

  const submitQuote = trpc.quotes.submit.useMutation();

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await submitQuote.mutateAsync(formData);
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
    } catch (error) {
      toast.error("Erreur lors de l'envoi de la demande. Veuillez réessayer.");
      console.error(error);
    }
  };

  const scrollToForm = () => {
    const form = document.getElementById("devis-form");
    form?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSurvey = () => {
    window.location.href = "/questionnaire-ehpad";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-background to-secondary mt-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="font-bold text-foreground mb-6 leading-tight whitespace-nowrap">
              O-PREP® DIVAN
            </h1>
            <p className="text-2xl text-primary font-semibold mb-6">
              Solution d'hydro-lavage colique haute performance
            </p>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Un système complet d'irrigation du côlon par gravité, conçu pour les patients fragiles et les équipes soignantes en EHPAD et milieu hospitalier.
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

      {/* Product Image Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663365995358/AjWtaixutMRRvwhz.png"
                alt="O-PREP DIVAN - Système complet de préparation coloscopique"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="flex-1">
              <h2 className="font-bold text-foreground mb-8">Caractéristiques techniques</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                O-PREP®DIVAN utilise un réservoir de 30,5 litres d'eau portée à 37°C, positionné à 90 cm au-dessus du bassin du patient. Par principe de gravité et à basse pression (0,7 PA), l'eau irrigue le côlon jusqu'au cæcum avec un débit moyen de 1,3 litres/minute.
              </p>
              <ul className="space-y-4">
                {[
                  "Réservoir de 30,5 litres d'eau à 37°C",
                  "Système de gravité à basse pression (0,7 PA)",
                  "Débit moyen de 1,3 litres/minute",
                  "Irrigation jusqu'au cæcum",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-24 bg-background">
        <div className="container">
          <h2 className="font-bold text-foreground mb-16 text-center">
            Le produit en préparation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663365995358/rckyYSDxtkStRwPG.JPG"
                alt="O-PREP DIVAN - Vue d'ensemble du système"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-secondary">
                <p className="text-sm text-muted-foreground">Système complet avec interface de contrôle</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663365995358/jkVcvbGvPGKbvxTQ.JPG"
                alt="O-PREP DIVAN - Installation en atelier"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-secondary">
                <p className="text-sm text-muted-foreground">Installation et configuration du système</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663365995358/wsnAjuGFpScEqZaO.JPG"
                alt="O-PREP DIVAN - Détail du bassin ergonomique"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-secondary">
                <p className="text-sm text-muted-foreground">Bassin ergonomique et rampes de sécurité</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Description */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="font-bold text-foreground mb-8">Une solution ergonomique pensée pour le terrain</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                O-PREP®DIVAN est un dispositif ergonomique, pensé pour les environnements EHPAD et hospitaliers.
Il améliore significativement la qualité des soins et la sécurité des patients.
              </p>
              <div className="bg-secondary p-8 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-6">Améliore :</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span>La sécurité des transferts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span>La stabilité du patient</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span>Le confort lors des phases préparatoires</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span>La fluidité du travail des soignants</span>
                  </li>
                </ul>
              </div>
              <p>
                Sa conception robuste et hygiénique s'intègre facilement dans les protocoles existants. Le système permet de réduire les risques de chute, d'inconfort et de manipulation excessive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specific Benefits */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <h2 className="font-bold text-foreground mb-16">Bénéfices spécifiques pour EHPAD et gériatrie</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Sécurité renforcée",
                description: "Structure stable, réduction des risques de déséquilibre et de chute.",
              },
              {
                icon: Heart,
                title: "Respect du patient",
                description: "Maintien du confort du patient tout au long du processus.",
              },
              {
                icon: Users,
                title: "Soulagement des équipes",
                description: "Moins de contraintes posturales pour les soignants, travail facilité.",
              },
              {
                icon: Droplet,
                title: "Adapté aux patients dépendants",
                description: "Compatible avec aides techniques et assistance humaine.",
              },
              {
                icon: Award,
                title: "Hygiène & entretien simplifiés",
                description: "Matériaux adaptés aux environnements médicalisés, nettoyage aisé.",
              },
              {
                icon: CheckCircle2,
                title: "Intégration fluide",
                description: "S'adapte aux protocoles existants sans modification majeure.",
              },
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-background p-8 rounded-lg border border-border hover:border-primary transition-colors duration-150">
                  <Icon className="h-8 w-8 text-primary mb-4" strokeWidth={1.5} />
                  <h3 className="font-semibold text-foreground mb-3">{benefit.title}</h3>
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
          <h2 className="font-bold text-foreground mb-8">Impact organisationnel pour les décideurs</h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-3xl">
            O-PREP®DIVAN contribue directement à l'amélioration de votre structure :
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
            {[
              "Fluidifier l'organisation des soins",
              "Réduire le temps de mobilisation du personnel",
              "Améliorer la qualité perçue par les familles",
              "Sécuriser les protocoles en service gérontologie",
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
          <h2 className="font-bold text-foreground mb-12">Confiance & Validation</h2>
          <div className="max-w-3xl bg-background p-12 rounded-lg border-2 border-primary">
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Une innovation développée sur le terrain, validée par l'usage.
            </p>
            <ul className="space-y-4">
              {[
                "✔ Testé en environnement clinique",
                "✔ Développé avec des professionnels de santé",
                "✔ Adapté aux patients âgés et à mobilité réduite",
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

      {/* Technical Specifications & Compliance */}
      <TechnicalSpecsSection />

      {/* Survey Section */}
      <section className="py-24 bg-background">
        <div className="container max-w-3xl">
          <h2 className="font-bold text-foreground mb-6">Participez à l'amélioration des pratiques</h2>
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
          <h2 className="font-bold text-foreground mb-12">Demander un devis personnalisé</h2>
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

      <Footer />
    </div>
  );
}
