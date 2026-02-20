/**
 * Services Page - Regnard Medical
 * Page professionnelle présentant les services de maintenance et réparation
 * de matériel médical avec focus sur expertise industrielle
 */

import { Wrench, Zap, Stethoscope, Truck, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      icon: Wrench,
      title: "Réparation de lits médicalisés",
      description: "Diagnostic et réparation complète des équipements critiques",
      details: [
        "Diagnostic mécanique et électrique",
        "Remplacement de vérins, moteurs, commandes",
        "Réparation de systèmes de levage",
        "Remise en conformité des dispositifs de sécurité",
        "Maintenance préventive et corrective",
      ],
      benefits: [
        "Réduction des immobilisations",
        "Prolongation de la durée de vie du matériel",
        "Maîtrise des coûts",
      ],
    },
    {
      icon: Zap,
      title: "Maintenance préventive",
      description: "Anticipation des pannes par interventions régulières",
      details: [
        "Planification d'interventions régulières",
        "Contrôle des systèmes électriques",
        "Vérification des éléments mécaniques",
        "Sécurisation des dispositifs mobiles",
      ],
      benefits: [
        "Prévention des défaillances",
        "Optimisation de la disponibilité",
        "Réduction des urgences",
      ],
    },
    {
      icon: Stethoscope,
      title: "Expertise technique & diagnostic",
      description: "Analyse approfondie et recommandations stratégiques",
      details: [
        "Analyse des dysfonctionnements complexes",
        "Évaluation de l'état du parc matériel",
        "Recommandations techniques précises",
        "Accompagnement décisionnel (réparer / remplacer)",
      ],
      benefits: [
        "Décisions éclairées",
        "Optimisation des investissements",
        "Planification budgétaire",
      ],
    },
    {
      icon: Truck,
      title: "Intervention sur site",
      description: "Déploiement rapide et discret chez vos établissements",
      details: [
        "Déplacement rapide et réactif",
        "Intervention en chambre ou atelier",
        "Minimisation de l'impact sur l'organisation des soins",
        "Respect des protocoles de sécurité",
      ],
      benefits: [
        "Continuité des soins",
        "Professionnalisme discret",
        "Zéro interruption de service",
      ],
    },
  ];

  const benefits = [
    { icon: "🛡️", title: "Sécurité des patients", description: "Équipements maintenus aux normes" },
    { icon: "⚡", title: "Continuité des soins", description: "Disponibilité maximale du matériel" },
    { icon: "💰", title: "Réduction des coûts", description: "Moins de remplacements inutiles" },
    { icon: "⚙️", title: "Réactivité", description: "Interventions rapides et efficaces" },
    { icon: "🎯", title: "Expertise terrain", description: "Savoir-faire industriel appliqué" },
  ];

  const industries = [
    "EHPAD",
    "Centres hospitaliers",
    "Cliniques",
    "Services de gérontologie",
    "Structures médico-sociales",
  ];

  const heroImage = "https://private-us-east-1.manuscdn.com/sessionFile/V8tu5qMPe1byRexDgMU2NQ/sandbox/oSqGaPC70bfBaNNp6earLn-img-1_1771515708000_na1fn_bGl0LW1lZGljYWwtaGVybw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVjh0dTVxTVBlMWJ5UmV4RGdNVTJOUS9zYW5kYm94L29TcUdhUEM3MGJmQmFOTnA2ZWFyTG4taW1nLTFfMTc3MTUxNTcwODAwMF9uYTFmbl9iR2wwTFcxbFpHbGpZV3d0YUdWeWJ3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=XIj2eGLllYvzzVvh8XI6Y-hwK0TeNgrGKFIEbJJ55t9e28yBSRgHK1kQ1aEF8hRgSnRgGg5tHMELEpO9Yagi~Qf2OIYe4wHs4rNb7fkJNULPgotECRMecCHwxstIQCvXxmJbiZ0iv4Qs9bZoy5y5w0zXsAcaHdv9ncE~LfCBx4DDA6Il~GC0H1fxA4lpSjaF8lFicpiA8YRnKvunuy~uTmBMvuNlF1Mn1mP4B0OI~-AF6mEHFmK3C3n3niiE3xxBsS6Xw~NGgEC-Tj-4YqklDmrA4r05UZVnSayOYM4PxDjwyZ~KLgtMe~DXUDalYdbZN2EsJTK571BfPG96fTqNRA__";
  const reparationImage = "https://private-us-east-1.manuscdn.com/sessionFile/V8tu5qMPe1byRexDgMU2NQ/sandbox/oSqGaPC70bfBaNNp6earLn-img-2_1771515692000_na1fn_bGl0LW1lZGljYWwtcmVwYXJhdGlvbg.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVjh0dTVxTVBlMWJ5UmV4RGdNVTJOUS9zYW5kYm94L29TcUdhUEM3MGJmQmFOTnA2ZWFyTG4taW1nLTJfMTc3MTUxNTY5MjAwMF9uYTFmbl9iR2wwTFcxbFpHbGpZV3d0Y21Wd1lYSmhkR2x2YmcuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=HoCG9OvqbUWIzqhbHjuelMewrcy9KPEpFdtAcWDt2MQJxftstk4JO-~q-mrxG5nybeiNwkO1VQXdiz9MQOy2awL5n6kzd2h~Aogjn88fyr54jMDqnOpWRnnAAaQOY9Sf6k47D7QIKXdlTVQ5wEEPG9mdI8j1PvCK2XxUdqsTgwCZaTxw6rWsp6pC8QVCwBNqp6ULEduh3oHT2faEwoWNEhClNppjPJfejivHwR1xcnj1XYxxFsqr0ZqCkzQFDzDZ~wHji5n1qFABa2sGGV2VTtaqOntj4e0ZsjMoPENSCXMFnqjXLcEO3Z-kdml6VhoYdOojw52mCMlGHwFgSsH1xw__";
  const maintenanceImage = "https://private-us-east-1.manuscdn.com/sessionFile/V8tu5qMPe1byRexDgMU2NQ/sandbox/oSqGaPC70bfBaNNp6earLn-img-3_1771515693000_na1fn_bGl0LW1lZGljYWwtbWFpbnRlbmFuY2U.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVjh0dTVxTVBlMWJ5UmV4RGdNVTJOUS9zYW5kYm94L29TcUdhUEM3MGJmQmFOTnA2ZWFyTG4taW1nLTNfMTc3MTUxNTY5MzAwMF9uYTFmbl9iR2wwTFcxbFpHbGpZV3d0YldGcGJuUmxibUZ1WTJVLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=kRKcXJNBFgZBEyALoLpl3PGIjkWyfqKtk6ocv4TwJD1S1OA37HAJLZLPCZSbOXu1REiZlVPZ6ibRZryaWbPm5yXgSnZWBQ0BzjvjxW59B-xsElzPB06GCpybyFw4R55PfM~JGU5KxXMAUzMNwK0lggUPeabt~2wlL1g5tRrCFdkX0uvlZ4NXR~HUcwGdC8G8YvXo9jWDibBRaqNjq1-XyhuwH0xmvnAm2GEdVV2vdDd7Zc6OhR6JaMM85B6ioNt7vGvt3ytQobgjuLUD9d35zQndJIPg-8sKomR4I358Ath7t9l7QiKKokEbyTUwkGLli7dYQ-iLiss1LI7RAADhyw__";
  const interventionImage = "https://private-us-east-1.manuscdn.com/sessionFile/V8tu5qMPe1byRexDgMU2NQ/sandbox/oSqGaPC70bfBaNNp6earLn-img-4_1771515698000_na1fn_bGl0LW1lZGljYWwtaW50ZXJ2ZW50aW9u.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVjh0dTVxTVBlMWJ5UmV4RGdNVTJOUS9zYW5kYm94L29TcUdhUEM3MGJmQmFOTnA2ZWFyTG4taW1nLTRfMTc3MTUxNTY5ODAwMF9uYTFmbl9iR2wwTFcxbFpHbGpZV3d0YVc1MFpYSjJaVzUwYVc5dS5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=OOUKTSQhsOcjc6jyFeuaOJG32DSN-o6ul78tIsKbqXw4IWMI7otvRjgTqIT0SRtyOUqtDwSLP9aDjtpJnsyN0Fdh0u8I7mPMGKAk1x2W77fXB-xtdpjy6miF2euDSBwWXtqGQC8S7gM6fMYbRK77o5z10K4lsNq~68e4Y8-eFQaBQ7yrt~hfu7P~xI9nVP~wpMVNUnWqt61jnhxxDZfi-doptn3tXQ~26LLw0yV9aEcE~g3VIhbZC0~0dtvcVRxIh-KzhNG3zFurbiKAL3WJzIQMubfHIEPKFY8Fx4njcGuE7ucq4dH-iWWJoM6~kBkhKBAY5VxRwGKWHlO1MjHuMg__";
  const diagnosticImage = "https://private-us-east-1.manuscdn.com/sessionFile/V8tu5qMPe1byRexDgMU2NQ/sandbox/oSqGaPC70bfBaNNp6earLn-img-5_1771515700000_na1fn_bGl0LW1lZGljYWwtZGlhZ25vc3RpYw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVjh0dTVxTVBlMWJ5UmV4RGdNVTJOUS9zYW5kYm94L29TcUdhUEM3MGJmQmFOTnA2ZWFyTG4taW1nLTVfMTc3MTUxNTcwMDAwMF9uYTFmbl9iR2wwTFcxbFpHbGpZV3d0WkdsaFoyNXZjM1JwWXcuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=hzecOkjcAtlDM01fx7jR0B0TqBktqKwCmla4JCtbXDwrOSKt3DruxUfG8hAQShCCCAfqodWBuKeCMb5Io5L6dk9M9zlR0wXvmLYLD~LOTBWXx69HWjEaKmtksJpvQxAmcGJmN0l1LkJWEDcqaBn0805mKHN28J~Lh7QjYOYwrGIRYyMdlaObZZRsrewEseF3AMz7v0TWDX50YBOKbZufInLLenUV9JtDRBO1JK-Jna-0oalB6YrBdeO-JDyGhzvlp3yLH5872alKgYYahxBrcZPZ8u9x8kxXMcNhZH3RurPIBsQpKI1b4uPtx7i5phDzdkSBx6hsvQ4r9DjYOyf3QA__";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-cover bg-center relative" style={{ backgroundImage: `url(${heroImage})` }}>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-bold text-white mb-4">
              Nos services
            </h1>
            <p className="text-2xl text-white/90 mb-2">
              Maintenance, réparation et expertise du matériel médical
            </p>
            <p className="text-lg text-white/80 mb-8">
              Un savoir-faire industriel au service des établissements de santé
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/questionnaire">
                <Button size="lg" className="gap-2">
                  Demander une intervention <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/questionnaire">
                <Button size="lg" variant="outline" className="gap-2">
                  Obtenir un diagnostic <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-bold text-slate-900 mb-6">
              Partenaire technique des établissements de santé
            </h2>
            <div className="prose prose-lg max-w-none text-slate-600">
              <p className="mb-6">
                Regnard Médical met son expertise technique au service des établissements de santé pour assurer la fiabilité, la sécurité et la longévité du matériel médical.
              </p>
              <p className="mb-8">
                Forte d'un savoir-faire issu du monde industriel, notre équipe intervient avec rigueur sur les équipements critiques, notamment les lits médicalisés. Nous accompagnons les structures de santé avec professionnalisme et discrétion, en minimisant l'impact sur l'organisation des soins.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="font-semibold text-slate-900 mb-4">
                Nous accompagnons :
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {industries.map((industry) => (
                  <div key={industry} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-slate-700">{industry}</span>
                  </div>
                ))}
              </div>
              <p className="text-slate-600 mt-6 italic">
                Objectif : garantir continuité de service et sécurité patient.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Détaillés */}
      <section className="py-20 bg-slate-50">
        <div className="container">
            <h2 className="font-bold text-slate-900 mb-4 text-center">
            Nos domaines d'intervention
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Une expertise complète pour la maintenance et la réparation de vos équipements médicaux
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              const images = [reparationImage, maintenanceImage, diagnosticImage, interventionImage];
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="h-48 bg-slate-200 overflow-hidden">
                    <img loading="lazy" decoding="async" src={images[index]} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <CardDescription className="text-base mt-2">
                          {service.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">Nos interventions :</h4>
                      <ul className="space-y-2">
                        {service.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-700">
                            <span className="text-blue-600 font-bold mt-0.5">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">Bénéfices :</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-700">
                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ADN Industriel */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-bold text-slate-900 mb-6">
              Notre ADN industriel
            </h2>
            <p className="text-slate-600 mb-8">
              Regnard Médical s'appuie sur un savoir-faire issu de l'industrie, appliqué avec rigueur au secteur médical :
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="text-2xl">⚙️</div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Maîtrise mécanique</h3>
                    <p className="text-slate-600 text-sm">Expertise approfondie des systèmes mécaniques complexes</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-2xl">🔧</div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Assemblage technique</h3>
                    <p className="text-slate-600 text-sm">Précision et rigueur dans chaque intervention</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="text-2xl">🛠️</div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Fabrication sur mesure</h3>
                    <p className="text-slate-600 text-sm">Adaptation et création de pièces personnalisées</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-2xl">💡</div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Solutions innovantes</h3>
                    <p className="text-slate-600 text-sm">Approches pragmatiques et orientées résultats</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
              <p className="text-slate-900 font-semibold mb-2">
                Nous sommes :
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>✓ <span className="font-semibold">Rigoureux</span> dans notre approche technique</li>
                <li>✓ <span className="font-semibold">Pragmatiques</span> dans nos solutions</li>
                <li>✓ <span className="font-semibold">Orientés solution</span> pour vos besoins</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bénéfices */}
      <section className="py-16 bg-slate-50">
        <div className="container">
            <h2 className="font-bold text-slate-900 mb-12 text-center">
            Bénéfices pour vos établissements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-slate-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partenaire de confiance */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-bold text-slate-900 mb-6">
              Votre partenaire de confiance
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Nous intervenons avec discrétion, professionnalisme et respect des environnements de soins.
            </p>
            <p className="text-lg text-slate-700 font-semibold mb-8">
              Notre priorité : maintenir vos équipements opérationnels, pour que vos équipes puissent se concentrer sur l'essentiel.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-8 rounded-lg border border-blue-100">
              <p className="text-slate-900 font-semibold text-lg mb-2">
                Regnard Médical, c'est :
              </p>
              <div className="space-y-2 text-slate-700">
                <p>Un <span className="font-semibold">technicien de précision</span></p>
                <p>Un <span className="font-semibold">partenaire durable</span></p>
                <p>Un <span className="font-semibold">prolongateur de vie du matériel</span></p>
              </div>
              <p className="text-slate-600 mt-6 italic">
                Moins de pannes. Moins d'immobilisation. Plus de sérénité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-bold mb-4">
              Besoin d'une intervention ou d'un audit de votre parc ?
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Contactez-nous pour discuter de vos besoins spécifiques
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/questionnaire">
                <Button size="lg" variant="secondary" className="gap-2">
                  Planifier une intervention <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/questionnaire">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 gap-2">
                  Demander un devis <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <p className="text-blue-100 mt-6 text-sm">
              Réponse sous 24h · Intervention rapide · Expertise garantie
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
