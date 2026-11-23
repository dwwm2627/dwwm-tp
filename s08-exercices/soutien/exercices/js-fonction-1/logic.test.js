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

// A function that does not exist yet gives a clear message instead of a TypeError.
const fn = (name) => {
  assert.equal(typeof logic[name], 'function', `${name} is not written yet (step 2: the skeleton)`);
  return logic[name];
};

test('1. countFree : le nombre de musées gratuits, et 0 pour une liste vide', () => {
  assert.equal(fn('countFree')(MUSEUMS), 2);
  assert.equal(fn('countFree')([]), 0);
});

test("2. cityOf : la ville, ou 'ville inconnue'", () => {
  assert.equal(fn('cityOf')(MUSEUMS, 'musée de Dinan'), 'Dinan');
  assert.equal(fn('cityOf')(MUSEUMS, 'musée de la marine'), 'Brest');
  assert.equal(fn('cityOf')(MUSEUMS, 'musée inconnu'), 'ville inconnue');
});

test("3. cheapestPaying : le musée payant le moins cher, ou ''", () => {
  assert.equal(fn('cheapestPaying')(MUSEUMS), 'musée de Dinan');
  assert.equal(fn('cheapestPaying')([{ name: 'musée gratuit', city: 'Brest', price: 0 }]), '');
});
