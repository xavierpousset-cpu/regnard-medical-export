import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LegalNotice() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-16">
      <div className="container max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-display font-bold text-foreground mb-4">
            {t('legal.title')}
          </h1>
          <p className="text-muted-foreground">
            {t('legal.description')}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-sm max-w-none text-foreground space-y-8">
          {/* Section 1 */}
          <section>
            <h2 className="font-display font-bold mb-4">
              {t('legal.section1')}
            </h2>
            <p className="text-muted-foreground mb-4">
              {t('legal.section1.text')}
            </p>
            <div className="bg-secondary/50 p-6 rounded-lg space-y-3 text-sm">
              <p>
                <strong>{t('legal.owner')}:</strong> Julie FLORIN REGNARD, Loic
                REGNARD et Patrice REGNARD – REGNARD MEDICAL – SAS – 41216060800011
                – REGNARD MEDICAL, 9 LE HANOY 27250 RUGLES
              </p>
              <p>
                <strong>{t('legal.creator')}:</strong> Ocean Communication
              </p>
              <p>
                <strong>{t('legal.publisher')}:</strong> Julie FLORIN REGNARD
              </p>
              <p>
                <strong>{t('legal.hoster')}:</strong> OVH – 2 rue Kellermann – 59100
                Roubaix – France
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="font-display font-bold mb-4">
              {t('legal.section2')}
            </h2>
            <p className="text-muted-foreground mb-4">
              {t('legal.section2.text1')}
            </p>
            <p className="text-muted-foreground mb-4">
              {t('legal.section2.text2')}
            </p>
            <p className="text-muted-foreground">
              {t('legal.section2.text3')}
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="font-display font-bold mb-4">
              {t('legal.section3')}
            </h2>
            <p className="text-muted-foreground mb-4">
              {t('legal.section3.text1')}
            </p>
            <p className="text-muted-foreground mb-4">
              {t('legal.section3.text2')}
            </p>
          </section>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
}
