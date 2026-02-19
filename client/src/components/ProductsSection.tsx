/**
 * Products Section - Regnard Medical
 * Design: Industrial Minimalism
 * - Mise en avant des produits RPrep Divan et RPrep Altesse
 * - Layout asymétrique avec images et descriptions
 */

import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const products = [
  {
    name: "O-PREP®DIVAN",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663365995358/oQnUdzYkDmIvSQLP.svg",
    benefits: [
      "Ergonomie optimisée pour le praticien",
      "Fiabilité éprouvée en environnement hospitalier",
      "Optimisation des flux de travail",
      "Confort patient amélioré",
    ],
  },
  {
    name: "O-PREP®ALTESSE",
    image: "https://private-us-east-1.manuscdn.com/sessionFile/V8tu5qMPe1byRexDgMU2NQ/sandbox/BndEUYCABGUfi8qq8lXOOF-img-3_1771423124000_na1fn_cmQtaW5ub3ZhdGlvbg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVjh0dTVxTVBlMWJ5UmV4RGdNVTJOUS9zYW5kYm94L0JuZEVVWUNBQkdVZmk4cXE4bFhPT0YtaW1nLTNfMTc3MTQyMzEyNDAwMF9uYTFmbl9jbVF0YVc1dWIzWmhkR2x2YmcucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=t2vD6fQHdj-mI71sA5GHQtt3FHqu1hmQ5gVChdtDUPLTQaXnmTYHJRgKeiWq3sp13-dSIDhkcOcH6mnNmpN44UHRHXTiefuRil4Ng4OYhhwnWFo47sU1WSNa~IarAveA~zRf-9nFLSpErMEtx~KPLE5XSaeu2bGa1gHRyO-1GLgE4n~vi-LMhbIshCaNwCUL9xi7fO5ow0HlC2j2UE27~p5jw26Zlow9DAbvKwQH~X3cNewWI75OAditiMfflDmOTFH6M5K4iLh0CR6dYdtm2gdOO2xKvd7jmuNxLBu7YS9tec8~X1w8nXXh5vhHE0lNfj1nAg8o5~rU0wG24n0bdA__",
    benefits: [
      "Design innovant et fonctionnel",
      "Précision technique de pointe",
      "Maintenance simplifiée",
      "Intégration fluide dans les protocoles existants",
    ],
  },
];

export default function ProductsSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

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
                <div className="relative aspect-[4/3] overflow-hidden bg-background">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
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
                  onClick={scrollToContact}
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
