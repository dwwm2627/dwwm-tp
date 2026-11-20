// Pas à pas : Ajouter sans modifier (vendredi matin)
// Lancez ce fichier avec : node copies.js
// Données : data.gouv.fr, Licence Ouverte (ministère de la Culture)

// Deux noms de musées
const names = ['musée Unterlinden', "écomusée d'Alsace"];
// Affiche les données de départ
console.log(names);

// ETAPE 1 : copier un tableau
// spread : ... recopie les elements dans un NOUVEAU tableau
const copy = [...names];
// push ne touche que la copie
copy.push(`musée Arthur Rimbaud`);
// affiche l'original, puis la copie
console.log(names, copy);