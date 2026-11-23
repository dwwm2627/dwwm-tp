// Tests for diagnostic.js — run them with: node --test diagnostic.test.js
// One test per notion: the name of a red test tells which notion to work on.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { rectangleArea, countMultiplesOf3, largest, capitalize, cartTotal } = await import(
  pathToFileURL(path.join(dir, 'diagnostic.js')).href
);

test('1. fonctions : rectangleArea(4, 3) renvoie 12', () => {
  assert.equal(rectangleArea(4, 3), 12);
  assert.equal(rectangleArea(5, 0), 0);
});

test('2. conditions et boucles : countMultiplesOf3 compte 3, 6 et 9 jusqu\'à 10', () => {
  assert.equal(countMultiplesOf3(10), 3);
  assert.equal(countMultiplesOf3(2), 0);
});

test('3. tableaux : largest renvoie le plus grand nombre, null pour un tableau vide', () => {
  assert.equal(largest([4, 11, 7]), 11);
  assert.equal(largest([-5, -2, -9]), -2);
  assert.equal(largest([]), null);
});

test('4. chaînes : capitalize met la première lettre en majuscule', () => {
  assert.equal(capitalize('lovelace'), 'Lovelace');
  assert.equal(capitalize(''), '');
});

test('5. lire une erreur : cartTotal([2, 3, 5]) renvoie 10', () => {
  assert.equal(cartTotal([2, 3, 5]), 10);
  assert.equal(cartTotal([]), 0);
});
