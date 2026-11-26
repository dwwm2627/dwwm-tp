// Palier 1 — Le champ obligatoire : la logique (jeudi matin)
// checkQuery(text) renvoie le message d'erreur à afficher, ou '' si la recherche est valide :
// - texte vide, ou seulement des espaces : 'Veuillez écrire un nom ou une ville.' ;
// - un seul caractère (espaces autour retirés) : 'Veuillez écrire au moins 2 caractères.' ;
// - sinon : ''.
// Lancez les tests : node --test v1-champ-obligatoire.test.js

export function checkQuery(text) {
  // TODO: replace the line below with your code.
  const query = text.trim();
  if(query === ""){
    return "Veuillez écrire un nom ou une ville."
  }
  if(query.length === 1){
    return `Veuillez écrire au moins 2 caractères.`
  }
  return ``;
}

// '' ou "" ou `` si tu as que du texte c'est pareil
// `` obligatoire pour utiliser ${} dans ton texte 
