// Palier 3 — map à la main : myMap (lundi après-midi)
// myMap(array, callback) fait comme array.map(callback) : elle renvoie un nouveau tableau
// qui contient callback(element) pour chaque élément.
// N'utilisez PAS la méthode du même nom : une boucle for...of (semaine 3) suffit.

export function myMap(array, callback) {
  const result=[];
  for(const element of array){
    result.push(callback(element));
  }
  return result;
}
