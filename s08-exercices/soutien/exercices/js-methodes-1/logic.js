// Une méthode à la fois : chaque fonction existe deux fois.
// La version « boucle » est déjà écrite et marche : lisez-la d'abord.
// Vous écrivez la version « méthode », juste en dessous, qui fait exactement la même chose.
// Lancez les tests après chaque fonction : node --test logic.test.js

// ---------- 1. map : un nouveau tableau, un élément pour chaque élément ----------

// La boucle (déjà écrite) : un tableau vide, un push par musée, le tableau à la fin.
export function namesWithLoop(museums) {
  const names = [];
  for (const museum of museums) {
    names.push(museum.name);
  }
  return names;
}

// À vous : la même chose avec map.
// Le callback reçoit UN musée et renvoie ce que l'on range dans le nouveau tableau.
// Exemple : names(MUSEUMS) renvoie ['musée de la pêche', 'musée des beaux-arts', ...].
export function names(museums) {
  // TODO: replace the line below with your code.
  return [];
}

// ---------- 2. filter : garder certains éléments ----------

// La boucle (déjà écrite) : un push seulement SI la condition est vraie.
export function inCityWithLoop(museums, city) {
  const kept = [];
  for (const museum of museums) {
    if (museum.city === city) {
      kept.push(museum);
    }
  }
  return kept;
}

// À vous : la même chose avec filter.
// Le callback reçoit UN musée et renvoie true (on le garde) ou false (on le laisse).
// Exemple : inCity(MUSEUMS, 'Brest') renvoie les deux musées de Brest.
export function inCity(museums, city) {
  // TODO: replace the line below with your code.
  return [];
}

// ---------- 3. find : le premier élément qui convient ----------

// La boucle (déjà écrite) : on renvoie le premier musée qui convient ; aucun : undefined.
export function findByNameWithLoop(museums, name) {
  for (const museum of museums) {
    if (museum.name === name) {
      return museum;
    }
  }
  return undefined;
}

// À vous : la même chose avec find.
// Le callback reçoit UN musée et renvoie true pour celui que l'on cherche.
// Exemple : findByName(MUSEUMS, 'musée de Dinan') renvoie l'objet du musée de Dinan.
export function findByName(museums, name) {
  // TODO: replace the line below with your code.
  return null;
}

// ---------- 4. reduce : une seule valeur à partir de tout le tableau ----------

// La boucle (déjà écrite) : l'accumulateur.
//   AVANT la boucle : sa valeur de départ (0) ;
//   DANS la boucle : sa nouvelle valeur (l'ancienne + les visites du musée) ;
//   APRÈS la boucle : on le renvoie.
export function totalVisitsWithLoop(museums) {
  let total = 0;
  for (const museum of museums) {
    total = total + museum.visits;
  }
  return total;
}

// À vous : la même chose avec reduce.
//   la valeur de départ (0) devient le DEUXIÈME argument de reduce ;
//   la ligne DANS la boucle devient le callback : il reçoit (total, museum)
//   et renvoie la nouvelle valeur de total ;
//   le return d'après la boucle devient : return museums.reduce(...).
// Exemple : totalVisits(MUSEUMS) renvoie 265934.
export function totalVisits(museums) {
  // TODO: replace the line below with your code.
  return -1;
}
