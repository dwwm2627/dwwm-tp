# Tableaux et boucles : un exemple expliqué, puis à vous

**Durée** : 30 minutes.
**But** : comprendre comment une boucle passe sur un tableau,
puis écrire trois petites fonctions sur ce modèle.

L'exercice se fait en deux temps : d'abord lire et lancer un exemple
commenté ligne par ligne, ensuite compléter trois fonctions,
une ligne à la fois.

## Préparer

1. Copiez ce dossier dans `~/dwwm/dwwm-tp/semaine-07/soutien/`
   (voir le `README.md` à la racine du dépôt).
2. Dans le terminal, allez dans la copie :
   `cd ~/dwwm/dwwm-tp/semaine-07/soutien/js-tableaux-1`
3. Ouvrez la copie dans VS Code : `code .`
   (si la commande est inconnue : ouvrez VS Code,
   puis *Fichier* > *Ouvrir le dossier…*).

## Partie A — Lire l'exemple (10 min)

1. Ouvrez `exemple.js`. Lisez chaque commentaire, puis la ligne
   de code juste en dessous.
2. Avant de lancer le fichier, écrivez sur une feuille ce que
   la console va afficher, ligne par ligne.
3. Lancez-le : `node exemple.js`
4. Comparez avec votre feuille.

**Vous devez voir** :

```text
un prix : 10
un prix : 25
un prix : 8
la somme : 43
les prix TTC : [ 12, 30, 9.6 ]
les prix de départ : [ 10, 25, 8 ]
```

5. Répondez dans `bilan.md` aux deux questions de la partie A.

## Partie B — Compléter trois fonctions (20 min)

Lancez d'abord les tests : `node --test tableaux.test.js`

**Vous devez voir** : 3 tests rouges (`fail 3`). C'est normal.

Ouvrez `tableaux.js`. Les lignes à écrire sont marquées
« À compléter ».

### Fonction 1 — totalVisits

1. Repérez dans `exemple.js` la ligne qui ajoute le prix à la somme :
   `sum = sum + price;`
2. Dans `totalVisits`, sous le commentaire « À compléter »,
   écrivez la même ligne, avec `visit` à la place de `price`.
3. Enregistrez, relancez les tests.

**Vous devez voir** : le test 1 au vert (`pass 1`).

### Fonction 2 — countBig

1. Sous le premier « À compléter », écrivez une condition :
   `if (visit > 100) {` … `}`
2. Entre les accolades, ajoutez 1 au compteur : `count = count + 1;`
3. À la dernière ligne de la fonction, remplacez `undefined`
   par `count`.
4. Enregistrez, relancez les tests.

**Vous devez voir** : le test 2 au vert (`pass 2`).

### Fonction 3 — plusTen

1. Repérez dans `exemple.js` les trois moments de « Construire » :
   le tableau vide avant la boucle, `push` dans la boucle,
   le tableau complet après.
2. Sous le premier « À compléter », créez le tableau vide :
   `const result = [];`
3. Écrivez la boucle : `for (const visit of visits) {` … `}`
4. Dans la boucle, ajoutez au nouveau tableau le nombre plus 10 :
   `result.push(visit + 10);`
5. À la dernière ligne, remplacez `undefined` par `result`.
6. Enregistrez, relancez les tests.

**Réussi si** : `node --test tableaux.test.js` affiche `fail 0`,
et `bilan.md` est rempli.

## Enregistrer et envoyer (2 min)

Depuis `~/dwwm/dwwm-tp` :

```bash
git status
git add semaine-07/soutien/js-tableaux-1
git commit -m "Ajoute l'exercice sur les tableaux et les boucles"
git push
```

## Aides

1. **Le cours** : semaine 2, [conditions et boucles](https://kevinbdx35.github.io/dwwm-2026-2027/semaines/s02-fondamentaux-js-1/vendredi.html) ;
   semaine 3, [tableaux et chaînes](https://kevinbdx35.github.io/dwwm-2026-2027/semaines/s03-fondamentaux-js-2/mardi.html).
2. **L'IA** : CS50.ai. Demandez ce que vaut une variable à chaque tour
   d'une boucle, sur un exemple, pas le code de la fonction.
3. **MDN** : [boucles et itérations](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Scripting/Loops),
   [Array.prototype.push()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/push).
