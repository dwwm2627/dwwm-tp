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

test('question 1 : .etiquette a pour fond la variable --couleur-accent', () => {
  assert.ok(usesVar(value('.etiquette', 'background-color') || value('.etiquette', 'background'), '--couleur-accent'),
    '.etiquette: background-color: var(--couleur-accent) is missing');
});

test('question 2 : .encart a un padding', () => {
  assert.ok(value('.encart', 'padding') || value('.encart', 'padding-top'), '.encart: padding is missing');
});

test('question 3 : .barre est en Flexbox, le logo à gauche et le lien à droite', () => {
  assert.equal(value('.barre', 'display'), 'flex', '.barre: display: flex is missing');
  assert.equal(value('.barre', 'justify-content'), 'space-between', '.barre: justify-content: space-between is missing');
});

test('question 4 : .vignettes est une grille, avec un espace entre les cases', () => {
  assert.equal(value('.vignettes', 'display'), 'grid', '.vignettes: display: grid is missing');
  assert.ok(value('.vignettes', 'gap'), '.vignettes: gap is missing');
});

test('question 5 : sur grand écran (@media, min-width), .vignettes a plusieurs colonnes', () => {
  const blocks = minWidthBlocks(css);
  assert.ok(blocks.length > 0, '@media (min-width: …) is missing');
  const inside = blocks.flatMap((block) => cssRules(block));
  const columns = (valueOf(declarationsFor(inside, '.vignettes'), 'grid-template-columns') ?? '').toLowerCase();
  assert.match(columns, /repeat\(\s*[2-9]\s*,|^\S+(\s+\S+)+$/, 'inside the @media: .vignettes { grid-template-columns: … } with 2 columns or more is missing');
});
