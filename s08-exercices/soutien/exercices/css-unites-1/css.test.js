// Tests for style.css — run them with: node --test css.test.js
// One test per question. A correct answer written differently passes: spaces, case, order of rules.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readExercise, cssRules, declarationsFor, valueOf } from './css-html-helpers.js';

const rules = cssRules(readExercise('style.css'));
const value = (selector, property) => (valueOf(declarationsFor(rules, selector), property) ?? '').toLowerCase();

test('question 1 : .titre a une taille de texte en rem', () => {
  assert.match(value('.titre', 'font-size'), /^[\d.]+rem$/, '.titre: font-size in rem is missing');
});

test('question 2 : .carte a une largeur en %', () => {
  assert.match(value('.carte', 'width'), /^[\d.]+%$/, '.carte: width in % is missing');
});

test('question 3 : .carte a une bordure dont l’épaisseur est en px', () => {
  const border = value('.carte', 'border') || value('.carte', 'border-width');
  assert.match(border, /(^|\s)[\d.]+px(\s|$)/, '.carte: border with a width in px is missing');
});

test('question 4 : .menu est en Flexbox', () => {
  assert.equal(value('.menu', 'display'), 'flex', '.menu: display: flex is missing');
});

test('question 5 : .menu a un espace en rem entre ses liens, et les centre', () => {
  assert.match(value('.menu', 'gap'), /^[\d.]+rem$/, '.menu: gap in rem is missing');
  assert.equal(value('.menu', 'justify-content'), 'center', '.menu: justify-content: center is missing');
});
