# Diagnostic Git : ignorer, enregistrer, brancher, envoyer

**Durée** : 30 minutes.
**But** : trouver l'étape de Git sur laquelle vous devez travailler.
Cinq tâches, dans votre dépôt `dwwm-tp`, toutes vues en cours.

Chaque tâche donne le résultat à obtenir. Essayez d'abord seul ;
ouvrez l'indice (cliquez sur « Indice ») seulement après 3 minutes.
Après chaque tâche, notez dans `bilan.md` si c'est réussi.
Ce n'est pas une évaluation : une tâche non réussie est
une information utile, pas une faute.

## Préparer

1. Copiez ce dossier dans `~/dwwm/dwwm-tp/semaine-07/soutien/`
   (voir le `README.md` à la racine du dépôt).
2. Toutes les commandes Git se lancent depuis la racine du dépôt :
   `cd ~/dwwm/dwwm-tp`

## Tâche 1 — Lire l'état du dépôt

Notez dans `bilan.md` le nom de la branche courante, et la liste
des fichiers ou dossiers que Git ne suit pas encore.

<details>
<summary>Indice</summary>

Une seule commande donne les deux. Les fichiers non suivis sont en
rouge, sous « Fichiers non suivis » (« Untracked files »).

</details>

## Tâche 2 — Ignorer un fichier

Dans le dossier de l'exercice, créez un fichier `brouillon.log`
qui contient une phrase. Faites en sorte que Git l'ignore,
avec un fichier `.gitignore` placé **dans le dossier de l'exercice**.

**Réussi si** : `git status` ne montre jamais `brouillon.log`,
même après la tâche 3.

<details>
<summary>Indice</summary>

Le fichier `.gitignore` contient une ligne par nom de fichier
(ou par motif, comme `*.log`) que Git ne doit pas suivre.
Vérifiez avec `ls -a` qu'il s'appelle bien `.gitignore`,
avec le point au début et sans `.txt` à la fin.

</details>

## Tâche 3 — Enregistrer avec un bon message

Enregistrez le dossier de l'exercice en un commit, avec un message
qui dit **ce que** fait le commit, à l'impératif, en moins de
70 caractères.

**Réussi si** : `git log --oneline` montre votre commit en première
ligne, et `git status` affiche « rien à valider »
(« nothing to commit »), à part l'avance sur `origin/main`.

<details>
<summary>Indice</summary>

Deux commandes : l'une prépare le dossier, l'autre enregistre.
Un message à l'impératif commence par un verbe :
« Ajoute… », « Corrige… ».

</details>

## Tâche 4 — Travailler sur une branche

1. Créez une branche `soutien-git` et placez-vous dessus.
2. Créez dans le dossier de l'exercice un fichier `branche.txt`,
   qui contient une phrase, puis enregistrez-le en un commit.
3. Revenez sur `main`, puis fusionnez `soutien-git` dans `main`.

**Réussi si** : sur `main`, `ls` montre `branche.txt`, et
`git log --oneline` montre le commit fait sur la branche.

<details>
<summary>Indice</summary>

`git switch -c nom` crée une branche et s'y place ;
`git switch main` revient sur `main` ;
`git merge nom` fusionne la branche `nom` dans la branche courante.

</details>

## Tâche 5 — Envoyer sur GitHub

Envoyez vos commits sur GitHub, puis vérifiez-les sur la page
de votre dépôt `dwwm-tp`.

**Réussi si** : `git status` affiche « à jour avec 'origin/main' »
(« up to date with 'origin/main' ») et GitHub montre `branche.txt`,
mais pas `brouillon.log`.

<details>
<summary>Indice</summary>

Une seule commande envoie les commits de la branche courante.
Si Git refuse l'envoi, lisez le message en entier, puis cherchez-le
dans la fiche « Lire un message d'erreur », section Git.

</details>

**Réussi si** : `bilan.md` est rempli pour les cinq tâches,
puis enregistré et envoyé.

## Aides

1. **Le cours** : semaine 4, [versionner son travail avec Git](https://kevinbdx35.github.io/dwwm-2026-2027/semaines/s04-environnement/jeudi.html)
   (`.gitignore`, message de commit) et [branches et GitHub](https://kevinbdx35.github.io/dwwm-2026-2027/semaines/s04-environnement/vendredi.html) ;
   la [fiche « Lire un message d'erreur », section Git](https://kevinbdx35.github.io/dwwm-2026-2027/ressources/fiche-erreurs.html#git-semaine-4) ;
   les fiches aide-mémoire Git et commit, sur le Drive de la formation.
2. **L'IA** : CS50.ai. Collez le message de Git et demandez
   ce qu'il veut dire, pas la commande à taper.
3. **MDN** : [les bases du contrôle de version](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Version_control).
