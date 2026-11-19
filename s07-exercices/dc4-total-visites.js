// Palier 2 — Le total des visites (jeudi matin : reduce et l'accumulateur)
// totalVisits(museums) renvoie la somme des entrées totales (champ total) des musées propres, avec reduce.
// Un total null ou absent compte pour 0 : museum.total ?? 0 (encadré « Attention » du mardi après-midi).

export function totalVisits(museums) {
  // TODO: replace the line below with your code.
  return museums.reduce((sum, museum) => sum + (museum.total ?? 0), 0);
}

// quand on utilise dans l exemple museum.total ?? 0
// ca veut dire que si total vaut null ou undefined alors c'est par 0, ca evite la casse dans notre addition ici
// par contre si total vaut une valeur comme 0 ou un nombre, alors on prendre cette valeur
