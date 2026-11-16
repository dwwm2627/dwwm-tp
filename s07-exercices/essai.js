// DECLARER UNE FONCTION, C'EST LUI DONNER UN :
// -UN NOM
// -DES PARAMETRES (LES VALEURS QU ELLE ATTEND)
// -UN CORPS (CE QUE FAIT LA FONCTION)
// A CE STADE LA FONCTION NE S'EXECUTE PAS
// POUR QUE LA FONCTION S'EXECUTE, IL FAUT L'APPELER
// POUR L'APPELER, IL FAUT ECRIRE SON NOM SUIVI DE PARENTHESES AVEC LES VALEURS A LUI DONNER (LES ARGUMENTS), ENSUITE LE CORPS S'EXECUTE
// RETURN TERMINE LA FONCTION ET DONNE SA VALEUR A L'ENDROIT DE L'APPEL. SANS RETURN LA FONCTION RENVOIE UNDEFINED

// Declarer la fonction : un nom, un parametre, un corps
function addTax(price){
    // return : renvoie le prix TTC
    return price * 1.2;
}

// Appeler la fonction: 10 est l'argument, price vaut 10
console.log(addTax(10));

// je cree un tableau de prix
const prices = [10, 25, 8];
// j'appelle ma fonction et l'argument est le premier element de mon tableau prices
console.log(addTax(prices[0]));

//Map permet de lancer ou d'appliquer la fonction addTax sur chacun des elements de prices
console.log(prices.map(addTax));
// le tableau original n est pas modifie, map envoie un copie
console.log(prices);

//Fonction flechee, je remplace la fonction addTax par une fonction flechee qui s appelle price
console.log(prices.map((toto)=>toto*2));
// une fonction flechee est une autre maniere d ecrire une fonction

//on cree un erreur
// console.log(prices.map(addTax()));

//A RETENIR
// -map() : une methode Javascript, execute le callback sur chaque element et retourne un nouveau tableau
// -callback : une fonction passee en argument

 
