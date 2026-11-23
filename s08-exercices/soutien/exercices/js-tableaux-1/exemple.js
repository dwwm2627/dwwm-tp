// Un exemple expliqué ligne par ligne : parcourir un tableau, accumuler, construire.
// Lancez-le : node exemple.js

// Un tableau : plusieurs valeurs, rangées dans l'ordre, entre crochets.
const prices = [10, 25, 8];

// --- Parcourir : passer sur chaque valeur, l'une après l'autre.
// for...of : à chaque tour, price désigne la valeur suivante du tableau.
for (const price of prices) {
  // Ce bloc s'exécute 3 fois : price vaut 10, puis 25, puis 8.
  console.log('un prix :', price);
}

// --- Accumuler : calculer UNE valeur à partir de tout le tableau.
// Avant la boucle : la variable qui accumule. let, car elle va changer.
let sum = 0;
for (const price of prices) {
  // Dans la boucle : on ajoute le prix du tour à la somme.
  // Tour 1 : 0 + 10 = 10. Tour 2 : 10 + 25 = 35. Tour 3 : 35 + 8 = 43.
  sum = sum + price;
}
// Après la boucle : la somme est complète.
console.log('la somme :', sum);

// --- Construire : fabriquer un NOUVEAU tableau à partir du premier.
// Avant la boucle : un tableau vide.
const withTax = [];
for (const price of prices) {
  // Dans la boucle : push ajoute une valeur à la fin du nouveau tableau.
  // Tour 1 : [12]. Tour 2 : [12, 30]. Tour 3 : [12, 30, 9.6].
  withTax.push(price * 1.2);
}
// Après la boucle : le nouveau tableau est complet ; prices n'a pas changé.
console.log('les prix TTC :', withTax);
console.log('les prix de départ :', prices);
