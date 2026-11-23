# Diagnostic JavaScript

**Durée** : 30 minutes.
**But** : trouver la notion sur laquelle vous devez travailler.
Cinq fonctions courtes, une par notion déjà vue en cours :
les fonctions, les conditions et les boucles, les tableaux,
les chaînes de caractères, la lecture d'un message d'erreur.

Ce n'est pas une évaluation : un test qui reste rouge est
une information utile, pas une faute.

## Préparer

1. Copiez ce dossier dans `~/dwwm/dwwm-tp/semaine-07/soutien/`
   (voir le `README.md` à la racine du dépôt).
2. Dans le terminal, allez dans la copie :
   `cd ~/dwwm/dwwm-tp/semaine-07/soutien/js-diagnostic-1`
3. Ouvrez la copie dans VS Code : `code .`
   (si la commande est inconnue : ouvrez VS Code,
   puis *Fichier* > *Ouvrir le dossier…*).
4. Lancez les tests : `node --test diagnostic.test.js`

**Vous devez voir** : 5 tests rouges (`fail 5`). C'est normal :
rien n'est encore écrit.

## Faire les cinq fonctions, dans l'ordre

1. Ouvrez `diagnostic.js`. Chaque fonction a sa consigne en commentaire,
   avec un exemple d'appel et le résultat attendu.
2. Écrivez la fonction 1, enregistrez, relancez les tests.
3. Cochez la case qui correspond dans `bilan.md`.
4. Passez à la fonction suivante.
   Après 8 minutes bloqué sur la même fonction : notez dans `bilan.md`
   où vous vous êtes arrêté, puis passez à la suivante.
5. La fonction 5 est déjà écrite, mais elle s'arrête sur une erreur.
   Lisez le message du test 5 en entier : il donne le nom de l'erreur
   et la ligne. Corrigez la ligne.

**Réussi si** : `bilan.md` est rempli pour les cinq fonctions.
Les tests au vert sont un plus, pas une condition.

## Enregistrer et envoyer (2 min)

Depuis `~/dwwm/dwwm-tp` :

```bash
git status
git add semaine-07/soutien/js-diagnostic-1
git commit -m "Ajoute le diagnostic JavaScript"
git push
```

## Aides

1. **Le cours** : semaine 2, [conditions et boucles](https://kevinbdx35.github.io/dwwm-2026-2027/semaines/s02-fondamentaux-js-1/vendredi.html) ;
   semaine 3, [fonctions](https://kevinbdx35.github.io/dwwm-2026-2027/semaines/s03-fondamentaux-js-2/lundi.html)
   et [tableaux et chaînes](https://kevinbdx35.github.io/dwwm-2026-2027/semaines/s03-fondamentaux-js-2/mardi.html) ;
   la [fiche « Lire un message d'erreur »](https://kevinbdx35.github.io/dwwm-2026-2027/ressources/fiche-erreurs.html#une-variable-qui-nexiste-pas-referenceerror), section Node.js.
2. **L'IA** : CS50.ai. Demandez une explication de la notion ou du
   message d'erreur, pas le code de la fonction.
3. **MDN** : [les fonctions](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Scripting/Functions),
   [boucles et itérations](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Scripting/Loops),
   [ReferenceError](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError).
