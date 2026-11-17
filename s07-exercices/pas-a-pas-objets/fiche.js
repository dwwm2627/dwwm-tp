// Pas à pas : La fiche d'un musée (mardi après-midi)
// Lancez ce fichier avec : node fiche.js
// Données : data.gouv.fr, Licence Ouverte (ministère de la Culture)

// ETAPE 1 : creation de l'objet museum
// Objet : les informations d'un meme musee
const museum = {
    // Propriete : la cle name, puis sa valeur
    name: 'musee Unterlinden',
    // Propriete : la ville
    city: 'COLMAR',
    // Propriete : les visites de 2019
    total : 165484,
};

//Afficher tout l'objet
console.log(museum);

// ETAPE 2 : lire des proprietes
// le point lit une proprietes : objet.cle
console.log(museum.name); // affiche le nom
console.log(museum.city); // affiche la ville
console.log(museum.country); //affiche undefined car la clef country n'existe pas

// ETAPE 3 : modifier, ajouter
// affectation : change la valeur d'une propriete
museum.total = 170000;
// nouvelle cle : la propriete est ajoutee
museum.department = 'Haut-Rhin';
// affiche tout l'objet
console.log(museum);

// ETAPE 4 : tableau d'objets
// creer un tableau de 3 musees et on va recuperer leurs noms avec map
// tableau d'objets : 3 musees
const museums = [
    //chaque element du tableau est un objet
    {name : 'musee Arthur Rimbaud', total: 29212},
    {name : `musee de l'Ardenne`, total: 51775},
    {name : `musee du Chateu-fort`, total: 59853},
];
// map : le nom de chaque musee
console.log(museums.map((item)=>item.name));

// ETAPE 5 : exercice 
// en utilisant find, chercher dans museums, le premier musee de plus de 50000 visites
console.log(museums.find((item)=>item.total > 50000));