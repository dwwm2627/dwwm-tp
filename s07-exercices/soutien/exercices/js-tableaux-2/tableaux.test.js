// Tests for tableaux.js — run them with: node --test tableaux.test.js
// One test per function: the name of a red test tells which function to work on.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { total, countEven, doubles, multiplesOf, average } = await import(
  pathToFileURL(path.join(dir, 'tableaux.js')).href
);

test('1. total : la somme, et 0 pour un tableau vide', () => {
  assert.equal(total([10, 25, 8]), 43);
  assert.equal(total([]), 0);
});

test('2. countEven : le nombre de nombres pairs', () => {
  assert.equal(countEven([4, 7, 10, 3]), 2);
  assert.equal(countEven([1, 3, 5]), 0);
});

test('3. doubles : un nouveau tableau, le tableau reçu ne change pas', () => {
  const numbers = [1, 5, 8];
  assert.deepEqual(doubles(numbers), [2, 10, 16]);
  assert.deepEqual(numbers, [1, 5, 8]);
});

test('4. multiplesOf : seulement les nombres que le diviseur divise', () => {
  assert.deepEqual(multiplesOf([3, 4, 9, 10], 3), [3, 9]);
  assert.deepEqual(multiplesOf([3, 4, 9, 10], 7), []);
});

test('5. average : la moyenne, et 0 pour un tableau vide', () => {
  assert.equal(average([10, 20, 60]), 30);
  assert.equal(average([]), 0);
});
