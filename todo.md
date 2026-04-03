# Regnard Medical - TODO

## Fonctionnalités principales
- [x] Homepage avec sections Hero, Expertise, Produits, Valeurs
- [x] Pages produits O-PREP®DIVAN et O-PREP®ALTESSE
- [x] Formulaires de demande de devis
- [x] Dashboard admin pour gérer les demandes
- [x] Base de données MySQL avec tables users et quoteRequests
- [x] Authentification OAuth Manus
- [x] Lien "Mon compte" dans le header avec connexion/déconnexion
- [x] Système de rôles superadmin pour gérer les administrateurs
- [ ] Interface de gestion des admins dans le dashboard
- [x] Forum pour le personnel médical avec système de permissions
- [x] Gestion des modérateurs dans le dashboard admin (via API)
- [x] Page "Nos Services" avec sections détaillées et images de lits médicalisés
- [ ] Système de statuts pour les demandes (En attente, Contactée, Convertie, Perdue)
- [ ] Emails automatiques aux prospects et administrateurs
- [ ] Section Témoignages clients
- [x] Page FAQ avec questions sur maintenance et tarifs
- [ ] Blog/Resources section

## Bugs à Corriger
- [x] B-01: Créer la page "Nos Services" (/nos-services) - EXISTE DÉJÀ
- [x] B-02: Créer le Dashboard Admin (/dashboard) avec authentification - EXISTE DÉJÀ
- [x] B-03: Corriger le lien "Nos services" dans Header.tsx - ROUTES CORRECTES
- [x] B-04: Corriger le lien "Dashboard Admin" dans Header.tsx - ROUTES CORRECTES
- [x] Tester les formulaires (contact, devis) pour vérifier la soumission - FONCTIONNELS
- [x] Vérifier les appels API tRPC pour les formulaires - FONCTIONNELS
- [x] Tester la base de données pour les enregistrements - DONNÉES ENREGISTRÉES
- [x] Créer des tests vitest pour quotes.submit - 4 TESTS PASSENT
- [x] Appliquer les migrations de la base de données - APPLIQUÉES
- [x] B-05: Corriger l'erreur "Unable to find tRPC Context" dans Header - CORRIGÉE
- [x] B-06: Corriger le lien du questionnaire Tally sur la page d'accueil (erreur 404) - CORRIGÉ
- [x] B-07: Intégrer le nouveau logo Regnard dans le site - COMPLÉTÉ
- [x] B-08: Adapter la palette de couleurs au bleu du logo - COMPLÉTÉ

## Nouvelles Pages Produits
- [x] Créer la page produit RELAX Divan (WC pour patients allongés)
  - [x] Générer images (version fixe + mobile)
  - [x] Créer composant RelaxDivan.tsx
  - [x] Ajouter route /relax-divan
  - [x] Ajouter navigation dans ProductsSection
  - [x] Tester formulaire de devis

## Restructuration Menu et Renommage Produits
- [x] Renommer RELAX DIVAN en "Le Divan O-SAN"
  - [x] Renommer fichier RelaxDivan.tsx en OSanDivan.tsx
  - [x] Mettre à jour les textes dans la page
  - [x] Mettre à jour la route /relax-divan en /o-san-divan
  - [x] Mettre à jour App.tsx avec la nouvelle route
- [x] Restructurer le menu "Nos solutions"
  - [x] Créer structure hiérarchique : Produits médicaux (O-SAN, O-PREP Divan, O-PREP Altesse)
  - [x] Créer structure hiérarchique : Services (Réparation, Lits médicalisés)
  - [x] Implémenter les sous-menus imbriqués dans HeaderContent.tsx
  - [x] Tester la navigation desktop et mobile

## Corrections UX Prioritaires (Session actuelle)

- [x] Corriger la visibilité du bouton de connexion sur la page Forum (déplacer en haut)
- [x] Ajouter l'image atelier avec filtre noir sur la page À propos
- [x] Déplacer le segment comparatif de la page d'accueil vers la page O-PREP DIVAN

## Corrections Terminologie Médicale

- [x] Remplacer "irrigation du côlon" par "irrigation transanale (ITA)" dans OPrepDivan.tsx
- [x] Remplacer "irrigation du côlon" par "irrigation transanale (ITA)" dans OPrepAltesse.tsx
- [x] Remplacer "irrigation colique" par "irrigation transanale (ITA)" dans ComparisonSection.tsx
- [x] Remplacer "irrigation colique" par "irrigation transanale (ITA)" dans TechnicalSpecsSection.tsx

## Améliorations Visuelles (Session actuelle)

- [x] Ajouter l'image du O-PREP DIVAN en fond du hero avec filtre noir

## Audit et Correction des Contrastes

- [x] Auditer et corriger le contraste du segment "Parlons de votre projet" (CTA section) sur la page À propos
- [x] Vérifier tous les boutons d'action du site pour les problèmes de contraste
- [x] Corriger les contrastes insuffisants identifiés

## Optimisation SEO de la Page d'Accueil

- [x] Réduire le titre de 74 à 30-60 caractères (nouveau titre : 47 caractères)
- [x] Réduire la description meta de 179 à 50-160 caractères (nouvelle description : 128 caractères)
- [x] Réduire les mots-clés de 9 à 3-8 ciblés (4 mots-clés ciblés)

## Optimisation SEO Avancée (Prompt Expert)

### Balises Meta par Page
- [x] Créé fichier shared/seo-metadata.ts avec métadonnées pour toutes les pages

### Mots-clés Prioritaires par Page
- [x] Mots-clés par catégorie définis dans seo-metadata.ts
- [x] Longue traîne incluse pour meilleur SEO

### Attributs Alt pour Images
- [x] Alt descriptifs ajoutés aux images O-PREP DIVAN
- [x] Alt ajouté à l'image de l'atelier dans About.tsx

### Sitemap et Robots.txt
- [x] Sitemap.xml mis à jour avec toutes les pages et URLs correctes
- [x] Robots.txt mis à jour avec lien vers sitemap.xml

### Structure des Headings
- [x] Vérifié : h1 unique par page sur toutes les pages principales

## Modifications Récentes

- [x] Masqué la page O-SAN du menu (en attente de préparation)

- [x] Retiré la section "Le mot du gastroentérologue" de la page O-PREP DIVAN
- [x] Changé la couleur du bouton questionnaire en blanc pour meilleure visibilité sur fond noir

## Création de la Page Bibliographie

- [x] Lire et résumer les 5 articles fournis
- [x] Créer la page Bibliographie.tsx avec 5 articles
- [x] Uploader les fichiers PDF et générer les liens
- [x] Ajouter les segments d'articles avec résumés
- [x] Intégrer la page dans la navigation
- [x] Tester et valider (tests passent, compilation sans erreurs)
