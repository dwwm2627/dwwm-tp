// DEMO de tosorted
const prices =[25, 8, 100, 10];
// sans fonction de comparaison, les nombres sont triés comme des textes
console.log(prices.toSorted());
// La fonction flêchée compare deux éléments : negatif, a passe devant
console.log(prices.toSorted((a, b) => a - b));
// le tableau d'origine n'est pas modifié, tosorted() renvoie une copie triée du tableau
console.log(prices);

// Erreur courante, on utilise la mauvaise méthode, exemple sort()
const sorted = prices.sort((a, b)=> a-b );
console.log(sorted);
// la methode sort() ne crée pas de copie elle trie le tableau original
console.log(prices);
