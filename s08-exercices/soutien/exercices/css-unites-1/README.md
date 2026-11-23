# CSS : les unités et le placement des éléments

**Durée** : 30 minutes.
**But** : savoir quelle unité écrire (rem, %, px), et placer des
éléments en ligne avec Flexbox.

Cinq questions. Chacune suit le même ordre : pourquoi, un exemple
expliqué ligne par ligne (déjà écrit dans `style.css`, sur un autre
élément de la page), puis à vous.

## Préparer

1. Copiez ce dossier dans `~/dwwm/dwwm-tp/semaine-07/soutien/`
   (voir le `README.md` à la racine du dépôt).
2. Allez dans la copie :
   `cd ~/dwwm/dwwm-tp/semaine-07/soutien/css-unites-1`
3. Ouvrez-la dans VS Code : `code .`
   (si la commande est inconnue : ouvrez VS Code,
   puis *Fichier* > *Ouvrir le dossier…*).
4. Ouvrez `index.html` avec Live Preview (clic droit sur le fichier,
   *Show Preview*), et `style.css` à côté.
5. Lancez les tests : `node --test css.test.js`

**Vous devez voir** : `fail 5`. C'est normal : rien n'est encore écrit.

Après chaque question : enregistrez, regardez l'aperçu, relancez
les tests, puis notez dans `bilan.md` si c'est réussi.
Écrivez vos règles à la fin de `style.css`, sous la dernière ligne
de commentaire.

## Question 1 — La taille du texte, en rem

**Pourquoi** : `1rem` est la taille du texte choisie par le lecteur
dans son navigateur (souvent 16 px). Un texte écrit en `rem` grandit
quand le lecteur agrandit son texte ; un texte écrit en `px` ne
bouge pas.

**Exemple** (le paragraphe d'introduction, un peu plus grand) :

```css
/* Le sélecteur de classe : l'élément class="intro" */
.intro {
  /* 1.25rem : une fois et quart la taille de base */
  font-size: 1.25rem;
}
```

**À vous** : donnez au titre (classe `titre`) une taille de texte
de deux fois la taille de base, avec `font-size`, en `rem`.

**Vous devez voir** : le titre nettement plus grand ; le test 1 au vert.

## Question 2 — Une largeur, en %

**Pourquoi** : `%` se calcule par rapport à l'élément qui contient.
Une largeur de `60%` reste 60 % de la page sur un téléphone comme
sur un grand écran ; une largeur de `600px` déborderait du téléphone.

**Exemple** (le bloc des rayons occupe 60 % de la largeur) :

```css
.rayons {
  /* 60 % de la largeur de l'élément qui le contient, main */
  width: 60%;
}
```

**À vous** : donnez à la carte (classe `carte`) une largeur de 80 %.

**Vous devez voir** : le fond bleu clair de la carte s'arrête avant
le bord droit ; rétrécissez l'aperçu : il rétrécit avec la page.

## Question 3 — Une bordure, en px

**Pourquoi** : une bordure fine doit rester fine, quelle que soit
la taille du texte. C'est le cas d'usage de `px`.

**Exemple** (un trait fin autour des rayons) :

```css
.rayons {
  /* épaisseur, style du trait, couleur */
  border: 1px solid #1f4e8c;
}
```

**À vous** : donnez à la carte une bordure de 2 px, en trait plein
(`solid`), de la même couleur.

**Vous devez voir** : un trait bleu autour de la carte.

## Question 4 — Placer en ligne : display: flex

**Pourquoi** : par défaut, les paragraphes se placent l'un sous
l'autre. `display: flex`, écrit sur le **parent**, place ses enfants
en ligne, l'un à côté de l'autre.

**Exemple** (les trois rayons, en ligne) :

```css
/* .rayons est le parent : il contient les trois paragraphes */
.rayons {
  /* ses enfants se placent en ligne */
  display: flex;
}
```

**À vous** : faites la même chose pour le menu (classe `menu`),
qui est le parent des trois liens.

**Vous devez voir** : rien ne change à l'œil, car des liens sont déjà
en ligne ; c'est la question 5 qui montre la différence.
Le test 4, lui, passe au vert.

## Question 5 — Espacer et centrer : gap, justify-content

**Pourquoi** : une fois le parent en Flexbox, `gap` règle l'espace
entre ses enfants, et `justify-content` les place sur la ligne
(au début, au centre, répartis).

**Exemple** (les rayons, espacés et centrés) :

```css
.rayons {
  /* 2rem d'espace entre deux enfants */
  gap: 2rem;
  /* les enfants au centre de la ligne */
  justify-content: center;
}
```

**À vous** : dans la règle du menu, ajoutez un espace de `1rem`
entre les liens, et centrez-les.

**Vous devez voir** : les trois liens au centre de la page,
bien séparés.

**Réussi si** : `node --test css.test.js` affiche `fail 0`,
et `bilan.md` est rempli.

## Enregistrer et envoyer (2 min)

Depuis `~/dwwm/dwwm-tp` :

```bash
git status
git add semaine-07/soutien/css-unites-1
git commit -m "Ajoute l'exercice sur les unités et le placement"
git push
```

## Aides

1. **Le cours** : semaine 5, [les unités](https://kevinbdx35.github.io/dwwm-2026-2027/semaines/s05-html-css/mercredi.html) ;
   semaine 6, [Flexbox](https://kevinbdx35.github.io/dwwm-2026-2027/semaines/s06-html-css-suite/lundi.html) ;
   la [fiche de révision de la semaine 6](https://kevinbdx35.github.io/dwwm-2026-2027/semaines/s06-html-css-suite/revision.html).
2. **L'IA** : CS50.ai. Demandez la différence entre deux unités,
   avec un exemple, pas la règle à écrire.
3. **MDN** : [valeurs et unités CSS](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Styling_basics/Values_and_units),
   [Flexbox](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/CSS_layout/Flexbox).
