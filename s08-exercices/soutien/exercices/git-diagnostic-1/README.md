# Diagnostic Git : enregistrer et envoyer

**Durée** : 30 minutes.
**But** : trouver l'étape de Git sur laquelle vous devez travailler.
Six étapes, dans votre dépôt `dwwm-tp` : regarder l'état, préparer,
enregistrer, relire l'historique, envoyer sur GitHub.

Chaque commande est donnée et expliquée. Après chaque étape,
comparez ce que vous voyez avec « Vous devez voir », puis notez-le
dans `bilan.md`. Ce n'est pas une évaluation : une étape qui ne
donne pas le résultat annoncé est une information utile, pas une faute.

## Avant de commencer : les trois zones de Git

Un fichier passe par trois endroits :

1. **Le dossier de travail** : vos fichiers, tels que vous les modifiez.
2. **La zone de préparation** : ce que vous avez choisi
   d'enregistrer, avec `git add`.
3. **Le dépôt** : les enregistrements (les commits), faits avec
   `git commit`.

`git push` envoie ensuite les commits du dépôt sur GitHub.

**Le terminal** : celui de VS Code (Git Bash sous Windows).
Les lignes qui commencent par `#` expliquent la commande d'en dessous :
vous pouvez les taper aussi, le terminal les ignore
(sous macOS, tapez une fois `setopt interactivecomments` avant).
Git peut répondre en français ou en anglais : les deux versions
sont données.

## Préparer

1. Copiez ce dossier dans `~/dwwm/dwwm-tp/semaine-07/soutien/`
   (voir le `README.md` à la racine du dépôt).
2. Allez à la racine de votre dépôt :

   ```bash
   # cd : aller à la racine du dépôt dwwm-tp
   cd ~/dwwm/dwwm-tp
   ```

## Étape 1 — Regarder l'état

```bash
# git status : ce qui a changé depuis le dernier commit
git status
```

**Vous devez voir** : le nom de la branche (`main`), puis le dossier
`semaine-07/soutien/` (ou `semaine-07/`) en rouge, sous « Fichiers non suivis »
(« Untracked files ») : Git le voit, mais ne le suit pas encore.

## Étape 2 — Créer un fichier

```bash
# echo … > : écrire une phrase dans un nouveau fichier
echo "Mon premier essai de soutien" > semaine-07/soutien/git-diagnostic-1/essai.txt
# vérifier l'état
git status
```

**Vous devez voir** : toujours le même dossier en rouge.
Le nouveau fichier est dans le dossier de travail seulement.

## Étape 3 — Préparer

```bash
# git add : placer le dossier dans la zone de préparation
git add semaine-07/soutien/git-diagnostic-1
# vérifier l'état
git status
```

**Vous devez voir** : les fichiers du dossier en vert, sous
« Modifications qui seront validées » (« Changes to be committed »),
dont `essai.txt`.

## Étape 4 — Enregistrer

```bash
# git commit -m : enregistrer la zone de préparation, avec un message
git commit -m "Ajoute le diagnostic Git"
# vérifier l'état
git status
```

**Vous devez voir** : après `git commit`, une ligne avec le message
et le nombre de fichiers ; après `git status`, « en avance de 1 commit »
(« ahead of 'origin/main' by 1 commit ») : le commit est dans votre
dépôt, pas encore sur GitHub.

## Étape 5 — Relire l'historique

```bash
# git log --oneline : un commit par ligne, le plus récent en haut
git log --oneline
```

**Vous devez voir** : en première ligne, un code de 7 caractères
suivi de « Ajoute le diagnostic Git ». Appuyez sur `q` si la liste
ne rend pas la main.

## Étape 6 — Envoyer sur GitHub

```bash
# git push : envoyer les commits sur GitHub
git push
# vérifier l'état
git status
```

**Vous devez voir** : « à jour avec 'origin/main' »
(« up to date with 'origin/main' »). Sur la page GitHub de votre
dépôt `dwwm-tp`, le dossier `semaine-07/soutien/git-diagnostic-1`
et le fichier `essai.txt`.

**Réussi si** : `bilan.md` est rempli pour les six étapes,
puis enregistré et envoyé (refaites les étapes 3, 4 et 6
avec le message « Complète le bilan du diagnostic Git »).

## Aides

1. **Le cours** : semaine 4, [versionner son travail avec Git](https://kevinbdx35.github.io/dwwm-2026-2027/semaines/s04-environnement/jeudi.html)
   et [GitHub](https://kevinbdx35.github.io/dwwm-2026-2027/semaines/s04-environnement/vendredi.html) ;
   la [fiche « Lire un message d'erreur », section Git](https://kevinbdx35.github.io/dwwm-2026-2027/ressources/fiche-erreurs.html#git-semaine-4) ;
   les fiches aide-mémoire Git et commit, sur le Drive de la formation.
2. **L'IA** : CS50.ai. Collez le message de Git et demandez
   ce qu'il veut dire, pas la commande à taper.
3. **MDN** : [les bases du contrôle de version](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Version_control).
