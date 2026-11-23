// The display (already written): each section shows what your functions return.
import { MUSEUMS, FAVORITES } from './musees.js';
import { favoriteNames, namesInCity, favoriteCities, addVisits } from './logic.js';

// Writes a value in the element; an empty or missing value is shown in red.
function show(selector, value) {
  const element = document.querySelector(selector);
  const empty = value === undefined || value === null || (Array.isArray(value) && value.length === 0);
  element.classList.toggle('vide', empty);
  if (empty) {
    element.textContent = 'Rien pour le moment : la fonction est encore à écrire.';
  } else if (Array.isArray(value)) {
    element.textContent = value.join(', ');
  } else if (typeof value === 'object') {
    element.textContent = JSON.stringify(value);
  } else {
    element.textContent = String(value);
  }
}

show('#a1', favoriteNames(MUSEUMS, FAVORITES));
show('#a2', namesInCity(MUSEUMS, 'Brest'));
show('#b1', favoriteCities(MUSEUMS, FAVORITES));
const updated = addVisits(MUSEUMS, 'M05', 10);
show('#b2', updated === MUSEUMS ? undefined : updated.map((museum) => `${museum.name} : ${museum.visits}`));
