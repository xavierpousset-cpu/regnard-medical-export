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

## Bugs à Corriger (Session Actuelle)

### Critiques (l'application ne peut pas démarrer / crashe)
- [x] B-01 — Absence de TrpcProvider et QueryClientProvider
- [x] B-02 — Composant EhpadStudySection manquant
- [x] B-03 — Pages DemandeDevis.tsx et Services.tsx manquantes

### Majeurs (fonctionnalités cassées ou risque de sécurité)
- [x] B-04 — Authentification désactivée dans Header.tsx
- [x] B-05 — Formulaire de devis non fonctionnel sur OPrepDivan.tsx
- [x] B-06 — Mauvaise politique de cache HTTP (sécurité)

### Mineurs / Qualité de code
- [x] B-07 — Incohérences de rôles (AdminDashboard, superadmin)
- [x] B-08 — Notifications sans gestion d'erreur
- [x] B-09 — i18n incomplète
- [x] B-10 — Relations BDD non définies
