/**
 * Bibliography Page
 * Scientific articles and research about bowel preparation methods
 */

import { Download, FileText, Eye } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";

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
  pdfEmbedUrl: string;
}

const articles: Article[] = [
  {
    id: "strasbourg-2016",
    title: "Randomized Trial Comparing High Volume Rectal Water Irrigation with Standard 4 L Split-Dose PEG Preparation before Colonoscopy",
    authors: "Sportes A, Delvaux M, Huppertz J, Hernandez C, Gay G",
    year: 2016,
    journal: "Journal of Gastroenterology and Digestive Diseases",
    summary: "Cette étude randomisée compare une préparation colique standard par PEG (polyéthylène glycol) avec une irrigation colique par infusion d'eau à basse pression. L'étude portant sur 104 patients montre que le système de préparation par eau (Prep System) est aussi efficace que le PEG split-dose, avec une meilleure tolérance (89% de satisfaction vs 76% pour le PEG) et moins d'effets indésirables.",
    keywords: ["Colonoscopy", "Bowel preparation", "Water irrigation", "PEG", "Patient tolerance"],
    fileUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663365995358/emZFRNSoPdeUeWX5JnxLkg/1PUBLICATIONETUDECHUSTRASBOURG_8d7b192c.pdf",
    pdfEmbedUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663365995358/emZFRNSoPdeUeWX5JnxLkg/1PUBLICATIONETUDECHUSTRASBOURG_8d7b192c.pdf#toolbar=0",
    fileName: "Strasbourg-2016-Study.pdf"
  },
  {
    id: "jfhod-2022",
    title: "Efficacité et tolérance d'une nouvelle méthode de préparation colique par procédure d'hydro-lavage colique mécanisée chez des patients avec échec de préparation colique",
    authors: "Truong DT, Sabaté JM, Uzan J, Pratico C, Raynaud JJ, et al.",
    year: 2022,
    journal: "Journées Francophones d'Hépato-Gastroentérologie et d'Oncologie Digestive (JFHOD)",
    summary: "Étude ouverte portant sur 131 patients ayant échoué une préparation colique standard. La procédure d'hydro-lavage mécanisée (O-PREP®) réalisée le jour de la coloscopie a permis de compléter 97% des examens avec une bonne qualité de préparation. La tolérance était bonne chez 68,7% des patients, avec 82,4% acceptant de refaire la procédure.",
    keywords: ["O-PREP", "Hydro-lavage", "Préparation colique", "Échec de préparation", "Tolérance"],
    fileUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663365995358/emZFRNSoPdeUeWX5JnxLkg/AbstractOprepJFHOD2022_51910770.pdf",
    pdfEmbedUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663365995358/emZFRNSoPdeUeWX5JnxLkg/AbstractOprepJFHOD2022_51910770.pdf#toolbar=0",
    fileName: "JFHOD-2022-Abstract.pdf"
  },
  {
    id: "hygiprep-detection",
    title: "Adenoma and Sessile Serrated Polyp Detection Rates are Higher with HygiPrep™ than with Standard Oral Bowel Preparations",
    authors: "Ziebert J, Ellis K, Peake C, Levitan PhD, Burleson RN, Stassen MD",
    year: 2020,
    journal: "American College of Gastroenterology (ACG) 2020 Virtual Annual Scientific Meeting",
    summary: "Étude comparant les taux de détection d'adénomes et de polypes sérratés sessiles entre HygiPrep™ et les préparations orales standard. Les résultats montrent que les taux de détection d'adénomes (ADR) étaient 34% chez les femmes et 60% chez les hommes, presque le double des directives nationales.",
    keywords: ["HygiPrep", "Adenoma detection", "Sessile serrated polyps", "Colonoscopy", "Detection rates"],
    fileUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663365995358/emZFRNSoPdeUeWX5JnxLkg/Adenoma-and-Sessile-Serrated-Polyp-Detection-Rates-are-Higher-with-HygiPrepT-th_page-0001_b3d4c8f2.jpg",
    pdfEmbedUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663365995358/emZFRNSoPdeUeWX5JnxLkg/Adenoma-and-Sessile-Serrated-Polyp-Detection-Rates-are-Higher-with-HygiPrepT-th_page-0001_b3d4c8f2.jpg",
    fileName: "HygiPrep-Adenoma-Detection.pdf"
  },
  {
    id: "gastro-health-collaboration",
    title: "Gastro Health and Hygieacare® established a strategic collaboration",
    authors: "Leavitt J, Garcia J, Meron G",
    year: 2021,
    journal: "EINPresswire",
    summary: "Annonce d'une collaboration stratégique entre Gastro Health et Hygieacare Inc. pour établir un centre Hygieacare® à Miami, Floride. L'article souligne le succès de HygiPrep™ et HygiRelief® avec plus de 15 000 patients ayant choisi HygiPrep avec d'excellents résultats et une satisfaction exceptionnelle.",
    keywords: ["Gastro Health", "Hygieacare", "Strategic collaboration", "HygiPrep", "HygiRelief"],
    fileUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663365995358/emZFRNSoPdeUeWX5JnxLkg/EINPresswire-544104260-gastro-health-and-hygieacare-established-a-strategic-collaboration-26_page-0001_8c2e4d5f.jpg",
    pdfEmbedUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663365995358/emZFRNSoPdeUeWX5JnxLkg/EINPresswire-544104260-gastro-health-and-hygieacare-established-a-strategic-collaboration-26_page-0001_8c2e4d5f.jpg",
    fileName: "Gastro-Health-Collaboration.pdf"
  },
  {
    id: "hygiprep-future-direction",
    title: "HygiPrep® Prep highlighted as the Future Direction of Bowel Preparation in Clinical Gastrointestinal Endoscopy",
    authors: "Chandrasekhara V, Elmunzer B, Cotton PB, Khashab M, Muthusamy VR",
    year: 2018,
    journal: "Clinical Gastrointestinal Endoscopy (3rd Edition)",
    summary: "HygiPrep® Prep est mis en avant dans la 3e édition du manuel Clinical Gastrointestinal Endoscopy comme la direction future de la préparation colique. Plus de 8 000 patients ont choisi HygiPrep Prep avec 97% d'adéquation de préparation et 95% de volonté de répéter.",
    keywords: ["HygiPrep", "Clinical Gastrointestinal Endoscopy", "Bowel preparation", "FDA-cleared", "Future direction"],
    fileUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663365995358/emZFRNSoPdeUeWX5JnxLkg/einpresswire-448880329-hygieacare-prep-highlighted-as-the-future-direction-of-bowel-preparation-in-clinical-gastrointestinal-endoscopy-may-27-2018-page-001-scaled_e7f3b9a1.webp",
    pdfEmbedUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663365995358/emZFRNSoPdeUeWX5JnxLkg/einpresswire-448880329-hygieacare-prep-highlighted-as-the-future-direction-of-bowel-preparation-in-clinical-gastrointestinal-endoscopy-may-27-2018-page-001-scaled_e7f3b9a1.webp",
    fileName: "HygiPrep-Future-Direction.pdf"
  }
];

interface PreviewModalProps {
  article: Article;
  isOpen: boolean;
  onClose: () => void;
}

function PreviewModal({ article, isOpen, onClose }: PreviewModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h3 className="text-lg font-semibold text-foreground truncate">
            {article.title}
          </h3>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Modal Content */}
        <div className="flex-1 overflow-auto">
          {article.pdfEmbedUrl.endsWith('.pdf') ? (
            <iframe
              src={article.pdfEmbedUrl}
              className="w-full h-full"
              title={article.title}
            />
          ) : (
            <img
              src={article.pdfEmbedUrl}
              alt={article.title}
              className="w-full h-auto"
            />
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between p-6 border-t border-border bg-secondary">
          <p className="text-sm text-muted-foreground">
            {article.year} • {article.journal}
          </p>
          <a
            href={article.fileUrl}
            download={article.fileName}
            className="inline-flex items-center justify-center px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors duration-150 text-sm"
          >
            <Download className="h-4 w-4 mr-2" strokeWidth={1.5} />
            Télécharger
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Bibliography() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

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

        {/* Articles List */}
        <section className="py-24 bg-background">
          <div className="container max-w-4xl">
            <div className="space-y-8">
              {articles.map((article, index) => (
                <article
                  key={article.id}
                  className="bg-card rounded-lg border border-border overflow-hidden hover:border-primary transition-all duration-150 hover:shadow-md"
                >
                  {/* Article Content */}
                  <div className="p-8">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0 mt-1">
                          <FileText className="h-6 w-6 text-primary" strokeWidth={1.5} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2 leading-tight">
                            {article.title}
                          </h2>
                          <p className="text-sm text-muted-foreground mb-1">
                            <span className="font-semibold text-foreground">{article.authors}</span>
                          </p>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium">{article.journal}</span> • {article.year}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Summary */}
                    <div className="mb-6 p-5 bg-secondary rounded-lg border border-border">
                      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                        {article.summary}
                      </p>
                    </div>

                    {/* Keywords */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {article.keywords.map((keyword, idx) => (
                          <span
                            key={idx}
                            className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => setSelectedArticle(article)}
                        className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors duration-150 text-sm md:text-base"
                      >
                        <Eye className="h-5 w-5 mr-2" strokeWidth={1.5} />
                        Consulter en ligne
                      </button>
                      <a
                        href={article.fileUrl}
                        download={article.fileName}
                        className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary hover:bg-primary/5 font-semibold rounded-lg transition-colors duration-150 text-sm md:text-base"
                      >
                        <Download className="h-5 w-5 mr-2" strokeWidth={1.5} />
                        Télécharger
                      </a>
                    </div>
                  </div>
                </article>
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

      {/* Preview Modal */}
      {selectedArticle && (
        <PreviewModal
          article={selectedArticle}
          isOpen={!!selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      )}

      <Footer />
    </div>
  );
}
