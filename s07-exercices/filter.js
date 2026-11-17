// FILTER demo d'introduction
const prices = [10, 25, 8, 40];

console.log(prices.filter((price) => price < 20));
// FILTER renvoie tout ce qui sont vrai

// FIND demo d'introduction
console.log(prices.find((price) => price > 20));
// FIND s'arrete au premier qui repond vrai

// Exemple complementaire
console.log(prices.find((price) => price > 100));
// undefined qui est affiche, car aucun element du tableau ne convient

console.log(prices);
// comme pour map, le tableau initial ne change pas