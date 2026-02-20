/**
 * Page Demande de Devis - Regnard Medical
 * Formulaire interne pour demande de devis
 * URL: /demande-devis
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { FileText, ArrowRight } from "lucide-react";

export default function DemandeDevis() {
  const [formData, setFormData] = useState({
    nom: "",
    fonction: "",
    etablissement: "",
    email: "",
    telephone: "",
    typeMateriel: "",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation basique
    if (!formData.nom || !formData.email || !formData.typeMateriel || !formData.description) {
      toast.error("Veuillez remplir tous les champs obligatoires");
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Appel à l'API pour sauvegarder la demande de devis
      const response = await fetch("/api/quotes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi");
      }

      toast.success("Votre demande de devis a été envoyée avec succès. Nous vous répondrons sous 48h.");
      
      // Reset form
      setFormData({
        nom: "",
        fonction: "",
        etablissement: "",
        email: "",
        telephone: "",
        typeMateriel: "",
        description: "",
      });
    } catch (error) {
      toast.error("Une erreur est survenue. Veuillez réessayer.");
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 w-full pt-24 pb-12">
        <div className="container max-w-3xl">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-8 w-8 text-primary" strokeWidth={1.5} />
              <h1 className="text-4xl font-bold text-foreground">Demande de Devis</h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Remplissez le formulaire ci-dessous pour recevoir un devis personnalisé pour vos besoins en réparation et maintenance de dispositifs médicaux.
            </p>
          </div>

          {/* Form */}
          <div className="bg-secondary/50 border border-border rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nom */}
              <div>
                <Label htmlFor="nom" className="text-foreground font-medium">
                  Nom *
                </Label>
                <Input
                  id="nom"
                  name="nom"
                  type="text"
                  required
                  placeholder="Votre nom complet"
                  value={formData.nom}
                  onChange={handleChange}
                  className="mt-2 bg-background border-border focus:border-primary transition-colors duration-150"
                />
              </div>

              {/* Fonction */}
              <div>
                <Label htmlFor="fonction" className="text-foreground font-medium">
                  Fonction
                </Label>
                <Input
                  id="fonction"
                  name="fonction"
                  type="text"
                  placeholder="Ex: Responsable technique, Directeur, etc."
                  value={formData.fonction}
                  onChange={handleChange}
                  className="mt-2 bg-background border-border focus:border-primary transition-colors duration-150"
                />
              </div>

              {/* Établissement */}
              <div>
                <Label htmlFor="etablissement" className="text-foreground font-medium">
                  Établissement
                </Label>
                <Input
                  id="etablissement"
                  name="etablissement"
                  type="text"
                  placeholder="Nom de votre établissement"
                  value={formData.etablissement}
                  onChange={handleChange}
                  className="mt-2 bg-background border-border focus:border-primary transition-colors duration-150"
                />
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-foreground font-medium">
                  Email *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="votre.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 bg-background border-border focus:border-primary transition-colors duration-150"
                />
              </div>

              {/* Téléphone */}
              <div>
                <Label htmlFor="telephone" className="text-foreground font-medium">
                  Téléphone
                </Label>
                <Input
                  id="telephone"
                  name="telephone"
                  type="tel"
                  placeholder="+33 1 23 45 67 89"
                  value={formData.telephone}
                  onChange={handleChange}
                  className="mt-2 bg-background border-border focus:border-primary transition-colors duration-150"
                />
              </div>

              {/* Type de matériel */}
              <div>
                <Label htmlFor="typeMateriel" className="text-foreground font-medium">
                  Type de matériel médical *
                </Label>
                <select
                  id="typeMateriel"
                  name="typeMateriel"
                  required
                  value={formData.typeMateriel}
                  onChange={handleChange}
                  className="mt-2 w-full px-3 py-2 bg-background border border-border rounded-md focus:border-primary transition-colors duration-150"
                >
                  <option value="">Sélectionnez un type de matériel</option>
                  <option value="lit-medicalise">Lit médicalisé</option>
                  <option value="fauteuil-roulant">Fauteuil roulant</option>
                  <option value="appareil-diagnostic">Appareil de diagnostic</option>
                  <option value="equipement-mobilite">Équipement de mobilité</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              {/* Description */}
              <div>
                <Label htmlFor="description" className="text-foreground font-medium">
                  Description du besoin *
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  required
                  rows={6}
                  placeholder="Décrivez votre besoin en réparation ou maintenance..."
                  value={formData.description}
                  onChange={handleChange}
                  className="mt-2 bg-background border-border focus:border-primary transition-colors duration-150 resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-150 font-medium gap-2"
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer la demande de devis"}
                <ArrowRight className="h-4 w-4" />
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                * Champs obligatoires. Nous vous répondrons sous 48h.
              </p>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
