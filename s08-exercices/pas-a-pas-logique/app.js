// L'affichage : il lit et écrit dans la page. Il se vérifie dans le navigateur.
// Les deux lignes import sont déjà écrites : elles apportent les données et les fonctions
// de logic.js (les modules sont expliqués en semaine 10). Ouvrez la page avec Live Preview.
import { MUSEUMS } from '../data/musees-bretagne.js';
import { museumLabel, inDepartment } from './logic.js';

console.log('Données chargées :', MUSEUMS.length, 'musées', museumLabel, inDepartment);

// La liste de la page, vide pour l'instant
const list= document.querySelector(`#liste`);
// for...of : un <li> par musee du fichier
for(const museum of MUSEUMS){
    // un nouveau <li>
    const item = document.createElement(`li`);
    // son texte vient de la logique : museumLabel
    item.textContent = museumLabel(museum);
    //ajoute a la fin de la liste
    list.append(item);
}

// la logique calcule : les musees du Morbihan
const morbihan = inDepartment(MUSEUMS, 'Morbihan');
// le resume de la page
const summary = document.querySelector(`#resume`);
// l'affichage ecrit le resultat dans le resume
summary.textContent = `${morbihan.length} musees dans le Morbihan`;






