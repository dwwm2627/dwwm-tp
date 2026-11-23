// Tableaux et boucles : parcourir, accumuler, construire un nouveau tableau.
// Chaque fonction a sa consigne, un exemple d'appel et le résultat attendu.
// Lancez les tests : node --test tableaux.test.js

// 1. Parcourir et accumuler.
// total(prices) renvoie la somme des nombres du tableau.
// total([10, 25, 8]) renvoie 43 ; total([]) renvoie 0.
export function total(prices) {
  // À écrire.
  return undefined;
}

// 2. Accumuler avec une condition : le modulo.
// countEven(numbers) renvoie combien de nombres du tableau sont pairs.
// Un nombre n est pair quand le reste de sa division par 2 vaut 0 : n % 2 === 0.
// countEven([4, 7, 10, 3]) renvoie 2.
export function countEven(numbers) {
  // À écrire.
  return undefined;
}

// 3. Construire un nouveau tableau.
// doubles(numbers) renvoie un NOUVEAU tableau, avec chaque nombre multiplié par 2.
// Le tableau reçu ne doit pas changer.
// doubles([1, 5, 8]) renvoie [2, 10, 16].
export function doubles(numbers) {
  // À écrire.
  return undefined;
}

// 4. Construire avec une condition.
// multiplesOf(numbers, divisor) renvoie un NOUVEAU tableau : seulement les nombres
// que divisor divise (le reste de la division vaut 0).
// multiplesOf([3, 4, 9, 10], 3) renvoie [3, 9].
export function multiplesOf(numbers, divisor) {
  // À écrire.
  return undefined;
}

// 5. Une fonction qui en appelle une autre.
// average(prices) renvoie la moyenne des nombres : leur somme divisée par leur nombre.
// Appelez votre fonction total, ne réécrivez pas la boucle.
// Pour un tableau vide, la moyenne vaut 0 (on ne divise pas par 0).
// average([10, 20, 60]) renvoie 30 ; average([]) renvoie 0.
export function average(prices) {
  // À écrire.
  return undefined;
}
