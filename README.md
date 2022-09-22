# Projet 7 - Groupomania
Créez un réseau social d’entreprise

## Les technologies utilisées:

-Frontend: React.js

-Backend: Node.JS 14.19.3 / Express.JS, Sequelize

-DataBase: MySql 


## Frontend

Ouvrir le dossier "front" dans le terminal de votre éditeur puis exécuter la commande:

### `npm install`

puis 

### `npm start`

si le navigateur ne s'ouvre pas automatiquement allez à :

http://localhost:3000


## Backend

Ouvrir le dossier "back" dans le terminal de votre éditeur puis exécuter la commande:

### `npm install`

puis 

### `nodemon server ou node server ou npm start`

si le navigateur ne s'ouvre pas automatiquement allez à :

http://localhost:3001


## Base de données

Changer .env par le password de votre mysql pour que la connexion à la base de données se fasse.

Ouvrir phpMyAdmin aller dans "nouvelle base de données" entrer la nouvelle base de donnée "groupomania" dans l'input "Nom de base de données" puis cliquer sur créer.

Dans la fenêtre de gauche cliquer sur la base de donnée "groupomania" que vous venez de créer puis cliquer sur importer dans l'onglet de la fenêtre de droite.

Dans la partie "fichier à importer" choisisser le fichier sql qui vous a été livré puis cliquer sur "exporter".


## Utilisation du réseau social

### Signup All required: 

-Prénom (max 15 caractères)

-Elodie (max 20 caractères)

-Status

-Email

-Password (min 6 caractères)


### Login:

-Email

-Password


### Profil connecté:


Dans la home possibilité de:

-poster text et image

-modifierle text du post (pas l'image question de securité)

-supprimer le post

-commenter un post avec image

-supprimer le commentaire


Dans Status possibilité de:

-changer sa photo de profil 

-changer nom/ prénom/ status

-Se déconnecter "Logout"

-Supprimer le compte "Delete Account"


