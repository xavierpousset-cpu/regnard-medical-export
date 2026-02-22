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
