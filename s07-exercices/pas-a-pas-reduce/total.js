// Pas à pas : Le total des visites (jeudi matin)
// Lancez ce fichier avec : node total.js
// Données : data.gouv.fr, Licence Ouverte (ministère de la Culture)


// Visites de trois musées des Ardennes en 2019
const visits = [3808, 29212, 51775];
// Affiche les données de départ
console.log(visits);

//ETAPE 1 : Additionner
// reduce : additionner toutm en partant de 0
const total = visits.reduce((sum, n) => sum + n, 0);
//une seule valeur sort : le total
console.log(total);


//ETAPE 2 : voir chaque tour  
// Trace : affiche chaque tour de reduce
visits.reduce((sum, n) =>
{
    //sum : l'accumulateur, le résultat du tour d'avant
    console.log(sum, n);
    // avec des accolades, il faut return
    return sum + n;
}, 0);

// ETAPE 3 : reduce sur des objets
// creation d'un tableau d'objet : les mêmes musées, avec leur nom
const museums = [
    //Chaque élément : un objet {name, total}
    {name: 'musée du feutre', total: 3808},
    {name: 'musée Arthur Rimbaud', total: 29212},
    {name: `musée de l'Ardenne`, total: 51775},
];

// reduce, additionne le champ total de chaque objet
const all = museums.reduce((sum, item)=> sum + item.total, 0);
// le même total
console.log(all);

// ETAPE 4 : Le plus grand
// reduce : garde le plus grand total vu jusqu'ici
const best =museums.reduce(
    // max : l'accumulateur; item : le musée du tour
    (max, item) => Math.max(max, item.total),
    // valeur de départ de l'accumulateur
    0,
);
// le plus grand nombre de visites
console.log(`Le nombre de visites le plus important de tous les musées : ${best}`);

// ETAPE 5 : variante à faire seul
// Additionnez seulement les musées de plus de 10 000 visites : filter, puis reduce
// La console doit afficher le résultat 80987
const dixMille = museums.filter((item)=>item.total > 10000).reduce((sum, n) => sum + n.total, 0);
console.log(dixMille);