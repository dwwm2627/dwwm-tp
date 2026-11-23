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

// ETAPE 2 : CHANGER LE TEXTE CICBLE
// textContent : remplace le texte du titre
title.textContent = museum.name;
// meme chose pour le paragraphe de la ville
document.querySelector('#ville').textContent = museum.city

//ETAPE 3 : CREER UN ELEMENT
// createElement : cree un paragraphe, pas encore affiche
const note = document.createElement('p');
// son texte
note.textContent = "Un musée de France, en Bretagne";
// append : ajoute cet element a la fin de <main>
document.querySelector(`main`).append(note);

// ETAPE 4 : UNE LISTE A PARTIR D'UN TABLEAU
// la liste des domaines, vide pour l'instant
const list = document.querySelector('#domaines');
//for...of : une fois pour chaque domaine
for(const domain of museum.domains){
  // un nouvel <li> pour ce domaine
  const item = document.createElement('li');
  //son texte : le nom du domaine
  item.textContent = domain
  // append : l'ajoute a la fin de la liste
  list.append(item);
}