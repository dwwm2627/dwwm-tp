# Learn Git Branching : branches et dépôts distants

**Durée** : 45 à 60 minutes.
**But** : voir ce que font les commandes Git sur l'arbre des commits,
d'abord sur votre ordinateur, puis avec un dépôt distant
(`clone`, `fetch`, `pull`, `push`).

Learn Git Branching est un jeu : vous tapez de vraies commandes Git
et il dessine le résultat. Utilisez la **version du cours** :
elle est hébergée avec le cours, sans mesure d'audience ni publicité,
et votre progression reste dans votre navigateur.

## Préparer

1. Copiez ce dossier dans `~/dwwm/dwwm-tp/semaine-07/soutien/`
   (voir le `README.md` à la racine du dépôt) : vos captures iront dedans.
2. Ouvrez [Learn Git Branching, version du cours](https://kevinbdx35.github.io/dwwm-2026-2027/semaines/s04-environnement/heberge/learn-git-branching/index.html?locale=fr_FR).
3. Pour choisir une leçon, tapez `levels` dans le terminal du jeu,
   puis Entrée. Si une leçon vous bloque, tapez `reset` pour la recommencer.

**Vous devez voir** : une fenêtre avec deux onglets en haut,
« Principal » et « Remote ».

## Parcours 1 : l'introduction, sans le rebase (15 min)

1. Onglet « Principal », rubrique « Séquence d'introduction ».
2. Faites les carrés **1** à **3** : les commits, les branches,
   la fusion (`merge`). Si vous les avez déjà faits en semaine 4,
   refaites le carré 3 seulement.
3. Ne faites pas le carré 4 (« Introduction à rebase »).

## Parcours 2 : les dépôts distants (30 à 45 min)

1. Onglet « Remote », rubrique « Push & Pull -- Dépôts Git distants ! ».
2. Faites les carrés **1** à **6**, dans l'ordre : `clone`,
   les branches distantes, `fetch`, `pull`, le travail d'équipe simulé,
   `push`.
3. Arrêtez-vous après le carré 6 (« Git push ») :
   les suivants utilisent le rebase.

## Mission

À la fin du carré 3 du parcours 1, puis à la fin du carré 6
du parcours 2, juste avant de cliquer sur « Confirmer » :

1. Faites une capture de l'arbre dessiné à l'écran.
2. Enregistrez-la dans votre copie de ce dossier, sous les noms
   `arbre-fusion.png` et `arbre-push.png`.
3. Dans un fichier `explication.md`, à côté, écrivez pour chaque
   capture deux phrases avec vos mots : ce que montre l'arbre,
   et la commande qui l'a produit.

**Réussi si** : les deux captures et `explication.md` sont dans
`semaine-07/soutien/git-arbre-1/` de votre dépôt `dwwm-tp`,
sur GitHub, et vous savez expliquer à l'oral la différence
entre `git fetch` et `git pull`.

## Enregistrer et envoyer (2 min)

Depuis `~/dwwm/dwwm-tp` :

```bash
git status
git add semaine-07/soutien/git-arbre-1
git commit -m "Ajoute les captures de Learn Git Branching"
git push
```

## Aides

1. **Le cours** : semaine 4, [jeudi, Learn Git Branching pas à pas](https://kevinbdx35.github.io/dwwm-2026-2027/semaines/s04-environnement/jeudi.html)
   et [vendredi, branches et GitHub](https://kevinbdx35.github.io/dwwm-2026-2027/semaines/s04-environnement/vendredi.html) ;
   la fiche aide-mémoire Git, sur le Drive de la formation.
2. **L'IA** : CS50.ai. Demandez ce que fait une commande sur l'arbre,
   pas la suite de commandes d'une leçon.
3. **Documentation** : [Pro Git, travailler avec des dépôts distants](https://git-scm.com/book/fr/v2/Les-bases-de-Git-Travailler-avec-des-d%C3%A9p%C3%B4ts-distants) ;
   sur MDN, [les bases du contrôle de version](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Version_control).
