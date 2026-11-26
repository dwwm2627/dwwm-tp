// Pas à pas du mardi après-midi : la décomposition.
// Lancez : node decomposer.js (depuis pas-a-pas-decomposition)
// Deux musées, avec les noms de champs du fichier Muséofile.
const museum = {
  Identifiant: 'M0199',
  Nom_officiel: 'musée de la pêche',
  Ville: 'Concarneau',
  Departement: 'Finistère',
};
const other = {
  Identifiant: 'M0206',
  Nom_officiel: 'musée bigouden',
  Ville: "Pont-l'Abbé",
  Departement: 'Finistère',
};
console.log(museum.Nom_officiel, '/', other.Nom_officiel);

// ETAPE 1 - DEUX VARIABLES EN UNE LIGNE
// DECOMPOSITION : DEUX VARIABLES EN UNE LIGNE
const {Ville, Departement} = museum;
// Ville et Departement existent maintenant
console.log(Ville, Departement);

// ETAPE 2 - RENOMMER
// RENOMNER : LA CLE Nom_officiel devient la variable name
const {Nom_officiel : name} = museum;
// name vaut "musée de la pêche"
console.log(name);

// ETAPE 3 - DANS LES PARANETRES
// Dans les parametres : la fonction recoit musee
function label({Nom_officiel:title, Ville:city}){
  // title et city viennet du musee recu
  return `${title} - ${city}`;
}
// Le meme appel qu'avant : on donne un musee en entier
console.log(label(other));