# Gestinance front

## Description

Ce projet est la partie front-end de l'application **Gestinance**. Celui-ci est un gestionnaire de budget en ligne qui a pour but d'aider ces utilisateurs à gérer leur argent.

## Commande en local

### Lancer le projet

Installer les dépendances et lancer le projet :

```shell
$ npm install
$ npm start
```

Le projet sera servi sous l'url suivante [lien](http://localhost:3000).

### Lancer les tests

Lancer les tests :

```shell
$ npm run test
```

Lancer les tests avec le coverage :

```shell
$ npm run test:dev
```

## Structure et pratique du projet

### Composants

Les composants génériques de type bouton, champs de texte etc... sont rangés dans le dossier `src/components` et suivent la règle de rangement de [MUI](https://mui.com/).

**Stratégie de test**

Nous testons nos composants dans chaque section sous-jacente. Typiquement si nous avons `src/components/inputs` contenant les deux composants `Button` et `TextField`, alors nous les testerons tous les deux dans `src/components/inputs/__tests__`.

_Technologie_ : react-testing-library avec principalement **userEvent**.

### Features

Chaque feature se trouve dans `src/features`. Elles peuvent également être dans une arborescence encore plus profonde suivant la complexité.

_Exemple_ : `src/features/authentication/register` pour la partie inscription qui est comprise dans un contexte d'authentification plus complexe pouvant contenir d'autres fonctionnalités comme la partie connexion.

**Décomposition d'une feature**

Une feature contient forcément trois dossiers : _component_, _types_ et _container_.

La partie **component** va contenir la partie visuelle HTML sans interférence de logique. Celle **types** contient tous les types Typescript que nous allons utiliser dans la feature. Tandis que **container** va contenir toute la logique du composant en l'injectant à l'objet component.

En optionnel vous pouvez avoir un fichier de constantes nommé `constant.js` à la racine de la feature contenant seulement les constantes utiles à cette feature. Même méthode pour un dossier `utils` qui contiendrait des méthodes utilitaires utilisées seulement pour la feature.

**Stratégie de test**

Nous avons un dossier de tests `__tests__` présent à la racine testant la partie container qui englobe le component et un deuxième dans le dossier `utils` s'il y en a un, testant unitairement les méthodes utilitaires.
