//Operateur ternaire
// condition ? valeurSiVrai : ValeurSiFaux
// c'est pour faire des conditions du type if sur une ligne

const age = 20;
//operateur ternaire
const result = age >= 18 ? 'Majeur' : "Mineur";
const result2 = age >= 18
    ? "Majeur"
    : "Mineur";
console.log(result); //Majeur
console.log(result2); //Majeur

if(age >= 18){
    console.log('Majeur');
}else{
    console.log('Mineur');
}


const note = 15;

const resultat = note >= 16
    ? "Très bien"
    : note >= 10
        ? "Admis"
        : "Refusé";
console.log(resultat);