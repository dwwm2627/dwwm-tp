# Tableaux et boucles : parcourir, accumuler, construire

**Durée** : 30 minutes.
**But** : savoir écrire seul les trois gestes de base sur un tableau :
le parcourir, accumuler une valeur, construire un nouveau tableau.
Deux fonctions emploient le modulo (`%`), et la dernière appelle
une fonction que vous avez écrite.

## Préparer

1. Copiez ce dossier dans `~/dwwm/dwwm-tp/semaine-07/soutien/`
   (voir le `README.md` à la racine du dépôt).
2. Dans le terminal, allez dans la copie :
   `cd ~/dwwm/dwwm-tp/semaine-07/soutien/js-tableaux-2`
3. Ouvrez la copie dans VS Code : `code .`
   (si la commande est inconnue : ouvrez VS Code,
   puis *Fichier* > *Ouvrir le dossier…*).
4. Lancez les tests : `node --test tableaux.test.js`

**Vous devez voir** : 5 tests rouges (`fail 5`). C'est normal :
rien n'est encore écrit.

## Les trois gestes

Avant d'écrire, repérez dans chaque consigne lequel des trois gestes
elle demande :

- **Parcourir** : passer sur chaque élément, avec `for...of`.
- **Accumuler** : une variable créée **avant** la boucle (`let`),
  mise à jour **dans** la boucle, renvoyée **après** la boucle.
- **Construire** : un tableau vide créé avant la boucle,
  rempli avec `push` dans la boucle, renvoyé après la boucle.

## Faire les cinq fonctions, dans l'ordre

1. Ouvrez `tableaux.js`. Chaque fonction a sa consigne en commentaire,
   avec un exemple d'appel et le résultat attendu.
2. Pour chaque fonction : écrivez d'abord, sur une feuille, ce que vaut
   votre variable à chaque tour de boucle pour l'exemple de la consigne.
3. Écrivez la fonction, enregistrez, relancez les tests.
4. Cochez la case qui correspond dans `bilan.md`.
5. Après 8 minutes bloqué sur la même fonction : ouvrez son indice
   (cliquez sur « Indice »). Toujours bloqué : notez dans `bilan.md`
   où vous vous êtes arrêté, puis passez à la suivante.

<details>
<summary>Indice — fonction 1, total</summary>

Trois lignes autour de la boucle : `let sum = 0;` avant ;
dans la boucle, `sum` reçoit `sum` plus l'élément ; `return sum;` après.

</details>

<details>
<summary>Indice — fonction 2, countEven</summary>

Le même accumulateur que dans `total`, mais il compte : il augmente
de 1 seulement **si** `n % 2 === 0`. `7 % 2` vaut 1 (reste de la
division de 7 par 2) ; `10 % 2` vaut 0.

</details>

<details>
<summary>Indice — fonction 3, doubles</summary>

`const result = [];` avant la boucle ; dans la boucle,
`result.push(…)` avec l'élément multiplié par 2 ; `return result;` après.
N'écrivez jamais dans `numbers` : c'est le tableau reçu.

</details>

<details>
<summary>Indice — fonction 4, multiplesOf</summary>

La boucle de `doubles`, avec le `if` de `countEven` : on ajoute
l'élément au nouveau tableau seulement si `n % divisor === 0`.

</details>

<details>
<summary>Indice — fonction 5, average</summary>

Commencez par le cas du tableau vide : si `prices.length === 0`,
renvoyez 0. Sinon, la moyenne est `total(prices)` divisé par
`prices.length`.

</details>

**Réussi si** : `node --test tableaux.test.js` affiche `fail 0`,
et `bilan.md` est rempli.

## Enregistrer et envoyer (2 min)

Depuis `~/dwwm/dwwm-tp` :

```bash
git status
git add semaine-07/soutien/js-tableaux-2
git commit -m "Ajoute l'exercice sur les tableaux et les boucles"
git push
```

## Aides

1. **Le cours** : semaine 2, [conditions et boucles](https://kevinbdx35.github.io/dwwm-2026-2027/semaines/s02-fondamentaux-js-1/vendredi.html) ;
   semaine 3, [fonctions](https://kevinbdx35.github.io/dwwm-2026-2027/semaines/s03-fondamentaux-js-2/lundi.html)
   et [tableaux et chaînes](https://kevinbdx35.github.io/dwwm-2026-2027/semaines/s03-fondamentaux-js-2/mardi.html).
2. **L'IA** : CS50.ai. Demandez ce que vaut une variable à chaque tour
   d'une boucle, sur un exemple, pas le code de la fonction.
3. **MDN** : [boucles et itérations](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Scripting/Loops),
   [Array.prototype.push()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/push),
   [le reste de la division (%)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Remainder).
