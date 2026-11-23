// Trier sans modifier le tableau reçu : toSorted et sa fonction de comparaison.
// Faites d'abord le pas à pas « Le palmarès des musées » (voir le README).
// Lancez les tests après chaque fonction : node --test logic.test.js

// 1. cheapestFirst(prices) renvoie un NOUVEAU tableau : les prix, du plus petit au plus grand.
//    Le tableau reçu ne change pas.
//    Exemple : cheapestFirst([7, 4, 12]) renvoie [4, 7, 12].
export function cheapestFirst(prices) {
  // TODO: replace the line below with your code.
  return prices;
}

// 2. mostVisitedFirst(museums) renvoie un NOUVEAU tableau de musées, du plus visité au moins visité.
//    La fonction de comparaison reçoit deux musées, a et b : comparez leurs visites.
//    Exemple : le premier musée du résultat est le musée de Bretagne (179932 visites).
export function mostVisitedFirst(museums) {
  // TODO: replace the line below with your code.
  return museums;
}

// 3. podiumNames(museums) renvoie le NOM des trois musées les plus visités, du premier au troisième.
//    Servez-vous de mostVisitedFirst, puis de slice(0, 3) et de map.
//    Exemple : ['musée de Bretagne', 'musée des beaux-arts', 'musée de la pêche'].
export function podiumNames(museums) {
  // TODO: replace the line below with your code.
  return [];
}
