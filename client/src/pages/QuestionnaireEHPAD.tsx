/**
 * Page Questionnaire EHPAD - Regnard Medical
 * Formulaire Tally avec Header et Footer
 * URL: /questionnaire-ehpad
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function QuestionnaireEHPAD() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 w-full pt-24">
        <iframe
          src="https://tally.so/r/ZjN5py?transparentBackground=1"
          width="100%"
          height="600"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Amélioration de la prise en charge du confort intestinal en EHPAD"
          style={{
            border: "none",
          }}
        />
      </main>
      <Footer />
    </div>
  );
}
