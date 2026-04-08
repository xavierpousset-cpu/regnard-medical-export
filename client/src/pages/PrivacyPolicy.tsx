import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
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
            Politique de Confidentialité
          </h1>
          <p className="text-muted-foreground">
            Comment nous protégeons vos données personnelles
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-sm max-w-none text-foreground space-y-8">
          {/* Section 1 */}
          <section>
            <h2 className="font-display font-bold mb-4">
              1. Introduction
            </h2>
            <p className="text-muted-foreground">
              Regnard Medical (division de Regnard Technologie) (« nous », « notre » ou « la Société ») s'engage à
              respecter votre vie privée. Cette Politique de Confidentialité
              explique comment nous collectons, utilisons, divulguons et
              sauvegardons vos informations lorsque vous visitez notre site web
              et utilisez nos services.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="font-display font-bold mb-4">
              2. Informations que nous collectons
            </h2>
            <p className="text-muted-foreground mb-4">
              Nous collectons les informations que vous nous fournissez
              directement, notamment :
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>Votre nom et prénom</li>
              <li>Votre adresse e-mail</li>
              <li>Votre numéro de téléphone</li>
              <li>Votre fonction et établissement</li>
              <li>Tout message ou demande que vous nous adressez</li>
            </ul>
            <p className="text-muted-foreground">
              Nous collectons également automatiquement certaines informations
              lorsque vous visitez notre site, notamment votre adresse IP, le
              type de navigateur, les pages visitées et le temps passé sur le
              site.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="font-display font-bold mb-4">
              3. Utilisation de vos informations
            </h2>
            <p className="text-muted-foreground mb-4">
              Nous utilisons les informations collectées pour :
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Répondre à vos demandes et questions</li>
              <li>Vous fournir les services et produits demandés</li>
              <li>Améliorer notre site web et nos services</li>
              <li>Vous envoyer des informations pertinentes sur nos services</li>
              <li>Respecter nos obligations légales</li>
              <li>Prévenir la fraude et les activités illégales</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="font-display font-bold mb-4">
              4. Partage de vos informations
            </h2>
            <p className="text-muted-foreground mb-4">
              Nous ne partageons pas vos informations personnelles avec des
              tiers, sauf dans les cas suivants :
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                Avec notre hébergeur OVH pour le fonctionnement du site web
              </li>
              <li>
                Lorsque la loi l'exige ou pour protéger nos droits légaux
              </li>
              <li>
                En cas de fusion, acquisition ou vente d'actifs (avec
                notification préalable)
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="font-display font-bold mb-4">
              5. Sécurité de vos données
            </h2>
            <p className="text-muted-foreground">
              Nous mettons en place des mesures de sécurité appropriées pour
              protéger vos informations personnelles contre l'accès non autorisé,
              la modification, la divulgation ou la destruction. Cependant,
              aucune transmission de données sur Internet n'est complètement
              sécurisée, et nous ne pouvons pas garantir une sécurité absolue.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="font-display font-bold mb-4">
              6. Cookies et technologies similaires
            </h2>
            <p className="text-muted-foreground mb-4">
              Notre site utilise des cookies pour améliorer votre expérience de
              navigation. Les cookies sont de petits fichiers stockés sur votre
              appareil qui nous aident à :
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Mémoriser vos préférences</li>
              <li>Analyser le trafic du site</li>
              <li>Améliorer la fonctionnalité du site</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Vous pouvez configurer votre navigateur pour refuser les cookies,
              bien que cela puisse affecter certaines fonctionnalités du site.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="font-display font-bold mb-4">
              7. Vos droits
            </h2>
            <p className="text-muted-foreground mb-4">
              Conformément à la loi n° 78-17 du 6 janvier 1978 (CNIL), vous
              disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Droit d'accès à vos données personnelles</li>
              <li>Droit de rectification de vos données</li>
              <li>Droit d'opposition au traitement de vos données</li>
              <li>Droit à l'effacement de vos données</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité des données</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Pour exercer ces droits, veuillez nous contacter par écrit à
              l'adresse indiquée dans les mentions légales.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="font-display font-bold mb-4">
              8. Conservation des données
            </h2>
            <p className="text-muted-foreground">
              Nous conservons vos informations personnelles aussi longtemps que
              nécessaire pour vous fournir nos services et respecter nos
              obligations légales. Les données de contact sont conservées pour
              permettre le suivi de votre demande. Vous pouvez demander la
              suppression de vos données à tout moment.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="font-display font-bold mb-4">
              9. Modifications de cette politique
            </h2>
            <p className="text-muted-foreground">
              Nous pouvons mettre à jour cette Politique de Confidentialité de
              temps à autre. Nous vous notifierons de tout changement important
              en publiant la nouvelle politique sur notre site et en mettant à
              jour la date de « dernière mise à jour » ci-dessous.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="font-display font-bold mb-4">
              10. Nous contacter
            </h2>
            <p className="text-muted-foreground mb-4">
              Si vous avez des questions concernant cette Politique de
              Confidentialité ou nos pratiques en matière de protection des
              données, veuillez nous contacter :
            </p>
            <div className="bg-secondary/50 p-6 rounded-lg space-y-2 text-sm text-muted-foreground">
              <p>
                <strong>Regnard Medical</strong>
              </p>
              <p>9 Le Hanoy, 27250 Rugles, France</p>
              <p>
                Pour toute question relative à vos données personnelles, veuillez
                utiliser le formulaire de contact disponible sur notre site.
              </p>
            </div>
          </section>

          {/* Last Update */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              <strong>Dernière mise à jour :</strong> 18 février 2026
            </p>
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
}
