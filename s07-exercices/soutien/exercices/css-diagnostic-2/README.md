# Diagnostic CSS : la librairie

**Durée** : 30 minutes.
**But** : trouver la notion de CSS sur laquelle vous devez travailler.
Cinq questions, une par notion déjà vue en cours : les variables,
le modèle de boîte (padding), Flexbox, Grid, le mobile first.

Chaque question donne le résultat à obtenir. Essayez d'abord seul ;
ouvrez l'indice (cliquez sur « Indice ») seulement après 3 minutes.
Ce n'est pas une évaluation : un test qui reste rouge est
une information utile, pas une faute.

## Préparer

1. Copiez ce dossier dans `~/dwwm/dwwm-tp/semaine-07/soutien/`
   (voir le `README.md` à la racine du dépôt).
2. Allez dans la copie :
   `cd ~/dwwm/dwwm-tp/semaine-07/soutien/css-diagnostic-2`
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

L'étiquette « Coup de cœur » (classe `etiquette`) a pour fond
la couleur de la variable `--couleur-accent`, écrite dans `:root`.

**Vous devez voir** : l'étiquette sur un fond rouge brique.

<details>
<summary>Indice</summary>

La propriété du fond est `background-color` ; une variable se lit
avec `var(--nom-de-la-variable)`.

</details>

## Question 2 — Le padding

Le texte de l'encart « Club de lecture » (classe `encart`)
ne colle plus au bord de son fond : un espace intérieur de
`var(--espace-m)`.

**Vous devez voir** : un espace régulier entre le bord beige et le texte.

<details>
<summary>Indice</summary>

L'espace **intérieur** d'une boîte est le `padding` ;
l'espace **extérieur** est la `margin`.

</details>

## Question 3 — Flexbox

Dans la barre du haut (classe `barre`), le nom de la librairie
est à gauche et le lien « Panier » à droite, sur la même ligne.

**Vous devez voir** : le nom tout à gauche, « Panier » tout à droite.

<details>
<summary>Indice</summary>

`display: flex` met les enfants en ligne ;
`justify-content` répartit l'espace restant sur la ligne :
cherchez la valeur qui pousse les enfants vers les deux bords.

</details>

## Question 4 — Grid

Les quatre vignettes (classe `vignettes`) forment une grille,
avec un espace de `var(--espace-m)` entre les cases.
Sans colonnes pour l'instant : sur un téléphone, une colonne suffit.

**Vous devez voir** : les quatre cases l'une sous l'autre,
espacées régulièrement.

<details>
<summary>Indice</summary>

`display: grid` sur le parent ; l'espace entre les cases est `gap`.

</details>

## Question 5 — Le mobile first

Sur un écran d'au moins `48rem` de large, les vignettes passent
sur plusieurs colonnes (deux, trois ou quatre : à vous de choisir).
Sur un écran plus étroit, rien ne change.

**Vous devez voir** : aperçu élargi, les cases côte à côte ;
fenêtre étroite, une seule colonne.

<details>
<summary>Indice</summary>

Une media query `@media (min-width: 48rem) { … }` contient une règle
habituelle ; les colonnes se décrivent avec `grid-template-columns`
et `repeat()`.

</details>

**Réussi si** : `bilan.md` est rempli pour les cinq questions.
Les tests au vert sont un plus, pas une condition.

## Enregistrer et envoyer (2 min)

Depuis `~/dwwm/dwwm-tp` :

```bash
git status
git add semaine-07/soutien/css-diagnostic-2
git commit -m "Ajoute le diagnostic CSS de la librairie"
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
