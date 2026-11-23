// The display (already written): the page uses your functions.
import { leftover, isEven, rowClass, clockHour } from './logic.js';

const MUSEUMS = ['musée de la pêche', 'musée des beaux-arts', 'musée de Bretagne', 'musée de la marine', 'musée de Dinan'];

// 1. Groups of visitors.
document.querySelector('#groupes').textContent = `14 visiteurs, des groupes de 4 : il en reste ${leftover(14, 4)}.`;

// 2. Even or odd.
document.querySelector('#pair').textContent = [7, 8, 13, 20].map((n) => `${n} : ${isEven(n) ? 'pair' : 'impair'}`).join(' ; ');

// 3. Striped list: each line gets the class returned by rowClass.
const list = document.querySelector('#liste');
MUSEUMS.forEach((name, index) => {
  const item = document.createElement('li');
  item.textContent = `${index} - ${name}`;
  const className = rowClass(index);
  if (className !== '') {
    item.classList.add(className);
  }
  list.append(item);
});

// 4. The clock: the hour typed in the field, on a 12-hour clock.
const field = document.querySelector('#heure');
const result = document.querySelector('#horloge');
function showClock() {
  result.textContent = `${field.value} h sur l'horloge : ${clockHour(Number(field.value))}`;
}
field.addEventListener('input', showClock);
showClock();
