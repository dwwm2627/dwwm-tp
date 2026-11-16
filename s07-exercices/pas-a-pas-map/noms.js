// Pas à pas : Les noms des musées (lundi après-midi)
// Lancez ce fichier avec : node noms.js
// Données : data.gouv.fr, Licence Ouverte (ministère de la Culture)

// Six noms de musées du Grand-Est (fréquentation 2019)
const names = [
  'musée Unterlinden',
  "écomusée d'Alsace",
  'musée Arthur Rimbaud',
  "musée de l'Ardenne",
  'musée du château-fort',
  'musée de la Renaissance en Champagne ',
];
// Affiche les données de départ
console.log(names);

//ETAPE 1 : fonction qui met un nom en majuscules
function shout(name){
  //return : renvoie le nom en majuscule
  return name.toUpperCase();
} 

//Appel de la fonction pour la tester : on donne le premier nom, on lit le resultat
console.log(shout(names[0]));

//ETAPE 2 : map : appelle shout sur chaque nom (callback)
const shouted = names.map(shout);

//Affiche le noveau tableau avec tous les noms en majuscules
console.log(shouted);

//ETAPE 3 : Fonction flechee : retier les espaces autour du nom
const trimmed = names.map((name)=> name.trim());
//affiche les noms sans espace en trop
console.log(trimmed);

// ETAPE 4 : Calculer la longueur de chaque nom nettoye
//map :la longueur de chaque nom
const lengths = trimmed.map((name)=>name.length);
// affiche les six longeurs
console.log(lengths);
//le tableau de depart n'a pas change
console.log(names);