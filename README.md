# Web Applications

Ce repo contient le front-end de mon application SvelteKit, connectée au back-end du repo secure-web-dev-backend (le vôtre) : 
https://github.com/Carla802/secure-web-dev-backend.git

## Pré-requis du back-end

J'ai modifié dans le back-end, dans le dossier custom-errors, le fichier http-error.helper.js. aux lignes suivantes :
```
switch (err.name) {
    case "NotFoundError":
      return res.status(404).send({err: err.message});
    case "ValidationError":
    case "DuplicateError":
      return res.status(400).send({err: err.message});
    default:
      return res.status(500).send("Something broke!");
  }
```
Cela permet de renvoyer dans la requête un objet contenant 
le message d'erreur, au lieu du message tout court. 
Cela facilite la conversion en json de la réponse de requête reçue par le front-end.

Afin de faciliter les tests d'ajout ou de suppression de location, il est recommandé de diminuer la quantité de locations importées dans la page locations.
Pour cela, dans le fichier locations.controller du dossier locations, dans la fonction controllerGetAllLocations :

```
const limit = req.query.limit || 200;
const offset = req.query.offset || 19300;
```

En partant du principe que la base de données contient 19418 locations (je n'ai peut-être pas la base de données entière).
De cette façon, on pourra voir la derniere location créée lorsqu'on en crée une depuis l'application.

## Pré-requis du front-end

Lancer dans le terminal la commande `npm install`

## Lancer l'application

1. Lancer le fichier index.js du back-end
2. Lancer dans le terminal la commande `npm run dev`
3. Aller sur le lien http://127.0.0.1:5173/

## Utiliser l'application

L'application est composée d'une page d'accueil, d'une page Log in et Register. 

Elle contient également une page affichant toutes les locations, qui sont paginées (20 par pages). 

Et une fois connecté en tant que user, une page Settings permet de se déconnecter.

## User stories validées 

US1: On peut se register en allant sur l'onglet "Register". 
Si l'username est déjà utilisé, cela nous affiche une erreur. On peut aussi se log in en allant sur l'onglet Log In. 
Si l'username ou le password n'est pas bon cela nous affiche une erreur. 

US2: Tant qu'on est pas connecté, on est redirigé sur la page Log in si on clique sur l'onglet Locations.

US3: En tant qu'utilisateur connecté, on peut accéder à la liste de toutes les locations et accéder à leurs détails en cliquant sur le bouton "Détails".

US4: En tant qu'utilisateur connecté, on peut créer une nouvelle location en cliquant sur le bouton "Add"

US5: En tant qu'utilisateur connecté, on peut modifier une location existante en cliquant sur le bouton "Edit"

US6: En tant qu'utilisateur connecté, on peut supprimer une location existante en cliquant sur le bouton "Delete".
En revanche, il faut refresh la page afin que la location n'apparaisse plus dans la liste, même si elle a bien été supprimée de la base de données.


