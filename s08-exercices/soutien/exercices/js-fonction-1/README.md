# Du raisonnement au code : où placer chaque instruction

**Durée** : 30 minutes.
**But** : passer d'un raisonnement juste à une fonction qui marche,
en trois temps : le raisonnement, le squelette, puis le corps.

## L'idée

Le raisonnement est souvent juste ; c'est le passage au code qui bloque :
quoi écrire, et **où** l'écrire. Trois temps, toujours dans cet ordre :

1. **Le raisonnement**, en français, en commentaires, avant tout code.
   Une ligne par action : « je pars de… », « pour chaque… »,
   « si… », « à la fin, je donne… ».
2. **Le squelette** : `function nom(paramètres) { return ...; }`.
   Les paramètres sont ce que la fonction **reçoit** ; le `return` est
   ce qu'elle **donne**. Avec un `return` provisoire (`0`, `''`), les
   tests se lancent déjà, sans erreur de syntaxe.
3. **Le corps** : chaque ligne du raisonnement trouve sa place.

| Dans le raisonnement… | Dans le code, on l'écrit… |
|---|---|
| « je pars de… » (une seule fois) | **avant** la boucle |
| « pour chaque… » | la boucle elle-même |
| « si… » (pour chaque élément) | **dans** la boucle |
| « à la fin, je donne… » (une seule fois) | **après** la boucle |
| « je donne… » dès que je l'ai trouvé | **dans** le `if`, dans la boucle |

## Préparer

1. Copiez ce dossier dans `~/dwwm/dwwm-tp/semaine-08/soutien/`
   (voir le `README.md` à la racine du dépôt).
2. Dans le terminal, allez dans la copie :
   `cd ~/dwwm/dwwm-tp/semaine-08/soutien/js-fonction-1`
3. Ouvrez la copie dans VS Code : `code .`
   (si la commande est inconnue : ouvrez VS Code,
   puis *Fichier* > *Ouvrir le dossier…*).
4. Ouvrez `index.html` avec Live Preview, puis *Ouvrir dans le navigateur*.
5. Lancez les tests : `node --test logic.test.js`

**Vous devez voir** : 3 tests rouges (`fail 3`), et dans la page, un seul cadre rempli : celui de l'exemple. C'est normal : rien n'est encore écrit.

## Faire

1. Ouvrez `exemple.js` : la même méthode, sur une fonction déjà écrite.
   Pour chaque ligne du code, retrouvez la ligne du raisonnement qui
   l'a fait naître.
2. Ouvrez `logic.js`. **Fonction 1** : le raisonnement est écrit.
   Écrivez le squelette, lancez les tests (le test 1 est rouge, mais
   sans erreur de syntaxe), puis le corps, une ligne du raisonnement
   à la fois.
3. **Fonction 2** : complétez le raisonnement (les trois points), puis
   squelette, puis corps. Attention à la dernière ligne : où se place
   un `return` qui ne doit arriver qu'**après** avoir regardé tous
   les musées ?
4. **Fonction 3** : écrivez vous-même les trois temps.
5. Après chaque fonction : **Vous devez voir** son test au vert, et son
   cadre rempli dans la page. Cochez la case de `bilan.md`.

Après 8 minutes bloqué : notez dans `bilan.md` le temps où vous vous êtes
arrêté (raisonnement, squelette ou corps), puis passez à la suivante.

<details>
<summary>Indice — fonction 2, cityOf</summary>

Deux `return` : l'un **dans** le `if` (le musée est trouvé : on donne
sa ville tout de suite) ; l'autre **après** la boucle (on a tout
regardé sans le trouver). Si ce second `return` est dans la boucle,
la fonction s'arrête au premier musée.

</details>

<details>
<summary>Indice — fonction 3, cheapestPaying</summary>

Le raisonnement garde « le meilleur jusqu'ici » : une variable avant la
boucle (au départ, aucun musée : `null`) ; dans la boucle, on le remplace
quand le musée est payant **et** moins cher ; après la boucle, on donne
son nom, ou `''` s'il n'y en a pas.

</details>

**Réussi si** : `node --test logic.test.js` affiche `fail 0`, les trois
fonctions ont leur raisonnement en commentaires, et `bilan.md` est rempli.

## Enregistrer et envoyer (2 min)

Depuis `~/dwwm/dwwm-tp` :

```bash
git status
git add semaine-08/soutien/js-fonction-1
git commit -m "Ajoute l'exercice du raisonnement au code"
git push
```

## Aides

1. **Le cours** : semaine 3, [fonctions](https://kevinbdx35.github.io/dwwm-2026-2027/semaines/s03-fondamentaux-js-2/lundi.html) ;
   semaine 2, [conditions et boucles](https://kevinbdx35.github.io/dwwm-2026-2027/semaines/s02-fondamentaux-js-1/vendredi.html) ;
   semaine 7, [rappel sur les fonctions](https://kevinbdx35.github.io/dwwm-2026-2027/semaines/s07-js-avance/lundi-apres-midi.html#rappel-fonctions).
2. **L'IA** : CS50.ai. Montrez-lui votre raisonnement (temps 1) et
   demandez s'il est complet, pas le code de la fonction.
3. **MDN** : [function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/function),
   [return](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/return),
   [boucles et itérations](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Scripting/Loops).
