# Trier sans modifier : toSorted

**Durée** : 30 minutes : 15 pour le pas à pas du cours, 15 pour ces trois fonctions.
**But** : trier des nombres et des objets avec `toSorted` et sa fonction
de comparaison, sans modifier le tableau reçu.

## 1. D'abord, le pas à pas du cours (15 min)

Le cours de la semaine 7 contient un pas à pas commenté ligne par ligne :
[« Le palmarès des musées »](https://kevinbdx35.github.io/dwwm-2026-2027/semaines/s07-js-avance/jeudi-apres-midi.html#pas-%C3%A0-pas-ensemble-le-palmar%C3%A8s-des-mus%C3%A9es-40-min) (semaine 7, jeudi après-midi).

1. Ouvrez la page, section « Pas à pas ensemble — Le palmarès des musées ».
2. Dans `~/dwwm/dwwm-tp/semaine-07`, le dossier `pas-a-pas-tri` vient de
   l'archive de la semaine 7 (lien en haut de la page du lundi après-midi
   de la semaine 7). S'il manque, téléchargez l'archive et extrayez-la dans
   `semaine-07`.
3. Faites les quatre étapes : tapez le code **et** ses commentaires,
   lancez `node palmares.js` après chaque étape, comparez avec
   « Vous devez voir ».
4. Bloqué à une étape : copiez le fichier de `rattrapage/tri/etape-N/`
   (N : le numéro de l'étape) à la place de votre `palmares.js`,
   puis passez à l'étape suivante.

**À retenir du pas à pas** :

- `toSorted()` sans argument trie comme des **textes** : `179932` arrive
  avant `29212`.
- `(a, b) => a - b` : du plus petit au plus grand ; `(a, b) => b - a` :
  du plus grand au plus petit.
- `toSorted` renvoie un **nouveau** tableau ; `sort` modifie le tableau
  sur lequel on l'appelle.

## Préparer

1. Copiez ce dossier dans `~/dwwm/dwwm-tp/semaine-08/soutien/`
   (voir le `README.md` à la racine du dépôt).
2. Dans le terminal, allez dans la copie :
   `cd ~/dwwm/dwwm-tp/semaine-08/soutien/js-tri-1`
3. Ouvrez la copie dans VS Code : `code .`
   (si la commande est inconnue : ouvrez VS Code,
   puis *Fichier* > *Ouvrir le dossier…*).
4. Ouvrez `index.html` avec Live Preview, puis *Ouvrir dans le navigateur*.
5. Lancez les tests : `node --test logic.test.js`

**Vous devez voir** : 3 tests rouges (`fail 3`), et dans la page, des cadres rouges. C'est normal : rien n'est encore écrit.

## 2. Les trois fonctions

1. Ouvrez `logic.js`. Chaque fonction a sa consigne en commentaire,
   avec un exemple.
2. Écrivez-les dans l'ordre. Après chacune : enregistrez, relancez les
   tests, rechargez la page.
3. **Vous devez voir** : son test au vert, son cadre rempli ; et le cadre
   « Le tableau des prix d'origine » toujours dans l'ordre de départ
   (7, 4, 12, 5, 9).

<details>
<summary>Indice — 2, mostVisitedFirst</summary>

La même forme que l'étape 3 du pas à pas, mais `a` et `b` sont des
musées : on compare `b.visits` et `a.visits`.

</details>

<details>
<summary>Indice — 3, podiumNames</summary>

Trois méthodes à la suite, lues de gauche à droite :
`mostVisitedFirst(museums)` donne le classement ; `.slice(0, 3)` garde
les trois premiers ; `.map(...)` donne leur nom.

</details>

**Réussi si** : `node --test logic.test.js` affiche `fail 0`.

## Enregistrer et envoyer (2 min)

Depuis `~/dwwm/dwwm-tp` :

```bash
git status
git add semaine-08/soutien/js-tri-1
git commit -m "Ajoute l'exercice sur toSorted"
git push
```

## Aides

1. **Le cours** : semaine 7, jeudi après-midi,
   [trier avec toSorted](https://kevinbdx35.github.io/dwwm-2026-2027/semaines/s07-js-avance/jeudi-apres-midi.html#apport-tri)
   et le pas à pas « Le palmarès des musées ».
2. **L'IA** : CS50.ai. Demandez ce que renvoie la fonction de comparaison
   pour deux nombres précis, pas le code de la fonction.
3. **MDN** : [toSorted](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted),
   [sort](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort),
   [slice](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/slice).
