/**
 * Page Demande de Devis
 * Formulaire pour demander un devis
 */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { toast } from "sonner";

export default function DemandeDevis() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    etablissement: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // TODO: Intégrer avec l'API tRPC pour envoyer la demande
      console.log("Demande de devis:", formData);
      toast.success("Demande de devis envoyée avec succès!");
      setFormData({ nom: "", email: "", telephone: "", etablissement: "", message: "" });
    } catch (error) {
      toast.error("Erreur lors de l'envoi de la demande");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <div className="container max-w-2xl">
        <h1 className="text-4xl font-bold mb-2">Demande de Devis</h1>
        <p className="text-muted-foreground mb-12">
          Remplissez le formulaire ci-dessous pour recevoir un devis personnalisé
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg border">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Nom</label>
              <Input
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                required
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="votre@email.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Téléphone</label>
              <Input
                name="telephone"
                type="tel"
                value={formData.telephone}
                onChange={handleChange}
                placeholder="+33 1 23 45 67 89"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Établissement</label>
              <Input
                name="etablissement"
                value={formData.etablissement}
                onChange={handleChange}
                placeholder="Nom de l'établissement"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Décrivez votre demande..."
              rows={6}
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full"
          >
            {loading ? "Envoi en cours..." : "Envoyer la demande"}
          </Button>
        </form>
      </div>
    </div>
  );
}
