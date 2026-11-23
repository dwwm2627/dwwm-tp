// Tests for style.css — run them with: node --test css.test.js
// One test per question. A correct answer written differently passes: spaces, case, order of rules.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readExercise, cssRules, declarationsFor, valueOf, usesVar } from './css-html-helpers.js';

const css = readExercise('style.css');
const rules = cssRules(css);
const value = (selector, property) => (valueOf(declarationsFor(rules, selector), property) ?? '').toLowerCase();

// The text inside each @media block whose condition contains min-width.
function minWidthBlocks(text) {
  const clean = text.replace(/\/\*[\s\S]*?\*\//g, '');
  const blocks = [];
  for (const match of clean.matchAll(/@media[^{]*min-width[^{]*\{/gi)) {
    let depth = 1;
    let i = match.index + match[0].length;
    const start = i;
    while (i < clean.length && depth > 0) {
      if (clean[i] === '{') depth++;
      if (clean[i] === '}') depth--;
      i++;
    }
    blocks.push(clean.slice(start, i - 1));
  }
  return blocks;
}

test('question 1 : .bouton a pour fond la variable --couleur-principale', () => {
  assert.ok(usesVar(value('.bouton', 'background-color') || value('.bouton', 'background'), '--couleur-principale'),
    '.bouton: background-color: var(--couleur-principale) is missing');
});

test('question 2 : .carte a un padding', () => {
  assert.ok(value('.carte', 'padding') || value('.carte', 'padding-top'), '.carte: padding is missing');
});

test('question 3 : .menu est en Flexbox, avec un espace entre les liens', () => {
  assert.equal(value('.menu', 'display'), 'flex', '.menu: display: flex is missing');
  assert.ok(value('.menu', 'gap'), '.menu: gap is missing');
});

test('question 4 : .galerie est une grille, avec un espace entre les cases', () => {
  assert.equal(value('.galerie', 'display'), 'grid', '.galerie: display: grid is missing');
  assert.ok(value('.galerie', 'gap'), '.galerie: gap is missing');
});

test('question 5 : sur grand écran (@media, min-width), .galerie a trois colonnes', () => {
  const blocks = minWidthBlocks(css);
  assert.ok(blocks.length > 0, '@media (min-width: …) is missing');
  const inside = blocks.flatMap((block) => cssRules(block));
  const columns = (valueOf(declarationsFor(inside, '.galerie'), 'grid-template-columns') ?? '').toLowerCase();
  assert.match(columns, /repeat\(\s*3\s*,|^(\S+\s+){2}\S+$/, 'inside the @media: .galerie { grid-template-columns: repeat(3, 1fr); } is missing');
});
