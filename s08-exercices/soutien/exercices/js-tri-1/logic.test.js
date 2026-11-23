// Tests for logic.js — run them with: node --test logic.test.js
// One test per function: the name of a red test tells which function to work on.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const logic = await import(pathToFileURL(path.join(dir, 'logic.js')).href);
import { MUSEUMS } from './musees.js';

test('1. cheapestFirst : du plus petit au plus grand, sans modifier le tableau reçu', () => {
  const prices = [7, 4, 12, 5, 9];
  const result = logic.cheapestFirst(prices);
  assert.deepEqual(result, [4, 5, 7, 9, 12]);
  assert.deepEqual(prices, [7, 4, 12, 5, 9], 'the array received has changed');
  assert.notEqual(result, prices, 'cheapestFirst must return a new array');
});

test('2. mostVisitedFirst : du plus visité au moins visité, sans modifier', () => {
  const museums = [...MUSEUMS];
  const result = logic.mostVisitedFirst(museums);
  assert.deepEqual(result.map((m) => m.visits), [179932, 51775, 29212, 3808, 1207]);
  assert.deepEqual(museums, MUSEUMS, 'the array received has changed');
});

test('3. podiumNames : les trois premiers', () => {
  assert.deepEqual(logic.podiumNames(MUSEUMS), ['musée de Bretagne', 'musée des beaux-arts', 'musée de la pêche']);
});
