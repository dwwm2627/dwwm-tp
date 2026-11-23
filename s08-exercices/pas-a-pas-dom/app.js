// Pas à pas du lundi matin : la fiche d'un musée.
// The data of one museum (Muséofile, ministère de la Culture, Licence Ouverte 2.0).
const museum = {
  name: 'musée de la pêche',
  city: 'Concarneau',
  domains: ['Ethnologie', 'Histoire', 'Sciences de la nature'],
};
console.log(museum);

// ETAPE 1 : TROUVER UN ELEMENT
// querySelector :  trouve l'element d'id titre
const title = document.querySelector('#titre'); 
//  afficher l'element trouve dans la console
// ca se passe dans la console du navigateur web et plus dans le terminale comme avant avec node
console.log(title);