# NextBuilder Connect

L'application vise à permettre aux utilisateurs de créer des comptes, de s'authentifier, puis d'afficher des articles provenant du CMS Builder.io et la navigation entre les pages.

## Technologies utilisées

**Backend :**

<a href="https://nodejs.org/docs/latest/api/" target="_blank"><img src="https://img.icons8.com/fluency/48/node-js.png"/></a>
<a href="https://expressjs.com/en/5x/api.html" target="_blank"><img src="https://img.icons8.com/fluency/48/express-js.png"/></a>
<a href="https://dev.mysql.com/doc/" target="_blank"><img height="48" width="48" src="https://cdn.icon-icons.com/icons2/1381/PNG/512/mysqlworkbench_93532.png"/></a>

**Frontend :**

<a href=""><img width="auto" height="48" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="react"/></a>
<a href=""><img src="https://img.icons8.com/fluency/48/nextjs.png" alt="nextjs"/></a>
<a href=""><img width="48" height="48" src="https://img.icons8.com/fluency/48/typescript--v1.png" alt="typescript"/></a>

## Base de données

![db](https://github.com/Githendra23/NextBuilder-Connect/assets/51377697/f2264e8b-60f2-4a01-aaf9-e357f20caf57)

## Les étapes nécessaires pour configurer et installer le projet sur un nouvel environnement

### Installation des logiciels

Pour faire fonctionner l'application, vous devez installer :

<a href="https://nodejs.org/en/download" target="_blank"><img src="https://img.icons8.com/fluency/48/node-js.png"/></a>
<a href="https://www.wampserver.com/en/download-wampserver-64bits/"><img width="48" height="48" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/WampServer-logo.svg/1200px-WampServer-logo.svg.png"/></a>
<a href="https://dev.mysql.com/downloads/workbench/" target="_blank"><img height="48" width="48" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Antu_mysql-workbench.svg/2048px-Antu_mysql-workbench.svg.png"/></a>

Après avoir installé ces trois logiciels, démarrez le logiciel WAMP SERVER pour démarrer un serveur en locale dans votre machine. 

Vous devez voir le logo WAMP en bas à droite ; attendez jusqu'à ce qu'il devienne vert. (Si le logo ne devient pas vert, cliquez dessus et redémarrez ses services.)

![rectangle](https://github.com/Githendra23/NextBuilder-Connect/assets/51377697/195adc12-f300-4df8-b535-84f50af1061f)

Téléchargez le projet :
```cmd
git clone https://github.com/Githendra23/NextBuilder-Connect.git
```
Puis, ouvrez le fichier "**db_app.mwb**" situé dans le dossier *backend/db*.

En cliquant sur le fichier, vous allez ouvrir le logiciel MySQL Workbench. Dans le logiciel, cliquez sur *Database -> Forward engineer...* dans la barre de menu.

![rectangle](https://github.com/Githendra23/NextBuilder-Connect/assets/51377697/b2604c76-8d74-406e-b2bd-6439343e5f7b)

Remplissez ces informations affichées sur l'image ci-dessous.

![image](https://github.com/Githendra23/NextBuilder-Connect/assets/51377697/4790347f-3921-4892-9654-7f6f31101368)

Cliquez sur le bouton Next en continuant à cliquer jusqu'à ce que tout soit correct, puis fermez le logiciel. <br>
Vous avez maintenant installé la base de données sur votre serveur local dans votre machine.

### Lancement de l'api et du site web

Pour lancer l'application web, vous devez d'abord démarrer l'API, puis le site.

Pour lancer l'API, ouvrez le terminal, puis accédez au dossier "**backend**" avec la commande *cd*.
```cmd
cd <chemin à l'intérieur du dossier "backend">
```

Puis, executez :
```cmd
node run
```

Dans un autre terminal, accédez au dossier "**frontend**" et exécutez :
```cmd
npm run dev
```

Cliquez ou copiez-collez le lien fourni dans votre navigateur pour accéder au site web.

:fireworks: **Vous avez configuré et installé avec succès le projet dans votre environnement** :tada:

## Les explications / justifications par rapport au projet

Pourquoi utilisé MySQL ?
- J'ai choisit d'utilisé MySQL plutôt que d'autres bases de données car il organise les données en tables avec des relations prédéfinies. C'est clair et structuré, ce qui facilite la compréhension. Il est facile à mettre à l'échelle, gratuit à utiliser et est également couramment utilisé avec Node.js.

Pourquoi utilisé tailwind pour le site ?
- Tailwind est strict en ce qui concerne les choix de couleurs de base et nécessite moins de code par rapport à CSS. C'est également une opportunité d'apprendre Tailwind dans le cadre de ce projet.

Pourquoi utiliser Sequelize pour l'API ?
- J'ai décidé d'utiliser Sequelize pour mapper les objets JavaScript à la table de la base de données, facilitant l'exécution d'opérations de base de données sans écrire directement des requêtes SQL, ce qui rend le code plus lisible et propre.

Pourquoi utilisé le token JWT ?
- J'ai décidé d'utiliser des jetons JWT pour l'authentification car ils sont couramment utilisés dans les applications, de petite taille, peuvent être chiffrés, ce qui les rend sécurisés pour le transfert vers l'API pour la vérification, peuvent transporter des informations sur l'utilisateur, et le jeton change à chaque fois que l'utilisateur effectue des modifications.

Quelles ont été les difficultés que j'ai rencontrées lors du développement de cette application ?
- Ce n'est pas une difficulté, mais j'ai consacré la moitié de mon temps à changer les couleurs et à m'assurer que l'application ait un aspect agréable, soit facile à utiliser et simple à comprendre. J'ai dû développer le frontend en pensant à l'utilisateur.

Qu'est-ce que j'ai apprécié ?
- C'était difficile de développer cette application en utilisant Next.js, React et Tailwind car je n'avais jamais utilisé Tailwind ni Next.js et j'avais peu d'expérience avec React. Mais, c'était bien de finalement développer un projet avec ces trois technologies. C'était un objectif pour moi d'apprendre ces trois technologies cette année, et j'ai finalement réussi.
