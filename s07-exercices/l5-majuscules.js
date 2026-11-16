// Palier 2 — Première lettre en majuscule (lundi après-midi : callback et map)
// capitalizeAll(words) met la première lettre de chaque mot en majuscule :
//   capitalizeAll(['ada', 'linus']) → ['Ada', 'Linus']. Un mot vide reste vide.
// Étape documentation : dans MDN, page String, trouvez la méthode qui met un texte en majuscules.

export function capitalizeAll(words) {
  // TODO: replace the line below with your code.
  return words.map((word)=> {    //word.length === 0 ? '' :
    if (word.length === 0){
      return '';
    }
    return word[0].toUpperCase() + word.slice(1);
  });
}


