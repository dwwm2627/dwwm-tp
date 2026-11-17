// Tests for tableaux.js — run them with: node --test tableaux.test.js
// One test per function: the name of a red test tells which function to work on.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { totalVisits, countBig, plusTen } = await import(pathToFileURL(path.join(dir, 'tableaux.js')).href);

test('1. totalVisits : la somme des nombres', () => {
  assert.equal(totalVisits([120, 80, 200]), 400);
  assert.equal(totalVisits([]), 0);
});

test('2. countBig : combien de nombres dépassent 100', () => {
  assert.equal(countBig([120, 80, 200]), 2);
  assert.equal(countBig([100, 5]), 0);
});

test('3. plusTen : un nouveau tableau, le tableau reçu ne change pas', () => {
  const visits = [120, 80, 200];
  assert.deepEqual(plusTen(visits), [130, 90, 210]);
  assert.deepEqual(visits, [120, 80, 200]);
});
