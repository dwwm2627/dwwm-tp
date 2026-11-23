// Tests for logic.js — run them with: node --test logic.test.js
// One test per function: the name of a red test tells which function to work on.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const logic = await import(pathToFileURL(path.join(dir, 'logic.js')).href);

test('1. leftover : les visiteurs qui restent sans groupe complet', () => {
  assert.equal(logic.leftover(14, 4), 2);
  assert.equal(logic.leftover(12, 4), 0);
  assert.equal(logic.leftover(3, 4), 3);
});

test('2. isEven : pair ou impair', () => {
  assert.equal(logic.isEven(8), true);
  assert.equal(logic.isEven(7), false);
  assert.equal(logic.isEven(0), true);
});

test('3. rowClass : une ligne sur deux', () => {
  assert.deepEqual([0, 1, 2, 3].map(logic.rowClass), ['ligne-claire', 'ligne-foncee', 'ligne-claire', 'ligne-foncee']);
});

test('4. clockHour : l\'heure sur une horloge de 12 heures', () => {
  assert.equal(logic.clockHour(15), 3);
  assert.equal(logic.clockHour(9), 9);
  assert.equal(logic.clockHour(12), 12);
  assert.equal(logic.clockHour(0), 12);
});
