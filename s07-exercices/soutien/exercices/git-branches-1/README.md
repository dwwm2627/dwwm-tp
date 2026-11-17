# Git : brancher, envoyer, fusionner, cloner, mettre à jour

**Durée** : 30 minutes.
**But** : refaire seul les gestes de Git autour d'une branche,
puis récupérer et mettre à jour le dépôt de quelqu'un d'autre.
Tout a été vu en cours, en semaines 4, 5 et 6.

Trois parties. Les parties A et B se font seul.
La partie C se fait à deux ; si vous êtes seul, sa variante est
à la fin de la partie.

Chaque tâche donne le résultat à obtenir. Essayez d'abord seul ;
ouvrez l'indice (cliquez sur « Indice ») seulement après 3 minutes.
Après chaque partie, remplissez `bilan.md`.

## Préparer

1. Copiez ce dossier dans `~/dwwm/dwwm-tp/semaine-07/soutien/`
   (voir le `README.md` à la racine du dépôt).
2. Vérifiez que vos deux dépôts sont propres : dans `~/dwwm/dwwm-tp`,
   puis dans `~/dwwm/page-perso`, `git status` doit afficher
   « rien à valider » (« nothing to commit »).
   Sinon, enregistrez d'abord votre travail en cours.

## Partie A — Une branche, envoyée sur GitHub (dépôt dwwm-tp)

Depuis `~/dwwm/dwwm-tp` :

1. Créez une branche `soutien-branches` et placez-vous dessus.
2. Dans `semaine-07/soutien/git-branches-1/`, créez un fichier
   `notes.md` qui contient une phrase.
3. Enregistrez ce fichier en un commit, sur la branche.
4. Envoyez la branche sur GitHub.

**Réussi si** : sur GitHub, dans votre dépôt `dwwm-tp`, le menu des
branches propose `soutien-branches`, et `notes.md` s'y trouve ;
sur la branche `main`, il n'y est pas.

<details>
<summary>Indice — créer la branche</summary>

Une seule commande crée la branche et s'y place :
`git switch -c nom-de-la-branche`.
`git status` affiche ensuite le nom de la branche en première ligne.

</details>

<details>
<summary>Indice — envoyer la branche</summary>

La première fois, GitHub ne connaît pas la branche. Lancez `git push` :
Git refuse et affiche la commande complète à taper,
avec `--set-upstream origin` et le nom de la branche
(`-u` en est l'abréviation).

</details>

## Partie B — Fusionner une branche (dépôt page-perso)

Votre page personnelle est en ligne : `main` doit toujours marcher.
Vous préparez donc le changement sur une branche, puis vous le fusionnez.

Depuis `~/dwwm/page-perso` :

1. Créez une branche `ajout-pied` et placez-vous dessus.
2. Dans `index.html`, ajoutez dans le pied de page (`footer`)
   un paragraphe : `<p>Page réalisée pendant la formation.</p>`
3. Regardez la page avec Live Preview, puis enregistrez
   le changement en un commit.
4. Revenez sur `main`. Regardez `index.html` : le paragraphe n'y est pas.
5. Fusionnez `ajout-pied` dans `main`.
6. Envoyez `main` sur GitHub.

**Réussi si** : `git log --oneline` montre votre commit sur `main` ;
après une à deux minutes, le paragraphe est visible en ligne,
à l'adresse de votre page.

Rappel : ce dépôt est public. Ce qui est public est visible par tous :
aucune donnée personnelle dedans.

<details>
<summary>Indice — revenir sur main</summary>

`git switch main` (sans `-c` : la branche existe déjà).

</details>

<details>
<summary>Indice — fusionner</summary>

On se place sur la branche qui **reçoit** (`main`), puis on nomme
la branche à faire entrer : `git merge ajout-pied`.

</details>

## Partie C — Cloner le dépôt d'un autre, puis le mettre à jour (à deux)

Les rôles : l'un est **propriétaire** (c'est son dépôt `page-perso`),
l'autre est **visiteur**. Le propriétaire dicte l'adresse et fait le
changement de l'étape 3 ; le visiteur tape les commandes des étapes
1, 2 et 4 ; chacun note le résultat dans son `bilan.md`.
Puis vous échangez les rôles.

1. Le visiteur crée un dossier d'essai, en dehors de ses dépôts :
   `mkdir -p ~/dwwm/essai-clone`, puis `cd ~/dwwm/essai-clone`.
2. Le visiteur clone le dépôt `page-perso` du propriétaire, par son
   adresse HTTPS (bouton vert *Code* sur GitHub), dans un dossier
   nommé `page-voisin` :
   `git clone adresse-https page-voisin`
3. Le propriétaire fait un petit changement dans **son** dépôt
   (par exemple la partie B, ou une phrase modifiée), l'enregistre
   et l'envoie sur GitHub.
4. Le visiteur met sa copie à jour : dans `page-voisin`, une seule
   commande récupère le nouveau commit.

**Réussi si** : chez le visiteur, `git log --oneline` montre le
nouveau commit du propriétaire, et `index.html` contient son changement.

Le visiteur ne modifie rien dans `page-voisin` : c'est une copie
pour lire. À la fin, il peut supprimer le dossier `~/dwwm/essai-clone`.

<details>
<summary>Indice — mettre à jour</summary>

`git pull` : il récupère les commits du dépôt distant et les ajoute
à la branche locale. C'est la commande que vous lancez chaque
mercredi dans `dwwm-soutien`.

</details>

**Variante seul** : faites les étapes 1, 2 et 4 avec votre propre
`page-perso` comme dépôt à cloner ; pour l'étape 3, faites le
changement dans `~/dwwm/page-perso`, pas dans la copie.

## Enregistrer et envoyer (2 min)

Depuis `~/dwwm/dwwm-tp`, sur la branche `soutien-branches` :

```bash
git status
git add semaine-07/soutien/git-branches-1
git commit -m "Ajoute le bilan de l'exercice sur les branches"
git push
```

Puis ramenez ce travail sur `main`, pour ne pas rester sur la branche
de l'exercice :

```bash
git switch main
git merge soutien-branches
git push
```

**Vous devez voir** : `git status` affiche « Sur la branche main »,
et le dossier `git-branches-1` est sur GitHub, dans `main`.

## Aides

1. **Le cours** : semaine 4, [branches, Pull Requests et conflits](https://kevinbdx35.github.io/dwwm-2026-2027/semaines/s04-environnement/vendredi.html) ;
   la [fiche de révision de la semaine 4](https://kevinbdx35.github.io/dwwm-2026-2027/semaines/s04-environnement/revision.html) ;
   la fiche aide-mémoire Git du Drive partagé de la formation.
2. **L'IA** : CS50.ai. Demandez ce que fait une commande, ou ce que
   veut dire un message de Git, pas la suite de commandes à taper.
3. **MDN** : MDN ne documente pas Git ; la documentation de GitHub,
   en français : [À propos des branches](https://docs.github.com/fr/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches).
