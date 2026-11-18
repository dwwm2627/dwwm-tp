// Palier 3 — filter à la main : myFilter (mardi matin)
// myFilter(array, callback) renvoie un nouveau tableau avec les éléments pour lesquels
// callback(element) renvoie true.
// N'utilisez PAS la méthode du même nom : une boucle for...of (semaine 3) suffit.

export function myFilter(array, callback) {
  const result = [];
  for(const element of array){
    if(callback(element)){
      result.push(element);
    }
  }
  return result;
}
