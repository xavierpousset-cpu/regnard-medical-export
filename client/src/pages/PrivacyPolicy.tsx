import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PrivacyPolicy() {
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
            {t('privacy.title')}
          </h1>
          <p className="text-muted-foreground">
            {t('privacy.description')}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-sm max-w-none text-foreground space-y-8">
          {/* Section 1 */}
          <section>
            <h2 className="font-display font-bold mb-4">
              {t('privacy.section1')}
            </h2>
            <p className="text-muted-foreground">
              {t('privacy.section1.text')}
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="font-display font-bold mb-4">
              {t('privacy.section2')}
            </h2>
            <p className="text-muted-foreground mb-4">
              {t('privacy.section2.text')}
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>{t('privacy.section2.item1')}</li>
              <li>{t('privacy.section2.item2')}</li>
              <li>{t('privacy.section2.item3')}</li>
              <li>{t('privacy.section2.item4')}</li>
              <li>{t('privacy.section2.item5')}</li>
            </ul>
            <p className="text-muted-foreground">
              {t('privacy.section2.auto')}
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="font-display font-bold mb-4">
              {t('privacy.section3')}
            </h2>
            <p className="text-muted-foreground mb-4">
              {t('privacy.section3.text')}
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>{t('privacy.section3.item1')}</li>
              <li>{t('privacy.section3.item2')}</li>
              <li>{t('privacy.section3.item3')}</li>
              <li>{t('privacy.section3.item4')}</li>
              <li>{t('privacy.section3.item5')}</li>
              <li>{t('privacy.section3.item6')}</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="font-display font-bold mb-4">
              {t('privacy.section4')}
            </h2>
            <p className="text-muted-foreground mb-4">
              {t('privacy.section4.text')}
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                {t('privacy.section4.item1')}
              </li>
              <li>
                {t('privacy.section4.item2')}
              </li>
              <li>
                {t('privacy.section4.item3')}
              </li>
            </ul>
          </section>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
}
