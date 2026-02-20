import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface FAQItem {
  category: string;
  questions: {
    id: string;
    question: string;
    answer: string;
  }[];
}

const faqData: FAQItem[] = [
  {
    category: 'Maintenance et Entretien',
    questions: [
      {
        id: 'maintenance-1',
        question: 'Quelle est la fréquence recommandée de maintenance ?',
        answer: 'Nous recommandons une maintenance préventive tous les 6 mois pour les équipements utilisés régulièrement. Cette fréquence peut être ajustée selon l\'intensité d\'utilisation et les conditions environnementales de votre établissement.'
      },
      {
        id: 'maintenance-2',
        question: 'Que comprend la maintenance préventive ?',
        answer: 'La maintenance préventive inclut : inspection complète de l\'équipement, nettoyage et lubrification des pièces mobiles, vérification des connexions électriques, test de fonctionnement, remplacement des pièces d\'usure si nécessaire, et documentation complète de l\'intervention.'
      },
      {
        id: 'maintenance-3',
        question: 'Quel est le délai d\'intervention en cas de panne ?',
        answer: 'Nous garantissons une intervention dans les 48 heures suivant votre appel pour les pannes critiques. Pour les interventions de maintenance curative standard, le délai est généralement de 5 à 7 jours ouvrables selon la complexité du problème.'
      },
      {
        id: 'maintenance-4',
        question: 'Proposez-vous un contrat de maintenance annuel ?',
        answer: 'Oui, nous proposons des contrats de maintenance annuels adaptés à vos besoins. Ces contrats incluent des visites préventives régulières, la priorité d\'intervention en cas de panne, et des tarifs préférentiels sur les pièces de rechange.'
      },
      {
        id: 'maintenance-5',
        question: 'Les pièces de rechange sont-elles garanties ?',
        answer: 'Toutes les pièces de rechange que nous installons sont garanties 12 mois à partir de la date d\'installation. Les pièces d\'origine du fabricant bénéficient de la garantie constructeur complète.'
      },
      {
        id: 'maintenance-6',
        question: 'Pouvez-vous intervenir hors des heures de bureau ?',
        answer: 'Oui, nous proposons des interventions en dehors des heures de bureau (soir, week-end, jours fériés) moyennant des frais supplémentaires. Contactez-nous pour connaître les tarifs et la disponibilité.'
      }
    ]
  },
  {
    category: 'Tarification',
    questions: [
      {
        id: 'tarif-1',
        question: 'Comment sont calculés vos tarifs ?',
        answer: 'Nos tarifs sont basés sur : le type d\'équipement, la nature de l\'intervention (préventive ou curative), la complexité du travail, le temps d\'intervention estimé, et les pièces nécessaires. Un devis détaillé vous est toujours proposé avant intervention.'
      },
      {
        id: 'tarif-2',
        question: 'Quels sont vos tarifs de maintenance préventive ?',
        answer: 'Les tarifs de maintenance préventive varient selon le type d\'équipement : O-PREP®DIVAN à partir de 350€ HT, O-PREP®ALTESSE à partir de 250€ HT. Des forfaits annuels avec réductions sont disponibles. Demandez un devis personnalisé.'
      },
      {
        id: 'tarif-3',
        question: 'Y a-t-il des frais de déplacement ?',
        answer: 'Oui, les frais de déplacement sont facturés en fonction de la distance (tarif kilométrique) et du temps de trajet. Pour les interventions dans un rayon de 30 km autour de nos locaux, les frais sont réduits. Les contrats annuels incluent généralement les frais de déplacement.'
      },
      {
        id: 'tarif-4',
        question: 'Proposez-vous des réductions pour les contrats pluriannuels ?',
        answer: 'Oui, nous proposons des réductions progressives pour les engagements pluriannuels : 5% de réduction pour 2 ans, 10% pour 3 ans, et jusqu\'à 15% pour 5 ans. Contactez notre équipe commerciale pour discuter de votre situation.'
      },
      {
        id: 'tarif-5',
        question: 'Les pièces de rechange sont-elles facturées en sus ?',
        answer: 'Oui, les pièces de rechange sont facturées séparément au tarif du catalogue. Cependant, les clients disposant d\'un contrat de maintenance annuel bénéficient de tarifs préférentiels de 15 à 20% sur les pièces.'
      },
      {
        id: 'tarif-6',
        question: 'Acceptez-vous les bons de commande et les conditions de paiement différé ?',
        answer: 'Oui, nous acceptons les bons de commande des établissements publics et privés. Les conditions de paiement peuvent être négociées : net 30, net 60, ou selon vos conditions habituelles. Nous travaillons également avec les systèmes de facturation électronique.'
      }
    ]
  },
  {
    category: 'Garantie et Responsabilité',
    questions: [
      {
        id: 'garantie-1',
        question: 'Quelle est la garantie sur les interventions ?',
        answer: 'Toutes nos interventions sont garanties 30 jours. Si un problème survient dans ce délai suite à notre intervention, nous effectuons les corrections gratuitement. Les pièces installées sont garanties selon les conditions du fabricant.'
      },
      {
        id: 'garantie-2',
        question: 'Êtes-vous assuré en responsabilité civile ?',
        answer: 'Oui, Regnard Médical dispose d\'une assurance responsabilité civile complète couvrant les dommages matériels et immatériels. Nous pouvons vous fournir une copie de notre certificat d\'assurance sur demande.'
      },
      {
        id: 'garantie-3',
        question: 'Que se passe-t-il si l\'équipement ne peut pas être réparé ?',
        answer: 'Si la réparation n\'est pas possible, nous vous proposons un diagnostic détaillé avec recommandations de remplacement. Nous pouvons vous aider à trouver une solution alternative adaptée à vos besoins et budget.'
      }
    ]
  },
  {
    category: 'Commande et Devis',
    questions: [
      {
        id: 'commande-1',
        question: 'Comment demander un devis ?',
        answer: 'Vous pouvez demander un devis via notre formulaire en ligne, par téléphone, ou par email. Nous vous contactons rapidement pour comprendre vos besoins et vous proposer un devis détaillé et sans engagement.'
      },
      {
        id: 'commande-2',
        question: 'Quel est le délai de validité d\'un devis ?',
        answer: 'Nos devis sont valables 30 jours à partir de la date d\'émission. Au-delà, nous vous proposons un devis actualisé. Les prix peuvent être modifiés en fonction des variations de coûts matériels.'
      },
      {
        id: 'commande-3',
        question: 'Pouvez-vous intervenir rapidement en cas d\'urgence ?',
        answer: 'Oui, nous proposons un service d\'urgence 24h/24 pour les pannes critiques. Contactez-nous directement au numéro d\'urgence fourni dans votre contrat ou sur notre site.'
      }
    ]
  }
];

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      {/* Hero Section */}
      <section className="py-20 pt-32 bg-gradient-to-br from-background to-secondary">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="mb-6">Questions Fréquemment Posées</h1>
            <p className="text-xl text-muted-foreground">
              Trouvez les réponses à vos questions sur nos services de maintenance, nos tarifs et nos conditions d'intervention.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <div className="space-y-12">
            {faqData.map((category) => (
              <div key={category.category}>
                <h2 className="mb-8 font-bold text-foreground">
                  {category.category}
                </h2>
                
                <div className="space-y-4">
                  {category.questions.map((item) => (
                    <div
                      key={item.id}
                      className="border border-border rounded-lg overflow-hidden transition-all duration-200 hover:border-accent"
                    >
                      <button
                        onClick={() => toggleExpand(item.id)}
                        className="w-full px-6 py-4 flex items-center justify-between bg-card hover:bg-secondary transition-colors duration-150"
                      >
                        <h3 className="text-left font-semibold text-foreground">
                          {item.question}
                        </h3>
                        <ChevronDown
                          className={`h-5 w-5 text-accent flex-shrink-0 transition-transform duration-200 ${
                            expandedId === item.id ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {expandedId === item.id && (
                        <div className="px-6 py-4 bg-background border-t border-border">
                          <p className="text-muted-foreground leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 p-8 bg-secondary rounded-lg border border-border">
            <h3 className="mb-4 font-bold text-foreground">
              Vous n'avez pas trouvé votre réponse ?
            </h3>
            <p className="mb-6 text-muted-foreground">
              Notre équipe est disponible pour répondre à toutes vos questions. N'hésitez pas à nous contacter directement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="px-6 py-3 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors duration-150 inline-block text-center"
              >
                Nous Contacter
              </a>
              <a
                href="/"
                className="px-6 py-3 border border-border text-foreground font-semibold hover:bg-secondary transition-colors duration-150 inline-block text-center"
              >
                Retour à l'accueil
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
