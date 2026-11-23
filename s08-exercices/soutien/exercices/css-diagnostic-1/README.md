# Diagnostic CSS

**Durée** : 30 minutes.
**But** : trouver la notion de CSS sur laquelle vous devez travailler.
Cinq questions, une par notion déjà vue en cours : les variables,
le modèle de boîte (padding), Flexbox, Grid, le mobile first.

Chaque question suit le même ordre : pourquoi, un exemple expliqué
ligne par ligne, puis à vous, sur un autre élément de la page.
Ce n'est pas une évaluation : un test qui reste rouge est
une information utile, pas une faute.

## Préparer

1. Copiez ce dossier dans `~/dwwm/dwwm-tp/semaine-07/soutien/`
   (voir le `README.md` à la racine du dépôt).
2. Allez dans la copie :
   `cd ~/dwwm/dwwm-tp/semaine-07/soutien/css-diagnostic-1`
3. Ouvrez-la dans VS Code : `code .`
   (si la commande est inconnue : ouvrez VS Code,
   puis *Fichier* > *Ouvrir le dossier…*).
4. Ouvrez `index.html` avec Live Preview (clic droit sur le fichier,
   *Show Preview*), et `style.css` à côté.
5. Lancez les tests : `node --test css.test.js`

**Vous devez voir** : `fail 5`. C'est normal : rien n'est encore écrit.

Après chaque question : enregistrez, regardez l'aperçu, relancez
les tests, puis notez dans `bilan.md` si c'est réussi.
Après 6 minutes bloqué sur la même question : notez où vous vous
êtes arrêté dans `bilan.md`, puis passez à la suivante.

## Question 1 — Les variables

**Pourquoi** : une couleur écrite une seule fois, dans `:root`,
se change à un seul endroit pour toute la page.

**Exemple** (le titre prend la couleur principale) :

```css
/* Le sélecteur de classe : tous les éléments class="titre" */
.titre {
  /* var() lit la valeur de la variable écrite dans :root */
  color: var(--couleur-principale);
}
```

**À vous** : donnez au bouton (classe `bouton`) un fond de la couleur
principale, avec la propriété `background-color` et la même variable.

**Vous devez voir** : le bouton « S'inscrire » a un fond bleu foncé.

## Question 2 — Le modèle de boîte : le padding

**Pourquoi** : le padding est l'espace **à l'intérieur** de la boîte,
entre son bord et son contenu ; sans lui, le texte colle au bord.

**Exemple** (de l'espace à l'intérieur du menu) :

```css
/* La règle s'applique à l'élément class="menu" */
.menu {
  /* padding : l'espace intérieur, sur les quatre côtés */
  padding: var(--espace-s);
}
```

**À vous** : donnez à la carte (classe `carte`) un padding de
`var(--espace-m)`.

**Vous devez voir** : le texte de la carte s'écarte du bord de son fond.

## Question 3 — Flexbox

**Pourquoi** : Flexbox place les enfants d'un élément sur une ligne,
avec un espace régulier entre eux.

**Exemple** (les enfants de la carte en ligne) :

```css
/* La carte devient un conteneur flexible */
.carte {
  /* display: flex : les enfants se placent en ligne */
  display: flex;
  /* gap : l'espace entre deux enfants */
  gap: var(--espace-m);
}
```

**À vous** : faites la même chose sur le menu (classe `menu`) :
les liens en ligne, avec `gap: var(--espace-m)` entre eux.
Ne gardez pas l'exemple sur la carte : il n'est pas demandé.

**Vous devez voir** : les trois liens côte à côte, espacés.

## Question 4 — Grid

**Pourquoi** : Grid range les enfants dans une grille de cases ;
`gap` met l'espace entre les cases.

**Exemple** (une grille sur un autre élément) :

```css
/* L'élément devient une grille */
.liste {
  /* display: grid : les enfants deviennent des cases */
  display: grid;
  /* gap : l'espace entre les cases */
  gap: var(--espace-s);
}
```

**À vous** : faites de la galerie (classe `galerie`) une grille,
avec `gap: var(--espace-m)`. Sans colonnes pour l'instant :
sur un téléphone, une colonne suffit.

**Vous devez voir** : « Bol », « Tasse », « Vase » l'un sous l'autre,
espacés régulièrement.

## Question 5 — Le mobile first

**Pourquoi** : on écrit d'abord le style du téléphone ;
une media query `min-width` ajoute ce qui change sur grand écran.

**Exemple** (le titre plus grand à partir de 48rem de large) :

```css
/* Seulement si l'écran fait au moins 48rem de large */
@media (min-width: 48rem) {
  /* La règle habituelle, à l'intérieur des accolades de @media */
  .titre {
    /* Le titre grandit sur grand écran */
    font-size: 3rem;
  }
}
```

**À vous** : à la fin du fichier, écrivez une media query
`(min-width: 48rem)` dans laquelle la galerie a trois colonnes :
`grid-template-columns: repeat(3, 1fr);`.

**Vous devez voir** : dans l'aperçu élargi, trois cases côte à côte ;
fenêtre étroite, une seule colonne.

**Réussi si** : `bilan.md` est rempli pour les cinq questions.
Les tests au vert sont un plus, pas une condition.

## Enregistrer et envoyer (2 min)

Depuis `~/dwwm/dwwm-tp` :

```bash
git status
git add semaine-07/soutien/css-diagnostic-1
git commit -m "Ajoute le diagnostic CSS"
git push
```

## Aides

1. **Le cours** : semaine 5, [les bases du CSS](https://kevinbdx35.github.io/dwwm-2026-2027/semaines/s05-html-css/mardi.html) ;
   semaine 6, [Flexbox](https://kevinbdx35.github.io/dwwm-2026-2027/semaines/s06-html-css-suite/lundi.html)
   et [Grid, puis le mobile first](https://kevinbdx35.github.io/dwwm-2026-2027/semaines/s06-html-css-suite/mardi.html).
2. **L'IA** : CS50.ai. Demandez ce que fait une propriété,
   ou pourquoi l'aperçu ne change pas, pas la règle à écrire.
3. **MDN** : [`var()` et les variables CSS](https://developer.mozilla.org/fr/docs/Web/CSS/Reference/Values/var),
   [le modèle de boîte](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Styling_basics/Box_model),
   [Flexbox](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/CSS_layout/Flexbox),
   [Grid](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/CSS_layout/Grids),
   [le responsive et les media queries](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/CSS_layout/Responsive_Design).
