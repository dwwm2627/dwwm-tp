// Tests for the folders and files you create in the terminal — run them with: node --test terminal.test.js
// They only look at the result: the folders and files, and what the files contain.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const dir = import.meta.dirname;
const isFolder = (...parts) => fs.existsSync(path.join(dir, ...parts)) && fs.statSync(path.join(dir, ...parts)).isDirectory();
const isFile = (...parts) => fs.existsSync(path.join(dir, ...parts)) && fs.statSync(path.join(dir, ...parts)).isFile();
const content = (...parts) => (isFile(...parts) ? fs.readFileSync(path.join(dir, ...parts), 'utf8').trim() : null);

test('partie A : les dossiers atelier/notes et atelier/images existent', () => {
  assert.ok(isFolder('atelier', 'notes'), 'atelier/notes is missing (mkdir -p)');
  assert.ok(isFolder('atelier', 'images'), 'atelier/images is missing (mkdir -p)');
});

test('partie A : lundi.txt contient Bonjour, sa copie mardi.txt aussi, idees.txt a été renommé', () => {
  assert.equal(content('atelier', 'notes', 'lundi.txt'), 'Bonjour', 'atelier/notes/lundi.txt must contain Bonjour (echo … >)');
  assert.equal(content('atelier', 'notes', 'mardi.txt'), 'Bonjour', 'atelier/notes/mardi.txt must be a copy of lundi.txt (cp)');
  assert.ok(isFile('atelier', 'notes', 'projets.txt'), 'atelier/notes/projets.txt is missing (mv)');
  assert.ok(!isFile('atelier', 'notes', 'idees.txt'), 'atelier/notes/idees.txt should have been renamed (mv)');
});

test('partie B : les dossiers boutique/produits et boutique/clients existent', () => {
  assert.ok(isFolder('boutique', 'produits'), 'boutique/produits is missing');
  assert.ok(isFolder('boutique', 'clients'), 'boutique/clients is missing');
});

test('partie B : liste.txt contient chaise, sauvegarde.txt est sa copie, accueil.txt est dans boutique', () => {
  assert.equal(content('boutique', 'produits', 'liste.txt'), 'chaise', 'boutique/produits/liste.txt must contain chaise');
  assert.equal(content('boutique', 'produits', 'sauvegarde.txt'), 'chaise', 'boutique/produits/sauvegarde.txt must be a copy of liste.txt');
  assert.ok(isFile('boutique', 'accueil.txt'), 'boutique/accueil.txt is missing (mv)');
  assert.ok(!isFile('boutique', 'clients', 'accueil.txt'), 'accueil.txt should have moved out of boutique/clients (mv)');
});
