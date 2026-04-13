/**
 * Home Page - Regnard Medical
 * Design: Industrial Minimalism
 * - Minimalisme industriel sobre
 * - Palette restreinte: blanc, gris béton, noir technique, accent bleu acier
 * - Typographie: DM Sans (display) + IBM Plex Sans (body)
 */

import ContactSection from "@/components/ContactSection";
import EhpadStudySection from "@/components/EhpadStudySection";
import ExpertiseSection from "@/components/ExpertiseSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import ValuesSection from "@/components/ValuesSection";
import WhyUsSection from "@/components/WhyUsSection";
import TrustSection from "@/components/TrustSection";
import VideodigestBanner from "@/components/VideodigestBanner";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ExpertiseSection />
        <ProductsSection />
        <EhpadStudySection />
        <ValuesSection />
        <div id="etablissements">
          <TrustSection />
        </div>
        <VideodigestBanner />
        <WhyUsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
