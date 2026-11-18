// Palier 3 — find à la main : myFind (mardi matin)
// myFind(array, callback) renvoie le PREMIER élément pour lequel callback renvoie true,
// ou undefined s'il n'y en a aucun.
// N'utilisez PAS la méthode du même nom : une boucle for...of (semaine 3) suffit.

export function myFind(array, callback) {
  for(const element of array){
    if(callback(element)){
      return element;
    }
  }
  return undefined;
}
