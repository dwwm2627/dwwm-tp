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