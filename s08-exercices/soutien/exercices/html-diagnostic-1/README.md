# Diagnostic HTML : l'atelier vélo

**Durée** : 30 minutes.
**But** : trouver la notion de HTML sur laquelle vous devez travailler.
La page `index.html` s'affiche, mais elle est mal construite :
un lecteur d'écran ou un moteur de recherche la comprend mal.
Cinq questions, une par notion déjà vue en cours.

Chaque question donne le résultat à obtenir. Essayez d'abord seul ;
ouvrez l'indice (cliquez sur « Indice ») seulement après 3 minutes.
Ce n'est pas une évaluation : un test qui reste rouge est
une information utile, pas une faute.

## Préparer

1. Copiez ce dossier dans `~/dwwm/dwwm-tp/semaine-07/soutien/`
   (voir le `README.md` à la racine du dépôt).
2. Allez dans la copie :
   `cd ~/dwwm/dwwm-tp/semaine-07/soutien/html-diagnostic-1`
3. Ouvrez-la dans VS Code : `code .`
   (si la commande est inconnue : ouvrez VS Code,
   puis *Fichier* > *Ouvrir le dossier…*).
4. Ouvrez `index.html` avec Live Preview (clic droit sur le fichier,
   *Show Preview*).
5. Lancez les tests : `node --test html.test.js`

**Vous devez voir** : `fail 5`. C'est normal : rien n'est encore corrigé.

Après chaque question : enregistrez, relancez les tests,
puis notez dans `bilan.md` si c'est réussi.
Après 6 minutes bloqué sur la même question : notez où vous vous
êtes arrêté dans `bilan.md`, puis passez à la suivante.

## Question 1 — La langue et le titre

La page déclare qu'elle est en français, et son onglet affiche
« Atelier vélo ».

<details>
<summary>Indice</summary>

La langue est un attribut de la balise `<html>` ;
le texte de l'onglet est dans `<title>`, dans `<head>`.

</details>

## Question 2 — Les balises sémantiques

Remplacez les quatre `div` principaux par les balises qui disent
leur rôle : le haut de la page, le menu de liens, le contenu
principal, le bas de la page.

**Vous devez voir** : un seul `header`, un seul `nav`, un seul `main`
et un seul `footer` dans le fichier ; l'aperçu n'a pas changé.

<details>
<summary>Indice</summary>

Le `nav` est **dans** le `header`. Pensez à changer aussi
la balise fermante : `</div>` devient `</header>`, `</nav>`…

</details>

## Question 3 — Les titres

Une page n'a qu'un seul titre principal (`h1`) ;
les titres des parties sont un cran en dessous.

**Vous devez voir** : un `h1` « Atelier vélo », puis « Horaires »
et « Contact » en titres de partie, un peu plus petits dans l'aperçu.

<details>
<summary>Indice</summary>

Le cran en dessous de `h1` est `h2`. Gardez les attributs `id` :
les liens du menu en ont besoin.

</details>

## Question 4 — Le texte alternatif

Le logo est une image : quelqu'un qui ne la voit pas doit savoir
ce qu'elle représente.

<details>
<summary>Indice</summary>

L'attribut `alt` de `<img>` contient ce texte ; il décrit le rôle
de l'image (ici, le nom de l'atelier), en quelques mots.

</details>

## Question 5 — Les labels du formulaire

Chaque champ a un `label` visible, relié au champ :
un clic sur le texte du label place le curseur dans le champ.

**Vous devez voir** : dans l'aperçu, « Votre nom » écrit à côté
du premier champ ; un clic dessus active le champ.

<details>
<summary>Indice</summary>

`<label for="nom">Votre nom</label>` est relié au champ qui porte
`id="nom"`. Le `placeholder` ne remplace pas un label :
vous pouvez le retirer.

</details>

**Réussi si** : `bilan.md` est rempli pour les cinq questions.
Les tests au vert sont un plus, pas une condition.

## Enregistrer et envoyer (2 min)

Depuis `~/dwwm/dwwm-tp` :

```bash
git status
git add semaine-07/soutien/html-diagnostic-1
git commit -m "Ajoute le diagnostic HTML"
git push
```

## Aides

1. **Le cours** : semaine 5, [page sémantique et formulaire](https://kevinbdx35.github.io/dwwm-2026-2027/semaines/s05-html-css/lundi.html).
2. **L'IA** : CS50.ai. Demandez à quoi sert une balise ou un attribut,
   pas la page corrigée.
3. **MDN** : [la sémantique](https://developer.mozilla.org/fr/docs/Glossary/Semantics),
   [`<img>` et son attribut alt](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/img),
   [`<label>`](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/label).
