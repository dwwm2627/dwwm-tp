// Tests for index.html and style.css — run them with: node --test mobile-first.test.js
// One test per step. A correct answer written differently passes: spaces, case, order of rules.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

// Reads a file of the exercise (or, for the trainer, of the folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const read = (file) => fs.readFileSync(path.join(dir, file), 'utf8');

// Splits the stylesheet in two: the rules outside any @media (the phone), and the @media blocks.
function split(css) {
  const clean = css.replace(/\/\*[\s\S]*?\*\//g, '');
  const media = [];
  let base = '';
  let i = 0;
  while (i < clean.length) {
    const at = clean.indexOf('@media', i);
    if (at === -1) { base += clean.slice(i); break; }
    base += clean.slice(i, at);
    const open = clean.indexOf('{', at);
    let depth = 1;
    let j = open + 1;
    while (j < clean.length && depth > 0) {
      if (clean[j] === '{') depth++;
      if (clean[j] === '}') depth--;
      j++;
    }
    media.push({ condition: clean.slice(at + 6, open).trim().toLowerCase(), body: clean.slice(open + 1, j - 1) });
    i = j;
  }
  return { base, media };
}

// The final value of a property for a selector, in a piece of CSS (the last declaration wins).
function value(css, selector, property) {
  let result;
  for (const match of css.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
    const selectors = match[1].split(',').map((s) => s.trim().toLowerCase());
    if (!selectors.includes(selector)) continue;
    for (const part of match[2].split(';')) {
      const index = part.indexOf(':');
      if (index !== -1 && part.slice(0, index).trim().toLowerCase() === property) {
        result = part.slice(index + 1).trim().toLowerCase().replace(/\s+/g, ' ');
      }
    }
  }
  return result;
}

const { base, media } = split(read('style.css'));
const wide = media.filter((m) => /min-width/.test(m.condition)).map((m) => m.body).join('\n');

test('étape 1 : la balise meta viewport est dans index.html', () => {
  const html = read('index.html').replace(/<!--[\s\S]*?-->/g, '');
  assert.match(html, /<meta[^>]*name=["']viewport["'][^>]*content=["'][^"']*width=device-width/i, 'meta viewport is missing');
});

test('étape 2 : pour le téléphone, .cartes est une grille, hors de toute @media', () => {
  assert.equal(value(base, '.cartes', 'display'), 'grid', '.cartes: display: grid outside @media is missing');
});

test('étape 3 : une @media (min-width: ...), et pas de max-width', () => {
  assert.ok(media.some((m) => /min-width/.test(m.condition)), 'no @media (min-width: ...)');
  assert.ok(!media.some((m) => /max-width/.test(m.condition)), 'mobile first uses min-width, not max-width');
});

test('étape 3 : dans la @media, .cartes a trois colonnes', () => {
  const columns = value(wide, '.cartes', 'grid-template-columns') ?? '';
  assert.match(columns, /^(repeat\(\s*3\s*,\s*1fr\s*\)|1fr 1fr 1fr)$/, '.cartes: three columns inside @media are missing');
});

test('étape 4 : le menu en colonne pour le téléphone, en ligne dans la @media', () => {
  assert.equal(value(base, '.menu', 'display'), 'flex', '.menu: display: flex outside @media is missing');
  assert.equal(value(base, '.menu', 'flex-direction'), 'column', '.menu: flex-direction: column outside @media is missing');
  assert.equal(value(wide, '.menu', 'flex-direction'), 'row', '.menu: flex-direction: row inside @media is missing');
});
