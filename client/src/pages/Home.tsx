/**
 * Home Page - Regnard Medical
 * Design: Industrial Minimalism
 * - Minimalisme industriel sobre
 * - Palette restreinte: blanc, gris béton, noir technique, accent bleu acier
 * - Typographie: DM Sans (display) + IBM Plex Sans (body)
 */

import ContactSection from "@/components/ContactSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import TallyForm from "@/components/TallyForm";
import ValuesSection from "@/components/ValuesSection";
import WhyUsSection from "@/components/WhyUsSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ExpertiseSection />
        <ProductsSection />
        <TallyForm />
        <ValuesSection />
        <WhyUsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
