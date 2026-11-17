// Five short functions, one per notion: do them in order.
// Run the tests after each one: node --test diagnostic.test.js
// Write in bilan.md where you stopped and what you tried.

// 1. Functions
// rectangleArea(width, height) returns the area: width multiplied by height.
// rectangleArea(4, 3) → 12
export function rectangleArea(width, height) {
  // TODO: replace the line below with your code.
  return `À faire (${width}, ${height})`;
}

// 2. Conditions and loops
// countMultiplesOf3(max) counts the numbers from 1 to max that are multiples of 3.
// countMultiplesOf3(10) → 3 (3, 6 and 9)
// Hint: a number n is a multiple of 3 when n % 3 === 0.
export function countMultiplesOf3(max) {
  // TODO: replace the line below with your code.
  return `À faire (${max})`;
}

// 3. Arrays
// largest(numbers) returns the largest number of the array, or null if the array is empty.
// largest([4, 11, 7]) → 11 ; largest([]) → null
// Do not use Math.max: go through the array with a loop.
export function largest(numbers) {
  // TODO: replace the line below with your code.
  return `À faire (${numbers})`;
}

// 4. Strings
// capitalize(word) returns the word with its first letter in upper case.
// capitalize('lovelace') → 'Lovelace' ; capitalize('') → ''
export function capitalize(word) {
  // TODO: replace the line below with your code.
  return `À faire (${word})`;
}

// 5. Reading an error
// cartTotal(prices) returns the sum of the prices. This function is already written,
// but it stops with an error. Run the tests, read the message of test 5 in full,
// find the line it names, and correct it.
// cartTotal([2, 3, 5]) → 10
export function cartTotal(prices) {
  let total = 0;
  for (const price of prices) {
    total = totl + price;
  }
  return total;
}
