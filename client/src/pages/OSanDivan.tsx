/**
 * Le Divan O-SAN Product Page
 * Design: Industrial Minimalism with Human Touch (same as O-PREP DIVAN)
 * - Professional, reassuring, focused on safety and ease of use
 * - Adapted for EHPAD, geriatric services, and healthcare centers
 */

import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, Heart, Users, Droplet, Award } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { trpc } from "@/lib/trpc";

export default function OSanDivan() {
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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-background to-secondary mt-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="font-bold text-foreground mb-6 leading-tight whitespace-nowrap">
              Le Divan O-SAN
            </h1>
            <p className="text-2xl text-primary font-semibold mb-6">
              Solution sanitaire pour patients en position allongée
            </p>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Un dispositif ergonomique et sécurisé conçu pour les patients fragiles qui ne peuvent pas rester assis, adapté aux EHPAD et milieux hospitaliers.
            </p>
            <Button
              onClick={scrollToForm}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold"
            >
              Demander un devis
            </Button>
          </div>
        </div>
      </section>

      {/* Product Image Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663365995358/BicpGoUmDonRNbbt.png"
                alt="Le Divan O-SAN - Dispositif ergonomique"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="flex-1">
              <h2 className="font-bold text-foreground mb-8">Caractéristiques principales</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                RELAX®DIVAN est un dispositif ergonomique conçu pour les patients fragiles qui ne peuvent pas rester assis. Il offre une solution sécurisée et confortable pour les environnements EHPAD et hospitaliers.
              </p>
              <ul className="space-y-4">
                {[
                  "Position allongée confortable et sécurisée",
                  "Matériaux hygiéniques et faciles à nettoyer",
                  "Rampes de sécurité intégrées",
                  "Conception robuste adaptée aux environnements médicalisés",
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



      {/* Product Description */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="font-bold text-foreground mb-8">Une solution ergonomique pensée pour le terrain</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                RELAX®DIVAN est un dispositif ergonomique, pensé pour les environnements EHPAD et hospitaliers.
Il améliore significativement la qualité des soins et la sécurité des patients.
              </p>
              <div className="bg-secondary p-8 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-6">Améliore :</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span>La sécurité des patients fragiles</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span>Le confort en position allongée</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span>La réduction des manipulations</span>
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
                title: "Accessibilité optimale",
                description: "Conçu pour les patients fragiles et à mobilité réduite.",
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
            ].map((benefit, index) => (
              <div key={index} className="bg-background p-6 rounded-lg border border-border hover:border-primary transition-colors duration-300">
                <benefit.icon className="h-8 w-8 text-primary mb-4" strokeWidth={1.5} />
                <h3 className="font-semibold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Impact */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="font-bold text-foreground mb-8">Impact organisationnel pour les décideurs</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              RELAX®DIVAN contribue directement à l'amélioration de votre structure :
            </p>
            <div className="space-y-4">
              {[
                "Fluidifier l'organisation des soins",
                "Réduire le temps de mobilisation du personnel",
                "Améliorer la qualité perçue par les familles",
                "Sécuriser les protocoles en service gérontologie",
              ].map((item, index) => (
                <div key={index} className="flex items-start p-4 bg-secondary rounded-lg border border-border">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-4 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Validation */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="font-bold text-foreground mb-8">Confiance & Validation</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Une innovation développée sur le terrain, validée par l'usage.
            </p>
            <ul className="space-y-4">
              {[
                "✔ Testé en environnement clinique",
                "✔ Développé avec des professionnels de santé",
                "✔ Adapté aux patients âgés et à mobilité réduite",
                "✔ Conception française",
                "✔ Conforme aux exigences des dispositifs médicaux",
              ].map((item, index) => (
                <li key={index} className="flex items-start text-foreground font-medium">
                  <span className="mr-3">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="devis-form" className="py-24 bg-background">
        <div className="container">
          <div className="max-w-2xl">
            <h2 className="font-bold text-foreground mb-8">Demander un devis personnalisé</h2>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nom <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="function" className="block text-sm font-medium text-foreground mb-2">
                    Fonction <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="function"
                    name="function"
                    placeholder="Cadre de santé, Direction, etc."
                    value={formData.function}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="establishment" className="block text-sm font-medium text-foreground mb-2">
                    Établissement <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="establishment"
                    name="establishment"
                    placeholder="Nom de l'établissement"
                    value={formData.establishment}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="structureType" className="block text-sm font-medium text-foreground mb-2">
                    Type de structure <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="structureType"
                    name="structureType"
                    value={formData.structureType}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Sélectionner...</option>
                    <option value="EHPAD">EHPAD</option>
                    <option value="Centre Hospitalier">Centre Hospitalier</option>
                    <option value="Clinique">Clinique</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="votre.email@example.com"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Téléphone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="06 12 34 56 78"
                    value={formData.phone}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="estimatedNeed" className="block text-sm font-medium text-foreground mb-2">
                  Besoin estimé
                </label>
                <input
                  type="text"
                  id="estimatedNeed"
                  name="estimatedNeed"
                  placeholder="Ex: 1 unité, 5 unités, etc."
                  value={formData.estimatedNeed}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Décrivez vos besoins spécifiques..."
                  value={formData.message}
                  onChange={handleFormChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <Button
                type="submit"
                disabled={submitQuote.isPending}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold"
              >
                {submitQuote.isPending ? "Envoi en cours..." : "Recevoir une proposition personnalisée"}
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                <strong>Réponse sous 48h ouvrées.</strong> Nous traiterons votre demande avec attention pour vous proposer une solution adaptée.
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
