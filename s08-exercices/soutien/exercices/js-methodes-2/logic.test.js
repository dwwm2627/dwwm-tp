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

// A copy of the data, to check that nothing is modified.
const copy = () => structuredClone(MUSEUMS);

test('A1. favoriteNames : les noms des favoris, dans l\'ordre des identifiants', () => {
  assert.deepEqual(logic.favoriteNames(MUSEUMS, ['M04', 'M01']), ['musée de la marine', 'musée de la pêche']);
  assert.deepEqual(logic.favoriteNames(MUSEUMS, []), []);
});

test('A2. namesInCity : filter, puis map', () => {
  assert.deepEqual(logic.namesInCity(MUSEUMS, 'Brest'), ['musée des beaux-arts', 'musée de la marine']);
  assert.deepEqual(logic.namesInCity(MUSEUMS, 'Lorient'), []);
});

test('B1. favoriteCities : les villes des favoris', () => {
  assert.deepEqual(logic.favoriteCities(MUSEUMS, ['M04', 'M01', 'M03']), ['Brest', 'Concarneau', 'Rennes']);
});

test('B2. addVisits : un nouveau tableau, le musée a ses visites en plus', () => {
  const museums = copy();
  const result = logic.addVisits(museums, 'M05', 10);
  assert.notEqual(result, museums, 'addVisits must return a new array');
  assert.equal(result.find((m) => m.id === 'M05').visits, 1217);
  assert.equal(result.find((m) => m.id === 'M01').visits, 29212);
});

test('B2. addVisits : le tableau reçu et ses objets ne changent pas', () => {
  const museums = copy();
  logic.addVisits(museums, 'M05', 10);
  assert.deepEqual(museums, MUSEUMS);
});
