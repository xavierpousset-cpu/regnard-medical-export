/**
 * Footer - Regnard Medical
 * Design: Industrial Minimalism
 * - Footer sobre avec informations essentielles
 */


export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company info */}
          <div>
            <h3 className="font-display font-bold text-xl mb-4 tracking-tight">
              REGNARD MEDICAL
            </h3>
            <p className="text-sm text-background/70 leading-relaxed mb-4">
              {t('hero.title')}
            </p>
            <p className="text-xs text-background/60">
              Division de <a href="https://www.regnardtechnologie.com/" target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-background transition-colors duration-150 underline">Regnard Technologie</a>
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-background/90">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>Réparation de dispositifs médicaux</li>
              <li>Maintenance biomédicale</li>
              <li>Recherche & Développement</li>
              <li>Bureau d'études médical</li>
              <li>Solutions techniques sur mesure</li>
            </ul>
          </div>

          {/* Keywords for SEO */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-background/90">
              Expertise
            </h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>MedTech France</li>
              <li>Optimisation équipements hospitaliers</li>
              <li>Conformité dispositifs médicaux</li>
              <li>Innovation médicale</li>
              <li>Partenaire établissements de santé</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-background/60">
              © {new Date().getFullYear()} {t('footer.company')}. {t('footer.copyright')}
            </p>
            <div className="flex gap-6 text-sm text-background/60">
              <a href="/mentions-legales" className="hover:text-background transition-colors duration-150">
                {t('footer.legal')}
              </a>
              <a href="/politique-confidentialite" className="hover:text-background transition-colors duration-150">
                {t('footer.privacy')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
