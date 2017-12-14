|Id tâche | Tâche |Id User Story | Personne en charge |
| ------------- | ------------- |------------- | ------------- |
| 1  | Mettre en place travis | - | Taha | 
| 2  | Mettre en place themis | - | Taha | 
| 3  | Rédiger le test E2E US10 : <ul><li>Écrire le test E2E pour la US10 qui décrit un scénario d'ajout/suppression d'une tâche dans un sprint</li></ul>| 10 | Omar | 
| 4  | Rédiger le test E2E US12 : <ul><li>Écrire le test E2E pour la US12 qui décrit un scénario d'affichage et d'ajout d'un build (lien de stockage) à la fin de chaque sprint</li></ul>| 12 | Omar | 
| 5  | Rédiger le test E2E US13 : <ul><li>Écrire le test E2E pour la US13 qui décrit un scénario  qui décrit un scénario d'ajout et de suppression d'un test (Lien de Stockage)</li></ul>| 13 | Omar | 
| 6  | Rédiger le test E2E US14 : <ul><li>Écrire le test E2E pour la US13 qui décrit un scénario  qui décrit un scénario d'ajout et de suppression d'une documentation (Lien de Stockage)</li></ul>| 14 | Omar| 
| 7  | Mettre en place la base de données <ul><li>Ajout d'un champ Test dans la table USERSTORYS</li><li>Ajout d'un champ Doc dans la table USERSTORYS</li><li>Ajout d'un champ Build dans la table SPRINTS</li></ul>| - | Rihab | 
| 8  | Définir les intéractions entre la couche métier et la couche données pour la US10 (écrire les requêtes SQL) : <ul><li>Écrire la requête SQL qui permet d'ajouter une tache a un sprint dans la table TACHES</li><li>Écrire la requête SQL qui permet de supprimer une tache d'un sprint dans la table TACHES</li> </ul>  | 10 | Rihab | 
| 9  | Définir les intéractions entre la couche métier et la couche données pour la US12  (écrire les requêtes SQL) : <ul><li>Écrire la requête sql qui permet d'ajouter un build dans la table SPRINTS</li></ul> | 12 |  Rihab | 
| 10  | Définir les intéractions entre la couche métier et la couche données pour la US13  (écrire les requêtes SQL) :  <ul><li>Écrire la requête SQL qui permet d'ajouter un test a une US dans la table USERSTORYS</li><li>Écrire la requête SQL qui permet de supprimer un test d'une US dans la table USERSTORYS</li> </ul>  | 13 | Rihab | 
| 11  | Définir les intéractions entre la couche métier et la couche données pour la US14  (écrire les requêtes SQL) :  <ul><li>Écrire la requête SQL qui permet d'ajouter une documentation a une US dans la table USERSTORYS</li><li>Écrire la requête SQL qui permet de supprimer une documentation d'une US dans la table USERSTORYS</li> </ul> | 14 | Rihab | 
| 12  | Définir les intéractions entre la couche présentation et la couche métier pour la US10: <ul><li>Définir l'url de la fonction dans le serveur qui se charge d'ajouter un tache a un sprint  ainsi que le type de requêtes http qu'elle accepte (POST/GET) </li><li>Définir le type et la structure de retour de cette fonction</li><li>Définir l'url de la fonction dans le serveur qui se charge de supprimer une tache d'un sprint  ainsi que le type de requêtes http qu'elle accepte (POST/GET/) </li><li>Définir le type et la structure de retour de cette fonction</li></ul> | 10 | Kevin | 
| 14  | Définir les intéractions entre la couche présentation et la couche métier pour la US12: <ul><li>Définir l'url de la fonction dans le serveur qui se charge d'ajouter un build d'un sprint  ainsi que le type de requêtes http qu'elle accepte (POST/GET) </li><li>Définir le type et la structure de retour de cette fonction</li></ul> | 12 | Bastien | 
| 15  | Définir les intéractions entre la couche présentation et la couche métier pour la US13: <ul><li>Définir l'url de la fonction dans le serveur qui se charge d'ajouter un test a une US  ainsi que le type de requêtes http qu'elle accepte (POST/GET) </li><li>Définir le type et la structure de retour de cette fonction</li><li>Définir l'url de la fonction dans le serveur qui se charge de supprimer un test d'une US  ainsi que le type de requêtes http qu'elle accepte (POST/GET/) </li><li>Définir le type et la structure de retour de cette fonction</li></ul> | 13 | Taha |
| 16  | Définir les intéractions entre la couche présentation et la couche métier pour la US14: <ul><li>Définir l'url de la fonction dans le serveur qui se charge d'ajouter une Documentation a une US  ainsi que le type de requêtes http qu'elle accepte (POST/GET) </li><li>Définir le type et la structure de retour de cette fonction</li><li>Définir l'url de la fonction dans le serveur qui se charge de supprimer une Documentation d'une US  ainsi que le type de requêtes http qu'elle accepte (POST/GET/) </li><li>Définir le type et la structure de retour de cette fonction</li></ul> | 14 | Taha | 
| 17 | Création d'un composant angular pour la création d'une tache et l'associer a une route | 10 | Kevin | 
| 18 | Implémenter la page de la création d'une tache(interface graphique)  : <ul><li>Création formulaire d'ajout d'une tache (description,numero,encharge,status,isE2E)</li></ul> | 10 | Kevin | 
| 19  | Implémenter la page de la création d'une tache (JS) : <ul><li>Récupérer les champs du formulaire et les envoyer au serveur</li></ul> | 10 | Kevin | 
| 20  | Implémenter la partie serveur de la page de la création d'une tache: <ul><li>Récupérer les champs envoyés</li><li>exécuter une requête qui prend les champs en paramètre</li><li>Retourner le résultat de la requête </li></ul> | 10 | Kevin | 
| 21 | Implémenter la page de la suppression d'une tache(interface graphique)  : <ul><li>Ajouter un button de suppression dans la liste des taches d'un sprint</li></ul> | 10 | Rihab | 
| 22  | Implémenter la page de la suppression d'une tache (JS) : <ul><li>Récupérer les informations de la taches a supprimé lorsqu'on clique sur le button de suppression et les envoyer au serveur</li></ul> | 10 | Rihab | 
| 23  | Implémenter la partie serveur de la page de la suppression d'une tache: <ul><li>Récupérer les champs envoyés</li><li>exécuter une requête qui prend les champs en paramètre</li><li>Retourner le résultat de la requête </li></ul> | 10 | Rihab | 
| 24 | Création d'un composant angular pour la création d'un build et l'associer a une route | 12 | Bastien | 
| 25 | Implémenter la page de la création d'un build(interface graphique)  : <ul><li>Création formulaire (Lien de stockage)</li></ul> | 12 | Bastien |
| 26  | Implémenter la page de la création d'un build (JS) : <ul><li>Récupérer les champs du formulaire et les envoyer au serveur</li></ul> | 12 | Bastien | 
| 27  | Implémenter la partie serveur de la page de la création d'un build: <ul><li>Récupérer les champs envoyés</li><li>exécuter une requête qui prend les champs en paramètre</li><li>Retourner le résultat de la requête </li></ul> | 12 | Bastien | 
| 28  | Implémenter la page des US du backlog (JS) 3 : <ul><li>Rendre le champ "test" modifiable pour pouvoir le changer</li><li>Récupérer la nouvelle valeur saisie et l'envoyer au serveur</li></ul> | 13 | Taha | 
| 29  | Implémenter la partie serveur de la page des US du backlog 3: <ul><li>Récupérer les champs envoyés</li><li>exécuter une requête qui prend les champs en paramètre</li><li>Retourner le résultat de la requête </li></ul> | 13 | Taha | 
| 30  | Implémenter la page des US du backlog (JS) 4 : <ul><li>Rendre le champ "doc" modifiable pour pouvoir le changer</li><li>Récupérer la nouvelle valeur saisie et l'envoyer au serveur</li></ul> | 14 | Taha | 
| 31  | Implémenter la partie serveur de la page des US du backlog 4: <ul><li>Récupérer les champs envoyés</li><li>exécuter une requête qui prend les champs en paramètre</li><li>Retourner le résultat de la requête </li></ul> | 14 | Taha | 
| 32  | Exécuter les tests E2E | - | Omar | 
| 33  | Génerer le build du troisieme sprint | - | Taha | 