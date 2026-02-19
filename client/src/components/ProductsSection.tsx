/**
 * Products Section - Regnard Medical
 * Design: Industrial Minimalism
 * - Mise en avant des produits RPrep Divan et RPrep Altesse
 * - Layout asymétrique avec images et descriptions
 */

import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useLocation } from "wouter";

const products = [
  {
    name: "O-PREP® DIVAN",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663365995358/PkszOBngDOpNWnXd.png",
    link: "/oprep-divan",
    benefits: [
      "Ergonomie optimisée pour le praticien",
      "Fiabilité éprouvée en environnement hospitalier",
      "Optimisation des flux de travail",
      "Confort patient amélioré",
    ],
  },
  {
    name: "O-PREP® ALTESSE",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663365995358/mMtGbBrysgNynIbs.png",
    link: "/oprep-altesse",
    benefits: [
      "Design innovant et fonctionnel",
      "Précision technique de pointe",
      "Maintenance simplifiée",
      "Intégration fluide dans les protocoles existants",
    ],
  },
];

export default function ProductsSection() {
  const [, navigate] = useLocation();

  return (
    <section className="py-32 bg-secondary">
      <div className="container">
        {/* Section number */}
        <div className="section-number mb-8">03 — Solutions</div>

        {/* Title */}
        <h2 className="mb-20 max-w-2xl">
          Des solutions techniques conçues pour l'excellence opérationnelle
        </h2>

        {/* Products */}
        <div className="space-y-24">
          {products.map((product, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative aspect-[4/3] overflow-hidden bg-transparent">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <h3 className="mb-8 font-display font-bold text-foreground">
                  {product.name}
                </h3>

                <ul className="space-y-4 mb-8">
                  {product.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2
                        className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5"
                        strokeWidth={1.5}
                      />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  onClick={() => navigate(product.link)}
                  className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors duration-150"
                >
                  Découvrir nos solutions
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
