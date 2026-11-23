# Une méthode à la fois : de la boucle à map, filter, find et reduce

**Durée** : 30 minutes.
**But** : comprendre ce que font `map`, `filter`, `find` et `reduce`
en partant d'une boucle `for...of` que vous savez déjà lire.

## L'idée, autrement

Ces quatre méthodes ne font rien de nouveau : chacune remplace une boucle
que vous connaissez. Dans `logic.js`, chaque fonction existe deux fois :

- la version **boucle**, déjà écrite, qui marche ;
- la version **méthode**, que vous écrivez juste en dessous.

| La boucle fait… | La méthode | Le callback reçoit un élément et renvoie… |
|---|---|---|
| un tableau vide, un `push` par élément | `map` | ce que l'on range dans le nouveau tableau |
| un `push` seulement si une condition est vraie | `filter` | `true` (on garde) ou `false` |
| un `return` dans la boucle, au premier qui convient | `find` | `true` pour celui que l'on cherche |
| un accumulateur : avant, dans, après la boucle | `reduce` | la nouvelle valeur de l'accumulateur |

Le **callback** est la fonction que l'on donne à la méthode,
par exemple `(museum) => museum.name`. La méthode l'appelle
une fois pour chaque élément du tableau, à la place de la boucle.

## Préparer

1. Copiez ce dossier dans `~/dwwm/dwwm-tp/semaine-08/soutien/`
   (voir le `README.md` à la racine du dépôt).
2. Dans le terminal, allez dans la copie :
   `cd ~/dwwm/dwwm-tp/semaine-08/soutien/js-methodes-1`
3. Ouvrez la copie dans VS Code : `code .`
   (si la commande est inconnue : ouvrez VS Code,
   puis *Fichier* > *Ouvrir le dossier…*).
4. Ouvrez `index.html` avec Live Preview, puis *Ouvrir dans le navigateur*.
5. Lancez les tests : `node --test logic.test.js`

**Vous devez voir** : 4 tests rouges (`fail 4`), et dans la page, quatre cadres rouges. C'est normal : rien n'est encore écrit.

## Faire les quatre fonctions, dans l'ordre

Une méthode à la fois. Pour chacune :

1. Lisez la version boucle. Dites à voix haute ce que fait chaque ligne.
2. Repérez sa ligne dans le tableau ci-dessus.
3. Écrivez la version méthode, en une ligne `return`.
4. Enregistrez, relancez `node --test logic.test.js`, rechargez la page.
5. **Vous devez voir** : le test de cette fonction au vert, et son cadre
   rempli dans la page. Cochez la case de `bilan.md`.

Après 8 minutes bloqué sur la même fonction : ouvrez son indice.
Toujours bloqué : notez dans `bilan.md` où vous vous êtes arrêté,
puis passez à la suivante.

<details>
<summary>Indice — 1, names (map)</summary>

`return museums.map((museum) => …);` : à la place des trois points,
ce que la boucle met dans `push`.

</details>

<details>
<summary>Indice — 2, inCity (filter)</summary>

`return museums.filter((museum) => …);` : à la place des trois points,
la condition du `if` de la boucle.

</details>

<details>
<summary>Indice — 3, findByName (find)</summary>

La même forme que `filter`, avec `find` : le callback renvoie la condition
du `if`. Si aucun musée ne convient, `find` renvoie `undefined` tout seul.

</details>

<details>
<summary>Indice — 4, totalVisits (reduce)</summary>

`return museums.reduce((total, museum) => …, 0);` : à la place des
trois points, ce que la boucle met à droite de `total =`.
Le `0` de la fin est la valeur de départ, celle d'avant la boucle.

</details>

**Réussi si** : `node --test logic.test.js` affiche `fail 0`,
les quatre cadres de la page sont remplis, et `bilan.md` est rempli.

## Enregistrer et envoyer (2 min)

Depuis `~/dwwm/dwwm-tp` :

```bash
git status
git add semaine-08/soutien/js-methodes-1
git commit -m "Ajoute l'exercice map, filter, find et reduce"
git push
```

## Aides

1. **Le cours** : semaine 7, [map](https://kevinbdx35.github.io/dwwm-2026-2027/semaines/s07-js-avance/lundi-apres-midi.html#apport-map),
   [filter et find](https://kevinbdx35.github.io/dwwm-2026-2027/semaines/s07-js-avance/mardi-matin.html#apport-filter),
   [reduce](https://kevinbdx35.github.io/dwwm-2026-2027/semaines/s07-js-avance/jeudi-matin.html#apport-reduce).
2. **L'IA** : CS50.ai. Demandez ce que fait le callback pour un seul
   musée, pas le code de la fonction.
3. **MDN** : [map](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map),
   [filter](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter),
   [find](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/find),
   [reduce](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce).
