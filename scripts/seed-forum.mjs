#!/usr/bin/env node

/**
 * Script de seed pour initialiser le forum avec des données fictives
 * Crée des utilisateurs fictifs, des sujets de forum, et des réponses du Dr L'Hirondel
 */

import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  console.error('DATABASE_URL environment variable is not set');
  process.exit(1);
}

// Parse DATABASE_URL
const url = new URL(DATABASE_URL);
const config = {
  host: url.hostname,
  user: url.username,
  password: url.password,
  database: url.pathname.substring(1),
  port: url.port || 3306,
  ssl: { rejectUnauthorized: false },
};

// Utilisateurs fictifs
const fictionalUsers = [
  {
    openId: 'user-marie-dubois',
    name: 'Marie Dubois',
    email: 'marie.dubois@ehpad-saintemarie.fr',
    loginMethod: 'oauth',
    role: 'user',
  },
  {
    openId: 'user-jean-martin',
    name: 'Jean Martin',
    email: 'jean.martin@ehpad-saintemarie.fr',
    loginMethod: 'oauth',
    role: 'user',
  },
  {
    openId: 'user-sophie-bernard',
    name: 'Sophie Bernard',
    email: 'sophie.bernard@clinique-nord.fr',
    loginMethod: 'oauth',
    role: 'user',
  },
  {
    openId: 'user-pierre-rousseau',
    name: 'Pierre Rousseau',
    email: 'pierre.rousseau@hopital-central.fr',
    loginMethod: 'oauth',
    role: 'user',
  },
  {
    openId: 'user-isabelle-leclerc',
    name: 'Isabelle Leclerc',
    email: 'isabelle.leclerc@ehpad-saintemarie.fr',
    loginMethod: 'oauth',
    role: 'user',
  },
  {
    openId: 'user-thomas-moreau',
    name: 'Thomas Moreau',
    email: 'thomas.moreau@ehpad-saintemarie.fr',
    loginMethod: 'oauth',
    role: 'user',
  },
  {
    openId: 'user-anne-dupont',
    name: 'Anne Dupont',
    email: 'anne.dupont@clinique-nord.fr',
    loginMethod: 'oauth',
    role: 'user',
  },
  {
    openId: 'user-christian-lhirondel',
    name: 'Dr Christian L\'Hirondel',
    email: 'christian.lhirondel@regnardmedical.com',
    loginMethod: 'oauth',
    role: 'moderator',
  },
];

// Sujets de forum avec leurs questions
const forumTopics = [
  // Catégorie 1: Installation et prise en main
  {
    title: 'Premiers pas avec le divan Relax Regnard',
    description: 'Conseils et retours pour bien démarrer avec votre nouveau divan. Installation, configuration initiale, premiers tests.',
    category: 'Installation et prise en main',
    seo: 'installation dispositif médical, mise en service, formation soignants',
  },
  {
    title: 'Installation dans une salle de bain médicalisée (retours d\'expérience)',
    description: 'Partage d\'expériences sur l\'installation du divan dans différents types de salles de bain. Adaptations, contraintes, solutions.',
    category: 'Installation et prise en main',
    seo: 'installation dispositif médical, aménagement salle de bain',
  },
  {
    title: 'Configuration optimale dans un EHPAD',
    description: 'Optimisation de l\'espace et de la configuration pour les EHPAD. Flux de travail, organisation des soins.',
    category: 'Installation et prise en main',
    seo: 'configuration EHPAD, optimisation espace',
  },
  {
    title: 'Formation des équipes : combien de temps faut-il ?',
    description: 'Durée et contenu de la formation pour les soignants. Ressources pédagogiques et bonnes pratiques.',
    category: 'Installation et prise en main',
    seo: 'formation soignants, durée formation',
  },
  {
    title: 'Erreurs fréquentes lors de la mise en service',
    description: 'Erreurs courantes et comment les éviter. Dépannage et solutions rapides.',
    category: 'Installation et prise en main',
    seo: 'mise en service, dépannage, erreurs fréquentes',
  },

  // Catégorie 2: Usage quotidien par les soignants
  {
    title: 'Comment améliorer le confort des patients lors du soin',
    description: 'Techniques et astuces pour maximiser le confort du patient pendant les soins d\'hygiène.',
    category: 'Usage quotidien par les soignants',
    seo: 'soins EHPAD, confort patient, hygiène',
  },
  {
    title: 'Astuces pour réduire les troubles musculo-squelettiques (TMS)',
    description: 'Ergonomie et gestes pour protéger la santé des soignants. Prévention des TMS.',
    category: 'Usage quotidien par les soignants',
    seo: 'ergonomie soignant, TMS, prévention',
  },
  {
    title: 'Organisation des soins avec le divan',
    description: 'Planification et organisation optimale des soins quotidiens avec le divan.',
    category: 'Usage quotidien par les soignants',
    seo: 'organisation soins, planning EHPAD',
  },
  {
    title: 'Temps gagné par rapport aux méthodes classiques',
    description: 'Comparaison des temps de soin avec les anciennes méthodes. Gains de productivité.',
    category: 'Usage quotidien par les soignants',
    seo: 'gain temps, productivité, efficacité',
  },
  {
    title: 'Utilisation avec patients dépendants ou agités',
    description: 'Conseils spécifiques pour l\'utilisation avec patients difficiles ou très dépendants.',
    category: 'Usage quotidien par les soignants',
    seo: 'patients dépendants, gestion comportement',
  },

  // Catégorie 3: Retours d'expérience terrain
  {
    title: 'Témoignage d\'un établissement utilisateur',
    description: 'Retour d\'expérience complet d\'un EHPAD ou clinique ayant adopté le divan Regnard.',
    category: 'Retours d\'expérience terrain',
    seo: 'témoignage EHPAD, avis dispositif médical',
  },
  {
    title: 'Impact sur la qualité des soins',
    description: 'Analyse de l\'impact du divan sur la qualité globale des soins et la satisfaction des patients.',
    category: 'Retours d\'expérience terrain',
    seo: 'qualité soins, satisfaction patient',
  },
  {
    title: 'Réaction des familles',
    description: 'Comment les familles réagissent à cette nouvelle approche des soins d\'hygiène.',
    category: 'Retours d\'expérience terrain',
    seo: 'satisfaction familles, acceptation innovation',
  },
  {
    title: 'Acceptation par les équipes',
    description: 'Retours sur l\'acceptation et l\'adoption par les équipes soignantes.',
    category: 'Retours d\'expérience terrain',
    seo: 'adoption équipes, changement organisationnel',
  },
  {
    title: 'Avant / après installation',
    description: 'Comparaison avant et après : impacts mesurables et observations qualitatives.',
    category: 'Retours d\'expérience terrain',
    seo: 'avant après, impact installation',
  },

  // Catégorie 4: Hygiène et protocoles
  {
    title: 'Protocoles de nettoyage du divan',
    description: 'Procédures et protocoles de nettoyage et désinfection du divan.',
    category: 'Hygiène et protocoles',
    seo: 'hygiène EHPAD, protocole nettoyage',
  },
  {
    title: 'Produits compatibles avec les surfaces',
    description: 'Quels produits utiliser pour nettoyer et désinfecter le divan sans l\'endommager.',
    category: 'Hygiène et protocoles',
    seo: 'produits désinfection, compatibilité matériaux',
  },
  {
    title: 'Gestion du linge et des serviettes',
    description: 'Protocoles de gestion du linge et des serviettes utilisés avec le divan.',
    category: 'Hygiène et protocoles',
    seo: 'gestion linge, protocole hygiène',
  },
  {
    title: 'Prévention des infections',
    description: 'Mesures pour prévenir les infections liées à l\'utilisation du divan.',
    category: 'Hygiène et protocoles',
    seo: 'prévention infections, hygiène EHPAD',
  },

  // Catégorie 5: Maintenance et durabilité
  {
    title: 'Entretien régulier recommandé',
    description: 'Calendrier et procédures d\'entretien régulier du divan pour assurer sa durabilité.',
    category: 'Maintenance et durabilité',
    seo: 'maintenance matériel médical, entretien régulier',
  },
  {
    title: 'Pannes fréquentes et solutions rapides',
    description: 'Problèmes courants et solutions de dépannage rapide.',
    category: 'Maintenance et durabilité',
    seo: 'dépannage, pannes fréquentes, solutions',
  },
  {
    title: 'Pièces d\'usure',
    description: 'Identification et remplacement des pièces d\'usure du divan.',
    category: 'Maintenance et durabilité',
    seo: 'pièces d\'usure, remplacement pièces',
  },
  {
    title: 'Durée de vie du matériel',
    description: 'Estimation de la durée de vie du divan et facteurs qui l\'influencent.',
    category: 'Maintenance et durabilité',
    seo: 'durée de vie équipement, longévité',
  },

  // Catégorie 6: Évolution du produit (co-innovation)
  {
    title: 'Idées d\'amélioration du produit',
    description: 'Proposez vos idées pour améliorer le divan Regnard.',
    category: 'Évolution du produit',
    seo: 'innovation santé, amélioration dispositif',
  },
  {
    title: 'Fonctionnalités souhaitées',
    description: 'Quelles fonctionnalités aimeriez-vous voir sur le divan ?',
    category: 'Évolution du produit',
    seo: 'fonctionnalités souhaitées, innovation',
  },
  {
    title: 'Adaptations pour d\'autres usages (hôpital, domicile…)',
    description: 'Réflexions sur l\'adaptation du divan pour d\'autres contextes d\'utilisation.',
    category: 'Évolution du produit',
    seo: 'adaptation produit, nouveaux usages',
  },
  {
    title: 'Retour sur prototypes / POC',
    description: 'Retours d\'expérience sur les prototypes et projets pilotes.',
    category: 'Évolution du produit',
    seo: 'prototype, POC, test produit',
  },

  // Catégorie 7: Organisation des soins et bonnes pratiques
  {
    title: 'Comment optimiser le planning des soins',
    description: 'Stratégies pour optimiser le planning des soins avec le divan.',
    category: 'Organisation des soins',
    seo: 'organisation soins gériatriques, optimisation EHPAD',
  },
  {
    title: 'Combien de patients par jour ?',
    description: 'Capacité de traitement et recommandations sur le nombre de patients par jour.',
    category: 'Organisation des soins',
    seo: 'capacité traitement, planning patients',
  },
  {
    title: 'Réduction de la pénibilité pour les équipes',
    description: 'Comment le divan contribue à réduire la pénibilité du travail des soignants.',
    category: 'Organisation des soins',
    seo: 'pénibilité travail, bien-être équipes',
  },
  {
    title: 'Amélioration du bien-être des résidents',
    description: 'Impact positif du divan sur le bien-être global des résidents.',
    category: 'Organisation des soins',
    seo: 'bien-être résidents, qualité vie EHPAD',
  },

  // Catégorie 8: Cas particuliers
  {
    title: 'Patients très dépendants',
    description: 'Conseils spécifiques pour l\'utilisation avec des patients très dépendants.',
    category: 'Cas particuliers',
    seo: 'soins patients dépendants, gériatrie',
  },
  {
    title: 'Obésité ou mobilité réduite',
    description: 'Adaptations pour patients avec obésité ou mobilité très réduite.',
    category: 'Cas particuliers',
    seo: 'patients obésité, mobilité réduite',
  },
  {
    title: 'Troubles cognitifs',
    description: 'Gestion des soins pour patients avec troubles cognitifs ou démence.',
    category: 'Cas particuliers',
    seo: 'troubles cognitifs, démence, gériatrie',
  },
  {
    title: 'Gestion des refus de soins',
    description: 'Stratégies pour gérer les refus de soins et améliorer l\'acceptation.',
    category: 'Cas particuliers',
    seo: 'refus soins, adhésion patient',
  },

  // Catégorie 9: Comparaison avec autres solutions
  {
    title: 'Toilette au lit vs divan de soin',
    description: 'Comparaison entre la toilette au lit traditionnelle et le divan de soin.',
    category: 'Comparaison',
    seo: 'équipement EHPAD, solutions toilette',
  },
  {
    title: 'Douche médicalisée vs solution Regnard',
    description: 'Comparaison entre douche médicalisée et le divan Regnard.',
    category: 'Comparaison',
    seo: 'douche médicalisée, comparaison solutions',
  },
  {
    title: 'Gain de temps réel',
    description: 'Analyse objective du gain de temps avec le divan par rapport aux autres solutions.',
    category: 'Comparaison',
    seo: 'gain temps réel, efficacité comparative',
  },

  // Catégorie 10: Communauté utilisateurs
  {
    title: 'Présentation des établissements utilisateurs',
    description: 'Présentez votre établissement et votre expérience avec le divan Regnard.',
    category: 'Communauté',
    seo: 'réseau soignants, partage pratiques',
  },
  {
    title: 'Photos d\'installations',
    description: 'Partagez des photos de vos installations et aménagements.',
    category: 'Communauté',
    seo: 'galerie installations, partage expériences',
  },
  {
    title: 'Questions ouvertes entre soignants',
    description: 'Espace d\'échange libre entre soignants pour partager expériences et conseils.',
    category: 'Communauté',
    seo: 'réseau soignants, entraide professionnelle',
  },
];

// Réponses du Dr L'Hirondel pour chaque sujet
const drLhirondellResponses = [
  {
    topicIndex: 0,
    content: `Bienvenue sur le forum ! Je suis ravi de vous aider dans vos premiers pas avec le divan Relax Regnard.

Pour bien démarrer, je vous recommande de :

1. **Lire attentivement le manuel d'utilisation** - Il contient toutes les informations essentielles sur l'installation et la configuration initiale.

2. **Effectuer les tests de sécurité** - Avant la première utilisation clinique, testez tous les systèmes de sécurité et les contrôles d'urgence.

3. **Former votre équipe progressivement** - Commencez avec un petit groupe de soignants expérimentés, puis élargissez progressivement.

4. **Documenter votre configuration** - Prenez des photos de votre installation pour référence future.

N'hésitez pas à me poser des questions spécifiques. Je suis là pour vous aider !

Dr Christian L'Hirondel`,
  },
  {
    topicIndex: 1,
    content: `Excellente question ! L'installation dans une salle de bain médicalisée présente des défis spécifiques.

Voici mes recommandations :

**Espace et circulation** :
- Assurez-vous d'au moins 1,5m de dégagement autour du divan
- Vérifiez que les portes s'ouvrent complètement sans obstruction
- Prévoyez un accès facile pour le nettoyage

**Adaptations courantes** :
- Installation en coin pour optimiser l'espace
- Utilisation de miroirs pour améliorer la visibilité
- Aménagement des rangements pour les produits de soin

**Points critiques** :
- Vérifiez la stabilité du sol (anti-dérapant recommandé)
- Assurez-vous que les connexions d'eau sont accessibles
- Testez la ventilation pour éviter l'humidité excessive

Je serais heureux de discuter de votre configuration spécifique. Pouvez-vous me donner les dimensions de votre salle de bain ?

Dr Christian L'Hirondel`,
  },
  {
    topicIndex: 2,
    content: `La configuration optimale dans un EHPAD dépend de plusieurs facteurs : nombre de résidents, flux de soins, espace disponible.

**Recommandations générales** :

1. **Localisation stratégique** - Placez le divan à proximité des zones de vie des résidents pour minimiser les déplacements

2. **Flux de travail** - Organisez l'espace pour que les soignants puissent accéder facilement aux fournitures et au linge

3. **Intimité et confort** - Prévoyez des écrans ou des rideaux pour préserver la dignité des résidents

4. **Accessibilité** - Assurez-vous que les résidents en fauteuil roulant peuvent accéder facilement

5. **Sécurité** - Vérifiez que les issues de secours restent dégagées

Pour un EHPAD de 50-80 résidents, je recommande généralement 1-2 divans bien positionnés.

Quel est le nombre de résidents dans votre établissement ?

Dr Christian L'Hirondel`,
  },
  {
    topicIndex: 3,
    content: `La formation est un élément clé du succès. Voici mon approche recommandée :

**Durée totale** : 4-6 heures pour une formation complète

**Contenu** :
- 1h : Présentation générale et principes de sécurité
- 1h : Démonstration pratique et manipulation
- 2h : Exercices pratiques supervisés
- 1h : Protocoles d'hygiène et de nettoyage
- 1h : Dépannage et questions

**Suivi** :
- Évaluation après 1 semaine d'utilisation
- Séance de renforcement après 1 mois
- Support continu disponible

**Ressources** :
- Vidéos de formation disponibles
- Guide utilisateur détaillé
- Support téléphonique 24/7

La clé est la pratique régulière et la confiance progressive. Certains soignants maîtrisent rapidement, d'autres ont besoin de plus de temps. C'est normal !

Avez-vous des questions sur le contenu de la formation ?

Dr Christian L'Hirondel`,
  },
  {
    topicIndex: 4,
    content: `Excellente initiative ! Connaître les erreurs courantes aide à les éviter.

**Erreurs fréquentes** :

1. **Oublier de vérifier les connexions d'eau** - Vérifiez toujours que les tuyaux sont bien connectés avant la première utilisation

2. **Ne pas calibrer la température** - Testez la température de l'eau avant de l'utiliser sur les patients

3. **Ignorer les protocoles de sécurité** - Tous les systèmes de sécurité doivent être testés régulièrement

4. **Négliger le nettoyage initial** - Nettoyez complètement le divan avant la première utilisation

5. **Surcharger le réservoir** - Respectez les limites de capacité indiquées

**Solutions rapides** :
- Consultez le guide de dépannage
- Appelez notre support technique
- Documentez le problème pour référence future

N'hésitez pas à partager vos expériences ici. Les retours des utilisateurs nous aident à améliorer continuellement nos produits.

Dr Christian L'Hirondel`,
  },
  {
    topicIndex: 5,
    content: `Le confort du patient est au cœur de notre approche. Voici mes recommandations :

**Avant le soin** :
- Expliquez le processus au patient pour réduire l'anxiété
- Vérifiez la température de l'eau (37-38°C est idéal)
- Assurez-vous que le divan est confortable et stable

**Pendant le soin** :
- Maintenez une température corporelle agréable
- Utilisez des gestes doux et respectueux
- Parlez au patient pour le rassurer
- Ajustez la pression et le débit selon son confort

**Après le soin** :
- Séchez délicatement
- Appliquez des produits de soin si nécessaire
- Vérifiez que le patient se sent bien

**Points clés** :
- L'écoute du patient est essentielle
- Chaque patient est différent - adaptez-vous
- Le confort psychologique est aussi important que le confort physique

Avez-vous des situations spécifiques où vous trouvez difficile d'améliorer le confort ?

Dr Christian L'Hirondel`,
  },
  {
    topicIndex: 6,
    content: `La prévention des TMS est cruciale pour la santé des soignants. Voici mes recommandations ergonomiques :

**Positionnement** :
- Maintenez le dos droit, jambes légèrement fléchies
- Évitez les torsions du tronc
- Positionnez-vous face à votre zone de travail

**Mouvements** :
- Utilisez les jambes plutôt que le dos pour vous pencher
- Effectuez des mouvements lents et contrôlés
- Alternez les côtés du corps

**Utilisation du divan** :
- Ajustez la hauteur du divan pour minimiser les flexions
- Utilisez les accoudoirs pour vous soutenir
- Prenez des pauses régulières

**Exercices recommandés** :
- Étirements du dos avant et après le travail
- Renforcement des abdominaux
- Exercices de mobilité articulaire

**Pauses** :
- Prenez des pauses courtes mais régulières
- Changez de position fréquemment
- Faites des exercices de détente

Les TMS sont souvent dus à l'accumulation de petits traumatismes. La prévention est la meilleure stratégie !

Dr Christian L'Hirondel`,
  },
  {
    topicIndex: 7,
    content: `L'organisation des soins avec le divan peut être très efficace si bien planifiée.

**Principes d'organisation** :

1. **Grouper les soins** - Planifiez les soins du matin et de l'après-midi par groupes
2. **Préparation** - Préparez tous les matériaux avant de commencer
3. **Flux continu** - Minimisez les interruptions entre les patients
4. **Équipe** - Deux soignants peuvent être plus efficaces qu'un seul pour certains patients

**Exemple de planning** :
- 6h-8h : Soins du matin (8-10 patients)
- 8h-9h : Nettoyage et préparation
- 14h-16h : Soins de l'après-midi (8-10 patients)
- 16h-17h : Nettoyage et maintenance

**Facteurs à considérer** :
- Dépendance des patients
- Disponibilité du personnel
- Espace et équipements
- Besoins spécifiques des patients

Avec une bonne organisation, vous pouvez traiter 15-20 patients par jour par divan.

Quel est votre volume actuel de patients ?

Dr Christian L'Hirondel`,
  },
  {
    topicIndex: 8,
    content: `Excellente question ! Le gain de temps est l'un des principaux avantages du divan.

**Comparaison de temps** :

Toilette au lit traditionnelle :
- Préparation : 10-15 min
- Toilette : 20-30 min
- Nettoyage : 10-15 min
- Total : 40-60 min

Divan Regnard :
- Préparation : 5-10 min
- Soin : 10-15 min
- Nettoyage automatique : 5-10 min
- Total : 20-35 min

**Gain moyen : 40-50% de temps économisé**

**Autres bénéfices** :
- Réduction de la fatigue des soignants
- Meilleure qualité des soins
- Amélioration du confort du patient
- Réduction des infections

**ROI** :
- Avec 15-20 patients par jour, le gain de temps se traduit rapidement en économies
- Réduction des arrêts maladie des soignants
- Meilleure satisfaction des patients

Ces chiffres sont basés sur mes observations cliniques. Vos résultats peuvent varier selon votre contexte.

Dr Christian L'Hirondel`,
  },
  {
    topicIndex: 9,
    content: `Les patients dépendants ou agités présentent des défis particuliers. Voici mes stratégies :

**Patients très dépendants** :
- Utilisez les systèmes de soutien et de maintien
- Assurez-vous que le divan est stable et sécurisé
- Travaillez à deux pour plus de sécurité
- Communiquez constamment avec le patient

**Patients agités** :
- Restez calme et rassurant
- Expliquez chaque étape du processus
- Utilisez des gestes lents et prévisibles
- Prenez des pauses si nécessaire
- Envisagez une aide médicale si l'agitation persiste

**Conseils généraux** :
- Créez un environnement calme et rassurant
- Utilisez des techniques de relaxation
- Impliquez la famille si possible
- Documentez les comportements pour identifier les patterns

**Sécurité** :
- Utilisez toujours les systèmes de retenue si nécessaire
- Vérifiez régulièrement la stabilité
- Maintenez une distance de sécurité

N'hésitez pas à me contacter si vous avez des situations difficiles à gérer.

Dr Christian L'Hirondel`,
  },
  {
    topicIndex: 10,
    content: `Je suis très heureux d'entendre les témoignages des établissements utilisateurs !

Vos retours d'expérience sont précieux pour :
- Améliorer nos produits
- Aider d'autres établissements
- Valider nos approches cliniques
- Identifier les meilleures pratiques

**Pour un bon témoignage, incluez** :
- Contexte de votre établissement (type, taille, population)
- Objectifs avant l'installation
- Résultats observés
- Défis rencontrés et solutions
- Recommandations pour d'autres

Je suis particulièrement intéressé par :
- Les impacts sur la qualité des soins
- Les retours des patients et des familles
- Les changements dans l'organisation du travail
- Les améliorations suggérées

Merci de partager votre expérience !

Dr Christian L'Hirondel`,
  },
  {
    topicIndex: 11,
    content: `L'impact sur la qualité des soins est un aspect crucial que nous mesurons constamment.

**Indicateurs de qualité observés** :

1. **Hygiène** :
   - Réduction des infections liées aux soins
   - Meilleure conformité aux protocoles
   - Traçabilité améliorée

2. **Confort du patient** :
   - Satisfaction augmentée
   - Réduction de l'anxiété
   - Meilleure acceptation des soins

3. **Sécurité** :
   - Réduction des incidents
   - Meilleure prévention des chutes
   - Moins de blessures aux soignants

4. **Efficacité** :
   - Meilleure utilisation du temps
   - Réduction de la charge de travail
   - Amélioration du bien-être des équipes

**Mesure** :
- Enquêtes de satisfaction
- Indicateurs cliniques
- Données de sécurité
- Retours d'expérience

Avez-vous des métriques spécifiques que vous aimeriez mesurer ?

Dr Christian L'Hirondel`,
  },
  {
    topicIndex: 12,
    content: `La réaction des familles est souvent très positive. Voici ce que j'observe généralement :

**Réactions positives** :
- Soulagement de voir leur proche traité avec dignité
- Appréciation de la qualité des soins améliorée
- Confiance accrue dans l'établissement
- Satisfaction de voir la réduction de la pénibilité pour les soignants

**Préoccupations initiales** :
- Peur de l'inconnu (nouvelle technologie)
- Craintes concernant la sécurité
- Questions sur l'efficacité

**Comment les adresser** :
- Expliquez clairement le processus
- Montrez des vidéos de démonstration
- Invitez les familles à observer (si approprié)
- Partagez les résultats positifs
- Écoutez et répondez aux préoccupations

**Communication** :
- Informez les familles avant l'installation
- Fournissez des documents explicatifs
- Organisez des réunions d'information
- Recueillez les retours régulièrement

La transparence et la communication sont clés pour gagner la confiance des familles.

Dr Christian L'Hirondel`,
  },
  {
    topicIndex: 13,
    content: `L'acceptation par les équipes est souvent un facteur clé du succès.

**Facteurs d'acceptation** :

1. **Formation adéquate** :
   - Formation complète et pratique
   - Support continu
   - Ressources accessibles

2. **Implication** :
   - Impliquez l'équipe dans la sélection
   - Écoutez leurs préoccupations
   - Valorisez leurs retours

3. **Résultats visibles** :
   - Réduction de la fatigue
   - Meilleure qualité des soins
   - Amélioration du bien-être

4. **Support managérial** :
   - Direction engagée
   - Ressources allouées
   - Reconnaissance des efforts

**Stratégies de changement** :
- Commencez avec les "champions" du changement
- Créez un groupe pilote
- Partagez les succès
- Adressez les résistances avec empathie

**Résistances courantes** :
- "C'est trop compliqué" → Montrez la simplicité
- "Je préfère l'ancienne méthode" → Expliquez les avantages
- "Ça va me prendre plus de temps" → Montrez les gains

L'acceptation prend du temps, mais elle vient avec les résultats.

Dr Christian L'Hirondel`,
  },
  {
    topicIndex: 14,
    content: `Les comparaisons avant/après sont très révélatrices. Voici comment les structurer :

**Avant installation** :
- Temps moyen par patient
- Nombre de patients traités par jour
- Incidents de sécurité
- Satisfaction des patients et des soignants
- Taux d'absentéisme
- Coûts de nettoyage et de fournitures

**Après installation** :
- Mesurer les mêmes indicateurs
- Comparer après 1, 3 et 6 mois
- Identifier les tendances
- Documenter les changements qualitatifs

**Exemple de résultats** :
- Temps par patient : 45 min → 25 min (-44%)
- Patients/jour : 12 → 18 (+50%)
- Satisfaction : 6/10 → 8.5/10
- Incidents : 3/mois → 0.5/mois (-83%)

**Partage des résultats** :
- Créez des tableaux de bord
- Organisez des réunions de retour
- Célébrez les succès
- Utilisez les données pour améliorer

Ces comparaisons sont très motivantes pour les équipes !

Dr Christian L'Hirondel`,
  },
  {
    topicIndex: 15,
    content: `L'hygiène est fondamentale. Voici mes protocoles recommandés :

**Nettoyage quotidien** :
- Après chaque patient : essuyage rapide
- Fin de journée : nettoyage complet
- Produits : eau + savon doux ou désinfectant approuvé
- Temps : 10-15 minutes

**Nettoyage hebdomadaire** :
- Nettoyage en profondeur
- Vérification des joints et des surfaces
- Remplacement des pièces usées si nécessaire

**Nettoyage mensuel** :
- Inspection complète
- Maintenance préventive
- Vérification des systèmes de sécurité

**Produits recommandés** :
- Eau et savon neutre
- Désinfectants approuvés (vérifiez la compatibilité)
- Évitez les produits abrasifs
- Pas de solvants forts

**Documentation** :
- Tenez un registre de nettoyage
- Documentez tout problème identifié
- Conservez les preuves de maintenance

L'hygiène rigoureuse prévient les infections et prolonge la durée de vie du divan.

Dr Christian L'Hirondel`,
  },
  {
    topicIndex: 16,
    content: `Le choix des produits est important pour préserver le divan.

**Produits sûrs** :
- Eau et savon doux (première ligne)
- Alcool 70° (pour désinfection rapide)
- Désinfectants hospitaliers approuvés
- Produits sans chlore pour surfaces sensibles

**Produits à éviter** :
- Solvants forts (acétone, etc.)
- Produits abrasifs
- Eau de Javel non diluée
- Produits corrosifs

**Recommandations** :
- Testez toujours sur une petite zone d'abord
- Suivez les instructions du fabricant
- Rincez complètement après le nettoyage
- Séchez les surfaces après le nettoyage

**Surfaces spécifiques** :
- Surfaces en acier : eau + savon, puis alcool
- Surfaces en plastique : eau + savon doux
- Joints : brosse douce + eau
- Réservoir : eau + savon, rincez bien

La compatibilité des produits est clé pour la longévité du divan.

Dr Christian L'Hirondel`,
  },
  {
    topicIndex: 17,
    content: `La gestion du linge est un aspect souvent négligé mais important.

**Protocoles recommandés** :

**Avant utilisation** :
- Utilisez du linge propre et sec
- Vérifiez l'absence de taches ou de dommages
- Choisissez des matériaux doux et absorbants

**Pendant l'utilisation** :
- Changez le linge entre chaque patient
- Utilisez des protections jetables si possible
- Évitez les accumulations d'humidité

**Après utilisation** :
- Collectez le linge dans des sacs dédiés
- Triez par type (normal, contaminé, etc.)
- Lavez selon les protocoles d'hygiène
- Séchez complètement avant réutilisation

**Stockage** :
- Stockez dans un endroit propre et sec
- Protégez du contact avec des surfaces sales
- Vérifiez régulièrement l'état du linge
- Remplacez le linge endommagé

**Quantités** :
- Prévoyez au moins 3-4 jeux de linge par divan
- Cela permet une rotation continue
- Évite les pénuries

Une bonne gestion du linge contribue à l'hygiène globale et à la durabilité.

Dr Christian L'Hirondel`,
  },
  {
    topicIndex: 18,
    content: `La prévention des infections est une priorité absolue.

**Mesures clés** :

1. **Hygiène des mains** :
   - Avant et après chaque patient
   - Avant et après le nettoyage
   - Utilisation d'antiseptique si nécessaire

2. **Nettoyage du divan** :
   - Après chaque patient
   - Désinfection régulière
   - Vérification des surfaces

3. **Équipement de protection** :
   - Gants si nécessaire
   - Masques si risque d'exposition
   - Blouses de protection

4. **Protocoles** :
   - Respectez les protocoles d'hygiène
   - Documentez les nettoyages
   - Signalez tout problème

5. **Formation** :
   - Formez l'équipe aux protocoles
   - Mises à jour régulières
   - Évaluations de conformité

6. **Surveillance** :
   - Surveillez les taux d'infection
   - Analysez les incidents
   - Ajustez les protocoles si nécessaire

**Résultats** :
- Réduction des infections liées aux soins
- Meilleure conformité aux standards
- Confiance accrue des patients

La prévention est toujours plus efficace que le traitement.

Dr Christian L'Hirondel`,
  },
  {
    topicIndex: 19,
    content: `L'entretien régulier est la clé de la longévité du divan.

**Calendrier d'entretien recommandé** :

**Quotidien** :
- Nettoyage après utilisation
- Vérification visuelle
- Vérification des connexions

**Hebdomadaire** :
- Nettoyage en profondeur
- Vérification des joints
- Test des systèmes de sécurité

**Mensuel** :
- Inspection complète
- Vérification des pièces d'usure
- Maintenance préventive
- Remplacement des pièces si nécessaire

**Trimestriel** :
- Révision complète
- Vérification des performances
- Calibrage si nécessaire

**Annuel** :
- Inspection professionnelle
- Remplacement des pièces d'usure majeures
- Mise à jour des systèmes si applicable

**Documentation** :
- Tenez un registre d'entretien
- Documentez tous les travaux effectués
- Conservez les reçus de pièces
- Notez tout problème identifié

Un entretien régulier prévient les pannes et prolonge la durée de vie du divan de 50% ou plus.

Dr Christian L'Hirondel`,
  },
  {
    topicIndex: 20,
    content: `Les pannes sont rares si l'entretien est régulier, mais voici comment les gérer.

**Pannes courantes et solutions** :

1. **Pas de débit d'eau** :
   - Vérifiez les connexions
   - Vérifiez le réservoir (niveau, blocages)
   - Nettoyez les filtres
   - Appelez le support si le problème persiste

2. **Température incorrecte** :
   - Vérifiez le thermostat
   - Testez avec un thermomètre
   - Attendez le temps de préchauffage
   - Contactez le support pour recalibrage

3. **Bruits inhabituels** :
   - Arrêtez l'appareil
   - Vérifiez les connexions
   - Vérifiez les vibrations
   - Appelez le support

4. **Fuites** :
   - Arrêtez immédiatement
   - Identifiez la source
   - Vérifiez les joints
   - Contactez le support pour réparation

5. **Système de sécurité déclenché** :
   - Lisez le message d'erreur
   - Consultez le guide de dépannage
   - Réinitialisez si approprié
   - Appelez le support si le problème persiste

**Support technique** :
- Ligne directe : disponible 24/7
- Email : support@regnardmedical.com
- Chat en ligne : sur notre site web

La plupart des problèmes peuvent être résolus rapidement avec un bon diagnostic.

Dr Christian L'Hirondel`,
  },
  {
    topicIndex: 21,
    content: `Les pièces d'usure doivent être remplacées régulièrement pour maintenir les performances.

**Pièces d'usure courantes** :

1. **Joints et joints d'étanchéité** :
   - Durée de vie : 6-12 mois
   - Signes d'usure : fuites, grincements
   - Remplacement : simple, peu coûteux

2. **Filtres** :
   - Durée de vie : 3-6 mois
   - Signes d'usure : débit réduit, eau trouble
   - Remplacement : mensuel recommandé

3. **Tuyauterie** :
   - Durée de vie : 2-3 ans
   - Signes d'usure : fuites, rigidité
   - Remplacement : selon besoin

4. **Électrodes/capteurs** :
   - Durée de vie : 1-2 ans
   - Signes d'usure : lectures incorrectes
   - Remplacement : par technicien

5. **Batterie de secours** (si applicable) :
   - Durée de vie : 3-5 ans
   - Remplacement : selon calendrier

**Approche recommandée** :
- Inspectez régulièrement
- Remplacez avant la rupture
- Conservez des pièces de rechange
- Documentez tous les remplacements

Un remplacement proactif des pièces d'usure prévient les pannes inattendues.

Dr Christian L'Hirondel`,
  },
  {
    topicIndex: 22,
    content: `La durée de vie du divan dépend de plusieurs facteurs.

**Estimations** :
- Durée de vie moyenne : 8-12 ans
- Avec entretien optimal : 12-15 ans
- Avec entretien minimal : 5-7 ans

**Facteurs influençant la durée de vie** :

1. **Utilisation** :
   - Intensité d'utilisation (patients/jour)
   - Type de patients (poids, mobilité)
   - Respect des protocoles

2. **Entretien** :
   - Nettoyage régulier
   - Remplacement des pièces d'usure
   - Maintenance préventive

3. **Environnement** :
   - Humidité (salle de bain)
   - Température
   - Qualité de l'eau

4. **Qualité initiale** :
   - Matériaux utilisés
   - Fabrication
   - Contrôle de qualité

**Prolonger la durée de vie** :
- Entretien régulier et rigoureux
- Respect des protocoles
- Remplacement proactif des pièces
- Formation continue des utilisateurs

**Fin de vie** :
- Recyclez les matériaux appropriés
- Contactez-nous pour les options de reprise
- Documentez l'historique complet

Un divan bien entretenu peut vous servir plus de 10 ans !

Dr Christian L'Hirondel`,
  },
  {
    topicIndex: 23,
    content: `J'adore cette initiative ! L'innovation collaborative est la clé du progrès.

**Comment contribuer** :
- Décrivez votre idée clairement
- Expliquez le problème qu'elle résout
- Proposez une solution
- Partagez vos observations

**Idées que nous explorons actuellement** :
- Amélioration de la connectivité
- Automatisation accrue
- Interfaces plus intuitives
- Adaptations pour différents contextes

**Processus** :
1. Soumettez votre idée ici
2. Nous l'analysons et vous donnons un retour
3. Si pertinente, nous la testons
4. Nous vous tenons informé de la progression

**Reconnaissance** :
- Les contributeurs sont reconnus
- Participation à des groupes de travail
- Accès aux prototypes
- Réductions sur les produits

Vos idées façonnent l'avenir de nos produits. Merci de votre engagement !

Dr Christian L'Hirondel`,
  },
  {
    topicIndex: 24,
    content: `Les fonctionnalités souhaitées nous aident à prioriser nos développements.

**Fonctionnalités demandées fréquemment** :
- Connectivité IoT pour suivi à distance
- Intégration avec systèmes de dossiers médicaux
- Alertes automatiques de maintenance
- Rapports d'utilisation détaillés
- Interfaces multilingues
- Adaptations pour patients spécifiques

**Comment voter** :
- Commentez cette discussion
- Décrivez la fonctionnalité
- Expliquez pourquoi elle est importante
- Partagez des cas d'usage

**Processus de développement** :
- Les fonctionnalités les plus demandées sont prioritaires
- Nous testons avec des utilisateurs pilotes
- Retours et itérations
- Déploiement progressif

**Transparence** :
- Nous partageons notre roadmap
- Vous êtes tenus informés des progrès
- Vos retours façonnent les détails

Quelle fonctionnalité aimeriez-vous voir en priorité ?

Dr Christian L'Hirondel`,
  },
  {
    topicIndex: 25,
    content: `Les adaptations pour d'autres contextes ouvrent des possibilités intéressantes.

**Contextes potentiels** :

1. **Hôpitaux** :
   - Adaptations pour services de gériatrie
   - Intégration avec systèmes hospitaliers
   - Conformité aux standards hospitaliers

2. **Domicile** :
   - Versions compactes
   - Installation simplifiée
   - Maintenance facilitée

3. **Centres de réadaptation** :
   - Adaptations pour patients post-opératoires
   - Intégration avec programmes de réadaptation

4. **Cliniques spécialisées** :
   - Adaptations pour patients spécifiques
   - Intégration avec traitements spécialisés

**Défis** :
- Conformité réglementaire
- Adaptations techniques
- Coûts
- Formation

**Vos retours** :
- Quel contexte vous intéresse ?
- Quels défis anticipez-vous ?
- Quelles adaptations seraient nécessaires ?

Vos insights nous aident à planifier les futures expansions.

Dr Christian L'Hirondel`,
  },
  {
    topicIndex: 26,
    content: `Les retours sur prototypes sont précieux pour notre développement.

**Prototypes actuels en test** :
- Version compacte pour petits espaces
- Système de connectivité IoT
- Interface tactile améliorée
- Système de nettoyage automatisé

**Comment participer** :
- Exprimez votre intérêt
- Nous vous contacterons pour discuter
- Participation à des tests pilotes
- Retours réguliers et support

**Avantages** :
- Accès anticipé aux nouvelles fonctionnalités
- Influence sur le développement
- Reconnaissance comme contributeur
- Conditions spéciales

**Engagement** :
- Tests réguliers
- Retours détaillés
- Disponibilité pour discussions
- Flexibilité pour changements

Si vous êtes intéressé par la participation à nos programmes pilotes, contactez-moi directement !

Dr Christian L'Hirondel`,
  },
  {
    topicIndex: 27,
    content: `L'optimisation du planning est une compétence clé pour maximiser l'efficacité.

**Stratégies recommandées** :

1. **Segmentation des patients** :
   - Groupez par type de soin
   - Groupez par niveau de dépendance
   - Groupez par disponibilité

2. **Allocation du temps** :
   - Soins simples : 15-20 min
   - Soins complexes : 25-35 min
   - Patients dépendants : 30-40 min

3. **Préparation** :
   - Préparez tous les matériaux avant
   - Nettoyez entre les patients
   - Planifiez les pauses

4. **Équipes** :
   - Un soignant pour patients simples
   - Deux soignants pour patients complexes
   - Rotation pour équité

5. **Flexibilité** :
   - Prévoyez du temps tampon
   - Adaptez-vous aux urgences
   - Réévaluez régulièrement

**Outils** :
- Calendriers de planning
- Listes de préparation
- Registres de suivi
- Retours d'expérience

Un bon planning améliore l'efficacité de 30-40% !

Dr Christian L'Hirondel`,
  },
  {
    topicIndex: 28,
    content: `Le nombre de patients par jour dépend de plusieurs facteurs.

**Estimations** :

Par divan avec un soignant :
- Patients simples : 15-20 par jour
- Patients mixtes : 12-15 par jour
- Patients complexes : 8-10 par jour

Par divan avec deux soignants :
- Patients simples : 20-25 par jour
- Patients mixtes : 15-18 par jour
- Patients complexes : 12-15 par jour

**Facteurs à considérer** :
- Durée moyenne du soin
- Complexité des patients
- Disponibilité du personnel
- Temps de nettoyage
- Pauses du personnel

**Recommandations** :
- Commencez conservateur (8-10 patients)
- Augmentez progressivement
- Mesurez la qualité et la satisfaction
- Ajustez selon les résultats

**Qualité vs Quantité** :
- Privilégiez la qualité
- La satisfaction des patients est prioritaire
- La santé des soignants est importante
- La durabilité du système est clé

Quel est votre volume actuel et vos objectifs ?

Dr Christian L'Hirondel`,
  },
  {
    topicIndex: 29,
    content: `La réduction de la pénibilité est l'un des plus grands avantages pour les équipes.

**Impacts observés** :

1. **Physique** :
   - Réduction de 40-50% de la charge physique
   - Moins de blessures au dos
   - Réduction des TMS
   - Meilleure posture

2. **Mental** :
   - Moins de stress
   - Plus de satisfaction
   - Meilleure ambiance d'équipe
   - Fierté du travail bien fait

3. **Professionnel** :
   - Moins d'absentéisme
   - Meilleure rétention du personnel
   - Réduction du turnover
   - Amélioration de la qualité

**Mesures** :
- Taux d'absentéisme
- Incidents de sécurité
- Satisfaction des soignants
- Retours d'expérience

**Résultats typiques** :
- Absentéisme : -30 à 40%
- Incidents : -50 à 70%
- Satisfaction : +40 à 50%
- Rétention : +25 à 35%

La santé et le bien-être des soignants sont essentiels pour la qualité des soins !

Dr Christian L'Hirondel`,
  },
  {
    topicIndex: 30,
    content: `L'amélioration du bien-être des résidents est au cœur de notre mission.

**Impacts observés** :

1. **Physique** :
   - Meilleure hygiène
   - Réduction des irritations cutanées
   - Meilleur confort
   - Moins de complications

2. **Psychologique** :
   - Plus de dignité
   - Réduction de l'anxiété
   - Meilleure estime de soi
   - Amélioration de l'humeur

3. **Social** :
   - Meilleure interaction avec les soignants
   - Participation plus active
   - Amélioration des relations familiales
   - Intégration sociale accrue

4. **Global** :
   - Meilleure qualité de vie
   - Satisfaction augmentée
   - Moins de dépression
   - Meilleure santé générale

**Mesures** :
- Enquêtes de satisfaction
- Indicateurs de bien-être
- Observations comportementales
- Retours des familles

**Résultats typiques** :
- Satisfaction : +50 à 60%
- Bien-être : +40 à 50%
- Participation : +30 à 40%

Le bien-être des résidents est le vrai succès de notre produit !

Dr Christian L'Hirondel`,
  },
  {
    topicIndex: 31,
    content: `Les patients très dépendants nécessitent une approche adaptée.

**Caractéristiques** :
- Mobilité très limitée
- Dépendance totale pour les soins
- Communication difficile
- Risques accrus de complications

**Approche recommandée** :

1. **Sécurité** :
   - Utilisez tous les systèmes de retenue
   - Travaillez à deux
   - Vérifiez la stabilité constamment
   - Maintenez une distance de sécurité

2. **Confort** :
   - Positionnement optimal
   - Support adéquat
   - Température agréable
   - Gestes doux et lents

3. **Communication** :
   - Parlez constamment
   - Expliquez chaque étape
   - Observez les signes de malaise
   - Adaptez-vous aux réactions

4. **Temps** :
   - Allouez plus de temps
   - Pas de précipitation
   - Pauses si nécessaire
   - Respect du rythme du patient

5. **Support** :
   - Impliquez la famille
   - Documentez les préférences
   - Partagez les observations
   - Ajustez les protocoles

Ces patients méritent une attention particulière et une approche respectueuse.

Dr Christian L'Hirondel`,
  },
  {
    topicIndex: 32,
    content: `L'obésité et la mobilité réduite présentent des défis spécifiques.

**Adaptations pour obésité** :
- Vérifiez les limites de poids du divan
- Utilisez des systèmes de soutien renforcés
- Travaillez à deux ou trois
- Positionnement optimal pour confort
- Mouvements lents et contrôlés

**Adaptations pour mobilité réduite** :
- Accès facilité au divan
- Systèmes de levage si nécessaire
- Support adéquat pendant le soin
- Temps supplémentaire alloué
- Gestes doux et respectueux

**Points critiques** :
- Sécurité du patient
- Sécurité des soignants
- Confort du patient
- Efficacité du soin

**Ressources** :
- Formation spécialisée disponible
- Équipements d'assistance disponibles
- Support technique disponible
- Consultation possible

Ces patients bénéficient énormément du divan si les adaptations appropriées sont faites.

Dr Christian L'Hirondel`,
  },
  {
    topicIndex: 33,
    content: `Les troubles cognitifs et la démence nécessitent une approche très adaptée.

**Caractéristiques** :
- Compréhension limitée
- Confusion possible
- Agitation potentielle
- Communication difficile

**Approche recommandée** :

1. **Environnement** :
   - Calme et rassurant
   - Éclairage doux
   - Pas de bruits forts
   - Familiarité si possible

2. **Communication** :
   - Parlez lentement et clairement
   - Utilisez des mots simples
   - Répétez si nécessaire
   - Observez les réactions

3. **Routine** :
   - Maintenez une routine stable
   - Mêmes soignants si possible
   - Mêmes heures si possible
   - Prévisibilité

4. **Gestes** :
   - Mouvements lents
   - Gestes doux
   - Pas de surprises
   - Respect de l'espace personnel

5. **Support** :
   - Impliquez la famille
   - Utilisez des objets familiers
   - Créez une atmosphère positive
   - Patience et empathie

**Sécurité** :
- Utilisez les systèmes de retenue si nécessaire
- Supervisez constamment
- Ayez un plan d'urgence
- Documentez les comportements

La patience et la compassion sont essentielles avec ces patients.

Dr Christian L'Hirondel`,
  },
  {
    topicIndex: 34,
    content: `La gestion des refus de soins est un défi courant et important.

**Causes courantes** :
- Peur ou anxiété
- Manque de compréhension
- Expériences négatives antérieures
- Problèmes de communication
- Problèmes de santé (douleur, etc.)

**Stratégies** :

1. **Comprendre** :
   - Écoutez le patient
   - Identifiez la cause du refus
   - Respectez les préoccupations
   - Montrez de l'empathie

2. **Communication** :
   - Expliquez clairement les bénéfices
   - Répondez aux questions
   - Rassurez le patient
   - Impliquez la famille

3. **Adaptation** :
   - Ajustez l'approche
   - Proposez des alternatives
   - Offrez du choix quand possible
   - Respectez l'autonomie

4. **Support** :
   - Impliquez d'autres professionnels
   - Consultez la famille
   - Documentez les refus
   - Ajustez le plan de soins

5. **Temps** :
   - Allouez plus de temps
   - Pas de précipitation
   - Patience et persévérance
   - Essayez à nouveau plus tard

**Prévention** :
- Construisez la confiance
- Maintenez la routine
- Soyez cohérent
- Montrez du respect

Les refus diminuent souvent avec une approche respectueuse et adaptée.

Dr Christian L'Hirondel`,
  },
  {
    topicIndex: 35,
    content: `La comparaison toilette au lit vs divan de soin est instructive.

**Toilette au lit** :
- Avantages : Familier, moins de déplacement
- Inconvénients : Moins efficace, plus fatigant, moins hygiénique

**Divan Regnard** :
- Avantages : Plus efficace, plus hygiénique, moins fatigant
- Inconvénients : Nécessite un déplacement initial

**Comparaison détaillée** :

| Critère | Toilette au lit | Divan Regnard |
|---------|-----------------|---------------|
| Temps | 40-60 min | 20-35 min |
| Hygiène | Moyenne | Excellente |
| Confort patient | Moyen | Excellent |
| Effort soignant | Élevé | Faible |
| Efficacité | Moyenne | Excellente |
| Coût | Élevé (long terme) | Modéré |

**Conclusion** :
Le divan offre une meilleure expérience globale pour tous les acteurs.

Dr Christian L'Hirondel`,
  },
  {
    topicIndex: 36,
    content: `La comparaison douche médicalisée vs divan Regnard est pertinente.

**Douche médicalisée** :
- Avantages : Nettoyage complet, eau chaude
- Inconvénients : Coûteuse, immobilisante, risque de chute

**Divan Regnard** :
- Avantages : Moins coûteux, plus sûr, plus confortable
- Inconvénients : Moins complet que douche

**Comparaison** :

| Critère | Douche Méd. | Divan Regnard |
|---------|-------------|---------------|
| Coût initial | Très élevé | Modéré |
| Sécurité | Moyenne | Excellente |
| Confort | Moyen | Excellent |
| Efficacité | Excellente | Très bonne |
| Accessibilité | Limitée | Excellente |
| Maintenance | Élevée | Modérée |

**Recommandation** :
Le divan est idéal pour la plupart des patients. La douche pour les cas spécifiques.

Dr Christian L'Hirondel`,
  },
  {
    topicIndex: 37,
    content: `Le gain de temps réel est l'un des arguments les plus convaincants.

**Données mesurées** :

Toilette traditionnelle : 45 min/patient
Divan Regnard : 25 min/patient
Gain : 20 min/patient (44%)

**Calcul économique** :
- 15 patients/jour × 20 min = 300 min/jour
- 300 min ÷ 60 = 5 heures/jour
- 5 heures × 220 jours/an = 1100 heures/an
- À 25€/h = 27 500€/an d'économies

**Autres bénéfices** :
- Réduction de la fatigue
- Meilleure qualité des soins
- Amélioration de la satisfaction
- Réduction de l'absentéisme

**ROI** :
- Investissement initial : ~15 000€
- Économies annuelles : ~27 500€
- Retour sur investissement : 6-7 mois

Ces chiffres parlent d'eux-mêmes !

Dr Christian L'Hirondel`,
  },
  {
    topicIndex: 38,
    content: `Je suis ravi de vous accueillir dans notre communauté !

Votre établissement et votre expérience sont précieux. Partagez :
- Type d'établissement (EHPAD, clinique, hôpital)
- Nombre de résidents/patients
- Nombre de divans
- Contexte et objectifs
- Résultats observés

Vos retours aident les autres établissements à prendre des décisions éclairées.

Bienvenue dans notre communauté !

Dr Christian L'Hirondel`,
  },
  {
    topicIndex: 39,
    content: `Les photos d'installations sont très utiles pour les autres utilisateurs !

Partagez :
- Photos de votre installation
- Configuration de la salle
- Aménagement de l'espace
- Détails techniques
- Leçons apprises

Les photos aident les autres à visualiser les possibilités et à planifier leurs installations.

Merci de partager vos expériences visuelles !

Dr Christian L'Hirondel`,
  },
  {
    topicIndex: 40,
    content: `Excellent ! C'est l'essence de notre communauté.

Posez vos questions, partagez vos expériences, aidez les autres. Ensemble, nous créons une communauté d'excellence.

Les questions les plus simples sont souvent les plus utiles pour d'autres.

N'hésitez pas à poser vos questions !

Dr Christian L'Hirondel`,
  },
];

async function seedForum() {
  const connection = await mysql.createConnection(config);

  try {
    console.log('Starting forum seed...');

    // Insert users
    console.log('Inserting fictional users...');
    for (const user of fictionalUsers) {
      try {
        await connection.execute(
          `INSERT INTO users (openId, name, email, loginMethod, role, createdAt, updatedAt, lastSignedIn) 
           VALUES (?, ?, ?, ?, ?, NOW(), NOW(), NOW())`,
          [user.openId, user.name, user.email, user.loginMethod, user.role]
        );
        console.log(`✓ Created user: ${user.name}`);
      } catch (error) {
        if (error && error.code === 'ER_DUP_ENTRY') {
          console.log(`✓ User already exists: ${user.name}`);
        } else {
          // Silently continue on other errors
        }
      }
    }

    // Get user IDs
    const [usersResult] = await connection.execute('SELECT id, name FROM users WHERE openId IN (?, ?, ?, ?, ?, ?, ?, ?)', [
      'user-marie-dubois',
      'user-jean-martin',
      'user-sophie-bernard',
      'user-pierre-rousseau',
      'user-isabelle-leclerc',
      'user-thomas-moreau',
      'user-anne-dupont',
      'user-christian-lhirondel',
    ]);

    const userMap = {};
    usersResult.forEach((user) => {
      const openId = fictionalUsers.find(u => u.name === user.name)?.openId;
      if (openId) {
        userMap[openId] = user.id;
      }
    });

    let drLhirondellId = userMap['user-christian-lhirondel'];

    // Insert topics
    console.log('Inserting forum topics...');
    const topicIds = [];
    let userIndex = 0;

    for (const topic of forumTopics) {
      // Rotate through users for topic creation
      const creatorOpenId = fictionalUsers[userIndex % (fictionalUsers.length - 1)].openId;
      const creatorId = userMap[creatorOpenId];

      try {
        const [result] = await connection.execute(
          `INSERT INTO forumTopics (title, description, createdBy, createdAt, updatedAt) 
           VALUES (?, ?, ?, NOW(), NOW())`,
          [topic.title, topic.description, creatorId]
        );

        topicIds.push(result.insertId);
        console.log(`✓ Created topic: ${topic.title}`);
        userIndex++;
      } catch (error) {
        console.error(`✗ Failed to create topic: ${topic.title}`, error);
      }
    }

    // Insert Dr L'Hirondel's responses
    console.log('Inserting Dr L\'Hirondel\'s responses...');
    for (let i = 0; i < drLhirondellResponses.length; i++) {
      const response = drLhirondellResponses[i];
      const topicId = topicIds[response.topicIndex];

      if (topicId) {
        try {
          await connection.execute(
            `INSERT INTO forumPosts (topicId, userId, content, createdAt, updatedAt) 
             VALUES (?, ?, ?, NOW(), NOW())`,
            [topicId, drLhirondellId, response.content]
          );
          console.log(`✓ Added response to topic ${response.topicIndex + 1}`);
        } catch (error) {
          console.error(`✗ Failed to add response to topic ${response.topicIndex + 1}`, error);
        }
      }
    }

    console.log('✅ Forum seed completed successfully!');
  } catch (error) {
    console.error('❌ Error during forum seed:', error);
    throw error;
  } finally {
    await connection.end();
  }
}

seedForum().catch(console.error);
