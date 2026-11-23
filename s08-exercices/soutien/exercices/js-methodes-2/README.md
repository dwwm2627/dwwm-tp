# Deux méthodes ensemble, sur des objets, sans rien modifier

**Durée** : 30 minutes.
**But** : combiner `map` avec `find` ou `filter` sur un tableau d'objets,
et rendre un nouveau tableau sans jamais modifier le tableau reçu.

Deux parties : dans la partie A, chaque étape est écrite ;
la partie B demande la même chose, avec moins d'aide.

## Avant de commencer : lire de l'intérieur vers l'extérieur

Quand deux méthodes sont l'une dans l'autre, lisez d'abord celle du
**dedans**, pour **un seul** élément :

```js
ids.map((id) => museums.find((museum) => museum.id === id).name)
```

1. Le dedans, pour un seul `id`, par exemple `'M04'` :
   `museums.find((museum) => museum.id === 'M04')` renvoie l'objet
   du musée de la marine ; `.name` donne son nom.
2. Le dehors : `ids.map(...)` fait cela pour chaque `id`, et range
   chaque nom dans un nouveau tableau.

Quand deux méthodes se suivent (`filter(...).map(...)`), lisez de gauche
à droite : `filter` renvoie un tableau, et `map` travaille sur ce tableau.

**Ne rien modifier** : `map`, `filter` et `find` ne changent jamais le
tableau sur lequel on les appelle. Pour changer un objet, on en crée un
nouveau avec le spread : `{ ...museum, visits: 0 }`.

## Préparer

1. Copiez ce dossier dans `~/dwwm/dwwm-tp/semaine-08/soutien/`
   (voir le `README.md` à la racine du dépôt).
2. Dans le terminal, allez dans la copie :
   `cd ~/dwwm/dwwm-tp/semaine-08/soutien/js-methodes-2`
3. Ouvrez la copie dans VS Code : `code .`
   (si la commande est inconnue : ouvrez VS Code,
   puis *Fichier* > *Ouvrir le dossier…*).
4. Ouvrez `index.html` avec Live Preview, puis *Ouvrir dans le navigateur*.
5. Lancez les tests : `node --test logic.test.js`

**Vous devez voir** : 4 tests rouges sur 5 (`fail 4`), et dans la page, quatre cadres rouges. C'est normal : rien n'est encore écrit.

## Partie A : les étapes

**A1, favoriteNames.**

1. Écrivez d'abord, sur une feuille, le dedans pour `'M04'` seulement :
   quelle méthode trouve **un** musée à partir de son identifiant ?
2. Écrivez le dehors : `return ids.map((id) => ...);`
3. À la place des trois points : le `find` de l'étape 1, puis `.name`.
4. **Vous devez voir** : le test A1 au vert, et deux noms dans le cadre A1.

**A2, namesInCity.**

1. `museums.filter(...)` : le callback renvoie la condition « le musée
   est dans la ville ».
2. Ajoutez `.map(...)` juste après la parenthèse fermante de `filter` :
   le callback renvoie le nom du musée.
3. **Vous devez voir** : le test A2 au vert, et les deux musées de Brest.

## Partie B : la même chose, avec moins d'aide

**B1, favoriteCities** : comme A1, mais avec la ville.

**B2, addVisits** : un `map` sur `museums`. Le callback renvoie, pour
le musée `id`, un **nouvel** objet (spread) avec ses visites augmentées ;
pour les autres musées, le musée tel quel. Une condition dans le callback
(`if`, ou l'opérateur ternaire `condition ? a : b`) choisit entre les deux.

<details>
<summary>Indice — B2, addVisits</summary>

```js
return museums.map((museum) => {
  if (museum.id === id) {
    // ici : le nouvel objet, avec le spread
  }
  return museum;
});
```

</details>

Après 8 minutes bloqué sur la même fonction : notez dans `bilan.md`
où vous vous êtes arrêté, puis passez à la suivante.

**Réussi si** : `node --test logic.test.js` affiche `fail 0`,
les quatre cadres de la page sont remplis, et `bilan.md` est rempli.

## Enregistrer et envoyer (2 min)

Depuis `~/dwwm/dwwm-tp` :

```bash
git status
git add semaine-08/soutien/js-methodes-2
git commit -m "Ajoute l'exercice map avec find et filter"
git push
```

## Aides

1. **Le cours** : semaine 7, [map](https://kevinbdx35.github.io/dwwm-2026-2027/semaines/s07-js-avance/lundi-apres-midi.html#apport-map),
   [filter et find](https://kevinbdx35.github.io/dwwm-2026-2027/semaines/s07-js-avance/mardi-matin.html#apport-filter),
   [les objets](https://kevinbdx35.github.io/dwwm-2026-2027/semaines/s07-js-avance/mardi-apres-midi.html#apport-objets),
   [le spread](https://kevinbdx35.github.io/dwwm-2026-2027/semaines/s07-js-avance/vendredi-matin.html#apport-spread).
2. **L'IA** : CS50.ai. Demandez ce que renvoie la méthode du dedans pour
   un seul élément, pas le code de la fonction.
3. **MDN** : [map](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map),
   [find](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/find),
   [filter](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter),
   [la syntaxe de décomposition (spread)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Spread_syntax).
