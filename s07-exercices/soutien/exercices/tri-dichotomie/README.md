# Recherche dichotomique

**Durée** : 30 à 45 minutes.
**But** : retrouver une valeur dans un tableau trié en coupant
la zone de recherche en deux à chaque tour, au lieu de tout parcourir.

Cet exercice vient du cours de la semaine 3, jeudi, TP
« Algorithmes de tri ». Il est repris ici tel quel.

> **Autonome**
>
> Vous allez bloquer : c'est voulu, c'est le métier. Méthode :
> 1. lisez le message d'erreur en entier ;
> 2. cherchez-le dans la fiche « Lire un message d'erreur » ;
> 3. lisez la documentation ;
> 4. après 15 minutes bloqué sur le même point, demandez.

## Consigne

1. Copiez ce dossier dans `~/dwwm/dwwm-tp/semaine-07/soutien/`
   (voir le `README.md` à la racine du dépôt).
2. Ouvrez `tri-dichotomie.js` : la consigne est en commentaire.
3. Avant de coder, faites l'algorithme à la main, sur papier,
   avec le tableau `[1, 3, 5, 7, 9]` et la valeur `7` :
   notez `low`, `high` et `middle` à chaque tour.
4. Codez `binarySearch`, sans `indexOf`, `includes` ni `find`.

**Réussi si** : `node --test tri-dichotomie.test.js` affiche `pass 6`,
et vous savez dire combien de tours il faut, au plus,
pour un tableau de 1 000 valeurs.

## Enregistrer et envoyer (2 min)

Depuis `~/dwwm/dwwm-tp` :

```bash
git status
git add semaine-07/soutien/tri-dichotomie
git commit -m "Ajoute la recherche dichotomique"
git push
```

## Aides

1. **Le cours** : semaine 3, [recherche, tris et complexité](https://kevinbdx35.github.io/dwwm-2026-2027/semaines/s03-fondamentaux-js-2/jeudi.html) ;
   la [fiche des algorithmes de recherche](https://kevinbdx35.github.io/dwwm-2026-2027/ressources/fiche-algorithmes-recherche.html).
2. **L'IA** : CS50.ai. Demandez une explication de la recherche
   dichotomique ou de votre message d'erreur, pas le code.
3. **MDN** : [`Math.floor()`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/floor),
   [boucles et itérations](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Scripting/Loops).
