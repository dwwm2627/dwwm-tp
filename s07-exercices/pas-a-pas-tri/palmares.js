// Pas à pas : Le palmarès des musées (jeudi après-midi)
// Lancez ce fichier avec : node palmares.js
// Données : data.gouv.fr, Licence Ouverte (ministère de la Culture)

// Visites de six musées du Grand-Est en 2019
const visits = [3165, 29212, 51775, 3808, 1207, 179932];
// Affiche les données de départ
console.log(visits);

// ETAPE 1 : trier sans fonction de comparaison
// toSorted sans argument : trie comme des textes
const asText = visits.toSorted();
// Surprise : 179932 arrive juste apres 1207
console.log(asText);

// ETAPE 2 : Comparer des nombres
// on donne la fonction (a, b) => a -b
// Comparaison : a -b range du plus petit au plus grand
const ascending = visits.toSorted((a, b) => a -b);
// affiche les visites dans l'ordre croissant
console.log(ascending);

// ETAPE 3 : Le palmarès et l'original
// on va trier du plus grand au plus petit puis afficher visits
// b - a : du plsu grand au plus petit
const descending = visits.toSorted((a, b) => b - a);
// afficher le palmarès des visites
console.log(descending);
// toSorted n'a pas modifié le tableau recu
console.log(visits);