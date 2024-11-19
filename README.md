# Centralisation d'Offres d'Emploi - Bouge Ton Job (2024-2025)
**Module : Automatisation et Scraping - Projet Angular + Django Rest Framework**

## Description
Ce projet vise à créer une plateforme moderne permettant de **centraliser et faciliter la recherche d'offres d'emploi** provenant de divers sites spécialisés tels qu'Indeed.  
L'objectif est d'offrir une expérience fluide pour les utilisateurs en rassemblant toutes les opportunités pertinentes en un seul endroit.  
Le projet combine un **front-end interactif** basé sur Angular et un **back-end dynamique** utilisant Django Rest Framework pour gérer les données issues du web scraping.

---

## Spécifications Techniques
- **Framework Front-End** : Angular  
- **Back-End** : Django Rest Framework (API REST)  
- **Scraping** : Bibliothèques Python pour extraire les données (BeautifulSoup, Scrapy)  

---

## Fonctionnalités
- **Recherche Dynamique** : Les utilisateurs peuvent rechercher des offres d'emploi par titre, localisation et type de contrat directement sur la plateforme.  
- **Scraping en Temps Réel** : Récupération des offres d'emploi depuis Indeed selon les critères de recherche de l'utilisateur.  
- **Affichage Intuitif des Résultats** : Présentation claire et ergonomique des offres d'emploi récupérées.  
- **Backend Extensible** : Capacité d'ajouter d'autres plateformes de recherche d'emploi (comme LinkedIn, Monster, etc.) à l'avenir.  
- **Filtres Avancés** : Tri et filtrage des résultats par type de contrat, entreprise, localisation, etc.  

---

## Structure de Données
Les données gérées incluent :  
- **Offres d'emploi** : 
  - Titre du poste  
  - Entreprise  
  - Localisation  
  - Type de contrat (CDI, CDD, freelance, etc.)  
  - Date de publication  
  - Lien vers l'offre d'origine  
- **Critères de Recherche** : 
  - Mots-clés  
  - Lieu  
  - Type de contrat  

---

## Remarques
- **Objectif du projet** : Créer une solution complète pour centraliser les offres d'emploi et améliorer l'expérience utilisateur dans leurs recherches professionnelles.  
- **Respect des Règles** : Les techniques de scraping utilisées respecteront les limites légales et éthiques des plateformes cibles.  
- **Évolutivité** : La solution est conçue pour être facilement extensible, avec la possibilité d'intégrer d'autres sources de données et fonctionnalités.  

---

## Captures d'Écran
L'application comporte :  

- **Page d'accueil** : Introduction au projet et recherche d'offres.
  
![screencapture-127-0-0-1-4200-2024-11-19-23_25_35](https://github.com/user-attachments/assets/2a53ad7d-5fa0-4cc6-822f-fb5869fb4d01)

- **Page des Offres** : Liste des offres correspondant aux recherches des utilisateurs.
  
  ![screencapture-127-0-0-1-4200-jobs-2024-11-19-23_25_40](https://github.com/user-attachments/assets/b634fef6-e800-466d-83c3-4222ca39ffe0)

- **Page À Propos** : Informations sur la plateforme et son fonctionnement.
  
![screencapture-127-0-0-1-4200-apropos-2024-11-19-23_25_46](https://github.com/user-attachments/assets/cc1de074-c717-4606-ab2a-ef86a2b999fc)

> **Note** : Ces fonctionnalités sont actuellement en cours de développement avec des données statiques simulées via des fichiers JSON.  
