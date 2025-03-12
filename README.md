# rtpc-web
Retrouve le tableau de Paul Cézanne, un jeu web conçu avec Phaser. Ce dernier s'inscrit dans le cadre d'un projet avec la mairie d'Aix-en-Provence afin d'initier les plus jeunes (CM1/CM2) à la programmation, via un système de blocs (Blockly).

## Origine
Le projet résulte d'un template du moteur de jeu Phaser. Ce dernier sert de base afin d'alléger la tâche de création du jeu, en prenant en charge pour nous la gestion de la gravité, des collisions, et autres phénomènes courants d'un jeu vidéo.

## Prérequis
- [NodeJS](https://nodejs.org/en) (attention à bien activer l'installation d'npm)
- npm

## Installation
1. Cloner le dépôt
2. Dans le répertoire nouvellement créé, exécuter `npm install`
3. C'est fini !

## Lancement/développement
1. Dans le répertoire du projet, exécuter `npx webpack serve`
2. Le site web est rendu accessible à l'adresse http://localhost:9000 ou http://127.0.0.1:9000
3. Le site web s'actualise automatiquement lorsque des changements sont enregistrés dans le code

Si les changements ne s'actualisent pas tout seul, recharger la page devrait suffire.

## Organisation du projet
- Le fichier `index.html` est le point d'entrée du site. Il sert d'hôte pour le conteneur du jeu ainsi que le conteneur Blockly.
- Le dossier `blockly/` héberge les ressources nécessaires au fonctionnement de Blockly.
- Le dossier `src/`, le plus intéressant, héberge l'entièreté du jeu.