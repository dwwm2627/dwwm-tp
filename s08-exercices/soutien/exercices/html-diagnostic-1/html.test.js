// Tests for index.html — run them with: node --test html.test.js
// One test per question. A correct answer written differently passes: case, quotes, order of attributes.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readExercise, stripHtmlComments, tags } from './css-html-helpers.js';

const html = stripHtmlComments(readExercise('index.html'));
const textOf = (name) => (new RegExp(`<${name}\\b[^>]*>([\\s\\S]*?)</${name}>`, 'i').exec(html)?.[1] ?? '').trim();

test('question 1 : la langue de la page est le français, et la page a un titre', () => {
  assert.equal((tags(html, 'html')[0]?.lang ?? '').toLowerCase(), 'fr', '<html lang="fr"> is missing');
  assert.ok(textOf('title') !== '', '<title> is empty');
});

test('question 2 : la page a un header, un nav, un main et un footer', () => {
  for (const name of ['header', 'nav', 'main', 'footer']) {
    assert.equal(tags(html, name).length, 1, `exactly one <${name}> is expected`);
  }
});

test('question 3 : un seul h1, puis des h2', () => {
  assert.equal(tags(html, 'h1').length, 1, 'exactly one <h1> is expected');
  assert.ok(tags(html, 'h2').length >= 2, 'at least two <h2> are expected');
});

test('question 4 : chaque image a un texte alternatif', () => {
  const images = tags(html, 'img');
  assert.ok(images.length > 0, 'the <img> of the logo is missing');
  for (const image of images) {
    assert.ok((image.alt ?? '').trim() !== '', `<img src="${image.src}"> has no alt text`);
  }
});

test('question 5 : chaque champ du formulaire a son label', () => {
  const fields = tags(html, 'input').filter((field) => field.type !== 'submit');
  assert.ok(fields.length >= 2, 'the two <input> are missing');
  const targets = tags(html, 'label').map((label) => label.for);
  for (const field of fields) {
    assert.ok(field.id, `<input name="${field.name}"> has no id`);
    assert.ok(targets.includes(field.id), `no <label for="${field.id}">`);
  }
});
