/**
 * Contact Page - Regnard Medical
 * Page dédiée au formulaire de contact
 * Design: Industrial Minimalism
 */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    nom: "",
    fonction: "",
    etablissement: "",
    email: "",
    telephone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation basique
    if (!formData.nom || !formData.email || !formData.message) {
      toast.error(t('contact_page.required_fields'));
      return;
    }

    // Simulation d'envoi
    toast.success(t('contact_page.success'));
    
    // Reset form
    setFormData({
      nom: "",
      fonction: "",
      etablissement: "",
      email: "",
      telephone: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="py-8 md:py-20 bg-secondary">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-white mb-6">
                {t('contact_page.hero.title')}
              </h1>
              <p className="text-lg text-white/80">
                {t('contact_page.hero.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-8 md:py-20 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left column - Info & Contact Details */}
              <div>
                <h2 className="mb-8">
                  {t('contact_page.form.heading')}
                </h2>

                <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                  {t('contact_page.form.description')}
                </p>

                {/* Rassurance */}
                <div className="flex items-start p-6 bg-secondary border-l-2 border-primary mb-8">
                  <Clock className="h-6 w-6 text-primary mr-4 flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-2">
                      {t('contact_page.response_time')}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {t('contact_page.response_time.desc')}
                    </p>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-6">
                  <h3 className="font-semibold text-foreground mb-4">{t('contact_page.other_ways')}</h3>
                  
                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Email</p>
                      <a href="mailto:contact@regnard-medical.fr" className="text-muted-foreground hover:text-primary transition-colors">
                        contact@regnard-medical.fr
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Téléphone</p>
                      <a href="tel:+33123456789" className="text-muted-foreground hover:text-primary transition-colors">
                        +33 (0)1 23 45 67 89
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Adresse</p>
                      <p className="text-muted-foreground">
                        123 Rue de l'Innovation<br />
                        75000 Paris, France
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right column - Form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="nom" className="text-foreground font-medium">
                      {t('contact_page.form.name')}
                    </Label>
                    <Input
                      id="nom"
                      name="nom"
                      type="text"
                      required
                      value={formData.nom}
                      onChange={handleChange}
                      className="mt-2 bg-background border-border focus:border-primary transition-colors duration-150"
                    />
                  </div>

                  <div>
                    <Label htmlFor="fonction" className="text-foreground font-medium">
                      {t('contact_page.form.function')}
                    </Label>
                    <Input
                      id="fonction"
                      name="fonction"
                      type="text"
                      value={formData.fonction}
                      onChange={handleChange}
                      className="mt-2 bg-background border-border focus:border-primary transition-colors duration-150"
                    />
                  </div>

                  <div>
                    <Label htmlFor="etablissement" className="text-foreground font-medium">
                      {t('contact_page.form.establishment')}
                    </Label>
                    <Input
                      id="etablissement"
                      name="etablissement"
                      type="text"
                      value={formData.etablissement}
                      onChange={handleChange}
                      className="mt-2 bg-background border-border focus:border-primary transition-colors duration-150"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-foreground font-medium">
                      {t('contact_page.form.email')}
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-2 bg-background border-border focus:border-primary transition-colors duration-150"
                    />
                  </div>

                  <div>
                    <Label htmlFor="telephone" className="text-foreground font-medium">
                      {t('contact_page.form.phone')}
                    </Label>
                    <Input
                      id="telephone"
                      name="telephone"
                      type="tel"
                      value={formData.telephone}
                      onChange={handleChange}
                      className="mt-2 bg-background border-border focus:border-primary transition-colors duration-150"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground font-medium">
                      {t('contact_page.form.message')}
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-2 bg-background border-border focus:border-primary transition-colors duration-150 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-150 font-medium"
                  >
                    {t('contact_page.form.submit')}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
