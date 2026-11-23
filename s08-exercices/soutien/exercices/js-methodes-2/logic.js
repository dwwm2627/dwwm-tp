// Combiner deux méthodes sur un tableau d'objets, sans jamais modifier le tableau reçu.
// Partie A : les étapes sont dans le README. Partie B : la même chose, avec moins d'aide.
// Lancez les tests après chaque fonction : node --test logic.test.js

// ---------- Partie A ----------

// A1. favoriteNames(museums, ids) renvoie le NOM de chaque musée favori, dans l'ordre de ids.
//     map sur ids ; pour chaque id, find dans museums.
//     Exemple : favoriteNames(MUSEUMS, ['M04', 'M01']) renvoie ['musée de la marine', 'musée de la pêche'].
export function favoriteNames(museums, ids) {
  // TODO: replace the line below with your code.
  return [];
}

// A2. namesInCity(museums, city) renvoie le nom des musées de la ville.
//     filter d'abord (les musées de la ville), puis map (leur nom).
//     Exemple : namesInCity(MUSEUMS, 'Brest') renvoie ['musée des beaux-arts', 'musée de la marine'].
export function namesInCity(museums, city) {
  // TODO: replace the line below with your code.
  return [];
}

// ---------- Partie B ----------

// B1. favoriteCities(museums, ids) renvoie la VILLE de chaque musée favori, dans l'ordre de ids.
//     Exemple : favoriteCities(MUSEUMS, ['M04', 'M01']) renvoie ['Brest', 'Concarneau'].
export function favoriteCities(museums, ids) {
  // TODO: replace the line below with your code.
  return [];
}

// B2. addVisits(museums, id, count) renvoie un NOUVEAU tableau : le musée id a count visites de plus,
//     les autres musées sont recopiés tels quels. Le tableau reçu et ses objets ne changent pas.
//     map sur museums ; pour le musée id, un nouvel objet avec le spread : { ...museum, visits: ... }.
//     Exemple : addVisits(MUSEUMS, 'M05', 10) : le musée de Dinan a 1217 visites dans le nouveau tableau.
export function addVisits(museums, id, count) {
  // TODO: replace the line below with your code.
  return museums;
}
