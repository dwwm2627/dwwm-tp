// Palier 2 — Nettoyer un musée, partie 1 : un nombre (mardi après-midi)
// Dans le fichier source (un CSV), tous les nombres sont stockés en TEXTE, et certains sont vides.
// toNumber(value) renvoie le nombre correspondant, ou null si value est vide ou n'est pas un nombre.
//   toNumber('1449') → 1449 ; toNumber('') → null ; toNumber('abc') → null

export function toNumber(value) {
  // TODO: replace the line below with your code.
  if(typeof value !== 'string' || value.trim() === ''){
    return null;
  }
const number = Number(value);
return Number.isNaN(number) ? null : number;
}


