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
console.log(copy); // la copie de names c'est ['musée Unterlinden', "écomusée d'Alsace"]
// push ne touche que la copie, tu ajoutes le musée Arthur Rimbaud à la copie, ['musée Unterlinden', "écomusée d'Alsace"]
copy.push(`musée Arthur Rimbaud`);
// affiche l'original, puis la copie
console.log(`ETAPE 1 : original ${names} // copie ${copy}`);

// ETAPE 2 : ajouter à la fin
// Idem pour le resultat final que l'étape un, mais en une opération
// spread : un nouveau tableau, avec un nouveau nom de musée en plus à la fin
const withNew = [...names, `musée de l'Ardenne`];
// affiche l'original, puis la copie withNew
console.log(`ETAPE 2 : original ${names} // copie ${withNew}`); 

// ETAPE 3  : copier un objet, une propriété changée
// objet : un musée et sa ville
const museum = {name : `musée Unterlinden`, city: `COLMAR`};
//spread : un NOUVEL objet, avec une autre ville
const moved = {...museum, city:`METZ`};
// l'original n'a pas changé, il garde sa ville
console.log("ETAPE 3 : ORIGINAL", museum);
console.log("ETAPE 3 : COPIE", moved);