// Tableaux et boucles : à vous, sur le modèle de exemple.js.
// Remplacez chaque ligne « À compléter » en suivant le README.
// Lancez les tests : node --test tableaux.test.js

// 1. Accumuler.
// totalVisits(visits) renvoie la somme des nombres du tableau.
// totalVisits([120, 80, 200]) renvoie 400.
export function totalVisits(visits) {
  // Avant la boucle : la variable qui accumule.
  let sum = 0;
  for (const visit of visits) {
    // À compléter : ajoutez visit à sum.
  }
  // Après la boucle : on renvoie la somme.
  return sum;
}

// 2. Accumuler en comptant.
// countBig(visits) renvoie combien de nombres du tableau dépassent 100.
// countBig([120, 80, 200]) renvoie 2.
export function countBig(visits) {
  // Avant la boucle : le compteur.
  let count = 0;
  for (const visit of visits) {
    // À compléter : si visit est plus grand que 100, ajoutez 1 à count.
  }
  // À compléter : renvoyez count (remplacez undefined).
  return undefined;
}

// 3. Construire un nouveau tableau.
// plusTen(visits) renvoie un NOUVEAU tableau : chaque nombre, plus 10.
// plusTen([120, 80, 200]) renvoie [130, 90, 210].
export function plusTen(visits) {
  // À compléter : avant la boucle, créez un tableau vide nommé result.
  // À compléter : la boucle for...of, avec result.push(…) à l'intérieur.
  // À compléter : renvoyez result (remplacez undefined).
  return undefined;
}
