// OBJET : exemple minimal
// Declaration de l'objet museum
const museum = {
    name : 'musee Unterlinden',
    city : 'Colmar',
    total : 165484,
};

// Afficher le nom de l'objet
console.log(museum.name); // musee Unterlinden
museum.total = 170000; // assigne une nouvelle valeur a la cle total
console.log(museum.total); // nous avons bien la nouvelle valeur
museum.arme = 'epee'; // ajout d'une nouvelle paire clef valeur a l'objet museum
console.log(museum.arme); // nous avons bien ajoute une nouvelle clef valeur a l'objet
console.log(museum); // affiche toutes les proprietes de mon objet
console.log(museum.country); // undefined car la paire clef valeur  country n'existe pas dans l'objet

const perso = {
    name : 'Link',
    arme : null
};
console.log(perso.vie ?? 3); // pour donner une valeur de secours, utilisez ??, toto ?? tata, ca veut dire que toto vaut tata sauf si toto vaut null ou undefined
console.log(perso)
console.log(perso.arme ?? 'epee');