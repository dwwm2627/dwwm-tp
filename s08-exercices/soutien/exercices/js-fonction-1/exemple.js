// L'exemple, en trois temps (déjà écrit) : lisez-le avant d'écrire vos fonctions.
// La question : combien de musées de la liste sont à Brest ?

// Temps 1 : le raisonnement, en français, en commentaires, AVANT tout code.
//   je pars de 0
//   pour chaque musée de la liste :
//     si sa ville est la ville cherchée : j'ajoute 1
//   à la fin, je donne le nombre

// Temps 2 : le squelette. Le nom, les paramètres (ce que la fonction reçoit),
// et un return (ce qu'elle donne). Les tests se lancent déjà, sans erreur de syntaxe.
//   function countInCity(museums, city) {
//     return 0;
//   }

// Temps 3 : le corps. Chaque ligne du raisonnement trouve sa place :
//   « je pars de 0 »           -> AVANT la boucle (une seule fois)
//   « pour chaque musée »       -> la boucle
//   « si ... : j'ajoute 1 »     -> DANS la boucle (pour chaque musée)
//   « à la fin, je donne »      -> APRÈS la boucle (une seule fois)
export function countInCity(museums, city) {
  // je pars de 0
  let count = 0;
  // pour chaque musée de la liste
  for (const museum of museums) {
    // si sa ville est la ville cherchée : j'ajoute 1
    if (museum.city === city) {
      count = count + 1;
    }
  }
  // à la fin, je donne le nombre
  return count;
}
