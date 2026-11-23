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

// Each test also checks that the method is used (the loop version is already written above it).
const uses = (fn, method) => fn.toString().includes(`.${method}(`);

test('1. names : les noms, avec map', () => {
  assert.deepEqual(logic.names(MUSEUMS), logic.namesWithLoop(MUSEUMS));
  assert.ok(uses(logic.names, 'map'), 'names: map is not used');
});

test('2. inCity : les musées de la ville, avec filter', () => {
  assert.deepEqual(logic.inCity(MUSEUMS, 'Brest').map((m) => m.name), ['musée des beaux-arts', 'musée de la marine']);
  assert.deepEqual(logic.inCity(MUSEUMS, 'Lorient'), []);
  assert.ok(uses(logic.inCity, 'filter'), 'inCity: filter is not used');
});

test('3. findByName : le musée, ou undefined, avec find', () => {
  assert.equal(logic.findByName(MUSEUMS, 'musée de Dinan').city, 'Dinan');
  assert.equal(logic.findByName(MUSEUMS, 'musée inconnu'), undefined);
  assert.ok(uses(logic.findByName, 'find'), 'findByName: find is not used');
});

test('4. totalVisits : le total, et 0 pour un tableau vide, avec reduce', () => {
  assert.equal(logic.totalVisits(MUSEUMS), 265934);
  assert.equal(logic.totalVisits([]), 0);
  assert.ok(uses(logic.totalVisits, 'reduce'), 'totalVisits: reduce is not used');
});
