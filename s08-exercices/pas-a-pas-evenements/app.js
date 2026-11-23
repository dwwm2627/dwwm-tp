// Pas à pas du lundi après-midi : les événements.
// Déjà écrit (le DOM de lundi) : la liste des noms, et une fonction qui l'affiche.
const names = [
  'musée de la pêche',
  'musée bigouden',
  'écomusée de la Bintinais',
  'musée des phares et balises',
  'musée de Bretagne',
  'écomusée de Saint-Degan',
];
const list = document.querySelector('#liste');

function showList(items) {
  list.textContent = '';
  for (const name of items) {
    const item = document.createElement('li');
    item.textContent = name;
    list.append(item);
  }
}

showList(names);

// ETAPE 1 : UN ECOUTEUR DE BOUTON
// Le bouton de la page
const button = document.querySelector('#bouton');
// addEventListerner : quand on clique, la fonction s'execute
button.addEventListener('click', ()=>{
  // visible dqns le consolem a chaque clic
  console.log('clic !');
})

// ETAPE 2 : COMPTER LES CLICS
//le paragraphe du compteur
const counter = document.querySelector(`#compteur`);
//le nombre de clics, qui va changer : let
let clicks = 0;
// un deuxieme ecouteur sur le meme bouton
button.addEventListener('click', ()=>{
  // un click de plus
  clicks = clicks + 1;
  // le nouvea nombre, ecrit dans la page
  counter.textContent = `${clicks} clics`
})

// ETAPE 3 : LIRE UN CHAMP
// Le champ de saisie :
const field = document.querySelector('#filtre');
//le paragraphe qui recopie la saisie
const typed = document.querySelector('#saisie');
// input : a chaque caractere taoer ou efface
field.addEventListener('input', ()=>{
  // field.value : le texte tape dans le champ
  typed.textContent = `Vous avez tape : ${field.value}`;
});