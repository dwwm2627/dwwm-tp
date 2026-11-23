// The display (already written): each section shows what your functions return.
import { MUSEUMS } from './musees.js';
import { countInCity } from './exemple.js';
import * as logic from './logic.js';

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

// A function that is not written yet is shown in red.
const call = (name, ...args) => (typeof logic[name] === 'function' ? logic[name](...args) : undefined);

show('#exemple', countInCity(MUSEUMS, 'Brest'));
show('#f1', call('countFree', MUSEUMS));
show('#f2', call('cityOf', MUSEUMS, 'musée de Dinan'));
show('#f3', call('cheapestPaying', MUSEUMS) || undefined);
