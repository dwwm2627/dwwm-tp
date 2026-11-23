# Terminal : se déplacer, créer et modifier des dossiers et des fichiers

**Durée** : 30 minutes.
**But** : créer des dossiers et des fichiers, les copier, les renommer
et les déplacer, uniquement au clavier, dans le terminal.

Deux parties. Dans la partie A, chaque commande est donnée.
Dans la partie B, vous refaites les mêmes gestes, sans les commandes.

**Le terminal** : celui de VS Code (Git Bash sous Windows).
Les lignes qui commencent par `#` expliquent la commande d'en dessous :
vous pouvez les taper aussi, le terminal les ignore
(sous macOS, tapez une fois `setopt interactivecomments` avant).
La fiche aide-mémoire Linux, sur le Drive de la formation,
rappelle toutes ces commandes.

## Préparer

1. Copiez ce dossier dans le dossier soutien de la semaine en cours,
   par exemple `~/dwwm/dwwm-tp/semaine-08/soutien/`
   (voir le `README.md` à la racine du dépôt). Dans les commandes
   ci-dessous, remplacez `08` par le numéro de la semaine en cours.
2. Allez dans la copie :

   ```bash
   # cd : se déplacer dans un dossier
   cd ~/dwwm/dwwm-tp/semaine-08/soutien/terminal-fichiers-1
   # pwd : afficher le dossier où l'on se trouve
   pwd
   ```

**Vous devez voir** : un chemin qui se termine par
`semaine-08/soutien/terminal-fichiers-1` (avec le numéro
de la semaine en cours).

Toutes les commandes qui suivent se lancent depuis ce dossier.
Si vous vous perdez, retapez la commande `cd` ci-dessus.

## Partie A : avec les commandes (15 min)

1. Créez deux dossiers, l'un dans l'autre :

   ```bash
   # mkdir -p : créer un dossier et ses dossiers parents
   mkdir -p atelier/notes atelier/images
   # ls : lister le contenu d'un dossier
   ls atelier
   ```

   **Vous devez voir** : `images` et `notes`.

2. Entrez dans `atelier/notes`, puis vérifiez où vous êtes :

   ```bash
   # entrer dans le dossier notes, rangé dans atelier
   cd atelier/notes
   # vérifier le dossier courant
   pwd
   ```

   **Vous devez voir** : un chemin qui se termine par `atelier/notes`.

3. Créez un fichier qui contient un mot, puis affichez-le :

   ```bash
   # echo … > : écrire un texte dans un fichier
   echo Bonjour > lundi.txt
   # cat : afficher le contenu d'un fichier
   cat lundi.txt
   ```

   **Vous devez voir** : `Bonjour`.

4. Copiez ce fichier, puis créez un fichier vide :

   ```bash
   # cp : copier un fichier sous un autre nom
   cp lundi.txt mardi.txt
   # touch : créer un fichier vide
   touch idees.txt
   ls
   ```

   **Vous devez voir** : `idees.txt  lundi.txt  mardi.txt`.

5. Renommez `idees.txt` en `projets.txt` :

   ```bash
   # mv : renommer (ou déplacer) un fichier
   mv idees.txt projets.txt
   ls
   ```

   **Vous devez voir** : `lundi.txt  mardi.txt  projets.txt`.

6. Remontez de deux dossiers, puis lancez les tests :

   ```bash
   # cd .. : remonter d'un dossier ; deux fois ici
   cd ../..
   pwd
   node --test terminal.test.js
   ```

   **Vous devez voir** : `pass 2`, `fail 2`.
   Les deux tests de la partie A sont au vert.

## Partie B : les mêmes gestes, sans les commandes (15 min)

Partez du dossier `terminal-fichiers-1` (vérifiez avec `pwd`).

1. Créez le dossier `boutique`, qui contient deux dossiers :
   `produits` et `clients`.
2. Entrez dans `boutique/produits`.
3. Créez le fichier `liste.txt`, qui contient le mot `chaise`.
   Affichez-le pour vérifier.
4. Copiez `liste.txt` sous le nom `sauvegarde.txt`.
5. Allez dans `boutique/clients` (indice : remontez d'abord d'un dossier).
6. Créez un fichier vide `accueil.txt`.
7. Déplacez `accueil.txt` dans le dossier `boutique`
   (indice : le dossier parent s'écrit `..`).
8. Revenez dans `terminal-fichiers-1`, puis lancez les tests.

**Réussi si** : `node --test terminal.test.js` affiche `pass 4`.

## Enregistrer et envoyer (2 min)

Depuis `~/dwwm/dwwm-tp` :

```bash
git status
git add semaine-08/soutien/terminal-fichiers-1
git commit -m "Ajoute l'exercice de terminal sur les fichiers"
git push
```

## Aides

1. **Le cours** : semaine 4, [mardi, le terminal](https://kevinbdx35.github.io/dwwm-2026-2027/semaines/s04-environnement/mardi.html) ;
   la fiche aide-mémoire Linux, sur le Drive de la formation.
2. **L'IA** : CS50.ai. Demandez ce que fait une commande
   ou ce que veut dire un message, pas la liste des commandes à taper.
3. **Documentation** : `man mkdir`, `man cp`, `man mv`
   (ou `mkdir --help` sous Git Bash) ;
   sur MDN, [Introduction à la ligne de commande](https://developer.mozilla.org/fr/docs/Learn_web_development/Getting_started/Environment_setup/Command_line).
