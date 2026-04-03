/**
 * Bibliography Page
 * Scientific articles and research about bowel preparation methods
 */

import { Download, FileText, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

interface Article {
  id: string;
  title: string;
  authors: string;
  year: number;
  journal: string;
  summary: string;
  keywords: string[];
  fileUrl: string;
  fileName: string;
}

const articles: Article[] = [
  {
    id: "strasbourg-2016",
    title: "Randomized Trial Comparing High Volume Rectal Water Irrigation with Standard 4 L Split-Dose PEG Preparation before Colonoscopy",
    authors: "Sportes A, Delvaux M, Huppertz J, Hernandez C, Gay G",
    year: 2016,
    journal: "Journal of Gastroenterology and Digestive Diseases",
    summary: "Cette étude randomisée compare une préparation colique standard par PEG (polyéthylène glycol) avec une irrigation colique par infusion d'eau à basse pression. L'étude portant sur 104 patients montre que le système de préparation par eau (Prep System) est aussi efficace que le PEG split-dose, avec une meilleure tolérance (89% de satisfaction vs 76% pour le PEG) et moins d'effets indésirables. Les scores de Boston Bowel Prep Scale (BBPS) étaient comparables entre les deux groupes (médiane 7 dans les deux cas).",
    keywords: ["Colonoscopy", "Bowel preparation", "Water irrigation", "PEG", "Patient tolerance"],
    fileUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663365995358/emZFRNSoPdeUeWX5JnxLkg/1PUBLICATIONETUDECHUSTRASBOURG_8d7b192c.pdf",
    fileName: "Strasbourg-2016-Study.pdf"
  },
  {
    id: "jfhod-2022",
    title: "Efficacité et tolérance d'une nouvelle méthode de préparation colique par procédure d'hydro-lavage colique mécanisée chez des patients avec échec de préparation colique",
    authors: "Truong DT, Sabaté JM, Uzan J, Pratico C, Raynaud JJ, et al.",
    year: 2022,
    journal: "Journées Francophones d'Hépato-Gastroentérologie et d'Oncologie Digestive (JFHOD)",
    summary: "Étude ouverte portant sur 131 patients ayant échoué une préparation colique standard. La procédure d'hydro-lavage mécanisée (O-PREP®) réalisée le jour de la coloscopie a permis de compléter 97% des examens avec une bonne qualité de préparation (score Boston moyen 7,08 ± 1,47). La tolérance était bonne chez 68,7% des patients, avec 82,4% acceptant de refaire la procédure. Aucun événement indésirable grave n'a été rapporté.",
    keywords: ["O-PREP", "Hydro-lavage", "Préparation colique", "Échec de préparation", "Tolérance"],
    fileUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663365995358/emZFRNSoPdeUeWX5JnxLkg/AbstractOprepJFHOD2022_51910770.pdf",
    fileName: "JFHOD-2022-Abstract.pdf"
  },
  {
    id: "hygiprep-detection",
    title: "Adenoma and Sessile Serrated Polyp Detection Rates are Higher with HygiPrep™ than with Standard Oral Bowel Preparations",
    authors: "Ziebert J, Ellis K, Peake C, Levitan PhD, Burleson RN, Stassen MD",
    year: 2020,
    journal: "American College of Gastroenterology (ACG) 2020 Virtual Annual Scientific Meeting",
    summary: "Étude présentée à l'ACG 2020 comparant les taux de détection d'adénomes et de polypes sérratés sessiles entre HygiPrep™ et les préparations orales standard. Les résultats montrent que les taux de détection d'adénomes (ADR) étaient 34% chez les femmes et 60% chez les hommes (presque le double des directives nationales de 20% et 30%). Le taux de détection des polypes sérratés sessiles (SSP) était de 12,5%, presque le double des taux publiés de 5-7%.",
    keywords: ["HygiPrep", "Adenoma detection", "Sessile serrated polyps", "Colonoscopy", "Detection rates"],
    fileUrl: "https://files.manuscdn.com/regnard-medical/Adenoma-Detection-Study.pdf",
    fileName: "HygiPrep-Adenoma-Detection.pdf"
  },
  {
    id: "gastro-health-collaboration",
    title: "Gastro Health and Hygieacare® established a strategic collaboration",
    authors: "Leavitt J, Garcia J, Meron G",
    year: 2021,
    journal: "EINPresswire",
    summary: "Annonce d'une collaboration stratégique entre Gastro Health et Hygieacare Inc. pour établir un centre Hygieacare® à Miami, Floride. L'article souligne le succès de HygiPrep™ et HygiRelief® dans les centres existants, avec plus de 15 000 patients ayant choisi HygiPrep avec d'excellents résultats, un profil de sécurité optimal et une satisfaction exceptionnelle des patients. Plus de 2 000 patients ont été prescrits HygiRelief pour le soulagement de la constipation.",
    keywords: ["Gastro Health", "Hygieacare", "Strategic collaboration", "HygiPrep", "HygiRelief"],
    fileUrl: "https://files.manuscdn.com/regnard-medical/Gastro-Health-Collaboration.pdf",
    fileName: "Gastro-Health-Collaboration.pdf"
  },
  {
    id: "hygiprep-future-direction",
    title: "HygiPrep® Prep highlighted as the Future Direction of Bowel Preparation in Clinical Gastrointestinal Endoscopy",
    authors: "Chandrasekhara V, Elmunzer B, Cotton PB, Khashab M, Muthusamy VR",
    year: 2018,
    journal: "Clinical Gastrointestinal Endoscopy (3rd Edition)",
    summary: "HygiPrep® Prep est mis en avant dans la 3e édition du manuel Clinical Gastrointestinal Endoscopy comme la direction future de la préparation colique. Le chapitre décrit HygiPrep comme un système de lavage colique FDA-approuvé qui remplace la préparation orale traditionnelle. Le système utilise un flux d'eau chaude à basse pression, est inodore et efficace. Plus de 8 000 patients ont choisi HygiPrep Prep avec 97% d'adéquation de préparation et 95% de volonté de répéter, sans événements indésirables graves.",
    keywords: ["HygiPrep", "Clinical Gastrointestinal Endoscopy", "Bowel preparation", "FDA-cleared", "Future direction"],
    fileUrl: "https://files.manuscdn.com/regnard-medical/HygiPrep-Future-Direction.pdf",
    fileName: "HygiPrep-Future-Direction.pdf"
  }
];

export default function Bibliography() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Bibliographie</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl">
              Découvrez les études scientifiques et articles de recherche sur les méthodes de préparation colique et l'efficacité des solutions innovantes.
            </p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-24 bg-background">
          <div className="container">
            <div className="space-y-8">
              {articles.map((article, index) => (
                <div
                  key={article.id}
                  className="bg-secondary rounded-lg border border-border overflow-hidden hover:border-primary transition-colors duration-150 p-8"
                >
                  {/* Article Header */}
                  <div className="mb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-foreground mb-2">
                          {article.title}
                        </h2>
                        <p className="text-sm text-muted-foreground mb-2">
                          <span className="font-semibold">{article.authors}</span>
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {article.journal} • {article.year}
                        </p>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <FileText className="h-8 w-8 text-primary" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>

                  {/* Article Summary */}
                  <div className="mb-6 p-6 bg-background rounded-lg border border-border">
                    <h3 className="font-semibold text-foreground mb-3">Résumé</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {article.summary}
                    </p>
                  </div>

                  {/* Keywords */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-foreground mb-3">Mots-clés</h3>
                    <div className="flex flex-wrap gap-2">
                      {article.keywords.map((keyword, idx) => (
                        <span
                          key={idx}
                          className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Download Button */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={article.fileUrl}
                      download={article.fileName}
                      className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors duration-150"
                    >
                      <Download className="h-5 w-5 mr-2" strokeWidth={1.5} />
                      Télécharger le document
                    </a>
                    <a
                      href={article.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary hover:bg-primary/5 font-semibold rounded-lg transition-colors duration-150"
                    >
                      <ExternalLink className="h-5 w-5 mr-2" strokeWidth={1.5} />
                      Consulter en ligne
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Vous avez des questions ?</h2>
            <p className="text-lg mb-8 opacity-90">
              Contactez notre équipe pour discuter des résultats de ces études et de la manière dont nos solutions peuvent améliorer vos pratiques.
            </p>
            <Button
              variant="secondary"
              className="px-8 py-6 text-base font-semibold"
            >
              Nous contacter
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
