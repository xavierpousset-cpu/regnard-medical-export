/**
 * Reparation Service Page
 * Design: Industrial Minimalism with Human Touch
 * - Professional, reassuring, focused on service quality
 * - Adapted for EHPAD, geriatric services, and healthcare centers
 */

import { Button } from "@/components/ui/button";
import { CheckCircle2, Wrench, Clock, Users, Shield, Award } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { trpc } from "@/lib/trpc";

export default function Reparation() {
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
      toast.success("Votre demande de service a été envoyée. Réponse sous 48h ouvrées.");
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
            <h1 className="font-bold text-foreground mb-6 leading-tight">
              Service de Réparation
            </h1>
            <p className="text-2xl text-primary font-semibold mb-6">
              Maintenance et réparation de vos équipements médicaux
            </p>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Regnard Medical propose un service de diagnostic et de réparation de pièces en partenariat avec nos fournisseurs spécialisés. Nous n'intervenons pas sur place, mais nous assurons la réparation qualifiée de vos équipements.
            </p>
            <Button
              onClick={scrollToForm}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold"
            >
              Demander une intervention
            </Button>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="font-bold text-foreground mb-8">Expertise technique au service de votre structure</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Notre équipe de techniciens qualifiés assure le diagnostic et la réparation de vos équipements Regnard Medical. Nous travaillons avec des partenaires spécialisés pour la réparation en atelier, garantissant une qualité et une conformité optimales.
              </p>
              <div className="bg-secondary p-8 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-6">Nos services incluent :</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span>Diagnostic technique des équipements</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span>Réparation en atelier avec partenaires spécialisés</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span>Remplacement de pièces détachées d'origine</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span>Garantie de qualité et conformité aux normes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span>Documentation technique et suivi d'intervention</span>
                  </li>
                </ul>
              </div>
              <p>
                Nos services de réparation sont adaptés à vos besoins spécifiques. Nous travaillons en étroite collaboration avec nos partenaires pour assurer une réparation rapide et qualifiée de vos équipements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <h2 className="font-bold text-foreground mb-16">Avantages de nos services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Réactivité",
                description: "Interventions rapides et disponibilité 24/7 pour les urgences",
              },
              {
                icon: Wrench,
                title: "Expertise",
                description: "Techniciens certifiés et formés sur tous nos équipements",
              },
              {
                icon: Users,
                title: "Accompagnement",
                description: "Formation et support continu de vos équipes soignantes",
              },
              {
                icon: Shield,
                title: "Sécurité",
                description: "Respect des normes de sécurité et d'hygiène médicale",
              },
              {
                icon: Award,
                title: "Qualité",
                description: "Pièces d'origine et garantie sur toutes les interventions",
              },
              {
                icon: CheckCircle2,
                title: "Suivi",
                description: "Documentation complète et rapports d'intervention détaillés",
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-background p-6 rounded-lg border border-border">
                <benefit.icon className="h-8 w-8 text-primary mb-4" strokeWidth={1.5} />
                <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Plans */}
      <section className="py-24 bg-background">
        <div className="container">
          <h2 className="font-bold text-foreground mb-16 text-center">Plans de maintenance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Maintenance Basique",
                description: "Maintenance préventive annuelle",
                features: [
                  "1 visite annuelle programmée",
                  "Nettoyage et inspection",
                  "Rapport d'intervention",
                  "Accès aux pièces détachées (réduction 10%)",
                ],
              },
              {
                name: "Maintenance Standard",
                description: "Maintenance préventive régulière",
                features: [
                  "2 visites annuelles programmées",
                  "Nettoyage, inspection et tests",
                  "Remplacement des pièces d'usure",
                  "Accès aux pièces détachées (réduction 15%)",
                  "Support technique prioritaire",
                ],
                highlighted: true,
              },
              {
                name: "Maintenance Premium",
                description: "Maintenance complète et support 24/7",
                features: [
                  "4 visites annuelles programmées",
                  "Maintenance complète et tests avancés",
                  "Remplacement préventif des pièces",
                  "Accès aux pièces détachées (réduction 20%)",
                  "Support technique 24/7",
                  "Intervention d'urgence incluse",
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`rounded-lg border-2 p-8 ${
                  plan.highlighted
                    ? "border-primary bg-primary/5"
                    : "border-border bg-background"
                }`}
              >
                <h3 className="font-semibold text-foreground mb-2 text-lg">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={scrollToForm}
                  variant={plan.highlighted ? "default" : "outline"}
                  className="w-full"
                >
                  Demander un devis
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-secondary">
        <div className="container max-w-2xl">
          <h2 id="devis-form" className="font-bold text-foreground mb-8">Demander une intervention</h2>
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Nom complet *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Fonction *</label>
                <input
                  type="text"
                  name="function"
                  value={formData.function}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Directeur, Infirmier, etc."
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Établissement *</label>
                <input
                  type="text"
                  name="establishment"
                  value={formData.establishment}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Nom de votre structure"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Type de structure *</label>
                <select
                  name="structureType"
                  value={formData.structureType}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Sélectionnez...</option>
                  <option value="ehpad">EHPAD</option>
                  <option value="hospital">Hôpital</option>
                  <option value="clinic">Clinique</option>
                  <option value="other">Autre</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Téléphone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="+33 1 23 45 67 89"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Type d'intervention demandée</label>
              <select
                name="estimatedNeed"
                value={formData.estimatedNeed}
                onChange={handleFormChange}
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Sélectionnez...</option>
                <option value="maintenance_preventive">Maintenance préventive</option>
                <option value="reparation_urgente">Réparation d'urgence</option>
                <option value="remplacement_pieces">Remplacement de pièces</option>
                <option value="formation">Formation du personnel</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Message supplémentaire</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                rows={4}
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="Décrivez votre demande ou votre problématique..."
              ></textarea>
            </div>

            <Button
              type="submit"
              disabled={submitQuote.isPending}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-base font-semibold"
            >
              {submitQuote.isPending ? "Envoi en cours..." : "Envoyer ma demande"}
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
