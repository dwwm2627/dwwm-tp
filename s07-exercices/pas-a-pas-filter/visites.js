// Pas à pas : Les grands musées (mardi matin)
// Lancez ce fichier avec : node visites.js
// Données : data.gouv.fr, Licence Ouverte (ministère de la Culture)

// Visites de huit musées du Grand-Est en 2019
const visits = [3165, 29212, 51775, 3808, 1207, 59853, 165484, 179932];
// Affiche les données de départ
console.log(visits);

// ETAPE 1 : Garder les grands musees qui ont au moins 50 000 visites, on utilise filter
// Filter : garde les musees d'au moins 50 000 visites
const bigOnes = visits.filter((total) => total >= 50000);
// Afficher le nouveau tableau
console.log(bigOnes);

// ETAPE 2 : Compter et verifier l'original
// Length : combien de grands musees?
console.log(`Nous avons  : ${bigOnes.length} grands musees`);
// on affiche le tableau de depart
console.log(visits);

// ETAPE 3 : trouver le premier musee de plus de 100 000 visites
// find
const firstHuge = visits.find((total) => total > 100000);
// find renvoie UN element, pas un tableau
console.log(firstHuge);

// ETAPE 4 : Quand rien ne convient
// find et on cherche un musee qui a au minimum 1000000 de visites
const millionOrMore = visits.find((total) => total >= 1000000);
// Aucun elemet trouve : find renvoie undefined
console.log(millionOrMore);

// ETAPE 5 : vous gardez uniquement les petits musees, ceux de moins de 5000 visites
// filter
const smallOnes = visits.filter((min) => min < 5000);
console.log(smallOnes);