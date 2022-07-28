# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


Resumé p7:

Backend:
  -Installation de Mysql:
  -Creation d'une base de donnée dans workbench
  -Installation des tables: User + Comment + Post
  -Creation des routes models selon Sequelize avec connexion à la base de données
  -Creation des controllers avec sequelize (équivalent de mongoose)
  -Installation du token(cookie) avec la verification de la validation de l'email
  -Creation d'une route token pour verifier le token dès la connexion 
  -Toute les routes de postman: + découverte en plus de postman

FrontEnd:
  -Création de component:
	-Des routes
  -Installatio de SASS:
	-npm run sass
	-main.scss compilation de tout les block scss
  -Création du component signup + Login:
	-Utilisation du forumulaire formik pour simplifier la récupération des données
	-Vérification du formulaire avec Yup: validation + regex
	-Appelle a axios pour une méthode Post
  -Installation du token à la connexion:
	-Avec la méthode axios pour un get récupérer avec hook
	 le token dans les cookies + validation à la connexion
	-Création de la NavBar dans component
	-Installation de Fontawesome et compréhension de son utilisation sur Réact
	-Compréhension du fonctionnement d'une fonction dans React avec
	 le Signup + Redirection automatique vers Login

   -Appelle de l'utilisateur:
	-Utilisation de useEffect pour lire tout le state de l'utilisateur
	-Installation de redux: 
		-Reduceur: Pour chaque table/route
		-Action: Pour les appelles axios de chaque Route
		-Utils pour les méthodes utiliser pour l'affichage:
		  isEmpty: Obeservation des tableaux empty or not
		  dateParser: Pour l'affichage correct de la date du post
	-Dans redux:
		-User:-Création de la partie Profil (UpdateImage, Update: Nom, Prenom, Status) 
			-Avec Option: Déconnexion et Suppression User.
		-Comment: -map() de tout les elements d'un post(commentaire) (Messsage, Date, Image)
			    -map() de comment avec comparaison des id entre Id du comment et Id du poster

  